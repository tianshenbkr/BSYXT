local ____lualib = base.tsc
local __TS__TypeReference = ____lualib.__TS__TypeReference
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
validator = validator or ({})
do
    ---
    -- @noSelf
    validator.validator_9155707 = function(对象)
        local 单位 = base.force_as(
            __TS__TypeReference(Unit, {}),
            对象
        )
        local result = 单位:get_display_name()
        return result
    end
    ---
    -- @noSelf
    validator.validator_135285719 = function(对象)
        local 单位 = base.force_as(
            __TS__TypeReference(Unit, {}),
            对象
        )
        local result = "无描述"
        if 单位.cache.Description ~= nil and 单位.cache.Description ~= "" then
            result = base.i18n.get_text_ex(
                单位.cache.Description,
                base.i18n.get_lang()
            )
        else
        end
        return result
    end
    ---
    -- @noSelf
    validator.validator_25166946 = function(对象)
        local 单位 = base.force_as(
            __TS__TypeReference(Unit, {}),
            对象
        )
        local result = 单位.cache.Icon
        return result
    end
    ---
    -- @noSelf
    validator.validator_25626537 = function(对象)
        local result = 0
        return result
    end
    ---
    -- @noSelf
    validator.validator_216264469 = function(对象)
        local result = 0
        return result
    end
    ---
    -- @noSelf
    validator.validator_240778512 = function(对象)
        local 物品 = base.force_as(
            __TS__TypeReference(Item, {}),
            对象
        )
        local result = base.i18n.get_text_ex(
            物品.cache.Name,
            base.i18n.get_lang()
        )
        return result
    end
    ---
    -- @noSelf
    validator.validator_268327356 = function(对象)
        local 物品 = base.force_as(
            __TS__TypeReference(Item, {}),
            对象
        )
        local result = "无描述"
        if 物品.cache.Description ~= nil and 物品.cache.Description ~= "" then
            result = base.i18n.get_text_ex(
                物品.cache.Description,
                base.i18n.get_lang()
            )
        else
        end
        return result
    end
    ---
    -- @noSelf
    validator.validator_149965755 = function(对象)
        local 物品 = base.force_as(
            __TS__TypeReference(Item, {}),
            对象
        )
        local result = 物品.cache.Icon
        return result
    end
    ---
    -- @noSelf
    validator.validator_51091782 = function(对象)
        local result = 0
        return result
    end
    ---
    -- @noSelf
    validator.validator_228843244 = function(对象)
        local result = 0
        return result
    end
    ---
    -- @noSelf
    validator.validator_40883262 = function(对象)
        local 技能 = base.force_as(
            __TS__TypeReference(Skill, {}),
            对象
        )
        local result = base.i18n.get_text_ex(
            技能.cache.Name,
            base.i18n.get_lang()
        )
        return result
    end
    ---
    -- @noSelf
    validator.validator_242268571 = function(对象)
        local 技能 = base.force_as(
            __TS__TypeReference(Skill, {}),
            对象
        )
        local result = 技能:get_tip()
        return result
    end
    ---
    -- @noSelf
    validator.validator_219755542 = function(对象)
        local 技能 = base.force_as(
            __TS__TypeReference(Skill, {}),
            对象
        )
        local result = 技能.cache.IconName
        local 开关技能数编表 = base.force_as(
            __TS__TypeReference(_OBJ__spell_SpellToggle, {}),
            技能.cache
        )
        local 段数 = 0
        local 多段图标 = "字符串"
        if 技能:is_toggled_on() then
            if 开关技能数编表.IconNameOff ~= nil and 开关技能数编表.IconNameOff ~= "" and 开关技能数编表.IconNameOff ~= "unkown" then
                result = 开关技能数编表.IconNameOff
            else
            end
        else
        end
        if 技能.cache.MultiPhaseSetting ~= nil and 技能.cache.MultiPhaseSetting.IsMultiPhase == true and 技能.cache.MultiPhaseSetting.MultiPhaseConfig ~= nil then
            段数 = base.math.min(
                #技能.cache.MultiPhaseSetting.MultiPhaseConfig,
                技能:get_phase()
            )
            段数 = 段数 - 1
            多段图标 = 技能.cache.MultiPhaseSetting.MultiPhaseConfig[段数 + 1].Icon
            if 多段图标 ~= nil and 多段图标 ~= "" and 多段图标 ~= "unkown" then
                result = 多段图标
            else
            end
        else
        end
        return result
    end
    ---
    -- @noSelf
    validator.validator_14998893 = function(对象)
        local 技能 = base.force_as(
            __TS__TypeReference(Skill, {}),
            对象
        )
        local result = 技能:get_max_show_cd()
        return result
    end
    ---
    -- @noSelf
    validator.validator_117750349 = function(对象)
        local 技能 = base.force_as(
            __TS__TypeReference(Skill, {}),
            对象
        )
        local result = 技能:get_current_show_cd()
        return result
    end
    ---
    -- @noSelf
    validator.validator_75992055 = function(对象)
        local Buff = base.force_as(
            __TS__TypeReference(Buff, {}),
            对象
        )
        local result = base.i18n.get_text_ex(
            Buff.cache.Name,
            base.i18n.get_lang()
        )
        return result
    end
    ---
    -- @noSelf
    validator.validator_177744544 = function(对象)
        local Buff = base.force_as(
            __TS__TypeReference(Buff, {}),
            对象
        )
        local result = "无描述"
        if Buff.cache.Description ~= nil and Buff.cache.Description ~= "" then
            result = base.i18n.get_text_ex(
                Buff.cache.Description,
                base.i18n.get_lang()
            )
        else
        end
        return result
    end
    ---
    -- @noSelf
    validator.validator_131864409 = function(对象)
        local Buff = base.force_as(
            __TS__TypeReference(Buff, {}),
            对象
        )
        local result = Buff.cache.BuffIcon
        return result
    end
    ---
    -- @noSelf
    validator.validator_235454563 = function(对象)
        local Buff = base.force_as(
            __TS__TypeReference(Buff, {}),
            对象
        )
        local result = Buff:get_time()
        return result
    end
    ---
    -- @noSelf
    validator.validator_102943768 = function(对象)
        local Buff = base.force_as(
            __TS__TypeReference(Buff, {}),
            对象
        )
        local result = Buff:get_remaining()
        return result
    end
    ---
    -- @noSelf
    validator.validator_38385052 = function(移动器Id, 流逝时间, 弹道单位, 施法者单位, 目标单位, 发射点, 目标点)
        local 半径 = base.point_distance(发射点, 目标点) * 0.5
        local 初始角度 = base.point_angle(目标点, 发射点)
        local 圆心 = base.point_move(目标点, 初始角度, 半径)
        local 当前位置 = base.point_move(圆心, 初始角度 + 流逝时间 * 100, 半径)
        base.set_unit_location_and_height(弹道单位, 当前位置, 150)
    end
    ---
    -- @noSelf
    validator.validator_140376133 = function(ctrl, mouse_btn_id)
    end
    ---
    -- @noSelf
    validator.validator_59636906 = function(ctrl, mouse_btn_id)
    end
    ---
    -- @noSelf
    validator.validator_263363057 = function(ctrl, mouse_btn_id)
        base.gui_get_part_as(
            __TS__TypeReference(_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板, {}),
            base.gui_get_main_page(),
            "背包"
        ).show = true
    end
    ---
    -- @noSelf
    validator.validator_85197307 = function(ctrl, mouse_btn_id)
        busiyixiantu_5n1b:func_属性兑换面板显示(true)
    end
    ---
    -- @noSelf
    validator.validator_84929491 = function(ctrl, mouse_btn_id)
        base.gui_get_part_as(
            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
            base.gui_get_main_page(),
            "人物属性主面板"
        ).show = false
    end
    ---
    -- @noSelf
    validator.validator_124600748 = function(ctrl, mouse_btn_id)
        base.gui_get_part_as(
            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
            base.gui_get_main_page(),
            "爬塔面板"
        ).show = false
    end
    ---
    -- @noSelf
    validator.validator_191977985 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.关闭背包, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_67645632 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.减怪, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_262311033 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.加怪, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_72546884 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.加怪, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_217787262 = function(ctrl, mouse_btn_id)
        if base.gui_get_part_as(
            __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
            base.gui_get_main_page(),
            "人物属性主面板"
        ).show == true then
            base.gui_get_part_as(
                __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                base.gui_get_main_page(),
                "人物属性主面板"
            ).show = false
        else
            base.gui_get_part_as(
                __TS__TypeReference(_OBJ__gui_ctrl_button, {}),
                base.gui_get_main_page(),
                "人物属性主面板"
            ).show = true
        end
    end
    ---
    -- @noSelf
    validator.validator_211722441 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.打开爬塔, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_30125432 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.关闭背包, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_4442961 = function(ctrl, mouse_btn_id)
        ctrl.show = false
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.挑战等级突破BOSS, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_79025070 = function(ctrl, mouse_btn_id)
        if base.gui_get_part_as(
            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
            base.gui_get_main_page(),
            "十二个卡牌格子"
        ).show == true then
            base.gui_get_part_as(
                __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                base.gui_get_main_page(),
                "十二个卡牌格子"
            ).show = false
        else
            base.gui_get_part_as(
                __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
                base.gui_get_main_page(),
                "十二个卡牌格子"
            ).show = true
        end
    end
    ---
    -- @noSelf
    validator.validator_226313769 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.合成装备, {}, base.game, 1))
    end
    ---
    -- @noSelf
    validator.validator_241699491 = function(ctrl, mouse_btn_id)
        log.warn("不能生成语句: 未找到元素：[TRG_ENV: client, packageName: busiyixiantu_5n1b, id: CustomEvent:确认:4130446664:Constructor]")
    end
    ---
    -- @noSelf
    validator.validator_140731327 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.进入修炼室, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_253268302 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.减怪, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_44643084 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.返回主城, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_205931717 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.合成装备, {}, base.game, 0))
    end
    ---
    -- @noSelf
    validator.validator_75208694 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.进入修炼室, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_143570264 = function(ctrl, mouse_btn_id)
        base.send_custom_event(__TS__New(busiyixiantu_5n1b.点击游戏胜利或者失败, {}, base.game))
    end
    ---
    -- @noSelf
    validator.validator_111214720 = function(ctrl, mouse_btn_id)
        log.warn("不能生成语句: 未找到元素：[TRG_ENV: client, packageName: busiyixiantu_5n1b, id: CustomEvent:选择敏捷:1934544489:Constructor]")
    end
    ---
    -- @noSelf
    validator.validator_6167014 = function(ctrl, mouse_btn_id)
        log.warn("不能生成语句: 未找到元素：[TRG_ENV: client, packageName: busiyixiantu_5n1b, id: CustomEvent:选择根骨:3533676526:Constructor]")
    end
    ---
    -- @noSelf
    validator.validator_108273333 = function(ctrl, mouse_btn_id)
        log.warn("不能生成语句: 未找到元素：[TRG_ENV: client, packageName: busiyixiantu_5n1b, id: CustomEvent:选择神念:1352440991:Constructor]")
    end
    local function init_validator_0(self)
        local data = nil
        data = base.eff.cache("$$.gameplay.dflt.default_units_ts_ObjectShowMethod")
        if data then
            data.ShowNameMethod = validator.validator_9155707
            data.TipsMethod = validator.validator_135285719
            data.IconMethod = validator.validator_25166946
            data.MaxCoolDownMethod = validator.validator_25626537
            data.CoolDownMethod = validator.validator_216264469
        end
        data = base.eff.cache("$$.gameplay.dflt.default_units_ts_ObjectShowMethod_1")
        if data then
            data.ShowNameMethod = validator.validator_240778512
            data.TipsMethod = validator.validator_268327356
            data.IconMethod = validator.validator_149965755
            data.MaxCoolDownMethod = validator.validator_51091782
            data.CoolDownMethod = validator.validator_228843244
        end
        data = base.eff.cache("$$.gameplay.dflt.default_units_ts_ObjectShowMethod_2")
        if data then
            data.ShowNameMethod = validator.validator_40883262
            data.TipsMethod = validator.validator_242268571
            data.IconMethod = validator.validator_219755542
            data.MaxCoolDownMethod = validator.validator_14998893
            data.CoolDownMethod = validator.validator_117750349
        end
        data = base.eff.cache("$$.gameplay.dflt.default_units_ts_ObjectShowMethod_3")
        if data then
            data.ShowNameMethod = validator.validator_75992055
            data.TipsMethod = validator.validator_177744544
            data.IconMethod = validator.validator_131864409
            data.MaxCoolDownMethod = validator.validator_235454563
            data.CoolDownMethod = validator.validator_102943768
        end
        data = base.eff.cache("$$default_units_ts.unit.火龙.MoverFunction")
        if data then
            data.FunctionClient_UI = validator.validator_38385052
        end
    end
    init_validator_0(nil)
end
