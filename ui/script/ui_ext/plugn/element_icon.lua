
local component = require '@common.base.gui.component'

local template = component{
    base.ui.panel'icon'{
        layout = {
            width = 112,
            height = 112,
        },
        image = '@smallcard_choose_one/image/治疗.png',
        base.ui.panel'frame'{
            layout = {
                grow_width = 1,
                grow_height = 1,
            },
            image = '@smallcard_choose_one/image/品质框=紫色.png',
        },
    },
    prop = {
        __id = 'element_icon',
    },
    method = {
        init = function(self)
        end,
        set_image = function(self,image,frame)
            self['@icon.image'] = image
            self['@frame.image'] = frame
        end,
    },
}

return template
