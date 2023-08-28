
local component = require '@common.base.gui.component'
local ctrl_util = require '@common.base.gui.control_util'
local getset = component.getset
local set = ctrl_util.set_ctrl_prop
local get_child_if = ctrl_util.get_child_if

local template = component{
    base.ui.panel'panel'{
        static = false,
        swallow_event = true,
        layout = {
            grow_width = 1,
            grow_height = 1,
        },
        color = 'rgba(0,0,0,0.4)',
    },
    method = {
        init = function(self)
            if __lua_state_name == 'StateEditor' then-- 编辑器跳过
                return
            end
            base.proto.__player_open_n_pick_one = function(msg)
                local source = msg.source and base.unit(msg.source)
                local data = msg.data
                if self.data.components then
                    self:update_data(data, source)
                    self:show()
                else
                    self.data.delay_update_show = {data = data, source = source}
                end
            end
            base.next(function()
                -- 初始化全部UI
                self.data.components = {
                    confirm = {},
                    choose_panel = {},
                }
                get_child_if(self, function(ctrl)
                    if self.data.components[ctrl.__id] then
                        table.insert(self.data.components[ctrl.__id],ctrl)
                    end
                    return false
                end)

                base.proto.__player_close_n_pick_one = function(msg)
                    self:hide()
                end

                self:init_ui_event()

                if self.data.delay_update_show then
                    self:update_data(self.data.delay_update_show.data, self.data.delay_update_show.source)
                    self.data.delay_update_show = nil
                    self:show()
                end
            end)
        end,
        init_ui_event = function(self)
            local components = self.data.components
            local choose_panel = components.choose_panel
            local confirm = components.confirm
            for i = 1,#choose_panel do
                choose_panel[i]:connect('element_on_click', function(_,ctrl,i)
                    self:element_on_click(ctrl,i)
                end)
            end
            for i = 1,#confirm do
                confirm[i]:connect('on_click', function(_)
                    local index = self.data.check_index
                    if index then
                        base.game:server '__player_choose_n_pick_one'{
                            index = index,
                        }
                    end
                end)
            end
        end,
        on_destroy = function(self)
            base.proto.__player_open_n_pick_one = nil
            base.proto.__player_close_n_pick_one = nil
        end,
        show = function(self)
            self['@panel.show'] = true
        end,
        hide = function(self)
            self['@panel.show'] = false
        end,
        update_data = function(self, data, source)
            log.debug(data,source)
            local components = self.data.components
            local choose_panel = components.choose_panel
            local confirm = components.confirm
            for i = 1,#choose_panel do
                choose_panel[i]:update_info(data, source)
            end
            self.data.check_index = nil
            self.data.last_check_ctrl = nil
        end,
        element_on_click = function(self,ctrl,index)
            if ctrl == self.data.last_check_ctrl then
                return
            end
            self.data.check_index = index
            if self.data.last_check_ctrl then
                self.data.last_check_ctrl:hide_streamer()
            end
            self.data.last_check_ctrl = ctrl
            ctrl:open_streamer()
        end,
    },
}

return template
