local ____lualib = base.tsc
local __TS__Class2 = ____lualib.__TS__Class2
Point = base.tsc.CLASSES.Point or __TS__Class2("Point")
Unit = base.tsc.CLASSES.Unit or __TS__Class2("Unit")
DataCache = base.tsc.CLASSES.DataCache or __TS__Class2("DataCache")
YPR旋转 = base.tsc.CLASSES.YPR旋转 or __TS__Class2("YPR旋转")
EffectParamShared = base.tsc.CLASSES.EffectParamShared or __TS__Class2("EffectParamShared")
EffectParam = base.tsc.CLASSES.EffectParam or __TS__Class2("EffectParam")
Target = base.tsc.CLASSES.Target or __TS__Class2("Target")
ScreenPos = base.tsc.CLASSES.ScreenPos or __TS__Class2("ScreenPos")
Actor = base.tsc.CLASSES.Actor or __TS__Class2("Actor")
TriggerEvent = base.tsc.CLASSES.TriggerEvent or __TS__Class2("TriggerEvent")
TriggerParamTable = base.tsc.CLASSES.TriggerParamTable or __TS__Class2("TriggerParamTable")
Player = base.tsc.CLASSES.Player or __TS__Class2("Player")
Skill = base.tsc.CLASSES.Skill or __TS__Class2("Skill")
Buff = base.tsc.CLASSES.Buff or __TS__Class2("Buff")
Timer = base.tsc.CLASSES.Timer or __TS__Class2("Timer")
Item = base.tsc.CLASSES.Item or __TS__Class2("Item")
Trigger = base.tsc.CLASSES.Trigger or __TS__Class2("Trigger")
Coroutine = base.tsc.CLASSES.Coroutine or __TS__Class2("Coroutine")
IEventNotify = base.tsc.CLASSES.IEventNotify or __TS__Class2("IEventNotify")
Present = base.tsc.CLASSES.Present or __TS__Class2("Present")
Array = base.tsc.CLASSES.Array or __TS__Class2("Array")
validator = validator or ({})
do
    ---
    -- @noSelf
    validator.validator_38385052 = function(移动器Id, 流逝时间, 弹道单位, 施法者单位, 目标单位, 发射点, 目标点)
        local 半径 = base.point_distance(发射点, 目标点) * 0.5
        local 初始角度 = base.point_angle(目标点, 发射点)
        local 圆心 = base.point_move(目标点, 初始角度, 半径)
        local 当前位置 = base.point_move(圆心, 初始角度 + 流逝时间 * 100, 半径)
        base.set_unit_location_and_height(弹道单位, 当前位置, 150)
    end
    local function init_validator_0(self)
        local data = nil
        data = base.eff.cache("$$default_units_ts.unit.火龙.MoverFunction")
        if data then
            data.FunctionClient_UI = validator.validator_38385052
        end
    end
    init_validator_0(nil)
end
