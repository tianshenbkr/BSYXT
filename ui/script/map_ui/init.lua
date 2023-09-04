
base.map_ui = {}

--隐藏默认的背包入口
local im = require '@smallcard_inventory.inventory.main'
local ent = im.entrance
ent.show = false

--data
require 'map_ui.data'

--属性兑换
require 'map_ui.信息提示'

--技能卡、符文卡、英雄卡
require 'map_ui.卡'

--属性兑换
require 'map_ui.属性兑换'

require 'map_ui.升仙令'

require 'map_ui.挑战'

