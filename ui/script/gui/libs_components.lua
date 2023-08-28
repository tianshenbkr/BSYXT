-- THIS FILE IS AUTO-GENERATED, MIGHT BE OVERWRITTEN BY GUI-EDITOR
local components = {}
components['$$smallcard_unit_attr_panel.template@gui_ctrl.单位属性'] = {url = '@smallcard_unit_attr_panel.component', com_name = '单位属性', template = {
	attr_multiply = 1,
	show_mode = 0,
	accuracy_display = 0,
	font_color = '#FFFFFF',
	bind_attr = '生命上限',
	layout = {
	height = 48,
	width = -1,
	row_content = 'start',
	direction = 'row',
},
	icon = '@smallcard_unit_attr_panel/image/属性icon.png',
	font_family = 'Regular',
	name = 'GUI控件',
	font_size = 30,
	cat_button_height = 132,
}}
components['$$smallcard_unit_attr_panel.template@gui_ctrl.单位属性面板'] = {url = '@smallcard_unit_attr_panel.component', com_name = '单位属性面板', template = {
	bind_unit = 0,
	layout = {
	col_self = 'center',
	grow_width = 1,
	grow_height = 1,
	row_self = 'center',
},
	name = 'GUI控件',
}}
components['$$smallcard_mail.template@gui_ctrl.邮件按钮'] = {url = '@smallcard_mail.component', com_name = '邮件按钮', template = {
	layout = {
	height = 64,
	width = 64,
},
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.active_button'] = {url = '@gameui.component', com_name = 'active_button', template = {
	click_scale = 0.85,
	Asset = '',
	name = '动态按钮',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	color = '#FFFFFF',
}}
components['$$gameui.template@gui_ctrl.attachable_panel'] = {url = '@gameui.component', com_name = 'attachable_panel', template = {
	name = 'GUI控件',
	hide_on_unit_invisible = false,
	scale_by_distance = false,
	layout = {
	height = 100,
	width = 100,
	col_self = 'start',
	row_self = 'start',
},
	socket_name = 'socket_root',
}}
components['$$gameui.template@gui_ctrl.btn_icon'] = {url = '@gameui.component', com_name = 'btn_icon', template = {
	icon = 'image/btn/sword.png',
	name = 'GUI控件',
	layout = {
	height = 100,
	width = 100,
	col_self = 'start',
	row_self = 'start',
},
	is_on = false,
	is_switch = false,
}}
components['$$gameui.template@gui_ctrl.Buff列表'] = {url = '@gameui.component', com_name = 'Buff列表', template = {
	buff_polarity = '正面;负面;无',
	buff_margin = 7,
	default_none_cnt = 3,
	buff_width = 64,
	default_pos_cnt = 3,
	buff_icon = 'image/msgbox/btn_1.png',
	name = 'GUI控件',
	default_neg_cnt = 3,
	buff_cat_filter = '可被禁用;负面效果',
	buff_icon_template = '@gameui.prefab.buff.buff_icon',
	buff_height = 64,
}}
components['$$gameui.template@gui_ctrl.Buff图标'] = {url = '@gameui.component', com_name = 'Buff图标', template = {
	buff_height = 64,
	buff_bg_neg_color = 'rgb(231, 67, 57)',
	buff_pos_progress_type = 'clockwise',
	buff_width = 64,
	buff_icon = 'image/buff/buff_1.png',
	font_size = 24,
	buff_neg_progress_type = 'clockwise',
	name = 'GUI控件',
	buff_bg_none_color = 'rgb(154, 154, 154)',
	buff_none_progress_type = 'clockwise',
	buff_margin = 7,
	buff_bg_pos_color = 'rgb(52, 180, 31)',
}}
components['$$gameui.template@gui_ctrl.transition_label'] = {url = '@gameui.component', com_name = 'transition_label', template = {
	layout = {
	height = 100,
	width = 500,
	col_self = 'start',
	row_self = 'start',
},
	name = '动态文本',
}}
components['$$gameui.template@gui_ctrl.normal_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 30,
	right = 30,
},
	name = '按钮-古风1-主要',
	image = 'image/btn/gf_1_major.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#ffffff',
	active_image = 'image/btn/gf_1_major_active.png',
}}
components['$$gameui.template@gui_ctrl.gf_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 30,
	right = 30,
},
	name = '按钮-古风1-次要',
	image = 'image/btn/gf_1_minor.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#ffffff',
	active_image = 'image/btn/gf_1_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.normal_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	bottom = 45,
	top = 45,
	left = 45,
	right = 45,
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-古风1',
	decoration_layout_left = {
	row_self = 'start',
},
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	style = 'image/rect/面板-古风1.png',
	decoration_image = '',
}}
components['$$gameui.template@gui_ctrl.gf_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 30,
	right = 30,
},
	name = '按钮-古风2-主要',
	image = 'image/btn/gf_2_major.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#ffffff',
	active_image = 'image/btn/gf_2_major_active.png',
}}
components['$$gameui.template@gui_ctrl.gf_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 30,
	right = 30,
},
	name = '按钮-古风2-次要',
	image = 'image/btn/gf_2_minor.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#ffffff',
	active_image = 'image/btn/gf_2_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.gf_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	bottom = 45,
	top = 45,
	left = 45,
	right = 45,
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-古风2',
	decoration_layout_left = {
	row_self = 'start',
},
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	style = 'image/rect/面板-古风2.png',
	decoration_image = '',
}}
components['$$gameui.template@gui_ctrl.gf_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 0,
	top = 0,
	left = 220,
	right = 110,
},
	name = '按钮-古风3-主要',
	image = 'image/btn/gf_3_major.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#ffffff',
	active_image = 'image/btn/gf_3_major_active.png',
}}
components['$$gameui.template@gui_ctrl.gf_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 0,
	top = 0,
	left = 220,
	right = 110,
},
	name = '按钮-古风3-次要',
	image = 'image/btn/gf_3_minor.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#ffffff',
	active_image = 'image/btn/gf_3_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.gf_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	bottom = 45,
	top = 45,
	left = 45,
	right = 45,
},
	is_decoration = true,
	decoration_layout_right = {
	row_self = 'end',
	margin = {
	right = 6,
},
},
	name = '面板-古风3',
	decoration_layout_left = {
	row_self = 'start',
	margin = {
	left = 6,
},
},
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	style = 'image/rect/面板-古风3.png',
	decoration_image = 'image/rect/面板-古风3-花纹.png',
}}
components['$$gameui.template@gui_ctrl.msgbox'] = {url = '@gameui.component', com_name = 'msgbox', template = {
	is_show_icon = true,
	msgbox_icon_image = 'image/msgbox/icon_1.png',
	name = 'GUI控件',
	layout = {
	height = 300,
	width = 600,
	col_self = 'start',
	row_self = 'start',
},
	msgbox_text = '默认通知框文本',
	style = 3,
	msgbox_image = 'image/msgbox/msgbox_1.png',
}}
components['$$gameui.template@gui_ctrl.msgbox_btn'] = {url = '@gameui.component', com_name = 'msgbox_btn', template = {
	name = 'GUI控件',
	text = '默认',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	icon_image = '@gameui/image/msgbox/icon_1.png',
	btn_image = '@gameui/image/msgbox/btn_1.png',
}}
components['$$gameui.template@gui_ctrl.progress'] = {url = '@gameui.component', com_name = 'progress', template = {
	progress_image = '',
	default_name_width = 50,
	progress_bg_image = '',
	name_width = 50,
	name_height_prop = 20,
	name = 'GUI控件',
	value_max = 100,
	name_pos_prop = 'left',
	progress_width = 250,
	progress_height = 20,
	is_name_show = true,
	name_show = true,
	layout = {
	height = 30,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	default_box_margin = 10,
	value = 50,
	name_width_prop = 50,
	is_merge_text = true,
	progress_color = '#ff0000',
	progress_text_show = true,
	description = 'ATK',
	progress_bg_color = '#949494',
	is_name_show_real = true,
	progress_type = 'right',
}}
components['$$gameui.template@gui_ctrl.sci_1_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 40,
	right = 40,
},
	name = '按钮-科技1-主要',
	image = 'image/btn/sci_1_major.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#000000',
	active_image = 'image/btn/sci_1_major_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 40,
	right = 40,
},
	name = '按钮-科技1-次要',
	image = 'image/btn/sci_1_minor.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#000000',
	active_image = 'image/btn/sci_1_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_1_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	bottom = 45,
	top = 45,
	left = 45,
	right = 45,
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-科技1',
	decoration_layout_left = {
	row_self = 'start',
},
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	style = 'image/rect/面板-科技1.png',
	decoration_image = '',
}}
components['$$gameui.template@gui_ctrl.sci_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 40,
	right = 40,
},
	name = '按钮-科技2-主要',
	image = 'image/btn/sci_2_major.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#13141E',
	active_image = 'image/btn/sci_2_major_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 40,
	right = 40,
},
	name = '按钮-科技2-次要',
	image = 'image/btn/sci_2_minor.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#13141E',
	active_image = 'image/btn/sci_2_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	bottom = 45,
	top = 45,
	left = 45,
	right = 45,
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-科技2',
	decoration_layout_left = {
	row_self = 'start',
},
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	style = 'image/rect/面板-科技2.png',
	decoration_image = '',
}}
components['$$gameui.template@gui_ctrl.sci_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 0,
	top = 0,
	left = 0,
	right = 0,
},
	name = '按钮-科技3-主要',
	image = 'image/btn/sci_3_major.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#FFF8D7',
	active_image = 'image/btn/sci_3_major_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 0,
	top = 0,
	left = 0,
	right = 0,
},
	name = '按钮-科技3-次要',
	image = 'image/btn/sci_3_minor.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#CCCCCC',
	active_image = 'image/btn/sci_3_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	bottom = 45,
	top = 45,
	left = 45,
	right = 45,
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-科技3',
	decoration_layout_left = {
	row_self = 'start',
},
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	style = 'image/rect/面板-科技3.png',
	decoration_image = '',
}}
components['$$gameui.template@gui_ctrl.simpleui_button'] = {url = '@gameui.component', com_name = 'simpleui_button', template = {
	visiblity = true,
	name = 'GUI控件',
	text = '按钮',
	layout = {
	height = 50,
	width = 50,
	col_self = 'start',
	row_self = 'start',
},
	can_be_clicked = true,
	image = 'image/msgbox/btn_1.png',
}}
components['$$gameui.template@gui_ctrl.simpleui_picture'] = {url = '@gameui.component', com_name = 'simpleui_picture', template = {
	visiblity = true,
	opacity = 0,
	name = 'GUI控件',
	image = 'image/msgbox/icon_1.png',
	zoom_type = 'none',
	can_be_clicked = true,
	layout = {
	height = 50,
	width = 100,
	col_self = 'start',
	row_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.simpleui_text'] = {url = '@gameui.component', com_name = 'simpleui_text', template = {
	visiblity = true,
	can_be_clicked = true,
	font_size = 5,
	layout = {
	height = 50,
	width = 50,
	col_self = 'start',
	row_self = 'start',
},
	auto_line_feed = true,
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.timershow'] = {url = '@gameui.component', com_name = 'timershow', template = {
	image = 'image/Bg_daojishi_di.png',
	layout = {
	height = 56,
	width = -1,
	col_self = 'start',
	direction = 'row',
},
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.xf_1_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 40,
	right = 40,
},
	name = '按钮-西方1-主要',
	image = 'image/btn/xf_1_major.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#FFFFFF',
	active_image = 'image/btn/xf_1_major_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 40,
	right = 40,
},
	name = '按钮-西方1-次要',
	image = 'image/btn/xf_1_minor.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#FFFFFF',
	active_image = 'image/btn/xf_1_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_1_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	bottom = 45,
	top = 45,
	left = 45,
	right = 45,
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-西方1',
	decoration_layout_left = {
	row_self = 'start',
},
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	style = 'image/rect/面板-西方1.png',
	decoration_image = '',
}}
components['$$gameui.template@gui_ctrl.xf_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 40,
	right = 40,
},
	name = '按钮-西方1-主要',
	image = 'image/btn/xf_2_major.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#2A2D3C',
	active_image = 'image/btn/xf_2_major_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 40,
	right = 40,
},
	name = '按钮-西方2-次要',
	image = 'image/btn/xf_2_minor.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#FFFFFF',
	active_image = 'image/btn/xf_2_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	bottom = 30,
	top = 130,
	left = 128,
	right = 128,
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-西方2',
	decoration_layout_left = {
	row_self = 'start',
},
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	style = 'image/rect/面板-西方2.png',
	decoration_image = '',
}}
components['$$gameui.template@gui_ctrl.xf_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 40,
	right = 40,
},
	name = '按钮-西方3-主要',
	image = 'image/btn/xf_3_major.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#FFFFFF',
	active_image = 'image/btn/xf_3_major_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text = '默认',
	text_opacity = 1,
	border = {
	bottom = 30,
	top = 30,
	left = 40,
	right = 40,
},
	name = '按钮-西方3-次要',
	image = 'image/btn/xf_3_minor.png',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text_color = '#FFFFFF',
	active_image = 'image/btn/xf_3_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	bottom = 45,
	top = 45,
	left = 45,
	right = 45,
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-西方3',
	decoration_layout_left = {
	row_self = 'start',
},
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	style = 'image/rect/面板-西方3.png',
	decoration_image = '',
}}
components['$$lib_control.template@gui_ctrl.技能摇杆'] = {url = '@lib_control.component', com_name = '技能摇杆', template = {
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	outer_ratio = 1.022,
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	active_percent = 0.15,
	skill_normal = '@defaultui/image/control/默认技能框2.png',
	name = 'GUI控件',
	can_press_on_cool = true,
	skill_cool = '@defaultui/image/control/冷却.png',
	center_ratio = 0.926,
	is_vj_center = true,
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	layout = {
	col_self = 'end',
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	width = 150,
	row_self = 'end',
	height = 150,
},
	vj_panel_scale = 1,
	press_region_type = 1,
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	skill_click = '@defaultui/image/control/点击技能框.png',
	skill_stack_bg = '@defaultui/image/control/技能_等级.png',
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	skill_charge_cool = '@defaultui/image/control/开启技能框.png',
	vj_panel_crop_margin = -9999,
}}
components['$$lib_control.template@gui_ctrl.技能摇杆组'] = {url = '@lib_control.component', com_name = '技能摇杆组', template = {
	outer_ratio = 1.022,
	total_angle_delta = 120,
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	active_percent = 0.15,
	button_size = 150,
	init_angle = -15,
	center_ratio = 0.926,
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	skill_cool = '@defaultui/image/control/冷却.png',
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	attack_button_size = 250,
	min_around_dis = 350,
	vj_panel_crop_margin = -9999,
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	press_region_type = 1,
	skill_normal = '@defaultui/image/control/默认技能框2.png',
	name = 'GUI控件',
	can_press_on_cool = true,
	is_vj_center = true,
	skill_attack_normal = '@lib_control/image/control/Bth_ingame_gongjidi.png',
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	layout = {
	col_self = 'end',
	row_self = 'end',
	grow_width = 0.5,
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	grow_height = 1,
},
	vj_panel_scale = 1,
	base_y = -120,
	max_skill_count = 99,
	auto_bind_key = true,
	skill_stack_bg = '@defaultui/image/control/技能_等级.png',
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	base_x = -150,
	skill_click = '@defaultui/image/control/点击技能框.png',
	skill_charge_cool = '@defaultui/image/control/开启技能框.png',
}}
components['$$lib_control.template@gui_ctrl.lib_control_main'] = {url = '@@.gui.page.lib_control_main.component', is_page = true, template_url = '@@.gui.page.lib_control_main.template'}
components['$$lib_control.template@gui_ctrl.施法进度条'] = {url = '@lib_control.component', com_name = '施法进度条', template = {
	progress_bg_image = '@defaultui/image/control/Bar_ingame_shifatiaodi.png',
	name = 'GUI控件',
	break_delay = 200,
	layout = {
	col_self = 'end',
	relative = {
	['1'] = 0,
	['2'] = -178,
},
	width = 688,
	row_self = 'center',
	height = 20,
},
	complete_delay = 300,
	progress_bar_image = '@defaultui/image/control/Bar_ingame_shifatiao.png',
}}
components['$$lib_control.template@gui_ctrl.摇杆'] = {url = '@lib_control.component', com_name = '摇杆', template = {
	vj_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan.png',
	vj_main_move_ratio = 1,
	vj_main_toggle_show = false,
	vj_relative_x = 0,
	vj_size = 288,
	vj_press_region_type = 0,
	vj_is_press_center = true,
	vj_active_percent = 0.2,
	vj_bg_toggle_show = false,
	vj_main_image = '@defaultui/image/joystick/Bth_ingame_yaogan1.png',
	name = 'GUI控件',
	vj_main_size = 127,
	vj_main_move_radius = 0.146,
	vj_relative_y = 0,
	vj_is_release_reset = true,
}}
components['$$lib_control.template@gui_ctrl.移动摇杆'] = {url = '@lib_control.component', com_name = '移动摇杆', template = {
	vj_stop_percent = 0,
	slider_size = 288,
	vj_move_ratio = 1,
	vj_is_press_center = true,
	toggle_show = false,
	slow_rate = 0.35,
	name = 'GUI控件',
	slider_mini_image = '@defaultui/image/joystick/Bth_ingame_yaogan3.png',
	vj_toggle_show = false,
	vj_press_region_type = 0,
	slider_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan.png',
	vj_slider_height = 59,
	is_main_slider = false,
	layout = {
	col_self = 'end',
	row_self = 'start',
	grow_width = 0.5,
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	grow_height = 1,
},
	slider_relative_y = -113,
	vj_is_main_slider = true,
	vj_auto_move = false,
	vj_slow_percent = 0,
	vj_active_percent = 0.2,
	vj_move_radius = 0.146,
	vj_is_release_reset = true,
	vj_slider_width = 59,
	slider_relative_x = 296,
	slider_image = '@defaultui/image/joystick/Bth_ingame_yaogan1.png',
}}
components['$$lib_control.template@gui_ctrl.中止施法区域'] = {url = '@lib_control.component', com_name = '中止施法区域', template = {
	image = '@defaultui/image/control/取消施法区域.png',
	layout = {
	col_self = 'start',
	relative = {
	['1'] = -200,
	['2'] = 200,
},
	width = 117,
	row_self = 'end',
	height = 117,
},
	name = 'GUI控件',
}}
components['$$lib_game_options.template@gui_ctrl.设置按钮'] = {url = '@lib_game_options.component', com_name = '设置按钮', template = {
	layout = {
	col_self = 'start',
	relative = {
	['1'] = -100,
	['2'] = 200,
},
	width = 500,
	row_self = 'end',
	height = 500,
},
	show = true,
	name = 'GUI控件',
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_关闭面板'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_关闭面板', template = {
	layout = {
	col_self = 'center',
	width = 48,
	height = 48,
	row_self = 'center',
},
	name = 'GUI控件',
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_确认按钮'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_确认按钮', template = {
	layout = {
	height = 87,
	width = 317,
},
	name = 'GUI控件',
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_选项'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_选项', template = {
	layout = {
	height = 711,
	width = 339,
	margin = {
	left = 37,
	right = 37,
},
},
	name = 'GUI控件',
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_选项描述'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_选项描述', template = {
	layout = {
	height = -1,
	width = 300,
},
	name = 'GUI控件',
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_选项名称'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_选项名称', template = {
	layout = {
	height = 36,
	width = -1,
},
	name = 'GUI控件',
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_选项图标'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_选项图标', template = {
	layout = {
	height = 112,
	width = 112,
},
	name = 'GUI控件',
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_选择面板'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_选择面板', template = {
	layout = {
	grow_height = 1,
	grow_width = 1,
},
	name = 'GUI控件',
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_整体面板'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_整体面板', template = {
	layout = {
	grow_height = 1,
	grow_width = 1,
},
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.背包入口'] = {url = '@smallcard_inventory.component', com_name = '背包入口', template = {
	layout = {
	col_self = 'start',
	relative = {
	['1'] = -422,
	['2'] = 29,
},
	width = 64,
	row_self = 'end',
	height = 64,
},
	show = true,
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.多功能格子'] = {url = '@smallcard_inventory.component', com_name = '多功能格子', template = {
	show_frame = true,
	show_bg = true,
	bind_loot_link = '',
	name = 'GUI控件',
	show_num = true,
	can_use = true,
	show_tips = true,
	bind_item_link = '',
}}
components['$$smallcard_inventory.template@gui_ctrl.自定义背包格子'] = {url = '@smallcard_inventory.component', com_name = '自定义背包格子', template = {
	layout = {
	height = 156,
	width = 156,
},
	drop_mode = true,
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.自定义背包面板'] = {url = '@smallcard_inventory.component', com_name = '自定义背包面板', template = {
	drop_mode = true,
	layout = {
	height = 600,
	width = 600,
},
	inv_link = '',
	name = 'GUI控件',
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