
local component = require '@common.base.gui.component'
local getset = component.getset
local ctrl_util = require '@common.base.gui.control_util'
local set = ctrl_util.set_ctrl_prop
local get = ctrl_util.get_ctrl_prop
local move_to_new_parent = require('@common.base.gui.control_util').move_to_new_parent
local inventory = require '@smallcard_inventory.inventory.main'
local bag_main_panel = inventory.main_panel

local img_btm = ''--'image/common/bantouming.png'
local font = {
    size = 20,
    color = 'rgba(255,255,255,0.85)',
}

local is_show = false
local panel = nil
--[[
local function init( id, list)
    local template = component {
        base.ui.panel 'bt_panel'{
            layout = {
                relative = {50,275},
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

            array = 1,
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
                    end,
                },
            },
        },
        swallow_events = 'on_click',
        event = {
            on_click = function()
            end,
        },
        method = {
            init = function(self)
                local parent = utils.get_ui_by_name('背包格子1')
                if parent then
                    move_to_new_parent(self, parent)
                end
            end,
        }
    }

    panel = template:new()
    panel['@bt_panel.show'] = false

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
    set( panel.part.txt[id], 'text', num)
    if num <= 0 then
        set( panel.part.txt[id], 'show', false)
    else
        set( panel.part.txt[id], 'show', true)
    end
end


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

local bts = {
    utils.get_ui_by_name('升仙令'),
    utils.get_ui_by_name('升仙令1'),
}
local txt = {
    utils.get_ui_by_name('升仙令计数'),
    utils.get_ui_by_name('升仙令计数1'),
}

for k,bt in ipairs(bts) do
    local index = 1
    bt.event.on_click = function()
        base.game:server 'rpg_sxl_click' {
            id = index,
        }
    end
    local new_x = (k-1)%2*136
    local new_y = math.ceil(k/2)*136
    --set( bt, {'layout','relative'}, { new_x, new_y})
end


base.proto.rpg_sxl_link = function (msg)
    local list = msg.list
    for k,bt in ipairs(bts) do
    --for k,v in ipairs( list) do
        if list[1] then
            local link = list[1][1]
            local need = list[1][2]

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
    local num = msg.num
    for id,label in ipairs(txt) do
        set( label, 'text', num)
        if num <= 0 then
            set( label, 'show', false)
        else
            set( label, 'show', true)
        end
    end
end