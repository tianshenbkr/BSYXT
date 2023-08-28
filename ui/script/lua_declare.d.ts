declare const enum Scene {
	["default"] = "default",
}
declare const enum 单位属性子类型 {
}
declare const enum 玩家属性 {
	["根骨增幅"] = "根骨增幅",
	["法术爆伤"] = "法术爆伤",
	["攻击速度"] = "攻击速度",
	["生命增幅"] = "生命增幅",
	["杀敌攻击"] = "杀敌攻击",
	["根骨"] = "根骨",
	["物理爆伤"] = "物理爆伤",
	["装备爆率"] = "装备爆率",
	["每秒生命"] = "每秒生命",
	["额外练功怪数量"] = "额外练功怪数量",
	["最终伤害增幅"] = "最终伤害增幅",
	["额外杀敌"] = "额外杀敌",
	["攻击急速"] = "攻击急速",
	["刷怪效率"] = "刷怪效率",
	["主属性"] = "主属性",
	["法术暴击率"] = "法术暴击率",
	["生命恢复"] = "生命恢复",
	["最终法爆增幅"] = "最终法爆增幅",
	["额外经验"] = "额外经验",
	["每秒根骨"] = "每秒根骨",
	["身法增幅"] = "身法增幅",
	["每秒防御"] = "每秒防御",
	["伤害抵挡"] = "伤害抵挡",
	["物理收益"] = "物理收益",
	["法术收益"] = "法术收益",
	["最终身法"] = "最终身法",
	["每秒身法"] = "每秒身法",
	["伤害加成"] = "伤害加成",
	["法术伤害"] = "法术伤害",
	["最终法穿增幅"] = "最终法穿增幅",
	["杀敌神念"] = "杀敌神念",
	["最终物爆增幅"] = "最终物爆增幅",
	["最终物穿增幅"] = "最终物穿增幅",
	["神念增幅"] = "神念增幅",
	["物理伤害"] = "物理伤害",
	["最终伤害"] = "最终伤害",
	["攻击回血"] = "攻击回血",
	["身法"] = "身法",
	["普攻伤害"] = "普攻伤害",
	["每秒攻击"] = "每秒攻击",
	["攻击力增幅"] = "攻击力增幅",
	["伤害增幅"] = "伤害增幅",
	["最终普攻增幅"] = "最终普攻增幅",
	["最终生命增幅"] = "最终生命增幅",
	["每秒神念"] = "每秒神念",
	["杀敌根骨"] = "杀敌根骨",
	["杀敌生命"] = "杀敌生命",
	["神念"] = "神念",
	["杀敌身法"] = "杀敌身法",
	["技能急速"] = "技能急速",
	["最终技能增幅"] = "最终技能增幅",
	["伤害躲避"] = "伤害躲避",
	["技能输出"] = "技能输出",
	["最终根骨"] = "最终根骨",
	["魔法增幅"] = "魔法增幅",
	["幸运值"] = "幸运值",
	["最终神念"] = "最终神念",
	["额外金币"] = "额外金币",
	["最终魔法增幅"] = "最终魔法增幅",
}
declare const enum 单位字符串属性 {
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
declare const enum 单位属性 {
	["基础战斗力"] = "基础战斗力",
	["额外神念"] = "额外神念",
	["攻击后摇"] = "攻击后摇",
	["固定减伤B1"] = "固定减伤B1",
	["生命值修正"] = "生命值修正",
	["防御力修正"] = "防御力修正",
	["额外生命值"] = "额外生命值",
	["攻击力修正"] = "攻击力修正",
	["攻击前摇"] = "攻击前摇",
	["基础根骨"] = "基础根骨",
	["金币"] = "金币",
	["攻击系数"] = "攻击系数",
	["固定减伤B2"] = "固定减伤B2",
	["固定减伤A1"] = "固定减伤A1",
	["护甲减免"] = "护甲减免",
	["额外攻击力"] = "额外攻击力",
	["白盾减伤"] = "白盾减伤",
	["额外身法"] = "额外身法",
	["固定减伤A2"] = "固定减伤A2",
	["基础魔法值"] = "基础魔法值",
	["复活时间"] = "复活时间",
	["魔法值修正"] = "魔法值修正",
	["普攻伤害"] = "普攻伤害",
	["战斗力增幅"] = "战斗力增幅",
	["基础生命值"] = "基础生命值",
	["基础防御力"] = "基础防御力",
	["额外根骨"] = "额外根骨",
	["额外魔法值"] = "额外魔法值",
	["基础攻击力"] = "基础攻击力",
	["基础神念"] = "基础神念",
	["基础身法"] = "基础身法",
}
declare const enum 单位标签 {
	["自动复活"] = "自动复活",
}
declare const enum 验证器代码 {
}
declare const enum 血条类型 {
}
declare const enum 能量类型 {
}
declare class _OBJ_lib_control_移动摇杆GUIEvent extends DataCache{
	on_vj_move_end:(this: void, )=>void;
	on_vj_move:(this: void, )=>void;
	on_vj_press:(this: void, )=>void;
	on_vj_move_start:(this: void, )=>void;
	on_vj_release:(this: void, )=>void;
	constructor()
}
declare class _OBJ_lib_control_技能摇杆GUIEvent extends DataCache{
	on_up:(this: void, )=>void;
	on_down:(this: void, )=>void;
	on_vj_move_end:(this: void, )=>void;
	on_vj_move_start:(this: void, )=>void;
	on_vj_move:(this: void, )=>void;
	on_vj_press:(this: void, )=>void;
	on_vj_release:(this: void, )=>void;
	constructor()
}
declare class _OBJ_smallcard_inventory_EquipAttributeFormat extends DataCache{
	Attribute:_OBJ__UnitAttribute;
	Format:_OBJ_smallcard_inventory_AttributeFormat;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_ChallengeRequire extends DataCache{
	UnitAttribute:_OBJ__UnitAttribute;
	Number:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_VictoryCondition extends DataCache{
	Type:_OBJ_busiyixiantu_5n1b_VictoryType;
	Necessary:boolean;
	Kill:IdPreset<"unit_id">;
	Collect:IdPreset<"item_id">;
	Number:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_ChallengeCost extends DataCache{
	Item:IdPreset<"item_id">;
	Number:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_ChallengeAward extends DataCache{
	Item:IdPreset<"item_id">;
	Number:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_killGrow extends DataCache{
	BaseGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	ExtraGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	Number:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_Growth extends DataCache{
	UnitAttribute:_OBJ__UnitAttribute;
	Number:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_levelGrow extends DataCache{
	BaseGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	ExtraGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_timeGrow extends DataCache{
	BaseGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	ExtraGrow:Array<_OBJ_busiyixiantu_5n1b_Growth>;
	Number:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_kill extends DataCache{
	effect:_OBJ__KeyValueAttributeFixed;
	cost:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_coin extends DataCache{
	effect:_OBJ__KeyValueAttributeFixed;
	cost:number;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_item_Quality extends _OBJ__custom_item_custom_item{
	Name:string;
	Display:string;
	Item:Array<IdPreset<"item_id">>;
	Link:IdPreset<"custom_item_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_item_ItemQuality extends _OBJ__custom_item_custom_item{
	Quality:Array<undefined>;
	Name:string;
	Link:IdPreset<"custom_item_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_Lobby_Resource extends _OBJ__lobby_resource_lobby_resource{
	TokenName:string;
	SmallIcon:string;
	Rare:number;
	Icon:string;
	Name:string;
	Desc:string;
	LobbyResourceType:_OBJ_smallcard_get_items_LobbyResourceType;
	ItemType:IdPreset<"item_id">;
	IdName:string;
	Count:number;
	CustomParams:Array<IdPreset<"link_node_id">>;
	Link:IdPreset<"lobby_resource_id">;
	/** @noSelf */
	CustomGetHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>boolean
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_gain_Lobby_Resource_Gain extends _OBJ__lobby_resource_gain_lobby_resource_gain{
	LobbyResource:IdPreset<"lobby_resource_id">;
	Count:number;
	Name:string;
	Link:IdPreset<"lobby_resource_gain_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_gain_group_Lobby_Resource_Gain_Group extends _OBJ__lobby_resource_gain_group_lobby_resource_gain_group{
	Name:string;
	Array:Array<IdPreset<"lobby_resource_gain_id">>;
	Link:IdPreset<"lobby_resource_gain_group_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_技能摇杆组 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	outer_ratio:number;
	max_skill_count:number;
	skill_disable:string;
	active_percent:number;
	button_size:number;
	init_angle:number;
	center_ratio:number;
	image:string;
	skill_icon_mask:string;
	skill_click:string;
	opacity:number;
	low_level:boolean;
	cast_slider_panel:string;
	cast_slider:string;
	attack_button_size:number;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	mask_image:string;
	flip_y:boolean;
	min_around_dis:number;
	enable:boolean;
	flip_x:boolean;
	scale:number;
	vj_panel_crop_margin:number;
	total_angle_delta:number;
	skill_locked:string;
	CustomString:string;
	press_region_type:number;
	gray:boolean;
	enable_drop:boolean;
	show:boolean;
	clip:boolean;
	skill_normal:string;
	swallow_event:boolean;
	color:string;
	base_x:number;
	static:boolean;
	event:_OBJ__GUIEvent;
	can_press_on_cool:boolean;
	transition:_OBJ__GUITransition;
	Name:string;
	swallow_events:string;
	border:_OBJ__GUIBorder;
	skill_attack_normal:string;
	cast_slider_panel_disable:string;
	layout:_OBJ__GUILayout;
	vj_panel_scale:number;
	base_y:number;
	shortcut_key_bg:string;
	auto_bind_key:boolean;
	skill_cool:string;
	skill_charge_cool:string;
	skill_stack_bg:string;
	skill_toggleon:string;
	is_vj_center:boolean;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_active_button extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	Name:string;
	transition:_OBJ__GUITransition;
	opacity:number;
	flip_x:boolean;
	z_index:number;
	rotate:number;
	gray:boolean;
	flip_y:boolean;
	enable:boolean;
	scale:number;
	CustomString:string;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	Asset:string;
	static:boolean;
	click_scale:number;
	border:_OBJ__GUIBorder;
	click_opacity:number;
	layout:_OBJ__GUILayout;
	click_color:string;
	active_image:string;
	mask_image:string;
	image:string;
	color:string;
	low_level:boolean;
	effect_speed:number;
	round_corner_radius:number;
	enable_drop:boolean;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_unit_attr_panel_gui_ctrl_单位属性面板 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	bind_real_unit:Unit;
	mask_image:string;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	transition:_OBJ__GUITransition;
	Name:string;
	static:boolean;
	flip_x:boolean;
	low_level:boolean;
	CustomString:string;
	bind_unit:number;
	opacity:number;
	border:_OBJ__GUIBorder;
	enable_drop:boolean;
	image:string;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	gray:boolean;
	flip_y:boolean;
	color:string;
	enable:boolean;
	event:_OBJ__GUIEvent;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_normal_btn extends _OBJ__gui_ctrl_gui_ctrl{
	mask_image:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	image:string;
	flip_x:boolean;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	enable:boolean;
	Name:string;
	static:boolean;
	CustomString:string;
	text_color:string;
	color:string;
	transition:_OBJ__GUITransition;
	opacity:number;
	border:_OBJ__GUIBorder;
	gray:boolean;
	text_opacity:number;
	layout:_OBJ__GUILayout;
	z_index:number;
	active_image:string;
	round_corner_radius:number;
	enable_drop:boolean;
	flip_y:boolean;
	rotate:number;
	text:string;
	low_level:boolean;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_unit_attr_panel_gui_ctrl_单位属性 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	Name:string;
	image:string;
	attr_multiply:number;
	opacity:number;
	low_level:boolean;
	bind_attr:string;
	color:string;
	enable_drop:boolean;
	gray:boolean;
	font_family:string;
	flip_y:boolean;
	enable:boolean;
	scale:number;
	show_mode:number;
	CustomString:string;
	event:_OBJ__GUIEvent;
	cat_button_height:number;
	show:boolean;
	clip:boolean;
	icon:string;
	swallow_event:boolean;
	static:boolean;
	border:_OBJ__GUIBorder;
	font_color:string;
	layout:_OBJ__GUILayout;
	mask_image:string;
	flip_x:boolean;
	accuracy_display:number;
	transition:_OBJ__GUITransition;
	round_corner_radius:number;
	font_size:number;
	rotate:number;
	z_index:number;
	swallow_events:string;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_msgbox_btn extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	mask_image:string;
	image:string;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	flip_x:boolean;
	Name:string;
	static:boolean;
	enable:boolean;
	CustomString:string;
	color:string;
	transition:_OBJ__GUITransition;
	opacity:number;
	border:_OBJ__GUIBorder;
	gray:boolean;
	btn_image:string;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	enable_drop:boolean;
	flip_y:boolean;
	low_level:boolean;
	text:string;
	icon_image:string;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_simpleui_text extends _OBJ__gui_ctrl_gui_ctrl{
	mask_image:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	auto_line_feed:boolean;
	flip_x:boolean;
	show:boolean;
	clip:boolean;
	visiblity:boolean;
	swallow_event:boolean;
	swallow_events:string;
	Name:string;
	static:boolean;
	CustomString:string;
	font_size:number;
	transition:_OBJ__GUITransition;
	gray:boolean;
	opacity:number;
	border:_OBJ__GUIBorder;
	enable_drop:boolean;
	color:string;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	low_level:boolean;
	flip_y:boolean;
	can_be_clicked:boolean;
	enable:boolean;
	image:string;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_背包入口 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	Name:string;
	image:string;
	mask_image:string;
	static:boolean;
	flip_x:boolean;
	color:string;
	opacity:number;
	low_level:boolean;
	CustomString:string;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	enable_drop:boolean;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_多功能格子 extends _OBJ__gui_ctrl_gui_ctrl{
	show_bg:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	bind_item:Item;
	Name:string;
	transition:_OBJ__GUITransition;
	show_frame:boolean;
	opacity:number;
	low_level:boolean;
	can_use:boolean;
	color:string;
	enable_drop:boolean;
	gray:boolean;
	flip_y:boolean;
	enable:boolean;
	bind_loot_link:IdPreset<"loot_id">;
	show_tips:boolean;
	CustomString:string;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	static:boolean;
	border:_OBJ__GUIBorder;
	layout:_OBJ__GUILayout;
	mask_image:string;
	scale:number;
	flip_x:boolean;
	bind_item_link:IdPreset<"item_id">;
	show_num:boolean;
	round_corner_radius:number;
	rotate:number;
	z_index:number;
	image:string;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_自定义背包面板 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	mask_image:string;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	inv_link:string;
	Name:string;
	static:boolean;
	image:string;
	flip_x:boolean;
	border:_OBJ__GUIBorder;
	CustomString:string;
	opacity:number;
	low_level:boolean;
	enable_drop:boolean;
	enable_drag:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	gray:boolean;
	flip_y:boolean;
	color:string;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	drop_mode:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_msgbox extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	on_yes:(this: void, )=>void;
	Name:string;
	image:string;
	msgbox_text:string;
	opacity:number;
	low_level:boolean;
	z_index:number;
	enable_drop:boolean;
	gray:boolean;
	is_show_icon:boolean;
	flip_y:boolean;
	enable:boolean;
	scale:number;
	CustomString:string;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	static:boolean;
	mask_image:string;
	border:_OBJ__GUIBorder;
	on_cancel:(this: void, )=>void;
	flip_x:boolean;
	layout:_OBJ__GUILayout;
	msgbox_image:string;
	msgbox_icon_image:string;
	on_no:(this: void, )=>void;
	on_press_btn:(this: void, )=>void;
	round_corner_radius:number;
	rotate:number;
	style:number;
	transition:_OBJ__GUITransition;
	color:string;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_game_options_gui_ctrl_设置按钮 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	mask_image:string;
	Name:string;
	static:boolean;
	scale:number;
	flip_x:boolean;
	image:string;
	CustomString:string;
	opacity:number;
	low_level:boolean;
	enable_drop:boolean;
	border:_OBJ__GUIBorder;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	gray:boolean;
	flip_y:boolean;
	color:string;
	enable:boolean;
	transition:_OBJ__GUITransition;
	show_localization_panel:boolean;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_施法进度条 extends _OBJ__gui_ctrl_gui_ctrl{
	mask_image:string;
	progress_bg_image:string;
	event:_OBJ__GUIEvent;
	image:string;
	flip_x:boolean;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	complete_delay:number;
	Name:string;
	static:boolean;
	CustomString:string;
	rotate:number;
	transition:_OBJ__GUITransition;
	gray:boolean;
	opacity:number;
	border:_OBJ__GUIBorder;
	break_delay:number;
	enable_drop:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	progress_bar_image:string;
	round_corner_radius:number;
	color:string;
	flip_y:boolean;
	low_level:boolean;
	enable:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_progress extends _OBJ__gui_ctrl_gui_ctrl{
	progress_image:string;
	default_name_width:number;
	progress_bg_image:string;
	name_height_prop:number;
	Name:string;
	transition:_OBJ__GUITransition;
	opacity:number;
	low_level:boolean;
	is_merge_text:boolean;
	name_show:boolean;
	progress_type:string;
	z_index:number;
	default_box_margin:number;
	name_width_prop:number;
	flip_y:boolean;
	enable:boolean;
	is_name_show_real:boolean;
	mask_image:string;
	CustomString:string;
	event:_OBJ__GUIEvent;
	name_width:number;
	scale:number;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	flip_x:boolean;
	value_max:number;
	static:boolean;
	gray:boolean;
	enable_drop:boolean;
	name_pos_prop:string;
	color:string;
	layout:_OBJ__GUILayout;
	border:_OBJ__GUIBorder;
	progress_text_show:boolean;
	rotate:number;
	progress_width:number;
	round_corner_radius:number;
	value:number;
	progress_height:number;
	is_name_show:boolean;
	progress_color:string;
	progress_bg_color:string;
	description:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	image:string;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_选项图标 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	Name:string;
	image:string;
	mask_image:string;
	static:boolean;
	flip_x:boolean;
	color:string;
	opacity:number;
	low_level:boolean;
	CustomString:string;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	enable_drop:boolean;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_中止施法区域 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	Name:string;
	image:string;
	mask_image:string;
	static:boolean;
	flip_x:boolean;
	color:string;
	opacity:number;
	low_level:boolean;
	CustomString:string;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	enable_drop:boolean;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_attachable_panel extends _OBJ__gui_ctrl_gui_ctrl{
	mask_image:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	hide_on_unit_invisible:boolean;
	socket_name:string;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	image:string;
	Name:string;
	static:boolean;
	flip_x:boolean;
	scale_by_distance:boolean;
	CustomString:string;
	color:string;
	opacity:number;
	border:_OBJ__GUIBorder;
	transition:_OBJ__GUITransition;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	enable_drop:boolean;
	flip_y:boolean;
	low_level:boolean;
	enable:boolean;
	_attach_unit:Unit;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_timershow extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	Name:string;
	image:string;
	mask_image:string;
	static:boolean;
	flip_x:boolean;
	color:string;
	opacity:number;
	low_level:boolean;
	CustomString:string;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	enable_drop:boolean;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_移动摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	slider_size:number;
	slow_rate:number;
	Name:string;
	transition:_OBJ__GUITransition;
	vj_is_release_reset:boolean;
	vj_press_region_type:number;
	slider_bg_image:string;
	is_main_slider:boolean;
	z_index:number;
	rotate:number;
	vj_auto_move:boolean;
	flip_y:boolean;
	vj_move_radius:number;
	enable:boolean;
	scale:number;
	mask_image:string;
	flip_x:boolean;
	vj_stop_percent:number;
	CustomString:string;
	event:_OBJ_lib_control_移动摇杆GUIEvent;
	image:string;
	gray:boolean;
	slider_image:string;
	vj_is_press_center:boolean;
	toggle_show:boolean;
	swallow_event:boolean;
	enable_drop:boolean;
	color:string;
	static:boolean;
	slider_mini_image:string;
	slider_relative_x:number;
	round_corner_radius:number;
	vj_toggle_show:boolean;
	vj_active_percent:number;
	border:_OBJ__GUIBorder;
	low_level:boolean;
	opacity:number;
	layout:_OBJ__GUILayout;
	vj_move_ratio:number;
	vj_slider_height:number;
	vj_is_main_slider:boolean;
	vj_slow_percent:number;
	vj_slider_width:number;
	slider_relative_y:number;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_关闭面板 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	Name:string;
	image:string;
	mask_image:string;
	static:boolean;
	flip_x:boolean;
	color:string;
	opacity:number;
	low_level:boolean;
	CustomString:string;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	enable_drop:boolean;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_mail_gui_ctrl_邮件按钮 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	Name:string;
	image:string;
	mask_image:string;
	static:boolean;
	flip_x:boolean;
	color:string;
	opacity:number;
	low_level:boolean;
	CustomString:string;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	enable_drop:boolean;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_技能摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	outer_ratio:number;
	skill_disable:string;
	active_percent:number;
	Name:string;
	transition:_OBJ__GUITransition;
	skill_icon_mask:string;
	skill_cool:string;
	opacity:number;
	low_level:boolean;
	cast_slider_panel:string;
	cast_slider:string;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	flip_y:boolean;
	enable:boolean;
	scale:number;
	vj_panel_crop_margin:number;
	skill_locked:string;
	CustomString:string;
	event:_OBJ_lib_control_技能摇杆GUIEvent;
	mask_image:string;
	show:boolean;
	clip:boolean;
	skill_normal:string;
	swallow_event:boolean;
	flip_x:boolean;
	center_ratio:number;
	static:boolean;
	gray:boolean;
	can_press_on_cool:boolean;
	enable_drop:boolean;
	color:string;
	press_region_type:number;
	border:_OBJ__GUIBorder;
	shortcut_key_bg:string;
	cast_slider_panel_disable:string;
	layout:_OBJ__GUILayout;
	vj_panel_scale:number;
	skill_charge_cool:string;
	is_vj_center:boolean;
	skill_click:string;
	skill_toggleon:string;
	skill_stack_bg:string;
	skill:Skill;
	swallow_events:string;
	image:string;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_Buff图标 extends _OBJ__gui_ctrl_gui_ctrl{
	buff_margin:number;
	children:Array<IdPreset<"gui_ctrl_id">>;
	buff_width:number;
	Name:string;
	image:string;
	buff_height:number;
	low_level:boolean;
	color:string;
	enable_drop:boolean;
	gray:boolean;
	buff_icon:string;
	buff_bg_none_color:string;
	scale:number;
	buff:Buff;
	buff_bg_neg_color:string;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	buff_neg_progress_type:string;
	static:boolean;
	mask_image:string;
	buff_bg_pos_color:string;
	flip_x:boolean;
	enable:boolean;
	border:_OBJ__GUIBorder;
	CustomString:string;
	flip_y:boolean;
	layout:_OBJ__GUILayout;
	transition:_OBJ__GUITransition;
	event:_OBJ__GUIEvent;
	buff_pos_progress_type:string;
	rotate:number;
	round_corner_radius:number;
	font_size:number;
	z_index:number;
	buff_none_progress_type:string;
	opacity:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	vj_main_image:string;
	Name:string;
	image:string;
	vj_is_release_reset:boolean;
	vj_relative_y:number;
	opacity:number;
	low_level:boolean;
	color:string;
	rotate:number;
	round_corner_radius:number;
	vj_bg_toggle_show:boolean;
	vj_size:number;
	enable:boolean;
	scale:number;
	vj_main_move_ratio:number;
	event:_OBJ_lib_control_移动摇杆GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	vj_main_size:number;
	vj_main_move_radius:number;
	mask_image:string;
	flip_x:boolean;
	CustomString:string;
	vj_active_percent:number;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	vj_is_press_center:boolean;
	layout:_OBJ__GUILayout;
	gray:boolean;
	enable_drop:boolean;
	vj_bg_image:string;
	vj_press_region_type:number;
	z_index:number;
	vj_main_toggle_show:boolean;
	vj_relative_x:number;
	transition:_OBJ__GUITransition;
	static:boolean;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_自定义背包格子 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	mask_image:string;
	Name:string;
	static:boolean;
	image:string;
	flip_x:boolean;
	border:_OBJ__GUIBorder;
	CustomString:string;
	opacity:number;
	low_level:boolean;
	enable_drop:boolean;
	enable_drag:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	gray:boolean;
	flip_y:boolean;
	color:string;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	drop_mode:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_整体面板 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	Name:string;
	image:string;
	mask_image:string;
	static:boolean;
	flip_x:boolean;
	color:string;
	opacity:number;
	low_level:boolean;
	CustomString:string;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	enable_drop:boolean;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_选项 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	Name:string;
	image:string;
	mask_image:string;
	static:boolean;
	flip_x:boolean;
	color:string;
	opacity:number;
	low_level:boolean;
	CustomString:string;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	enable_drop:boolean;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_normal_rect extends _OBJ__gui_ctrl_gui_ctrl{
	mask_image:string;
	image:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	decoration_layout_left:_OBJ__GUILayout;
	flip_x:boolean;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	style:string;
	Name:string;
	static:boolean;
	CustomString:string;
	flip_y:boolean;
	transition:_OBJ__GUITransition;
	gray:boolean;
	opacity:number;
	border:_OBJ__GUIBorder;
	enable_drop:boolean;
	color:string;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	low_level:boolean;
	is_decoration:boolean;
	decoration_layout_right:_OBJ__GUILayout;
	enable:boolean;
	decoration_image:string;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_选择面板 extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	Name:string;
	image:string;
	mask_image:string;
	static:boolean;
	flip_x:boolean;
	color:string;
	opacity:number;
	low_level:boolean;
	CustomString:string;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	border:_OBJ__GUIBorder;
	flip_y:boolean;
	enable_drop:boolean;
	enable:boolean;
	transition:_OBJ__GUITransition;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_simpleui_picture extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	mask_image:string;
	image:string;
	show:boolean;
	clip:boolean;
	visiblity:boolean;
	swallow_event:boolean;
	flip_x:boolean;
	Name:string;
	static:boolean;
	low_level:boolean;
	CustomString:string;
	layout:_OBJ__GUILayout;
	transition:_OBJ__GUITransition;
	opacity:number;
	border:_OBJ__GUIBorder;
	gray:boolean;
	enable_drop:boolean;
	zoom_type:string;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	color:string;
	flip_y:boolean;
	can_be_clicked:boolean;
	enable:boolean;
	swallow_events:string;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_simpleui_button extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	mask_image:string;
	image:string;
	show:boolean;
	clip:boolean;
	visiblity:boolean;
	swallow_event:boolean;
	flip_x:boolean;
	Name:string;
	static:boolean;
	enable:boolean;
	CustomString:string;
	low_level:boolean;
	transition:_OBJ__GUITransition;
	opacity:number;
	border:_OBJ__GUIBorder;
	gray:boolean;
	enable_drop:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	color:string;
	flip_y:boolean;
	can_be_clicked:boolean;
	text:string;
	swallow_events:string;
	scale:number;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_btn_icon extends _OBJ__gui_ctrl_gui_ctrl{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	mask_image:string;
	scale:number;
	show:boolean;
	clip:boolean;
	icon:string;
	swallow_event:boolean;
	flip_x:boolean;
	Name:string;
	static:boolean;
	swallow_events:string;
	is_on:boolean;
	CustomString:string;
	color:string;
	opacity:number;
	border:_OBJ__GUIBorder;
	transition:_OBJ__GUITransition;
	gray:boolean;
	layout:_OBJ__GUILayout;
	z_index:number;
	rotate:number;
	round_corner_radius:number;
	enable_drop:boolean;
	flip_y:boolean;
	low_level:boolean;
	enable:boolean;
	image:string;
	is_switch:boolean;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_Buff列表 extends _OBJ__gui_ctrl_gui_ctrl{
	buff_margin:number;
	children:Array<IdPreset<"gui_ctrl_id">>;
	default_none_cnt:number;
	buff_width:number;
	Name:string;
	default_neg_cnt:number;
	opacity:number;
	low_level:boolean;
	color:string;
	enable_drop:boolean;
	gray:boolean;
	buff_icon:string;
	enable:boolean;
	buff_icon_template:string;
	buff_polarity:string;
	CustomString:string;
	event:_OBJ__GUIEvent;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	static:boolean;
	unit:Unit;
	mask_image:string;
	border:_OBJ__GUIBorder;
	scale:number;
	flip_x:boolean;
	layout:_OBJ__GUILayout;
	flip_y:boolean;
	buff_height:number;
	default_pos_cnt:number;
	buff_cat_filter:string;
	image:string;
	round_corner_radius:number;
	rotate:number;
	z_index:number;
	transition:_OBJ__GUITransition;
	enable_drag:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_inventory_config_Inventory_Config extends _OBJ__inventory_config_inventory_config{
	V2Special:boolean;
	ShowQuickBarLock:boolean;
	ShowCharacter:boolean;
	TypeFilters:Array<IdPreset<"item_class_id">>;
	Character:string;
	InteractRange:number;
	Name:string;
	EnableInGameInventory:boolean;
	ShowQuickBarCollapse:boolean;
	Special:string;
	ShowDefaultEntrance:boolean;
	Filters:Array<IdPreset<"item_class_id">>;
	ShowDropArea:boolean;
	QualityColor:Array<undefined>;
	EquipTypes:Array<IdPreset<"item_class_id">>;
	EnableInteract:boolean;
	Default_Frame:string;
	EquipAttributeFormat:Array<_OBJ_smallcard_inventory_EquipAttributeFormat>;
	Link:IdPreset<"inventory_config_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_inventory_config_Quality_Color extends _OBJ__inventory_config_inventory_config{
	Background:string;
	ActorArray:Array<IdPreset<"actor_id">>;
	Frame:string;
	Name:string;
	Color:string;
	ClassLink:IdPreset<"item_class_id">;
	Link:IdPreset<"inventory_config_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_challenge_Challenge extends _OBJ__custom_challenge_custom_challenge{
	Name:string;
	Describe:string;
	SubChallenge:Array<undefined>;
	Link:IdPreset<"custom_challenge_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_challenge_SubChallenge extends _OBJ__custom_challenge_custom_challenge{
	RaidName:string;
	Repeat:boolean;
	Require:Array<_OBJ_busiyixiantu_5n1b_ChallengeRequire>;
	Describe:string;
	Transmit:boolean;
	Victory:Array<_OBJ_busiyixiantu_5n1b_VictoryCondition>;
	Raid:string;
	Name:string;
	Cost:Array<_OBJ_busiyixiantu_5n1b_ChallengeCost>;
	Award:Array<_OBJ_busiyixiantu_5n1b_ChallengeAward>;
	Wave:IdPreset<"wave_id">;
	Link:IdPreset<"custom_challenge_id">;
	/** @noSelf */
	Position:(this: void)=>Point
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_grow_Grow extends _OBJ__custom_grow_custom_grow{
	KillGrow:_OBJ_busiyixiantu_5n1b_killGrow;
	LevelGrow:_OBJ_busiyixiantu_5n1b_levelGrow;
	Name:string;
	TimeGrow:_OBJ_busiyixiantu_5n1b_timeGrow;
	Link:IdPreset<"custom_grow_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_地图数据_升仙令 extends _OBJ__rpg_地图数据_rpg_地图数据{
	Icon:string;
	Name:string;
	KillCount:number;
	Link:IdPreset<"rpg_地图数据_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_地图数据_Array_数编_技能id extends _OBJ__rpg_地图数据_rpg_地图数据{
	Name:string;
	skillIdList:Array<unknown>;
	Link:IdPreset<"rpg_地图数据_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_地图数据_属性兑换 extends _OBJ__rpg_地图数据_rpg_地图数据{
	kill:Array<_OBJ_busiyixiantu_5n1b_kill>;
	Name:string;
	coin:Array<_OBJ_busiyixiantu_5n1b_coin>;
	Link:IdPreset<"rpg_地图数据_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_地图数据_Array_数编_单位id extends _OBJ__rpg_地图数据_rpg_地图数据{
	Name:string;
	unitIdList:Array<unknown>;
	Link:IdPreset<"rpg_地图数据_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_challenge_wave_rpgWave extends _OBJ__rpg_challenge_wave_rpg_challenge_wave{
	Name:string;
	rpgSubWave:Array<undefined>;
	Link:IdPreset<"rpg_challenge_wave_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_challenge_wave_rpgSubWave extends _OBJ__rpg_challenge_wave_rpg_challenge_wave{
	CreateRange:number;
	CreateFacing:number;
	Name:string;
	Delay:number;
	Position:Array<(this: void, )=>Point>;
	IsTask:boolean;
	MaxNumber:number;
	Unit:IdPreset<"unit_id">;
	Number:number;
	Link:IdPreset<"rpg_challenge_wave_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_challenge_rpgChallenge extends _OBJ__rpg_challenge_rpg_challenge{
	AutoExit:boolean;
	CameraFollow:boolean;
	Describe:string;
	Name:string;
	AutoDelay:number;
	AutoNext:boolean;
	rpgSubChallenge:Array<undefined>;
	PlayerPosition:Array<(this: void, )=>Point>;
	UseSceneCopy:boolean;
	Link:IdPreset<"rpg_challenge_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_rpg_challenge_rpgSubChallenge extends _OBJ__rpg_challenge_rpg_challenge{
	PlayerPosition:Array<(this: void, )=>Point>;
	AwardAttr:Array<_OBJ__KeyValueAttribute>;
	Wave:Array<undefined>;
	Describe:string;
	TaskScene:Array<Scene>;
	AwardItem:Array<_OBJ_busiyixiantu_5n1b_ChallengeAward>;
	AwardBuff:Array<IdPreset<"buff_id">>;
	Name:string;
	AwardEffect:Array<IdPreset<"effect_id">>;
	RaidName:string;
	Link:IdPreset<"rpg_challenge_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_wave_wave extends _OBJ__custom_wave_custom_wave{
	Loop:boolean;
	Clear:boolean;
	Name:string;
	SubWave:Array<undefined>;
	LoopWait:number;
	Link:IdPreset<"custom_wave_id">;
	constructor()
}
declare class _OBJ_busiyixiantu_5n1b_custom_wave_SubWave extends _OBJ__custom_wave_custom_wave{
	Name:string;
	Unit:IdPreset<"unit_id">;
	Delay:number;
	Pulse:number;
	AutoScene:boolean;
	Number:number;
	Link:IdPreset<"custom_wave_id">;
	/** @noSelf */
	Position:(this: void)=>Point
	/** @noSelf */
	Line:(this: void)=>Line
	constructor()
}
declare class _OBJ_smallcard_get_items_link_node_LinkNodeLobbyResource extends _OBJ__link_node_LinkNode{
	Name:string;
	IsArray:boolean;
	Value:IdPreset<"lobby_resource_id">;
	Array:Array<IdPreset<"lobby_resource_id">>;
	Link:IdPreset<"link_node_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_ResourceTicket extends _OBJ_smallcard_get_items_lobby_resource_Lobby_Resource{
	TicketName:string;
	SmallIcon:string;
	TokenName:string;
	IdName:string;
	Icon:string;
	PerLastCount:number;
	Rare:number;
	Desc:string;
	Name:string;
	LobbyResourceType:_OBJ_smallcard_get_items_LobbyResourceType;
	ItemType:IdPreset<"item_id">;
	PerLastTime:number;
	Count:number;
	CustomParams:Array<IdPreset<"link_node_id">>;
	Link:IdPreset<"lobby_resource_id">;
	/** @noSelf */
	CustomGetHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>boolean
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_选项描述 extends _OBJ__gui_ctrl_label{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	enable_drag:boolean;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	static:boolean;
	Name:string;
	transition:_OBJ__GUITransition;
	image:string;
	text:string;
	font:_OBJ__Font;
	border:_OBJ__GUIBorder;
	opacity:number;
	flip_x:boolean;
	enable_drop:boolean;
	round_corner_radius:number;
	layout:_OBJ__GUILayout;
	color:string;
	rotate:number;
	gray:boolean;
	z_index:number;
	flip_y:boolean;
	low_level:boolean;
	enable:boolean;
	CustomString:string;
	scale:number;
	mask_image:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_确认按钮 extends _OBJ__gui_ctrl_label{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	enable_drag:boolean;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	static:boolean;
	Name:string;
	transition:_OBJ__GUITransition;
	image:string;
	text:string;
	font:_OBJ__Font;
	border:_OBJ__GUIBorder;
	opacity:number;
	flip_x:boolean;
	enable_drop:boolean;
	round_corner_radius:number;
	layout:_OBJ__GUILayout;
	color:string;
	rotate:number;
	gray:boolean;
	z_index:number;
	flip_y:boolean;
	low_level:boolean;
	enable:boolean;
	CustomString:string;
	scale:number;
	mask_image:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_choose_one_gui_ctrl_N选1_选项名称 extends _OBJ__gui_ctrl_label{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	enable_drag:boolean;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	static:boolean;
	Name:string;
	transition:_OBJ__GUITransition;
	image:string;
	text:string;
	font:_OBJ__Font;
	border:_OBJ__GUIBorder;
	opacity:number;
	flip_x:boolean;
	enable_drop:boolean;
	round_corner_radius:number;
	layout:_OBJ__GUILayout;
	color:string;
	rotate:number;
	gray:boolean;
	z_index:number;
	flip_y:boolean;
	low_level:boolean;
	enable:boolean;
	CustomString:string;
	scale:number;
	mask_image:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_transition_label extends _OBJ__gui_ctrl_label{
	children:Array<IdPreset<"gui_ctrl_id">>;
	event:_OBJ__GUIEvent;
	enable_drag:boolean;
	static:boolean;
	show:boolean;
	clip:boolean;
	swallow_events:string;
	swallow_event:boolean;
	image:string;
	Name:string;
	transition:_OBJ__GUITransition;
	text:string;
	font:_OBJ__Font;
	border:_OBJ__GUIBorder;
	enable_drop:boolean;
	opacity:number;
	flip_x:boolean;
	round_corner_radius:number;
	rotate:number;
	layout:_OBJ__GUILayout;
	color:string;
	number_transition:_OBJ__GUITransitionSubType;
	gray:boolean;
	z_index:number;
	flip_y:boolean;
	low_level:boolean;
	enable:boolean;
	CustomString:string;
	scale:number;
	mask_image:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare const enum _OBJ__Unit_Filter {
	["自动复活"] = "自动复活",
}
declare const enum _OBJ__BuffCategory {
	["负面效果"] = "负面效果",
	["持续性治疗"] = "持续性治疗",
	["正面效果"] = "正面效果",
	["位移效果"] = "位移效果",
	["控制效果"] = "控制效果",
	["持续性伤害"] = "持续性伤害",
}
declare const enum _OBJ__UnitPropertySubTypeEx {
}
declare const enum _OBJ__KeyValueAttribute_Key {
	["基础战斗力"] = "基础战斗力",
	["额外神念"] = "额外神念",
	["攻击后摇"] = "攻击后摇",
	["固定减伤B1"] = "固定减伤B1",
	["生命值修正"] = "生命值修正",
	["防御力修正"] = "防御力修正",
	["额外生命值"] = "额外生命值",
	["攻击力修正"] = "攻击力修正",
	["攻击前摇"] = "攻击前摇",
	["基础根骨"] = "基础根骨",
	["金币"] = "金币",
	["攻击系数"] = "攻击系数",
	["固定减伤B2"] = "固定减伤B2",
	["固定减伤A1"] = "固定减伤A1",
	["护甲减免"] = "护甲减免",
	["额外攻击力"] = "额外攻击力",
	["白盾减伤"] = "白盾减伤",
	["额外身法"] = "额外身法",
	["固定减伤A2"] = "固定减伤A2",
	["基础魔法值"] = "基础魔法值",
	["复活时间"] = "复活时间",
	["魔法值修正"] = "魔法值修正",
	["普攻伤害"] = "普攻伤害",
	["战斗力增幅"] = "战斗力增幅",
	["基础生命值"] = "基础生命值",
	["基础防御力"] = "基础防御力",
	["额外根骨"] = "额外根骨",
	["额外魔法值"] = "额外魔法值",
	["基础攻击力"] = "基础攻击力",
	["基础神念"] = "基础神念",
	["基础身法"] = "基础身法",
}
declare const enum _OBJ__DamageType {
	["普通攻击"] = "普通攻击",
}
declare const enum _OBJ__PlayerAttribute {
	["根骨增幅"] = "根骨增幅",
	["法术爆伤"] = "法术爆伤",
	["攻击速度"] = "攻击速度",
	["生命增幅"] = "生命增幅",
	["杀敌攻击"] = "杀敌攻击",
	["根骨"] = "根骨",
	["物理爆伤"] = "物理爆伤",
	["装备爆率"] = "装备爆率",
	["每秒生命"] = "每秒生命",
	["额外练功怪数量"] = "额外练功怪数量",
	["最终伤害增幅"] = "最终伤害增幅",
	["额外杀敌"] = "额外杀敌",
	["攻击急速"] = "攻击急速",
	["刷怪效率"] = "刷怪效率",
	["主属性"] = "主属性",
	["法术暴击率"] = "法术暴击率",
	["生命恢复"] = "生命恢复",
	["最终法爆增幅"] = "最终法爆增幅",
	["额外经验"] = "额外经验",
	["每秒根骨"] = "每秒根骨",
	["身法增幅"] = "身法增幅",
	["每秒防御"] = "每秒防御",
	["伤害抵挡"] = "伤害抵挡",
	["物理收益"] = "物理收益",
	["法术收益"] = "法术收益",
	["最终身法"] = "最终身法",
	["每秒身法"] = "每秒身法",
	["伤害加成"] = "伤害加成",
	["法术伤害"] = "法术伤害",
	["最终法穿增幅"] = "最终法穿增幅",
	["杀敌神念"] = "杀敌神念",
	["最终物爆增幅"] = "最终物爆增幅",
	["最终物穿增幅"] = "最终物穿增幅",
	["神念增幅"] = "神念增幅",
	["物理伤害"] = "物理伤害",
	["最终伤害"] = "最终伤害",
	["攻击回血"] = "攻击回血",
	["身法"] = "身法",
	["普攻伤害"] = "普攻伤害",
	["每秒攻击"] = "每秒攻击",
	["攻击力增幅"] = "攻击力增幅",
	["伤害增幅"] = "伤害增幅",
	["最终普攻增幅"] = "最终普攻增幅",
	["最终生命增幅"] = "最终生命增幅",
	["每秒神念"] = "每秒神念",
	["杀敌根骨"] = "杀敌根骨",
	["杀敌生命"] = "杀敌生命",
	["神念"] = "神念",
	["杀敌身法"] = "杀敌身法",
	["技能急速"] = "技能急速",
	["最终技能增幅"] = "最终技能增幅",
	["伤害躲避"] = "伤害躲避",
	["技能输出"] = "技能输出",
	["最终根骨"] = "最终根骨",
	["魔法增幅"] = "魔法增幅",
	["幸运值"] = "幸运值",
	["最终神念"] = "最终神念",
	["额外金币"] = "额外金币",
	["最终魔法增幅"] = "最终魔法增幅",
}
declare const enum _OBJ__SpellAttribute_Key {
}
declare const enum _OBJ__AbilCategory {
}
declare const enum _OBJ__Spell_attack_speed_attribute {
	["基础战斗力"] = "基础战斗力",
	["额外神念"] = "额外神念",
	["攻击后摇"] = "攻击后摇",
	["固定减伤B1"] = "固定减伤B1",
	["生命值修正"] = "生命值修正",
	["防御力修正"] = "防御力修正",
	["额外生命值"] = "额外生命值",
	["攻击力修正"] = "攻击力修正",
	["攻击前摇"] = "攻击前摇",
	["基础根骨"] = "基础根骨",
	["金币"] = "金币",
	["攻击系数"] = "攻击系数",
	["固定减伤B2"] = "固定减伤B2",
	["固定减伤A1"] = "固定减伤A1",
	["护甲减免"] = "护甲减免",
	["额外攻击力"] = "额外攻击力",
	["白盾减伤"] = "白盾减伤",
	["额外身法"] = "额外身法",
	["固定减伤A2"] = "固定减伤A2",
	["基础魔法值"] = "基础魔法值",
	["复活时间"] = "复活时间",
	["魔法值修正"] = "魔法值修正",
	["普攻伤害"] = "普攻伤害",
	["战斗力增幅"] = "战斗力增幅",
	["额外魔法值"] = "额外魔法值",
	["基础攻击力"] = "基础攻击力",
	["额外根骨"] = "额外根骨",
	["基础神念"] = "基础神念",
	["基础生命值"] = "基础生命值",
	["基础身法"] = "基础身法",
	["基础防御力"] = "基础防御力",
}
declare const enum _OBJ__UnitAttribute {
	["基础战斗力"] = "基础战斗力",
	["额外神念"] = "额外神念",
	["攻击后摇"] = "攻击后摇",
	["固定减伤B1"] = "固定减伤B1",
	["生命值修正"] = "生命值修正",
	["防御力修正"] = "防御力修正",
	["额外生命值"] = "额外生命值",
	["攻击力修正"] = "攻击力修正",
	["攻击前摇"] = "攻击前摇",
	["基础根骨"] = "基础根骨",
	["金币"] = "金币",
	["攻击系数"] = "攻击系数",
	["固定减伤B2"] = "固定减伤B2",
	["固定减伤A1"] = "固定减伤A1",
	["护甲减免"] = "护甲减免",
	["额外攻击力"] = "额外攻击力",
	["白盾减伤"] = "白盾减伤",
	["额外身法"] = "额外身法",
	["固定减伤A2"] = "固定减伤A2",
	["基础魔法值"] = "基础魔法值",
	["复活时间"] = "复活时间",
	["魔法值修正"] = "魔法值修正",
	["普攻伤害"] = "普攻伤害",
	["战斗力增幅"] = "战斗力增幅",
	["基础生命值"] = "基础生命值",
	["基础防御力"] = "基础防御力",
	["额外根骨"] = "额外根骨",
	["额外魔法值"] = "额外魔法值",
	["基础攻击力"] = "基础攻击力",
	["基础神念"] = "基础神念",
	["基础身法"] = "基础身法",
}
declare const enum _OBJ_smallcard_get_items_LobbyResourceType {
}
declare const enum _OBJ__GameOptionUIItem_DataType {
}
declare const enum _OBJ_smallcard_inventory_AttributeFormat {
}
declare const enum _OBJ_busiyixiantu_5n1b_VictoryType {
}
