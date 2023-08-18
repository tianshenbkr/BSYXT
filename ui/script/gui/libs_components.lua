-- THIS FILE IS AUTO-GENERATED, MIGHT BE OVERWRITTEN BY GUI-EDITOR
local components = {}
components['$$smallcard_unit_attr_panel.template@gui_ctrl.单位属性'] = {url = '@smallcard_unit_attr_panel.component', com_name = '单位属性', template = {
	font_color = '#FFFFFF',
	name = 'GUI控件',
	layout = {
	height = 48,
	row_content = 'start',
	direction = 'row',
	width = -1,
},
	bind_attr = '生命上限',
	attr_multiply = 1,
	accuracy_display = 0,
	font_size = 30,
	show_mode = 0,
	cat_button_height = 132,
	icon = '@smallcard_unit_attr_panel/image/属性icon.png',
	font_family = 'Regular',
}}
components['$$smallcard_unit_attr_panel.template@gui_ctrl.单位属性面板'] = {url = '@smallcard_unit_attr_panel.component', com_name = '单位属性面板', template = {
	layout = {
	col_self = 'center',
	row_self = 'center',
	grow_height = 1,
	grow_width = 1,
},
	name = 'GUI控件',
	bind_unit = 0,
}}
components['$$gameui.template@gui_ctrl.active_button'] = {url = '@gameui.component', com_name = 'active_button', template = {
	Asset = '',
	name = '动态按钮',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	click_scale = 0.85,
	color = '#FFFFFF',
}}
components['$$gameui.template@gui_ctrl.attachable_panel'] = {url = '@gameui.component', com_name = 'attachable_panel', template = {
	name = 'GUI控件',
	layout = {
	width = 100,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	hide_on_unit_invisible = false,
	scale_by_distance = false,
	socket_name = 'socket_root',
}}
components['$$gameui.template@gui_ctrl.btn_icon'] = {url = '@gameui.component', com_name = 'btn_icon', template = {
	icon = 'image/btn/sword.png',
	is_switch = false,
	name = 'GUI控件',
	layout = {
	width = 100,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	is_on = false,
}}
components['$$gameui.template@gui_ctrl.Buff列表'] = {url = '@gameui.component', com_name = 'Buff列表', template = {
	buff_cat_filter = '可被禁用;负面效果',
	name = 'GUI控件',
	default_pos_cnt = 3,
	buff_icon_template = '@gameui.prefab.buff.buff_icon',
	buff_width = 64,
	buff_icon = 'image/msgbox/btn_1.png',
	buff_polarity = '正面;负面;无',
	default_none_cnt = 3,
	buff_height = 64,
	default_neg_cnt = 3,
	buff_margin = 7,
}}
components['$$gameui.template@gui_ctrl.Buff图标'] = {url = '@gameui.component', com_name = 'Buff图标', template = {
	name = 'GUI控件',
	buff_bg_pos_color = 'rgb(52, 180, 31)',
	buff_neg_progress_type = 'clockwise',
	font_size = 24,
	buff_bg_neg_color = 'rgb(231, 67, 57)',
	buff_margin = 7,
	buff_icon = 'image/buff/buff_1.png',
	buff_bg_none_color = 'rgb(154, 154, 154)',
	buff_width = 64,
	buff_height = 64,
	buff_pos_progress_type = 'clockwise',
	buff_none_progress_type = 'clockwise',
}}
components['$$gameui.template@gui_ctrl.transition_label'] = {url = '@gameui.component', com_name = 'transition_label', template = {
	name = '动态文本',
	layout = {
	width = 500,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.normal_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 30,
	bottom = 30,
	left = 30,
	top = 30,
},
	active_image = 'image/btn/gf_1_major_active.png',
	name = '按钮-古风1-主要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/gf_1_major.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#ffffff',
}}
components['$$gameui.template@gui_ctrl.gf_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 30,
	bottom = 30,
	left = 30,
	top = 30,
},
	active_image = 'image/btn/gf_1_minor_active.png',
	name = '按钮-古风1-次要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/gf_1_minor.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#ffffff',
}}
components['$$gameui.template@gui_ctrl.normal_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-古风1.png',
	name = '面板-古风1',
	layout = {
	width = 400,
	row_self = 'start',
	height = 400,
	col_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
}}
components['$$gameui.template@gui_ctrl.gf_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 30,
	bottom = 30,
	left = 30,
	top = 30,
},
	active_image = 'image/btn/gf_2_major_active.png',
	name = '按钮-古风2-主要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/gf_2_major.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#ffffff',
}}
components['$$gameui.template@gui_ctrl.gf_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 30,
	bottom = 30,
	left = 30,
	top = 30,
},
	active_image = 'image/btn/gf_2_minor_active.png',
	name = '按钮-古风2-次要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/gf_2_minor.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#ffffff',
}}
components['$$gameui.template@gui_ctrl.gf_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-古风2.png',
	name = '面板-古风2',
	layout = {
	width = 400,
	row_self = 'start',
	height = 400,
	col_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
}}
components['$$gameui.template@gui_ctrl.gf_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 110,
	bottom = 0,
	left = 220,
	top = 0,
},
	active_image = 'image/btn/gf_3_major_active.png',
	name = '按钮-古风3-主要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/gf_3_major.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#ffffff',
}}
components['$$gameui.template@gui_ctrl.gf_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 110,
	bottom = 0,
	left = 220,
	top = 0,
},
	active_image = 'image/btn/gf_3_minor_active.png',
	name = '按钮-古风3-次要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/gf_3_minor.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#ffffff',
}}
components['$$gameui.template@gui_ctrl.gf_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = true,
	style = 'image/rect/面板-古风3.png',
	name = '面板-古风3',
	layout = {
	width = 400,
	row_self = 'start',
	height = 400,
	col_self = 'start',
},
	decoration_layout_right = {
	margin = {
	right = 6,
},
	row_self = 'end',
},
	decoration_image = 'image/rect/面板-古风3-花纹.png',
	decoration_layout_left = {
	margin = {
	left = 6,
},
	row_self = 'start',
},
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
}}
components['$$gameui.template@gui_ctrl.msgbox'] = {url = '@gameui.component', com_name = 'msgbox', template = {
	msgbox_icon_image = 'image/msgbox/icon_1.png',
	name = 'GUI控件',
	layout = {
	width = 600,
	row_self = 'start',
	height = 300,
	col_self = 'start',
},
	style = 3,
	msgbox_image = 'image/msgbox/msgbox_1.png',
	msgbox_text = '默认通知框文本',
	is_show_icon = true,
}}
components['$$gameui.template@gui_ctrl.msgbox_btn'] = {url = '@gameui.component', com_name = 'msgbox_btn', template = {
	btn_image = '@gameui/image/msgbox/btn_1.png',
	name = 'GUI控件',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	text = '默认',
	icon_image = '@gameui/image/msgbox/icon_1.png',
}}
components['$$gameui.template@gui_ctrl.progress'] = {url = '@gameui.component', com_name = 'progress', template = {
	is_merge_text = true,
	value = 50,
	name_pos_prop = 'left',
	name_width = 50,
	default_name_width = 50,
	progress_image = '',
	is_name_show = true,
	progress_bg_image = '',
	value_max = 100,
	name = 'GUI控件',
	progress_width = 250,
	description = 'ATK',
	is_name_show_real = true,
	progress_type = 'right',
	name_width_prop = 50,
	default_box_margin = 10,
	name_show = true,
	layout = {
	width = 250,
	row_self = 'start',
	height = 30,
	col_self = 'start',
},
	progress_bg_color = '#949494',
	progress_height = 20,
	progress_text_show = true,
	name_height_prop = 20,
	progress_color = '#ff0000',
}}
components['$$gameui.template@gui_ctrl.sci_1_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	active_image = 'image/btn/sci_1_major_active.png',
	name = '按钮-科技1-主要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/sci_1_major.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#000000',
}}
components['$$gameui.template@gui_ctrl.sci_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	active_image = 'image/btn/sci_1_minor_active.png',
	name = '按钮-科技1-次要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/sci_1_minor.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#000000',
}}
components['$$gameui.template@gui_ctrl.sci_1_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-科技1.png',
	name = '面板-科技1',
	layout = {
	width = 400,
	row_self = 'start',
	height = 400,
	col_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
}}
components['$$gameui.template@gui_ctrl.sci_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	active_image = 'image/btn/sci_2_major_active.png',
	name = '按钮-科技2-主要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/sci_2_major.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#13141E',
}}
components['$$gameui.template@gui_ctrl.sci_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	active_image = 'image/btn/sci_2_minor_active.png',
	name = '按钮-科技2-次要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/sci_2_minor.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#13141E',
}}
components['$$gameui.template@gui_ctrl.sci_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-科技2.png',
	name = '面板-科技2',
	layout = {
	width = 400,
	row_self = 'start',
	height = 400,
	col_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
}}
components['$$gameui.template@gui_ctrl.sci_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 0,
	bottom = 0,
	left = 0,
	top = 0,
},
	active_image = 'image/btn/sci_3_major_active.png',
	name = '按钮-科技3-主要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/sci_3_major.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#FFF8D7',
}}
components['$$gameui.template@gui_ctrl.sci_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 0,
	bottom = 0,
	left = 0,
	top = 0,
},
	active_image = 'image/btn/sci_3_minor_active.png',
	name = '按钮-科技3-次要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/sci_3_minor.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#CCCCCC',
}}
components['$$gameui.template@gui_ctrl.sci_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-科技3.png',
	name = '面板-科技3',
	layout = {
	width = 400,
	row_self = 'start',
	height = 400,
	col_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
}}
components['$$gameui.template@gui_ctrl.simpleui_button'] = {url = '@gameui.component', com_name = 'simpleui_button', template = {
	visiblity = true,
	name = 'GUI控件',
	layout = {
	width = 50,
	row_self = 'start',
	height = 50,
	col_self = 'start',
},
	can_be_clicked = true,
	text = '按钮',
	image = 'image/msgbox/btn_1.png',
}}
components['$$gameui.template@gui_ctrl.simpleui_picture'] = {url = '@gameui.component', com_name = 'simpleui_picture', template = {
	zoom_type = 'none',
	visiblity = true,
	name = 'GUI控件',
	layout = {
	width = 100,
	row_self = 'start',
	height = 50,
	col_self = 'start',
},
	can_be_clicked = true,
	image = 'image/msgbox/icon_1.png',
	opacity = 0,
}}
components['$$gameui.template@gui_ctrl.simpleui_text'] = {url = '@gameui.component', com_name = 'simpleui_text', template = {
	visiblity = true,
	name = 'GUI控件',
	layout = {
	width = 50,
	row_self = 'start',
	height = 50,
	col_self = 'start',
},
	can_be_clicked = true,
	auto_line_feed = true,
	font_size = 5,
}}
components['$$gameui.template@gui_ctrl.timershow'] = {url = '@gameui.component', com_name = 'timershow', template = {
	image = 'image/Bg_daojishi_di.png',
	name = 'GUI控件',
	layout = {
	width = -1,
	height = 56,
	direction = 'row',
	col_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.xf_1_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	active_image = 'image/btn/xf_1_major_active.png',
	name = '按钮-西方1-主要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/xf_1_major.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#FFFFFF',
}}
components['$$gameui.template@gui_ctrl.xf_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	active_image = 'image/btn/xf_1_minor_active.png',
	name = '按钮-西方1-次要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/xf_1_minor.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#FFFFFF',
}}
components['$$gameui.template@gui_ctrl.xf_1_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-西方1.png',
	name = '面板-西方1',
	layout = {
	width = 400,
	row_self = 'start',
	height = 400,
	col_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
}}
components['$$gameui.template@gui_ctrl.xf_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	active_image = 'image/btn/xf_2_major_active.png',
	name = '按钮-西方1-主要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/xf_2_major.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#2A2D3C',
}}
components['$$gameui.template@gui_ctrl.xf_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	active_image = 'image/btn/xf_2_minor_active.png',
	name = '按钮-西方2-次要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/xf_2_minor.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#FFFFFF',
}}
components['$$gameui.template@gui_ctrl.xf_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-西方2.png',
	name = '面板-西方2',
	layout = {
	width = 400,
	row_self = 'start',
	height = 400,
	col_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	border = {
	right = 128,
	bottom = 30,
	left = 128,
	top = 130,
},
}}
components['$$gameui.template@gui_ctrl.xf_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	active_image = 'image/btn/xf_3_major_active.png',
	name = '按钮-西方3-主要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/xf_3_major.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#FFFFFF',
}}
components['$$gameui.template@gui_ctrl.xf_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	active_image = 'image/btn/xf_3_minor_active.png',
	name = '按钮-西方3-次要',
	layout = {
	width = 250,
	row_self = 'start',
	height = 100,
	col_self = 'start',
},
	image = 'image/btn/xf_3_minor.png',
	text = '默认',
	text_opacity = 1,
	text_color = '#FFFFFF',
}}
components['$$gameui.template@gui_ctrl.xf_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-西方3.png',
	name = '面板-西方3',
	layout = {
	width = 400,
	row_self = 'start',
	height = 400,
	col_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
}}
components['$$lib_control.template@gui_ctrl.技能摇杆'] = {url = '@lib_control.component', com_name = '技能摇杆', template = {
	skill_click = '@defaultui/image/control/点击技能框.png',
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	skill_charge_cool = '@defaultui/image/control/开启技能框.png',
	vj_panel_crop_margin = -9999,
	vj_panel_scale = 1,
	center_ratio = 0.926,
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	outer_ratio = 1.022,
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	is_vj_center = true,
	skill_normal = '@defaultui/image/control/默认技能框2.png',
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	skill_cool = '@defaultui/image/control/冷却.png',
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	name = 'GUI控件',
	skill_stack_bg = '@defaultui/image/control/技能_等级.png',
	active_percent = 0.15,
	layout = {
	height = 150,
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	width = 150,
	row_self = 'end',
	col_self = 'end',
},
	press_region_type = 1,
	can_press_on_cool = true,
}}
components['$$lib_control.template@gui_ctrl.技能摇杆组'] = {url = '@lib_control.component', com_name = '技能摇杆组', template = {
	skill_click = '@defaultui/image/control/点击技能框.png',
	total_angle_delta = 120,
	base_y = -120,
	init_angle = -15,
	skill_normal = '@defaultui/image/control/默认技能框2.png',
	center_ratio = 0.926,
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	name = 'GUI控件',
	layout = {
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	grow_height = 1,
	row_self = 'end',
	grow_width = 0.5,
	col_self = 'end',
},
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	max_skill_count = 99,
	min_around_dis = 350,
	can_press_on_cool = true,
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	base_x = -150,
	vj_panel_scale = 1,
	outer_ratio = 1.022,
	skill_cool = '@defaultui/image/control/冷却.png',
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	auto_bind_key = true,
	button_size = 150,
	vj_panel_crop_margin = -9999,
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	skill_attack_normal = '@lib_control/image/control/Bth_ingame_gongjidi.png',
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	is_vj_center = true,
	skill_stack_bg = '@defaultui/image/control/技能_等级.png',
	active_percent = 0.15,
	attack_button_size = 250,
	press_region_type = 1,
	skill_charge_cool = '@defaultui/image/control/开启技能框.png',
}}
components['$$lib_control.template@gui_ctrl.lib_control_main'] = {url = '@@.gui.page.lib_control_main.component', is_page = true, template_url = '@@.gui.page.lib_control_main.template'}
components['$$lib_control.template@gui_ctrl.施法进度条'] = {url = '@lib_control.component', com_name = '施法进度条', template = {
	progress_bg_image = '@defaultui/image/control/Bar_ingame_shifatiaodi.png',
	break_delay = 200,
	name = 'GUI控件',
	layout = {
	height = 20,
	relative = {
	['1'] = 0,
	['2'] = -178,
},
	width = 688,
	row_self = 'center',
	col_self = 'end',
},
	progress_bar_image = '@defaultui/image/control/Bar_ingame_shifatiao.png',
	complete_delay = 300,
}}
components['$$lib_control.template@gui_ctrl.摇杆'] = {url = '@lib_control.component', com_name = '摇杆', template = {
	vj_relative_y = 0,
	name = 'GUI控件',
	vj_main_move_radius = 0.146,
	vj_is_press_center = true,
	vj_active_percent = 0.2,
	vj_main_move_ratio = 1,
	vj_is_release_reset = true,
	vj_main_size = 127,
	vj_bg_toggle_show = false,
	vj_main_image = '@defaultui/image/joystick/Bth_ingame_yaogan1.png',
	vj_press_region_type = 0,
	vj_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan.png',
	vj_relative_x = 0,
	vj_main_toggle_show = false,
	vj_size = 288,
}}
components['$$lib_control.template@gui_ctrl.移动摇杆'] = {url = '@lib_control.component', com_name = '移动摇杆', template = {
	slider_size = 288,
	slow_rate = 0.35,
	slider_image = '@defaultui/image/joystick/Bth_ingame_yaogan1.png',
	toggle_show = false,
	vj_is_main_slider = true,
	is_main_slider = false,
	vj_move_ratio = 1,
	vj_move_radius = 0.146,
	vj_slider_width = 59,
	vj_slider_height = 59,
	name = 'GUI控件',
	vj_slow_percent = 0,
	slider_relative_y = -113,
	slider_relative_x = 296,
	vj_auto_move = false,
	vj_is_press_center = true,
	vj_stop_percent = 0,
	vj_is_release_reset = true,
	layout = {
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	grow_height = 1,
	row_self = 'start',
	grow_width = 0.5,
	col_self = 'end',
},
	vj_press_region_type = 0,
	vj_toggle_show = false,
	slider_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan.png',
	vj_active_percent = 0.2,
	slider_mini_image = '@defaultui/image/joystick/Bth_ingame_yaogan3.png',
}}
components['$$lib_control.template@gui_ctrl.中止施法区域'] = {url = '@lib_control.component', com_name = '中止施法区域', template = {
	image = '@defaultui/image/control/取消施法区域.png',
	name = 'GUI控件',
	layout = {
	height = 117,
	relative = {
	['1'] = -200,
	['2'] = 200,
},
	width = 117,
	row_self = 'end',
	col_self = 'start',
},
}}
components['$$lib_game_options.template@gui_ctrl.设置按钮'] = {url = '@lib_game_options.component', com_name = '设置按钮', template = {
	show = true,
	name = 'GUI控件',
	layout = {
	height = 500,
	relative = {
	['1'] = -100,
	['2'] = 200,
},
	width = 500,
	row_self = 'end',
	col_self = 'start',
},
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_关闭面板'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_关闭面板', template = {
	name = 'GUI控件',
	layout = {
	height = 48,
	row_self = 'center',
	width = 48,
	col_self = 'center',
},
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_确认按钮'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_确认按钮', template = {
	name = 'GUI控件',
	layout = {
	height = 87,
	width = 317,
},
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_选项'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_选项', template = {
	name = 'GUI控件',
	layout = {
	height = 711,
	margin = {
	left = 37,
	right = 37,
},
	width = 339,
},
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_选项描述'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_选项描述', template = {
	name = 'GUI控件',
	layout = {
	height = -1,
	width = 300,
},
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_选项名称'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_选项名称', template = {
	name = 'GUI控件',
	layout = {
	height = 36,
	width = -1,
},
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_选项图标'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_选项图标', template = {
	name = 'GUI控件',
	layout = {
	height = 112,
	width = 112,
},
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_选择面板'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_选择面板', template = {
	name = 'GUI控件',
	layout = {
	grow_height = 1,
	grow_width = 1,
},
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_整体面板'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_整体面板', template = {
	name = 'GUI控件',
	layout = {
	grow_height = 1,
	grow_width = 1,
},
}}
components['$$smallcard_inventory.template@gui_ctrl.背包入口'] = {url = '@smallcard_inventory.component', com_name = '背包入口', template = {
	show = true,
	name = 'GUI控件',
	layout = {
	height = 64,
	relative = {
	['1'] = -422,
	['2'] = 29,
},
	width = 64,
	row_self = 'end',
	col_self = 'start',
},
}}
components['$$smallcard_inventory.template@gui_ctrl.多功能格子'] = {url = '@smallcard_inventory.component', com_name = '多功能格子', template = {
	can_use = true,
	bind_item_link = '',
	show_num = true,
	show_tips = true,
	show_bg = true,
	show_frame = true,
	name = 'GUI控件',
	bind_loot_link = '',
}}
components['$$smallcard_inventory.template@gui_ctrl.自定义背包格子'] = {url = '@smallcard_inventory.component', com_name = '自定义背包格子', template = {
	drop_mode = true,
	name = 'GUI控件',
	layout = {
	width = 156,
	height = 156,
},
}}
components['$$smallcard_inventory.template@gui_ctrl.自定义背包面板'] = {url = '@smallcard_inventory.component', com_name = '自定义背包面板', template = {
	name = 'GUI控件',
	drop_mode = true,
	inv_link = '',
	layout = {
	width = 600,
	height = 600,
},
}}
components['$$.template@gui_ctrl.button'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'button', template = {
}}
components['$$.template@gui_ctrl.input'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'input', template = {
}}
components['$$.template@gui_ctrl.label'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'label', template = {
}}
components['$$.template@gui_ctrl.GuiCtrl'] = {url = "@@.gui.page.MainPage.component", is_page = true}
components['$$.template@gui_ctrl.minimap_canvas'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'minimap_canvas', template = {
}}
components['$$.template@gui_ctrl.panel'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'panel', template = {
}}
components['$$.template@gui_ctrl.progress'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'progress', template = {
}}
components['$$.template@gui_ctrl.sprites'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'sprites', template = {
}}
return components