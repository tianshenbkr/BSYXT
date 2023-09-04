--- origin_lua ---
_G.present = _G.present or {}
_G.present['default'] = {point = {}, line = {}, rect = {}, circle = {}, margin = {}, rank = {}, description = {}, invisible = {}, unselectable = {}, link = {}}
local present = _G.present['default']
present.point["大黑鸟的传送点"] = base.scene_point(4608.0, 3288.0, nil, "default")
present.point["Point_2"] = base.scene_point(1376.0, 16384.0, nil, "default")
present.point["Point_3"] = base.scene_point(8000.0, 2592.0, nil, "default")
present.point["Point_4"] = base.scene_point(7968.0, 2240.0, nil, "default")
present.point["Point_5"] = base.scene_point(1376.0, 10304.0, nil, "default")
present.point["Point_6"] = base.scene_point(1312.0, 7616.0, nil, "default")
present.point["草原玩家"] = base.scene_point(10752.0, 3200.0, nil, "default")
present.point["草原敌人"] = base.scene_point(10752.0, 1408.0, nil, "default")
present.point["沙漠玩家"] = base.scene_point(13088.0, 3136.0, nil, "default")
present.point["沙漠敌人"] = base.scene_point(13088.0, 1312.0, nil, "default")
present.point["熔岩玩家"] = base.scene_point(15360.0, 3232.0, nil, "default")
present.point["熔岩敌人"] = base.scene_point(15392.0, 1408.0, nil, "default")
present.point["区域4玩家"] = base.scene_point(15424.0, 6496.0, nil, "default")
present.point["区域4敌人"] = base.scene_point(15424.0, 4832.0, nil, "default")
present.point["区域5玩家"] = base.scene_point(13056.0, 6496.0, nil, "default")
present.point["区域5敌人"] = base.scene_point(13088.0, 4928.0, nil, "default")
present.point["升仙令玩家"] = base.scene_point(10240.0, 7360.0, nil, "default")
present.point["升仙令敌人"] = base.scene_point(10240.0, 6208.0, nil, "default")
present.point["新手任务区域3"] = base.scene_point(7392.0, 3040.0, nil, "default")
present.rect["Rect_1"] = base.rect(base.point(672.0, 7744.0), base.point(2112.0, 7008.0), "default")
present.rect["Rect_2"] = base.rect(base.point(416.0, 8608.0), base.point(2336.0, 8192.0), "default")
present.rect["Rect_2"] = base.rect(base.point(4928.0, 7424.0), base.point(5600.0, 7104.0), "default")
present.rect["进攻怪物"] = base.rect(base.point(6720.0, 1344.0), base.point(7936.0, 640.0), "default")
present.circle["Circles_0"] = base.circle(base.point(1392.0, 10288.0), 176.0, "default")
present.circle["玩家"] = base.circle(base.point(5280.0, 10080.0), 256.0, "default")
present.rank["rank"] = {["大黑鸟的传送点"] = "初始地图/6", ["Point_2"] = "初始地图/7", ["Point_3"] = "初始地图/8", ["Point_4"] = "初始地图/9", ["Point_5"] = "初始地图/10", ["Point_6"] = "初始地图/11", ["草原玩家"] = "初始地图/12", ["草原敌人"] = "初始地图/13", ["沙漠玩家"] = "初始地图/14", ["沙漠敌人"] = "初始地图/15", ["熔岩玩家"] = "初始地图/16", ["熔岩敌人"] = "初始地图/17", ["区域4玩家"] = "初始地图/18", ["区域4敌人"] = "初始地图/19", ["区域5玩家"] = "初始地图/20", ["区域5敌人"] = "初始地图/21", ["升仙令玩家"] = "初始地图/22", ["升仙令敌人"] = "初始地图/23", ["新手任务区域3"] = "初始地图/24", ["Rect_1"] = "初始地图/25", ["Rect_2"] = "初始地图/26", ["Rect_2"] = "初始地图/27", ["进攻怪物"] = "初始地图/28", ["Circles_0"] = "初始地图/29", ["玩家"] = "初始地图/30", }
present.description["description"] = {["大黑鸟的传送点"] = "", ["Point_2"] = "", ["Point_3"] = "", ["Point_4"] = "", ["Point_5"] = "", ["Point_6"] = "", ["草原玩家"] = "", ["草原敌人"] = "", ["沙漠玩家"] = "", ["沙漠敌人"] = "", ["熔岩玩家"] = "", ["熔岩敌人"] = "", ["区域4玩家"] = "", ["区域4敌人"] = "", ["区域5玩家"] = "", ["区域5敌人"] = "", ["升仙令玩家"] = "", ["升仙令敌人"] = "", ["新手任务区域3"] = "", ["Rect_1"] = "", ["Rect_2"] = "", ["Rect_2"] = "", ["进攻怪物"] = "", ["Circles_0"] = "", ["玩家"] = "", }
present.invisible["invisible"] = {["大黑鸟的传送点"] = "", ["Point_2"] = "", ["Point_3"] = "", ["Point_4"] = "", ["Point_5"] = "", ["Point_6"] = "", ["草原玩家"] = "", ["草原敌人"] = "", ["沙漠玩家"] = "", ["沙漠敌人"] = "", ["熔岩玩家"] = "", ["熔岩敌人"] = "", ["区域4玩家"] = "", ["区域4敌人"] = "", ["区域5玩家"] = "", ["区域5敌人"] = "", ["升仙令玩家"] = "", ["升仙令敌人"] = "", ["新手任务区域3"] = "", ["Rect_1"] = "", ["Rect_2"] = "", ["Rect_2"] = "", ["进攻怪物"] = "", ["Circles_0"] = "", ["玩家"] = "", }
present.unselectable["unselectable"] = {["大黑鸟的传送点"] = "", ["Point_2"] = "", ["Point_3"] = "", ["Point_4"] = "", ["Point_5"] = "", ["Point_6"] = "", ["草原玩家"] = "", ["草原敌人"] = "", ["沙漠玩家"] = "", ["沙漠敌人"] = "", ["熔岩玩家"] = "", ["熔岩敌人"] = "", ["区域4玩家"] = "", ["区域4敌人"] = "", ["区域5玩家"] = "", ["区域5敌人"] = "", ["升仙令玩家"] = "", ["升仙令敌人"] = "", ["新手任务区域3"] = "", ["Rect_1"] = "", ["Rect_2"] = "", ["Rect_2"] = "", ["进攻怪物"] = "", ["Circles_0"] = "", ["玩家"] = "", }
present.link["link"] = {}
