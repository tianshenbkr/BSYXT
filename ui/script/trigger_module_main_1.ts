module busiyixiantu_5n1b {
	export let jj = base.trigger_new((当前触发器:Trigger, e:base.游戏开始)=>{
		let 面板: _OBJ_gameui_gui_ctrl_normal_rect = base.gui_get_part_as<any>(base.gui_get_main_page(), "面板-科技");
		if (true){
		}
	}, [], false, undefined, true)
	//以下为转发事件
	//为触发器添加事件
	jj.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "游戏-开始" })
}
