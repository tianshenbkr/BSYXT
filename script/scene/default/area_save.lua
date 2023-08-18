--- origin_lua ---
_G.present = _G.present or {}
_G.present['default'] = {point = {}, line = {}, rect = {}, circle = {}, margin = {}, rank = {}, description = {}, invisible = {}, unselectable = {}}
local present = _G.present['default']
present.rank["rank"] = {}
present.description["description"] = {}
present.invisible["invisible"] = {}
present.unselectable["unselectable"] = {}
