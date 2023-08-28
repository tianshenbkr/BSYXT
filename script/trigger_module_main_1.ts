module busiyixiantu_5n1b {
	export let 小黑鸟的数量: number = 0;
	export class 修改提示怪物死亡数量UI文字 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "修改提示怪物死亡数量UI文字"
		readonly autoForward: boolean = true
	}
	export class 大黑鸟死亡事件 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "大黑鸟死亡事件"
		readonly autoForward: boolean = true
	}
	export let 移动到大黑鸟 = base.trigger_new((当前触发器:Trigger, e:base.EventUnitDie)=>{
		if (((e.unit.get_name() == (("$$busiyixiantu_5n1b.unit.小黑鸟.root") as unknown as IdPreset<"unit_id">)))){
			base.send_custom_event(new busiyixiantu_5n1b.修改提示怪物死亡数量UI文字(((base.game) as unknown as base.Game)));
			busiyixiantu_5n1b.小黑鸟的数量 = (busiyixiantu_5n1b.小黑鸟的数量 + 1);
			base.player_create_unit_ai(base.player(2), (("$$busiyixiantu_5n1b.unit.金币怪.root") as unknown as IdPreset<"unit_id">), e.unit.get_scene_point(), 0, true);
			base.timer_wait(1, ():void => {
				base.get_last_created_unit().remove();
			});
			if (((busiyixiantu_5n1b.小黑鸟的数量 == 10))) {
				busiyixiantu_5n1b.玩家的主控单位.blink_ex(base.get_scene_point("default", "大黑鸟的传送点", _G.present));
				base.player_set_camera(base.player(1), (("$$busiyixiantu_5n1b.camera_property.大黑鸟.root") as unknown as IdPreset<"camera_property_id">), 0.5);
			} else {
			}
		}
	}, [], false, undefined, true)
	export let 大黑鸟死亡 = base.trigger_new((当前触发器:Trigger, e:base.EventUnitDie)=>{
		if (((e.unit.get_name() == (("$$busiyixiantu_5n1b.unit.大黑鸟.root") as unknown as IdPreset<"unit_id">)))){
			base.send_custom_event(new busiyixiantu_5n1b.大黑鸟死亡事件(((base.game) as unknown as base.Game)));
			busiyixiantu_5n1b.玩家的主控单位.blink_ex(base.get_scene_point("default", "新手任务区域3", _G.present));
			base.player_set_camera(base.player(1), (("$$busiyixiantu_5n1b.camera_property.新手任务区域3.root") as unknown as IdPreset<"camera_property_id">), 0.5);
		}
	}, [], false, undefined, true)
	export let 玩家单位设置初始化 = base.trigger_new((当前触发器:Trigger, e:base.EventGameStart)=>{
		if (true){
			base.player(1).set_num(玩家属性["技能急速"], 1);
			base.player(1).set_num(玩家属性["物理收益"], 1);
			base.player(1).set_num(玩家属性["身法"], 100);
			base.player(1).set_num(玩家属性["神念"], 100);
			base.player(1).set_num(玩家属性["根骨"], 100);
			base.player(1).set_num(玩家属性["生命增幅"], 1);
			base.player(1).get_hero().find_skill((("$$busiyixiantu_5n1b.spell.不能升级.root") as unknown as IdPreset<"spell_id">)).disable();
		}
	}, [], false, undefined, true)
	export let 玩家的主控单位: Unit = base.get_default_unit("初始地图_1", "[默认]远程英雄样例");
	export let 清除怪物:()=>undefined = ():undefined => {
		base.player_create_unit_ai(base.player(1), (("$$busiyixiantu_5n1b.unit.清除周围生物.root") as unknown as IdPreset<"unit_id">), busiyixiantu_5n1b.玩家的主控单位.get_scene_point(), 0, true);
		base.get_last_created_unit().remove();
		base.timer_wait(0.5, ():void => {
			base.get_last_created_unit().remove();
		});
	}
	export let 加怪的怪物类型: IdPreset<"unit_id"> = (("$$busiyixiantu_5n1b.unit.小黑鸟.root") as unknown as IdPreset<"unit_id">);
	export let 刷怪判定: boolean = true;
	export let 刷怪数量: number = 0;
	export let 加怪记录: number = 0;
	export let 加怪升级记录: number = 0;
	export let 加怪死亡计数: number = 0;
	export let 是否在加怪升级中: boolean = false;
	export let 刷怪总数据: _OBJ__wave_Wave = ((base.eff.cache("$$busiyixiantu_5n1b.wave.练功房正常怪物.root")) as unknown as _OBJ__wave_Wave);
	export let 升级怪总数据: _OBJ__wave_Wave = ((base.eff.cache("$$busiyixiantu_5n1b.wave.练功房升级怪.root")) as unknown as _OBJ__wave_Wave);
	export let 当前关卡刷怪数据: _OBJ__spawner_Spawner = ((base.eff.cache("$$busiyixiantu_5n1b.spawner.修炼室小怪LV1.root")) as unknown as _OBJ__spawner_Spawner);
	export let 存在刷怪计时器: boolean = false;
	export class 加怪了 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "加怪了"
		readonly autoForward: boolean = true
	}
	export class 不能再减怪了 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "不能再减怪了"
		readonly autoForward: boolean = true
	}
	export class 加怪挑战中 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "加怪挑战中"
		readonly autoForward: boolean = true
	}
	export class 加怪完成或者失败 extends TriggerEvent{
		constructor(public obj:base.Game, public 怪物层数:number | undefined) {
			super()
		}
		readonly event_name: string = "加怪完成或者失败"
		readonly autoForward: boolean = true
	}
	export class 减怪UI extends TriggerEvent{
		constructor(public obj:base.Game, public 怪物层数:number) {
			super()
		}
		readonly event_name: string = "减怪UI"
		readonly autoForward: boolean = true
	}
	export let 刷怪 = base.trigger_new((当前触发器:Trigger, e:进入修炼室)=>{
		if (((busiyixiantu_5n1b.存在刷怪计时器 == false))){
			busiyixiantu_5n1b.存在刷怪计时器 = true;
			base.timer_loop(busiyixiantu_5n1b.当前关卡刷怪数据.pulse, ():void => {
				for (let 索引 = 0; 索引 <= busiyixiantu_5n1b.当前关卡刷怪数据.num; 索引 += 1) {
					if (((busiyixiantu_5n1b.刷怪判定 == true))) {
						base.player_create_unit_ai(base.player(2), busiyixiantu_5n1b.当前关卡刷怪数据.monster, base.get_scene_area("default", "rect", "Rect_1", _G.present).scene_random_point(), 0, true);
					} else {
					}
				}
			});
		}
	}, [], false, undefined, true)
	export let 玩家受伤 = base.trigger_new((当前触发器:Trigger, e:base.EventRegionEnter)=>{
		if (true){
			base.add_skill_simple(e.unit, (("$$busiyixiantu_5n1b.spell.献祭.root") as unknown as IdPreset<"spell_id">));
		}
	}, [], false, undefined, true)
	export let 玩家死亡 = base.trigger_new((当前触发器:Trigger, e:base.EventRegionEnter)=>{
		if (((e.unit.get_name() == (("$$busiyixiantu_5n1b.unit.修炼室小怪.root") as unknown as IdPreset<"unit_id">)))){
			busiyixiantu_5n1b.清除怪物();
			busiyixiantu_5n1b.玩家的主控单位.kill(busiyixiantu_5n1b.玩家的主控单位);
			busiyixiantu_5n1b.刷怪判定 = false;
		}
	}, [], false, undefined, true)
	export let 进入修炼室 = base.trigger_new((当前触发器:Trigger, e:进入修炼室)=>{
		if (true){
			busiyixiantu_5n1b.刷怪判定 = true;
			busiyixiantu_5n1b.玩家的主控单位.blink_ex(base.get_scene_area("default", "circle", "Circles_0", _G.present).get_scene_point());
			base.player_set_camera(base.player(1), (("$$busiyixiantu_5n1b.camera_property.修炼室.root") as unknown as IdPreset<"camera_property_id">), 0.1);
			busiyixiantu_5n1b.玩家的主控单位.add_custom(单位属性["搜敌范围"], ((false) as unknown as 单位属性子类型), 4500);
			busiyixiantu_5n1b.玩家的主控单位.add_custom(单位属性["攻击范围"], ((false) as unknown as 单位属性子类型), 4500);
			base.unit_add_ai(busiyixiantu_5n1b.玩家的主控单位, base.default_ai["default_ai"], ((base.table_new()) as unknown as base.new_table));
		}
	}, [], false, undefined, true)
	export let 加怪 = base.trigger_new((当前触发器:Trigger, e:加怪)=>{
		let 怪物数组: Array<IdPreset<"spawner_id">> = busiyixiantu_5n1b.升级怪总数据.wave_data;
		let 怪物数据: _OBJ__spawner_Spawner = base.eff.cache_ts<_OBJ__spawner_Spawner>(怪物数组[busiyixiantu_5n1b.加怪升级记录]);
		let 计时器: Timer = base.timer_loop(1, ():void => {
		});
		if (true){
			if (((busiyixiantu_5n1b.刷怪数量 < busiyixiantu_5n1b.加怪升级记录))) {
				busiyixiantu_5n1b.刷怪数量 = (busiyixiantu_5n1b.刷怪数量 + 1);
				busiyixiantu_5n1b.清除怪物();
				base.timer_sleep(0.6);
				busiyixiantu_5n1b.当前关卡刷怪数据 = base.eff.cache_ts<any>(busiyixiantu_5n1b.刷怪总数据.wave_data[busiyixiantu_5n1b.刷怪数量]);
				base.send_custom_event(new busiyixiantu_5n1b.减怪UI(((base.game) as unknown as base.Game), (busiyixiantu_5n1b.刷怪数量 + 1)));
				base.send_custom_event(new busiyixiantu_5n1b.加怪了(((base.game) as unknown as base.Game)));
			} else {
				if (((busiyixiantu_5n1b.是否在加怪升级中 == false))) {
					busiyixiantu_5n1b.是否在加怪升级中 = true;
					busiyixiantu_5n1b.刷怪判定 = false;
					busiyixiantu_5n1b.加怪的通关判定.enable();
					busiyixiantu_5n1b.加怪的怪物类型 = 怪物数据.monster;
					busiyixiantu_5n1b.清除怪物();
					base.send_custom_event(new busiyixiantu_5n1b.加怪挑战中(((base.game) as unknown as base.Game)));
					计时器 = base.timer_loop(怪物数据.pulse, ():void => {
						for (let 索引 = 0; 索引 <= 怪物数据.num; 索引 += 1) {
							if ((((busiyixiantu_5n1b.加怪记录 < 怪物数据.times) && (busiyixiantu_5n1b.是否在加怪升级中 == true)))) {
								busiyixiantu_5n1b.加怪记录 = (busiyixiantu_5n1b.加怪记录 + 1);
								base.player_create_unit_ai(base.player(2), 怪物数据.monster, base.get_scene_area("default", "rect", "Rect_1", _G.present).scene_random_point(), 0, true);
							} else {
								计时器.remove();
							}
						}
					});
				} else {
				}
			}
		}
	}, [], false, undefined, true)
	export let 减怪 = base.trigger_new((当前触发器:Trigger, e:减怪)=>{
		if (true){
			if (((busiyixiantu_5n1b.刷怪数量 >= 1))) {
				busiyixiantu_5n1b.刷怪数量 = (busiyixiantu_5n1b.刷怪数量 - 1);
				busiyixiantu_5n1b.清除怪物();
				base.timer_sleep(0.6);
				busiyixiantu_5n1b.当前关卡刷怪数据 = base.eff.cache_ts<any>(busiyixiantu_5n1b.刷怪总数据.wave_data[busiyixiantu_5n1b.刷怪数量]);
				base.send_custom_event(new busiyixiantu_5n1b.减怪UI(((base.game) as unknown as base.Game), (busiyixiantu_5n1b.刷怪数量 + 1)));
			} else {
				base.send_custom_event(new busiyixiantu_5n1b.不能再减怪了(((base.game) as unknown as base.Game)));
			}
		}
	}, [], false, undefined, true)
	export let 加怪的通关判定 = base.trigger_new((当前触发器:Trigger, e:base.EventUnitDie)=>{
		let 怪物数组: Array<IdPreset<"spawner_id">> = busiyixiantu_5n1b.升级怪总数据.wave_data;
		let 怪物数据: _OBJ__spawner_Spawner = base.eff.cache_ts<_OBJ__spawner_Spawner>(怪物数组[busiyixiantu_5n1b.加怪升级记录]);
		if (((e.killer == base.player(1).get_hero()))&&((e.unit.get_name() == busiyixiantu_5n1b.加怪的怪物类型))){
			busiyixiantu_5n1b.加怪死亡计数 = (busiyixiantu_5n1b.加怪死亡计数 + 1);
			log.info(busiyixiantu_5n1b.加怪死亡计数);
			log.info(busiyixiantu_5n1b.加怪记录);
			if (((busiyixiantu_5n1b.加怪死亡计数 == 怪物数据.times))&&((busiyixiantu_5n1b.加怪死亡计数 == busiyixiantu_5n1b.加怪记录))) {
				busiyixiantu_5n1b.加怪死亡计数 = 0;
				busiyixiantu_5n1b.加怪记录 = 0;
				busiyixiantu_5n1b.加怪升级记录 = (busiyixiantu_5n1b.加怪升级记录 + 1);
				busiyixiantu_5n1b.是否在加怪升级中 = false;
				busiyixiantu_5n1b.刷怪判定 = true;
				busiyixiantu_5n1b.刷怪数量 = (busiyixiantu_5n1b.刷怪数量 + 1);
				busiyixiantu_5n1b.当前关卡刷怪数据 = base.eff.cache_ts<any>(busiyixiantu_5n1b.刷怪总数据.wave_data[busiyixiantu_5n1b.刷怪数量]);
				base.send_custom_event(new busiyixiantu_5n1b.加怪完成或者失败(((base.game) as unknown as base.Game), (busiyixiantu_5n1b.加怪升级记录 + 1)));
				busiyixiantu_5n1b.加怪的通关判定.disable();
			} else {
			}
		}
	}, [], true, undefined, true)
	export let 攻击力修改 = base.trigger_new((当前触发器:Trigger, e:base.EventGameTimePeriodic)=>{
		if (true){
			base.player(1).get_hero().add_custom(单位属性["攻击"], ((false) as unknown as 单位属性子类型), base.player(1).get_num(玩家属性["每秒攻击"]));
		}
	}, [], false, undefined, true)
	export let 每秒攻击力修改 = base.trigger_new((当前触发器:Trigger, e:base.EventPlayerKeyDown)=>{
		if (((e.key_keyboard == KeyboardKey["A"]))){
			base.player(1).add(玩家属性["每秒攻击"], 10);
		}
	}, [], true, undefined, true)
	export let 等级突破 = base.trigger_new((当前触发器:Trigger, e:base.EventUnitLevelUp)=>{
		if ((((e.unit == base.player(1).get_hero()) && (e.unit.get_level() == busiyixiantu_5n1b.等级数组[busiyixiantu_5n1b.玩家当前等级阶层])))){
			base.player(1).get_hero().find_skill((("$$busiyixiantu_5n1b.spell.不能升级.root") as unknown as IdPreset<"spell_id">)).enable();
			base.send_custom_event(new busiyixiantu_5n1b.等级突破显示(((base.game) as unknown as base.Game), undefined));
		}
	}, [], false, undefined, true)
	export let 刷突破BOSS = base.trigger_new((当前触发器:Trigger, e:挑战等级突破BOSS)=>{
		let BOSS数据列表: Array<IdPreset<"spawner_id">> = busiyixiantu_5n1b.BOSS怪物列表.wave_data;
		let BOSS数据: _OBJ__spawner_Spawner = base.eff.cache_ts<_OBJ__spawner_Spawner>(BOSS数据列表[busiyixiantu_5n1b.玩家当前等级阶层]);
		if (true){
			busiyixiantu_5n1b.刷怪判定 = false;
			busiyixiantu_5n1b.是否在挑战等级突破BOSS = true;
			busiyixiantu_5n1b.清除怪物();
			base.timer_wait(1, ():void => {
				base.player(1).get_hero().blink_ex(base.get_scene_area("default", "circle", "玩家", _G.present).get_scene_point());
				base.player_set_camera(base.player(1), (("$$busiyixiantu_5n1b.camera_property.等级突破区域.root") as unknown as IdPreset<"camera_property_id">), 0.1);
				base.player_create_unit_ai(base.player(2), BOSS数据.monster, base.get_scene_area("default", "rect", "Rect_2", _G.present).get_scene_point(), 0, true);
			});
		}
	}, [], false, undefined, true)
	export let 等级突破BOSS死亡 = base.trigger_new((当前触发器:Trigger, e:base.EventUnitDie)=>{
		let BOSS数据列表: Array<IdPreset<"spawner_id">> = busiyixiantu_5n1b.BOSS怪物列表.wave_data;
		let BOSS数据: _OBJ__spawner_Spawner = base.eff.cache_ts<_OBJ__spawner_Spawner>(BOSS数据列表[busiyixiantu_5n1b.玩家当前等级阶层]);
		if ((((busiyixiantu_5n1b.是否在挑战等级突破BOSS == true) && (e.killer == busiyixiantu_5n1b.玩家的主控单位) && (e.unit.get_name() == BOSS数据.monster)))){
			base.send_custom_event(new busiyixiantu_5n1b.等级突破显示(((base.game) as unknown as base.Game), busiyixiantu_5n1b.等级数组[(busiyixiantu_5n1b.玩家当前等级阶层 + 1)]));
			base.player(1).get_hero().find_skill((("$$busiyixiantu_5n1b.spell.不能升级.root") as unknown as IdPreset<"spell_id">)).disable();
			busiyixiantu_5n1b.玩家当前等级阶层 = (busiyixiantu_5n1b.玩家当前等级阶层 + 1);
			busiyixiantu_5n1b.是否在挑战等级突破BOSS = false;
		}
	}, [], false, undefined, true)
	export let 等级数组: Array<number> = new Array<number>(3, 9, 29, 39, 49, 59, 69, 79, 89, 99);
	export let 玩家当前等级阶层: number = 0;
	export let BOSS怪物列表: _OBJ__wave_Wave = ((base.eff.cache("$$busiyixiantu_5n1b.wave.等级突破BOSS.root")) as unknown as _OBJ__wave_Wave);
	export let 是否在挑战等级突破BOSS: boolean = false;
	export class 等级突破显示 extends TriggerEvent{
		constructor(public obj:base.Game, public 当前升级最高等级:number | undefined) {
			super()
		}
		readonly event_name: string = "等级突破显示"
		readonly autoForward: boolean = true
	}
	export let ll = base.trigger_new((当前触发器:Trigger, e:base.EventPlayerKeyDown)=>{
		let 新变量_2: boolean = true;
		let 局部存档: busiyixiantu_5n1b.玩家数据 = new busiyixiantu_5n1b.玩家数据();
		if (true){
			switch (e.key_keyboard) {
				case KeyboardKey["D"]: {
					base.score_get_v2(new ScoreGetParam(base.player(1).user_id(), "玩家数据"), (查询结果_数据集合:Array<ScoreData>):void => {
						let 新变量: ScoreSetParam = new ScoreSetParam(base.player(1).user_id(), "玩家数据", 局部存档);
						let 查询结果_单一数据: ScoreData = 查询结果_数据集合[0];
						let 查询结果_值: busiyixiantu_5n1b.玩家数据 = 查询结果_单一数据.value;
						new ScoreCommitter();
						新变量 = new ScoreSetParam(base.player(1).user_id(), "玩家数据", 局部存档);
						base.get_last_created_score_committer().set(新变量);
						base.get_last_created_score_committer().commit(():void => {
							log.debug(new ScoreGetParam(base.player(1).user_id(), "玩家数据"), "success");
							// 执行提交成功后的操作
						}, (错误码:number, 错误信息:string):void => {
							// 执行提交成功后的操作
							log.debug(错误信息);
						});
						// 在这里对查询结果的值进行处理
					}, (错误代码:number, 错误信息:string):void => {
						// 查询出错时会执行这里的逻辑
						log.debug(错误信息);
					});
					break;
				}
				case KeyboardKey["C"]: {
					base.player(1).add(玩家属性["每秒攻击"], 10);
					break;
				}
				case KeyboardKey["A"]: {
					base.add_skill_simple(base.player(1).get_hero(), (("$$busiyixiantu_5n1b.spell.不能升级.root") as unknown as IdPreset<"spell_id">));
					break;
				}
				case KeyboardKey["B"]: {
					base.player(1).get_hero().find_skill((("$$busiyixiantu_5n1b.spell.不能升级.root") as unknown as IdPreset<"spell_id">)).disable();
					break;
				}
				default : {
					break;
				}
			}
		}
	}, [], false, undefined, true)
	export let trg挑战注册 = base.trigger_new((当前触发器:Trigger, e:base.EventGameStart)=>{
		if (true){
			log.debug("测试-注册挑战", base.player(1), (("$$busiyixiantu_5n1b.rpg_challenge.挑战测试.root") as unknown as IdPreset<"rpg_challenge_id">));
			busiyixiantu_5n1b.func_创建rpg_挑战(base.player(1), (("$$busiyixiantu_5n1b.rpg_challenge.挑战测试.root") as unknown as IdPreset<"rpg_challenge_id">));
		}
	}, [], false, undefined, true)
	export let 挑战退出 = base.trigger_new((当前触发器:Trigger, e:busiyixiantu_5n1b.玩家_完成rpg挑战自动退出)=>{
		if (true){
			log.debug("挑战退出", e.player);
		}
	}, [], false, undefined, true)
	export class 玩家_完成rpg挑战自动退出 extends TriggerEvent{
		constructor(public obj:base.Game, public player:Player) {
			super()
		}
		readonly event_name: string = "玩家_完成rpg挑战自动退出"
		readonly autoForward: boolean = false
	}
	export let func_测试面板注册按钮:(text:string, func:(this: void, arg1:Player)=>void, 列:number | undefined)=>void = (text:string, func:(this: void, arg1:Player)=>void, 列:number | undefined):void => {
		base.rpg_test.register_ts(text, func,id);
	}
	export let func_测试面板注册按钮:(text:string, func:(this: void, arg1:Player)=>void, 列:number | undefined)=>void = (text:string, func:(this: void, arg1:Player)=>void, 列:number | undefined):void => {
		base.rpg_test.register_ts(text, func,id);
	}
	export let func_创建rpg_挑战:(player:Player, link:IdPreset<"rpg_challenge_id">)=>busiyixiantu_5n1b.rpg_challenge = (player:Player, link:IdPreset<"rpg_challenge_id">):busiyixiantu_5n1b.rpg_challenge => {
		base.rpg_challenge.create_v2( player, link);
	}
	export class rpg_challenge{
		declare player:Player;
		constructor() {
		}
	}
	export class 玩家数据{
		每秒攻击:number = 10;
		每秒防御:number = 12;
		constructor() {
		}
	}
	export class 造成伤害前 extends TriggerEvent{
		constructor(public obj:base.Game, public 伤害大小:number, public 伤害来源:Unit) {
			super()
		}
		readonly event_name: string = "造成伤害前"
		readonly autoForward: boolean = false
	}
	export let 玩家单位属性更新 = base.trigger_new((当前触发器:Trigger, e:base.EventGameFrame)=>{
		if ((((base.player(1) != undefined) || (base.player(1).get_hero() != undefined)))){
			busiyixiantu_5n1b.玩家的主控单位.set_custom(单位属性["攻击"], ((false) as unknown as 单位属性子类型), (((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["基础攻击力"], UnitPropertySubType["Base"]) + ((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["攻击力修正"], UnitPropertySubType["Base"]) + (base.player(1).get_num(玩家属性["身法"]) * 0.3)) + (base.player(1).get_num(玩家属性["主属性"]) * busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["攻击系数"], UnitPropertySubType["Base"])))) * (1 + base.player(1).get_num(玩家属性["攻击力增幅"]))) + busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["额外攻击力"], UnitPropertySubType["Base"])));
			busiyixiantu_5n1b.玩家的主控单位.set_custom(单位属性["护甲减免"], ((false) as unknown as 单位属性子类型), (busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["基础防御力"], UnitPropertySubType["Base"]) + busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["防御力修正"], UnitPropertySubType["Base"])));
			busiyixiantu_5n1b.玩家的主控单位.set_custom(单位属性["生命上限"], ((false) as unknown as 单位属性子类型), ((((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["基础生命值"], UnitPropertySubType["Base"]) + (busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["生命值修正"], UnitPropertySubType["Base"]) + (base.player(1).get_num(玩家属性["根骨"]) * 1))) * (1 + base.player(1).get_num(玩家属性["生命增幅"]))) + busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["额外生命值"], UnitPropertySubType["Base"])) * (base.player(1).get_num(玩家属性["最终生命增幅"]) + 1)));
			busiyixiantu_5n1b.玩家的主控单位.set_custom(单位属性["魔法上限"], ((false) as unknown as 单位属性子类型), ((((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["基础魔法值"], UnitPropertySubType["Base"]) + (busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["魔法值修正"], UnitPropertySubType["Base"]) + (base.player(1).get_num(玩家属性["神念"]) * 1))) * (1 + base.player(1).get_num(玩家属性["魔法增幅"]))) + busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["额外魔法值"], UnitPropertySubType["Base"])) * (base.player(1).get_num(玩家属性["最终魔法增幅"]) + 1)));
			busiyixiantu_5n1b.玩家的主控单位.set_custom(单位属性["攻击速度"], ((false) as unknown as 单位属性子类型), (1 / (((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["攻击前摇"], UnitPropertySubType["Base"]) / (1 + base.player(1).get_num(玩家属性["攻击速度"]))) + ((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["攻击后摇"], UnitPropertySubType["Base"]) * 100) / (100 + base.player(1).get_num(玩家属性["攻击急速"])))) + 0.1)));
			busiyixiantu_5n1b.玩家的主控单位.set_custom(单位属性["冷却缩减"], ((false) as unknown as 单位属性子类型), (base.player(1).get_num(玩家属性["技能急速"]) / (100 + base.player(1).get_num(玩家属性["技能急速"]))));
		}
	}, [], false, undefined, true)
	export let 玩家单位属性计算:(需要返回的数据:string)=>number = (需要返回的数据:string):number => {
		let result: number = 0;
		switch (需要返回的数据) {
			case "攻击力": {
				result = (((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["基础攻击力"], UnitPropertySubType["Base"]) + ((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["攻击力修正"], UnitPropertySubType["Base"]) + (base.player(1).get_num(玩家属性["身法"]) * 0.3)) + (base.player(1).get_num(玩家属性["主属性"]) * busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["攻击系数"], UnitPropertySubType["Base"])))) * (1 + base.player(1).get_num(玩家属性["攻击力增幅"]))) + busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["额外攻击力"], UnitPropertySubType["Base"]));
				break;
			}
			case "防御力": {
				result = (busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["基础防御力"], UnitPropertySubType["Base"]) + busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["防御力修正"], UnitPropertySubType["Base"]));
				break;
			}
			case "生命值上限": {
				result = ((((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["基础生命值"], UnitPropertySubType["Base"]) + (busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["生命值修正"], UnitPropertySubType["Base"]) + (base.player(1).get_num(玩家属性["根骨"]) * 1))) * (1 + base.player(1).get_num(玩家属性["生命增幅"]))) + busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["额外生命值"], UnitPropertySubType["Base"])) * (base.player(1).get_num(玩家属性["最终生命增幅"]) + 1));
				break;
			}
			case "魔法值上限": {
				result = ((((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["基础魔法值"], UnitPropertySubType["Base"]) + (busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["魔法值修正"], UnitPropertySubType["Base"]) + (base.player(1).get_num(玩家属性["神念"]) * 1))) * (1 + base.player(1).get_num(玩家属性["魔法增幅"]))) + busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["额外魔法值"], UnitPropertySubType["Base"])) * (base.player(1).get_num(玩家属性["最终魔法增幅"]) + 1));
				break;
			}
			case "攻击速度倍率": {
				result = (1 / (((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["攻击前摇"], UnitPropertySubType["Base"]) / (1 + base.player(1).get_num(玩家属性["攻击速度"]))) + ((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["攻击后摇"], UnitPropertySubType["Base"]) * 100) / (100 + base.player(1).get_num(玩家属性["攻击急速"])))) + 0.1));
				break;
			}
			case "冷却缩减": {
				result = (base.player(1).get_num(玩家属性["技能急速"]) / (100 + base.player(1).get_num(玩家属性["技能急速"])));
				break;
			}
			default : {
				break;
			}
		}
		return result;
	}
	export let 普攻伤害计算:(受伤单位:Unit)=>number = (受伤单位:Unit):number => {
		let 计算护甲前: number = 0;
		let 计算护甲减免: number = 0;
		let 计算固定减伤1: number = 0;
		let 计算最终伤害1: number = 0;
		let 计算固定减伤2: number = 0;
		let 计算最终伤害2: number = 0;
		let 护盾计算: number = 0;
		if ((("暴击？" == "暴击？"))) {
			计算护甲前 = ((((((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["攻击"], UnitPropertySubType["Final"]) * (base.player(1).get_num(玩家属性["物理伤害"]) + 1)) * (base.player(1).get_num(玩家属性["普攻伤害"]) + 1)) * (base.player(1).get_num(玩家属性["物理爆伤"]) + 1)) * (base.player(1).get_num(玩家属性["伤害加成"]) + 1)) * (base.player(1).get_num(玩家属性["最终伤害"]) + 1)) * base.player(1).get_num(玩家属性["物理收益"]));
		} else {
			计算护甲前 = ((((((busiyixiantu_5n1b.玩家的主控单位.get_ex(单位属性["攻击"], UnitPropertySubType["Final"]) * (base.player(1).get_num(玩家属性["物理伤害"]) + 1)) * (base.player(1).get_num(玩家属性["普攻伤害"]) + 1)) * (0 + 1)) * (base.player(1).get_num(玩家属性["伤害加成"]) + 1)) * (base.player(1).get_num(玩家属性["最终伤害"]) + 1)) * base.player(1).get_num(玩家属性["物理收益"]));
		}
		计算护甲减免 = ((1 - ((受伤单位.get_ex(单位属性["护甲减免"], UnitPropertySubType["Base"]) * 3) / (100 + (3 * 受伤单位.get_ex(单位属性["护甲减免"], UnitPropertySubType["Base"]))))) * 计算护甲前);
		计算固定减伤1 = (计算护甲减免 - 受伤单位.get_ex(单位属性["固定减伤A1"], UnitPropertySubType["Base"]));
		计算最终伤害1 = (计算固定减伤1 * (base.player(1).get_num(玩家属性["最终普攻增幅"]) + 1));
		计算固定减伤2 = (计算最终伤害1 - 受伤单位.get_ex(单位属性["固定减伤A2"], UnitPropertySubType["Base"]));
		计算最终伤害2 = (计算固定减伤2 * (base.player(1).get_num(玩家属性["最终伤害增幅"]) + 1));
		if ((("护盾？" == "护盾"))) {
			护盾计算 = (计算最终伤害2 * 受伤单位.get_ex(单位属性["护盾"], UnitPropertySubType["Base"]));
			return 护盾计算;
		} else {
		}
		return 计算最终伤害2;
	}
	export let 物理技能伤害计算:(受伤单位:Unit, 技能伤害:number)=>number = (受伤单位:Unit, 技能伤害:number):number => {
		let 护盾计算: number = 0;
		let 计算最终伤害2: number = 0;
		let 计算固定减伤2: number = 0;
		let 计算最终伤害1: number = 0;
		let 计算固定减伤1: number = 0;
		let 计算护甲减免: number = 0;
		let 计算护甲前: number = 0;
		if ((("暴击？" == "字符串"))) {
			计算护甲前 = ((((((技能伤害 * (base.player(1).get_num(玩家属性["物理伤害"]) + 1)) * (base.player(1).get_num(玩家属性["技能输出"]) + 1)) * (base.player(1).get_num(玩家属性["物理爆伤"]) + 1)) * (base.player(1).get_num(玩家属性["伤害加成"]) + 1)) * (base.player(1).get_num(玩家属性["最终伤害"]) + 1)) * base.player(1).get_num(玩家属性["物理收益"]));
		} else {
			计算护甲前 = ((((((技能伤害 * (base.player(1).get_num(玩家属性["物理伤害"]) + 1)) * (base.player(1).get_num(玩家属性["技能输出"]) + 1)) * (0 + 1)) * (base.player(1).get_num(玩家属性["伤害加成"]) + 1)) * (base.player(1).get_num(玩家属性["最终伤害"]) + 1)) * base.player(1).get_num(玩家属性["物理收益"]));
		}
		计算护甲减免 = ((1 - ((受伤单位.get_ex(单位属性["护甲减免"], UnitPropertySubType["Base"]) * 3) / (100 + (3 * 受伤单位.get_ex(单位属性["护甲减免"], UnitPropertySubType["Base"]))))) * 计算护甲前);
		计算固定减伤1 = (计算护甲减免 - 受伤单位.get_ex(单位属性["固定减伤B1"], UnitPropertySubType["Base"]));
		计算最终伤害1 = (计算固定减伤1 * (base.player(1).get_num(玩家属性["最终技能增幅"]) + 1));
		计算固定减伤2 = (计算最终伤害1 - 受伤单位.get_ex(单位属性["固定减伤B2"], UnitPropertySubType["Base"]));
		计算最终伤害2 = (计算固定减伤2 * (base.player(1).get_num(玩家属性["最终伤害增幅"]) + 1));
		if ((("护盾？" == "字符串"))) {
			护盾计算 = (计算最终伤害2 * 受伤单位.get_ex(单位属性["护盾"], UnitPropertySubType["Base"]));
			return 护盾计算;
		} else {
		}
		return 计算最终伤害2;
	}
	export let 法术技能伤害计算:(受伤单位:Unit, 技能伤害:number)=>number = (受伤单位:Unit, 技能伤害:number):number => {
		let 护盾计算: number = 0;
		let 计算最终伤害2: number = 0;
		let 计算固定减伤2: number = 0;
		let 计算最终伤害1: number = 0;
		let 计算固定减伤1: number = 0;
		let 计算护甲减免: number = 0;
		let 计算护甲前: number = 0;
		if ((("暴击？" == "字符串"))) {
			计算护甲前 = ((((((技能伤害 * (base.player(1).get_num(玩家属性["法术伤害"]) + 1)) * (base.player(1).get_num(玩家属性["技能输出"]) + 1)) * (base.player(1).get_num(玩家属性["法术爆伤"]) + 1)) * (base.player(1).get_num(玩家属性["伤害加成"]) + 1)) * (base.player(1).get_num(玩家属性["最终伤害"]) + 1)) * base.player(1).get_num(玩家属性["法术收益"]));
		} else {
			计算护甲前 = ((((((技能伤害 * (base.player(1).get_num(玩家属性["法术伤害"]) + 1)) * (base.player(1).get_num(玩家属性["技能输出"]) + 1)) * (0 + 1)) * (base.player(1).get_num(玩家属性["伤害加成"]) + 1)) * (base.player(1).get_num(玩家属性["最终伤害"]) + 1)) * base.player(1).get_num(玩家属性["法术收益"]));
		}
		计算护甲减免 = ((1 - ((受伤单位.get_ex(单位属性["护甲减免"], UnitPropertySubType["Base"]) * 3) / (100 + (3 * 受伤单位.get_ex(单位属性["护甲减免"], UnitPropertySubType["Base"]))))) * 计算护甲前);
		计算固定减伤1 = (计算护甲减免 - 受伤单位.get_ex(单位属性["固定减伤B1"], UnitPropertySubType["Base"]));
		计算最终伤害1 = (计算固定减伤1 * (base.player(1).get_num(玩家属性["最终技能增幅"]) + 1));
		计算固定减伤2 = (计算最终伤害1 - 受伤单位.get_ex(单位属性["固定减伤B2"], UnitPropertySubType["Base"]));
		计算最终伤害2 = (计算固定减伤2 * (base.player(1).get_num(玩家属性["最终伤害增幅"]) + 1));
		if ((("护盾？" == "字符串"))) {
			护盾计算 = (计算最终伤害2 * 受伤单位.get_ex(单位属性["护盾"], UnitPropertySubType["Base"]));
			return 护盾计算;
		} else {
		}
		return 计算最终伤害2;
	}
	//以下为转发事件
	export class 减怪 extends TriggerEvent{
		constructor(public obj:base.Game, public player_slot_id:number) {
			super()
		}
		readonly event_name: string = "减怪"
		readonly autoForward: boolean = false
	}
	export class 加怪 extends TriggerEvent{
		constructor(public obj:base.Game, public player_slot_id:number) {
			super()
		}
		readonly event_name: string = "加怪"
		readonly autoForward: boolean = false
	}
	export class 挑战等级突破BOSS extends TriggerEvent{
		constructor(public obj:base.Game, public player_slot_id:number) {
			super()
		}
		readonly event_name: string = "挑战等级突破BOSS"
		readonly autoForward: boolean = false
	}
	export class 进入修炼室 extends TriggerEvent{
		constructor(public obj:base.Game, public player_slot_id:number) {
			super()
		}
		readonly event_name: string = "进入修炼室"
		readonly autoForward: boolean = false
	}
	//为触发器添加事件
	移动到大黑鸟.add_event_common({ obj: ((base.any_unit) as unknown as base.PUnitAny), event_name: "单位-死亡" })
	大黑鸟死亡.add_event_common({ obj: ((base.any_unit) as unknown as base.PUnitAny), event_name: "单位-死亡" })
	玩家单位设置初始化.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "游戏-开始" })
	刷怪.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "进入修炼室" })
	玩家受伤.add_event_common({ obj: base.get_scene_area("default", "rect", "Rect_2", _G.present), event_name: "区域-进入" })
	玩家死亡.add_event_common({ obj: base.get_scene_area("default", "circle", "Circles_0", _G.present), event_name: "区域-进入" })
	进入修炼室.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "进入修炼室" })
	加怪.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "加怪" })
	减怪.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "减怪" })
	加怪的通关判定.add_event_common({ obj: ((base.any_unit) as unknown as base.PUnitAny), event_name: "单位-死亡" })
	攻击力修改.add_event_common({ periodic: true, time: 2 })
	每秒攻击力修改.add_event_common({ obj: ((base.any_player) as unknown as base.PPlayerAny), event_name: "玩家-按键按下" })
	等级突破.add_event_common({ obj: ((base.any_unit) as unknown as base.PUnitAny), event_name: "单位-升级" })
	刷突破BOSS.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "挑战等级突破BOSS" })
	等级突破BOSS死亡.add_event_common({ obj: ((base.any_unit) as unknown as base.PUnitAny), event_name: "单位-死亡" })
	ll.add_event_common({ obj: ((base.any_player) as unknown as base.PPlayerAny), event_name: "玩家-按键按下" })
	trg挑战注册.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "游戏-开始" })
	挑战退出.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "玩家_完成rpg挑战自动退出" })
	玩家单位属性更新.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "游戏-帧" })
}
