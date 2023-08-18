local ____lualib = base.tsc
local __TS__Keyword = ____lualib.__TS__Keyword
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
busiyixiantu_5n1b = busiyixiantu_5n1b or ({})
do
    busiyixiantu_5n1b.jj = base.trigger_new(
        function(当前触发器, e)
            local 面板 = base.gui_get_part_as(
                __TS__Keyword("any"),
                base.gui_get_main_page(),
                "面板-科技"
            )
            if true then
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.jj:add_event_common({obj = base.game, event_name = "游戏-开始"})
end
