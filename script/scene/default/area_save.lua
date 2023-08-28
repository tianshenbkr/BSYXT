--- origin_lua ---
_G.present = _G.present or {}
_G.present['default'] = {point = {}, line = {}, rect = {}, circle = {}, margin = {}, rank = {}, description = {}, invisible = {}, unselectable = {}, link = {}}
local present = _G.present['default']
present.point["大黑鸟的传送点"] = base.scene_point(4608.0, 3288.0, nil, "default")
present.point["新手任务区域3"] = base.scene_point(7392.0, 3040.0, nil, "default")
present.point["Point_2"] = base.scene_point(1376.0, 16384.0, nil, "default")
present.point["Point_3"] = base.scene_point(8000.0, 2592.0, nil, "default")
present.point["Point_4"] = base.scene_point(7968.0, 2240.0, nil, "default")
present.rect["Rect_1"] = base.rect(base.point(672.0, 7744.0), base.point(2112.0, 7008.0), "default")
present.rect["Rect_2"] = base.rect(base.point(416.0, 8608.0), base.point(2336.0, 8192.0), "default")
present.rect["Rect_2"] = base.rect(base.point(4928.0, 7424.0), base.point(5600.0, 7104.0), "default")
present.circle["Circles_0"] = base.circle(base.point(1392.0, 10288.0), 176.0, "default")
present.circle["玩家"] = base.circle(base.point(5280.0, 10080.0), 256.0, "default")
present.rank["rank"] = {["大黑鸟的传送点"] = "初始地图/49", ["新手任务区域3"] = "初始地图/50", ["Point_2"] = "初始地图/51", ["Point_3"] = "初始地图/52", ["Point_4"] = "初始地图/53", ["Rect_1"] = "初始地图/54", ["Rect_2"] = "初始地图/55", ["Rect_2"] = "初始地图/56", ["Circles_0"] = "初始地图/57", ["玩家"] = "初始地图/58", }
present.description["description"] = {["大黑鸟的传送点"] = "", ["新手任务区域3"] = "", ["Point_2"] = "", ["Point_3"] = "", ["Point_4"] = "", ["Rect_1"] = "", ["Rect_2"] = "", ["Rect_2"] = "", ["Circles_0"] = "", ["玩家"] = "", }
present.invisible["invisible"] = {["大黑鸟的传送点"] = "", ["新手任务区域3"] = "", ["Point_2"] = "", ["Point_3"] = "", ["Point_4"] = "", ["Rect_1"] = "", ["Rect_2"] = "", ["Rect_2"] = "", ["Circles_0"] = "", ["玩家"] = "", }
present.unselectable["unselectable"] = {["大黑鸟的传送点"] = "", ["新手任务区域3"] = "", ["Point_2"] = "", ["Point_3"] = "", ["Point_4"] = "", ["Rect_1"] = "", ["Rect_2"] = "", ["Rect_2"] = "", ["Circles_0"] = "", ["玩家"] = "", }
present.link["link"] = {}
