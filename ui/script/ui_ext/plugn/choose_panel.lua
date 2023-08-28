
local component = require '@common.base.gui.component'
local ctrl_util = require '@common.base.gui.control_util'
local get_child_if = ctrl_util.get_child_if
local move_to_new_parent = ctrl_util.move_to_new_parent

local template = component{
    base.ui.panel'panel'{
        layout = {
            grow_width = 1,
            grow_height = 1,
        },
    },
    prop = {
        __id = 'choose_panel',
    },
    method = {
        init = function(self)
            if __lua_state_name == 'StateEditor' then-- 编辑器跳过
                return
            end
            base.next(function()
                -- 初始化全部UI
                self.data.components = {
                    element = {},
                }
                get_child_if(self, function(ctrl)
                    if self.data.components[ctrl.__id] then
                        table.insert(self.data.components[ctrl.__id],ctrl)
                    end
                    return false
                end)
                self:init_ui_event()
            end)
        end,
        init_ui_event = function(self)
            local components = self.data.components
            local elements = components.element
            for i = 1,#elements do
                elements[i]:connect('on_click', function(_,ctrl)
                    self:emit('element_on_click',ctrl,i)
                end)
            end
        end,
        update_info = function(self, data, source)
            local length = #data
            local components = self.data.components
            local elements = components.element
            for i = 1,#elements do
                if i <= length then
                    elements[i]:show()
                    elements[i]:update_info(data[i], source)
                else
                    elements[i]:hide()
                end
            end 
        end,
    },
}

return template
