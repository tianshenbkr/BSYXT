
local component = require '@common.base.gui.component'
local getset = component.getset
local ctrl_util = require '@common.base.gui.control_util'
local set = ctrl_util.set_ctrl_prop
local get = ctrl_util.get_ctrl_prop
local move_to_new_parent = require('@common.base.gui.control_util').move_to_new_parent
local inventory = require '@smallcard_inventory.inventory.main'
local bag_main_panel = inventory.main_panel

local img_btm = 'image/common/bantouming.png'
local font = {
    size = 20,
    color = 'rgba(255,255,255,0.85)',
}

local is_show = false
local panel = nil
local function init( id, list)

    local template = component {
        base.ui.panel 'bt_panel'{
            layout = {
                relative = {50,220},
                row_self = 'start',
                col_self = 'start',
                margin = {
                    top = 4,
                    bottom = 4,
                },
                row_content = 'start',
                col_content = 'start',
            },
            z_index = 1000,
            text = 'test',
            font = font,

            array = 6,
            base.ui.button 'bts' {
                layout = {
                    width = 128,
                    height = 128,
                    row_self = 'center',
                    col_self = 'center',
                    --margin = {
                    --    top = 4,
                    --    bottom = 4,
                    --},
                },
                text = item,
                image = img_btm,
                font = font,
                font = font,
                base.ui.label 'txt' {
                    layout = {
                        width = 32,
                        height = 32,
                        row_self = 'end',
                        col_self = 'end',
                    },
                    text = ' ',
                    font = {
                        size = 12,
                        color = 'rgba(255,255,255,0.85)',
                    },
                    image = img_btm,
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
        method = {
            init = function(self)
                move_to_new_parent(self, bag_main_panel)
            end,
        }
    }

    panel = template:new()
    panel['@bt_panel.show'] = false
    --panel['@bt_panel.array'] = 6
    --panel['@bt_top.event.on_click'] = function(self)
    --    panel['@bt_panel.show'] = not panel['@bt_panel.show']
    --end

    local bts = panel.part.bts
    for k,bt in ipairs(bts) do
        local index = k
        bt.event.on_click = function()
            base.game:server 'rpg_sxl_click' {
                id = index,
            }
        end
        local new_x = (k-1)%2*136
        local new_y = math.ceil(k/2)*136
        set( bt, {'layout','relative'}, { new_x, new_y})
    end
end
init()

base.proto.rpg_sxl_link = function (msg)
    log.info('rpg_sxl_link----------------------------------')
    local list = msg.list
    local bts = panel.part.bts
    local txt = panel.part.txt
    for k,bt in ipairs(bts) do
    --for k,v in ipairs( list) do
        if list[k] then
            local link = list[k][1]
            local need = list[k][2]

            local cache = base.eff.cache( link)
            set( bt, 'image', cache.Icon)
            if need > 0 then
                set( txt[k], 'text', need)
                set( txt[k], 'show', true)
            else
                set( txt[k], 'show', false)
            end
        else
            set( bt, 'image', img_btm)
            set( txt[k], 'text', need)
            set( txt[k], 'show', false)
        end
    end
end

base.proto.rpg_sxl_num = function (msg)
    local id = msg.id
    local num = msg.num
    log.info('rpg_sxl_num', id, num)
    set( panel.part.txt[id], 'text', num)
    if num <= 0 then
        set( panel.part.txt[id], 'show', false)
    else
        set( panel.part.txt[id], 'show', true)
    end
end



--[[
local img_btm = 'image/common/bantouming.png'
local button = component {
    base.ui.button 'bt_top' {
        layout = {
            relative = {-30,-200},
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
            text = '背包',
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
    if is_show then
        smallcard_inventory.close_inventory()
        close()
    else
        open()
    end
end
]]


local function open()
    panel['@bt_panel.show'] = true
    smallcard_inventory.open_inventory()
    is_show = true
end

local function close()
    panel['@bt_panel.show'] = false
    is_show = false
end

local bt = utils.get_ui_by_name('背包')
bt.event.on_click = function(self)
    if is_show then
        smallcard_inventory.close_inventory()
        close()
    else
        open()
    end
end



base.game:event('背包界面-关闭', function ()
    close()
end)