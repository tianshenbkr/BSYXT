
local component = require '@common.base.gui.component'

local template = component{
    base.ui.label'panel'{
        static = false,
        swallow_event = true,
        layout = {
            width = 317,
            height = 87,
        },
        font = {
            size = 36,
            color = '#ffffff'
        },
        image = '@smallcard_choose_one/image/Bth_anniu_huise.png',
        text = '确认',
        event = {
            on_click = function() end
        },
    },
    prop = {
        __id = 'confirm',
    },
    method = {
        init = function(self)
            if __lua_state_name == 'StateEditor' then-- 编辑器跳过
                return
            end
            self['@panel.event.on_click'] = function()
                self:emit('on_click')
            end
        end,
    },
}

return template
