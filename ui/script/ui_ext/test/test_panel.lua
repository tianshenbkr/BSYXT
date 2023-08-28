
local font = {
    size = 20,
    color = 'rgba(255,255,255,0.85)',
}

local panel_list = {}
local count = 0
local function create_test_panel( id, list)
    local id = id or 1

    --local list = data.list
    count = count + 1
    local component = require '@common.base.gui.component'
    local img_btm = 'image/common/bantouming.png'

    local template = component {
        base.ui.panel 'test_panel'{
            layout = {
                relative = { 110*id,10},
                row_self = 'start',
                col_self = 'start',
                width = 1,
                height = 1,
            },
            text = 'test',
            z_index = 1000,
            image = img_btm,
            font = font,

            base.ui.button 'bt_top' {
                layout = {
                    relative = {0,0},
                    row_self = 'start',
                    col_self = 'start',
                    width = 100,
                    height = 50,
                },
                z_index = 1000,
                image = img_btm,
                base.ui.label {
                    layout = {
                        grow_width = 1,
                        grow_height = 1,
                    },
                    text = 'test' .. math.floor(id),
                    font = {
                        size = 20,
                        color = 'rgba(255,255,255,0.85)',
                    },
                },
                is_trg = true,
            },
            base.ui.panel 'bt_panel'{
                layout = {
                    relative = {0,50},
                    row_self = 'start',
                    col_self = 'start',
                    margin = {
                        top = 4,
                        bottom = 4,
                    },
                    direction = 'col',
                    row_content = 'start',
                    col_content = 'start',
                },
                z_index = 1000,
                text = 'test',
                font = font,

                array = 1,
                base.ui.button 'bts' {
                    layout = {
                        relative = {0,0},
                        width = 200,
                        height = 40,
                        row_self = 'start',
                        col_self = 'start',
                        margin = {
                            top = 4,
                            bottom = 4,
                        },
                    },
                    text = item,
                    image = img_btm,
                    font = font,
                    font = font,
                    base.ui.label 'txt' {
                        layout = {
                            grow_width = 1,
                            grow_height = 1,
                        },
                        text = 'title',
                        font = {
                            size = 20,
                            color = 'rgba(255,255,255,0.85)',
                        },
                    },
                    swallow_events = 'on_click',
                    event = {
                        on_click = function()
                            log.info('click')
                        end,
                    },
                },
            },
            swallow_events = 'on_click',
            event = {
                on_click = function()
                    log.info('click')
                end,
            },
        },
    }

    local panel = template:new()
    panel_list[id] = panel
    panel['@bt_panel.show'] = false
    panel['@bt_top.event.on_click'] = function(self)
        panel['@bt_panel.show'] = not panel['@bt_panel.show']
    end

    panel['@bt_panel.array'] = #list
    local bts = panel.part.bts
    for k,str in ipairs(list) do
        panel.part.txt[k].text = str
        
        local index = id
        local key = k
        bts[k].event.on_click = function()
            --发送点击测试面板信息
            base.game:server 'rpg_test_panel_click' {
                id = index,
                key = key,
            }
        end
    end
end


--监听rpg_test_panel属性的变化
utils.game_attr_listener('rpg_test_panel', function( data)
    --base.utils.show_table( data)
    for k,v in pairs(panel_list) do
        v:destroy()
    end
    panel_list = {}
    for k, v in pairs(data.list) do
        create_test_panel( k, v)
    end
end)
