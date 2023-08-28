
local component = require '@common.base.gui.component'
local ctrl_util = require '@common.base.gui.control_util'
local get_child_if = ctrl_util.get_child_if

local streamer = require 'ui_ext.plugn.streamer'

local template = component{
    base.ui.panel'panel'{
        static = false,
        swallow_event = true,
        layout = {
            width = 339,
            height = 711,
            margin = {
                left = 37,
                right = 37
            }
        },
        image = '@smallcard_choose_one/image/Bg_jineng_S.png',
        event = {
            on_click = function() end
        },
    },
    prop = {
        __id = 'element',
    },
    method = {
        init = function(self)
            if __lua_state_name == 'StateEditor' then-- 编辑器跳过
                return
            end
            base.next(function()
                -- 初始化全部UI
                self.data.components = {
                    element_name = {},
                    element_icon = {},
                    element_des = {},
                }
                get_child_if(self, function(ctrl)
                    if self.data.components[ctrl.__id] then
                        table.insert(self.data.components[ctrl.__id],ctrl)
                    end
                    return false
                end)
            end)
            self['@panel.event.on_click'] = function()
                self:emit('on_click',self)
            end
        end,
        on_destroy = function(self)
            self:hide_streamer()
        end,
        update_info = function(self, link, source)
            local components = self.data.components
            local element_names = components.element_name
            local element_icons = components.element_icon
            local element_dess = components.element_des

            local cache = base.eff.cache(link)
            if not cache then
                return log.info('错误的选项信息！',link)
            end
            local name = cache.Name
            local icon = cache.Image
            local frame = cache.FrameImage
            local des = cache.Description
            if cache.NodeType == 'LootSpell' and cache.UseSkillDescription then
                local skill_cache = base.eff.cache(cache.SpellType)
                name = base.i18n.get_text(skill_cache.Name)
                icon = skill_cache.IconName
                local tip = skill_cache.Description
                local skill = source and source:find_skill(cache.SpellType)
                local level = 1
                if skill then
                    level = skill:get_level() + 1
                end
                if tip and #tip > 0 then
                    tip = tip[math.min(#tip, level)]
                    tip = base.i18n.get_text(tip)
                    if skill_cache.DescriptionParams then
                        local params = {}
                        for _, value in ipairs(skill_cache.DescriptionParams) do
                            table.insert(params, value(self))
                        end
                        tip = string.format(tip, table.unpack(params))
                    end
                end
                des = tip or ""
            end

            local quality = cache.Quality or 0
            local quality_bg_list = base.eff.cache("$$smallcard_choose_one.link_node.n选1奖励图片.LinkNodeString")
            local quality_list = base.eff.cache("$$smallcard_choose_one.link_node.n选1奖励图片.root")
            local bg_image = ""
            for i, temp_rare in ipairs(quality_list) do
                if temp_rare and temp_rare <= quality then
                    bg_image = quality_bg_list[i] or ""
                end
            end

            for i = 1,#element_names do
                element_names[i]:set_text(name)
            end
            for i = 1,#element_icons do
                element_icons[i]:set_image(icon,frame)
            end
            for i = 1,#element_dess do
                element_dess[i]:set_text(des)
            end

            self['@panel.image'] = bg_image
            self:hide_streamer()
        end,
        show = function(self)
            self['@panel.show'] = true
        end,
        hide = function(self)
            self['@panel.show'] = false
        end,
        -- 隐藏流光
        hide_streamer = function(self)
            if self.data.streamer then
                self.data.streamer:hide()
                self.data.streamer = nil
            end
        end,
        -- 开启流光
        open_streamer = function(self)
            self:hide_streamer()
            local _,_,w,h = self['@panel']:rect()
            self.data.streamer = streamer:new()
            self.data.streamer:set_direct_scale{w/73, h/130}
            self.data.streamer:set_effect('effect/effect_new/effect_ui/eff_ui_biankuang006/particle.effect')
            self.data.streamer:set_speed(1.25)
            self.data.streamer:attach_to(self['@panel'])
        end,
    },
}

return template
