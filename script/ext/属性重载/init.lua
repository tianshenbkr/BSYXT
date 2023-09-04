

base.attribute = {}


require 'ext.属性重载.unit'
require 'ext.属性重载.hero'
require 'ext.属性重载.生命恢复'


local function test()
    local function show(hero)
        log.info('show---------------------------')
        log.info('get', hero:get('攻击'))
        log.info('get_ex攻击', hero:get_ex('攻击', 1), hero:get_ex('攻击', 2), hero:get_ex('攻击', 3))
        log.info('get_ex加成', hero:get_ex('攻击力加成', 1))
    end
    
    base.mxh_test.register('get攻击力', function(player)
        local hero = player:get_hero()
        show(hero)
    end)
    base.mxh_test.register('add攻击力', function(player)
        local hero = player:get_hero()
        hero:add_ex('攻击', 100, 1)
        show(hero)
    end)
    base.mxh_test.register('add攻击加成', function(player)
        local hero = player:get_hero()
        hero:add_ex('攻击力加成', 50, 1)
        show(hero)
    end)
    base.mxh_test.register('get攻击加成buff', function(player)
        local hero = player:get_hero()
        hero:add_buff_new('$$guard_templete.buff.测试BUFF_攻击加成.root')
        show(hero)
    end)
end
--test()

local function test2()
    local function show(hero)
        log.info('show---------------------------')
        log.info('get', hero:get('攻击'))
        log.info('get_ex攻击', hero:get_ex('攻击', 1), hero:get_ex('攻击', 2), hero:get_ex('攻击', 3))
        log.info('get_ex加成', hero:get_ex('攻击力加成', 1))
    end
    
    base.mxh_test.register('add攻击加成', function(player)
        local hero = player:get_hero()
        hero:add_ex('攻击力加成', 50, 1)
        hero:add_ex('生命值加成', 50, 1)
        show(hero)
    end)
    base.mxh_test.register('-add攻击加成', function(player)
        local hero = player:get_hero()
        hero:add_ex('攻击力加成', -50, 1)
        hero:add_ex('生命值加成', -50, 1)
        show(hero)
    end)
end
--test2()