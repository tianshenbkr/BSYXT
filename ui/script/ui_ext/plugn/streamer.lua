local component = require '@common.base.gui.component'
local ctrl_util = require '@common.base.gui.control_util'
local alias_by = component.alias_by
local set = ctrl_util.set_ctrl_prop
local move_to_new_parent = ctrl_util.move_to_new_parent

local template = component 'steamer' {
    base.ui.particle {
        show = false,
        layout = {
            grow_width = 1,
            grow_height = 1,
            col_self = 'center',
            row_self = 'center',
            translate = {0.5, 0.5}
        },
        effect = alias_by.effect,
        play = alias_by.play,
        direct_scale = alias_by.direct_scale,
        speed = alias_by.speed
    },
    method = {
        init = function(self)
            self:set_effect('effect/effect_new/effect_ui/eff_ui_biankuang006/particle.effect')
        end,
        attach_to = function(self, ui)
            move_to_new_parent(self.base, ui)
            self.show = true
        end,
        set_effect = function(self, effect)
            self.effect = effect
            self.play = true
        end,
        set_speed = function(self, speed)
            self.speed = speed
        end,
        set_direct_scale = function(self, direct_scale)
            self.direct_scale = direct_scale
        end,
        hide = function(self)
            self:destroy()
        end
    }
}

return template
