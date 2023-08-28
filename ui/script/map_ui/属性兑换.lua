
local component = require '@common.base.gui.component'
local ctrl_util = require '@common.base.gui.control_util'
local getset = component.getset
local set = ctrl_util.set_ctrl_prop
local get_child_if = ctrl_util.get_child_if
local alias_by = component.alias_by
local bind = component.bind

local coin_list = base.eff.cache('$$busiyixiantu_5n1b.rpg_地图数据.属性兑换.root').coin
local kill_list = base.eff.cache('$$busiyixiantu_5n1b.rpg_地图数据.属性兑换.root').kill

local template = component {
    base.ui.panel'panel'{
        show = false,
        z_index = 0,
        color = 'rgba(255, 255, 255, 0.0000)',
        layout = {
            grow_height = 1,
            grow_width = 1,
            col_self = 'center',
            row_self = 'center',
        },
        bind = {
            event = {
                on_click = 'on_close_click'
            },
        },
        swallow_event = true,
        base.ui.panel 'panel' {
            z_index = 2,
            color = 'rgba(255,255,255,0.784)',
            layout = {
                col_self = 'center',
                height = 500,
                relative = {
                    [1] = 0,
                    [2] = 0,
                },
                row_self = 'center',
                width = 1000,
            },
            event = {
                on_click = function () end
            },
            swallow_event = true,
            base.ui.panel 'panel' {
                color = 'rgba(255,255,255,0.784)',
                layout = {
                    col_self = 'center',
                    height = 500.0,
                    row_self = 'start',
                    width = 135,
                },
                base.ui.label 'label' {
                    layout = {
                        col_self = 'center',
                        height = 500.0,
                        row_self = 'centen',
                        width = 80,
                    },
                    font = {
                        color = 'rgba(0, 0, 0, 1.0000)',
                        size = 50,
                    },
                    text = '属性兑换',
                }
            },
            base.ui.panel 'panel' { -- 70 金币兑换面板
                color = 'rgba(255,255,255,0.784)',
                layout = {
                    col_self = 'start',
                    height = 248,
                    row_self = 'end',
                    width = 860,
                },
                base.ui.panel 'panel' { -- 79  选项面板
                    color = 'rgba(255,255,255,0.784)',
                    layout = {
                        col_content = 'space_between',
                        col_self = 'start',
                        direction = 'col',
                        height = 130,
                        relative = {
                            [1] = 0,
                            [2] = 35,
                        },
                        row_self = 'center',
                        width = 720,
                    },
                    array = 3,
                    base.ui.panel 'panel' { -- 一行选项
                        color = 'rgba(255,255,255,0.784)',
                        layout = {
                            col_self = 'start',
                            direction = 'row',
                            height = 50,
                            row_content = 'space_between',
                            row_self = 'center',
                            width = 720,
                        },
                        array = 3,
                        base.ui.label 'item' { -- 选项
                            font = {
                                color = 'rgba(0, 0, 0, 1.0000)',
                                size = 20,
                            },
                            layout = {
                                col_self = 'start',
                                height = 50,
                                row_self = 'start',
                                width = 150,
                            },
                            bind = {
                                text = 'coin_effect_text',
                            },
                            base.ui.panel 'ban_coin' { -- 变灰
                                color = 'rgba(255, 255, 255, 0.7843)',
                                layout = {
                                    col_self = 'center',
                                    grow_height = 1,
                                    grow_width = 1,
                                    row_self = 'center',
                                },
                                z_index = 10001,
                            }
                        }
                    }
                },
                base.ui.label 'label' { -- 73
                    font = {
                        align = 'left',
                        color = 'rgba(0, 0, 0, 1.0000)',
                        size = 25,
                        vertical_align = 'center',
                    },
                    layout = {
                        col_self = 'end',
                        height = 50,
                        relative = {
                            [1] = 20,
                            [2] = -14,
                        },
                        row_self = 'start',
                        width = 350,
                    },
                    name = 'label73',
                    text = '注：消耗金币进行属性修炼',
                },
                base.ui.label 'label' { -- 75
                    color = 'rgba(0, 177, 255, 1.0000)',
                    font = {
                        color = 'rgba(0, 0, 0, 1.0000)',
                        size = 20,
                    },
                    layout = {
                        col_self = 'end',
                        height = 50,
                        relative = {
                            [1] = -273,
                            [2] = -14,
                        },
                        row_self = 'end',
                        width = 200,
                    },
                    bind = {
                        event = {
                            on_click = 'on_coin_click'
                        },
                        text = 'coin_cost_text',
                    },
                    round_corner_radius = 15,
                },
                base.ui.label 'label' { -- 75
                    color = 'rgba(0, 177, 255, 1.0000)',
                    font = {
                        color = 'rgba(0, 0, 0, 1.0000)',
                        size = 20,
                    },
                    layout = {
                        col_self = 'end',
                        height = 50,
                        relative = {
                            [1] = -46,
                            [2] = -14,
                        },
                        row_self = 'end',
                        width = 200,
                    },
                    bind = {
                        event = {
                            on_click = 'on_allcoin_click'
                        },
                        text = 'coin_allcost_text',
                    },
                    round_corner_radius = 15,
                }
            },
            base.ui.panel 'panel' { -- 杀敌数兑换面板
                color = 'rgba(255,255,255,0.784)',
                layout = {
                    col_self = 'end',
                    height = 248,
                    row_self = 'end',
                    width = 860,
                },
                base.ui.panel 'panel' { -- 79 选项面板
                    color = 'rgba(255,255,255,0.784)',
                    layout = {
                        col_content = 'space_between',
                        col_self = 'start',
                        direction = 'col',
                        height = 130,
                        relative = {
                            [1] = 0,
                            [2] = 35,
                        },
                        row_self = 'center',
                        width = 720,
                    },
                    array = 3,
                    base.ui.panel 'panel' { -- 一行选项
                        color = 'rgba(255,255,255,0.784)',
                        layout = {
                            col_self = 'start',
                            direction = 'row',
                            height = 50,
                            row_content = 'space_between',
                            row_self = 'center',
                            width = 720,
                        },
                        array = 3,
                        base.ui.label 'item' { -- 一个选项
                            font = {
                                color = 'rgba(0, 0, 0, 1.0000)',
                                size = 20,
                            },
                            layout = {
                                col_self = 'start',
                                height = 50,
                                row_self = 'start',
                                width = 150,
                            },
                            bind = {
                                text = 'kill_effect_text',
                            },
                            base.ui.panel 'ban_kill' { -- 变灰panel
                                color = 'rgba(255, 255, 255, 0.7843)',
                                layout = {
                                    col_self = 'center',
                                    grow_height = 1,
                                    grow_width = 1,
                                    row_self = 'center',
                                },
                                z_index = 10001,
                            }
                        }
                    }
                },
                base.ui.label 'label' { -- 73
                    font = {
                        align = 'left',
                        color = 'rgba(0, 0, 0, 1.0000)',
                        size = 25,
                        vertical_align = 'center',
                    },
                    layout = {
                        col_self = 'end',
                        height = 50,
                        relative = {
                            [1] = 20,
                            [2] = -14,
                        },
                        row_self = 'start',
                        width = 350,
                    },
                    text = '注：消耗杀敌数进行属性修炼',
                },
                base.ui.label 'label' { -- 75
                    color = 'rgba(0, 177, 255, 1.0000)',
                    font = {
                        color = 'rgba(0, 0, 0, 1.0000)',
                        size = 20,
                    },
                    layout = {
                        col_self = 'end',
                        height = 50,
                        relative = {
                            [1] = -273,
                            [2] = -14,
                        },
                        row_self = 'end',
                        width = 200,
                    },
                    bind = {
                        event = {
                            on_click = 'on_sx_click'
                        },
                        text = 'kill_cost_text',
                    },
                    round_corner_radius = 15,
                },
                base.ui.label 'label' { -- 75
                    color = 'rgba(0, 177, 255, 1.0000)',
                    font = {
                        color = 'rgba(0, 0, 0, 1.0000)',
                        size = 20,
                    },
                    layout = {
                        col_self = 'end',
                        height = 50,
                        relative = {
                            [1] = -46,
                            [2] = -14,
                        },
                        row_self = 'end',
                        width = 200,
                    },
                    bind = {
                        event = {
                            on_click = 'on_allsx_click'
                        },
                        text = 'kill_allcost_text',
                    },
                    round_corner_radius = 15,
                }
            },
            base.ui.label 'panel' { -- 关闭
                color = 'rgba(255,255,255,0.784)',
                layout = {
                    col_self = 'start',
                    height = 50,
                    row_self = 'end',
                    width = 50,
                },
                font = {
                    color = 'rgba(0, 0, 0, 1.0000)',
                    size = 20,
                },
                text = '×',
                bind = {
                    event = {
                        on_click = 'on_close_click'
                    }
                }
            }
        }
    },
    data = {
        coin_index = 1,
        kill_index = 1
    },

    method = {
        init = function(self)

            self.bind.on_close_click = function (source)
                self:set_show(false)
            end
            
            self.bind.on_coin_click = function(source)
                if self.data.coin_index <= #coin_list then
                    base.game:server 'on_ex_coin_click' {}
                end
            end
            self.bind.on_allcoin_click = function(source)
                if self.data.coin_index <= #coin_list then
                    base.game:server 'on_ex_allcoin_click' {}
                end
            end
            self.bind.on_sx_click = function(source)
                if self.data.kill_index <= #kill_list then
                    base.game:server 'on_ex_kill_click' {}
                end
            end
            self.bind.on_allsx_click = function(source)
                if self.data.kill_index <= #kill_list then
                    base.game:server 'on_ex_allkill_click' {}
                end
            end
            self:refresh()
        end,

        set_show = function(self,show)
            self['@panel.show'] = show
        end,



        refresh = function (self)
            local allcoin_cost = 0
            local allkill_cost = 0
            local coin_nowpage_index = (self.data.coin_index - 1) % 8 + 1
            local kill_nowpage_index = (self.data.kill_index - 1) % 8 + 1
            if self.data.coin_index > #coin_list then
                coin_nowpage_index = 0
            end
            if self.data.kill_index > #kill_list then
                kill_nowpage_index = 0
            end

            for i=1, 3 do
                for j=1, 3 do
                    local index = (i-1)*3 + j

                    if index == coin_nowpage_index then
                        set(self.part.ban_coin[index], 'show', false)
                    else
                        set(self.part.ban_coin[index], 'show', true)
                    end
                    if index == kill_nowpage_index then
                        set(self.part.ban_kill[index], 'show', false)
                    else
                        set(self.part.ban_kill[index], 'show', true)
                    end

                    local item = coin_list[((self.data.coin_index-1)//8) * 8 + index]
                    if item then
                        local text = tostring(item.effect.Value())..'%'
                        text = text..item.effect.Key
                        self.bind.coin_effect_text[i][j] = text

                        if index >= (self.data.coin_index - 1) % 8 + 1 then
                            allcoin_cost = allcoin_cost + item.cost
                        end
                    else
                        self.bind.coin_effect_text[i][j] = ''
                    end
                    
                    item = kill_list[((self.data.kill_index-1)//8) * 8 + index]
                    if item then
                        local text = tostring(item.effect.Value())..'%'
                        text = text..item.effect.Key
                        self.bind.kill_effect_text[i][j] = text

                        if index >= (self.data.kill_index - 1) % 8 + 1 then
                            allkill_cost = allkill_cost + item.cost
                        end
                    else
                        self.bind.kill_effect_text[i][j] = ''
                    end
                end
            end
            
            if self.data.coin_index > #coin_list then
                self.bind.coin_cost_text = '兑换完成'
                self.bind.coin_allcost_text = '兑换完成'
            else
                self.bind.coin_cost_text = tostring(coin_list[self.data.coin_index].cost)
                self.bind.coin_allcost_text = tostring(allcoin_cost)
            end
            if self.data.kill_index > #kill_list then
                self.bind.kill_cost_text = '兑换完成'
                self.bind.kill_allcost_text = '兑换完成'
            else
                self.bind.kill_cost_text = tostring(kill_list[self.data.kill_index].cost)
                self.bind.kill_allcost_text = tostring(allkill_cost)
            end
        end
    },
}

-- 创建UI
local ui = template:new()

function base.map_ui:sxdh_show(bol)
    log.info('base.map_ui:sxdh_show', bol)
    if bol then
        ui:set_show(true)
    else
        ui:set_show(false)
    end
end

base.proto.refresh_sx_panel = function (msg)
    ui.data.coin_index = msg.coin_index
    ui.data.kill_index = msg.kill_index
    ui:refresh()
end



--[[
local img_btm = 'image/common/bantouming.png'
local button = component {
    base.ui.button 'bt_top' {
        layout = {
            relative = {-30,-100},
            row_self = 'end',
            col_self = 'center',
            width = 90,
            height = 90,
        },
        z_index = 1000,
        image = img_btm,
        base.ui.label {
            layout = {
                grow_width = 1,
                grow_height = 1,
            },
            text = '属性兑换',
            font = {
                size = 20,
                color = 'rgba(255,255,255,0.85)',
            },
        },
        is_trg = true,
    },
}
local bt = button:new()
bt['@bt_top.event.on_click'] = function(self)
    ui['@panel.show'] = not ui['@panel.show']
end
]]

local bt = utils.get_ui_by_name('属性兑换')
bt.event.on_click = function(self)
    ui['@panel.show'] = not ui['@panel.show']
end
