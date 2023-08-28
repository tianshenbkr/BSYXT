
local component = require '@common.base.gui.component'

local template = component{
    base.ui.panel'close_n_pick_1'{
        static = false,
        swallow_event = true,
        layout = {
            width = 48,
            height = 48,
        },
        event = {
            on_click = function()end,
        },
        image = '@smallcard_choose_one/image/close.png',
    },
    method = {
        init = function(self)
            self['@close_n_pick_1.event.on_click'] = function()
                base.game:server '__player_close_n_pick_one'{}
            end
        end,
    },
}

return template
