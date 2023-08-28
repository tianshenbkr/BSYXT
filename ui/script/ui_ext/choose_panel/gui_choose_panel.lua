

--local ui_client = require 'ui.client.util'
--local ui_server = require 'ui.server.util'
local ctrl_util = require '@common.base.gui.control_util'
local component = require '@common.base.gui.component'
local streamer = require 'ui_ext.plugn.streamer'
local getset = component.getset
local set = ctrl_util.set_ctrl_prop
local get = ctrl_util.get_ctrl_prop

local panel = nil
local list = {}
local button_dis = 15
local button_width = 400
local button_height = 550
local button_title_h = 30
local button_icon_len = 256
local button_in_dis = 10

local function init_panel()
    local img_btm = 'image/common/bantouming.png'
    local template = component {
        base.ui.panel 'panel' {
            layout = {
                relative = {
                    [1] = 0,
                    [2] = -50,
                },
                width = 1,
                height = 1
            },
            z_index = 12000,
            show = true,
            --image = img_btm,
            -- 背景
            --base.ui.panel{
            --    layout = {
            --        grow_width = 1,
            --        grow_height = 1,
            --    },
            --    --image = img_btm,
            --    --swallow_events = 'on_click',
            --    --event = {
            --    --    on_click = function()
            --    --        log.info('click')
            --    --    end,
            --    --},
            --},

            --顶部标题
            base.ui.label 'panel_title' {
                layout = {
                    col_self = 'start',
                    relative = {0,-370},
                    width = 500,
                    height = 60,
                },
                image = img_btm,
                text = '',
                font_size = 30,
                font = {
                    size = 36,
                    color = 'rgba(255,255,255,0.85)',
                },
                align = 'center',
            },
            
            base.ui.button 'button_accept' {
                layout = {
                    relative = {0,370},
                    width = 300,
                    height = 80,
                },
                swallow_event = true,
                image = img_btm,
                base.ui.label {
                    layout = {
                        grow_width = 1,
                        grow_height = 1,
                    },
                    text = '确定',
                    font_size = 15,
                    align = 'center',
                    font = {
                        size = 36,
                        color = 'rgba(255,255,255,0.85)',
                    },
                },
                swallow_event = true,
                event = {
                    on_click = function()
                        base.game:event_notify('mxh_多选面板确认')
                    end,
                },
            },
            --[[
            base.ui.button 'button_cancel' {
                layout = {
                    relative = {0,370},
                    width = 300,
                    height = 80,
                },
                image = img_btm,
                base.ui.label {
                    layout = {
                        grow_width = 1,
                        grow_height = 1,
                    },
                    text = '确定',
                    font_size = 15,
                    align = 'center',
                    font = {
                        size = 36,
                        color = 'rgba(255,255,255,0.85)',
                    },
                },
                swallow_events = 'on_click',
                event = {
                    on_click = function()
                        base.game:event_notify('mxh_多选面板确认')
                    end,
                },
            },]]

            --选项页
            base.ui.panel 'button_panel' {
                layout = {
                    --direction = 'row',
                    row_content = 'center',
                },
                --image = img_btm,
                array = 1,

                --按钮
                base.ui.button 'choose_button' {
                    layout = {
                        width = button_width,
                        height = button_height,
                        --margin = {
                        --    left = button_dis,
                        --    right = button_dis,
                        --}
                    },
                    --没有透明，走ui_move算了
                    --transition = {
                    --    position = {
                    --        func = { .22,.82,.42,1.23},
                    --        time = 200,
                    --    },
                    --},
                    image = img_btm,
                    swallow_event = true,
                    
                    base.ui.label 'c_title' {
                        layout = {
                            relative = {0,button_in_dis},
                            grow_width = 1,
                            height = button_title_h,
                            col_self = 'start',
                            row_self = 'center',
                        },
                        text = 'title',
                        font = {
                            size = 25,
                            color = 'rgba(255,255,255,0.85)',
                        },
                    },
                    base.ui.label 'c_icon' {
                        layout = {
                            relative = {0,button_in_dis*2 + button_title_h},
                            width = button_icon_len,
                            height = button_icon_len,
                            col_self = 'start',
                            row_self = 'center',
                        },
                        --text = 'icon',
                        --font = {
                        --    size = 36,
                        --    color = 'rgba(255,255,255,0.85)',
                        --},
                        image = img_btm,
                    },
                    base.ui.label 'c_tip' {
                        layout = {
                            relative = {0,button_in_dis*3 + button_title_h + button_icon_len},
                            grow_width = 0.9,
                            height = button_height - button_in_dis*4 - button_title_h - button_icon_len,
                            col_self = 'start',
                            row_self = 'center',
                        },
                        font = {
                            size = 16,
                            color = 'rgba(255,255,255,0.85)',
                        },
                        image = img_btm,
                        text = 'tippppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp',
                    },

                    method = {
                        -- 初始化
                        --init = function(self)     
                        --    self.show = false
                        --end,
                        on_destroy = function(self)
                            self:hide_streamer()
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
                    event = {
                        on_click = function()
                            log.info('click')
                        end,
                    },
                },
            },
        },
        --[[]]
        method = {
            -- 初始化
            init = function(self)     
                self['@panel.show'] = false
            end,
            set_select = function(self, msg)

            end,
            set_slot_count = function (self, count)
                panel['@button_panel.array'] = count
            end,
            set_streamer = function(self, id)
                self:clear_streamer()
                local bts = self.part.choose_button
                local bt = bts[id]
                if bt then
                    local _,_,w,h = bt:rect()
                    self.data.streamer = streamer:new()
                    self.data.streamer:set_direct_scale{w/73, h/130}
                    self.data.streamer:set_effect('effect/effect_new/effect_ui/eff_ui_biankuang006/particle.effect')
                    self.data.streamer:set_speed(1.25)
                    self.data.streamer:attach_to(bt)
                end
            end,
            clear_streamer = function(self)
                if self.data.streamer then
                    self.data.streamer:hide()
                    self.data.streamer = nil
                end
            end,
    
            set_data = function (self,data)
                self:set_slot_count( #data.list)

                local HANDLE = data.HANDLE
                local ui_button = self.part.choose_button
                local ui_title = self.part.c_title
                local ui_icon = self.part.c_icon
                local ui_tip = self.part.c_tip

                local count = #data.list
                local scale = 1
                local tc = false
                if count <= 5 then
                elseif count <= 7 then
                    scale = 5/count
                else
                    tc = true
                    scale = 0.7
                end
                for _, bt in ipairs(ui_button) do 
                    set(bt,{'layout','width'}, button_width*scale)
                    set(bt,{'layout','height'}, button_height*scale)
                    set(ui_title[_],{'layout','relative'}, {0,button_in_dis*scale})
                    set(ui_title[_],{'layout','height'}, button_title_h*scale)
                    
                    set(ui_icon[_],{'layout','relative'}, {0,(button_in_dis*2+button_title_h)*scale})
                    set(ui_icon[_],{'layout','width'}, button_icon_len*scale)
                    set(ui_icon[_],{'layout','height'}, button_icon_len*scale)
                    
                    set(ui_tip[_],{'layout','relative'}, {0,(button_in_dis*3 + button_title_h + button_icon_len)*scale})
                    set(ui_tip[_],{'layout','height'}, (button_height - button_in_dis*4 - button_title_h - button_icon_len)*scale)
                end

                local n1 = math.ceil(count/2)
                local n2 = count-n1
                for index, info in ipairs(data.list) do 
                    local bt = ui_button[index]
                    local start_x = 0
                    local start_y = 0
                    local target_x = 0
                    --target_x = (button_width+button_dis)*(index-((count+1)/2))*scale
                    local target_y = 0
                    if tc then
                        if index <= n1 then
                            target_x = (button_width+button_dis)*(index-((n1+1)/2))
                            target_y = -(button_height+button_dis)/2
                        else
                            target_x = (button_width+button_dis)*((index-n1)-((n2+1)/2))
                            target_y = (button_height+button_dis)/2
                        end
                    else
                        target_x = (button_width+button_dis)*(index-((count+1)/2))
                    end
                    target_x = target_x * scale
                    target_y = target_y * scale

                    if bt then
                        set(ui_icon[index], 'image', info.icon or img_btm)
                        set(ui_title[index], 'text', info.title or '')
                        set(ui_tip[index], 'text', info.tip or '')

                        --set( bt, {'layout','relative'}, {target_x, 0})
                        --[[]]
                        utils.ui_move{
                            ui = bt,
                            start = { x=start_x, y=start_y, alpha = 0},
                            target = { x=target_x, y=target_y, alpha = 1},
                            time = 0.3,
                            type = 'OutBack',
                            --type = 'OutQuad',
                        }
                    else
                        log.info('错误-没有找到bt', index)
                    end
                    local id = index
                    bt.event.on_click = function()
                        base.game:event_notify('mxh_多选面板点击', id)
                    end
                end

                if data.title and data.title ~= '' then
                    self['@panel_title.text'] = data.title
                    self['@panel_title.show'] = true
                    local target_y = 0
                    if tc then
                        --set(self['@panel_title'], {'layout','relative'}, {0,-(button_height+button_dis)*scale-70})
                        target_y = -(button_height+button_dis)*scale-65
                    else
                        --set(self['@panel_title'], {'layout','relative'}, {0,-(button_height+button_dis)/2*scale-70})
                        target_y = -(button_height+button_dis)/2*scale-65
                    end
                    utils.ui_move{
                        ui = self['@panel_title'],
                        start = { x=0, y=0, alpha = 0},
                        target = { x=0, y=target_y, alpha = 1},
                        time = 0.3,
                        type = 'OutQuad',
                    }
                else
                    self['@panel_title.show'] = false
                end
                
                if data.need_accept == true then
                    self['@button_accept.show'] = true
                    local target_y = 0
                    if tc then
                        --set(self['@button_accept'], {'layout','relative'}, {0,(button_height+button_dis)*scale+70})
                        target_y = (button_height+button_dis)*scale+65
                    else
                        --set(self['@button_accept'], {'layout','relative'}, {0,(button_height+button_dis)/2*scale+70})
                        target_y = (button_height+button_dis)/2*scale+65
                    end
                    utils.ui_move{
                        ui = self['@button_accept'],
                        start = { x=0, y=0, alpha = 0},
                        target = { x=0, y=target_y, alpha = 1},
                        time = 0.3,
                        type = 'OutQuad',
                    }
                else
                    self['@button_accept.show'] = false
                end
                self['@panel.show'] = true
            end,
            hide = function(self)

            end,
        },
    }
    panel = template:new()
    
end
init_panel()

local animationing = false
local info_now = nil
local info_wait = nil
local last_id = 1


local function act_show( info)
    if animationing == true then
        info_wait = info
        return
    end
    info_now = info
    panel:set_data( info)
end

local function animation_hide()
    animationing = true
    local ui_button = panel.part.choose_button

    local count = #ui_button
    local scale = 1
    local tc = false
    if count <= 5 then
    elseif count <= 7 then
        scale = 5/count
    else
        tc = true
        scale = 0.7
    end
    local n1 = math.ceil(count/2)
    local n2 = count-n1

    for index, bt in ipairs(ui_button) do 
        local start_x = 0
        local start_y = 0
        local target_x = 0
        --target_x = (button_width+button_dis)*(index-((count+1)/2))*scale
        local target_y = 0
        if tc then
            if index <= n1 then
                target_x = (button_width+button_dis)*(index-((n1+1)/2))
                target_y = -(button_height+button_dis)/2
            else
                target_x = (button_width+button_dis)*((index-n1)-((n2+1)/2))
                target_y = (button_height+button_dis)/2
            end
        else
            target_x = (button_width+button_dis)*(index-((count+1)/2))
        end
        target_x = target_x * scale
        target_y = target_y * scale

        --set( bt, {'layout','relative'}, {target_x, 0})
        --[[]]
        utils.ui_move{
            ui = bt,
            start = { x=target_x, y=target_y, alpha = 1},
            target = { x=start_x, y=start_y, alpha = 0},
            time = 0.2,
            type = 'OutQuad',
        }
        bt.event.on_click = nil
        
    end
    base.wait(200,function()
        panel['@panel.show'] = false
        animationing = false
        if info_wait then
            act_show( info_wait)
            info_wait = nil
        end
    end)
    if panel['@panel_title.show'] == true then
        local ui = panel['@panel_title']
        utils.ui_move{
            ui = ui,
            start = { x=ui.layout.relative[1], y=ui.layout.relative[2], alpha = 1},
            target = { x=0, y=0, alpha = 0},
            time = 0.25,
            type = 'OutQuad',
        }
    end
    if panel['@button_accept.show'] == true then
        local ui = panel['@button_accept']
        utils.ui_move{
            ui = ui,
            start = { x=ui.layout.relative[1], y=ui.layout.relative[2], alpha = 1},
            target = { x=0, y=0, alpha = 0},
            time = 0.25,
            type = 'OutQuad',
        }
    end
    --panel['@button_accept.show'] = false
end

base.game:event('mxh_多选面板点击', function(_,id)
    if not info_now then return end

    if info_now.need_accept then
        --需要点确认
        panel:set_streamer(id)
        last_id = id
    else
        panel:clear_streamer()
        animation_hide()
        --不需要点确认
        base.game:server 'rpg_choose_panel_click' {
            HANDLE = info_now.HANDLE,
            id = id,
        }
        --panel['@panel.show'] = false
    end
end)

base.game:event('mxh_多选面板确认', function()
    if not info_now then return end
    if not last_id then
        return
    end
    panel:clear_streamer()
    animation_hide()
    base.game:server 'rpg_choose_panel_click' {
        HANDLE = info_now.HANDLE,
        id = last_id,
    }
    last_id = nil
    --panel['@panel.show'] = false
end)




return {
    act_show = act_show,
}
