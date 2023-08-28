module validator {
	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod:Data.Game.ShowNameMethod
	/** @noSelf */
	export let validator_9155707:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let 单位: Unit = base.force_as<Unit>(对象);
		let result: string = 单位.get_display_name();
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod:Data.Game.TipsMethod
	/** @noSelf */
	export let validator_135285719:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let 单位: Unit = base.force_as<Unit>(对象);
		let result: string = "无描述";
		if ((((单位.cache.Description != undefined) && (单位.cache.Description != "")))) {
			result = base.i18n.get_text_ex(单位.cache.Description, base.i18n.get_lang());
		} else {
		}
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod:Data.Game.IconMethod
	/** @noSelf */
	export let validator_25166946:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let 单位: Unit = base.force_as<Unit>(对象);
		let result: string = 单位.cache.Icon;
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod:Data.Game.MaxCoolDownMethod
	/** @noSelf */
	export let validator_25626537:(this: void, 对象:object)=>number = (this: void, 对象:object):number => {
		let result: number = 0;
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod:Data.Game.CoolDownMethod
	/** @noSelf */
	export let validator_216264469:(this: void, 对象:object)=>number = (this: void, 对象:object):number => {
		let result: number = 0;
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_1:Data.Game.ShowNameMethod
	/** @noSelf */
	export let validator_240778512:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let 物品: Item = base.force_as<Item>(对象);
		let result: string = base.i18n.get_text_ex(物品.cache.Name, base.i18n.get_lang());
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_1:Data.Game.TipsMethod
	/** @noSelf */
	export let validator_268327356:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let 物品: Item = base.force_as<Item>(对象);
		let result: string = "无描述";
		if (((物品.cache.Description != undefined))&&((物品.cache.Description != ""))) {
			result = base.i18n.get_text_ex(物品.cache.Description, base.i18n.get_lang());
		} else {
		}
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_1:Data.Game.IconMethod
	/** @noSelf */
	export let validator_149965755:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let 物品: Item = base.force_as<Item>(对象);
		let result: string = 物品.cache.Icon;
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_1:Data.Game.MaxCoolDownMethod
	/** @noSelf */
	export let validator_51091782:(this: void, 对象:object)=>number = (this: void, 对象:object):number => {
		let result: number = 0;
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_1:Data.Game.CoolDownMethod
	/** @noSelf */
	export let validator_228843244:(this: void, 对象:object)=>number = (this: void, 对象:object):number => {
		let result: number = 0;
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_2:Data.Game.ShowNameMethod
	/** @noSelf */
	export let validator_40883262:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let 技能: Skill = base.force_as<Skill>(对象);
		let result: string = base.i18n.get_text_ex(技能.cache.Name, base.i18n.get_lang());
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_2:Data.Game.TipsMethod
	/** @noSelf */
	export let validator_242268571:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let 技能: Skill = base.force_as<Skill>(对象);
		let result: string = 技能.get_tip();
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_2:Data.Game.IconMethod
	/** @noSelf */
	export let validator_219755542:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let 技能: Skill = base.force_as<Skill>(对象);
		let result: string = 技能.cache.IconName;
		let 开关技能数编表: _OBJ__spell_SpellToggle | undefined = base.force_as<_OBJ__spell_SpellToggle>(技能.cache);
		let 段数: number = 0;
		let 多段图标: string = "字符串";
		if ((技能.is_toggled_on())) {
			if (((开关技能数编表.IconNameOff != undefined))&&((开关技能数编表.IconNameOff != ""))&&((开关技能数编表.IconNameOff != "unkown"))) {
				result = 开关技能数编表.IconNameOff;
			} else {
			}
		} else {
		}
		if (((技能.cache.MultiPhaseSetting != undefined))&&((技能.cache.MultiPhaseSetting.IsMultiPhase == true))&&((技能.cache.MultiPhaseSetting.MultiPhaseConfig != undefined))) {
			段数 = base.math.min(技能.cache.MultiPhaseSetting.MultiPhaseConfig.length, 技能.get_phase());
			段数 = (段数 - 1);
			多段图标 = 技能.cache.MultiPhaseSetting.MultiPhaseConfig[段数].Icon;
			if (((多段图标 != undefined))&&((多段图标 != ""))&&((多段图标 != "unkown"))) {
				result = 多段图标;
			} else {
			}
		} else {
		}
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_2:Data.Game.MaxCoolDownMethod
	/** @noSelf */
	export let validator_14998893:(this: void, 对象:object)=>number = (this: void, 对象:object):number => {
		let 技能: Skill = base.force_as<Skill>(对象);
		let result: number = 技能.get_max_show_cd();
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_2:Data.Game.CoolDownMethod
	/** @noSelf */
	export let validator_117750349:(this: void, 对象:object)=>number = (this: void, 对象:object):number => {
		let 技能: Skill = base.force_as<Skill>(对象);
		let result: number = 技能.get_current_show_cd();
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_3:Data.Game.ShowNameMethod
	/** @noSelf */
	export let validator_75992055:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let Buff: Buff = base.force_as<Buff>(对象);
		let result: string = base.i18n.get_text_ex(Buff.cache.Name, base.i18n.get_lang());
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_3:Data.Game.TipsMethod
	/** @noSelf */
	export let validator_177744544:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let Buff: Buff = base.force_as<Buff>(对象);
		let result: string = "无描述";
		if (((Buff.cache.Description != undefined))&&((Buff.cache.Description != ""))) {
			result = base.i18n.get_text_ex(Buff.cache.Description, base.i18n.get_lang());
		} else {
		}
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_3:Data.Game.IconMethod
	/** @noSelf */
	export let validator_131864409:(this: void, 对象:object)=>string = (this: void, 对象:object):string => {
		let Buff: Buff = base.force_as<Buff>(对象);
		let result: string = Buff.cache.BuffIcon;
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_3:Data.Game.MaxCoolDownMethod
	/** @noSelf */
	export let validator_235454563:(this: void, 对象:object)=>number = (this: void, 对象:object):number => {
		let Buff: Buff = base.force_as<Buff>(对象);
		let result: number = Buff.get_time();
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_ObjectShowMethod_3:Data.Game.CoolDownMethod
	/** @noSelf */
	export let validator_102943768:(this: void, 对象:object)=>number = (this: void, 对象:object):number => {
		let Buff: Buff = base.force_as<Buff>(对象);
		let result: number = Buff.get_remaining();
		return result;
	}

	//$$default_units_ts.unit.火龙.MoverFunction:Data.Game.FunctionClient_UI
	/** @noSelf */
	export let validator_38385052:(this: void, 移动器Id:IdPreset<"mover_id">, 流逝时间:number, 弹道单位:Unit, 施法者单位:Unit, 目标单位:Unit, 发射点:Point, 目标点:Point)=>void = (this: void, 移动器Id:IdPreset<"mover_id">, 流逝时间:number, 弹道单位:Unit, 施法者单位:Unit, 目标单位:Unit, 发射点:Point, 目标点:Point):void => {
		let 半径: number = (base.point_distance(发射点, 目标点) * 0.5);
		let 初始角度: number = base.point_angle(目标点, 发射点);
		let 圆心: Point = base.point_move(目标点, 初始角度, 半径);
		let 当前位置: Point = base.point_move(圆心, (初始角度 + (流逝时间 * 100)), 半径);
		base.set_unit_location_and_height(弹道单位, 当前位置, 150);
	}

	/////custom_click.lua
	/////custom_click.lua
	/////custom_click.lua
	/////custom_click.lua
	/////custom_click.lua
	/** @noSelf */
	export let validator_31628852:(this: void, ctrl:_OBJ__gui_ctrl_label, mouse_btn_id:number)=>void = (this: void, ctrl:_OBJ__gui_ctrl_label, mouse_btn_id:number):void => {
	}

	/////on_click_sxdh.lua
	/** @noSelf */
	export let validator_85197307:(this: void, ctrl:_OBJ__gui_ctrl_button, mouse_btn_id:number)=>void = (this: void, ctrl:_OBJ__gui_ctrl_button, mouse_btn_id:number):void => {
		busiyixiantu_5n1b.func_属性兑换面板显示(true);
	}

	/////关闭人物属性主面板.lua
	/** @noSelf */
	export let validator_84929491:(this: void, ctrl:_OBJ__gui_ctrl_label, mouse_btn_id:number)=>void = (this: void, ctrl:_OBJ__gui_ctrl_label, mouse_btn_id:number):void => {
		base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性主面板").show = false;
	}

	/////减怪.lua
	/** @noSelf */
	export let validator_148110389:(this: void, ctrl:_OBJ__gui_ctrl_button, mouse_btn_id:number)=>void = (this: void, ctrl:_OBJ__gui_ctrl_button, mouse_btn_id:number):void => {
		base.send_custom_event(new busiyixiantu_5n1b.减怪(((base.game) as unknown as base.Game)));
	}

	/////加怪.lua
	/** @noSelf */
	export let validator_262311033:(this: void, ctrl:_OBJ__gui_ctrl_button, mouse_btn_id:number)=>void = (this: void, ctrl:_OBJ__gui_ctrl_button, mouse_btn_id:number):void => {
		base.send_custom_event(new busiyixiantu_5n1b.加怪(((base.game) as unknown as base.Game)));
	}

	/////打开人物属性主面板.lua
	/** @noSelf */
	export let validator_67552673:(this: void, ctrl:_OBJ__gui_ctrl_panel, mouse_btn_id:number)=>void = (this: void, ctrl:_OBJ__gui_ctrl_panel, mouse_btn_id:number):void => {
		if (((base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性主面板").show == true))) {
			base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性主面板").show = false;
		} else {
			base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性主面板").show = true;
		}
	}

	/////挑战等级突破BOSS.lua
	/** @noSelf */
	export let validator_226993677:(this: void, ctrl:_OBJ__gui_ctrl_button, mouse_btn_id:number)=>void = (this: void, ctrl:_OBJ__gui_ctrl_button, mouse_btn_id:number):void => {
		base.send_custom_event(new busiyixiantu_5n1b.挑战等级突破BOSS(((base.game) as unknown as base.Game)));
	}

	/////查看卡牌.lua
	/** @noSelf */
	export let validator_97954689:(this: void, ctrl:_OBJ__gui_ctrl_label, mouse_btn_id:number)=>void = (this: void, ctrl:_OBJ__gui_ctrl_label, mouse_btn_id:number):void => {
		if (((base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "十二个卡牌格子").show == true))) {
			base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "十二个卡牌格子").show = false;
		} else {
			base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "十二个卡牌格子").show = true;
		}
	}

	/////进入修炼室.lua
	/** @noSelf */
	export let validator_47974069:(this: void, ctrl:_OBJ__gui_ctrl_button, mouse_btn_id:number)=>void = (this: void, ctrl:_OBJ__gui_ctrl_button, mouse_btn_id:number):void => {
		base.send_custom_event(new busiyixiantu_5n1b.进入修炼室(((base.game) as unknown as base.Game)));
	}

	//init validators
	function init_validator_0() {
		let data: any = undefined
		if (data = base.eff.cache("$$.gameplay.dflt.default_units_ts_ObjectShowMethod")) {
			data.ShowNameMethod = validator_9155707
			data.TipsMethod = validator_135285719
			data.IconMethod = validator_25166946
			data.MaxCoolDownMethod = validator_25626537
			data.CoolDownMethod = validator_216264469
		}
		if (data = base.eff.cache("$$.gameplay.dflt.default_units_ts_ObjectShowMethod_1")) {
			data.ShowNameMethod = validator_240778512
			data.TipsMethod = validator_268327356
			data.IconMethod = validator_149965755
			data.MaxCoolDownMethod = validator_51091782
			data.CoolDownMethod = validator_228843244
		}
		if (data = base.eff.cache("$$.gameplay.dflt.default_units_ts_ObjectShowMethod_2")) {
			data.ShowNameMethod = validator_40883262
			data.TipsMethod = validator_242268571
			data.IconMethod = validator_219755542
			data.MaxCoolDownMethod = validator_14998893
			data.CoolDownMethod = validator_117750349
		}
		if (data = base.eff.cache("$$.gameplay.dflt.default_units_ts_ObjectShowMethod_3")) {
			data.ShowNameMethod = validator_75992055
			data.TipsMethod = validator_177744544
			data.IconMethod = validator_131864409
			data.MaxCoolDownMethod = validator_235454563
			data.CoolDownMethod = validator_102943768
		}
		if (data = base.eff.cache("$$default_units_ts.unit.火龙.MoverFunction")) {
			data.FunctionClient_UI = validator_38385052
		}
	}
	init_validator_0()
}
