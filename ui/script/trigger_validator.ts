module validator {
	//$$default_units_ts.unit.火龙.MoverFunction:Data.Game.FunctionClient_UI
	/** @noSelf */
	export let validator_38385052:(移动器Id:IdPreset<"mover_id">, 流逝时间:number, 弹道单位:Unit, 施法者单位:Unit, 目标单位:Unit, 发射点:Point, 目标点:Point)=>void= (移动器Id:IdPreset<"mover_id">, 流逝时间:number, 弹道单位:Unit, 施法者单位:Unit, 目标单位:Unit, 发射点:Point, 目标点:Point):void => {
		let 半径: number = (base.point_distance(发射点, 目标点) * 0.5);
		let 初始角度: number = base.point_angle(目标点, 发射点);
		let 圆心: Point = base.point_move(目标点, 初始角度, 半径);
		let 当前位置: Point = base.point_move(圆心, (初始角度 + (流逝时间 * 100)), 半径);
		base.set_unit_location_and_height(弹道单位, 当前位置, 150);
	}

	//init validators
	function init_validator_0() {
		let data: any = undefined
		if (data = base.eff.cache("$$default_units_ts.unit.火龙.MoverFunction")) {
			data.FunctionClient_UI = validator_38385052
		}
	}
	init_validator_0()
}
