
local component = require '@common.base.gui.component'

local template = component{
    base.ui.label'panel'{
        layout = {
            width = 300,
            height = -1,
        },
        font = {
            size = 36,
            color = '#ffffff'
        },
        text = '奖励描述奖励描述奖励描述奖励描述奖励描述奖励描述奖励描述奖励描述',
    },
    prop = {
        __id = 'element_des',
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
