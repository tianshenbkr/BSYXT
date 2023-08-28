

--旧版，先废弃了，有用到了重新写一遍
--require 'ext.ui.选择面板.选择面板1'


--require 'ext.ui.选择面板.选择面板2'

local ui_client = require 'ui.client.util'
local ui_server = require 'ui.server.util'


local select = require 'ext.ui.选择面板.选择面板3'
local select_shu = require 'ext.ui.选择面板.选择面板-竖'
local select_duo = require 'ext.ui.选择面板.选择面板-多'





local animationing = false
local info_wait_act = {}
local player_selecting = {}
local py_select_info = {}
local HANDLE = 0
base.game:event( '玩家-创建选择', function(_,py,info)
    HANDLE = HANDLE + 1
    info._handle = HANDLE
    print('玩家-创建选择', py, info)
    if not py_select_info[py] then
        py_select_info[py] = {}
    end
    table.insert(py_select_info[py],info)
    --info.select_type = nil

    if not player_selecting[py] then
        player_selecting[py] = true
    else
        print('player_selecting[py] return')
        return
    end
    if py ~= ac.player.self then
        return
    end
    if animationing then
        info_wait_act = info
        return
    end

    if info.select_type == '竖' then
        select_shu.choose_act(py,py_select_info[py][1])
    elseif info.select_type == '多' then
        select_duo.choose_act(py,py_select_info[py][1])
    else
        select.choose_act(py,py_select_info[py][1])
    end
end)



base.game:event( '本地消息-选择面板隐藏动画开始', function()
    animationing = true
end)

base.game:event( '本地消息-多选面板隐藏动画结束', function()
    animationing = false
    if info_wait_act then
        local info = info_wait_act
        if info.select_type == '竖' then
            select_shu.choose_act(ac.player.self, info_wait_act)
        elseif info.select_type == '多' then
            select_duo.choose_act(ac.player.self, info_wait_act)
        else
            select.choose_act(ac.player.self,info_wait_act)
        end
        info_wait_act = nil
    end
end)



base.game:event( '玩家-多选', function(_,py,index)
    local info = py_select_info[py][1]
    if py:is_self() then
        select.act_hide(py_select_info[py][1])
        select_shu.act_hide(py_select_info[py][1])
        select_duo.act_hide(py_select_info[py][1])
    end
    if not py_select_info[py] then
        print('not py_select_info[py] return')
        return
    end
    if not info then return end
    table.remove(py_select_info[py],1)
    player_selecting[py] = nil
    if not info then
        print('not data return')
        return
    end
    if info.on_select then
        info.on_select(py,info,index)
    else
        print('没有找到on_select',info.title)
    end

    if py:is_self() then
        info_wait_act = nil
        if py_select_info[py][1] then
            if animationing then
                info_wait_act = py_select_info[py][1]
                return
            end
            if py_select_info[py][1].select_type == '竖' then
                select_shu.choose_act(py,py_select_info[py][1])
            elseif info.select_type == '多' then
                select_duo.choose_act(py,py_select_info[py][1])
            else
                select.choose_act(py,py_select_info[py][1])
            end
        end
    end
end)

base.game:event( 'UI-重载', function()
    player_selecting[ac.player.self] = nil
end)


--[[
ac.wait(33,function()
    local list = {
        ['ch'] = function(handle,id)
            local py = ui_server.player
            base.game:event_notify('玩家-多选',py,id)
        end,
    }
    ui_server.register_event('chpl',list)
    local py = ui_server.player
end)
]]


base.proto.__mxh_choose_toast = function(msg)
    local text = msg.text
    local icon = msg.icon
    local item_link = msg.item_link
    local cache = base.eff.cache(item_link)
    if cache then
        text = text..'<#FFCC49:'..base.i18n.get_text(cache.Name)..':>'
    end
    if icon == 'yes' then
        toast['@icon_show.show'] = true
        toast['@icon_image.image'] = '@smallcard_store/image/yes.png'
    elseif icon == 'no' then
        toast['@icon_show.show'] = true
        toast['@icon_image.image'] = '@smallcard_store/image/no.png'
    else
        toast['@icon_show.show'] = false
    end
    toast:show(text)
end