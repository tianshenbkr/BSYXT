
local component = require '@common.base.gui.component'

local template = component{
    base.ui.label'panel'{
        layout = {
            width = -1,
            height = 36,
        },
        font = {
            size = 36,
            color = '#ffffff'
        },
        text = '奖励名称',
    },
    prop = {
        __id = 'element_name',
    },
    method = {
        init = function(self)
        end,
        set_text = function(self,text)
            self['@panel.text'] = text
        end,
    },
}

return template
