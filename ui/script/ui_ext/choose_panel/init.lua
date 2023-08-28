

--require 'ui_ext.choose_panel.choose_panel'

local select_panel = require 'ui_ext.choose_panel.gui_choose_panel'
local select_button = require 'ui_ext.choose_panel.gui_choose_button'
local info_process = require 'ui_ext.choose_panel.info_process'


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



--接收N选1信息
base.proto.rpg_npo_info = function(msg)
    local choose_info = msg.info
    log.info('[client] mxh_npo_info', choose_info.handle)
    --信息加工
    info_process(choose_info)
    --面板显示
    select_panel.act_show(choose_info)
end
