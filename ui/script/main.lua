---require_common---
require"@common.base"
require"@global_default.lua_declare"
---load localization file---
base.i18n.load_map("busiyixiantu_5n1b")
---scene_folder---
xpcall(require_folder, function(err) log.info(string.format("调用失败：%s", err)) end, "scene")
---init data object cache---
if base.eff.has_cache_init() then
else
	base.eff.init_cache()
end
---new struct creater---

base.new_struct_creater = {}
function base.proto.__server_custom_event_struct_creater(msg)
    if msg.struct_name and base.new_struct_creater then
        base.new_struct_creater[msg.struct_name] = function()
            return msg.struct
        end
    end
end
function _send_custom_event_struct_creater(param_name, param_struct)
    base.game:server'__client_custom_event_struct_creater'{
        struct_name = param_name,
        struct = param_struct,
    }
end

---require lua plus---
lib_game_options = require"@lib_game_options.main"
lib_common_sounds = require"@lib_common_sounds.main"
lib_region = require"@lib_region.main"
smallcard_item_pickup = require"@smallcard_item_pickup.main"
lib_plotdialogue = require"@lib_plotdialogue.main"
lib_common_ai = require"@lib_common_ai.main".lib_common_ai
smallcard_choose_one = require"@smallcard_choose_one.main".smallcard_choose_one
lib_control = require"@lib_control.main".lib_control
smallcard_unit_attr_panel = require"@smallcard_unit_attr_panel.main".smallcard_unit_attr_panel
smallcard_get_items = require"@smallcard_get_items.main".smallcard_get_items
defaultui = require"@defaultui.main".defaultui
smallcard_mail = require"@smallcard_mail.main".smallcard_mail
smallcard_inventory = require"@smallcard_inventory.main".smallcard_inventory

---gui---
do
local res, page = xpcall(require, function(err) end, "gui.page")
if res and page then
local MainPage = page.MainPage
if MainPage then
    local main_page = MainPage:new()
    _ENV.page_components = page
    _ENV.main_page = main_page
    _G.__main_page = main_page
end
end
end
---origin_main_file---
require '@gameui.simple_ui.init'
require '@gameui.timershowclient'

require 'ui_ext'
require 'map_ui'
---ts_module---
require "trigger_module_main"require "trigger_validator"
local ret = {["busiyixiantu_5n1b"] = busiyixiantu_5n1b}
for k, v in pairs(____module or {}) do ret["busiyixiantu_5n1b"][k] = v end
for k, v in pairs(____return or {}) do ret[k] = v end
return ret