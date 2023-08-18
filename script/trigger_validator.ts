module validator {
	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior:Data.Game.Behavior
	/** @noSelf */
	export let validator_110618627:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let 正在施法: boolean = AI.is_casting(AI.unit);
		return 正在施法;
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_1:Data.Game.Behavior
	/** @noSelf */
	export let validator_183853803:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		if (((AI.unit.has_restriction(UnitBehaviorState["失控"]) == true))) {
			return true;
		} else {
			return false;
		}
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_10:Data.Game.Behavior
	/** @noSelf */
	export let validator_12884627:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 技能: Skill | undefined = AI.params.get("__next_skill");
		let 目标: Unit | undefined = AI.params.get("__ai_target");
		let 是否成功施放技能: boolean = false;
		let 技能计时器: Timer | undefined = AI.params.get("__ai_cast_timer");
		if ((((技能 != undefined) && (目标 != undefined)))) {
			是否成功施放技能 = AI.try_cast_skill(AI.unit, 技能, 目标);
			if (((是否成功施放技能 == true))) {
				if (((技能计时器 != undefined))) {
					技能计时器.remove();
				} else {
				}
				AI.params.set("__ai_cast_timer", undefined);
				AI.params.set("__next_skill", undefined);
				AI.params.set("__ai_battle_walk_target", undefined);
				return true;
			} else {
			}
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_11:Data.Game.Behavior
	/** @noSelf */
	export let validator_71909885:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标: Unit | undefined = AI.params.get("__ai_target");
		let 初始点: Point | undefined = AI.params.get("__ai_born");
		let 强制脱战范围: number | undefined = AI.params.get("__ai_max_reset_range");
		let search_dis: number = 0;
		let new_angle: number = 0;
		let new_point: Point = AI.unit.get_scene_point();
		let 搜敌范围: number = AI.unit.get_ex(单位属性["搜敌范围"], UnitPropertySubType["Final"]);
		let 追逐距离: number = AI.unit.get_ex(单位属性["追逐距离"], UnitPropertySubType["Final"]);
		if (((目标 == undefined))) {
			return false;
		} else {
		}
		if (((追逐距离 <= 0))) {
			追逐距离 = 搜敌范围;
		} else {
		}
		search_dis = base.math.min(AI.attack_range, 追逐距离);
		if (((search_dis == 0))) {
			search_dis = AI.unit.get_ex(单位属性["攻击范围"], UnitPropertySubType["Final"]);
		} else {
		}
		// 小于三百就认为是近战单位 ai就不瞎走了 追击目标
		if (((search_dis < 300))) {
			if (((目标.get_scene_point().distance(AI.unit.get_scene_point()) > search_dis))) {
				AI.params.set("__ai_battle_walk_target", 目标);
			} else {
				AI.params.set("__ai_battle_walk_target", undefined);
			}
			return false;
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_2:Data.Game.Behavior
	/** @noSelf */
	export let validator_44985790:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 初始点: Point | undefined = AI.params.get("__ai_born");
		// 超出最大距离就回初始点
		if ((((AI.params.get("__ai_force_back") != undefined) && (AI.unit.has_module(_OBJ__UnitData_Module["移动"]) == true)))) {
			AI.unit.walk(初始点);
			AI.params.set("__ai_target", undefined);
			if (((AI.unit.get_scene_point().distance(初始点) < 50))) {
				AI.unit.clean_command();
				AI.params.set("__ai_force_back", undefined);
			} else {
			}
			return true;
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_3:Data.Game.Behavior
	/** @noSelf */
	export let validator_32200746:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标单位: Unit | undefined = AI.params.get("__ai_battle_walk_target");
		let 要施放的技能: Skill | undefined = AI.params.get("__next_skill");
		let 目标点: Point | undefined;
		let 移动指令目标点: Point | undefined;
		if (((目标单位 != undefined))) {
			if (((AI.unit.has_module(_OBJ__UnitData_Module["移动"]) == true))) {
				if (((目标单位.is_alive_ex() == true))) {
					目标点 = 目标单位.get_scene_point();
					if ((((AI.unit.get_scene_point().distance(目标点) > 100) && (目标点.is_block() == false) && (要施放的技能 == undefined)))) {
						AI.unit.walk(目标点);
						移动指令目标点 = AI.unit.get_walking_target();
						if ((((移动指令目标点 != undefined) && (移动指令目标点.distance(目标点) > 50)))) {
							AI.unit.clean_command();
							AI.unit.stop();
							AI.params.set("__ai_battle_walk_target", undefined);
						} else {
						}
						return true;
					} else {
						AI.params.set("__ai_battle_walk_target", undefined);
					}
				} else {
					AI.params.set("__ai_battle_walk_target", undefined);
				}
			} else {
				AI.params.set("__ai_battle_walk_target", undefined);
			}
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_4:Data.Game.Behavior
	/** @noSelf */
	export let validator_214424895:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 移动目标点: Point | undefined = AI.params.get("__ai_walk_target");
		if (((AI.params.get("__ai_target") != undefined))) {
			return false;
		} else {
		}
		if ((((移动目标点 != undefined) && AI.unit.has_module(_OBJ__UnitData_Module["移动"])))) {
			if (((AI.unit.get_scene_point().distance(移动目标点) > 50))) {
				AI.unit.walk(移动目标点);
				return true;
			} else {
			}
			AI.unit.clean_command();
			AI.params.set("__ai_walk_target", undefined);
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_5:Data.Game.Behavior
	/** @noSelf */
	export let validator_77181647:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 初始点: Point | undefined = AI.params.get("__ai_born");
		if (((AI.unit.has_module(_OBJ__UnitData_Module["移动"]) && (AI.unit.get_scene_point().distance(初始点) > AI.params.get("__ai_max_reset_range"))))) {
			AI.params.set("__ai_force_back", true);
			AI.unit.walk(初始点);
			return true;
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_6:Data.Game.Behavior
	/** @noSelf */
	export let validator_56391319:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 初始点: Point | undefined = AI.params.get("__ai_born");
		let 目标: Unit | undefined = AI.params.get("__ai_target");
		let 追逐距离: number = AI.unit.get_ex(单位属性["追逐距离"], UnitPropertySubType["Final"]);
		let 搜敌范围: number = AI.unit.get_ex(单位属性["搜敌范围"], UnitPropertySubType["Final"]);
		// 超出了追逐距离 又没有强制追敌的指令就回家
		if (((追逐距离 <= 0))) {
			追逐距离 = 搜敌范围;
		} else {
		}
		if ((((目标 != undefined) && (AI.unit.get_scene_point().distance(目标.get_scene_point()) > 追逐距离) && (AI.params.get("__attacked_timer") == undefined)))) {
			AI.searcher.ignore_unit_for(目标, 1.5);
			AI.params.set("__ai_target", undefined);
			if ((AI.unit.has_module(_OBJ__UnitData_Module["移动"]))) {
				AI.params.set("__ai_walk_target", 初始点);
				AI.unit.walk(初始点);
			} else {
			}
			return true;
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_7:Data.Game.Behavior
	/** @noSelf */
	export let validator_15144200:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标: Unit | undefined = AI.params.get("__ai_target");
		let 攻击计时器: Timer | undefined = AI.params.get("__attacked_timer");
		if (((目标 != undefined))) {
			// 有目标但是 目标是无效单位 或则 目标不是敌人就清空目标
			if ((((目标.is_valid() == false) || (目标.is_alive_ex() == false) || (目标.is_enemy(AI.unit) == false)))) {
				AI.params.set("__ai_target", undefined);
				目标 = undefined;
			} else {
			}
		} else {
		}
		if (((目标 == undefined))) {
			目标 = AI.searcher.execute(((undefined) as unknown as base.PAISearcherDefault));
			if (((目标 != undefined))) {
				// 找到目标 强制要求追5秒
				if (((攻击计时器 != undefined))) {
					攻击计时器.remove();
				} else {
				}
				AI.params.set("__attacked_timer", base.timer_wait(5, ():void => {
					let 新变量: Timer | undefined = AI.params.get("__attacked_timer");
					if (((新变量 != undefined))) {
						新变量.remove();
					} else {
					}
					AI.params.set("__attacked_timer", undefined);
				}));
			} else {
			}
		} else {
		}
		AI.params.set("__ai_target", 目标);
		return result;
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_8:Data.Game.Behavior
	/** @noSelf */
	export let validator_264289186:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标: Unit | undefined = AI.params.get("__ai_target");
		let 原始点: Point | undefined = AI.params.get("__ai_born");
		if (((目标 == undefined))) {
			if ((AI.unit.has_module(_OBJ__UnitData_Module["移动"]))) {
				AI.params.set("__ai_walk_target", 原始点);
				if (((AI.unit.get_scene_point().distance(原始点) > 50))) {
					AI.unit.walk(原始点);
				} else {
				}
			} else {
			}
			return true;
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.testai.default_units_ts_AIBehavior_9:Data.Game.Behavior
	/** @noSelf */
	export let validator_62677470:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标: Unit | undefined = AI.params.get("__ai_target");
		let 技能: Skill | undefined;
		let 技能施放计时器: Timer | undefined = AI.params.get("__ai_cast_timer");
		// 如果有准备施放的技能就不找了
		if (((AI.params.get("__next_skill") != undefined))) {
			return result;
		} else {
		}
		// 如果有目标就取一个技能 并设置为准备施放的技能
		if (((目标 != undefined))) {
			技能 = AI.get_random_skill(AI.unit, 目标);
			AI.params.set("__next_skill", 技能);
		} else {
		}
		if (((技能 != undefined))) {
			// 如果找到了合法技能但是因为各种原因8秒内却没有放出去就清空技能和目标
			if (((技能施放计时器 != undefined))) {
				技能施放计时器.remove();
			} else {
			}
			AI.params.set("__ai_cast_timer", base.timer_wait(8, ():void => {
				let 计时器: Timer | undefined = AI.params.get("__ai_cast_timer");
				AI.params.set("__next_skill", undefined);
				AI.params.set("__ai_target", undefined);
				if (((计时器 != undefined))) {
					计时器.remove();
				} else {
				}
				AI.params.set("__ai_cast_timer", undefined);
			}));
			AI.params.set("__ai_battle_walk_target", undefined);
			AI.params.set("__ai_walk_target", undefined);
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.testai.root:Data.Game.OnAdd
	/** @noSelf */
	export let validator_196587954:(AI:lib_common_ai.AI)=>void= (AI:lib_common_ai.AI):void => {
		let 所属单位: Unit = AI.unit;
		let 搜敌范围: number = AI.search_radius;
		let 攻击范围: number = AI.attack_range;
		let 重置距离: number = 所属单位.get_ex(单位属性["重置距离"], UnitPropertySubType["Final"]);
		if (((重置距离 > 0))) {
			AI.params.set("__ai_max_reset_range", 重置距离);
		} else {
			AI.params.set("__ai_max_reset_range", (攻击范围 + 搜敌范围));
		}
		AI.params.set("__ai_born", 所属单位.get_scene_point());
	}

	//$$default_units_ts.ai.testai.root:Data.Game.OnProvoke
	/** @noSelf */
	export let validator_2653852:(AI:lib_common_ai.AI, 发出刺激的单位:Unit, 激怒预期:boolean, 逃跑预期:boolean)=>void= (AI:lib_common_ai.AI, 发出刺激的单位:Unit, 激怒预期:boolean, 逃跑预期:boolean):void => {
		let 所属单位: Unit = AI.unit;
		let 攻击计时器: Timer | undefined;
		let new_angle: number = 0;
		let speed: number = 0;
		if (((所属单位.is_valid() == false))) {
			return undefined;
		} else {
		}
		if ((((激怒预期 == true) && (AI.params.get("__ai_target") == undefined)))) {
			AI.params.set("__ai_target", 发出刺激的单位);
			攻击计时器 = AI.params.get("__attacked_timer");
			if (((攻击计时器 != undefined))) {
				攻击计时器.remove();
			} else {
			}
			AI.params.set("__attacked_timer", base.timer_wait(5, ():void => {
				let 计时器: Timer | undefined = AI.params.get("__attacked_timer");
				if (((计时器 != undefined))) {
					计时器.remove();
				} else {
				}
				AI.params.set("__attacked_timer", undefined);
			}));
		} else {
		}
		if ((((逃跑预期 == true) && (AI.params.get("__ai_target") == undefined) && (激怒预期 == false)))) {
			if ((所属单位.has_module(_OBJ__UnitData_Module["移动"]))) {
				new_angle = (发出刺激的单位.get_scene_point().angle(所属单位.get_scene_point()) + base.math.random_int(-90, 90));
				speed = 所属单位.get_ex(单位属性["移动速度"], UnitPropertySubType["Final"]);
				AI.params.set("__ai_walk_target", 所属单位.get_scene_point().polar_to_ex(new_angle, base.math.random_int(speed, (speed * 3))));
			} else {
			}
		} else {
		}
	}

	//$$default_units_ts.ai.沿路线前进ai.AIBehavior:Data.Game.Behavior
	/** @noSelf */
	export let validator_165491582:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 施法技能: Cast | undefined = AI.unit.current_skill();
		if ((((施法技能 != undefined) || (AI.unit.has_restriction(UnitBehaviorState["失控"]) == true)))) {
			return true;
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.沿路线前进ai.AIBehavior_1:Data.Game.Behavior
	/** @noSelf */
	export let validator_121906544:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 返回反击起点: boolean | undefined = AI.params.get("to_counter_point");
		let 反击起点: Point | undefined = AI.params.get("counter_point");
		let 追击距离: number | undefined = AI.params.get("pursue_distance");
		let 目标: Unit | undefined = AI.params.get("target_unit");
		// 超出了追击距离就返回反击起点
		if (((返回反击起点 == true))) {
			if (((AI.unit.get_scene_point().distance(反击起点) < 50))) {
				AI.params.set("to_counter_point", undefined);
				AI.params.set("counter_point", undefined);
				AI.params.set("only_return", undefined);
				return false;
			} else {
				AI.params.set("target_unit", undefined);
				AI.params.set("target_point_battle", undefined);
				AI.params.set("next_skill", undefined);
				if ((AI.unit.has_module(_OBJ__UnitData_Module["移动"]))) {
					AI.unit.walk(反击起点);
				} else {
				}
				return true;
			}
		} else {
			if (((目标 != undefined))&&(目标.is_alive_ex())&&((反击起点 != undefined))&&((AI.unit.get_scene_point().distance(反击起点) > 追击距离))) {
				AI.params.set("only_return", true);
				AI.params.set("to_counter_point", true);
				return true;
			} else {
			}
			return false;
		}
	}

	//$$default_units_ts.ai.沿路线前进ai.AIBehavior_2:Data.Game.Behavior
	/** @noSelf */
	export let validator_30746330:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 战斗移动点: Point | undefined = AI.params.get("target_point_battle");
		let 要施放的技能: Skill | undefined = AI.params.get("next_skill");
		if (((AI.unit.has_module(_OBJ__UnitData_Module["移动"]) && (战斗移动点 != undefined)))) {
			if (((AI.unit.get_scene_point().distance(战斗移动点) > 50))&&((战斗移动点.is_block() == false))&&((要施放的技能 == undefined))) {
				AI.unit.walk(战斗移动点);
				return true;
			} else {
				AI.params.set("target_point_battle", undefined);
			}
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.沿路线前进ai.AIBehavior_3:Data.Game.Behavior
	/** @noSelf */
	export let validator_51564695:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标: Unit | undefined = AI.params.get("target_unit");
		let 技能: Skill | undefined = AI.params.get("next_skill");
		let 新技能: Skill | undefined;
		let 技能计时器: Timer | undefined;
		if ((((目标 != undefined) && (技能 == undefined)))) {
			新技能 = AI.get_random_skill(AI.unit, 目标);
			if (((新技能 != undefined))) {
				// 找到技能了 因为各种原因8秒还没施法就清除
				AI.params.set("next_skill", 新技能);
				if (((AI.params.get("cast_skill") != undefined))) {
					技能计时器 = AI.params.get("cast_skill");
					技能计时器.remove();
				} else {
				}
				AI.params.set("cast_skill", base.timer_wait(8, ():void => {
					let 计时器: Timer | undefined = AI.params.get("cast_skill");
					if (((计时器 != undefined))) {
						计时器.remove();
					} else {
					}
					AI.params.set("cast_skill", undefined);
					AI.params.set("target_unit", undefined);
					AI.params.set("next_skill", undefined);
				}));
				AI.params.set("target_point_battle", undefined);
			} else {
			}
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.沿路线前进ai.AIBehavior_4:Data.Game.Behavior
	/** @noSelf */
	export let validator_198778265:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 技能: Skill | undefined = AI.params.get("next_skill");
		let 目标: Unit | undefined = AI.params.get("target_unit");
		let 成功施法技能: boolean = false;
		let 技能计时器: Timer | undefined;
		if (((技能 != undefined))&&((目标 != undefined))) {
			成功施法技能 = AI.try_cast_skill(AI.unit, 技能, 目标);
			if (((成功施法技能 == true))) {
				技能计时器 = AI.params.get("cast_timer");
				if (((技能计时器 != undefined))) {
					技能计时器.remove();
				} else {
				}
				AI.params.set("next_skill", undefined);
				AI.params.set("cast_timer", undefined);
				AI.params.set("target_point_battle", undefined);
				return true;
			} else {
			}
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.沿路线前进ai.AIBehavior_5:Data.Game.Behavior
	/** @noSelf */
	export let validator_87537532:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标: Unit | undefined = AI.params.get("target_unit");
		let 反击起点: Point | undefined = AI.params.get("counter_point");
		let 追击距离: number | undefined = AI.params.get("pursue_distance");
		let search_dis: number = 0;
		let new_angle: number = 0;
		let new_point: Point = AI.unit.get_scene_point();
		if (((目标 == undefined))) {
			return false;
		} else {
		}
		if (((AI.attack_range == 0))) {
			search_dis = AI.unit.get_ex(单位属性["攻击范围"], UnitPropertySubType["Final"]);
		} else {
			search_dis = AI.attack_range;
		}
		// 小于三百就认为是近战单位 ai就不瞎走了 改为追击目标
		if (((search_dis < 300))) {
			if (((目标.get_scene_point().distance(AI.unit.get_scene_point()) > search_dis))) {
				new_angle = 目标.get_scene_point().angle(AI.unit.get_scene_point());
				new_point = 目标.get_scene_point().polar_to_ex(new_angle, (search_dis - 50));
				AI.params.set("target_point_battle", new_point);
			} else {
				AI.params.set("target_point_battle", undefined);
			}
			return false;
		} else {
		}
		// 对于远程如果已有目标就不换了
		if (((AI.params.get("target_point_battle") != undefined))) {
			return false;
		} else {
		}
		// 大于一半的搜敌范围 也算了
		if (((目标.get_scene_point().distance(AI.unit.get_scene_point()) > (search_dis * 0.5)))) {
			return false;
		} else {
		}
		new_angle = (目标.get_scene_point().angle(AI.unit.get_scene_point()) + base.math.random_int(-90, 90));
		new_point = 目标.get_scene_point().polar_to_ex(new_angle, base.math.random_int(base.math.ceil((search_dis * 0.85)), base.math.ceil((search_dis * 0.9))));
		// 不允许超出追击距离
		if (((new_point.distance(反击起点) > 追击距离))) {
			// 再次随机
			new_angle = base.math.random_int(-180, 180);
			new_point = 目标.get_scene_point().polar_to_ex(new_angle, base.math.random_int(base.math.ceil((search_dis * 0.85)), base.math.ceil((search_dis * 0.9))));
			// 如果还不符合就返回
			if (((new_point.distance(反击起点) > 追击距离))) {
				return false;
			} else {
			}
		} else {
		}
		AI.params.set("target_point_battle", new_point);
		return result;
	}

	//$$default_units_ts.ai.沿路线前进ai.AIBehavior_6:Data.Game.Behavior
	/** @noSelf */
	export let validator_80352573:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标: Unit | undefined = AI.params.get("target_unit");
		let 目标点: Point | undefined = AI.params.get("target_point");
		let 发呆计时器: Timer | undefined = AI.params.get("daze_timer");
		if (((目标 != undefined))) {
			if ((((目标.is_valid() == false) || (目标.is_alive_ex() == false)))) {
				AI.params.set("target_unit", undefined);
				目标 = undefined;
			} else {
			}
		} else {
		}
		if (((目标 == undefined))&&((发呆计时器 == undefined))&&(AI.unit.has_module(_OBJ__UnitData_Module["移动"]))&&((目标点 != undefined))&&((AI.unit.get_scene_point().distance(目标点) > 50))) {
			AI.unit.walk(目标点);
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.沿路线前进ai.AIBehavior_7:Data.Game.Behavior
	/** @noSelf */
	export let validator_251720648:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标点: Point | undefined = AI.params.get("target_point");
		let 发呆时间: number | undefined = AI.params.get("daze_time");
		let 下标: number | undefined = AI.params.get("path_index");
		let 路径点数组: Array<Point> | undefined = AI.params.get("path");
		let 是否循环: boolean | undefined = AI.params.get("cycle");
		// 到达目标点 判断发呆 判断是否到达最终点 判断是否循环
		if (((AI.unit.get_scene_point().distance(目标点) < 50))&&((AI.params.get("target_unit") == undefined))) {
			if ((((发呆时间 != undefined) && (发呆时间 > 0)))) {
				AI.params.set("daze_timer", base.timer_wait(发呆时间, ():void => {
					let 发呆计时器: Timer | undefined = AI.params.get("daze_timer");
					发呆计时器.remove();
					AI.params.set("daze_timer", undefined);
				}));
			} else {
			}
			if (((下标 < (路径点数组.length - 1)))) {
				下标 = (下标 + 1);
				AI.params.set("path_index", 下标);
				AI.params.set("target_point", 路径点数组[下标]);
			} else {
				if ((((是否循环 == undefined) || (是否循环 == false)))) {
				} else {
					下标 = 0;
					AI.params.set("path_index", 下标);
					AI.params.set("target_point", 路径点数组[下标]);
				}
			}
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.沿路线前进ai.AIBehavior_8:Data.Game.Behavior
	/** @noSelf */
	export let validator_240608409:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 搜敌范围: number | undefined = AI.params.get("attack_range");
		let 目标: Unit | undefined = AI.params.get("target_unit");
		let 新目标: Unit | undefined;
		let 发呆计时器: Timer | undefined;
		if ((((搜敌范围 == undefined) || (搜敌范围 == 0) || (目标 != undefined)))) {
			return false;
		} else {
			新目标 = AI.searcher.execute(搜敌范围);
			if (((新目标 != undefined))) {
				AI.params.set("target_unit", 新目标);
				AI.params.set("counter_point", AI.unit.get_scene_point());
				发呆计时器 = AI.params.get("daze_timer");
				if (((发呆计时器 != undefined))) {
					发呆计时器.remove();
				} else {
				}
				AI.params.set("daze_timer", undefined);
			} else {
			}
		}
		return result;
	}

	//$$default_units_ts.ai.沿路线前进ai.root:Data.Game.OnAdd
	/** @noSelf */
	export let validator_11286101:(AI:lib_common_ai.AI)=>void= (AI:lib_common_ai.AI):void => {
		let path: Array<Point> = new Array<Point>(AI.unit.get_scene_point());
		let path_line: Line = AI.params.get("path");
		let attack_range: number | undefined = AI.params.get("attack_range");
		let path_length: number = 0;
		let cycle: boolean = AI.params.get("cycle");
		if (((path_line != undefined))) {
			path_length = path_line.get_length();
		} else {
		}
		for (let index = 1; index <= path_length; index += 1) {
			path.push(path_line.get(index));
		}
		// path  路线点数组
		AI.params.set("path", path);
		// 巡逻时的搜敌范围 0表示不攻击路径上的敌人
		if (((attack_range == undefined))) {
			attack_range = 0;
		} else {
		}
		AI.params.set("attack_range", attack_range);
		// 是否反击
		if (((attack_range > 0))) {
			AI.params.set("counter_attack", true);
		} else {
			AI.params.set("counter_attack", false);
		}
		// 是否循环巡逻
		if (((cycle == undefined))) {
			AI.params.set("cycle", false);
		} else {
		}
		// 到达路径上的点时的停留时间
		AI.params.set("daze_time", 0);
		// 反击时间
		AI.params.set("pursue_time", 0);
		// 反击距离
		AI.params.set("pursue_distance", attack_range);
		// 路径数组下标
		AI.params.set("path_index", 0);
		// 当前的目标点
		AI.params.set("target_point", path[0]);
	}

	//$$default_units_ts.ai.沿路线前进ai.root:Data.Game.OnProvoke
	/** @noSelf */
	export let validator_76170749:(AI:lib_common_ai.AI, 发出刺激的单位:Unit, 激怒预期:boolean, 逃跑预期:boolean)=>void= (AI:lib_common_ai.AI, 发出刺激的单位:Unit, 激怒预期:boolean, 逃跑预期:boolean):void => {
		let 发呆计时器: Timer | undefined = AI.params.get("daze_timer");
		let 追击时间: number | undefined = AI.params.get("pursue_time");
		let 追击计时器: Timer | undefined = AI.params.get("pursue_timer");
		let angle: number = 0;
		let speed: number = 0;
		if (((发出刺激的单位.is_valid() == false))) {
			return undefined;
		} else {
		}
		if ((((激怒预期 == true) && (AI.params.get("counter_attack") == true) && (AI.params.get("target_unit") == undefined) && (发出刺激的单位.has_restriction(UnitBehaviorState["无敌"]) == false) && (AI.params.get("only_return") == undefined)))) {
			AI.params.set("target_unit", 发出刺激的单位);
			AI.params.set("counter_point", AI.unit.get_scene_point());
			if (((发呆计时器 != undefined))) {
				发呆计时器.remove();
			} else {
			}
			if (((追击计时器 != undefined))) {
				追击计时器.remove();
			} else {
			}
			AI.params.set("daze_timer", undefined);
			AI.params.set("pursue_timer", base.timer_wait(追击时间, ():void => {
				let 计时器: Timer | undefined = AI.params.get("pursue_timer");
				if (((计时器 != undefined))) {
					计时器.remove();
				} else {
				}
				AI.params.set("pursue_timer", undefined);
				if (((AI.params.get("target_unit") == 发出刺激的单位))) {
					AI.params.set("target_unit", undefined);
				} else {
				}
			}));
		} else {
		}
		// 一般只有会自动攻击的AI才需要逃跑 仅移动的AI不需要
		if ((((逃跑预期 == true) && (AI.params.get("target_unit") != undefined) && (AI.params.get("pursue_distance ") > 0) && (AI.params.get("only_return") == undefined) && AI.unit.has_module(_OBJ__UnitData_Module["移动"])))) {
			angle = (AI.unit.get_scene_point().angle(发出刺激的单位.get_scene_point()) + base.math.random_int(-90, 90));
			speed = AI.unit.get_ex(单位属性["移动速度"], UnitPropertySubType["Final"]);
			AI.params.set("target_point_battle", AI.unit.get_scene_point().polar_to_ex(angle, base.math.random_int(speed, (speed * 3))));
		} else {
		}
	}

	//$$default_units_ts.ai.自定义AI样例.AIBehavior:Data.Game.Behavior
	/** @noSelf */
	export let validator_17460945:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 技能: Cast | undefined = AI.unit.current_skill();
		if (((AI.unit.has_restriction(UnitBehaviorState["失控"]) || AI.unit.has_restriction(UnitBehaviorState["隐藏"]) || (技能 != undefined) || (AI.params.get("master") == undefined)))) {
			return true;
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.自定义AI样例.AIBehavior_1:Data.Game.Behavior
	/** @noSelf */
	export let validator_92352474:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标: Unit | undefined = AI.params.get("target_unit");
		let 主人: Unit | undefined = AI.params.get("master");
		let 所有技能: Array<Skill> = base.unit_all_skill(主人);
		let 新目标: Unit | undefined;
		let 搜敌距离: number = AI.params.get("search_range");
		let 巡逻距离: number = AI.params.get("patrol_range");
		if (((搜敌距离 <= 0))) {
			return false;
		} else {
		}
		if (((目标 != undefined))) {
			if ((((目标.is_valid() == false) || (目标.is_alive_ex() == false)))) {
				目标 = undefined;
				AI.params.set("target_unit", undefined);
				AI.params.set("next_skill", undefined);
			} else {
			}
		} else {
		}
		// 先从主人的所有技能里找目标
		if (((目标 == undefined))) {
			所有技能.forEachEx((元素:Skill, 引用:number):void => {
				if ((base.instance_of<Unit>(元素.last_target))&&(AI.unit.is_enemy(元素.last_target.get_owner()))) {
					目标 = base.force_as<Unit>(元素.last_target);
					return undefined;
				} else {
				}
			});
		} else {
		}
		if (((目标 == undefined))) {
			目标 = AI.searcher.execute(AI.params.get("search_range"));
		} else {
		}
		if ((((目标 != undefined) && 目标.is_valid() && 目标.is_alive_ex()))) {
			AI.params.set("target_unit", 目标);
		} else {
			AI.params.set("target_unit", undefined);
		}
		return result;
	}

	//$$default_units_ts.ai.自定义AI样例.AIBehavior_2:Data.Game.Behavior
	/** @noSelf */
	export let validator_66985415:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 战斗移动点: Point | undefined = AI.params.get("order_move");
		let 要施放的技能: Skill | undefined = AI.params.get("next_skill");
		if (((AI.unit.has_module(_OBJ__UnitData_Module["移动"]) && (战斗移动点 != undefined)))) {
			if (((AI.unit.get_scene_point().distance(战斗移动点) > 50))&&((战斗移动点.is_block() == false))) {
				AI.unit.walk(战斗移动点);
				return true;
			} else {
				AI.params.set("order_move", undefined);
			}
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.自定义AI样例.AIBehavior_3:Data.Game.Behavior
	/** @noSelf */
	export let validator_198202659:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标: Unit | undefined = AI.params.get("target_unit");
		let 技能: Skill | undefined = AI.params.get("next_skill");
		let 新技能: Skill | undefined;
		let 技能计时器: Timer | undefined;
		if ((((目标 == undefined) || (目标.is_valid() == false) || (目标.is_alive_ex() == false)))) {
			目标 = undefined;
			AI.params.set("target_unit", undefined);
		} else {
		}
		if ((((目标 != undefined) && (技能 == undefined)))) {
			新技能 = AI.get_random_skill(AI.unit, 目标);
			if (((新技能 != undefined))) {
				// 找到技能了 因为各种原因8秒还没施法就清除
				AI.params.set("next_skill", 新技能);
				if (((AI.params.get("cast_skill") != undefined))) {
					技能计时器 = AI.params.get("cast_skill");
					技能计时器.remove();
				} else {
				}
				AI.params.set("cast_skill", base.timer_wait(8, ():void => {
					let 计时器: Timer | undefined = AI.params.get("cast_skill");
					if (((计时器 != undefined))) {
						计时器.remove();
					} else {
					}
					AI.params.set("cast_skill", undefined);
					AI.params.set("target_unit", undefined);
					AI.params.set("next_skill", undefined);
				}));
			} else {
			}
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.自定义AI样例.AIBehavior_4:Data.Game.Behavior
	/** @noSelf */
	export let validator_56912231:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 技能: Skill | undefined = AI.params.get("next_skill");
		let 目标: Unit | undefined = AI.params.get("target_unit");
		let 成功施法技能: boolean = false;
		let 技能计时器: Timer | undefined;
		if (((技能 != undefined))&&((目标 != undefined))) {
			成功施法技能 = AI.try_cast_skill(AI.unit, 技能, 目标);
			if (((成功施法技能 == true))) {
				技能计时器 = AI.params.get("cast_timer");
				if (((技能计时器 != undefined))) {
					技能计时器.remove();
				} else {
				}
				AI.params.set("next_skill", undefined);
				AI.params.set("cast_timer", undefined);
				AI.params.set("order_move", undefined);
				return true;
			} else {
				AI.params.set("next_skill", undefined);
				AI.params.set("cast_timer", undefined);
			}
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.自定义AI样例.AIBehavior_5:Data.Game.Behavior
	/** @noSelf */
	export let validator_237463119:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 目标: Unit | undefined = AI.params.get("target_unit");
		let search_dis: number = 0;
		let new_angle: number = 0;
		let new_point: Point = AI.unit.get_scene_point();
		let 主人: Unit = AI.params.get("master");
		if (((目标 == undefined))) {
			return false;
		} else {
		}
		if (((AI.attack_range == 0))) {
			search_dis = AI.unit.get_ex(单位属性["攻击范围"], UnitPropertySubType["Final"]);
		} else {
			search_dis = AI.attack_range;
		}
		// 小于三百就认为是近战单位 ai就不瞎走了 改为追击目标
		if (((search_dis < 300))) {
			if (((目标.get_scene_point().distance(AI.unit.get_scene_point()) > search_dis))) {
				new_angle = 目标.get_scene_point().angle(AI.unit.get_scene_point());
				new_point = 目标.get_scene_point().polar_to_ex(new_angle, (search_dis - 50));
				AI.params.set("order_move", new_point);
			} else {
				AI.params.set("order_move", undefined);
			}
			return false;
		} else {
		}
		// 对于远程如果已有目标就不换了
		if (((AI.params.get("order_move") != undefined))) {
			return false;
		} else {
		}
		// 大于一半的搜敌范围 也算了
		if (((目标.get_scene_point().distance(AI.unit.get_scene_point()) > (search_dis * 0.5)))) {
			return false;
		} else {
		}
		new_angle = 目标.get_scene_point().angle(主人.get_scene_point());
		new_point = 目标.get_scene_point().polar_to_ex(new_angle, search_dis);
		// 不允许超出追击距离
		AI.params.set("order_move", new_point);
		return result;
	}

	//$$default_units_ts.ai.自定义AI样例.AIBehavior_6:Data.Game.Behavior
	/** @noSelf */
	export let validator_23533341:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 主人: Unit | undefined = AI.params.get("master");
		let 新坐标: Point | undefined;
		let 巡逻范围: number = AI.params.get("patrol_range");
		if ((((AI.params.get("order_move") != undefined) || (AI.params.get("target_unit") != undefined) || !(AI.params.get("patrol_permit"))))) {
			return false;
		} else {
		}
		if ((主人.is_walking())) {
			AI.params.set("last_move_time", base.clock());
			return false;
		} else {
		}
		if (((((base.clock() - AI.params.get("last_move_time")) < (AI.params.get("stay_time") * 1000)) || ((base.clock() - AI.params.get("last_patrol_time")) < (AI.params.get("patrol_frequency") * 1000))))) {
			return false;
		} else {
			新坐标 = 主人.get_scene_point().polar_to_ex((主人.get_facing() + base.math.random_int(0, 360)), 巡逻范围);
			AI.params.set("order_move", 新坐标);
			AI.params.set("last_patrol_time", base.clock());
		}
		return result;
	}

	//$$default_units_ts.ai.自定义AI样例.AIBehavior_7:Data.Game.Behavior
	/** @noSelf */
	export let validator_144538679:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let 新变量: any | undefined;
		let result: boolean = false;
		let 主人: Unit | undefined = AI.params.get("master");
		let 巡逻范围: number = AI.params.get("patrol_range");
		let 实际范围: number = base.math.max(巡逻范围, 200);
		if ((((AI.params.get("target_unit") != undefined) || ((AI.params.get("order_move") != undefined) && (主人.get_scene_point().distance(AI.unit.get_scene_point()) <= 实际范围))))) {
			return false;
		} else {
		}
		if ((((主人.is_walking() == false)))) {
			return false;
		} else {
		}
		AI.params.set("order_move", 主人.get_scene_point().polar_to_ex(主人.get_facing(), base.math.random_int((实际范围 * 0.3), (实际范围 * 0.5))));
		return result;
	}

	//$$default_units_ts.ai.自定义AI样例.AIBehavior_9:Data.Game.Behavior
	/** @noSelf */
	export let validator_55344321:(AI:lib_common_ai.AI)=>boolean= (AI:lib_common_ai.AI):boolean => {
		let result: boolean = false;
		let 主人: Unit | undefined = AI.params.get("master");
		let 巡逻距离: number = AI.params.get("patrol_range");
		let 搜敌距离: number = AI.params.get("search_range");
		let 最远距离: number = (搜敌距离 + 巡逻距离);
		if (((主人.get_scene_point().distance(AI.unit.get_scene_point()) > 最远距离))) {
			AI.params.set("target_unit", undefined);
			AI.params.set("next_skill", undefined);
			AI.params.set("order_move", undefined);
		} else {
		}
		return result;
	}

	//$$default_units_ts.ai.自定义AI样例.root:Data.Game.OnAdd
	/** @noSelf */
	export let validator_245519073:(AI:lib_common_ai.AI)=>void= (AI:lib_common_ai.AI):void => {
		// 上次巡逻的时间
		AI.params.set("last_patrol_time", base.clock());
		// 巡逻频率
		if (((AI.params.get("patrol_frequency") == undefined))) {
			AI.params.set("patrol_frequency", 3);
		} else {
		}
		// 召唤物巡逻范围
		if (((AI.params.get("patrol_range") == undefined))) {
			AI.params.set("patrol_range", 500);
		} else {
		}
		// 召唤物搜敌范围
		if (((AI.params.get("search_range") == undefined))) {
			AI.params.set("search_range", 500);
		} else {
		}
		// 目标 如果有目标则表示战斗状态
		AI.params.set("target_unit", undefined);
		// 主人上次移动的时间
		AI.params.set("last_move_time", base.clock());
		// 主人停留一段时间后 召唤物随机移动
		if (((AI.params.get("stay_time") == undefined))) {
			AI.params.set("stay_time", 3);
		} else {
		}
		// 召唤物是否在停留时朝向主人
		AI.params.set("facing_to_master", true);
		if (((AI.params.get("facing_to_master") == true))) {
			AI.params.set("facing_to_master_timer", base.timer_loop(0.2, ():void => {
				if ((AI.unit.is_walking())) {
					AI.unit.set_facing(AI.unit.get_scene_point().angle(AI.params.get("master").get_scene_point()));
				} else {
				}
			}));
		} else {
		}
		if (((AI.params.get("master") == undefined))) {
			log.info("请设置召唤物主人");
		} else {
		}
		// 保留此项以兼容以前的配置
		if (((AI.params.get("max_distance") != undefined))) {
			AI.params.set("patrol_range", (AI.params.get("max_distance") - AI.params.get("search_range")));
		} else {
		}
	}

	//$$default_units_ts.ai.自定义AI样例.root:Data.Game.OnRemove
	/** @noSelf */
	export let validator_34695145:(AI:lib_common_ai.AI)=>void= (AI:lib_common_ai.AI):void => {
		let 转向计时器: Timer | undefined = AI.params.get("facing_to_master_timer");
		if (((转向计时器 != undefined))) {
			转向计时器.remove();
		} else {
		}
	}

	//$$default_units_ts.effect.击退.PolarOffset_1:Data.Game.Distance
	/** @noSelf */
	export let validator_126068103:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let result: number = 效果节点.skill().cache.SpellAttribute.KnockDistance;
		if ((((result == 0)))) {
			result = 100;
		} else {
		}
		return result;
	}

	//$$.template@func_ref.FuncRefSortUnitBuff.root:Data.Game.Func
	/** @noSelf */
	export let validator_33561757:(效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">)=>number= (效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">):number => {
		let result: number = 0;
		let func_cache: _OBJ__func_ref_FuncRefSortUnitBuff = base.force_as<_OBJ__func_ref_FuncRefSortUnitBuff>(base.eff.cache(过滤函数Id));
		let Buff_id: IdPreset<"buff_id"> = func_cache.Buff;
		let AhasBuff: boolean = 单位A.has_buff(Buff_id);
		let BhasBuff: boolean = 单位B.has_buff(Buff_id);
		if (((单位A == 单位B))) {
			return 0;
		} else {
			if (((AhasBuff == BhasBuff))) {
				return 0;
			} else {
				if (((AhasBuff == true))) {
					return -1;
				} else {
					return 1;
				}
			}
		}
		return result;
	}

	//$$default_units_ts.template@func_ref.优先符合过滤的单位.root:Data.Game.Func
	/** @noSelf */
	export let validator_99777765:(效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">)=>number= (效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">):number => {
		let result: number = 0;
		let caster: Unit | undefined = base.eff_param_caster(效果节点);
		let func_cache: _OBJ__func_ref_FuncRefSortUnitFilter = base.force_as<_OBJ__func_ref_FuncRefSortUnitFilter>(base.eff.cache(过滤函数Id));
		let filter: _OBJ__TargetFilter = func_cache.TargetFilter;
		let Apass: boolean = true;
		let Bpass: boolean = true;
		if (((caster != undefined))) {
			Apass = base.target_filter_validate_on_unit(base.target_filters.from_data_field(filter), 单位A, caster);
			Bpass = base.target_filter_validate_on_unit(base.target_filters.from_data_field(filter), 单位B, caster);
		} else {
		}
		if (((单位A == 单位B))) {
			return 0;
		} else {
			if (((Apass == Bpass))) {
				return 0;
			} else {
				if (((Apass == true))) {
					return -1;
				} else {
					return 1;
				}
			}
		}
		return result;
	}

	//$$default_units_ts.func_ref.lowest_health_rate_unit.root:Data.Game.Func
	/** @noSelf */
	export let validator_23451517:(效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">)=>number= (效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">):number => {
		let 血量A: number = (单位A.get_ex(单位属性["生命"], UnitPropertySubType["Final"]) / 单位A.get_ex(单位属性["生命上限"], UnitPropertySubType["Final"]));
		let 血量B: number = (单位B.get_ex(单位属性["生命"], UnitPropertySubType["Final"]) / 单位B.get_ex(单位属性["生命上限"], UnitPropertySubType["Final"]));
		let result: number = (血量A - 血量B);
		return result;
	}

	//$$default_units_ts.func_ref.nearest_unit_to_caster.root:Data.Game.Func
	/** @noSelf */
	export let validator_97896931:(效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">)=>number= (效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">):number => {
		let 施法者位置: Point = base.eff_param_caster(效果节点).get_scene_point();
		let 距离A: number = (施法者位置.distance(单位A.get_scene_point()) - 单位A.get_attackable_radius());
		let 距离B: number = (施法者位置.distance(单位B.get_scene_point()) - 单位B.get_attackable_radius());
		let result: number = (距离A - 距离B);
		return result;
	}

	//$$default_units_ts.func_ref.nearest_unit_to_target.root:Data.Game.Func
	/** @noSelf */
	export let validator_248042905:(效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">)=>number= (效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">):number => {
		let 目标点: Point = base.eff_param_target_point(效果节点);
		let 距离A: number = (目标点.distance(单位A.get_scene_point()) - 单位A.get_attackable_radius());
		let 距离B: number = (目标点.distance(单位B.get_scene_point()) - 单位B.get_attackable_radius());
		let result: number = (距离A - 距离B);
		return result;
	}

	//$$default_units_ts.func_ref.优先上次施法的目标.root:Data.Game.Func
	/** @noSelf */
	export let validator_60770996:(效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">)=>number= (效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">):number => {
		let result: number = 1;
		let last_target: Unit | Point | number | undefined = 效果节点.skill().last_target;
		if (((单位A == 单位B))) {
			return 0;
		} else {
			if (((单位A == last_target))) {
				return -1;
			} else {
				if (((单位B == last_target))) {
					return 1;
				} else {
					return 0;
				}
			}
		}
		return result;
	}

	//$$default_units_ts.func_ref.优先剩余时间长的Buff.root:Data.Game.Func
	/** @noSelf */
	export let validator_256149901:(Buff1:Buff, Buff2:Buff)=>number= (Buff1:Buff, Buff2:Buff):number => {
		let Buff1剩余时间: number = Buff1.get_remain_time();
		let Buff2剩余时间: number = Buff2.get_remain_time();
		let delta: number = (Buff2剩余时间 - Buff1剩余时间);
		if (((delta < 2))&&((delta > -2))) {
			return 0;
		} else {
			return delta;
		}
	}

	//$$default_units_ts.func_ref.优先施法者正前方120度内的单位.root:Data.Game.Func
	/** @noSelf */
	export let validator_145515012:(效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">)=>number= (效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">):number => {
		let result: number = 1;
		let caster: Unit = base.eff_param_caster(效果节点);
		let casterPoint: Point = caster.get_scene_point();
		let casterFacing: number = caster.get_facing();
		let angleA: number = casterPoint.angle(单位A.get_scene_point());
		let angleB: number = casterPoint.angle(单位B.get_scene_point());
		let AisIn: boolean = (base.math.included_angle(angleA, casterFacing) <= 60);
		let BisIn: boolean = (base.math.included_angle(angleB, casterFacing) <= 60);
		if (((单位A == 单位B))) {
			return 0;
		} else {
			if (((AisIn == BisIn))) {
				return 0;
			} else {
				if (((AisIn == true))) {
					return -1;
				} else {
					return 1;
				}
			}
		}
		return result;
	}

	//$$default_units_ts.func_ref.优先来自英雄的Buff.root:Data.Game.Func
	/** @noSelf */
	export let validator_67320178:(Buff1:Buff, Buff2:Buff)=>number= (Buff1:Buff, Buff2:Buff):number => {
		let buff1的效果节点: EffectParam = Buff1.stack_param;
		let buff2的效果节点: EffectParam = Buff2.stack_param;
		let buff1施法者: Unit | undefined = base.eff_param_caster(buff1的效果节点);
		let buff2施法者: Unit | undefined = base.eff_param_caster(buff2的效果节点);
		let buff1源单位是否为英雄: boolean = false;
		let buff2源单位是否为英雄: boolean = false;
		if (((buff1施法者 == undefined))) {
			buff1源单位是否为英雄 = false;
		} else {
			buff1源单位是否为英雄 = base.target_filter_validate(base.target_filters.new("英雄;"), buff1施法者);
		}
		if (((buff2施法者 == undefined))) {
			buff2源单位是否为英雄 = false;
		} else {
			buff2源单位是否为英雄 = base.target_filter_validate(base.target_filters.new("英雄;"), buff2施法者);
		}
		if (((buff1源单位是否为英雄 == buff2源单位是否为英雄))) {
			return 0;
		} else {
			if (((buff1源单位是否为英雄 == true))) {
				return -1;
			} else {
				return 1;
			}
		}
	}

	//$$default_units_ts.func_ref.优先高等级的Buff.root:Data.Game.Func
	/** @noSelf */
	export let validator_110271156:(Buff1:Buff, Buff2:Buff)=>number= (Buff1:Buff, Buff2:Buff):number => {
		let buff1等级: number = Buff1.get_level();
		let buff2等级: number = Buff2.get_level();
		if (((buff1等级 == buff2等级))) {
			return 0;
		} else {
			if (((buff1等级 > buff2等级))) {
				return -1;
			} else {
				return 1;
			}
		}
	}

	//$$default_units_ts.func_ref.随机的单位.root:Data.Game.Func
	/** @noSelf */
	export let validator_180756668:(效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">)=>number= (效果节点:EffectParam, 单位A:Unit, 单位B:Unit, 过滤函数Id:IdPreset<"func_ref_id">):number => {
		let result: number = 1;
		if (((base.math.random_int(1, 100) <= 50))) {
			result = -1;
		} else {
			result = 1;
		}
		return result;
	}

	//$$.gameplay.dflt.default_units_ts_CureRule_1:Data.Game.FCureRule
	/** @noSelf */
	export let validator_255597210:(治疗量:number, 效果节点:EffectParam, 治疗实例:HealInstance, 治疗目标:Unit, 治疗来源:Unit, 是否暴击:boolean)=>number= (治疗量:number, 效果节点:EffectParam, 治疗实例:HealInstance, 治疗目标:Unit, 治疗来源:Unit, 是否暴击:boolean):number => {
		let 治疗量: number = 治疗量;
		let 暴击治疗: number = 0;
		if (((是否暴击 == true))) {
			return 暴击治疗;
		} else {
			return 治疗量;
		}
	}

	//$$.gameplay.dflt.default_units_ts_CureRule_1:Data.Game.FCriticalRule
	/** @noSelf */
	export let validator_148805509:(治疗来源:Unit, 治疗目标:Unit, 治疗实例:HealInstance, 效果节点:EffectParam)=>boolean= (治疗来源:Unit, 治疗目标:Unit, 治疗实例:HealInstance, 效果节点:EffectParam):boolean => {
		let 是否暴击: boolean = false;
		return 是否暴击;
	}

	//$$.gameplay.dflt.default_units_ts_DamageRule_3:Data.Game.FDamageRule
	/** @noSelf */
	export let validator_34781199:(伤害来源:Unit, 伤害目标:Unit, 伤害类型:string, 是否暴击:boolean, 伤害值:number, 效果节点:EffectParam, 伤害实例:DamageInstance)=>number= (伤害来源:Unit, 伤害目标:Unit, 伤害类型:string, 是否暴击:boolean, 伤害值:number, 效果节点:EffectParam, 伤害实例:DamageInstance):number => {
		let 伤害: number = 伤害值;
		let 伤害倍率: number = 1;
		let 暴击伤害: number = 伤害来源.get_ex(单位属性["暴击伤害"], UnitPropertySubType["Final"]);
		let 法术破甲: number = 伤害来源.get_ex(单位属性["法术破甲"], UnitPropertySubType["Final"]);
		let 法术穿透: number = 伤害来源.get_ex(单位属性["法术穿透"], UnitPropertySubType["Final"]);
		let 格挡: number = 伤害目标.get_ex(单位属性["格挡"], UnitPropertySubType["Final"]);
		let 魔抗: number = 伤害目标.get_ex(单位属性["魔抗"], UnitPropertySubType["Final"]);
		if (((伤害目标.has_restriction(UnitBehaviorState["魔免"]) || 伤害目标.has_restriction(UnitBehaviorState["无敌"])))) {
			return 0;
		} else {
		}
		if (((是否暴击 == true))) {
			伤害倍率 = (伤害倍率 * (1 + ((暴击伤害 / 100) - 1)));
		} else {
		}
		if (((格挡 > 0))) {
			伤害 = (伤害 - 格挡);
		} else {
		}
		if ((((魔抗 > 0) && (base.target_filter_validate(base.target_filters.new(";建筑"), 伤害目标) == true)))) {
			if (((法术穿透 < 100))) {
				魔抗 = (魔抗 * (1 - (法术穿透 / 100)));
			} else {
				魔抗 = 0;
			}
			魔抗 = (魔抗 - 法术破甲);
			if (((魔抗 < 0))) {
				魔抗 = 0;
			} else {
			}
		} else {
		}
		if (((魔抗 < 0))) {
			魔抗 = (0 - 魔抗);
			伤害 = (伤害 * (1 + (0.01 * 魔抗)));
		} else {
			if (((魔抗 > 0))) {
				伤害 = (伤害 / (1 + (0.01 * 魔抗)));
			} else {
			}
		}
		伤害 = (伤害 * 伤害倍率);
		return 伤害;
	}

	//$$.gameplay.dflt.default_units_ts_DamageRule_3:Data.Game.FCriticalRule
	/** @noSelf */
	export let validator_189928549:(伤害来源:Unit, 伤害目标:Unit, 伤害实例:DamageInstance, 效果节点:EffectParam)=>boolean= (伤害来源:Unit, 伤害目标:Unit, 伤害实例:DamageInstance, 效果节点:EffectParam):boolean => {
		let 是否暴击: boolean = false;
		return 是否暴击;
	}

	//$$.gameplay.dflt.default_units_ts_DamageRule_4:Data.Game.FDamageRule
	/** @noSelf */
	export let validator_43068806:(伤害来源:Unit, 伤害目标:Unit, 伤害类型:string, 是否暴击:boolean, 伤害值:number, 效果节点:EffectParam, 伤害实例:DamageInstance)=>number= (伤害来源:Unit, 伤害目标:Unit, 伤害类型:string, 是否暴击:boolean, 伤害值:number, 效果节点:EffectParam, 伤害实例:DamageInstance):number => {
		let 伤害: number = 伤害值;
		let 伤害倍率: number = 1;
		let 暴击伤害: number = 伤害来源.get_ex(单位属性["暴击伤害"], UnitPropertySubType["Final"]);
		let 破甲: number = 伤害来源.get_ex(单位属性["破甲"], UnitPropertySubType["Final"]);
		let 穿透: number = 伤害来源.get_ex(单位属性["穿透"], UnitPropertySubType["Final"]);
		let 格挡: number = 伤害目标.get_ex(单位属性["格挡"], UnitPropertySubType["Final"]);
		let 护甲: number = 伤害目标.get_ex(单位属性["护甲"], UnitPropertySubType["Final"]);
		if (((伤害目标.has_restriction(UnitBehaviorState["物免"]) || 伤害目标.has_restriction(UnitBehaviorState["无敌"])))) {
			return 0;
		} else {
		}
		if (((是否暴击 == true))) {
			伤害倍率 = (伤害倍率 * (1 + ((暴击伤害 / 100) - 1)));
		} else {
		}
		if (((格挡 > 0))) {
			伤害 = (伤害 - 格挡);
		} else {
		}
		if ((((护甲 > 0) && (base.target_filter_validate(base.target_filters.new(";建筑"), 伤害目标) == true)))) {
			if (((穿透 < 100))) {
				护甲 = (护甲 * (1 - (穿透 / 100)));
			} else {
				护甲 = 0;
			}
			护甲 = (护甲 - 破甲);
			if (((护甲 < 0))) {
				护甲 = 0;
			} else {
			}
		} else {
		}
		if (((护甲 < 0))) {
			护甲 = (0 - 护甲);
			伤害 = (伤害 * (1 + (0.01 * 护甲)));
		} else {
			if (((护甲 > 0))) {
				伤害 = (伤害 / (1 + (0.01 * 护甲)));
			} else {
			}
		}
		伤害 = (伤害 * 伤害倍率);
		return 伤害;
	}

	//$$.gameplay.dflt.default_units_ts_DamageRule_4:Data.Game.FCriticalRule
	/** @noSelf */
	export let validator_209125194:(伤害来源:Unit, 伤害目标:Unit, 伤害实例:DamageInstance, 效果节点:EffectParam)=>boolean= (伤害来源:Unit, 伤害目标:Unit, 伤害实例:DamageInstance, 效果节点:EffectParam):boolean => {
		let 是否暴击: boolean = false;
		let 暴击概率: number = 伤害来源.get_ex(单位属性["暴击"], UnitPropertySubType["Final"]);
		let 随机数: number = base.math.random_int(1, 100);
		if (((base.target_filter_validate(base.target_filters.new("单位,建筑;死亡"), 伤害目标) == true))) {
			是否暴击 = false;
			return 是否暴击;
		} else {
		}
		if (((暴击概率 >= 随机数))) {
			是否暴击 = true;
		} else {
		}
		return 是否暴击;
	}

	//$$.gameplay.dflt.default_units_ts_DamageRule_5:Data.Game.FDamageRule
	/** @noSelf */
	export let validator_22685921:(伤害来源:Unit, 伤害目标:Unit, 伤害类型:string, 是否暴击:boolean, 伤害值:number, 效果节点:EffectParam, 伤害实例:DamageInstance)=>number= (伤害来源:Unit, 伤害目标:Unit, 伤害类型:string, 是否暴击:boolean, 伤害值:number, 效果节点:EffectParam, 伤害实例:DamageInstance):number => {
		let 伤害: number = 伤害值;
		return 伤害;
	}

	//$$.gameplay.dflt.default_units_ts_DamageRule_5:Data.Game.FCriticalRule
	/** @noSelf */
	export let validator_191493992:(伤害来源:Unit, 伤害目标:Unit, 伤害实例:DamageInstance, 效果节点:EffectParam)=>boolean= (伤害来源:Unit, 伤害目标:Unit, 伤害实例:DamageInstance, 效果节点:EffectParam):boolean => {
		let 是否暴击: boolean = false;
		return 是否暴击;
	}

	//$$.gameplay.dflt.root:Data.Game.XPGrantRule.XPGrant
	/** @noSelf */
	export let validator_44065067:(死亡单位:Unit, 击杀者:Unit, 单位死亡类型:DeathType)=>number= (死亡单位:Unit, 击杀者:Unit, 单位死亡类型:DeathType):number => {
		let 死亡经验: number = 死亡单位.get_ex(单位属性["死亡经验"], UnitPropertySubType["Final"]);
		if (((单位死亡类型 == DeathType["Remove"]))) {
			return 0;
		} else {
		}
		if (((base.target_filter_validate(base.target_filters.new("镜像;"), 死亡单位) == true))) {
			return 0;
		} else {
		}
		if (((base.target_filter_validate(base.target_filters.new("召唤;"), 死亡单位) == true))) {
			return (死亡经验 / 2);
		} else {
		}
		return 死亡经验;
	}

	//$$.gameplay.dflt.root:Data.Game.XPGrantRule.XPDistributionCheck
	/** @noSelf */
	export let validator_166947453:(被分配经验的单位:Unit, 被击杀的单位:Unit, 击杀者:Unit)=>boolean= (被分配经验的单位:Unit, 被击杀的单位:Unit, 击杀者:Unit):boolean => {
		let result: boolean = true;
		return result;
	}

	//$$.item.test_potion_heal.SpellRootInstant_1:Data.Game.Formulas.Mana
	//$$.template@spell.Spell.root:Data.Game.Formulas.Mana
	//$$.template@spell.SpellBuild.root:Data.Game.Formulas.Mana
	//$$.template@spell.SpellMorph.root:Data.Game.Formulas.Mana
	//$$.template@spell.SpellRootCircle.root:Data.Game.Formulas.Mana
	//$$.template@spell.SpellRootInstant.root:Data.Game.Formulas.Mana
	//$$.template@spell.SpellRootPassive.root:Data.Game.Formulas.Mana
	//$$.template@spell.SpellRootUnit.root:Data.Game.Formulas.Mana
	//$$.template@spell.SpellRootVector.root:Data.Game.Formulas.Mana
	//$$.template@spell.SpellToggle.root:Data.Game.Formulas.Mana
	//$$.template@spell.spell.root:Data.Game.Formulas.Mana
	//$$busiyixiantu_5n1b.spell.群锤.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.三火球.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.不死鸟.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.不死鸟灼伤.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.修理.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.元素凝聚.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.元素激流.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.冲锋陷阵.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.净化.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.刀扇.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.剑刃风暴.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.占据.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.反噬（被动）.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.召唤水元素.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.后撤步.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.吞噬魔法.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.吸血光环.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.咆哮.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.嘲讽.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.回春.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.圣光斗篷.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.圣光术.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.地震.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.坚韧光环.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.复活.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.天神下凡.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.寄生虫.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.巫毒狂舞.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.弱化之锤.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.弹无虚发.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.心灵之火.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.怒吼.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.感应地雷.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.战争践踏.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.战吼.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.控制魔法.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.放逐.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.旋转碰撞回旋镖（被动）.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.旋风斩.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.无敌圣盾.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.无敌（被动）.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.暴风雪.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.治疗术.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.治疗波.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.治疗结界.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.法力虹吸.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.流星火雨.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.火球术.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.炉石.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.盾击.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.硬化体肤（被动）.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.祝福圣光.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.移形换影.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.穿刺.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.群体减速.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.肉勾.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.虔诚光环.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.蛇棒攻击.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.血焰之剑.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.诅咒.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.诱捕.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.迷雾.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.通用攻击-三连击.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.邪恶狂热.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.重生.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.野蛮跳跃.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.钩锁.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.镜像.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.闪现.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.闪电之盾.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.闪电链.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.防反.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.隐身术.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.雷霆一击.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.震荡波.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.霜甲术.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.静滞陷阱.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.风暴之锤.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.驱散魔法.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.魔法侦测（被动）.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.魔法免疫（被动）.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.魔法免疫（被动）_1.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.魔法防御（可开关）.root:Data.Game.Formulas.Mana
	//$$smallcard_choose_one.spell.示例技能.root:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.感应地雷.Spell:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.感应地雷.Spell_1:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.火龙.Spell:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.火龙.SpellRootVector_2:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.火龙.Spell_1:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.野猪.SpellRootVector_1:Data.Game.Formulas.Mana
	/** @noSelf */
	export let validator_244194926:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let result: number = cache.Cost.Mana;
		return result;
	}

	//$$.item.test_potion_heal.SpellRootInstant_1:Data.Game.Formulas.Cooldown
	//$$.template@spell.Spell.root:Data.Game.Formulas.Cooldown
	//$$.template@spell.SpellBuild.root:Data.Game.Formulas.Cooldown
	//$$.template@spell.SpellMorph.root:Data.Game.Formulas.Cooldown
	//$$.template@spell.SpellRootCircle.root:Data.Game.Formulas.Cooldown
	//$$.template@spell.SpellRootInstant.root:Data.Game.Formulas.Cooldown
	//$$.template@spell.SpellRootPassive.root:Data.Game.Formulas.Cooldown
	//$$.template@spell.SpellRootUnit.root:Data.Game.Formulas.Cooldown
	//$$.template@spell.SpellRootVector.root:Data.Game.Formulas.Cooldown
	//$$.template@spell.SpellToggle.root:Data.Game.Formulas.Cooldown
	//$$.template@spell.spell.root:Data.Game.Formulas.Cooldown
	//$$busiyixiantu_5n1b.spell.群锤.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.三火球.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.不死鸟.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.不死鸟灼伤.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.修理.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.元素凝聚.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.元素激流.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.冲锋陷阵.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.净化.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.刀扇.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.剑刃风暴.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.占据.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.反噬（被动）.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.召唤水元素.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.后撤步.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.吞噬魔法.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.吸血光环.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.咆哮.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.嘲讽.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.回春.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.圣光斗篷.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.圣光术.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.地震.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.坚韧光环.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.复活.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.天神下凡.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.寄生虫.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.巫毒狂舞.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.弱化之锤.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.弹无虚发.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.心灵之火.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.怒吼.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.感应地雷.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.战争践踏.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.战吼.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.控制魔法.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.放逐.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.旋转碰撞回旋镖（被动）.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.旋风斩.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.无敌圣盾.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.无敌（被动）.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.暴风雪.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.治疗术.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.治疗波.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.治疗结界.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.法力虹吸.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.流星火雨.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.火球术.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.炉石.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.盾击.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.硬化体肤（被动）.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.祝福圣光.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.移形换影.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.穿刺.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.群体减速.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.肉勾.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.虔诚光环.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.蛇棒攻击.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.血焰之剑.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.诅咒.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.诱捕.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.迷雾.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.通用攻击-三连击.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.邪恶狂热.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.重生.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.野蛮跳跃.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.钩锁.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.镜像.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.闪现.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.闪电之盾.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.闪电链.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.防反.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.隐身术.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.雷霆一击.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.震荡波.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.霜甲术.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.静滞陷阱.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.风暴之锤.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.驱散魔法.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.魔法侦测（被动）.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.魔法免疫（被动）.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.魔法免疫（被动）_1.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.魔法防御（可开关）.root:Data.Game.Formulas.Cooldown
	//$$smallcard_choose_one.spell.示例技能.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.感应地雷.Spell:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.感应地雷.Spell_1:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.火龙.Spell:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.火龙.SpellRootVector_2:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.火龙.Spell_1:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.野猪.SpellRootVector_1:Data.Game.Formulas.Cooldown
	/** @noSelf */
	export let validator_135839809:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let cooldown: number = cache.Cost.Cooldown;
		let hasteProp: _OBJ__Spell_attack_speed_attribute = cache.AttributeHaste;
		let haste: number = base.eff_param_caster(效果节点).get_ex(base.force_as<单位属性>(hasteProp), UnitPropertySubType["Final"]);
		let IsHasteCooldown: boolean = cache.SpellFlags.AttributeHasteAffectCooldown;
		if (((cooldown <= 0))) {
			return 0;
		} else {
		}
		if (((haste > 0))&&((IsHasteCooldown == true))) {
			cooldown = (cooldown / haste);
		} else {
		}
		return cooldown;
	}

	//$$.item.test_potion_heal.SpellRootInstant_1:Data.Game.Formulas.ChargeMax
	//$$.template@spell.Spell.root:Data.Game.Formulas.ChargeMax
	//$$.template@spell.SpellBuild.root:Data.Game.Formulas.ChargeMax
	//$$.template@spell.SpellMorph.root:Data.Game.Formulas.ChargeMax
	//$$.template@spell.SpellRootCircle.root:Data.Game.Formulas.ChargeMax
	//$$.template@spell.SpellRootInstant.root:Data.Game.Formulas.ChargeMax
	//$$.template@spell.SpellRootPassive.root:Data.Game.Formulas.ChargeMax
	//$$.template@spell.SpellRootUnit.root:Data.Game.Formulas.ChargeMax
	//$$.template@spell.SpellRootVector.root:Data.Game.Formulas.ChargeMax
	//$$.template@spell.SpellToggle.root:Data.Game.Formulas.ChargeMax
	//$$.template@spell.spell.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.template@spell.通用近战普攻模版.root:Data.Game.Formulas.ChargeMax
	//$$busiyixiantu_5n1b.spell.群锤.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.三火球.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.不死鸟.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.不死鸟灼伤.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.修理.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.元素凝聚.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.元素激流.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.冲锋陷阵.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.净化.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.刀扇.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.剑刃风暴.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.占据.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.反噬（被动）.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.召唤水元素.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.后撤步.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.吞噬魔法.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.吸血光环.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.咆哮.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.嘲讽.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.回春.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.圣光斗篷.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.圣光术.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.地震.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.坚韧光环.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.复活.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.天神下凡.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.寄生虫.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.巫毒狂舞.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.弱化之锤.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.弹无虚发.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.心灵之火.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.怒吼.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.感应地雷.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.战争践踏.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.战吼.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.控制魔法.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.放逐.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.旋转碰撞回旋镖（被动）.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.旋风斩.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.无敌圣盾.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.无敌（被动）.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.暴风雪.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.横扫.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.治疗术.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.治疗波.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.治疗结界.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.法力虹吸.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.流星火雨.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.火球术.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.炉石.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.盾击.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.硬化体肤（被动）.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.祝福圣光.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.移形换影.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.穿刺.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.群体减速.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.肉勾.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.虔诚光环.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.蛇棒攻击.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.血焰之剑.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.诅咒.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.诱捕.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.迷雾.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.通用攻击-三连击.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.通用攻击-刀光.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.通用攻击-劈砍.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.通用攻击-戳刺.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.通用攻击-火球.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.邪恶狂热.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.重生.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.野蛮跳跃.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.钩锁.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.镜像.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.闪现.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.闪电之盾.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.闪电链.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.防反.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.隐身术.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.雷霆一击.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.震荡波.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.霜甲术.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.静滞陷阱.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.风暴之锤.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.驱散魔法.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.魔法侦测（被动）.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.魔法免疫（被动）.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.魔法免疫（被动）_1.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.spell.魔法防御（可开关）.root:Data.Game.Formulas.ChargeMax
	//$$smallcard_choose_one.spell.示例技能.root:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.6、远程普攻示例英雄.Spell:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.sce2号.SpellRootVector_2:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.感应地雷.Spell:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.感应地雷.Spell_1:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.无人机.SpellRootVector_1:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.火龙.Spell:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.火龙.SpellRootVector_1:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.火龙.SpellRootVector_2:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.火龙.Spell_1:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.爬虫.SpellRootVector_1:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.狼人.SpellRootCircle_1:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.狼人.SpellRootInstant_1:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.秃鹫.SpellRootCircle_1:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.秃鹫.SpellRootCircle_1_1:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.野猪.SpellRootCircle_1:Data.Game.Formulas.ChargeMax
	//$$default_units_ts.unit.野猪.SpellRootVector_1:Data.Game.Formulas.ChargeMax
	/** @noSelf */
	export let validator_211391127:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let result: number = cache.Cost.ChargeMax;
		return result;
	}

	//$$.item.test_potion_heal.SpellRootInstant_1:Data.Game.Formulas.Range
	//$$.template@spell.Spell.root:Data.Game.Formulas.Range
	//$$.template@spell.SpellBuild.root:Data.Game.Formulas.Range
	//$$.template@spell.SpellMorph.root:Data.Game.Formulas.Range
	//$$.template@spell.SpellRootCircle.root:Data.Game.Formulas.Range
	//$$.template@spell.SpellRootInstant.root:Data.Game.Formulas.Range
	//$$.template@spell.SpellRootPassive.root:Data.Game.Formulas.Range
	//$$.template@spell.SpellRootUnit.root:Data.Game.Formulas.Range
	//$$.template@spell.SpellRootVector.root:Data.Game.Formulas.Range
	//$$.template@spell.SpellToggle.root:Data.Game.Formulas.Range
	//$$.template@spell.spell.root:Data.Game.Formulas.Range
	//$$default_units_ts.template@spell.通用近战普攻模版.root:Data.Game.Formulas.Range
	//$$busiyixiantu_5n1b.spell.群锤.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.三火球.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.不死鸟.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.不死鸟灼伤.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.修理.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.元素凝聚.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.元素激流.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.冲锋陷阵.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.净化.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.刀扇.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.剑刃风暴.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.占据.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.反噬（被动）.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.召唤水元素.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.后撤步.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.吞噬魔法.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.吸血光环.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.咆哮.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.嘲讽.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.回春.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.圣光斗篷.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.圣光术.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.地震.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.坚韧光环.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.复活.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.天神下凡.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.寄生虫.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.巫毒狂舞.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.弱化之锤.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.弹无虚发.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.心灵之火.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.怒吼.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.感应地雷.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.战争践踏.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.战吼.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.控制魔法.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.放逐.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.旋转碰撞回旋镖（被动）.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.旋风斩.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.无敌圣盾.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.无敌（被动）.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.暴风雪.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.横扫.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.治疗术.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.治疗波.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.治疗结界.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.法力虹吸.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.流星火雨.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.火球术.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.炉石.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.盾击.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.硬化体肤（被动）.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.祝福圣光.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.移形换影.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.穿刺.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.群体减速.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.肉勾.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.虔诚光环.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.蛇棒攻击.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.血焰之剑.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.诅咒.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.诱捕.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.迷雾.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.通用攻击-三连击.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.通用攻击-刀光.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.通用攻击-劈砍.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.通用攻击-戳刺.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.通用攻击-火球.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.邪恶狂热.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.重生.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.野蛮跳跃.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.钩锁.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.镜像.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.闪现.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.闪电之盾.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.闪电链.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.防反.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.隐身术.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.雷霆一击.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.震荡波.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.霜甲术.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.静滞陷阱.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.风暴之锤.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.驱散魔法.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.魔法侦测（被动）.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.魔法免疫（被动）.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.魔法免疫（被动）_1.root:Data.Game.Formulas.Range
	//$$default_units_ts.spell.魔法防御（可开关）.root:Data.Game.Formulas.Range
	//$$smallcard_choose_one.spell.示例技能.root:Data.Game.Formulas.Range
	//$$default_units_ts.unit.6、远程普攻示例英雄.Spell:Data.Game.Formulas.Range
	//$$default_units_ts.unit.sce2号.SpellRootVector_2:Data.Game.Formulas.Range
	//$$default_units_ts.unit.感应地雷.Spell:Data.Game.Formulas.Range
	//$$default_units_ts.unit.感应地雷.Spell_1:Data.Game.Formulas.Range
	//$$default_units_ts.unit.无人机.SpellRootVector_1:Data.Game.Formulas.Range
	//$$default_units_ts.unit.火龙.Spell:Data.Game.Formulas.Range
	//$$default_units_ts.unit.火龙.SpellRootVector_1:Data.Game.Formulas.Range
	//$$default_units_ts.unit.火龙.SpellRootVector_2:Data.Game.Formulas.Range
	//$$default_units_ts.unit.火龙.Spell_1:Data.Game.Formulas.Range
	//$$default_units_ts.unit.爬虫.SpellRootVector_1:Data.Game.Formulas.Range
	//$$default_units_ts.unit.狼人.SpellRootCircle_1:Data.Game.Formulas.Range
	//$$default_units_ts.unit.狼人.SpellRootInstant_1:Data.Game.Formulas.Range
	//$$default_units_ts.unit.秃鹫.SpellRootCircle_1:Data.Game.Formulas.Range
	//$$default_units_ts.unit.秃鹫.SpellRootCircle_1_1:Data.Game.Formulas.Range
	//$$default_units_ts.unit.野猪.SpellRootCircle_1:Data.Game.Formulas.Range
	//$$default_units_ts.unit.野猪.SpellRootVector_1:Data.Game.Formulas.Range
	/** @noSelf */
	export let validator_63878418:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let result: number = cache.Range;
		return result;
	}

	//$$.item.test_potion_heal.SpellRootInstant_1:Data.Game.Formulas.Time
	//$$.template@spell.Spell.root:Data.Game.Formulas.Time
	//$$.template@spell.SpellBuild.root:Data.Game.Formulas.Time
	//$$.template@spell.SpellMorph.root:Data.Game.Formulas.Time
	//$$.template@spell.SpellRootCircle.root:Data.Game.Formulas.Time
	//$$.template@spell.SpellRootInstant.root:Data.Game.Formulas.Time
	//$$.template@spell.SpellRootPassive.root:Data.Game.Formulas.Time
	//$$.template@spell.SpellRootUnit.root:Data.Game.Formulas.Time
	//$$.template@spell.SpellRootVector.root:Data.Game.Formulas.Time
	//$$.template@spell.SpellToggle.root:Data.Game.Formulas.Time
	//$$.template@spell.spell.root:Data.Game.Formulas.Time
	//$$busiyixiantu_5n1b.spell.群锤.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.三火球.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.不死鸟.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.不死鸟灼伤.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.修理.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.元素凝聚.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.元素激流.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.冲锋陷阵.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.净化.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.刀扇.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.剑刃风暴.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.占据.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.反噬（被动）.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.召唤水元素.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.后撤步.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.吞噬魔法.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.吸血光环.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.咆哮.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.嘲讽.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.回春.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.圣光斗篷.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.圣光术.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.地震.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.坚韧光环.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.复活.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.天神下凡.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.寄生虫.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.巫毒狂舞.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.弱化之锤.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.弹无虚发.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.心灵之火.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.怒吼.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.感应地雷.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.战争践踏.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.战吼.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.控制魔法.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.放逐.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.旋转碰撞回旋镖（被动）.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.旋风斩.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.无敌圣盾.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.无敌（被动）.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.暴风雪.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.治疗术.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.治疗波.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.治疗结界.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.法力虹吸.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.流星火雨.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.火球术.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.炉石.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.盾击.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.硬化体肤（被动）.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.祝福圣光.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.移形换影.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.穿刺.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.群体减速.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.肉勾.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.虔诚光环.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.蛇棒攻击.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.血焰之剑.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.诅咒.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.诱捕.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.迷雾.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.通用攻击-三连击.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.邪恶狂热.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.重生.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.野蛮跳跃.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.钩锁.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.镜像.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.闪现.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.闪电之盾.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.闪电链.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.防反.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.隐身术.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.雷霆一击.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.震荡波.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.霜甲术.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.静滞陷阱.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.风暴之锤.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.驱散魔法.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.魔法侦测（被动）.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.魔法免疫（被动）.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.魔法免疫（被动）_1.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.魔法防御（可开关）.root:Data.Game.Formulas.Time
	//$$smallcard_choose_one.spell.示例技能.root:Data.Game.Formulas.Time
	//$$default_units_ts.unit.感应地雷.Spell:Data.Game.Formulas.Time
	//$$default_units_ts.unit.感应地雷.Spell_1:Data.Game.Formulas.Time
	//$$default_units_ts.unit.火龙.Spell:Data.Game.Formulas.Time
	//$$default_units_ts.unit.火龙.SpellRootVector_2:Data.Game.Formulas.Time
	//$$default_units_ts.unit.火龙.Spell_1:Data.Game.Formulas.Time
	//$$default_units_ts.unit.野猪.SpellRootVector_1:Data.Game.Formulas.Time
	/** @noSelf */
	export let validator_234228873:(效果节点:EffectParam, 阶段:number)=>number= (效果节点:EffectParam, 阶段:number):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let hasteProp: _OBJ__Spell_attack_speed_attribute = cache.AttributeHaste;
		let caster: Unit | undefined = base.eff_param_caster(效果节点);
		let haste: number = caster.get_ex(base.force_as<单位属性>(hasteProp), UnitPropertySubType["Final"]);
		let s_current: number = 0;
		let s: Array<number> = new Array<number>();
		s[1] = cache.Time.cast_start_time;
		s[2] = cache.Time.cast_channel_time;
		s[3] = cache.Time.cast_shot_time;
		s[4] = cache.Time.cast_finish_time;
		s_current = s[阶段];
		if (((s_current <= 0))) {
			return 0;
		} else {
		}
		if (((haste > 0))) {
			s_current = (s_current / haste);
		} else {
		}
		return s_current;
	}

	//$$default_units_ts.template@spell.通用近战普攻模版.Damage_1:Data.Game.Amount
	/** @noSelf */
	export let validator_196209676:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let result: number = base.eff_param_caster(效果节点).get_ex(单位属性["攻击"], UnitPropertySubType["Final"]);
		return result;
	}

	//$$default_units_ts.template@spell.通用近战普攻模版.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.横扫.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.通用攻击-刀光.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.通用攻击-劈砍.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.通用攻击-戳刺.root:Data.Game.Formulas.Mana
	//$$default_units_ts.spell.通用攻击-火球.root:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.6、远程普攻示例英雄.Spell:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.sce2号.SpellRootVector_2:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.无人机.SpellRootVector_1:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.火龙.SpellRootVector_1:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.爬虫.SpellRootVector_1:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.狼人.SpellRootCircle_1:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.狼人.SpellRootInstant_1:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.秃鹫.SpellRootCircle_1:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.秃鹫.SpellRootCircle_1_1:Data.Game.Formulas.Mana
	//$$default_units_ts.unit.野猪.SpellRootCircle_1:Data.Game.Formulas.Mana
	/** @noSelf */
	export let validator_33587127:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let result: number = cache.Cost.Mana;
		return result;
	}

	//$$default_units_ts.template@spell.通用近战普攻模版.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.横扫.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.通用攻击-刀光.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.通用攻击-劈砍.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.通用攻击-戳刺.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.spell.通用攻击-火球.root:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.6、远程普攻示例英雄.Spell:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.sce2号.SpellRootVector_2:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.无人机.SpellRootVector_1:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.火龙.SpellRootVector_1:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.爬虫.SpellRootVector_1:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.狼人.SpellRootCircle_1:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.狼人.SpellRootInstant_1:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.秃鹫.SpellRootCircle_1:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.秃鹫.SpellRootCircle_1_1:Data.Game.Formulas.Cooldown
	//$$default_units_ts.unit.野猪.SpellRootCircle_1:Data.Game.Formulas.Cooldown
	/** @noSelf */
	export let validator_214974897:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let cooldown: number = cache.Cost.Cooldown;
		let hasteProp: _OBJ__Spell_attack_speed_attribute = cache.AttributeHaste;
		let haste: number = base.eff_param_caster(效果节点).get_ex(base.force_as<单位属性>(hasteProp), UnitPropertySubType["Final"]);
		let preSwing: number = 0;
		let sum: number = 0;
		let IsHasteCooldown: boolean = cache.SpellFlags.AttributeHasteAffectCooldown;
		let s: Array<number> = new Array<number>();
		if (((cooldown <= 0))) {
			return 0;
		} else {
		}
		s[1] = cache.Time.cast_start_time;
		s[2] = cache.Time.cast_channel_time;
		s[3] = cache.Time.cast_shot_time;
		s[4] = cache.Time.cast_finish_time;
		sum = (s[1] + (s[2] + s[3]));
		preSwing = s[1];
		if (((sum > cooldown))) {
			preSwing = ((preSwing * cooldown) / sum);
		} else {
		}
		if (((haste > 0))) {
			preSwing = (preSwing / haste);
			if (((IsHasteCooldown == true))) {
				cooldown = (cooldown / haste);
			} else {
			}
		} else {
		}
		return (cooldown - preSwing);
	}

	//$$default_units_ts.template@spell.通用近战普攻模版.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.横扫.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.通用攻击-刀光.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.通用攻击-劈砍.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.通用攻击-戳刺.root:Data.Game.Formulas.Time
	//$$default_units_ts.spell.通用攻击-火球.root:Data.Game.Formulas.Time
	//$$default_units_ts.unit.6、远程普攻示例英雄.Spell:Data.Game.Formulas.Time
	//$$default_units_ts.unit.sce2号.SpellRootVector_2:Data.Game.Formulas.Time
	//$$default_units_ts.unit.无人机.SpellRootVector_1:Data.Game.Formulas.Time
	//$$default_units_ts.unit.火龙.SpellRootVector_1:Data.Game.Formulas.Time
	//$$default_units_ts.unit.爬虫.SpellRootVector_1:Data.Game.Formulas.Time
	//$$default_units_ts.unit.狼人.SpellRootCircle_1:Data.Game.Formulas.Time
	//$$default_units_ts.unit.狼人.SpellRootInstant_1:Data.Game.Formulas.Time
	//$$default_units_ts.unit.秃鹫.SpellRootCircle_1:Data.Game.Formulas.Time
	//$$default_units_ts.unit.秃鹫.SpellRootCircle_1_1:Data.Game.Formulas.Time
	//$$default_units_ts.unit.野猪.SpellRootCircle_1:Data.Game.Formulas.Time
	/** @noSelf */
	export let validator_214580859:(效果节点:EffectParam, 阶段:number)=>number= (效果节点:EffectParam, 阶段:number):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let cooldown: number = cache.Cost.Cooldown;
		let hasteProp: _OBJ__Spell_attack_speed_attribute = cache.AttributeHaste;
		let caster: Unit | undefined = base.eff_param_caster(效果节点);
		let haste: number = caster.get_ex(base.force_as<单位属性>(hasteProp), UnitPropertySubType["Final"]);
		let s_current: number = 0;
		let sum: number = 0;
		let s: Array<number> = new Array<number>();
		s[1] = cache.Time.cast_start_time;
		s[2] = cache.Time.cast_channel_time;
		s[3] = cache.Time.cast_shot_time;
		s[4] = cache.Time.cast_finish_time;
		sum = (s[1] + (s[2] + s[3]));
		s_current = s[阶段];
		if (((s_current <= 0))) {
			return 0;
		} else {
		}
		if (((cooldown > 0))&&((sum > cooldown))) {
			s_current = ((s_current * cooldown) / sum);
		} else {
		}
		if (((haste > 0))) {
			s_current = (s_current / haste);
		} else {
		}
		return s_current;
	}

	//$$busiyixiantu_5n1b.spell.群锤.Damage:Data.Game.Amount
	/** @noSelf */
	export let validator_140350288:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let result: number = base.player(1).get_hero().get_ex(单位属性["攻击"], UnitPropertySubType["Base"]);
		return result;
	}

	//$$default_units_ts.spell.三火球.PolarOffset_1:Data.Game.PeriodChangeIndex
	//$$default_units_ts.unit.sce2号.PolarOffset_1:Data.Game.PeriodChangeIndex
	//$$default_units_ts.unit.火龙.PolarOffset_1:Data.Game.PeriodChangeIndex
	/** @noSelf */
	export let validator_204988239:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let parent: EffectParam = 效果节点.parent;
		let cache: _OBJ__effect_EffectPersistLoop = base.force_as<_OBJ__effect_EffectPersistLoop>(parent.cache);
		let count: number = cache.PeriodicCount(效果节点);
		let result: number = ((count + 1) / 2);
		return result;
	}

	//$$default_units_ts.spell.不死鸟.Set_1:Data.Game.Validators
	/** @noSelf */
	export let validator_208749477:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		let 蛋: Unit = base.eff_param_target_unit(效果节点);
		if (((蛋.is_alive_ex() == true))) {
		} else {
			result = 验证器代码["NotSupported"];
		}
		return result;
	}

	//$$default_units_ts.spell.不死鸟灼伤.PersistLoop_1_1:Data.Game.PersistValidator
	/** @noSelf */
	export let validator_258945007:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		let 鸟: Unit = base.eff_param_target_unit(效果节点);
		if (((鸟.is_alive_ex() == true))) {
		} else {
			result = 验证器代码["NotSupported"];
		}
		return result;
	}

	//$$default_units_ts.spell.元素激流.CustomAction_2:Data.Game.Func
	/** @noSelf */
	export let validator_40290592:(效果节点:EffectParam)=>boolean= (效果节点:EffectParam):boolean => {
		let result: boolean = true;
		let 技能: Skill = 效果节点.skill();
		let 已弹射单位组: Array<Unit> = base.object_restore_value(效果节点.root(), "已弹射单位");
		已弹射单位组.push(base.eff_param_target_unit(效果节点));
		if (((已弹射单位组.length >= 4))) {
			result = false;
		} else {
		}
		return result;
	}

	//$$default_units_ts.spell.元素激流.CustomAction_3:Data.Game.Func
	/** @noSelf */
	export let validator_171995275:(效果节点:EffectParam)=>boolean= (效果节点:EffectParam):boolean => {
		let result: boolean = true;
		let 技能: Skill = 效果节点.skill();
		let 单位组: Array<Unit> = new Array<any>();
		base.object_store_value(效果节点.root(), "已弹射单位", 单位组);
		return result;
	}

	//$$default_units_ts.spell.元素激流.Search_2:Data.Game.SearchValidators
	/** @noSelf */
	export let validator_27087888:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		let 技能: Skill = 效果节点.skill();
		let 已弹射单位组: Array<Unit> = base.object_restore_value(效果节点.root(), "已弹射单位");
		已弹射单位组.forEachEx((element:Unit, index:number):void => {
			if (((element == base.eff_param_target_unit(效果节点)))) {
				result = 验证器代码["NotSupported"];
			} else {
			}
		});
		return result;
	}

	//$$default_units_ts.spell.冲锋陷阵.LaunchMissileDash_1:Data.Game.Speed
	/** @noSelf */
	export let validator_236306566:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let 时间: number = 0.5;
		let 距离: number = base.eff_param_caster(效果节点).get_scene_point().distance(base.eff_param_target_point(效果节点));
		let 速度: number = (距离 / 时间);
		return 速度;
	}

	//$$default_units_ts.spell.净化.Damage_1:Data.Game.Validators
	/** @noSelf */
	export let validator_196723837:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		if ((base.target_filter_validate(base.target_filters.new("敌方,召唤;无敌"), base.eff_param_target_unit(效果节点)))) {
			result = 验证器代码["OK"];
		} else {
			result = 验证器代码["NotSupported"];
		}
		return result;
	}

	//$$default_units_ts.spell.后撤步.LaunchMissileDash_1:Data.Game.Speed
	/** @noSelf */
	export let validator_220220686:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let 时间: number = 0.37;
		let 距离: number = base.eff_param_caster(效果节点).get_scene_point().distance(base.eff_param_target_point(效果节点));
		let 速度: number = (距离 / 时间);
		return 速度;
	}

	//$$default_units_ts.spell.吞噬魔法.Set_2:Data.Game.Validators
	/** @noSelf */
	export let validator_130739784:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["NotSupported"];
		let buff: boolean = base.eff_param_target_unit(效果节点).has_buff((("$$default_units_ts.spell.吞噬魔法.Buff_1") as unknown as IdPreset<"buff_id">));
		if (((buff == true))) {
			result = 验证器代码["OK"];
		} else {
		}
		return result;
	}

	//$$default_units_ts.spell.吸血光环.ResponseDamageAttacker_1:Data.Game.Modification
	/** @noSelf */
	export let validator_195133005:(效果节点:EffectParam, 引发响应的效果节点:EffectParam, 原始伤害值:number, 当前伤害值:number)=>number= (效果节点:EffectParam, 引发响应的效果节点:EffectParam, 原始伤害值:number, 当前伤害值:number):number => {
		let result: number = 1;
		base.eff_param_caster(效果节点).add_ex(单位属性["生命"], (原始伤害值 * 0.15), UnitPropertySubType["Final"]);
		return result;
	}

	//$$default_units_ts.spell.怒吼.ResponseDamageDefender_1:Data.Game.Multiplier
	/** @noSelf */
	export let validator_58691808:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let result: number = 1;
		let 单位: Unit = base.eff_param_caster(效果节点);
		let 单位组: Array<Unit> = base.get_area_unit(base.circle(单位.get_scene_point(), 300));
		let n: number = 0;
		单位组.forEachEx((element:Unit, index:number):void => {
			if (((base.target_filter_validate_on_unit(base.target_filters.new("单位,敌方;无敌,死亡"), element, 单位) == true))) {
				n = (n + 1);
			} else {
			}
		});
		if (((n > 0))) {
			result = (n * 0.05);
			result = (1 - result);
			result = base.math.max(0.5, result);
		} else {
		}
		return result;
	}

	//$$default_units_ts.spell.旋转碰撞回旋镖（被动）.EffectSet:Data.Game.Validators
	/** @noSelf */
	export let validator_76703967:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		if (((base.object_restore_value(效果节点.get_parent().var_unit("A"), "DabaojianHitTime") == undefined))) {
			base.object_store_value(效果节点.get_parent().var_unit("A"), "DabaojianHitTime", 0);
		} else {
		}
		if ((((base.clock() - base.object_restore_value(效果节点.get_parent().var_unit("A"), "DabaojianHitTime")) < 10))) {
			result = 验证器代码["NotSupported"];
		} else {
		}
		base.object_store_value(效果节点.get_parent().var_unit("A"), "DabaojianHitTime", base.clock());
		return result;
	}

	//$$default_units_ts.spell.旋转碰撞回旋镖（被动）.EffectSwitch:Data.Game.CaseArray[1].Validator
	/** @noSelf */
	export let validator_110577815:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		let 目标单位: Unit = base.eff_param_target_unit(效果节点);
		log.info(目标单位.get_name());
		log.info(效果节点.get_parent().var_unit("B").get_name());
		log.info((目标单位.get_name() == 效果节点.get_parent().var_unit("B").get_name()));
		if (((目标单位.get_name() == 效果节点.get_parent().var_unit("B").get_name()))) {
			result = 验证器代码["NotSupported"];
		} else {
		}
		return result;
	}

	//$$default_units_ts.spell.旋转碰撞回旋镖（被动）.EffectSwitch:Data.Game.CaseArray[2].Validator
	/** @noSelf */
	export let validator_69151185:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		if ((base.eff_param_caster(效果节点).has_buff((("$$default_units_ts.spell.旋转碰撞回旋镖（被动）.Buff") as unknown as IdPreset<"buff_id">)))) {
			result = 验证器代码["NotSupported"];
		} else {
		}
		return result;
	}

	//$$default_units_ts.spell.旋转碰撞回旋镖（被动）.EffectSwitch:Data.Game.CaseArray[3].Validator
	/** @noSelf */
	export let validator_153290600:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		if ((base.eff_param_caster(效果节点).has_buff((("$$default_units_ts.spell.旋转碰撞回旋镖（被动）.Buff") as unknown as IdPreset<"buff_id">)))) {
		} else {
			result = 验证器代码["NotSupported"];
		}
		return result;
	}

	//$$default_units_ts.spell.治疗波.CustomAction_1:Data.Game.Func
	/** @noSelf */
	export let validator_56366968:(效果节点:EffectParam)=>boolean= (效果节点:EffectParam):boolean => {
		let result: boolean = true;
		let 根节点: EffectParam = 效果节点.root();
		let 单位组: Array<Unit> = new Array<any>();
		base.object_store_value(根节点, "已弹射单位", 单位组);
		return result;
	}

	//$$default_units_ts.spell.治疗波.CustomAction_2:Data.Game.Func
	/** @noSelf */
	export let validator_108653932:(效果节点:EffectParam)=>boolean= (效果节点:EffectParam):boolean => {
		let result: boolean = true;
		let 根节点: EffectParam = 效果节点.root();
		let 已弹射单位组: Array<Unit> = base.object_restore_value(根节点, "已弹射单位");
		已弹射单位组.push(base.eff_param_target_unit(效果节点));
		if (((已弹射单位组.length >= 3))) {
			result = false;
		} else {
		}
		return result;
	}

	//$$default_units_ts.spell.治疗波.Search_1:Data.Game.SearchValidators
	/** @noSelf */
	export let validator_34088597:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		let 技能: Skill = 效果节点.skill();
		let 已弹射单位组: Array<Unit> = base.object_restore_value(效果节点.root(), "已弹射单位");
		已弹射单位组.forEachEx((element:Unit, index:number):void => {
			if (((element == base.eff_param_target_unit(效果节点)))) {
				result = 验证器代码["NotSupported"];
			} else {
			}
		});
		return result;
	}

	//$$default_units_ts.spell.治疗波.UnitModifyAttribute_1:Data.Game.KeyValuePairs[1].Value
	/** @noSelf */
	export let validator_157054375:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let result: number = 0;
		let 根节点: EffectParam = 效果节点.root();
		let 已弹射单位: Array<Unit> = base.object_restore_value(根节点, "已弹射单位");
		let 次数: number = 已弹射单位.length;
		let 衰减: number = 80;
		let 基础值: number = 130;
		result = (基础值 * ((衰减 / 100) ** 次数));
		return result;
	}

	//$$default_units_ts.spell.法力虹吸.AddBuff_1:Data.Game.Validators
	/** @noSelf */
	export let validator_157541609:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		if (((base.eff_param_caster(效果节点).is_ally(base.eff_param_target_unit(效果节点)) == true))) {
			result = 验证器代码["NotSupported"];
		} else {
			result = 验证器代码["OK"];
		}
		return result;
	}

	//$$default_units_ts.spell.法力虹吸.AddBuff_2:Data.Game.Validators
	/** @noSelf */
	export let validator_67885651:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		if (((base.eff_param_caster(效果节点).is_ally(base.eff_param_target_unit(效果节点)) == true))) {
			result = 验证器代码["OK"];
		} else {
			result = 验证器代码["NotSupported"];
		}
		return result;
	}

	//$$default_units_ts.spell.通用攻击-三连击.Buff:Data.Game.PersistValidator
	/** @noSelf */
	export let validator_20859394:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		let cast: Cast | undefined = 效果节点.shared.cast;
		let phase: number | undefined = cast.phase;
		// 段数重置仅在当前段数大于1时生效
		if (((phase <= 1))) {
			return 验证器代码["NotSupported"];
		} else {
		}
		return result;
	}

	//$$default_units_ts.spell.通用攻击-三连击.Damage:Data.Game.Amount
	/** @noSelf */
	export let validator_51649446:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let 施法单位: Unit = base.eff_param_caster(效果节点);
		let 基础伤害: number = 施法单位.get_ex(单位属性["攻击"], UnitPropertySubType["Final"]);
		let 段数: number = base.eff_param_cast_phase(效果节点);
		let 段数倍率表: _OBJ__link_node_LinkNodeNumber = ((base.eff.cache("$$default_units_ts.spell.通用攻击-三连击.LinkNodeNumber")) as unknown as _OBJ__link_node_LinkNodeNumber);
		let 倍率: number = 段数倍率表.Array[段数];
		return (基础伤害 * 倍率);
	}

	//$$default_units_ts.spell.通用攻击-三连击.PolarOffset:Data.Game.Validators
	/** @noSelf */
	export let validator_236127537:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		let phase: number = base.eff_param_cast_phase(效果节点);
		if (((phase >= 3))) {
			return result;
		} else {
			return 验证器代码["NotSupported"];
		}
	}

	//$$default_units_ts.spell.通用攻击-刀光.Damage_1:Data.Game.Amount
	//$$default_units_ts.spell.通用攻击-火球.Damage_1:Data.Game.Amount
	/** @noSelf */
	export let validator_223462450:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let result: number = base.eff_param_caster(效果节点).get_ex(单位属性["攻击"], UnitPropertySubType["Final"]);
		return result;
	}

	//$$default_units_ts.spell.通用攻击-劈砍.Damage_1:Data.Game.Amount
	/** @noSelf */
	export let validator_19086676:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let result: number = base.eff_param_caster(效果节点).get_ex(单位属性["攻击"], UnitPropertySubType["Final"]);
		return result;
	}

	//$$default_units_ts.spell.通用攻击-戳刺.Damage_1:Data.Game.Amount
	/** @noSelf */
	export let validator_120343679:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let result: number = base.eff_param_caster(效果节点).get_ex(单位属性["攻击"], UnitPropertySubType["Final"]);
		return result;
	}

	//$$default_units_ts.spell.重生.Switch_1:Data.Game.CaseArray[1].Validator
	/** @noSelf */
	export let validator_255550721:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["NotSupported"];
		if (((base.eff_param_caster(效果节点).is_alive_ex() == false))&&((base.eff_param_target_unit(base.eff_param_get_by_name(效果节点, (("$$default_units_ts.spell.重生.AddBuff_1") as unknown as IdPreset<"effect_id">))).has_buff((("$$default_units_ts.spell.重生.Buff") as unknown as IdPreset<"buff_id">)) == false))) {
			result = 验证器代码["OK"];
		} else {
		}
		return result;
	}

	//$$default_units_ts.spell.钩锁.LaunchMissileDash_1:Data.Game.Speed
	/** @noSelf */
	export let validator_222950169:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let 时间: number = 0.5;
		let 距离: number = base.eff_param_caster(效果节点).get_scene_point().distance(base.eff_param_target_point(效果节点));
		let 速度: number = (距离 / 时间);
		return 速度;
	}

	//$$default_units_ts.spell.闪电链.CustomAction_1:Data.Game.Func
	/** @noSelf */
	export let validator_228903203:(效果节点:EffectParam)=>boolean= (效果节点:EffectParam):boolean => {
		let result: boolean = true;
		let 根节点: EffectParam = 效果节点.root();
		let 单位组: Array<Unit> = new Array<any>();
		base.object_store_value(根节点, "已弹射单位", 单位组);
		return result;
	}

	//$$default_units_ts.spell.闪电链.CustomAction_2:Data.Game.Func
	/** @noSelf */
	export let validator_2540000:(效果节点:EffectParam)=>boolean= (效果节点:EffectParam):boolean => {
		let result: boolean = true;
		let 根节点: EffectParam = 效果节点.root();
		let 已弹射单位组: Array<Unit> = base.object_restore_value(根节点, "已弹射单位");
		已弹射单位组.push(base.eff_param_target_unit(效果节点));
		if (((已弹射单位组.length >= 3))) {
			result = false;
		} else {
		}
		return result;
	}

	//$$default_units_ts.spell.闪电链.Damage_1:Data.Game.Amount
	/** @noSelf */
	export let validator_45382866:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let 根节点: EffectParam = 效果节点.root();
		let 单位组: Array<Unit> = base.object_restore_value(根节点, "已弹射单位");
		let 次数: number = 单位组.length;
		let result: number = (85 * ((85 / 100) ** 次数));
		return result;
	}

	//$$default_units_ts.spell.闪电链.Search_2:Data.Game.SearchValidators
	/** @noSelf */
	export let validator_205128689:(效果节点:EffectParam)=>验证器代码= (效果节点:EffectParam):验证器代码 => {
		let result: 验证器代码 = 验证器代码["OK"];
		let 根节点: EffectParam = 效果节点.root();
		let 已弹射单位组: Array<Unit> = base.object_restore_value(根节点, "已弹射单位");
		已弹射单位组.forEachEx((element:Unit, index:number):void => {
			if (((element == base.eff_param_target_unit(效果节点)))) {
				result = 验证器代码["NotSupported"];
			} else {
			}
		});
		return result;
	}

	//$$default_units_ts.unit.sce2号.Spell:Data.Game.Formulas.Mana
	/** @noSelf */
	export let validator_117687348:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let result: number = cache.Cost.Mana;
		return result;
	}

	//$$default_units_ts.unit.sce2号.Spell:Data.Game.Formulas.Cooldown
	/** @noSelf */
	export let validator_155076026:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let cooldown: number = cache.Cost.Cooldown;
		let hasteProp: _OBJ__Spell_attack_speed_attribute = cache.AttributeHaste;
		let haste: number = base.eff_param_caster(效果节点).get_ex(base.force_as<单位属性>(hasteProp), UnitPropertySubType["Final"]);
		let preSwing: number = 0;
		let sum: number = 0;
		let IsHasteCooldown: boolean = cache.SpellFlags.AttributeHasteAffectCooldown;
		let s: Array<number> = new Array<number>();
		if (((cooldown <= 0))) {
			return 0;
		} else {
		}
		s[1] = cache.Time.cast_start_time;
		s[2] = cache.Time.cast_channel_time;
		s[3] = cache.Time.cast_shot_time;
		s[4] = cache.Time.cast_finish_time;
		sum = (s[1] + (s[2] + s[3]));
		preSwing = s[1];
		if (((sum > cooldown))) {
			preSwing = ((preSwing * cooldown) / sum);
		} else {
		}
		if (((haste > 0))) {
			preSwing = (preSwing / haste);
		} else {
			if (((IsHasteCooldown == true))) {
				cooldown = (cooldown / haste);
			} else {
			}
		}
		return (cooldown - preSwing);
	}

	//$$default_units_ts.unit.sce2号.Spell:Data.Game.Formulas.ChargeMax
	/** @noSelf */
	export let validator_117198562:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let result: number = cache.Cost.ChargeMax;
		return result;
	}

	//$$default_units_ts.unit.sce2号.Spell:Data.Game.Formulas.Range
	/** @noSelf */
	export let validator_146821332:(效果节点:EffectParam)=>number= (效果节点:EffectParam):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let result: number = cache.Range;
		return result;
	}

	//$$default_units_ts.unit.sce2号.Spell:Data.Game.Formulas.Time
	/** @noSelf */
	export let validator_14977813:(效果节点:EffectParam, 阶段:number)=>number= (效果节点:EffectParam, 阶段:number):number => {
		let spell: Skill = 效果节点.skill();
		let cache: _OBJ__spell_spell = spell.cache;
		let cooldown: number = cache.Cost.Cooldown;
		let hasteProp: _OBJ__Spell_attack_speed_attribute = cache.AttributeHaste;
		let caster: Unit | undefined = base.eff_param_caster(效果节点);
		let haste: number = caster.get_ex(base.force_as<单位属性>(hasteProp), UnitPropertySubType["Final"]);
		let s_current: number = 0;
		let sum: number = 0;
		let s: Array<number> = new Array<number>();
		s[1] = cache.Time.cast_start_time;
		s[2] = cache.Time.cast_channel_time;
		s[3] = cache.Time.cast_shot_time;
		s[4] = cache.Time.cast_finish_time;
		sum = (s[1] + (s[2] + s[3]));
		s_current = s[阶段];
		if (((s_current <= 0))) {
			return 0;
		} else {
		}
		if (((cooldown > 0))&&((sum > cooldown))) {
			s_current = ((s_current * cooldown) / sum);
		} else {
		}
		if (((haste > 0))) {
			s_current = (s_current / haste);
		} else {
		}
		return s_current;
	}

	//$$default_units_ts.unit.火龙.MoverFunction:Data.Game.FunctionServer
	/** @noSelf */
	export let validator_36377917:(效果节点:EffectParam, 流逝时间:number, 移动器:Mover)=>void= (效果节点:EffectParam, 流逝时间:number, 移动器:Mover):void => {
		let 施法者单位: Unit = base.eff_param_caster(效果节点);
		let 弹道单位: Unit = base.eff_param_target_unit(效果节点);
		let 发射点: Point = base.eff_param_origin_point(效果节点);
		let 目标点: Point = base.eff_param_target_point(base.eff_param_get_by_name(效果节点, (("$$default_units_ts.unit.火龙.Set") as unknown as IdPreset<"effect_id">)));
		let 半径: number = (发射点.distance(目标点) * 0.5);
		let 初始角度: any = 目标点.angle(发射点);
		let 圆心: Point = 目标点.polar_to_ex(初始角度, 半径);
		let 当前位置: Point = 圆心.polar_to_ex((初始角度 + (流逝时间 * 100)), 半径);
		弹道单位.set_location_async(当前位置);
		if (((当前位置.distance(发射点) > 1150))) {
			移动器.remove();
		} else {
		}
	}

	//init validators
	function init_validator_0() {
		let data: any = undefined
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior")) {
			data.Behavior = validator_110618627
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_1")) {
			data.Behavior = validator_183853803
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_10")) {
			data.Behavior = validator_12884627
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_11")) {
			data.Behavior = validator_71909885
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_2")) {
			data.Behavior = validator_44985790
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_3")) {
			data.Behavior = validator_32200746
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_4")) {
			data.Behavior = validator_214424895
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_5")) {
			data.Behavior = validator_77181647
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_6")) {
			data.Behavior = validator_56391319
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_7")) {
			data.Behavior = validator_15144200
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_8")) {
			data.Behavior = validator_264289186
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.default_units_ts_AIBehavior_9")) {
			data.Behavior = validator_62677470
		}
		if (data = base.eff.cache("$$default_units_ts.ai.testai.root")) {
			data.OnAdd = validator_196587954
			data.OnProvoke = validator_2653852
		}
		if (data = base.eff.cache("$$default_units_ts.ai.沿路线前进ai.AIBehavior")) {
			data.Behavior = validator_165491582
		}
		if (data = base.eff.cache("$$default_units_ts.ai.沿路线前进ai.AIBehavior_1")) {
			data.Behavior = validator_121906544
		}
		if (data = base.eff.cache("$$default_units_ts.ai.沿路线前进ai.AIBehavior_2")) {
			data.Behavior = validator_30746330
		}
		if (data = base.eff.cache("$$default_units_ts.ai.沿路线前进ai.AIBehavior_3")) {
			data.Behavior = validator_51564695
		}
		if (data = base.eff.cache("$$default_units_ts.ai.沿路线前进ai.AIBehavior_4")) {
			data.Behavior = validator_198778265
		}
		if (data = base.eff.cache("$$default_units_ts.ai.沿路线前进ai.AIBehavior_5")) {
			data.Behavior = validator_87537532
		}
		if (data = base.eff.cache("$$default_units_ts.ai.沿路线前进ai.AIBehavior_6")) {
			data.Behavior = validator_80352573
		}
		if (data = base.eff.cache("$$default_units_ts.ai.沿路线前进ai.AIBehavior_7")) {
			data.Behavior = validator_251720648
		}
		if (data = base.eff.cache("$$default_units_ts.ai.沿路线前进ai.AIBehavior_8")) {
			data.Behavior = validator_240608409
		}
		if (data = base.eff.cache("$$default_units_ts.ai.沿路线前进ai.root")) {
			data.OnAdd = validator_11286101
			data.OnProvoke = validator_76170749
		}
		if (data = base.eff.cache("$$default_units_ts.ai.自定义AI样例.AIBehavior")) {
			data.Behavior = validator_17460945
		}
		if (data = base.eff.cache("$$default_units_ts.ai.自定义AI样例.AIBehavior_1")) {
			data.Behavior = validator_92352474
		}
		if (data = base.eff.cache("$$default_units_ts.ai.自定义AI样例.AIBehavior_2")) {
			data.Behavior = validator_66985415
		}
		if (data = base.eff.cache("$$default_units_ts.ai.自定义AI样例.AIBehavior_3")) {
			data.Behavior = validator_198202659
		}
		if (data = base.eff.cache("$$default_units_ts.ai.自定义AI样例.AIBehavior_4")) {
			data.Behavior = validator_56912231
		}
		if (data = base.eff.cache("$$default_units_ts.ai.自定义AI样例.AIBehavior_5")) {
			data.Behavior = validator_237463119
		}
		if (data = base.eff.cache("$$default_units_ts.ai.自定义AI样例.AIBehavior_6")) {
			data.Behavior = validator_23533341
		}
		if (data = base.eff.cache("$$default_units_ts.ai.自定义AI样例.AIBehavior_7")) {
			data.Behavior = validator_144538679
		}
		if (data = base.eff.cache("$$default_units_ts.ai.自定义AI样例.AIBehavior_9")) {
			data.Behavior = validator_55344321
		}
		if (data = base.eff.cache("$$default_units_ts.ai.自定义AI样例.root")) {
			data.OnAdd = validator_245519073
			data.OnRemove = validator_34695145
		}
		if (data = base.eff.cache("$$default_units_ts.effect.击退.PolarOffset_1")) {
			data.Distance = validator_126068103
		}
		if (data = base.eff.cache("$$.template@func_ref.FuncRefSortUnitBuff.root")) {
			data.Func = validator_33561757
		}
		if (data = base.eff.cache("$$default_units_ts.template@func_ref.优先符合过滤的单位.root")) {
			data.Func = validator_99777765
		}
		if (data = base.eff.cache("$$default_units_ts.func_ref.lowest_health_rate_unit.root")) {
			data.Func = validator_23451517
		}
		if (data = base.eff.cache("$$default_units_ts.func_ref.nearest_unit_to_caster.root")) {
			data.Func = validator_97896931
		}
		if (data = base.eff.cache("$$default_units_ts.func_ref.nearest_unit_to_target.root")) {
			data.Func = validator_248042905
		}
		if (data = base.eff.cache("$$default_units_ts.func_ref.优先上次施法的目标.root")) {
			data.Func = validator_60770996
		}
		if (data = base.eff.cache("$$default_units_ts.func_ref.优先剩余时间长的Buff.root")) {
			data.Func = validator_256149901
		}
		if (data = base.eff.cache("$$default_units_ts.func_ref.优先施法者正前方120度内的单位.root")) {
			data.Func = validator_145515012
		}
		if (data = base.eff.cache("$$default_units_ts.func_ref.优先来自英雄的Buff.root")) {
			data.Func = validator_67320178
		}
		if (data = base.eff.cache("$$default_units_ts.func_ref.优先高等级的Buff.root")) {
			data.Func = validator_110271156
		}
		if (data = base.eff.cache("$$default_units_ts.func_ref.随机的单位.root")) {
			data.Func = validator_180756668
		}
		if (data = base.eff.cache("$$.gameplay.dflt.default_units_ts_CureRule_1")) {
			data.FCureRule = validator_255597210
			data.FCriticalRule = validator_148805509
		}
		if (data = base.eff.cache("$$.gameplay.dflt.default_units_ts_DamageRule_3")) {
			data.FDamageRule = validator_34781199
			data.FCriticalRule = validator_189928549
		}
		if (data = base.eff.cache("$$.gameplay.dflt.default_units_ts_DamageRule_4")) {
			data.FDamageRule = validator_43068806
			data.FCriticalRule = validator_209125194
		}
		if (data = base.eff.cache("$$.gameplay.dflt.default_units_ts_DamageRule_5")) {
			data.FDamageRule = validator_22685921
			data.FCriticalRule = validator_191493992
		}
		if (data = base.eff.cache("$$.gameplay.dflt.root")) {
			data.XPGrantRule.XPGrant = validator_44065067
			data.XPGrantRule.XPDistributionCheck = validator_166947453
		}
		if (data = base.eff.cache("$$.item.test_potion_heal.SpellRootInstant_1")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$.template@spell.Spell.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$.template@spell.SpellBuild.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$.template@spell.SpellMorph.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$.template@spell.SpellRootCircle.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$.template@spell.SpellRootInstant.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$.template@spell.SpellRootPassive.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$.template@spell.SpellRootUnit.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$.template@spell.SpellRootVector.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$.template@spell.SpellToggle.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$.template@spell.spell.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$busiyixiantu_5n1b.spell.群锤.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.三火球.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.不死鸟.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.不死鸟灼伤.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.修理.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.元素凝聚.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.元素激流.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.冲锋陷阵.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.净化.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.刀扇.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.剑刃风暴.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.占据.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.反噬（被动）.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.召唤水元素.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.后撤步.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.吞噬魔法.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.吸血光环.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.咆哮.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.嘲讽.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.回春.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.圣光斗篷.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.圣光术.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.地震.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.坚韧光环.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.复活.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.天神下凡.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.寄生虫.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.巫毒狂舞.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.弱化之锤.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.弹无虚发.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.心灵之火.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.怒吼.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.感应地雷.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.战争践踏.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.战吼.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.控制魔法.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.放逐.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.旋转碰撞回旋镖（被动）.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.旋风斩.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.无敌圣盾.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.无敌（被动）.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.暴风雪.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.治疗术.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.治疗波.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.治疗结界.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.法力虹吸.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.流星火雨.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.火球术.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.炉石.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.盾击.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.硬化体肤（被动）.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.祝福圣光.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.移形换影.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.穿刺.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.群体减速.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.肉勾.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.虔诚光环.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.蛇棒攻击.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.血焰之剑.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.诅咒.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.诱捕.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.迷雾.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-三连击.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.邪恶狂热.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.重生.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.野蛮跳跃.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.钩锁.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.镜像.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.闪现.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.闪电之盾.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.闪电链.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.防反.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.隐身术.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.雷霆一击.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.震荡波.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.霜甲术.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.静滞陷阱.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.风暴之锤.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.驱散魔法.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.魔法侦测（被动）.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.魔法免疫（被动）.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.魔法免疫（被动）_1.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.spell.魔法防御（可开关）.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$smallcard_choose_one.spell.示例技能.root")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.unit.感应地雷.Spell")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.unit.感应地雷.Spell_1")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.unit.火龙.Spell")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.unit.火龙.SpellRootVector_2")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.unit.火龙.Spell_1")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.unit.野猪.SpellRootVector_1")) {
			data.Formulas.Mana = validator_244194926
			data.Formulas.Cooldown = validator_135839809
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Time = validator_234228873
		}
		if (data = base.eff.cache("$$default_units_ts.template@spell.通用近战普攻模版.root")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.spell.横扫.root")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-刀光.root")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-劈砍.root")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-戳刺.root")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-火球.root")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.unit.6、远程普攻示例英雄.Spell")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.unit.sce2号.SpellRootVector_2")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.unit.无人机.SpellRootVector_1")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.unit.火龙.SpellRootVector_1")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.unit.爬虫.SpellRootVector_1")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.unit.狼人.SpellRootCircle_1")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.unit.狼人.SpellRootInstant_1")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.unit.秃鹫.SpellRootCircle_1")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.unit.秃鹫.SpellRootCircle_1_1")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.unit.野猪.SpellRootCircle_1")) {
			data.Formulas.ChargeMax = validator_211391127
			data.Formulas.Range = validator_63878418
			data.Formulas.Mana = validator_33587127
			data.Formulas.Cooldown = validator_214974897
			data.Formulas.Time = validator_214580859
		}
		if (data = base.eff.cache("$$default_units_ts.template@spell.通用近战普攻模版.Damage_1")) {
			data.Amount = validator_196209676
		}
		if (data = base.eff.cache("$$busiyixiantu_5n1b.spell.群锤.Damage")) {
			data.Amount = validator_140350288
		}
		if (data = base.eff.cache("$$default_units_ts.spell.三火球.PolarOffset_1")) {
			data.PeriodChangeIndex = validator_204988239
		}
		if (data = base.eff.cache("$$default_units_ts.unit.sce2号.PolarOffset_1")) {
			data.PeriodChangeIndex = validator_204988239
		}
		if (data = base.eff.cache("$$default_units_ts.unit.火龙.PolarOffset_1")) {
			data.PeriodChangeIndex = validator_204988239
		}
		if (data = base.eff.cache("$$default_units_ts.spell.不死鸟.Set_1")) {
			data.Validators = validator_208749477
		}
		if (data = base.eff.cache("$$default_units_ts.spell.不死鸟灼伤.PersistLoop_1_1")) {
			data.PersistValidator = validator_258945007
		}
		if (data = base.eff.cache("$$default_units_ts.spell.元素激流.CustomAction_2")) {
			data.Func = validator_40290592
		}
		if (data = base.eff.cache("$$default_units_ts.spell.元素激流.CustomAction_3")) {
			data.Func = validator_171995275
		}
		if (data = base.eff.cache("$$default_units_ts.spell.元素激流.Search_2")) {
			data.SearchValidators = validator_27087888
		}
		if (data = base.eff.cache("$$default_units_ts.spell.冲锋陷阵.LaunchMissileDash_1")) {
			data.Speed = validator_236306566
		}
		if (data = base.eff.cache("$$default_units_ts.spell.净化.Damage_1")) {
			data.Validators = validator_196723837
		}
		if (data = base.eff.cache("$$default_units_ts.spell.后撤步.LaunchMissileDash_1")) {
			data.Speed = validator_220220686
		}
		if (data = base.eff.cache("$$default_units_ts.spell.吞噬魔法.Set_2")) {
			data.Validators = validator_130739784
		}
		if (data = base.eff.cache("$$default_units_ts.spell.吸血光环.ResponseDamageAttacker_1")) {
			data.Modification = validator_195133005
		}
		if (data = base.eff.cache("$$default_units_ts.spell.怒吼.ResponseDamageDefender_1")) {
			data.Multiplier = validator_58691808
		}
		if (data = base.eff.cache("$$default_units_ts.spell.旋转碰撞回旋镖（被动）.EffectSet")) {
			data.Validators = validator_76703967
		}
		if (data = base.eff.cache("$$default_units_ts.spell.旋转碰撞回旋镖（被动）.EffectSwitch")) {
			data.CaseArray[1].Validator = validator_110577815
			data.CaseArray[2].Validator = validator_69151185
			data.CaseArray[3].Validator = validator_153290600
		}
		if (data = base.eff.cache("$$default_units_ts.spell.治疗波.CustomAction_1")) {
			data.Func = validator_56366968
		}
		if (data = base.eff.cache("$$default_units_ts.spell.治疗波.CustomAction_2")) {
			data.Func = validator_108653932
		}
		if (data = base.eff.cache("$$default_units_ts.spell.治疗波.Search_1")) {
			data.SearchValidators = validator_34088597
		}
		if (data = base.eff.cache("$$default_units_ts.spell.治疗波.UnitModifyAttribute_1")) {
			data.KeyValuePairs[1].Value = validator_157054375
		}
		if (data = base.eff.cache("$$default_units_ts.spell.法力虹吸.AddBuff_1")) {
			data.Validators = validator_157541609
		}
		if (data = base.eff.cache("$$default_units_ts.spell.法力虹吸.AddBuff_2")) {
			data.Validators = validator_67885651
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-三连击.Buff")) {
			data.PersistValidator = validator_20859394
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-三连击.Damage")) {
			data.Amount = validator_51649446
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-三连击.PolarOffset")) {
			data.Validators = validator_236127537
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-刀光.Damage_1")) {
			data.Amount = validator_223462450
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-火球.Damage_1")) {
			data.Amount = validator_223462450
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-劈砍.Damage_1")) {
			data.Amount = validator_19086676
		}
		if (data = base.eff.cache("$$default_units_ts.spell.通用攻击-戳刺.Damage_1")) {
			data.Amount = validator_120343679
		}
		if (data = base.eff.cache("$$default_units_ts.spell.重生.Switch_1")) {
			data.CaseArray[1].Validator = validator_255550721
		}
		if (data = base.eff.cache("$$default_units_ts.spell.钩锁.LaunchMissileDash_1")) {
			data.Speed = validator_222950169
		}
		if (data = base.eff.cache("$$default_units_ts.spell.闪电链.CustomAction_1")) {
			data.Func = validator_228903203
		}
		if (data = base.eff.cache("$$default_units_ts.spell.闪电链.CustomAction_2")) {
			data.Func = validator_2540000
		}
		if (data = base.eff.cache("$$default_units_ts.spell.闪电链.Damage_1")) {
			data.Amount = validator_45382866
		}
		if (data = base.eff.cache("$$default_units_ts.spell.闪电链.Search_2")) {
			data.SearchValidators = validator_205128689
		}
		if (data = base.eff.cache("$$default_units_ts.unit.sce2号.Spell")) {
			data.Formulas.Mana = validator_117687348
			data.Formulas.Cooldown = validator_155076026
			data.Formulas.ChargeMax = validator_117198562
			data.Formulas.Range = validator_146821332
			data.Formulas.Time = validator_14977813
		}
		if (data = base.eff.cache("$$default_units_ts.unit.火龙.MoverFunction")) {
			data.FunctionServer = validator_36377917
		}
	}
	init_validator_0()
}
