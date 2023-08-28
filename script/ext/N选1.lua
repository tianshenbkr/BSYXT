
--玩家多选信息，列表
local py_select_data = {}

--做个简单的验证
local HANDLE = 0

base.game:event( 'N选1-对玩家创建', function(_,py, data)
end)


--N选1
base.n_pick_o = {
    --[[
        local data = {
            --类型
            type = 'free',

            --需要点击确认
            need_accept = nil,

            --客户端获取后，会根据key处理一下数据
            key = 'pick_hero',

            --显示标题(string)
            title = nil,

            发送给客户端的结构，只能传基础数据
            info = {
                type = 'free',
                key = 'pick_hero',
                list = {
                },
            }

            选择后执行的function，如果act是table，则会执行对应id的function
            act = function(info,id)

            --当开始选择，部分N选1会因为前一次选择而改变选项条件，可以把生成选项放在这里
            on_start = function(self)
        }
    ]]
    create = function( py, data)
        if not py then
            log.error('[N选1]没有玩家')
            return
        end
        --base.game:event_notify( 'N选1-对玩家创建', player, data)
        local info = data.info
        if not info.key and #info.list <= 0 then
            log.error('[N选1]选项数量为0 return')
            return
        end
        HANDLE = HANDLE + 1
        info.HANDLE = HANDLE
        data.HANDLE = HANDLE
        data.player = py
        --log.info('[server] npo create', py, HANDLE)
        if not py_select_data[py] then
            py_select_data[py] = {}
        end
        table.insert(py_select_data[py], data)

        --把选项显示的信息发送到客户端
        if #py_select_data[py] == 1 then
            if data.on_start then
                data.on_start(data)
            end
            py:ui 'rpg_npo_info' {
                info = data.info,
            }
        end
    end,
    act = function( py, data)
    end,
}


--接收UI信息
base.ui.proto.rpg_choose_panel_click = function ( py, msg)
    local HANDLE = msg.HANDLE
    local id = msg.id
    
    if not py_select_data[py] then
        log.info('[choose_panel] not py_select_data[py] return')
        return
    end
    local data_list = py_select_data[py]
    local data = data_list[1]
    if not data then
        log.info('[choose_panel] not info return')
        return
    end

    if data.HANDLE ~= HANDLE then
        log.info('[choose_panel] handle ~=', data.HANDLE, HANDLE)
        return
    end

    local func = nil
    if type(data.act) == 'function' then
        func = data.act
    elseif type(data.act) == 'table' then
        if data.act[id] then
            func = data.act[id]
        else
            log.error('错误-N选1没有act', id)
        end
    end

    table.remove(data_list, 1)

    --保护一下，防止逻辑断掉
    xpcall(
        func,
        function(err)
            log.info(string.format("多选调用失败：%s", err))
        end,
        data, id
    )

    --有队列，继续发送
    if #data_list>0 and data_list[1] then
        local new_data = data_list[1]
        if new_data.on_start then
            new_data.on_start(new_data)
        end
        py:ui 'mxh_npo_info' {
            info = new_data.info,
        }
    end
    
end


