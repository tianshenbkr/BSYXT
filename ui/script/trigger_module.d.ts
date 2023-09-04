declare module busiyixiantu_5n1b {
	export let 奖励文本: Array<string>;
	export let 小黑鸟死亡数量: number;
	export let 消息提示文本UI: _OBJ__gui_ctrl_label;
	export let 消息计时器: Timer;
	export let func_属性兑换面板显示:(bol:boolean)=>undefined
	export let 消息文本修改:(要显示的文字:string)=>undefined
	export class rpg_challenge{
		link:IdPreset<"rpg_challenge_id">;
		bind_ui_title:(绑定ui:_OBJ__gui_ctrl_label)=>void
		bind_ui_tip:(绑定ui:_OBJ__gui_ctrl_label)=>void
		bind_ui_button:(button:_OBJ__gui_ctrl_button)=>void
		constructor()
	}
	export class 关闭背包 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 减怪 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 加怪 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 合成装备 extends TriggerEvent{
		obj: base.Game
		index: number
		constructor(obj:base.Game, index:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 打开爬塔 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 挑战等级突破BOSS extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 本地玩家_rpg挑战开始 extends TriggerEvent{
		obj: base.Game
		link: IdPreset<"rpg_challenge_id">
		id: number
		constructor(obj:base.Game, link:IdPreset<"rpg_challenge_id">, id:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 本地玩家_创建rpg_challenge extends TriggerEvent{
		obj: base.Game
		rpg_challenge: busiyixiantu_5n1b.rpg_challenge
		constructor(obj:base.Game, rpg_challenge:busiyixiantu_5n1b.rpg_challenge)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 点击游戏胜利或者失败 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 返回主城 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 进入修炼室 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	//以下为转发事件
	export class 不能再减怪了 extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 主线任务关闭ui extends TriggerEvent{
		obj: unknown
		关卡数: number
		constructor(obj:unknown, 关卡数:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 修改提示怪物死亡数量UI文字 extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 减怪UI extends TriggerEvent{
		obj: unknown
		怪物层数: number
		constructor(obj:unknown, 怪物层数:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 加怪了 extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 加怪完成或者失败 extends TriggerEvent{
		obj: unknown
		怪物层数: number | undefined
		constructor(obj:unknown, 怪物层数:number | undefined)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 加怪挑战中 extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 升仙令客户端消息 extends TriggerEvent{
		obj: unknown
		等级: number
		constructor(obj:unknown, 等级:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 升仙令选择主属性 extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 大黑鸟死亡事件 extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 客户端关闭爬塔UI extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 打开修炼室UI extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 显示等级 extends TriggerEvent{
		obj: unknown
		等级: number
		constructor(obj:unknown, 等级:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 游戏失败消息 extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 游戏胜利消息 extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 玩家_rpg挑战开始 extends TriggerEvent{
		obj: unknown
		player: Player
		rpg_challenge: undefined
		id: number
		constructor(obj:unknown, player:Player, rpg_challenge:undefined, id:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 玩家_完成rpg挑战自动退出 extends TriggerEvent{
		obj: unknown
		player: Player
		constructor(obj:unknown, player:Player)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 等级突破显示 extends TriggerEvent{
		obj: unknown
		当前升级最高等级: number | undefined
		constructor(obj:unknown, 当前升级最高等级:number | undefined)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 进入修炼室消息事件 extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export class 进攻怪消息 extends TriggerEvent{
		obj: unknown
		波次: number
		时间: number
		constructor(obj:unknown, 波次:number, 时间:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
	export let UI修改:Trigger
	export let 不能减怪:Trigger
	export let 主城修炼室隐藏:Trigger
	export let 修炼室UI显示:Trigger
	export let 关背包:Trigger
	export let 关闭新手提示:Trigger
	export let 减怪UI修改:Trigger
	export let 加怪了:Trigger
	export let 升仙令修改消息:Trigger
	export let 大黑鸟死亡显示和修炼室显示修改:Trigger
	export let 开始挑战:Trigger
	export let 怪物死亡文字修改:Trigger
	export let 总计时:Trigger
	export let 打开修炼室UI:Trigger
	export let 挑战中:Trigger
	export let 挑战完毕:Trigger
	export let 挑战测试:Trigger
	export let 显示等级:Trigger
	export let 更新UI:Trigger
	export let 更新UI玩家:Trigger
	export let 更新经验条:Trigger
	export let 游戏初始化:Trigger
	export let 游戏失败消息:Trigger
	export let 游戏胜利消息:Trigger
	export let 爬塔:Trigger
	export let 爬塔UI:Trigger
	export let 特殊UI修改需求:Trigger
	export let 等级突破:Trigger
	export let 老家掉血提示:Trigger
	export let 进攻怪消息:Trigger
	export let 选择主属性:Trigger
}
