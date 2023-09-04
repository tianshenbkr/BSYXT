declare const enum Scene {
	["default"] = "default",
}
declare const enum 技能属性 {
}
declare const enum 游戏选项 {
}
declare const enum 伤害类型 {
	["普通攻击"] = "普通攻击",
}
declare const enum 游戏属性 {
	["最终生命"] = "最终生命",
}
declare const enum 单位属性子类型 {
}
declare const enum 单位标签 {
	["自动复活"] = "自动复活",
}
declare const enum 玩家属性 {
	["最终普攻增幅"] = "最终普攻增幅",
	["物理爆伤"] = "物理爆伤",
	["额外金币"] = "额外金币",
	["伤害增幅"] = "伤害增幅",
	["根骨"] = "根骨",
	["攻击力增幅"] = "攻击力增幅",
	["攻击回血"] = "攻击回血",
	["根骨增幅"] = "根骨增幅",
	["刷怪效率"] = "刷怪效率",
	["最终魔法增幅"] = "最终魔法增幅",
	["伤害加成"] = "伤害加成",
	["法术暴击率"] = "法术暴击率",
	["额外杀敌"] = "额外杀敌",
	["伤害抵挡"] = "伤害抵挡",
	["每秒神念"] = "每秒神念",
	["最终法爆增幅"] = "最终法爆增幅",
	["杀敌神念"] = "杀敌神念",
	["法术爆伤"] = "法术爆伤",
	["法术伤害"] = "法术伤害",
	["杀敌生命"] = "杀敌生命",
	["法术收益"] = "法术收益",
	["杀敌根骨"] = "杀敌根骨",
	["幸运值"] = "幸运值",
	["技能急速"] = "技能急速",
	["最终法穿增幅"] = "最终法穿增幅",
	["攻击速度"] = "攻击速度",
	["主属性"] = "主属性",
	["最终物爆增幅"] = "最终物爆增幅",
	["装备爆率"] = "装备爆率",
	["生命增幅"] = "生命增幅",
	["普攻伤害"] = "普攻伤害",
	["每秒生命"] = "每秒生命",
	["最终物穿增幅"] = "最终物穿增幅",
	["最终神念"] = "最终神念",
	["最终生命增幅"] = "最终生命增幅",
	["伤害躲避"] = "伤害躲避",
	["最终身法"] = "最终身法",
	["最终伤害增幅"] = "最终伤害增幅",
	["额外练功怪数量"] = "额外练功怪数量",
	["每秒根骨"] = "每秒根骨",
	["攻击急速"] = "攻击急速",
	["物理伤害"] = "物理伤害",
	["每秒身法"] = "每秒身法",
	["最终根骨"] = "最终根骨",
	["每秒防御"] = "每秒防御",
	["每秒攻击"] = "每秒攻击",
	["魔法增幅"] = "魔法增幅",
	["生命恢复"] = "生命恢复",
	["杀敌身法"] = "杀敌身法",
	["身法"] = "身法",
	["最终伤害"] = "最终伤害",
	["身法增幅"] = "身法增幅",
	["神念"] = "神念",
	["技能输出"] = "技能输出",
	["杀敌攻击"] = "杀敌攻击",
	["物理收益"] = "物理收益",
	["额外经验"] = "额外经验",
	["最终技能增幅"] = "最终技能增幅",
	["神念增幅"] = "神念增幅",
}
declare const enum 单位属性 {
	["复活时间"] = "复活时间",
	["防御力修正"] = "防御力修正",
	["基础根骨"] = "基础根骨",
	["攻击系数"] = "攻击系数",
	["基础生命值"] = "基础生命值",
	["战斗力增幅"] = "战斗力增幅",
	["攻击回血"] = "攻击回血",
	["额外根骨"] = "额外根骨",
	["额外攻击力"] = "额外攻击力",
	["基础魔法值"] = "基础魔法值",
	["固定减伤A2"] = "固定减伤A2",
	["固定减伤B2"] = "固定减伤B2",
	["生命值修正"] = "生命值修正",
	["基础防御力"] = "基础防御力",
	["额外魔法值"] = "额外魔法值",
	["固定减伤B1"] = "固定减伤B1",
	["基础身法"] = "基础身法",
	["攻击前摇"] = "攻击前摇",
	["普攻伤害"] = "普攻伤害",
	["基础攻击力"] = "基础攻击力",
	["金币"] = "金币",
	["固定减伤A1"] = "固定减伤A1",
	["护甲减免"] = "护甲减免",
	["攻击后摇"] = "攻击后摇",
	["额外生命值"] = "额外生命值",
	["基础战斗力"] = "基础战斗力",
	["额外身法"] = "额外身法",
	["白盾减伤"] = "白盾减伤",
	["魔法值修正"] = "魔法值修正",
	["攻击力修正"] = "攻击力修正",
	["额外神念"] = "额外神念",
	["基础神念"] = "基础神念",
}
declare const enum 单位字符串属性 {
}
declare const enum 能量类型 {
}
declare const enum 血条类型 {
}
declare const enum 验证器代码 {
}
declare class _OBJ_busiyixiantu_5n1b_ChallengeAward extends DataCache{
	Item:IdPreset<"item_id">;
	Number:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_coin extends DataCache{
	effect:_OBJ__KeyValueAttributeFixed;
	cost:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_kill extends DataCache{
	effect:_OBJ__KeyValueAttributeFixed;
	cost:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_timeGrow extends DataCache{
	Number:number;
	ExtraGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	BaseGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_Growth extends DataCache{
	Number:number;
	UnitAttribute:_OBJ__UnitAttribute;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_killGrow extends DataCache{
	Number:number;
	ExtraGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	BaseGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_levelGrow extends DataCache{
	ExtraGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	BaseGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	constructor()
}
declare class _OBJ_lib_control_移动摇杆GUIEvent extends DataCache{
	on_vj_release:(this: void, )=>void;
	on_vj_move_start:(this: void, )=>void;
	on_vj_press:(this: void, )=>void;
	on_vj_move_end:(this: void, )=>void;
	on_vj_move:(this: void, )=>void;
	constructor()
}
declare class _OBJ_lib_control_技能摇杆GUIEvent extends DataCache{
	on_vj_release:(this: void, )=>void;
	on_vj_move_start:(this: void, )=>void;
	on_down:(this: void, )=>void;
	on_vj_press:(this: void, )=>void;
	on_vj_move_end:(this: void, )=>void;
	on_vj_move:(this: void, )=>void;
	on_up:(this: void, )=>void;
	constructor()
}
declare class _OBJ_smallcard_inventory_EquipAttributeFormat extends DataCache{
	Format:_OBJ_smallcard_inventory_AttributeFormat;
	Attribute:_OBJ__UnitAttribute;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_ChallengeCost extends DataCache{
	Item:IdPreset<"item_id">;
	Number:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_VictoryCondition extends DataCache{
	Number:number;
	Kill:IdPreset<"unit_id">;
	Necessary:boolean;
	Type:_OBJ_busiyixiantu_5n1b_VictoryType;
	Collect:IdPreset<"item_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_ChallengeRequire extends DataCache{
	Number:number;
	UnitAttribute:_OBJ__UnitAttribute;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_challenge_wave_rpgWave extends _OBJ__rpg_challenge_wave_rpg_challenge_wave{
	rpgSubWave:Array<undefined>;
	Name:string;
	Link:IdPreset<"rpg_challenge_wave_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_challenge_wave_rpgSubWave extends _OBJ__rpg_challenge_wave_rpg_challenge_wave{
	Position:Array<(this: void, )=>Point>;
	CreateFacing:number;
	Delay:number;
	Name:string;
	IsTask:boolean;
	Number:number;
	CreateRange:number;
	MaxNumber:number;
	Unit:IdPreset<"unit_id">;
	Link:IdPreset<"rpg_challenge_wave_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_item_Quality extends _OBJ__custom_item_custom_item{
	Display:string;
	Item:Array<IdPreset<"item_id">>;
	Name:string;
	Link:IdPreset<"custom_item_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_item_ItemQuality extends _OBJ__custom_item_custom_item{
	Quality:Array<undefined>;
	Name:string;
	Link:IdPreset<"custom_item_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_challenge_rpgSubChallenge extends _OBJ__rpg_challenge_rpg_challenge{
	RaidName:string;
	Name:string;
	AwardItem:Array<_OBJ_busiyixiantu_5n1b_ChallengeAward>;
	AwardBuff:Array<IdPreset<"buff_id">>;
	Wave:Array<undefined>;
	TaskScene:Array<Scene>;
	Describe:string;
	PlayerPosition:Array<(this: void, )=>Point>;
	AwardAttr:Array<_OBJ__KeyValueAttribute>;
	AwardEffect:Array<IdPreset<"effect_id">>;
	Link:IdPreset<"rpg_challenge_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_challenge_rpgChallenge extends _OBJ__rpg_challenge_rpg_challenge{
	AutoNext:boolean;
	Name:string;
	UseSceneCopy:boolean;
	rpgSubChallenge:Array<undefined>;
	AutoDelay:number;
	Describe:string;
	PlayerPosition:Array<(this: void, )=>Point>;
	AutoExit:boolean;
	CameraFollow:boolean;
	Link:IdPreset<"rpg_challenge_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_地图数据_Array_数编_技能id extends _OBJ__rpg_地图数据_rpg_地图数据{
	skillIdList:Array<unknown>;
	Name:string;
	Link:IdPreset<"rpg_地图数据_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_地图数据_属性兑换 extends _OBJ__rpg_地图数据_rpg_地图数据{
	coin:Array<_OBJ_busiyixiantu_5n1b_coin>;
	Name:string;
	kill:Array<_OBJ_busiyixiantu_5n1b_kill>;
	Link:IdPreset<"rpg_地图数据_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_地图数据_Array_数编_单位id extends _OBJ__rpg_地图数据_rpg_地图数据{
	unitIdList:Array<unknown>;
	Name:string;
	Link:IdPreset<"rpg_地图数据_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_地图数据_升仙令 extends _OBJ__rpg_地图数据_rpg_地图数据{
	Name:string;
	KillCount:number;
	Icon:string;
	Link:IdPreset<"rpg_地图数据_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_gain_Lobby_Resource_Gain extends _OBJ__lobby_resource_gain_lobby_resource_gain{
	Name:string;
	LobbyResource:IdPreset<"lobby_resource_id">;
	Count:number;
	Link:IdPreset<"lobby_resource_gain_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_Lobby_Resource extends _OBJ__lobby_resource_lobby_resource{
	SmallIcon:string;
	ItemType:IdPreset<"item_id">;
	IdName:string;
	Name:string;
	CustomParams:Array<IdPreset<"link_node_id">>;
	Desc:string;
	LobbyResourceType:_OBJ_smallcard_get_items_LobbyResourceType;
	TokenName:string;
	Icon:string;
	Count:number;
	Rare:number;
	Link:IdPreset<"lobby_resource_id">;
	/** @noSelf */
	CustomGetHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>boolean
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_grow_Grow extends _OBJ__custom_grow_custom_grow{
	Name:string;
	TimeGrow:_OBJ_busiyixiantu_5n1b_timeGrow;
	KillGrow:_OBJ_busiyixiantu_5n1b_killGrow;
	LevelGrow:_OBJ_busiyixiantu_5n1b_levelGrow;
	Link:IdPreset<"custom_grow_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_选项 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	rotate:number;
	round_corner_radius:number;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	enable_drop:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_active_button extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	flip_y:boolean;
	show:boolean;
	round_corner_radius:number;
	rotate:number;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	effect_speed:number;
	color:string;
	CustomString:string;
	click_scale:number;
	click_opacity:number;
	flip_x:boolean;
	gray:boolean;
	enable_drop:boolean;
	Asset:string;
	Name:string;
	image:string;
	enable_drag:boolean;
	active_image:string;
	border:_OBJ__GUIBorder;
	static:boolean;
	click_color:string;
	z_index:number;
	swallow_events:string;
	event:_OBJ__GUIEvent;
	scale:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_选择面板 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	rotate:number;
	round_corner_radius:number;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	enable_drop:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_关闭面板 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	rotate:number;
	round_corner_radius:number;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	enable_drop:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_整体面板 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	rotate:number;
	round_corner_radius:number;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	enable_drop:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_timershow extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	rotate:number;
	round_corner_radius:number;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	enable_drop:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_msgbox extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	on_press_btn:(this: void, )=>void;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	on_yes:(this: void, )=>void;
	transition:_OBJ__GUITransition;
	flip_y:boolean;
	show:boolean;
	border:_OBJ__GUIBorder;
	on_no:(this: void, )=>void;
	msgbox_image:string;
	clip:boolean;
	msgbox_text:string;
	low_level:boolean;
	mask_image:string;
	event:_OBJ__GUIEvent;
	enable:boolean;
	color:string;
	CustomString:string;
	opacity:number;
	rotate:number;
	style:number;
	gray:boolean;
	swallow_events:string;
	Name:string;
	round_corner_radius:number;
	image:string;
	enable_drag:boolean;
	z_index:number;
	is_show_icon:boolean;
	static:boolean;
	on_cancel:(this: void, )=>void;
	flip_x:boolean;
	enable_drop:boolean;
	msgbox_icon_image:string;
	scale:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_normal_btn extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	text_opacity:number;
	enable:boolean;
	opacity:number;
	rotate:number;
	low_level:boolean;
	round_corner_radius:number;
	mask_image:string;
	gray:boolean;
	enable_drop:boolean;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	scale:number;
	swallow_event:boolean;
	flip_x:boolean;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Name:string;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	flip_y:boolean;
	static:boolean;
	border:_OBJ__GUIBorder;
	clip:boolean;
	text_color:string;
	active_image:string;
	text:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_施法进度条 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	enable:boolean;
	complete_delay:number;
	opacity:number;
	low_level:boolean;
	rotate:number;
	mask_image:string;
	round_corner_radius:number;
	flip_y:boolean;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	swallow_event:boolean;
	scale:number;
	flip_x:boolean;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Name:string;
	enable_drag:boolean;
	z_index:number;
	progress_bg_image:string;
	show:boolean;
	image:string;
	static:boolean;
	border:_OBJ__GUIBorder;
	break_delay:number;
	enable_drop:boolean;
	gray:boolean;
	progress_bar_image:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_中止施法区域 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	rotate:number;
	round_corner_radius:number;
	flip_x:boolean;
	gray:boolean;
	enable_drop:boolean;
	Name:string;
	swallow_event:boolean;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	image:string;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_unit_attr_panel_gui_ctrl_单位属性面板 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	bind_real_unit:Unit;
	low_level:boolean;
	enable:boolean;
	mask_image:string;
	opacity:number;
	rotate:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	round_corner_radius:number;
	image:string;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	Name:string;
	show:boolean;
	z_index:number;
	enable_drag:boolean;
	bind_unit:number;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	flip_y:boolean;
	enable_drop:boolean;
	transition:_OBJ__GUITransition;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	vj_active_percent:number;
	vj_main_size:number;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	vj_is_release_reset:boolean;
	transition:_OBJ__GUITransition;
	flip_y:boolean;
	show:boolean;
	vj_bg_image:string;
	border:_OBJ__GUIBorder;
	rotate:number;
	clip:boolean;
	enable:boolean;
	vj_press_region_type:number;
	opacity:number;
	low_level:boolean;
	vj_size:number;
	mask_image:string;
	round_corner_radius:number;
	vj_relative_x:number;
	event:_OBJ_lib_control_移动摇杆GUIEvent;
	scale:number;
	color:string;
	CustomString:string;
	vj_main_move_ratio:number;
	vj_main_toggle_show:boolean;
	flip_x:boolean;
	gray:boolean;
	enable_drop:boolean;
	Name:string;
	enable_drag:boolean;
	image:string;
	vj_main_image:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	vj_main_move_radius:number;
	static:boolean;
	z_index:number;
	vj_bg_toggle_show:boolean;
	vj_is_press_center:boolean;
	swallow_events:string;
	vj_relative_y:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_simpleui_button extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	enable:boolean;
	opacity:number;
	low_level:boolean;
	rotate:number;
	mask_image:string;
	round_corner_radius:number;
	flip_y:boolean;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	visiblity:boolean;
	swallow_event:boolean;
	flip_x:boolean;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Name:string;
	scale:number;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	image:string;
	static:boolean;
	border:_OBJ__GUIBorder;
	enable_drop:boolean;
	gray:boolean;
	can_be_clicked:boolean;
	text:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_Buff列表 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	buff_icon:string;
	default_pos_cnt:number;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	buff_margin:number;
	default_none_cnt:number;
	transition:_OBJ__GUITransition;
	buff_width:number;
	flip_y:boolean;
	buff_cat_filter:string;
	show:boolean;
	border:_OBJ__GUIBorder;
	buff_polarity:string;
	rotate:number;
	clip:boolean;
	low_level:boolean;
	scale:number;
	buff_icon_template:string;
	event:_OBJ__GUIEvent;
	color:string;
	CustomString:string;
	enable:boolean;
	flip_x:boolean;
	gray:boolean;
	enable_drop:boolean;
	Name:string;
	opacity:number;
	image:string;
	enable_drag:boolean;
	round_corner_radius:number;
	static:boolean;
	unit:Unit;
	default_neg_cnt:number;
	z_index:number;
	swallow_events:string;
	buff_height:number;
	mask_image:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_移动摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	vj_slider_width:number;
	slider_image:string;
	is_main_slider:boolean;
	vj_move_ratio:number;
	slider_relative_y:number;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	slow_rate:number;
	vj_is_release_reset:boolean;
	transition:_OBJ__GUITransition;
	vj_is_press_center:boolean;
	show:boolean;
	border:_OBJ__GUIBorder;
	enable:boolean;
	opacity:number;
	round_corner_radius:number;
	vj_move_radius:number;
	vj_toggle_show:boolean;
	rotate:number;
	clip:boolean;
	slider_size:number;
	vj_press_region_type:number;
	scale:number;
	low_level:boolean;
	mask_image:string;
	slider_bg_image:string;
	image:string;
	flip_y:boolean;
	vj_stop_percent:number;
	vj_slider_height:number;
	color:string;
	CustomString:string;
	vj_slow_percent:number;
	enable_drop:boolean;
	toggle_show:boolean;
	gray:boolean;
	swallow_events:string;
	Name:string;
	flip_x:boolean;
	z_index:number;
	enable_drag:boolean;
	slider_mini_image:string;
	vj_active_percent:number;
	static:boolean;
	slider_relative_x:number;
	vj_is_main_slider:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	vj_auto_move:boolean;
	event:_OBJ_lib_control_移动摇杆GUIEvent;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_simpleui_picture extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	zoom_type:string;
	enable:boolean;
	low_level:boolean;
	rotate:number;
	mask_image:string;
	round_corner_radius:number;
	enable_drop:boolean;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	visiblity:boolean;
	flip_y:boolean;
	flip_x:boolean;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Name:string;
	scale:number;
	image:string;
	enable_drag:boolean;
	show:boolean;
	swallow_event:boolean;
	static:boolean;
	border:_OBJ__GUIBorder;
	gray:boolean;
	opacity:number;
	can_be_clicked:boolean;
	z_index:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_simpleui_text extends _OBJ__gui_ctrl_gui_ctrl{
	font_size:number;
	clip:boolean;
	enable:boolean;
	opacity:number;
	rotate:number;
	low_level:boolean;
	round_corner_radius:number;
	mask_image:string;
	enable_drop:boolean;
	flip_y:boolean;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	visiblity:boolean;
	scale:number;
	flip_x:boolean;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Name:string;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	swallow_event:boolean;
	static:boolean;
	border:_OBJ__GUIBorder;
	gray:boolean;
	auto_line_feed:boolean;
	can_be_clicked:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_背包入口 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	rotate:number;
	round_corner_radius:number;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	enable_drop:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_自定义背包面板 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	inv_link:string;
	low_level:boolean;
	enable:boolean;
	mask_image:string;
	opacity:number;
	rotate:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	round_corner_radius:number;
	swallow_event:boolean;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	Name:string;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	enable_drop:boolean;
	drop_mode:boolean;
	transition:_OBJ__GUITransition;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_自定义背包格子 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	low_level:boolean;
	enable:boolean;
	mask_image:string;
	opacity:number;
	rotate:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	round_corner_radius:number;
	swallow_event:boolean;
	flip_x:boolean;
	drop_mode:boolean;
	enable_drop:boolean;
	Name:string;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	transition:_OBJ__GUITransition;
	gray:boolean;
	swallow_events:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_normal_rect extends _OBJ__gui_ctrl_gui_ctrl{
	enable:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	opacity:number;
	rotate:number;
	decoration_layout_right:_OBJ__GUILayout;
	low_level:boolean;
	round_corner_radius:number;
	mask_image:string;
	enable_drop:boolean;
	static:boolean;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	scale:number;
	swallow_event:boolean;
	style:string;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Name:string;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	flip_y:boolean;
	decoration_image:string;
	border:_OBJ__GUIBorder;
	gray:boolean;
	flip_x:boolean;
	decoration_layout_left:_OBJ__GUILayout;
	is_decoration:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_Buff图标 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	buff_bg_none_color:string;
	buff_icon:string;
	buff_bg_pos_color:string;
	buff_bg_neg_color:string;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	buff_margin:number;
	transition:_OBJ__GUITransition;
	buff_width:number;
	flip_y:boolean;
	show:boolean;
	border:_OBJ__GUIBorder;
	buff_neg_progress_type:string;
	buff_none_progress_type:string;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	event:_OBJ__GUIEvent;
	enable:boolean;
	color:string;
	CustomString:string;
	opacity:number;
	rotate:number;
	flip_x:boolean;
	gray:boolean;
	enable_drop:boolean;
	Name:string;
	round_corner_radius:number;
	image:string;
	enable_drag:boolean;
	buff_pos_progress_type:string;
	scale:number;
	static:boolean;
	font_size:number;
	z_index:number;
	swallow_events:string;
	buff_height:number;
	buff:Buff;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_多功能格子 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	can_use:boolean;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	bind_item:Item;
	bind_item_link:IdPreset<"item_id">;
	transition:_OBJ__GUITransition;
	flip_y:boolean;
	show:boolean;
	round_corner_radius:number;
	rotate:number;
	clip:boolean;
	show_tips:boolean;
	low_level:boolean;
	scale:number;
	event:_OBJ__GUIEvent;
	bind_loot_link:IdPreset<"loot_id">;
	color:string;
	show_frame:boolean;
	enable:boolean;
	flip_x:boolean;
	gray:boolean;
	enable_drop:boolean;
	Name:string;
	opacity:number;
	image:string;
	enable_drag:boolean;
	mask_image:string;
	CustomString:string;
	static:boolean;
	show_num:boolean;
	show_bg:boolean;
	z_index:number;
	swallow_events:string;
	border:_OBJ__GUIBorder;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_选项图标 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	rotate:number;
	round_corner_radius:number;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	enable_drop:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_unit_attr_panel_gui_ctrl_单位属性 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	flip_y:boolean;
	show:boolean;
	border:_OBJ__GUIBorder;
	font_size:number;
	clip:boolean;
	icon:string;
	attr_multiply:number;
	cat_button_height:number;
	low_level:boolean;
	bind_attr:string;
	accuracy_display:number;
	event:_OBJ__GUIEvent;
	enable:boolean;
	color:string;
	show_mode:number;
	opacity:number;
	rotate:number;
	flip_x:boolean;
	gray:boolean;
	enable_drop:boolean;
	Name:string;
	round_corner_radius:number;
	image:string;
	enable_drag:boolean;
	font_color:string;
	mask_image:string;
	static:boolean;
	CustomString:string;
	font_family:string;
	z_index:number;
	swallow_events:string;
	scale:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_progress extends _OBJ__gui_ctrl_gui_ctrl{
	progress_text_show:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	progress_image:string;
	progress_width:number;
	is_merge_text:boolean;
	progress_type:string;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	is_name_show_real:boolean;
	transition:_OBJ__GUITransition;
	flip_y:boolean;
	show:boolean;
	border:_OBJ__GUIBorder;
	enable:boolean;
	name_height_prop:number;
	opacity:number;
	name_show:boolean;
	rotate:number;
	clip:boolean;
	round_corner_radius:number;
	static:boolean;
	scale:number;
	low_level:boolean;
	enable_drag:boolean;
	mask_image:string;
	image:string;
	enable_drop:boolean;
	event:_OBJ__GUIEvent;
	gray:boolean;
	color:string;
	CustomString:string;
	name_pos_prop:string;
	is_name_show:boolean;
	flip_x:boolean;
	progress_color:string;
	swallow_events:string;
	Name:string;
	progress_height:number;
	z_index:number;
	progress_bg_image:string;
	value:number;
	default_box_margin:number;
	description:string;
	default_name_width:number;
	value_max:number;
	name_width_prop:number;
	name_width:number;
	progress_bg_color:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_msgbox_btn extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	enable:boolean;
	opacity:number;
	low_level:boolean;
	rotate:number;
	icon_image:string;
	round_corner_radius:number;
	enable_drop:boolean;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	flip_y:boolean;
	scale:number;
	flip_x:boolean;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Name:string;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	swallow_event:boolean;
	static:boolean;
	border:_OBJ__GUIBorder;
	gray:boolean;
	mask_image:string;
	btn_image:string;
	text:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_技能摇杆组 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	max_skill_count:number;
	cast_slider_panel:string;
	init_angle:number;
	enable:boolean;
	opacity:number;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	rotate:number;
	round_corner_radius:number;
	auto_bind_key:boolean;
	image:string;
	vj_panel_crop_margin:number;
	outer_ratio:number;
	cast_slider_panel_disable:string;
	scale:number;
	show:boolean;
	skill_toggleon:string;
	cast_slider:string;
	total_angle_delta:number;
	enable_drag:boolean;
	border:_OBJ__GUIBorder;
	base_y:number;
	flip_y:boolean;
	active_percent:number;
	skill_normal:string;
	press_region_type:number;
	skill_charge_cool:string;
	clip:boolean;
	enable_drop:boolean;
	is_vj_center:boolean;
	skill_icon_mask:string;
	low_level:boolean;
	mask_image:string;
	skill_cool:string;
	transition:_OBJ__GUITransition;
	skill_stack_bg:string;
	event:_OBJ__GUIEvent;
	min_around_dis:number;
	color:string;
	CustomString:string;
	skill_disable:string;
	Name:string;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	attack_button_size:number;
	skill_attack_normal:string;
	z_index:number;
	center_ratio:number;
	can_press_on_cool:boolean;
	base_x:number;
	static:boolean;
	button_size:number;
	shortcut_key_bg:string;
	skill_click:string;
	skill_locked:string;
	vj_panel_scale:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_btn_icon extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	icon:string;
	is_switch:boolean;
	low_level:boolean;
	enable:boolean;
	mask_image:string;
	opacity:number;
	rotate:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	round_corner_radius:number;
	border:_OBJ__GUIBorder;
	flip_x:boolean;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Name:string;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	is_on:boolean;
	swallow_event:boolean;
	flip_y:boolean;
	enable_drop:boolean;
	gray:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_game_options_gui_ctrl_设置按钮 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	show_localization_panel:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	rotate:number;
	round_corner_radius:number;
	flip_x:boolean;
	gray:boolean;
	enable_drop:boolean;
	Name:string;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	flip_y:boolean;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_attachable_panel extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	enable:boolean;
	hide_on_unit_invisible:boolean;
	opacity:number;
	low_level:boolean;
	rotate:number;
	mask_image:string;
	round_corner_radius:number;
	scale_by_distance:boolean;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	flip_x:boolean;
	transition:_OBJ__GUITransition;
	swallow_events:string;
	Name:string;
	scale:number;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	image:string;
	static:boolean;
	_attach_unit:Unit;
	flip_y:boolean;
	enable_drop:boolean;
	gray:boolean;
	socket_name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_技能摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	cast_slider_panel:string;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	vj_panel_crop_margin:number;
	cast_slider_panel_disable:string;
	enable:boolean;
	opacity:number;
	skill_toggleon:string;
	cast_slider:string;
	skill:Skill;
	rotate:number;
	border:_OBJ__GUIBorder;
	round_corner_radius:number;
	outer_ratio:number;
	active_percent:number;
	skill_normal:string;
	press_region_type:number;
	skill_charge_cool:string;
	clip:boolean;
	scale:number;
	is_vj_center:boolean;
	skill_icon_mask:string;
	low_level:boolean;
	show:boolean;
	mask_image:string;
	enable_drag:boolean;
	skill_stack_bg:string;
	event:_OBJ_lib_control_技能摇杆GUIEvent;
	image:string;
	color:string;
	CustomString:string;
	skill_disable:string;
	flip_y:boolean;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	Name:string;
	enable_drop:boolean;
	z_index:number;
	center_ratio:number;
	transition:_OBJ__GUITransition;
	can_press_on_cool:boolean;
	static:boolean;
	shortcut_key_bg:string;
	skill_click:string;
	skill_cool:string;
	skill_locked:string;
	vj_panel_scale:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_mail_gui_ctrl_邮件按钮 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	low_level:boolean;
	mask_image:string;
	enable:boolean;
	opacity:number;
	event:_OBJ__GUIEvent;
	layout:_OBJ__GUILayout;
	color:string;
	CustomString:string;
	rotate:number;
	round_corner_radius:number;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	border:_OBJ__GUIBorder;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	enable_drop:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_gain_group_Lobby_Resource_Gain_Group extends _OBJ__lobby_resource_gain_group_lobby_resource_gain_group{
	Name:string;
	Array:Array<IdPreset<"lobby_resource_gain_id">>;
	Link:IdPreset<"lobby_resource_gain_group_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_inventory_config_Inventory_Config extends _OBJ__inventory_config_inventory_config{
	Character:string;
	ShowQuickBarLock:boolean;
	V2Special:boolean;
	Default_Frame:string;
	EnableInGameInventory:boolean;
	ShowCharacter:boolean;
	ShowDefaultEntrance:boolean;
	Filters:Array<IdPreset<"item_class_id">>;
	Name:string;
	EquipAttributeFormat:Array<_OBJ_smallcard_inventory_EquipAttributeFormat>;
	ShowQuickBarCollapse:boolean;
	Special:string;
	EnableInteract:boolean;
	TypeFilters:Array<IdPreset<"item_class_id">>;
	EquipTypes:Array<IdPreset<"item_class_id">>;
	QualityColor:Array<undefined>;
	ShowDropArea:boolean;
	InteractRange:number;
	Link:IdPreset<"inventory_config_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_inventory_config_Quality_Color extends _OBJ__inventory_config_inventory_config{
	Name:string;
	ActorArray:Array<IdPreset<"actor_id">>;
	ClassLink:IdPreset<"item_class_id">;
	Color:string;
	Frame:string;
	Background:string;
	Link:IdPreset<"inventory_config_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_challenge_SubChallenge extends _OBJ__custom_challenge_custom_challenge{
	Cost:Array<_OBJ_busiyixiantu_5n1b_ChallengeCost>;
	RaidName:string;
	Victory:Array<_OBJ_busiyixiantu_5n1b_VictoryCondition>;
	Require:Array<_OBJ_busiyixiantu_5n1b_ChallengeRequire>;
	Wave:IdPreset<"wave_id">;
	Raid:string;
	Name:string;
	Repeat:boolean;
	Transmit:boolean;
	Award:Array<_OBJ_busiyixiantu_5n1b_ChallengeAward>;
	Describe:string;
	Link:IdPreset<"custom_challenge_id">;
	/** @noSelf */
	Position:(this: void)=>Point
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_challenge_Challenge extends _OBJ__custom_challenge_custom_challenge{
	Describe:string;
	Name:string;
	SubChallenge:Array<undefined>;
	Link:IdPreset<"custom_challenge_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_wave_SubWave extends _OBJ__custom_wave_custom_wave{
	AutoScene:boolean;
	Unit:IdPreset<"unit_id">;
	Number:number;
	Delay:number;
	Name:string;
	Pulse:number;
	Link:IdPreset<"custom_wave_id">;
	/** @noSelf */
	Position:(this: void)=>Point
	/** @noSelf */
	Line:(this: void)=>Line
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_wave_wave extends _OBJ__custom_wave_custom_wave{
	SubWave:Array<undefined>;
	Name:string;
	Clear:boolean;
	LoopWait:number;
	Loop:boolean;
	Link:IdPreset<"custom_wave_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_link_node_LinkNodeLobbyResource extends _OBJ__link_node_LinkNode{
	IsArray:boolean;
	Name:string;
	Value:IdPreset<"lobby_resource_id">;
	Array:Array<IdPreset<"lobby_resource_id">>;
	Link:IdPreset<"link_node_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_ResourceTicket extends _OBJ_smallcard_get_items_lobby_resource_Lobby_Resource{
	SmallIcon:string;
	TicketName:string;
	IdName:string;
	Name:string;
	CustomParams:Array<IdPreset<"link_node_id">>;
	Desc:string;
	ItemType:IdPreset<"item_id">;
	PerLastCount:number;
	PerLastTime:number;
	LobbyResourceType:_OBJ_smallcard_get_items_LobbyResourceType;
	Count:number;
	Icon:string;
	TokenName:string;
	Rare:number;
	Link:IdPreset<"lobby_resource_id">;
	/** @noSelf */
	CustomGetHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>boolean
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_transition_label extends _OBJ__gui_ctrl_label{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	transition:_OBJ__GUITransition;
	font:_OBJ__Font;
	low_level:boolean;
	text:string;
	mask_image:string;
	enable_drop:boolean;
	border:_OBJ__GUIBorder;
	opacity:number;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	CustomString:string;
	Name:string;
	image:string;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	show:boolean;
	z_index:number;
	enable_drag:boolean;
	number_transition:_OBJ__GUITransitionSubType;
	scale:number;
	static:boolean;
	round_corner_radius:number;
	rotate:number;
	color:string;
	enable:boolean;
	event:_OBJ__GUIEvent;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_选项名称 extends _OBJ__gui_ctrl_label{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	transition:_OBJ__GUITransition;
	low_level:boolean;
	font:_OBJ__Font;
	mask_image:string;
	text:string;
	enable_drop:boolean;
	opacity:number;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	CustomString:string;
	border:_OBJ__GUIBorder;
	Name:string;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	round_corner_radius:number;
	rotate:number;
	color:string;
	enable:boolean;
	event:_OBJ__GUIEvent;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_选项描述 extends _OBJ__gui_ctrl_label{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	transition:_OBJ__GUITransition;
	low_level:boolean;
	font:_OBJ__Font;
	mask_image:string;
	text:string;
	enable_drop:boolean;
	opacity:number;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	CustomString:string;
	border:_OBJ__GUIBorder;
	Name:string;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	round_corner_radius:number;
	rotate:number;
	color:string;
	enable:boolean;
	event:_OBJ__GUIEvent;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_确认按钮 extends _OBJ__gui_ctrl_label{
	children:Array<IdPreset<"gui_ctrl_id">>;
	clip:boolean;
	transition:_OBJ__GUITransition;
	low_level:boolean;
	font:_OBJ__Font;
	mask_image:string;
	text:string;
	enable_drop:boolean;
	opacity:number;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	CustomString:string;
	border:_OBJ__GUIBorder;
	Name:string;
	flip_x:boolean;
	gray:boolean;
	swallow_events:string;
	flip_y:boolean;
	image:string;
	z_index:number;
	enable_drag:boolean;
	show:boolean;
	scale:number;
	static:boolean;
	round_corner_radius:number;
	rotate:number;
	color:string;
	enable:boolean;
	event:_OBJ__GUIEvent;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare const enum _OBJ__Unit_Filter {
	["自动复活"] = "自动复活",
}
declare const enum _OBJ__BuffCategory {
	["正面效果"] = "正面效果",
	["控制效果"] = "控制效果",
	["持续性伤害"] = "持续性伤害",
	["位移效果"] = "位移效果",
	["持续性治疗"] = "持续性治疗",
	["负面效果"] = "负面效果",
}
declare const enum _OBJ__KeyValueAttribute_Key {
	["复活时间"] = "复活时间",
	["防御力修正"] = "防御力修正",
	["基础根骨"] = "基础根骨",
	["攻击系数"] = "攻击系数",
	["基础生命值"] = "基础生命值",
	["战斗力增幅"] = "战斗力增幅",
	["攻击回血"] = "攻击回血",
	["额外根骨"] = "额外根骨",
	["额外攻击力"] = "额外攻击力",
	["基础魔法值"] = "基础魔法值",
	["固定减伤A2"] = "固定减伤A2",
	["固定减伤B2"] = "固定减伤B2",
	["生命值修正"] = "生命值修正",
	["基础防御力"] = "基础防御力",
	["额外魔法值"] = "额外魔法值",
	["固定减伤B1"] = "固定减伤B1",
	["基础身法"] = "基础身法",
	["攻击前摇"] = "攻击前摇",
	["普攻伤害"] = "普攻伤害",
	["基础攻击力"] = "基础攻击力",
	["金币"] = "金币",
	["固定减伤A1"] = "固定减伤A1",
	["护甲减免"] = "护甲减免",
	["攻击后摇"] = "攻击后摇",
	["额外生命值"] = "额外生命值",
	["基础战斗力"] = "基础战斗力",
	["额外身法"] = "额外身法",
	["白盾减伤"] = "白盾减伤",
	["魔法值修正"] = "魔法值修正",
	["攻击力修正"] = "攻击力修正",
	["额外神念"] = "额外神念",
	["基础神念"] = "基础神念",
}
declare const enum _OBJ__UnitPropertySubTypeEx {
}
declare const enum _OBJ__DamageType {
	["普通攻击"] = "普通攻击",
}
declare const enum _OBJ__PlayerAttribute {
	["最终普攻增幅"] = "最终普攻增幅",
	["物理爆伤"] = "物理爆伤",
	["额外金币"] = "额外金币",
	["伤害增幅"] = "伤害增幅",
	["根骨"] = "根骨",
	["攻击力增幅"] = "攻击力增幅",
	["攻击回血"] = "攻击回血",
	["根骨增幅"] = "根骨增幅",
	["刷怪效率"] = "刷怪效率",
	["最终魔法增幅"] = "最终魔法增幅",
	["伤害加成"] = "伤害加成",
	["法术暴击率"] = "法术暴击率",
	["额外杀敌"] = "额外杀敌",
	["伤害抵挡"] = "伤害抵挡",
	["每秒神念"] = "每秒神念",
	["最终法爆增幅"] = "最终法爆增幅",
	["杀敌神念"] = "杀敌神念",
	["法术爆伤"] = "法术爆伤",
	["法术伤害"] = "法术伤害",
	["杀敌生命"] = "杀敌生命",
	["法术收益"] = "法术收益",
	["杀敌根骨"] = "杀敌根骨",
	["幸运值"] = "幸运值",
	["技能急速"] = "技能急速",
	["最终法穿增幅"] = "最终法穿增幅",
	["攻击速度"] = "攻击速度",
	["主属性"] = "主属性",
	["最终物爆增幅"] = "最终物爆增幅",
	["装备爆率"] = "装备爆率",
	["生命增幅"] = "生命增幅",
	["普攻伤害"] = "普攻伤害",
	["每秒生命"] = "每秒生命",
	["最终物穿增幅"] = "最终物穿增幅",
	["最终神念"] = "最终神念",
	["最终生命增幅"] = "最终生命增幅",
	["伤害躲避"] = "伤害躲避",
	["最终身法"] = "最终身法",
	["最终伤害增幅"] = "最终伤害增幅",
	["额外练功怪数量"] = "额外练功怪数量",
	["每秒根骨"] = "每秒根骨",
	["攻击急速"] = "攻击急速",
	["物理伤害"] = "物理伤害",
	["每秒身法"] = "每秒身法",
	["最终根骨"] = "最终根骨",
	["每秒防御"] = "每秒防御",
	["每秒攻击"] = "每秒攻击",
	["魔法增幅"] = "魔法增幅",
	["生命恢复"] = "生命恢复",
	["杀敌身法"] = "杀敌身法",
	["身法"] = "身法",
	["最终伤害"] = "最终伤害",
	["身法增幅"] = "身法增幅",
	["神念"] = "神念",
	["技能输出"] = "技能输出",
	["杀敌攻击"] = "杀敌攻击",
	["物理收益"] = "物理收益",
	["额外经验"] = "额外经验",
	["最终技能增幅"] = "最终技能增幅",
	["神念增幅"] = "神念增幅",
}
declare const enum _OBJ__SpellAttribute_Key {
}
declare const enum _OBJ__AbilCategory {
}
declare const enum _OBJ__Spell_attack_speed_attribute {
	["复活时间"] = "复活时间",
	["防御力修正"] = "防御力修正",
	["基础根骨"] = "基础根骨",
	["攻击系数"] = "攻击系数",
	["基础生命值"] = "基础生命值",
	["战斗力增幅"] = "战斗力增幅",
	["攻击回血"] = "攻击回血",
	["额外根骨"] = "额外根骨",
	["额外攻击力"] = "额外攻击力",
	["基础魔法值"] = "基础魔法值",
	["固定减伤A2"] = "固定减伤A2",
	["额外身法"] = "额外身法",
	["生命值修正"] = "生命值修正",
	["基础防御力"] = "基础防御力",
	["额外魔法值"] = "额外魔法值",
	["固定减伤B1"] = "固定减伤B1",
	["基础身法"] = "基础身法",
	["攻击前摇"] = "攻击前摇",
	["普攻伤害"] = "普攻伤害",
	["额外神念"] = "额外神念",
	["固定减伤A1"] = "固定减伤A1",
	["攻击后摇"] = "攻击后摇",
	["护甲减免"] = "护甲减免",
	["固定减伤B2"] = "固定减伤B2",
	["额外生命值"] = "额外生命值",
	["基础战斗力"] = "基础战斗力",
	["白盾减伤"] = "白盾减伤",
	["基础攻击力"] = "基础攻击力",
	["魔法值修正"] = "魔法值修正",
	["攻击力修正"] = "攻击力修正",
	["金币"] = "金币",
	["基础神念"] = "基础神念",
}
declare const enum _OBJ__UnitAttribute {
	["复活时间"] = "复活时间",
	["防御力修正"] = "防御力修正",
	["基础根骨"] = "基础根骨",
	["攻击系数"] = "攻击系数",
	["基础生命值"] = "基础生命值",
	["战斗力增幅"] = "战斗力增幅",
	["攻击回血"] = "攻击回血",
	["额外根骨"] = "额外根骨",
	["额外攻击力"] = "额外攻击力",
	["基础魔法值"] = "基础魔法值",
	["固定减伤A2"] = "固定减伤A2",
	["固定减伤B2"] = "固定减伤B2",
	["生命值修正"] = "生命值修正",
	["基础防御力"] = "基础防御力",
	["额外魔法值"] = "额外魔法值",
	["固定减伤B1"] = "固定减伤B1",
	["基础身法"] = "基础身法",
	["攻击前摇"] = "攻击前摇",
	["普攻伤害"] = "普攻伤害",
	["基础攻击力"] = "基础攻击力",
	["金币"] = "金币",
	["固定减伤A1"] = "固定减伤A1",
	["护甲减免"] = "护甲减免",
	["攻击后摇"] = "攻击后摇",
	["额外生命值"] = "额外生命值",
	["基础战斗力"] = "基础战斗力",
	["额外身法"] = "额外身法",
	["白盾减伤"] = "白盾减伤",
	["魔法值修正"] = "魔法值修正",
	["攻击力修正"] = "攻击力修正",
	["额外神念"] = "额外神念",
	["基础神念"] = "基础神念",
}
declare const enum _OBJ_smallcard_get_items_LobbyResourceType {
}
declare const enum _OBJ__GameOptionUIItem_DataType {
}
declare const enum _OBJ_smallcard_inventory_AttributeFormat {
}
declare const enum _OBJ_busiyixiantu_5n1b_VictoryType {
}
