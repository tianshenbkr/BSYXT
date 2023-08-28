
local component = require '@common.base.gui.component'
local img_btm = 'image/common/bantouming.png'

local template = component {
    base.ui.panel 'test_info'{
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
}


--监听rpg_test_panel属性的变化
utils.game_attr_listener('rpg_test_info', function( data)
    --base.utils.show_table( data)
    for k,v in pairs(panel_list) do
        v:destroy()
    end
    panel_list = {}
    for k, v in pairs(data.list) do
        create_test_panel( k, v)
    end
end)
