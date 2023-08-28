

local function 多选范例()
    for n = 3, 20 do
        base.rpg_test.register('多选测试x' .. math.floor(n), function()
            utils.each_player(function(py)
                local data = {
                    info = {
                        type = 'free',
                        need_accept = true,--(n%2==0)and true or nil,
                        title = '这是一个多选测试',
                        list = {
                        },
                    },
                    act = function(data,id)
                        log.info('选择了', id)
                    end,
                }
                for i = 1,n do
                    table.insert(data.info.list, {
                        title = '选项' .. i,
                        icon = 'image/npc.png',
                        tip = 'asdfasdfsafsafsadf',
                    })
                end
                base.n_pick_o.create( py, data)
            end)
        end, 2)
    end
    --[[
    base.rpg_test.register('多选测试2', function()
        utils.each_player(function(py)
            local data = {
                info = {
                    type = 'free',
                    list = {
                        {
                            title = '选项1',
                            icon = 'image/npc.png',
                            tip = '不用确认',
                        },
                        {
                            title = '选项2',
                            icon = 'image/npc.png',
                            tip = '不用确认',
                        },
                    },
                },
                act = function(data,id)
                    log.info('选择了', id)
                end,
            }
            base.n_pick_o.create( py, data)
        end)
    end)]]
end
--多选范例()

