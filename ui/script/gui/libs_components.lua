-- THIS FILE IS AUTO-GENERATED, MIGHT BE OVERWRITTEN BY GUI-EDITOR
local components = {}
components['$$smallcard_unit_attr_panel.template@gui_ctrl.单位属性'] = {url = '@smallcard_unit_attr_panel.component', com_name = '单位属性', template = {
	font_size = 30,
	icon = '@smallcard_unit_attr_panel/image/属性icon.png',
	name = 'GUI控件',
	cat_button_height = 132,
	font_color = '#FFFFFF',
	accuracy_display = 0,
	bind_attr = '生命上限',
	layout = {
	height = 48,
	direction = 'row',
	width = -1,
	row_content = 'start',
},
	font_family = 'Regular',
	show_mode = 0,
	attr_multiply = 1,
}}
components['$$smallcard_unit_attr_panel.template@gui_ctrl.单位属性面板'] = {url = '@smallcard_unit_attr_panel.component', com_name = '单位属性面板', template = {
	layout = {
	col_self = 'center',
	grow_width = 1,
	row_self = 'center',
	grow_height = 1,
},
	bind_unit = 0,
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
	name = '动态按钮',
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	color = '#FFFFFF',
	Asset = '',
	click_scale = 0.85,
}}
components['$$gameui.template@gui_ctrl.attachable_panel'] = {url = '@gameui.component', com_name = 'attachable_panel', template = {
	scale_by_distance = false,
	hide_on_unit_invisible = false,
	layout = {
	height = 100,
	col_self = 'start',
	width = 100,
	row_self = 'start',
},
	socket_name = 'socket_root',
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.btn_icon'] = {url = '@gameui.component', com_name = 'btn_icon', template = {
	icon = 'image/btn/sword.png',
	layout = {
	height = 100,
	col_self = 'start',
	width = 100,
	row_self = 'start',
},
	is_switch = false,
	is_on = false,
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.Buff列表'] = {url = '@gameui.component', com_name = 'Buff列表', template = {
	default_none_cnt = 3,
	buff_icon = 'image/msgbox/btn_1.png',
	name = 'GUI控件',
	buff_cat_filter = '可被禁用;负面效果',
	default_neg_cnt = 3,
	buff_icon_template = '@gameui.prefab.buff.buff_icon',
	buff_height = 64,
	buff_polarity = '正面;负面;无',
	default_pos_cnt = 3,
	buff_margin = 7,
	buff_width = 64,
}}
components['$$gameui.template@gui_ctrl.Buff图标'] = {url = '@gameui.component', com_name = 'Buff图标', template = {
	buff_none_progress_type = 'clockwise',
	buff_bg_none_color = 'rgb(154, 154, 154)',
	buff_width = 64,
	name = 'GUI控件',
	buff_bg_pos_color = 'rgb(52, 180, 31)',
	buff_bg_neg_color = 'rgb(231, 67, 57)',
	buff_height = 64,
	font_size = 24,
	buff_neg_progress_type = 'clockwise',
	buff_pos_progress_type = 'clockwise',
	buff_margin = 7,
	buff_icon = 'image/buff/buff_1.png',
}}
components['$$gameui.template@gui_ctrl.transition_label'] = {url = '@gameui.component', com_name = 'transition_label', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 500,
	row_self = 'start',
},
	name = '动态文本',
}}
components['$$gameui.template@gui_ctrl.normal_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/gf_1_major_active.png',
	image = 'image/btn/gf_1_major.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 30,
	left = 30,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风1-主要',
}}
components['$$gameui.template@gui_ctrl.gf_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/gf_1_minor_active.png',
	image = 'image/btn/gf_1_minor.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 30,
	left = 30,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风1-次要',
}}
components['$$gameui.template@gui_ctrl.normal_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-古风1.png',
	decoration_image = '',
	border = {
	top = 45,
	bottom = 45,
	right = 45,
	left = 45,
},
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-古风1',
	decoration_layout_left = {
	row_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.gf_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/gf_2_major_active.png',
	image = 'image/btn/gf_2_major.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 30,
	left = 30,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风2-主要',
}}
components['$$gameui.template@gui_ctrl.gf_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/gf_2_minor_active.png',
	image = 'image/btn/gf_2_minor.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 30,
	left = 30,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风2-次要',
}}
components['$$gameui.template@gui_ctrl.gf_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-古风2.png',
	decoration_image = '',
	border = {
	top = 45,
	bottom = 45,
	right = 45,
	left = 45,
},
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-古风2',
	decoration_layout_left = {
	row_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.gf_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/gf_3_major_active.png',
	image = 'image/btn/gf_3_major.png',
	text_opacity = 1,
	border = {
	top = 0,
	bottom = 0,
	right = 110,
	left = 220,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风3-主要',
}}
components['$$gameui.template@gui_ctrl.gf_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/gf_3_minor_active.png',
	image = 'image/btn/gf_3_minor.png',
	text_opacity = 1,
	border = {
	top = 0,
	bottom = 0,
	right = 110,
	left = 220,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风3-次要',
}}
components['$$gameui.template@gui_ctrl.gf_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = true,
	style = 'image/rect/面板-古风3.png',
	decoration_image = 'image/rect/面板-古风3-花纹.png',
	border = {
	top = 45,
	bottom = 45,
	right = 45,
	left = 45,
},
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	margin = {
	right = 6,
},
	row_self = 'end',
},
	name = '面板-古风3',
	decoration_layout_left = {
	margin = {
	left = 6,
},
	row_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.msgbox'] = {url = '@gameui.component', com_name = 'msgbox', template = {
	msgbox_image = 'image/msgbox/msgbox_1.png',
	style = 3,
	is_show_icon = true,
	layout = {
	height = 300,
	col_self = 'start',
	width = 600,
	row_self = 'start',
},
	name = 'GUI控件',
	msgbox_icon_image = 'image/msgbox/icon_1.png',
	msgbox_text = '默认通知框文本',
}}
components['$$gameui.template@gui_ctrl.msgbox_btn'] = {url = '@gameui.component', com_name = 'msgbox_btn', template = {
	icon_image = '@gameui/image/msgbox/icon_1.png',
	name = 'GUI控件',
	btn_image = '@gameui/image/msgbox/btn_1.png',
	text = '默认',
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.progress'] = {url = '@gameui.component', com_name = 'progress', template = {
	progress_text_show = true,
	progress_image = '',
	progress_width = 250,
	is_merge_text = true,
	progress_type = 'right',
	layout = {
	height = 30,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	default_box_margin = 10,
	name_width = 50,
	value = 50,
	progress_color = '#ff0000',
	value_max = 100,
	name = 'GUI控件',
	progress_height = 20,
	name_pos_prop = 'left',
	progress_bg_image = '',
	is_name_show_real = true,
	name_height_prop = 20,
	description = 'ATK',
	progress_bg_color = '#949494',
	name_show = true,
	name_width_prop = 50,
	is_name_show = true,
	default_name_width = 50,
}}
components['$$gameui.template@gui_ctrl.sci_1_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/sci_1_major_active.png',
	image = 'image/btn/sci_1_major.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 40,
	left = 40,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#000000',
	text = '默认',
	name = '按钮-科技1-主要',
}}
components['$$gameui.template@gui_ctrl.sci_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/sci_1_minor_active.png',
	image = 'image/btn/sci_1_minor.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 40,
	left = 40,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#000000',
	text = '默认',
	name = '按钮-科技1-次要',
}}
components['$$gameui.template@gui_ctrl.sci_1_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-科技1.png',
	decoration_image = '',
	border = {
	top = 45,
	bottom = 45,
	right = 45,
	left = 45,
},
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-科技1',
	decoration_layout_left = {
	row_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.sci_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/sci_2_major_active.png',
	image = 'image/btn/sci_2_major.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 40,
	left = 40,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#13141E',
	text = '默认',
	name = '按钮-科技2-主要',
}}
components['$$gameui.template@gui_ctrl.sci_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/sci_2_minor_active.png',
	image = 'image/btn/sci_2_minor.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 40,
	left = 40,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#13141E',
	text = '默认',
	name = '按钮-科技2-次要',
}}
components['$$gameui.template@gui_ctrl.sci_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-科技2.png',
	decoration_image = '',
	border = {
	top = 45,
	bottom = 45,
	right = 45,
	left = 45,
},
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-科技2',
	decoration_layout_left = {
	row_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.sci_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/sci_3_major_active.png',
	image = 'image/btn/sci_3_major.png',
	text_opacity = 1,
	border = {
	top = 0,
	bottom = 0,
	right = 0,
	left = 0,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#FFF8D7',
	text = '默认',
	name = '按钮-科技3-主要',
}}
components['$$gameui.template@gui_ctrl.sci_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/sci_3_minor_active.png',
	image = 'image/btn/sci_3_minor.png',
	text_opacity = 1,
	border = {
	top = 0,
	bottom = 0,
	right = 0,
	left = 0,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#CCCCCC',
	text = '默认',
	name = '按钮-科技3-次要',
}}
components['$$gameui.template@gui_ctrl.sci_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-科技3.png',
	decoration_image = '',
	border = {
	top = 45,
	bottom = 45,
	right = 45,
	left = 45,
},
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-科技3',
	decoration_layout_left = {
	row_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.simpleui_button'] = {url = '@gameui.component', com_name = 'simpleui_button', template = {
	can_be_clicked = true,
	image = 'image/msgbox/btn_1.png',
	layout = {
	height = 50,
	col_self = 'start',
	width = 50,
	row_self = 'start',
},
	name = 'GUI控件',
	text = '按钮',
	visiblity = true,
}}
components['$$gameui.template@gui_ctrl.simpleui_picture'] = {url = '@gameui.component', com_name = 'simpleui_picture', template = {
	can_be_clicked = true,
	opacity = 0,
	zoom_type = 'none',
	layout = {
	height = 50,
	col_self = 'start',
	width = 100,
	row_self = 'start',
},
	name = 'GUI控件',
	image = 'image/msgbox/icon_1.png',
	visiblity = true,
}}
components['$$gameui.template@gui_ctrl.simpleui_text'] = {url = '@gameui.component', com_name = 'simpleui_text', template = {
	font_size = 5,
	auto_line_feed = true,
	layout = {
	height = 50,
	col_self = 'start',
	width = 50,
	row_self = 'start',
},
	name = 'GUI控件',
	can_be_clicked = true,
	visiblity = true,
}}
components['$$gameui.template@gui_ctrl.timershow'] = {url = '@gameui.component', com_name = 'timershow', template = {
	layout = {
	height = 56,
	col_self = 'start',
	width = -1,
	direction = 'row',
},
	image = 'image/Bg_daojishi_di.png',
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.xf_1_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/xf_1_major_active.png',
	image = 'image/btn/xf_1_major.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 40,
	left = 40,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#FFFFFF',
	text = '默认',
	name = '按钮-西方1-主要',
}}
components['$$gameui.template@gui_ctrl.xf_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/xf_1_minor_active.png',
	image = 'image/btn/xf_1_minor.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 40,
	left = 40,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#FFFFFF',
	text = '默认',
	name = '按钮-西方1-次要',
}}
components['$$gameui.template@gui_ctrl.xf_1_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-西方1.png',
	decoration_image = '',
	border = {
	top = 45,
	bottom = 45,
	right = 45,
	left = 45,
},
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-西方1',
	decoration_layout_left = {
	row_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.xf_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/xf_2_major_active.png',
	image = 'image/btn/xf_2_major.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 40,
	left = 40,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#2A2D3C',
	text = '默认',
	name = '按钮-西方1-主要',
}}
components['$$gameui.template@gui_ctrl.xf_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/xf_2_minor_active.png',
	image = 'image/btn/xf_2_minor.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 40,
	left = 40,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#FFFFFF',
	text = '默认',
	name = '按钮-西方2-次要',
}}
components['$$gameui.template@gui_ctrl.xf_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-西方2.png',
	decoration_image = '',
	border = {
	top = 130,
	bottom = 30,
	right = 128,
	left = 128,
},
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-西方2',
	decoration_layout_left = {
	row_self = 'start',
},
}}
components['$$gameui.template@gui_ctrl.xf_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/xf_3_major_active.png',
	image = 'image/btn/xf_3_major.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 40,
	left = 40,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#FFFFFF',
	text = '默认',
	name = '按钮-西方3-主要',
}}
components['$$gameui.template@gui_ctrl.xf_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	active_image = 'image/btn/xf_3_minor_active.png',
	image = 'image/btn/xf_3_minor.png',
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	right = 40,
	left = 40,
},
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	text_color = '#FFFFFF',
	text = '默认',
	name = '按钮-西方3-次要',
}}
components['$$gameui.template@gui_ctrl.xf_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	is_decoration = false,
	style = 'image/rect/面板-西方3.png',
	decoration_image = '',
	border = {
	top = 45,
	bottom = 45,
	right = 45,
	left = 45,
},
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-西方3',
	decoration_layout_left = {
	row_self = 'start',
},
}}
components['$$lib_control.template@gui_ctrl.技能摇杆'] = {url = '@lib_control.component', com_name = '技能摇杆', template = {
	press_region_type = 1,
	skill_charge_cool = '@defaultui/image/control/开启技能框.png',
	is_vj_center = true,
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	skill_click = '@defaultui/image/control/点击技能框.png',
	skill_stack_bg = '@defaultui/image/control/技能_等级.png',
	layout = {
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	col_self = 'end',
	row_self = 'end',
	width = 150,
	height = 150,
},
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	can_press_on_cool = true,
	vj_panel_crop_margin = -9999,
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	skill_cool = '@defaultui/image/control/冷却.png',
	name = 'GUI控件',
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	vj_panel_scale = 1,
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	outer_ratio = 1.022,
	center_ratio = 0.926,
	active_percent = 0.15,
	skill_normal = '@defaultui/image/control/默认技能框2.png',
}}
components['$$lib_control.template@gui_ctrl.技能摇杆组'] = {url = '@lib_control.component', com_name = '技能摇杆组', template = {
	max_skill_count = 99,
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	init_angle = -15,
	layout = {
	grow_width = 0.5,
	row_self = 'end',
	col_self = 'end',
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	grow_height = 1,
},
	auto_bind_key = true,
	vj_panel_crop_margin = -9999,
	name = 'GUI控件',
	outer_ratio = 1.022,
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	total_angle_delta = 120,
	base_y = -120,
	active_percent = 0.15,
	skill_normal = '@defaultui/image/control/默认技能框2.png',
	press_region_type = 1,
	skill_charge_cool = '@defaultui/image/control/开启技能框.png',
	is_vj_center = true,
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	skill_cool = '@defaultui/image/control/冷却.png',
	skill_stack_bg = '@defaultui/image/control/技能_等级.png',
	min_around_dis = 350,
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	attack_button_size = 250,
	skill_attack_normal = '@lib_control/image/control/Bth_ingame_gongjidi.png',
	can_press_on_cool = true,
	center_ratio = 0.926,
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	button_size = 150,
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	base_x = -150,
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	skill_click = '@defaultui/image/control/点击技能框.png',
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	vj_panel_scale = 1,
}}
components['$$lib_control.template@gui_ctrl.lib_control_main'] = {url = '@@.gui.page.lib_control_main.component', is_page = true, template_url = '@@.gui.page.lib_control_main.template'}
components['$$lib_control.template@gui_ctrl.施法进度条'] = {url = '@lib_control.component', com_name = '施法进度条', template = {
	name = 'GUI控件',
	break_delay = 200,
	complete_delay = 300,
	progress_bar_image = '@defaultui/image/control/Bar_ingame_shifatiao.png',
	layout = {
	relative = {
	['1'] = 0,
	['2'] = -178,
},
	col_self = 'end',
	row_self = 'center',
	width = 688,
	height = 20,
},
	progress_bg_image = '@defaultui/image/control/Bar_ingame_shifatiaodi.png',
}}
components['$$lib_control.template@gui_ctrl.摇杆'] = {url = '@lib_control.component', com_name = '摇杆', template = {
	vj_main_toggle_show = false,
	vj_is_release_reset = true,
	vj_active_percent = 0.2,
	vj_is_press_center = true,
	vj_main_size = 127,
	vj_relative_x = 0,
	vj_main_move_radius = 0.146,
	vj_main_image = '@defaultui/image/joystick/Bth_ingame_yaogan1.png',
	vj_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan.png',
	name = 'GUI控件',
	vj_press_region_type = 0,
	vj_bg_toggle_show = false,
	vj_relative_y = 0,
	vj_size = 288,
	vj_main_move_ratio = 1,
}}
components['$$lib_control.template@gui_ctrl.移动摇杆'] = {url = '@lib_control.component', com_name = '移动摇杆', template = {
	vj_slider_width = 59,
	vj_active_percent = 0.2,
	is_main_slider = false,
	vj_press_region_type = 0,
	vj_move_ratio = 1,
	slider_relative_y = -113,
	slider_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan.png',
	vj_stop_percent = 0,
	layout = {
	grow_width = 0.5,
	row_self = 'start',
	col_self = 'end',
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	grow_height = 1,
},
	slow_rate = 0.35,
	vj_is_release_reset = true,
	slider_image = '@defaultui/image/joystick/Bth_ingame_yaogan1.png',
	vj_is_press_center = true,
	vj_is_main_slider = true,
	slider_relative_x = 296,
	slider_mini_image = '@defaultui/image/joystick/Bth_ingame_yaogan3.png',
	name = 'GUI控件',
	vj_slow_percent = 0,
	vj_slider_height = 59,
	slider_size = 288,
	vj_toggle_show = false,
	toggle_show = false,
	vj_auto_move = false,
	vj_move_radius = 0.146,
}}
components['$$lib_control.template@gui_ctrl.中止施法区域'] = {url = '@lib_control.component', com_name = '中止施法区域', template = {
	layout = {
	relative = {
	['1'] = -200,
	['2'] = 200,
},
	col_self = 'start',
	row_self = 'end',
	width = 117,
	height = 117,
},
	image = '@defaultui/image/control/取消施法区域.png',
	name = 'GUI控件',
}}
components['$$lib_game_options.template@gui_ctrl.设置按钮'] = {url = '@lib_game_options.component', com_name = '设置按钮', template = {
	layout = {
	relative = {
	['1'] = -100,
	['2'] = 200,
},
	col_self = 'start',
	row_self = 'end',
	width = 500,
	height = 500,
},
	show = true,
	name = 'GUI控件',
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_关闭面板'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_关闭面板', template = {
	layout = {
	height = 48,
	col_self = 'center',
	width = 48,
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
	margin = {
	left = 37,
	right = 37,
},
	width = 339,
	height = 711,
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
	grow_width = 1,
	grow_height = 1,
},
	name = 'GUI控件',
}}
components['$$smallcard_choose_one.template@gui_ctrl.N选1_整体面板'] = {url = '@smallcard_choose_one.component', com_name = 'N选1_整体面板', template = {
	layout = {
	grow_width = 1,
	grow_height = 1,
},
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.背包入口'] = {url = '@smallcard_inventory.component', com_name = '背包入口', template = {
	layout = {
	relative = {
	['1'] = -422,
	['2'] = 29,
},
	col_self = 'start',
	row_self = 'end',
	width = 64,
	height = 64,
},
	show = true,
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.多功能格子'] = {url = '@smallcard_inventory.component', com_name = '多功能格子', template = {
	can_use = true,
	show_num = true,
	bind_item_link = '',
	show_tips = true,
	bind_loot_link = '',
	name = 'GUI控件',
	show_frame = true,
	show_bg = true,
}}
components['$$smallcard_inventory.template@gui_ctrl.自定义背包格子'] = {url = '@smallcard_inventory.component', com_name = '自定义背包格子', template = {
	layout = {
	width = 156,
	height = 156,
},
	drop_mode = true,
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.自定义背包面板'] = {url = '@smallcard_inventory.component', com_name = '自定义背包面板', template = {
	layout = {
	width = 600,
	height = 600,
},
	name = 'GUI控件',
	drop_mode = true,
	inv_link = '',
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