declare module busiyixiantu_5n1b {
	export let BOSS怪物列表: _OBJ__wave_Wave;
	export let 刷怪判定: boolean;
	export let 刷怪总数据: _OBJ__wave_Wave;
	export let 刷怪数量: number;
	export let 加怪升级记录: number;
	export let 加怪死亡计数: number;
	export let 加怪的怪物类型: IdPreset<"unit_id">;
	export let 加怪记录: number;
	export let 升级怪总数据: _OBJ__wave_Wave;
	export let 存在刷怪计时器: boolean;
	export let 小黑鸟的数量: number;
	export let 当前关卡刷怪数据: _OBJ__spawner_Spawner;
	export let 是否在加怪升级中: boolean;
	export let 是否在挑战等级突破BOSS: boolean;
	export let 玩家当前等级阶层: number;
	export let 玩家的主控单位: Unit;
	export let 等级数组: Array<number>;
	export let func_创建rpg_挑战:(player:Player, link:IdPreset<"rpg_challenge_id">)=>busiyixiantu_5n1b.rpg_challenge
	export let func_测试面板注册按钮:(text:string, func:(this: void, arg1:Player)=>void, 列:number | undefined)=>void
	export let 普攻伤害计算:(受伤单位:Unit)=>number
	export let 法术技能伤害计算:(受伤单位:Unit, 技能伤害:number)=>number
	export let 清除怪物:()=>undefined
	export let 物理技能伤害计算:(受伤单位:Unit, 技能伤害:number)=>number
	export let 玩家单位属性计算:(需要返回的数据:string)=>number
	export class rpg_challenge{
		player:Player;
		constructor()
	}
	export class 玩家数据{
		每秒攻击:number;
		每秒防御:number;
		constructor()
	}
	export class 不能再减怪了 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 修改提示怪物死亡数量UI文字 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 减怪UI extends TriggerEvent{
		obj: base.Game
		怪物层数: number
		constructor(obj:base.Game, 怪物层数:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 加怪了 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 加怪完成或者失败 extends TriggerEvent{
		obj: base.Game
		怪物层数: number | undefined
		constructor(obj:base.Game, 怪物层数:number | undefined)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 加怪挑战中 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 大黑鸟死亡事件 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 玩家_完成rpg挑战自动退出 extends TriggerEvent{
		obj: base.Game
		player: Player
		constructor(obj:base.Game, player:Player)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 等级突破显示 extends TriggerEvent{
		obj: base.Game
		当前升级最高等级: number | undefined
		constructor(obj:base.Game, 当前升级最高等级:number | undefined)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 造成伤害前 extends TriggerEvent{
		obj: base.Game
		伤害大小: number
		伤害来源: Unit
		constructor(obj:base.Game, 伤害大小:number, 伤害来源:Unit)
		readonly event_name: string
		readonly autoForward: boolean
	}
	//以下为转发事件
	export class 减怪 extends TriggerEvent{
		obj: base.Game
		player_slot_id: number
		constructor(obj:base.Game, player_slot_id:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 加怪 extends TriggerEvent{
		obj: base.Game
		player_slot_id: number
		constructor(obj:base.Game, player_slot_id:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 挑战等级突破BOSS extends TriggerEvent{
		obj: base.Game
		player_slot_id: number
		constructor(obj:base.Game, player_slot_id:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 进入修炼室 extends TriggerEvent{
		obj: base.Game
		player_slot_id: number
		constructor(obj:base.Game, player_slot_id:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export let ll:Trigger
	export let trg挑战注册:Trigger
	export let 减怪:Trigger
	export let 刷怪:Trigger
	export let 刷突破BOSS:Trigger
	export let 加怪:Trigger
	export let 加怪的通关判定:Trigger
	export let 大黑鸟死亡:Trigger
	export let 挑战退出:Trigger
	export let 攻击力修改:Trigger
	export let 每秒攻击力修改:Trigger
	export let 玩家单位属性更新:Trigger
	export let 玩家单位设置初始化:Trigger
	export let 玩家受伤:Trigger
	export let 玩家死亡:Trigger
	export let 移动到大黑鸟:Trigger
	export let 等级突破:Trigger
	export let 等级突破BOSS死亡:Trigger
	export let 进入修炼室:Trigger
}
