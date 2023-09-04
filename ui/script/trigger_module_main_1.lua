local ____lualib = base.tsc
local __TS__Keyword = ____lualib.__TS__Keyword
local __TS__TypeReference = ____lualib.__TS__TypeReference
local __TS__Class = ____lualib.__TS__Class
local __TS__ClassExtends = ____lualib.__TS__ClassExtends
local __TS__SuperTypeArgumentsFuncWrapper = ____lualib.__TS__SuperTypeArgumentsFuncWrapper
local __TS__New = ____lualib.__TS__New
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
                            "修炼室按钮"
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
    busiyixiantu_5n1b.游戏初始化 = base.trigger_new(
        function(当前触发器, e)
            if true then
                busiyixiantu_5n1b.消息计时器:restart()
            end
        end,
        {},
        false,
        nil,
        true
    )
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
    busiyixiantu_5n1b.返回主城 = __TS__Class()
    local 返回主城 = busiyixiantu_5n1b.返回主城
    返回主城.name = "返回主城"
    __TS__ClassExtends(
        返回主城,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 返回主城.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(返回主城, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "返回主城"
        self.autoForward = true
    end
    busiyixiantu_5n1b.更新UI玩家 = base.trigger_new(
        function(当前触发器, e)
            local 人物属性主面板 = base.gui_get_part_as(
                __TS__Keyword("any"),
                base.gui_get_main_page(),
                "人物属性主面板"
            )
            if base.player(1):get_hero() ~= nil then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "每秒攻击"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒攻击")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "生命增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("生命增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "生命恢复"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("生命恢复")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "攻击回血"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("攻击回血")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "伤害抵挡"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("伤害抵挡")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "伤害躲避"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("伤害躲避")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "物理伤害"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("物理伤害")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "法术伤害"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("法术伤害")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "额外经验"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("额外经验")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "装备爆率"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("装备爆率")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "幸运值"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("幸运值")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "刷怪效率"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("刷怪效率")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "每秒根骨"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒根骨")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "每秒身法"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒身法")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "每秒神念"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒神念")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "每秒生命"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒生命")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "每秒攻击"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒攻击")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "每秒防御"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("每秒防御")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "杀敌根骨"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("杀敌根骨")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "杀敌身法"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("杀敌身法")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "杀敌神念"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("杀敌神念")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "杀敌生命"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("杀敌生命")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "杀敌攻击"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("杀敌攻击")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "生命增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("生命增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "伤害增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("伤害增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "根骨增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("根骨增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "神念增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("神念增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "身法增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("身法增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "最终生命增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终生命增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "最终伤害增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终伤害增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "最终物穿增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终物穿增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "最终法穿增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终法穿增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "最终物爆增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终物爆增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "最终法爆增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终法爆增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
                    "最终普攻增幅"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("最终普攻增幅")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    人物属性主面板,
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
                        "人物属性大面板"
                    ),
                    "人物境界文本"
                ).text = table.concat({
                    base.force_as(
                        __TS__Keyword("string"),
                        base.player(1):get_hero():get("等级")
                    ),
                    "级"
                })
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
                        base.math.floor(base.player(1):get_hero():get("生命"))
                    ),
                    "/",
                    base.force_as(
                        __TS__Keyword("string"),
                        base.math.floor(base.player(1):get_hero():get("生命上限"))
                    )
                })
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "顶端面板"
                        ),
                        "金币"
                    ),
                    "金币数"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("金钱")
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "顶端面板"
                        ),
                        "杀敌"
                    ),
                    "杀敌数"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    base.player(1):get("击杀")
                )
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
    busiyixiantu_5n1b.主城修炼室隐藏 = base.trigger_new(
        function(当前触发器, e)
            if true then
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "返回主城"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "挑战测试"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "属性兑换"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "背包"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "爬塔"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                    base.gui_get_main_page(),
                    "升仙令1"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                    base.gui_get_main_page(),
                    "消息提示"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "修炼室"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "等级突破按钮"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "修炼室按钮"
                ).show = true
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.修炼室UI显示 = base.trigger_new(
        function(当前触发器, e)
            if true then
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "返回主城"
                ).show = true
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "挑战测试"
                ).show = true
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "属性兑换"
                ).show = true
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "背包"
                ).show = true
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "爬塔"
                ).show = true
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                    base.gui_get_main_page(),
                    "升仙令1"
                ).show = true
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                    base.gui_get_main_page(),
                    "消息提示"
                ).show = true
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "修炼室"
                ).show = true
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "加怪"
                ).show = true
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "减怪"
                ).show = true
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                        base.gui_get_main_page(),
                        "修炼室"
                    ),
                    "挑战中"
                ).show = false
                log.warn("不能生成语句: 未找到元素：[TRG_ENV: client, packageName: busiyixiantu_5n1b, id: Variable:e:1505952221]")
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "修炼室按钮"
                ).show = false
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.打开修炼室UI = base.trigger_new(
        function(当前触发器, e)
            if true then
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "修炼室按钮"
                ).show = true
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "返回主城"
                ).show = false
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.特殊UI修改需求 = base.trigger_new(
        function(当前触发器, e)
            if true then
            end
        end,
        {},
        true,
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
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "等级突破按钮"
                ).show = true
                busiyixiantu_5n1b:消息文本修改("已达到当前等级上限，请点击等级突破，进行挑战")
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.显示等级 = base.trigger_new(
        function(当前触发器, e)
            if true then
                busiyixiantu_5n1b:消息文本修改(table.concat({
                    "突破成功，等级上限提升至",
                    base.force_as(
                        __TS__Keyword("string"),
                        e.等级
                    )
                }))
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "等级突破按钮"
                ).show = false
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.消息文本修改 = function(____, 要显示的文字)
        busiyixiantu_5n1b.消息提示文本UI.text = 要显示的文字
        busiyixiantu_5n1b.消息计时器:restart()
    end
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
        true,
        nil,
        true
    )
    busiyixiantu_5n1b.UI修改 = base.trigger_new(
        function(当前触发器, e)
            local 字符01 = "字符串"
            local 字符02 = ""
            local 字符 = "字符串"
            if true then
                if e.关卡数 > 5 then
                    字符01 = base.force_as(
                        __TS__Keyword("string"),
                        e.关卡数 / 5
                    )
                    字符02 = base.force_as(
                        __TS__Keyword("string"),
                        e.关卡数 / 5
                    )
                else
                    字符01 = "1"
                    字符02 = base.force_as(
                        __TS__Keyword("string"),
                        e.关卡数
                    )
                end
                字符 = table.concat({
                    "当前关卡",
                    字符01,
                    "-",
                    字符02,
                    "关"
                })
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "修炼室"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "修炼室按钮"
                ).show = true
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "爬塔"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "背包"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "属性兑换"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "挑战测试"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                    base.gui_get_main_page(),
                    "升仙令1"
                ).show = false
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "等级突破按钮"
                ).show = false
                busiyixiantu_5n1b:消息文本修改(字符)
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.奖励文本 = __TS__New(
        Array,
        {__TS__Keyword("string")},
        "奖励：1",
        "奖励：2",
        "奖励：3",
        "奖励：4",
        "奖励：5",
        "奖励：",
        "奖励：",
        "奖励：",
        "奖励：",
        "奖励：",
        "奖励：",
        "奖励：",
        "奖励：",
        "奖励：",
        "奖励：",
        "奖励：",
        "奖励：",
        "奖励："
    )
    busiyixiantu_5n1b.选择主属性 = base.trigger_new(
        function(当前触发器, e)
            if true then
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.升仙令修改消息 = base.trigger_new(
        function(当前触发器, e)
            if e.等级 ~= nil then
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "升仙令1"
                    ),
                    "等级"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    e.等级
                )
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板, {}),
                            base.gui_get_main_page(),
                            "装备栏面板"
                        ),
                        "升仙令"
                    ),
                    "等级"
                ).text = base.force_as(
                    __TS__Keyword("string"),
                    e.等级
                )
                busiyixiantu_5n1b:消息文本修改(table.concat({
                    "挑战成功",
                    "升仙令LV",
                    base.force_as(
                        __TS__Keyword("string"),
                        e.等级 - 1
                    ),
                    "-至",
                    "升仙令LV",
                    base.force_as(
                        __TS__Keyword("string"),
                        e.等级
                    )
                }))
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.关闭背包 = __TS__Class()
    local 关闭背包 = busiyixiantu_5n1b.关闭背包
    关闭背包.name = "关闭背包"
    __TS__ClassExtends(
        关闭背包,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 关闭背包.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(关闭背包, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "关闭背包"
        self.autoForward = false
    end
    busiyixiantu_5n1b.关背包 = base.trigger_new(
        function(当前触发器, e)
            if true then
                if base.gui_get_part_as(
                    __TS__TypeReference(_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板, {}),
                    base.gui_get_main_page(),
                    "背包面板"
                ).show == false then
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板, {}),
                        base.gui_get_main_page(),
                        "背包面板"
                    ).show = true
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板, {}),
                        base.gui_get_main_page(),
                        "装备栏面板"
                    ).show = true
                else
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板, {}),
                        base.gui_get_main_page(),
                        "背包面板"
                    ).show = false
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板, {}),
                        base.gui_get_main_page(),
                        "装备栏面板"
                    ).show = false
                end
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.合成装备 = __TS__Class()
    local 合成装备 = busiyixiantu_5n1b.合成装备
    合成装备.name = "合成装备"
    __TS__ClassExtends(
        合成装备,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 合成装备.prototype.____constructor(self, obj, index)
        __TS__SuperTypeArgumentsFuncWrapper(合成装备, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.index = index
        self.event_name = "合成装备"
        self.autoForward = true
    end
    busiyixiantu_5n1b.进攻怪消息 = base.trigger_new(
        function(当前触发器, e)
            local 波次 = table.concat({
                "第",
                base.force_as(
                    __TS__Keyword("string"),
                    e.波次
                ),
                "波"
            })
            local 时间 = "字符串"
            local 秒 = e.时间
            local 分钟 = 0
            local 每秒 = 0
            if true then
                时间 = table.concat({
                    "进攻倒计时",
                    base.force_as(
                        __TS__Keyword("string"),
                        base.math.floor(分钟)
                    ),
                    "分",
                    base.force_as(
                        __TS__Keyword("string"),
                        秒 - 60 * base.force_as(
                            __TS__Keyword("number"),
                            分钟
                        )
                    ),
                    "秒"
                })
                每秒 = e.时间
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "顶端面板"
                        ),
                        "防守面板"
                    ),
                    "时间"
                ).text = 时间
                base.gui_get_child_ui_by_name_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                    base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_part_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_main_page(),
                            "顶端面板"
                        ),
                        "防守面板"
                    ),
                    "波次"
                ).text = 波次
                base.timer_timer(
                    1,
                    秒,
                    function(计时器)
                        每秒 = 每秒 - 1
                        时间 = table.concat({
                            "进攻倒计时",
                            base.force_as(
                                __TS__Keyword("string"),
                                每秒
                            ),
                            "秒"
                        })
                        base.gui_get_child_ui_by_name_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                            base.gui_get_child_ui_by_name_as(
                                __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                                base.gui_get_part_as(
                                    __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                                    base.gui_get_main_page(),
                                    "顶端面板"
                                ),
                                "防守面板"
                            ),
                            "时间"
                        ).text = 时间
                    end
                )
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.游戏胜利消息 = base.trigger_new(
        function(当前触发器, e)
            if true then
                busiyixiantu_5n1b:消息文本修改("恭喜你，游戏胜利")
                log.info(base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "游戏胜利"
                ).show)
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "游戏胜利"
                ).show = true
                log.info(base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "游戏胜利"
                ).show)
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.游戏失败消息 = base.trigger_new(
        function(当前触发器, e)
            if true then
                busiyixiantu_5n1b:消息文本修改("游戏失败，不要灰心")
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                    base.gui_get_main_page(),
                    "游戏失败"
                ).show = true
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.总计时 = base.trigger_new(
        function(当前触发器, e)
            local 总秒钟 = 0
            local 总分钟 = 0
            local 文字版 = base.gui_get_child_ui_by_name_as(
                __TS__TypeReference(_OBJ__gui_ctrl_label, {}),
                base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                    base.gui_get_main_page(),
                    "顶端面板"
                ),
                "游戏时长"
            )
            if true then
                base.timer_loop(
                    1,
                    function(计时器)
                        总秒钟 = 总秒钟 + 1
                        if 总秒钟 == 60 then
                            总分钟 = 总分钟 + 1
                            总秒钟 = 0
                        else
                        end
                        文字版.text = table.concat({
                            "游戏已进行：",
                            base.force_as(
                                __TS__Keyword("string"),
                                总分钟
                            ),
                            "分",
                            base.force_as(
                                __TS__Keyword("string"),
                                总秒钟
                            ),
                            "秒"
                        })
                    end
                )
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.点击游戏胜利或者失败 = __TS__Class()
    local 点击游戏胜利或者失败 = busiyixiantu_5n1b.点击游戏胜利或者失败
    点击游戏胜利或者失败.name = "点击游戏胜利或者失败"
    __TS__ClassExtends(
        点击游戏胜利或者失败,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 点击游戏胜利或者失败.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(点击游戏胜利或者失败, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "点击游戏胜利或者失败"
        self.autoForward = true
    end
    busiyixiantu_5n1b.老家掉血提示 = base.trigger_new(
        function(当前触发器, e)
            if true then
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.爬塔 = base.trigger_new(
        function(当前触发器, e)
            if true then
                if e.rpg_challenge.link == "$$busiyixiantu_5n1b.rpg_challenge.盲盒怪.root" then
                    e.rpg_challenge:bind_ui_button(base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                        base.gui_get_child_ui_by_name_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_part_as(
                                __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                                base.gui_get_main_page(),
                                "爬塔面板"
                            ),
                            "盲盒怪"
                        ),
                        "下一层"
                    ))
                else
                end
                if e.rpg_challenge.link == "$$busiyixiantu_5n1b.rpg_challenge.秘宝怪.root" then
                    e.rpg_challenge:bind_ui_button(base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                        base.gui_get_child_ui_by_name_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_part_as(
                                __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                                base.gui_get_main_page(),
                                "爬塔面板"
                            ),
                            "秘宝怪"
                        ),
                        "下一层"
                    ))
                else
                end
                if e.rpg_challenge.link == "$$busiyixiantu_5n1b.rpg_challenge.其他怪.root" then
                    e.rpg_challenge:bind_ui_button(base.gui_get_child_ui_by_name_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                        base.gui_get_child_ui_by_name_as(
                            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                            base.gui_get_part_as(
                                __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                                base.gui_get_main_page(),
                                "爬塔面板"
                            ),
                            "其他怪"
                        ),
                        "下一层"
                    ))
                else
                end
            end
        end,
        {},
        false,
        nil,
        true
    )
    busiyixiantu_5n1b.打开爬塔 = __TS__Class()
    local 打开爬塔 = busiyixiantu_5n1b.打开爬塔
    打开爬塔.name = "打开爬塔"
    __TS__ClassExtends(
        打开爬塔,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 打开爬塔.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(打开爬塔, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "打开爬塔"
        self.autoForward = false
    end
    busiyixiantu_5n1b.爬塔UI = base.trigger_new(
        function(当前触发器, e)
            if true then
                if base.gui_get_part_as(
                    __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                    base.gui_get_main_page(),
                    "爬塔面板"
                ).show == false then
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "爬塔面板"
                    ).show = true
                else
                    base.gui_get_part_as(
                        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                        base.gui_get_main_page(),
                        "爬塔面板"
                    ).show = false
                end
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
            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
            base.gui_get_main_page(),
            "消息提示"
        ),
        "消息文本"
    )
    busiyixiantu_5n1b.消息计时器 = base.timer_loop(
        5,
        function(计时器)
            busiyixiantu_5n1b.消息提示文本UI.text = "            "
        end
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
    busiyixiantu_5n1b.主线任务关闭ui = __TS__Class()
    local 主线任务关闭ui = busiyixiantu_5n1b.主线任务关闭ui
    主线任务关闭ui.name = "主线任务关闭ui"
    __TS__ClassExtends(
        主线任务关闭ui,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 主线任务关闭ui.prototype.____constructor(self, obj, 关卡数)
        __TS__SuperTypeArgumentsFuncWrapper(主线任务关闭ui, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.关卡数 = 关卡数
        self.event_name = "主线任务关闭ui"
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
    busiyixiantu_5n1b.升仙令客户端消息 = __TS__Class()
    local 升仙令客户端消息 = busiyixiantu_5n1b.升仙令客户端消息
    升仙令客户端消息.name = "升仙令客户端消息"
    __TS__ClassExtends(
        升仙令客户端消息,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 升仙令客户端消息.prototype.____constructor(self, obj, 等级)
        __TS__SuperTypeArgumentsFuncWrapper(升仙令客户端消息, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.等级 = 等级
        self.event_name = "升仙令客户端消息"
        self.autoForward = false
    end
    busiyixiantu_5n1b.升仙令选择主属性 = __TS__Class()
    local 升仙令选择主属性 = busiyixiantu_5n1b.升仙令选择主属性
    升仙令选择主属性.name = "升仙令选择主属性"
    __TS__ClassExtends(
        升仙令选择主属性,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 升仙令选择主属性.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(升仙令选择主属性, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "升仙令选择主属性"
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
    busiyixiantu_5n1b.客户端关闭爬塔UI = __TS__Class()
    local 客户端关闭爬塔UI = busiyixiantu_5n1b.客户端关闭爬塔UI
    客户端关闭爬塔UI.name = "客户端关闭爬塔UI"
    __TS__ClassExtends(
        客户端关闭爬塔UI,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 客户端关闭爬塔UI.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(客户端关闭爬塔UI, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "客户端关闭爬塔UI"
        self.autoForward = false
    end
    local 打开修炼室UI = __TS__Class()
    打开修炼室UI.name = "打开修炼室UI"
    __TS__ClassExtends(
        打开修炼室UI,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 打开修炼室UI.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(打开修炼室UI, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "打开修炼室UI"
        self.autoForward = false
    end
    local 显示等级 = __TS__Class()
    显示等级.name = "显示等级"
    __TS__ClassExtends(
        显示等级,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 显示等级.prototype.____constructor(self, obj, 等级)
        __TS__SuperTypeArgumentsFuncWrapper(显示等级, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.等级 = 等级
        self.event_name = "显示等级"
        self.autoForward = false
    end
    local 游戏失败消息 = __TS__Class()
    游戏失败消息.name = "游戏失败消息"
    __TS__ClassExtends(
        游戏失败消息,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 游戏失败消息.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(游戏失败消息, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "游戏失败消息"
        self.autoForward = false
    end
    local 游戏胜利消息 = __TS__Class()
    游戏胜利消息.name = "游戏胜利消息"
    __TS__ClassExtends(
        游戏胜利消息,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 游戏胜利消息.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(游戏胜利消息, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "游戏胜利消息"
        self.autoForward = false
    end
    busiyixiantu_5n1b.玩家_rpg挑战开始 = __TS__Class()
    local 玩家_rpg挑战开始 = busiyixiantu_5n1b.玩家_rpg挑战开始
    玩家_rpg挑战开始.name = "玩家_rpg挑战开始"
    __TS__ClassExtends(
        玩家_rpg挑战开始,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 玩家_rpg挑战开始.prototype.____constructor(self, obj, player, rpg_challenge, id)
        __TS__SuperTypeArgumentsFuncWrapper(玩家_rpg挑战开始, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.player = player
        self.rpg_challenge = rpg_challenge
        self.id = id
        self.event_name = "玩家_rpg挑战开始"
        self.autoForward = false
    end
    busiyixiantu_5n1b.玩家_完成rpg挑战自动退出 = __TS__Class()
    local 玩家_完成rpg挑战自动退出 = busiyixiantu_5n1b.玩家_完成rpg挑战自动退出
    玩家_完成rpg挑战自动退出.name = "玩家_完成rpg挑战自动退出"
    __TS__ClassExtends(
        玩家_完成rpg挑战自动退出,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 玩家_完成rpg挑战自动退出.prototype.____constructor(self, obj, player)
        __TS__SuperTypeArgumentsFuncWrapper(玩家_完成rpg挑战自动退出, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.player = player
        self.event_name = "玩家_完成rpg挑战自动退出"
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
    busiyixiantu_5n1b.进入修炼室消息事件 = __TS__Class()
    local 进入修炼室消息事件 = busiyixiantu_5n1b.进入修炼室消息事件
    进入修炼室消息事件.name = "进入修炼室消息事件"
    __TS__ClassExtends(
        进入修炼室消息事件,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 进入修炼室消息事件.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(进入修炼室消息事件, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "进入修炼室消息事件"
        self.autoForward = false
    end
    local 进攻怪消息 = __TS__Class()
    进攻怪消息.name = "进攻怪消息"
    __TS__ClassExtends(
        进攻怪消息,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 进攻怪消息.prototype.____constructor(self, obj, 波次, 时间)
        __TS__SuperTypeArgumentsFuncWrapper(进攻怪消息, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.波次 = 波次
        self.时间 = 时间
        self.event_name = "进攻怪消息"
        self.autoForward = false
    end
    busiyixiantu_5n1b.怪物死亡文字修改:add_event_common({obj = base.game, event_name = "修改提示怪物死亡数量UI文字"})
    busiyixiantu_5n1b.大黑鸟死亡显示和修炼室显示修改:add_event_common({obj = base.game, event_name = "大黑鸟死亡事件"})
    busiyixiantu_5n1b.关闭新手提示:add_event_common({obj = base.game, event_name = "进入修炼室"})
    busiyixiantu_5n1b.游戏初始化:add_event_common({obj = base.game, event_name = "游戏-开始"})
    busiyixiantu_5n1b.更新UI玩家:add_event_common({obj = base.any_unit, event_name = "单位-属性变化"})
    busiyixiantu_5n1b.更新UI:add_event_common({obj = base.any_unit, event_name = "单位-属性变化"})
    busiyixiantu_5n1b.更新经验条:add_event_common({obj = base.any_unit, event_name = "单位-属性变化"})
    busiyixiantu_5n1b.不能减怪:add_event_common({obj = base.game, event_name = "不能再减怪了"})
    busiyixiantu_5n1b.加怪了:add_event_common({obj = base.game, event_name = "加怪了"})
    busiyixiantu_5n1b.挑战中:add_event_common({obj = base.game, event_name = "加怪挑战中"})
    busiyixiantu_5n1b.挑战完毕:add_event_common({obj = base.game, event_name = "加怪完成或者失败"})
    busiyixiantu_5n1b.减怪UI修改:add_event_common({obj = base.game, event_name = "减怪UI"})
    busiyixiantu_5n1b.主城修炼室隐藏:add_event_common({obj = base.game, event_name = "返回主城"})
    busiyixiantu_5n1b.修炼室UI显示:add_event_common({obj = base.game, event_name = "进入修炼室消息事件"})
    busiyixiantu_5n1b.修炼室UI显示:add_event_common({obj = base.game, event_name = "进入修炼室"})
    busiyixiantu_5n1b.打开修炼室UI:add_event_common({obj = base.game, event_name = "打开修炼室UI"})
    busiyixiantu_5n1b.等级突破:add_event_common({obj = base.game, event_name = "等级突破显示"})
    busiyixiantu_5n1b.显示等级:add_event_common({obj = base.game, event_name = "显示等级"})
    busiyixiantu_5n1b.开始挑战:add_event_common({obj = base.game, event_name = "本地玩家_rpg挑战开始"})
    busiyixiantu_5n1b.挑战测试:add_event_common({obj = base.game, event_name = "本地玩家_创建rpg_challenge"})
    busiyixiantu_5n1b.UI修改:add_event_common({obj = base.game, event_name = "主线任务关闭ui"})
    busiyixiantu_5n1b.选择主属性:add_event_common({obj = base.game, event_name = "升仙令选择主属性"})
    busiyixiantu_5n1b.升仙令修改消息:add_event_common({obj = base.game, event_name = "升仙令客户端消息"})
    busiyixiantu_5n1b.关背包:add_event_common({obj = base.game, event_name = "关闭背包"})
    busiyixiantu_5n1b.进攻怪消息:add_event_common({obj = base.game, event_name = "进攻怪消息"})
    busiyixiantu_5n1b.游戏胜利消息:add_event_common({obj = base.game, event_name = "游戏胜利消息"})
    busiyixiantu_5n1b.游戏失败消息:add_event_common({obj = base.game, event_name = "游戏失败消息"})
    busiyixiantu_5n1b.总计时:add_event_common({obj = base.game, event_name = "游戏-开始"})
    busiyixiantu_5n1b.爬塔:add_event_common({obj = base.game, event_name = "本地玩家_创建rpg_challenge"})
    busiyixiantu_5n1b.爬塔UI:add_event_common({obj = base.game, event_name = "打开爬塔"})
    busiyixiantu_5n1b.爬塔UI:add_event_common({obj = base.game, event_name = "客户端关闭爬塔UI"})
end
