
local ctrl_util = require '@common.base.gui.control_util'
local component = require '@common.base.gui.component'
local streamer = require 'ui_ext.plugn.streamer'
local getset = component.getset
local set = ctrl_util.set_ctrl_prop
local get = ctrl_util.get_ctrl_prop


--[[
    --ui缓动
    utils.ui_move{
        --运动UI
        ui = bt,
        --起点
        start = { x=start_x, y=start_y, alpha = 0},
        --终点
        target = { x=target_x, y=target_y, alpha = 1},
        --时间
        time = 0.2,
        --运动轨迹，参考tween
        type = 'OutBack',
        --结束时运行
        on_finish = function()
        end,
    }
]]
local function ui_move(data)
    local time = data.time
    local ui = data.ui
    local start = data.start
    local target = data.target
    local type = data.type
    local pulse = 0.01
    local css = utils.tween.new( time, start, target, type or 'outBack')

    local function update()
        set( ui, {'layout','relative'}, {start.x,start.y})
        if target.alpha then
            set(ui, 'opacity', start.alpha)
        end
    end
    --初始刷新一次
    update()

    --覆盖关系
    if ui._utils_move_timer then
        ui._utils_move_timer:remove()
        ui._utils_move_timer = nil
    end

    ui._utils_move_timer = base.loop(pulse*1000, function (t)
        if css:update(pulse) then 
            update()
            --结束了
            t:remove()
            ui._utils_move_timer = nil
            if data.on_finish then
                data.on_finish()
            end
        else
            update()
        end
    end)
end
utils.ui_move = ui_move
