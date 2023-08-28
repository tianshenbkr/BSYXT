
local component = require '@common.base.gui.component'
local ctrl_util = require '@common.base.gui.control_util'
local getset = component.getset
local set = ctrl_util.set_ctrl_prop
local get_child_if = ctrl_util.get_child_if
local alias_by = component.alias_by
local bind = component.bind
local move_to_new_parent = require('@common.base.gui.control_util').move_to_new_parent

local message = component {
    base.ui.label 'label' {
        font = {
            size = 30,
            color = 'rgba(255,255,255,0.8)',
            shadow = { color='rgba(0,0,0,0.4)', offset={0,1} },
            wrap = false,
        },
        layout = {
            col_self = 'center',
            height = 60,
            row_self = 'center',
            width = 660,
        },
        image = '@smallcard_inventory/image/toast2.png',
        bind = {
            text = 'text'
        }
    },

    method = {
        init = function (self)
            
        end,
    }
}

local template = component {
    base.ui.panel'panel'{
        z_index = 999999,
        layout = {
            col_content = 'start',
            col_self = 'start',
            direction = 'col',
            height = 240,
            relative = {
                [1] = 0,
                [2] = 237,
            },
            row_self = 'center',
            width = 660,
        },
    },
    data = {
        tips = {}
    },
    prop = {
    },

    method = {
        init = function(self)

        end,
        set_show = function(self,show)
            self['@panel.show'] = show
        end,

        send_tip = function (self, tip, items)
            if #self.data.tips >= 4 then
                self.data.tips[1]:remove()
                table.remove(self.data.tips, 1)
            end

            local message = message:new()
            move_to_new_parent(message, self)

            if items and #items > 0 then
                local text = ''
                local mp = {}
                for k,v in pairs(items) do
                    if v.type and v.type == 'item' then
                        v = v.link
                    end
                    if mp[v] == nil then
                        mp[v] = 1
                    else 
                        mp[v] = mp[v] + 1
                    end
                end
                for k,v in pairs(mp) do
                    text = text..' '..base.i18n.get_text(base.eff.cache(k).Name)
                    if v > 1 then
                        text = text..'*'..v
                    end
                end
                message.bind.text = '获得了'..'<#FFCC49:'..text..':>'

            else
                message.bind.text = tip
            end

            table.insert(self.data.tips, message)
            base.timer(4000, 1, function ()
                message:remove()
                for k,v in pairs(self.data.tips) do
                    if v == message then
                        table.remove(self.data.tips, k)
                    end
                end
            end)
        end
    },
}

-- 创建UI
local ui = template:new()

base.proto.send_tip_on_client = function (msg)
    ui:send_tip(msg.tip, msg.items)
end

base.game:event('玩家_消息弹出', function (_, msg)
    if msg.player == base.local_player() then
        local items = {}
        for k,v in pairs(msg.items)  do
            if v.type and v.type == 'item' then
                table.insert(items, v.link)
            end
        end
        ui:send_tip(msg.tip, items)
    end
end)