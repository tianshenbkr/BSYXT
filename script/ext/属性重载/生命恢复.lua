

base.game:event('单位-创建', function(_, unit)
    --log.info('单位-创建', unit)
end)

base.game:event('单位-初始化', function(_, unit)
    if unit:get('生命百分比恢复') > 0 then
        unit:add_buff '属性-回血' { }
    end
end)


------------------------------------------------生命恢复--------------------------------------------------
local life_recover_map = {}
local life_recover_group = {}

local mt = base.buff['属性-回血']
function mt:on_add()
    local hero = self.target
    hero:set_ex('生命恢复', hero:get('生命上限')*hero:get('生命百分比恢复')/100, 1)
    table.insert(life_recover_group, hero)
end
function mt:on_cover(dest)
    return dest.keep == true
end
function mt:on_remove()
    local hero = self.target
    for k,v in ipairs(life_recover_group) do
        if hero == v then
            table.remove(life_recover_group, k)
            break
        end
    end
end

--每秒刷新一下生命恢复
base.loop(1000,function()
    for k,hero in ipairs( life_recover_group) do
        if hero:is_alive_ex() then
            hero:set_ex('生命恢复', hero:get('生命上限')*hero:get('生命百分比恢复')/100, 1)
        end
    end
end)

------------------------------------------------生命恢复--------------------------------------------------

