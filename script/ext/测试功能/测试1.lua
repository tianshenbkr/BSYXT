
base.rpg_test.register('设置攻击范围200', function(player)
    local hero = player:get_hero()
    local skl = hero:find_skill(0,'英雄')
    skl:set_option('range', 200)
end)

base.rpg_test.register('设置攻击范围2000', function(player)
    local hero = player:get_hero()
    local skl = hero:find_skill(0,'英雄')
    skl:set_option('range', 2000)
end)