declare module busiyixiantu_5n1b {
	export let 小黑鸟死亡数量: number;
	export let 消息提示文本UI: _OBJ__gui_ctrl_label;
	export let func_属性兑换面板显示:(bol:boolean)=>undefined
	export let 消息文本修改:(要显示的文字:string)=>undefined
	export class rpg_challenge{
		link:IdPreset<"rpg_challenge_id">;
		bind_ui_title:(绑定ui:_OBJ__gui_ctrl_label)=>void
		bind_ui_tip:(绑定ui:_OBJ__gui_ctrl_label)=>void
		bind_ui_button:(button:_OBJ__gui_ctrl_button)=>void
		constructor()
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
	export class 大黑鸟死亡事件 extends TriggerEvent{
		obj: unknown
		constructor(obj:unknown)
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
	export let jj:Trigger
	export let 不能减怪:Trigger
	export let 关闭新手提示:Trigger
	export let 减怪UI修改:Trigger
	export let 加怪了:Trigger
	export let 大黑鸟死亡显示和修炼室显示修改:Trigger
	export let 开始挑战:Trigger
	export let 怪物死亡文字修改:Trigger
	export let 挑战中:Trigger
	export let 挑战完毕:Trigger
	export let 挑战测试:Trigger
	export let 更新UI:Trigger
	export let 更新UI玩家:Trigger
	export let 更新经验条:Trigger
	export let 等级突破:Trigger
}
