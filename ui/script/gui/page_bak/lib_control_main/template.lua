-- THIS FILE IS AUTO-GENERATED, WOULD BE OVERWRITTEN BY GUI-EDITOR
local component = require '@common.base.gui.component'
local bind = component.bind
local call = component.call
local gui_pkg = require '@common.base.gui.package'
local get_text = gui_pkg.get_text() or get_text
local on_player_prop = require '@common.base.gui.on_player_prop'
local on_unit_prop = require '@common.base.gui.on_unit_prop'
local ctrl_wrapper = require '@common.base.gui.ctrl_wrapper'


local lib_control = require '@lib_control.component'

return gui_pkg.page_template {
    flatten_template = {
        ctrl_wrapper.panel {
            __EDIT_TIME = {
                lock = true,
            },
            layout = {
                grow_height = 1,
                grow_width = 1,
                position = {},
                relative = {
                    [1] = 0.0,
                    [2] = 0.0,
                },
            },
            name = 'lib_control_main',
            show = false,
            z_index = -2,
        },0,
        lib_control.中止施法区域 {
            image = '@defaultui/image/control/取消施法区域.png',
            layout = {
                col_self = 'start',
                height = 117,
                ratio = {},
                relative = {
                    [1] = -200,
                    [2] = 200,
                },
                row_self = 'end',
                width = 117,
            },
            name = '中止施法区域',
        },1,
        lib_control.施法进度条 {
            break_delay = 200,
            complete_delay = 300,
            layout = {
                col_self = 'end',
                height = 20,
                ratio = {},
                relative = {
                    [1] = 0,
                    [2] = -178,
                },
                row_self = 'center',
                width = 688,
            },
            name = '施法进度条',
            progress_bar_image = '@defaultui/image/control/Bar_ingame_shifatiao.png',
            progress_bg_image = '@defaultui/image/control/Bar_ingame_shifatiaodi.png',
        },1,
        lib_control.技能摇杆组 {
            active_percent = 0.15,
            attack_button_size = 250,
            auto_bind_key = true,
            base_x = -150,
            base_y = -120,
            button_size = 150,
            can_press_on_cool = true,
            cast_slider = '@defaultui/image/control/施法摇杆.png',
            cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
            cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
            center_ratio = 0.926,
            init_angle = -15,
            is_vj_center = true,
            layout = {
                col_self = 'end',
                grow_height = 1,
                grow_width = 0.5,
                relative = {
                    [1] = 0,
                    [2] = 0,
                },
                row_self = 'end',
            },
            max_skill_count = 99,
            min_around_dis = 350,
            name = '技能摇杆组',
            outer_ratio = 1.022,
            press_region_type = 1,
            shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
            skill_attack_normal = '@lib_control/image/control/Bth_ingame_gongjidi.png',
            skill_charge_cool = '@defaultui/image/control/开启技能框.png',
            skill_click = '@defaultui/image/control/点击技能框.png',
            skill_cool = '@defaultui/image/control/冷却.png',
            skill_disable = '@defaultui/image/control/禁用技能框.png',
            skill_icon_mask = '@defaultui/image/control/冷却.png',
            skill_locked = '@defaultui/image/control/锁定技能框.png',
            skill_normal = '@defaultui/image/control/默认技能框2.png',
            skill_stack_bg = '@defaultui/image/control/技能_等级.png',
            skill_toggleon = '@defaultui/image/control/开启技能框.png',
            total_angle_delta = 120,
            vj_panel_crop_margin = -9999,
            vj_panel_scale = 1,
        },1,
        lib_control.移动摇杆 {
            is_main_slider = false,
            layout = {
                col_self = 'end',
                grow_height = 1,
                grow_width = 0.5,
                relative = {
                    [1] = 0.0,
                    [2] = 0.0,
                },
                row_self = 'start',
            },
            name = '移动摇杆',
            slider_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan.png',
            slider_image = '@defaultui/image/joystick/Bth_ingame_yaogan1.png',
            slider_mini_image = '@defaultui/image/joystick/Bth_ingame_yaogan3.png',
            slider_relative_x = 296,
            slider_relative_y = -113,
            slider_size = 288,
            slow_rate = 0.35,
            toggle_show = false,
            vj_active_percent = 0.2,
            vj_auto_move = false,
            vj_is_main_slider = true,
            vj_is_press_center = true,
            vj_is_release_reset = true,
            vj_move_radius = 0.146,
            vj_move_ratio = 1,
            vj_press_region_type = 0,
            vj_slider_height = 59,
            vj_slider_width = 59,
            vj_slow_percent = 0,
            vj_stop_percent = 0,
            vj_toggle_show = false,
        },1,
    }
}