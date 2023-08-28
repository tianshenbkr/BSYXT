local ____lualib = base.tsc
local __TS__Keyword = ____lualib.__TS__Keyword
local __TS__TypeReference = ____lualib.__TS__TypeReference
local __TS__Class = ____lualib.__TS__Class
local __TS__ClassExtends = ____lualib.__TS__ClassExtends
local __TS__SuperTypeArgumentsFuncWrapper = ____lualib.__TS__SuperTypeArgumentsFuncWrapper
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
    busiyixiantu_5n1b.小黑鸟死亡数量 = 0
    busiyixiantu_5n1b.怪物死亡文字修改 = base.trigger_new(
        function(当前触发器, e)
            if true then
                busiyixiantu_5n1b.小黑鸟死亡数量 = busiyixiantu_5n1b.小黑鸟死亡数量 + 1
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_main_page(),
                        "新手文字版"
                    ),
                    "新手指引信息"
                ).text = table.concat({
                    "新手任务1:击杀10只仙界黑鸟进度：",
                    base.force_as(
                        __TS__Keyword("string"),
                        busiyixiantu_5n1b.小黑鸟死亡数量
                    ),
                    "/10"
                })
                if busiyixiantu_5n1b.小黑鸟死亡数量 == 10 then
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                            base.gui_get_main_page(),
                            "新手文字版"
                        ),
                        "新手指引信息"
                    ).text = table.concat({"新手任务2:击杀1只仙界大黑鸟进度：0/1"})
                else
                end
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.大黑鸟死亡显示和修炼室显示修改 = base.trigger_new(
        function(当前触发器, e)
            if true then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_main_page(),
                        "新手文字版"
                    ),
                    "新手指引信息"
                ).text = "新手任务2:击杀1只仙界大黑鸟进度：1/1"
                base.timer_wait(
                    1,
                    function(计时器)
                        base.gui_get_child_ui_by_name_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                            base.gui_get_part_as(
                                __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                                base.gui_get_main_page(),
                                "新手文字版"
                            ),
                            "新手指引信息"
                        ).text = "新手任务3：点击传送修炼室"
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                            base.gui_get_main_page(),
                            "修炼室"
                        ).show = true
                    end
                )
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.关闭新手提示 = base.trigger_new(
        function(当前触发器, e)
            if true then
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                    base.gui_get_main_page(),
                    "新手文字版"
                ).show = false
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.消息提示文本UI = base.gui_get_child_ui_by_name_as(
        __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
        base.gui_get_part_as(
            __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
            base.gui_get_main_page(),
            "消息提示"
        ),
        "消息文本"
    )
    busiyixiantu_5n1b.消息文本修改 = function(____, 要显示的文字)
        busiyixiantu_5n1b.消息提示文本UI.show = true
        busiyixiantu_5n1b.消息提示文本UI.text = 要显示的文字
        base.timer_wait(
            5,
            function(计时器)
                busiyixiantu_5n1b.消息提示文本UI.show = false
            end
        )
    end
    busiyixiantu_5n1b.加怪 = __TS__Class()
    local 加怪 = busiyixiantu_5n1b.加怪
    加怪.name = "加怪"
    __TS__ClassExtends(
        加怪,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 加怪.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(加怪, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "加怪"
        self.autoForward = true
    end
    busiyixiantu_5n1b.减怪 = __TS__Class()
    local 减怪 = busiyixiantu_5n1b.减怪
    减怪.name = "减怪"
    __TS__ClassExtends(
        减怪,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 减怪.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(减怪, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "减怪"
        self.autoForward = true
    end
    busiyixiantu_5n1b.本地玩家_创建rpg_challenge = __TS__Class()
    local 本地玩家_创建rpg_challenge = busiyixiantu_5n1b.本地玩家_创建rpg_challenge
    本地玩家_创建rpg_challenge.name = "本地玩家_创建rpg_challenge"
    __TS__ClassExtends(
        本地玩家_创建rpg_challenge,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 本地玩家_创建rpg_challenge.prototype.____constructor(self, obj, rpg_challenge)
        __TS__SuperTypeArgumentsFuncWrapper(本地玩家_创建rpg_challenge, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.rpg_challenge = rpg_challenge
        self.event_name = "本地玩家_创建rpg_challenge"
        self.autoForward = false
    end
    busiyixiantu_5n1b.进入修炼室 = __TS__Class()
    local 进入修炼室 = busiyixiantu_5n1b.进入修炼室
    进入修炼室.name = "进入修炼室"
    __TS__ClassExtends(
        进入修炼室,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 进入修炼室.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(进入修炼室, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "进入修炼室"
        self.autoForward = true
    end
    busiyixiantu_5n1b.本地玩家_rpg挑战开始 = __TS__Class()
    local 本地玩家_rpg挑战开始 = busiyixiantu_5n1b.本地玩家_rpg挑战开始
    本地玩家_rpg挑战开始.name = "本地玩家_rpg挑战开始"
    __TS__ClassExtends(
        本地玩家_rpg挑战开始,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 本地玩家_rpg挑战开始.prototype.____constructor(self, obj, link, id)
        __TS__SuperTypeArgumentsFuncWrapper(本地玩家_rpg挑战开始, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.link = link
        self.id = id
        self.event_name = "本地玩家_rpg挑战开始"
        self.autoForward = false
    end
    busiyixiantu_5n1b.更新UI玩家 = base.trigger_new(
        function(当前触发器, e)
            if base.player_local():get_hero() ~= nil then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "每秒攻击"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒攻击")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "生命增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("生命增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "生命恢复"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("生命恢复")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "攻击回血"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("攻击回血")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "伤害抵挡"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("伤害抵挡")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "伤害躲避"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("伤害躲避")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "物理伤害"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("物理伤害")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "法术伤害"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("法术伤害")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "额外经验"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("额外经验")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "装备爆率"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("装备爆率")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "幸运值"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("幸运值")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "刷怪效率"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("刷怪效率")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "每秒根骨"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒根骨")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "每秒身法"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒身法")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "每秒神念"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒神念")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "每秒生命"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒生命")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "每秒攻击"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒攻击")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "每秒防御"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒防御")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "杀敌根骨"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("杀敌根骨")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "杀敌身法"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("杀敌身法")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "杀敌神念"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("杀敌神念")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "杀敌生命"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("杀敌生命")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "杀敌攻击"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("杀敌攻击")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "生命增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("生命增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "伤害增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("伤害增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "根骨增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("根骨增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "神念增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("神念增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "身法增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("身法增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "最终生命增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终生命增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "最终伤害增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终伤害增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "最终物穿增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终物穿增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "最终法穿增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终法穿增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "最终物爆增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终物爆增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "最终法爆增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终法爆增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "最终普攻增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终普攻增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性主面板"
                    ),
                    "最终技能增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终技能增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "人物属性大面板"
                        ),
                        "属性1"
                    ),
                    "攻击力文本"
                ).text = table.concat({
                    "攻击力：",
                    base.force_as(
                        __TS__Keyword("string"),
                        base.player(1):get_hero():get("攻击")
                    )
                })
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "人物属性大面板"
                        ),
                        "属性2"
                    ),
                    "防御力文本"
                ).text = table.concat({
                    "防御力：",
                    base.force_as(
                        __TS__Keyword("string"),
                        base.player(1):get_hero():get("护甲减免")
                    )
                })
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "人物属性大面板"
                        ),
                        "属性3"
                    ),
                    "根骨百分比"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("根骨增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "人物属性大面板"
                        ),
                        "属性3"
                    ),
                    "身法百分比"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("身法增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "人物属性大面板"
                        ),
                        "属性3"
                    ),
                    "神念百分比"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("神念增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "人物属性大面板"
                        ),
                        "属性3"
                    ),
                    "根骨实际值"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("根骨")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "人物属性大面板"
                        ),
                        "属性3"
                    ),
                    "身法实际值"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("身法")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "人物属性大面板"
                        ),
                        "属性3"
                    ),
                    "神念实际值"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("神念")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性"
                    ),
                    "攻击频率"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get_hero():get("攻击速度")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性"
                    ),
                    "暴击率"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get_hero():get("暴击")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性"
                    ),
                    "爆伤"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get_hero():get("暴击伤害")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性"
                    ),
                    "穿甲"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终技能增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性"
                    ),
                    "物理收益"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("物理收益")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性"
                    ),
                    "法术收益"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("法术收益")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性"
                    ),
                    "额外金币"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("额外金币")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性"
                    ),
                    "额外杀敌"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("额外杀敌")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物头像"
                    ),
                    "人物血量"
                ).text = table.concat({
                    base.force_as(
                        __TS__Keyword("string"),
                        base.player(1):get_hero():get("生命")
                    ),
                    "/",
                    base.force_as(
                        __TS__Keyword("string"),
                        base.player(1):get_hero():get("生命上限")
                    )
                })
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.更新UI = base.trigger_new(
        function(当前触发器, e)
            if base.player_local():get_hero() ~= nil then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                            base.gui_get_main_page(),
                            "人物属性大面板"
                        ),
                        "属性1"
                    ),
                    "攻击力文本"
                ).text = table.concat({
                    "攻击力：",
                    base.force_as(
                        __TS__Keyword("string"),
                        base.player(1):get_hero():get("攻击")
                    )
                })
            end
        end,
        {},
        true,
        nil,
        true
    )
    busiyixiantu_5n1b.更新经验条 = base.trigger_new(
        function(当前触发器, e)
            local 经验条 = base.gui_get_child_ui_by_name_as(
                __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "人物属性大面板"
                    ),
                    "经验条"
                ),
                "经验长度"
            )
            if e.unit == base.player(1):get_hero() then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                            base.gui_get_main_page(),
                            "人物属性大面板"
                        ),
                        "经验条"
                    ),
                    "经验条文本"
                ).text = table.concat({
                    "经验：",
                    base.force_as(
                        __TS__Keyword("string"),
                        base.player_local():get_hero():get("剩余经验")
                    ),
                    "/",
                    base.force_as(
                        __TS__Keyword("string"),
                        base.player_local():get_hero():get("升级所需经验")
                    )
                })
                经验条.layout.width = 330 * (base.player_local():get_hero():get("剩余经验") / base.player_local():get_hero():get("升级所需经验"))
            end
        end,
        {},
        false,
        nil,
        true
    )
    local 加怪 = __TS__Class()
    加怪.name = "加怪"
    __TS__ClassExtends(
        加怪,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 加怪.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(加怪, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "加怪"
        self.autoForward = true
    end
    local 减怪 = __TS__Class()
    减怪.name = "减怪"
    __TS__ClassExtends(
        减怪,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 减怪.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(减怪, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "减怪"
        self.autoForward = true
    end
    busiyixiantu_5n1b.不能减怪 = base.trigger_new(
        function(当前触发器, e)
            if true then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "减怪"
                ).opacity = 0.5
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.加怪了 = base.trigger_new(
        function(当前触发器, e)
            if true then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "减怪"
                ).opacity = 1
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.挑战中 = base.trigger_new(
        function(当前触发器, e)
            if true then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "加怪"
                ).show = false
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "减怪"
                ).show = false
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "挑战中"
                ).show = true
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.挑战完毕 = base.trigger_new(
        function(当前触发器, e)
            if true then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "加怪"
                ).show = true
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "减怪"
                ).show = true
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "挑战中"
                ).show = false
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "当前小兵等级"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    e.怪物层数
                )
                busiyixiantu_5n1b:消息文本修改(table.concat({
                    "恭喜解锁",
                    base.force_as(
                        __TS__Keyword("string"),
                        e.怪物层数
                    ),
                    "级小兵"
                }))
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.减怪UI修改 = base.trigger_new(
        function(当前触发器, e)
            if true then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_gui_ctrl, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "当前小兵等级"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    e.怪物层数
                )
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.挑战等级突破BOSS = __TS__Class()
    local 挑战等级突破BOSS = busiyixiantu_5n1b.挑战等级突破BOSS
    挑战等级突破BOSS.name = "挑战等级突破BOSS"
    __TS__ClassExtends(
        挑战等级突破BOSS,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 挑战等级突破BOSS.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(挑战等级突破BOSS, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "挑战等级突破BOSS"
        self.autoForward = true
    end
    busiyixiantu_5n1b.等级突破 = base.trigger_new(
        function(当前触发器, e)
            if true then
                if base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "等级突破按钮"
                ).show == true then
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                        base.gui_get_main_page(),
                        "等级突破按钮"
                    ).show = false
                    busiyixiantu_5n1b:消息文本修改(table.concat({
                        "突破成功，等级上限提升至",
                        base.force_as(
                            __TS__Keyword("string"),
                            e.当前升级最高等级
                        )
                    }))
                else
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                        base.gui_get_main_page(),
                        "等级突破按钮"
                    ).show = true
                end
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.func_属性兑换面板显示 = function(____, bol)
        base.map_ui:sxdh_show(bol)
    end
    busiyixiantu_5n1b.rpg_challenge = __TS__Class()
    local rpg_challenge = busiyixiantu_5n1b.rpg_challenge
    rpg_challenge.name = "rpg_challenge"
    function rpg_challenge.prototype.____constructor(self)
    end
    busiyixiantu_5n1b.开始挑战 = base.trigger_new(
        function(当前触发器, e)
            if true then
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.挑战测试 = base.trigger_new(
        function(当前触发器, e)
            local 新变量
            local bt = base.gui_get_part_as(
                __TS__Keyword("any"),
                base.gui_get_main_page(),
                "挑战测试"
            )
            if true then
                e.rpg_challenge:bind_ui_button(bt)
            end
        end,
        {},
        false,
        nil,
        true
    )
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
    busiyixiantu_5n1b.不能再减怪了 = __TS__Class()
    local 不能再减怪了 = busiyixiantu_5n1b.不能再减怪了
    不能再减怪了.name = "不能再减怪了"
    __TS__ClassExtends(
        不能再减怪了,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 不能再减怪了.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(不能再减怪了, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "不能再减怪了"
        self.autoForward = false
    end
    busiyixiantu_5n1b.修改提示怪物死亡数量UI文字 = __TS__Class()
    local 修改提示怪物死亡数量UI文字 = busiyixiantu_5n1b.修改提示怪物死亡数量UI文字
    修改提示怪物死亡数量UI文字.name = "修改提示怪物死亡数量UI文字"
    __TS__ClassExtends(
        修改提示怪物死亡数量UI文字,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 修改提示怪物死亡数量UI文字.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(修改提示怪物死亡数量UI文字, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "修改提示怪物死亡数量UI文字"
        self.autoForward = false
    end
    busiyixiantu_5n1b.减怪UI = __TS__Class()
    local 减怪UI = busiyixiantu_5n1b.减怪UI
    减怪UI.name = "减怪UI"
    __TS__ClassExtends(
        减怪UI,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 减怪UI.prototype.____constructor(self, obj, 怪物层数)
        __TS__SuperTypeArgumentsFuncWrapper(减怪UI, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.怪物层数 = 怪物层数
        self.event_name = "减怪UI"
        self.autoForward = false
    end
    local 加怪了 = __TS__Class()
    加怪了.name = "加怪了"
    __TS__ClassExtends(
        加怪了,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 加怪了.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(加怪了, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "加怪了"
        self.autoForward = false
    end
    busiyixiantu_5n1b.加怪完成或者失败 = __TS__Class()
    local 加怪完成或者失败 = busiyixiantu_5n1b.加怪完成或者失败
    加怪完成或者失败.name = "加怪完成或者失败"
    __TS__ClassExtends(
        加怪完成或者失败,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 加怪完成或者失败.prototype.____constructor(self, obj, 怪物层数)
        __TS__SuperTypeArgumentsFuncWrapper(加怪完成或者失败, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.怪物层数 = 怪物层数
        self.event_name = "加怪完成或者失败"
        self.autoForward = false
    end
    busiyixiantu_5n1b.加怪挑战中 = __TS__Class()
    local 加怪挑战中 = busiyixiantu_5n1b.加怪挑战中
    加怪挑战中.name = "加怪挑战中"
    __TS__ClassExtends(
        加怪挑战中,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 加怪挑战中.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(加怪挑战中, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "加怪挑战中"
        self.autoForward = false
    end
    busiyixiantu_5n1b.大黑鸟死亡事件 = __TS__Class()
    local 大黑鸟死亡事件 = busiyixiantu_5n1b.大黑鸟死亡事件
    大黑鸟死亡事件.name = "大黑鸟死亡事件"
    __TS__ClassExtends(
        大黑鸟死亡事件,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 大黑鸟死亡事件.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(大黑鸟死亡事件, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "大黑鸟死亡事件"
        self.autoForward = false
    end
    busiyixiantu_5n1b.等级突破显示 = __TS__Class()
    local 等级突破显示 = busiyixiantu_5n1b.等级突破显示
    等级突破显示.name = "等级突破显示"
    __TS__ClassExtends(
        等级突破显示,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 等级突破显示.prototype.____constructor(self, obj, 当前升级最高等级)
        __TS__SuperTypeArgumentsFuncWrapper(等级突破显示, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.当前升级最高等级 = 当前升级最高等级
        self.event_name = "等级突破显示"
        self.autoForward = false
    end
    busiyixiantu_5n1b.怪物死亡文字修改:add_event_common({obj = base.game, event_name = "修改提示怪物死亡数量UI文字"})
    busiyixiantu_5n1b.大黑鸟死亡显示和修炼室显示修改:add_event_common({obj = base.game, event_name = "大黑鸟死亡事件"})
    busiyixiantu_5n1b.关闭新手提示:add_event_common({obj = base.game, event_name = "进入修炼室"})
    busiyixiantu_5n1b.更新UI玩家:add_event_common({obj = base.any_unit, event_name = "单位-属性变化"})
    busiyixiantu_5n1b.更新UI:add_event_common({obj = base.any_unit, event_name = "单位-属性变化"})
    busiyixiantu_5n1b.更新经验条:add_event_common({obj = base.any_unit, event_name = "单位-属性变化"})
    busiyixiantu_5n1b.不能减怪:add_event_common({obj = base.game, event_name = "不能再减怪了"})
    busiyixiantu_5n1b.加怪了:add_event_common({obj = base.game, event_name = "加怪了"})
    busiyixiantu_5n1b.挑战中:add_event_common({obj = base.game, event_name = "加怪挑战中"})
    busiyixiantu_5n1b.挑战完毕:add_event_common({obj = base.game, event_name = "加怪完成或者失败"})
    busiyixiantu_5n1b.减怪UI修改:add_event_common({obj = base.game, event_name = "减怪UI"})
    busiyixiantu_5n1b.等级突破:add_event_common({obj = base.game, event_name = "等级突破显示"})
    busiyixiantu_5n1b.开始挑战:add_event_common({obj = base.game, event_name = "本地玩家_rpg挑战开始"})
    busiyixiantu_5n1b.挑战测试:add_event_common({obj = base.game, event_name = "本地玩家_创建rpg_challenge"})
    busiyixiantu_5n1b.jj:add_event_common({obj = base.game, event_name = "游戏-开始"})
end
