module busiyixiantu_5n1b {
	export let 小黑鸟死亡数量: number = 0;
	export let 怪物死亡文字修改 = base.trigger_new((当前触发器:Trigger, e:修改提示怪物死亡数量UI文字)=>{
		if (true){
			busiyixiantu_5n1b.小黑鸟死亡数量 = (busiyixiantu_5n1b.小黑鸟死亡数量 + 1);
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "新手文字版"), "新手指引信息").text = "新手任务1:击杀10只仙界黑鸟进度：".concat(base.force_as<string>(busiyixiantu_5n1b.小黑鸟死亡数量), "/10");
			if (((busiyixiantu_5n1b.小黑鸟死亡数量 == 10))) {
				base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "新手文字版"), "新手指引信息").text = "新手任务2:击杀1只仙界大黑鸟进度：0/1".concat();
			} else {
			}
		}
	}, [], false, undefined, true)
	export let 大黑鸟死亡显示和修炼室显示修改 = base.trigger_new((当前触发器:Trigger, e:大黑鸟死亡事件)=>{
		if (true){
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "新手文字版"), "新手指引信息").text = "新手任务2:击杀1只仙界大黑鸟进度：1/1";
			base.timer_wait(1, (计时器:Timer):void => {
				base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "新手文字版"), "新手指引信息").text = "新手任务3：点击传送修炼室";
				base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室按钮").show = true;
			});
		}
	}, [], false, undefined, true)
	export let 关闭新手提示 = base.trigger_new((当前触发器:Trigger, e:busiyixiantu_5n1b.进入修炼室)=>{
		if (true){
			base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "新手文字版").show = false;
		}
	}, [], false, undefined, true)
	export let 游戏初始化 = base.trigger_new((当前触发器:Trigger, e:base.游戏开始)=>{
		if (true){
			busiyixiantu_5n1b.消息计时器.restart();
		}
	}, [], false, undefined, true)
	export class 加怪 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "加怪"
		readonly autoForward: boolean = true
	}
	export class 减怪 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "减怪"
		readonly autoForward: boolean = true
	}
	export class 本地玩家_创建rpg_challenge extends TriggerEvent{
		constructor(public obj:base.Game, public rpg_challenge:busiyixiantu_5n1b.rpg_challenge) {
			super()
		}
		readonly event_name: string = "本地玩家_创建rpg_challenge"
		readonly autoForward: boolean = false
	}
	export class 进入修炼室 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "进入修炼室"
		readonly autoForward: boolean = true
	}
	export class 本地玩家_rpg挑战开始 extends TriggerEvent{
		constructor(public obj:base.Game, public link:IdPreset<"rpg_challenge_id">, public id:number) {
			super()
		}
		readonly event_name: string = "本地玩家_rpg挑战开始"
		readonly autoForward: boolean = false
	}
	export class 返回主城 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "返回主城"
		readonly autoForward: boolean = true
	}
	export let 更新UI玩家 = base.trigger_new((当前触发器:Trigger, e:base.单位属性变化)=>{
		let 人物属性主面板: _OBJ__gui_ctrl_button = base.gui_get_part_as<any>(base.gui_get_main_page(), "人物属性主面板");
		if (((base.player(1).get_hero() != undefined))){
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "每秒攻击").text = base.force_as<string>(base.player(1).get(玩家属性["每秒攻击"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "生命增幅").text = base.force_as<string>(base.player(1).get(玩家属性["生命增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "生命恢复").text = base.force_as<string>(base.player(1).get(玩家属性["生命恢复"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "攻击回血").text = base.force_as<string>(base.player(1).get(玩家属性["攻击回血"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "伤害抵挡").text = base.force_as<string>(base.player(1).get(玩家属性["伤害抵挡"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "伤害躲避").text = base.force_as<string>(base.player(1).get(玩家属性["伤害躲避"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "物理伤害").text = base.force_as<string>(base.player(1).get(玩家属性["物理伤害"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "法术伤害").text = base.force_as<string>(base.player(1).get(玩家属性["法术伤害"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "额外经验").text = base.force_as<string>(base.player(1).get(玩家属性["额外经验"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "装备爆率").text = base.force_as<string>(base.player(1).get(玩家属性["装备爆率"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "幸运值").text = base.force_as<string>(base.player(1).get(玩家属性["幸运值"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "刷怪效率").text = base.force_as<string>(base.player(1).get(玩家属性["刷怪效率"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "每秒根骨").text = base.force_as<string>(base.player(1).get(玩家属性["每秒根骨"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "每秒身法").text = base.force_as<string>(base.player(1).get(玩家属性["每秒身法"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "每秒神念").text = base.force_as<string>(base.player(1).get(玩家属性["每秒神念"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "每秒生命").text = base.force_as<string>(base.player(1).get(玩家属性["每秒生命"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "每秒攻击").text = base.force_as<string>(base.player(1).get(玩家属性["每秒攻击"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "每秒防御").text = base.force_as<string>(base.player(1).get(玩家属性["每秒防御"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "杀敌根骨").text = base.force_as<string>(base.player(1).get(玩家属性["杀敌根骨"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "杀敌身法").text = base.force_as<string>(base.player(1).get(玩家属性["杀敌身法"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "杀敌神念").text = base.force_as<string>(base.player(1).get(玩家属性["杀敌神念"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "杀敌生命").text = base.force_as<string>(base.player(1).get(玩家属性["杀敌生命"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "杀敌攻击").text = base.force_as<string>(base.player(1).get(玩家属性["杀敌攻击"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "生命增幅").text = base.force_as<string>(base.player(1).get(玩家属性["生命增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "伤害增幅").text = base.force_as<string>(base.player(1).get(玩家属性["伤害增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "根骨增幅").text = base.force_as<string>(base.player(1).get(玩家属性["根骨增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "神念增幅").text = base.force_as<string>(base.player(1).get(玩家属性["神念增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "身法增幅").text = base.force_as<string>(base.player(1).get(玩家属性["身法增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "最终生命增幅").text = base.force_as<string>(base.player(1).get(玩家属性["最终生命增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "最终伤害增幅").text = base.force_as<string>(base.player(1).get(玩家属性["最终伤害增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "最终物穿增幅").text = base.force_as<string>(base.player(1).get(玩家属性["最终物穿增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "最终法穿增幅").text = base.force_as<string>(base.player(1).get(玩家属性["最终法穿增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "最终物爆增幅").text = base.force_as<string>(base.player(1).get(玩家属性["最终物爆增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "最终法爆增幅").text = base.force_as<string>(base.player(1).get(玩家属性["最终法爆增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "最终普攻增幅").text = base.force_as<string>(base.player(1).get(玩家属性["最终普攻增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(人物属性主面板, "最终技能增幅").text = base.force_as<string>(base.player(1).get(玩家属性["最终技能增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性大面板"), "属性1"), "攻击力文本").text = "攻击力：".concat(base.force_as<string>(base.player(1).get_hero().get(单位属性["攻击"])));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性大面板"), "属性2"), "防御力文本").text = "防御力：".concat(base.force_as<string>(base.player(1).get_hero().get(单位属性["护甲减免"])));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性大面板"), "属性3"), "根骨百分比").text = base.force_as<string>(base.player(1).get(玩家属性["根骨增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性大面板"), "属性3"), "身法百分比").text = base.force_as<string>(base.player(1).get(玩家属性["身法增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性大面板"), "属性3"), "神念百分比").text = base.force_as<string>(base.player(1).get(玩家属性["神念增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性大面板"), "属性3"), "根骨实际值").text = base.force_as<string>(base.player(1).get(玩家属性["根骨"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性大面板"), "属性3"), "身法实际值").text = base.force_as<string>(base.player(1).get(玩家属性["身法"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性大面板"), "属性3"), "神念实际值").text = base.force_as<string>(base.player(1).get(玩家属性["神念"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性大面板"), "人物境界文本").text = base.force_as<string>(base.player(1).get_hero().get(单位属性["等级"])).concat("级");
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性"), "攻击频率").text = base.force_as<string>(base.player(1).get_hero().get(单位属性["攻击速度"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性"), "暴击率").text = base.force_as<string>(base.player(1).get_hero().get(单位属性["暴击"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性"), "爆伤").text = base.force_as<string>(base.player(1).get_hero().get(单位属性["暴击伤害"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性"), "穿甲").text = base.force_as<string>(base.player(1).get(玩家属性["最终技能增幅"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性"), "物理收益").text = base.force_as<string>(base.player(1).get(玩家属性["物理收益"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性"), "法术收益").text = base.force_as<string>(base.player(1).get(玩家属性["法术收益"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性"), "额外金币").text = base.force_as<string>(base.player(1).get(玩家属性["额外金币"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性"), "额外杀敌").text = base.force_as<string>(base.player(1).get(玩家属性["额外杀敌"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物头像"), "人物血量").text = base.force_as<string>(base.math.floor(base.player(1).get_hero().get(单位属性["生命"]))).concat("/", base.force_as<string>(base.math.floor(base.player(1).get_hero().get(单位属性["生命上限"]))));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "顶端面板"), "金币"), "金币数").text = base.force_as<string>(base.player(1).get(玩家属性["金钱"]));
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "顶端面板"), "杀敌"), "杀敌数").text = base.force_as<string>(base.player(1).get(玩家属性["击杀"]));
		}
	}, [], false, undefined, true)
	export let 更新UI = base.trigger_new((当前触发器:Trigger, e:base.单位属性变化)=>{
		if (((base.player_local().get_hero() != undefined))){
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "人物属性大面板"), "属性1"), "攻击力文本").text = "攻击力：".concat(base.force_as<string>(base.player(1).get_hero().get(单位属性["攻击"])));
		}
	}, [], true, undefined, true)
	export let 更新经验条 = base.trigger_new((当前触发器:Trigger, e:base.单位属性变化)=>{
		let 经验条: _OBJ__gui_ctrl_panel = base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "人物属性大面板"), "经验条"), "经验长度");
		if (((e.unit == base.player(1).get_hero()))){
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "人物属性大面板"), "经验条"), "经验条文本").text = "经验：".concat(base.force_as<string>(base.player_local().get_hero().get(单位属性["剩余经验"])), "/", base.force_as<string>(base.player_local().get_hero().get(单位属性["升级所需经验"])));
			经验条.layout.width = (330 * (base.player_local().get_hero().get(单位属性["剩余经验"]) / base.player_local().get_hero().get(单位属性["升级所需经验"])));
		}
	}, [], false, undefined, true)
	export class 加怪 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "加怪"
		readonly autoForward: boolean = true
	}
	export class 减怪 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "减怪"
		readonly autoForward: boolean = true
	}
	export let 不能减怪 = base.trigger_new((当前触发器:Trigger, e:不能再减怪了)=>{
		if (true){
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室"), "减怪").opacity = 0.5;
		}
	}, [], false, undefined, true)
	export let 加怪了 = base.trigger_new((当前触发器:Trigger, e:加怪了)=>{
		if (true){
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室"), "减怪").opacity = 1;
		}
	}, [], false, undefined, true)
	export let 挑战中 = base.trigger_new((当前触发器:Trigger, e:加怪挑战中)=>{
		if (true){
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "修炼室"), "加怪").show = false;
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "修炼室"), "减怪").show = false;
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "修炼室"), "挑战中").show = true;
		}
	}, [], false, undefined, true)
	export let 挑战完毕 = base.trigger_new((当前触发器:Trigger, e:加怪完成或者失败)=>{
		if (true){
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "修炼室"), "加怪").show = true;
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "修炼室"), "减怪").show = true;
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "修炼室"), "挑战中").show = false;
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "修炼室"), "当前小兵等级").text = base.force_as<string>(e.怪物层数);
			busiyixiantu_5n1b.消息文本修改("恭喜解锁".concat(base.force_as<string>(e.怪物层数), "级小兵"));
		}
	}, [], false, undefined, true)
	export let 减怪UI修改 = base.trigger_new((当前触发器:Trigger, e:减怪UI)=>{
		if (true){
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_gui_ctrl>(base.gui_get_main_page(), "修炼室"), "当前小兵等级").text = base.force_as<string>(e.怪物层数);
		}
	}, [], false, undefined, true)
	export let 主城修炼室隐藏 = base.trigger_new((当前触发器:Trigger, e:busiyixiantu_5n1b.返回主城)=>{
		if (true){
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "返回主城").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "挑战测试").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "属性兑换").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "背包").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "爬塔").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "升仙令1").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "消息提示").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "等级突破按钮").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室按钮").show = true;
		}
	}, [], false, undefined, true)
	export let 修炼室UI显示 = base.trigger_new((当前触发器:Trigger, e:进入修炼室消息事件 | busiyixiantu_5n1b.进入修炼室)=>{
		if (true){
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "返回主城").show = true;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "挑战测试").show = true;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "属性兑换").show = true;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "背包").show = true;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "爬塔").show = true;
			base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "升仙令1").show = true;
			base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "消息提示").show = true;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室").show = true;
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室"), "加怪").show = true;
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室"), "减怪").show = true;
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室"), "挑战中").show = false;
			log.warn("不能生成语句: 未找到元素：[TRG_ENV: client, packageName: busiyixiantu_5n1b, id: Variable:e:1505952221]")
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室按钮").show = false;
		}
	}, [], false, undefined, true)
	export let 打开修炼室UI = base.trigger_new((当前触发器:Trigger, e:打开修炼室UI)=>{
		if (true){
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室按钮").show = true;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "返回主城").show = false;
		}
	}, [], false, undefined, true)
	export let 特殊UI修改需求 = base.trigger_new((当前触发器:Trigger, e:unknown)=>{
		if (true){
		}
	}, [], true, undefined, true)
	export class 挑战等级突破BOSS extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "挑战等级突破BOSS"
		readonly autoForward: boolean = true
	}
	export let 等级突破 = base.trigger_new((当前触发器:Trigger, e:等级突破显示)=>{
		if (true){
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "等级突破按钮").show = true;
			busiyixiantu_5n1b.消息文本修改("已达到当前等级上限，请点击等级突破，进行挑战");
		}
	}, [], false, undefined, true)
	export let 显示等级 = base.trigger_new((当前触发器:Trigger, e:显示等级)=>{
		if (true){
			busiyixiantu_5n1b.消息文本修改("突破成功，等级上限提升至".concat(base.force_as<string>(e.等级)));
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "等级突破按钮").show = false;
		}
	}, [], false, undefined, true)
	export let 消息文本修改:(要显示的文字:string)=>undefined = (要显示的文字:string):undefined => {
		busiyixiantu_5n1b.消息提示文本UI.text = 要显示的文字;
		busiyixiantu_5n1b.消息计时器.restart();
	}
	export let func_属性兑换面板显示:(bol:boolean)=>undefined = (bol:boolean):undefined => {
		base.map_ui.sxdh_show(bol);
	}
	export class rpg_challenge{
		link:IdPreset<"rpg_challenge_id">;
		declare bind_ui_title:(绑定ui:_OBJ__gui_ctrl_label)=>void
		declare bind_ui_tip:(绑定ui:_OBJ__gui_ctrl_label)=>void
		declare bind_ui_button:(button:_OBJ__gui_ctrl_button)=>void
		constructor() {
		}
	}
	export let 开始挑战 = base.trigger_new((当前触发器:Trigger, e:busiyixiantu_5n1b.本地玩家_rpg挑战开始)=>{
		if (true){
		}
	}, [], false, undefined, true)
	export let 挑战测试 = base.trigger_new((当前触发器:Trigger, e:busiyixiantu_5n1b.本地玩家_创建rpg_challenge)=>{
		let 新变量: unknown;
		let bt: _OBJ__gui_ctrl_button = base.gui_get_part_as<any>(base.gui_get_main_page(), "挑战测试");
		if (true){
			e.rpg_challenge.bind_ui_button(bt);
		}
	}, [], true, undefined, true)
	export let UI修改 = base.trigger_new((当前触发器:Trigger, e:主线任务关闭ui)=>{
		let 字符01: string = "字符串";
		let 字符02: string = "";
		let 字符: string = "字符串";
		if (true){
			if (((e.关卡数 > 5))) {
				字符01 = base.force_as<string>((e.关卡数 / 5));
				字符02 = base.force_as<string>((e.关卡数 / 5));
			} else {
				字符01 = "1";
				字符02 = base.force_as<string>(e.关卡数);
			}
			字符 = "当前关卡".concat(字符01, "-", 字符02, "关");
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "修炼室按钮").show = true;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "爬塔").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "背包").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "属性兑换").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "挑战测试").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "升仙令1").show = false;
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "等级突破按钮").show = false;
			busiyixiantu_5n1b.消息文本修改(字符);
		}
	}, [], false, undefined, true)
	export let 奖励文本: Array<string> = new Array<string>("奖励：1", "奖励：2", "奖励：3", "奖励：4", "奖励：5", "奖励：", "奖励：", "奖励：", "奖励：", "奖励：", "奖励：", "奖励：", "奖励：", "奖励：", "奖励：", "奖励：", "奖励：", "奖励：");
	export let 选择主属性 = base.trigger_new((当前触发器:Trigger, e:升仙令选择主属性)=>{
		if (true){
		}
	}, [], false, undefined, true)
	export let 升仙令修改消息 = base.trigger_new((当前触发器:Trigger, e:升仙令客户端消息)=>{
		if (((e.等级 != undefined))){
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "升仙令1"), "等级").text = base.force_as<string>(e.等级);
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板>(base.gui_get_main_page(), "装备栏面板"), "升仙令"), "等级").text = base.force_as<string>(e.等级);
			busiyixiantu_5n1b.消息文本修改("挑战成功".concat("升仙令LV", base.force_as<string>((e.等级 - 1)), "-至", "升仙令LV", base.force_as<string>(e.等级)));
		}
	}, [], false, undefined, true)
	export class 关闭背包 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "关闭背包"
		readonly autoForward: boolean = false
	}
	export let 关背包 = base.trigger_new((当前触发器:Trigger, e:busiyixiantu_5n1b.关闭背包)=>{
		if (true){
			if (((base.gui_get_part_as<_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板>(base.gui_get_main_page(), "背包面板").show == false))) {
				base.gui_get_part_as<_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板>(base.gui_get_main_page(), "背包面板").show = true;
				base.gui_get_part_as<_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板>(base.gui_get_main_page(), "装备栏面板").show = true;
			} else {
				base.gui_get_part_as<_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板>(base.gui_get_main_page(), "背包面板").show = false;
				base.gui_get_part_as<_OBJ_smallcard_inventory_gui_ctrl_自定义背包面板>(base.gui_get_main_page(), "装备栏面板").show = false;
			}
		}
	}, [], false, undefined, true)
	export class 合成装备 extends TriggerEvent{
		constructor(public obj:base.Game, public index:number) {
			super()
		}
		readonly event_name: string = "合成装备"
		readonly autoForward: boolean = true
	}
	export let 进攻怪消息 = base.trigger_new((当前触发器:Trigger, e:进攻怪消息)=>{
		let 波次: string = "第".concat(base.force_as<string>(e.波次), "波");
		let 时间: string = "字符串";
		let 秒: number = e.时间;
		let 分钟: number = 0;
		let 每秒: number = 0;
		if (true){
			时间 = "进攻倒计时".concat(base.force_as<string>(base.math.floor(分钟)), "分", base.force_as<string>((秒 - (60 * base.force_as<number>(分钟)))), "秒");
			每秒 = e.时间;
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "顶端面板"), "防守面板"), "时间").text = 时间;
			base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "顶端面板"), "防守面板"), "波次").text = 波次;
			base.timer_timer(1, 秒, (计时器:Timer):void => {
				每秒 = (每秒 - 1);
				时间 = "进攻倒计时".concat(base.force_as<string>(每秒), "秒");
				base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "顶端面板"), "防守面板"), "时间").text = 时间;
			});
		}
	}, [], false, undefined, true)
	export let 游戏胜利消息 = base.trigger_new((当前触发器:Trigger, e:游戏胜利消息)=>{
		if (true){
			busiyixiantu_5n1b.消息文本修改("恭喜你，游戏胜利");
			log.info(base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "游戏胜利").show);
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "游戏胜利").show = true;
			log.info(base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "游戏胜利").show);
		}
	}, [], false, undefined, true)
	export let 游戏失败消息 = base.trigger_new((当前触发器:Trigger, e:游戏失败消息)=>{
		if (true){
			busiyixiantu_5n1b.消息文本修改("游戏失败，不要灰心");
			base.gui_get_part_as<_OBJ__gui_ctrl_button>(base.gui_get_main_page(), "游戏失败").show = true;
		}
	}, [], false, undefined, true)
	export let 总计时 = base.trigger_new((当前触发器:Trigger, e:base.游戏开始)=>{
		let 总秒钟: number = 0;
		let 总分钟: number = 0;
		let 文字版: _OBJ__gui_ctrl_label = base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "顶端面板"), "游戏时长");
		if (true){
			base.timer_loop(1, (计时器:Timer):void => {
				总秒钟 = (总秒钟 + 1);
				if (((总秒钟 == 60))) {
					总分钟 = (总分钟 + 1);
					总秒钟 = 0;
				} else {
				}
				文字版.text = "游戏已进行：".concat(base.force_as<string>(总分钟), "分", base.force_as<string>(总秒钟), "秒");
			});
		}
	}, [], false, undefined, true)
	export class 点击游戏胜利或者失败 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "点击游戏胜利或者失败"
		readonly autoForward: boolean = true
	}
	export let 老家掉血提示 = base.trigger_new((当前触发器:Trigger, e:unknown)=>{
		if (true){
		}
	}, [], false, undefined, true)
	export let 爬塔 = base.trigger_new((当前触发器:Trigger, e:busiyixiantu_5n1b.本地玩家_创建rpg_challenge)=>{
		if (true){
			if (((e.rpg_challenge.link == (("$$busiyixiantu_5n1b.rpg_challenge.盲盒怪.root") as unknown as IdPreset<"rpg_challenge_id">)))) {
				e.rpg_challenge.bind_ui_button(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "爬塔面板"), "盲盒怪"), "下一层"));
			} else {
			}
			if (((e.rpg_challenge.link == (("$$busiyixiantu_5n1b.rpg_challenge.秘宝怪.root") as unknown as IdPreset<"rpg_challenge_id">)))) {
				e.rpg_challenge.bind_ui_button(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "爬塔面板"), "秘宝怪"), "下一层"));
			} else {
			}
			if (((e.rpg_challenge.link == (("$$busiyixiantu_5n1b.rpg_challenge.其他怪.root") as unknown as IdPreset<"rpg_challenge_id">)))) {
				e.rpg_challenge.bind_ui_button(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_button>(base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_panel>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "爬塔面板"), "其他怪"), "下一层"));
			} else {
			}
		}
	}, [], false, undefined, true)
	export class 打开爬塔 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "打开爬塔"
		readonly autoForward: boolean = false
	}
	export let 爬塔UI = base.trigger_new((当前触发器:Trigger, e:busiyixiantu_5n1b.打开爬塔 | 客户端关闭爬塔UI)=>{
		if (true){
			if (((base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "爬塔面板").show == false))) {
				base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "爬塔面板").show = true;
			} else {
				base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "爬塔面板").show = false;
			}
		}
	}, [], false, undefined, true)
	export let 消息提示文本UI: _OBJ__gui_ctrl_label = base.gui_get_child_ui_by_name_as<_OBJ__gui_ctrl_label>(base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "消息提示"), "消息文本");
	export let 消息计时器: Timer = base.timer_loop(5, (计时器:Timer):void => {
		busiyixiantu_5n1b.消息提示文本UI.text = "            ";
	});
	//以下为转发事件
	export class 不能再减怪了 extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "不能再减怪了"
		readonly autoForward: boolean = false
	}
	export class 主线任务关闭ui extends TriggerEvent{
		constructor(public obj:unknown, public 关卡数:number) {
			super()
		}
		readonly event_name: string = "主线任务关闭ui"
		readonly autoForward: boolean = false
	}
	export class 修改提示怪物死亡数量UI文字 extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "修改提示怪物死亡数量UI文字"
		readonly autoForward: boolean = false
	}
	export class 减怪UI extends TriggerEvent{
		constructor(public obj:unknown, public 怪物层数:number) {
			super()
		}
		readonly event_name: string = "减怪UI"
		readonly autoForward: boolean = false
	}
	export class 加怪了 extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "加怪了"
		readonly autoForward: boolean = false
	}
	export class 加怪完成或者失败 extends TriggerEvent{
		constructor(public obj:unknown, public 怪物层数:number | undefined) {
			super()
		}
		readonly event_name: string = "加怪完成或者失败"
		readonly autoForward: boolean = false
	}
	export class 加怪挑战中 extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "加怪挑战中"
		readonly autoForward: boolean = false
	}
	export class 升仙令客户端消息 extends TriggerEvent{
		constructor(public obj:unknown, public 等级:number) {
			super()
		}
		readonly event_name: string = "升仙令客户端消息"
		readonly autoForward: boolean = false
	}
	export class 升仙令选择主属性 extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "升仙令选择主属性"
		readonly autoForward: boolean = false
	}
	export class 大黑鸟死亡事件 extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "大黑鸟死亡事件"
		readonly autoForward: boolean = false
	}
	export class 客户端关闭爬塔UI extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "客户端关闭爬塔UI"
		readonly autoForward: boolean = false
	}
	export class 打开修炼室UI extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "打开修炼室UI"
		readonly autoForward: boolean = false
	}
	export class 显示等级 extends TriggerEvent{
		constructor(public obj:unknown, public 等级:number) {
			super()
		}
		readonly event_name: string = "显示等级"
		readonly autoForward: boolean = false
	}
	export class 游戏失败消息 extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "游戏失败消息"
		readonly autoForward: boolean = false
	}
	export class 游戏胜利消息 extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "游戏胜利消息"
		readonly autoForward: boolean = false
	}
	export class 玩家_rpg挑战开始 extends TriggerEvent{
		constructor(public obj:unknown, public player:Player, public rpg_challenge:undefined, public id:number) {
			super()
		}
		readonly event_name: string = "玩家_rpg挑战开始"
		readonly autoForward: boolean = false
	}
	export class 玩家_完成rpg挑战自动退出 extends TriggerEvent{
		constructor(public obj:unknown, public player:Player) {
			super()
		}
		readonly event_name: string = "玩家_完成rpg挑战自动退出"
		readonly autoForward: boolean = false
	}
	export class 等级突破显示 extends TriggerEvent{
		constructor(public obj:unknown, public 当前升级最高等级:number | undefined) {
			super()
		}
		readonly event_name: string = "等级突破显示"
		readonly autoForward: boolean = false
	}
	export class 进入修炼室消息事件 extends TriggerEvent{
		constructor(public obj:unknown) {
			super()
		}
		readonly event_name: string = "进入修炼室消息事件"
		readonly autoForward: boolean = false
	}
	export class 进攻怪消息 extends TriggerEvent{
		constructor(public obj:unknown, public 波次:number, public 时间:number) {
			super()
		}
		readonly event_name: string = "进攻怪消息"
		readonly autoForward: boolean = false
	}
	//为触发器添加事件
	怪物死亡文字修改.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "修改提示怪物死亡数量UI文字" })
	大黑鸟死亡显示和修炼室显示修改.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "大黑鸟死亡事件" })
	关闭新手提示.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "进入修炼室" })
	游戏初始化.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "游戏-开始" })
	更新UI玩家.add_event_common({ obj: ((base.any_unit) as unknown as base.PUnitAny), event_name: "单位-属性变化" })
	更新UI.add_event_common({ obj: ((base.any_unit) as unknown as base.PUnitAny), event_name: "单位-属性变化" })
	更新经验条.add_event_common({ obj: ((base.any_unit) as unknown as base.PUnitAny), event_name: "单位-属性变化" })
	不能减怪.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "不能再减怪了" })
	加怪了.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "加怪了" })
	挑战中.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "加怪挑战中" })
	挑战完毕.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "加怪完成或者失败" })
	减怪UI修改.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "减怪UI" })
	主城修炼室隐藏.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "返回主城" })
	修炼室UI显示.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "进入修炼室消息事件" })
	修炼室UI显示.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "进入修炼室" })
	打开修炼室UI.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "打开修炼室UI" })
	等级突破.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "等级突破显示" })
	显示等级.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "显示等级" })
	开始挑战.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "本地玩家_rpg挑战开始" })
	挑战测试.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "本地玩家_创建rpg_challenge" })
	UI修改.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "主线任务关闭ui" })
	选择主属性.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "升仙令选择主属性" })
	升仙令修改消息.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "升仙令客户端消息" })
	关背包.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "关闭背包" })
	进攻怪消息.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "进攻怪消息" })
	游戏胜利消息.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "游戏胜利消息" })
	游戏失败消息.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "游戏失败消息" })
	总计时.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "游戏-开始" })
	爬塔.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "本地玩家_创建rpg_challenge" })
	爬塔UI.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "打开爬塔" })
	爬塔UI.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "客户端关闭爬塔UI" })
}
