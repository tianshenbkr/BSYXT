
local rare_list = {
    'C',
    'B',
    'A',
    'S',
    'SS',
    'SSS',
}

--技能卡、符文卡
do
    local function item_init(unit, item, link)
        local title = utils.get_skill_title( link)
        local rare = utils.get_skill_rare(link)
        if base.data.skill_card_map[link] then
            title = '[技能' .. rare_list[rare] .. ']' .. title
        end
        if base.data.fw_map[link] then
            title = '[符文' .. rare_list[rare] .. ']' .. title
        end
        item.name = title
        item.icon = utils.get_skill_icon(link)

        item.des = table.concat({
            '使用后学习此技能\n技能效果：',
            utils.get_skill_tip(link)
        })

        if not item.cache then
            local item_link = unit:get'sys_item_link'
            local item_cache = base.eff.cache(item_link)
            item.cache = item_cache
        end
    end

    --监听
    utils.unit_attr_listener( 'bind_skill', function( unit, link)
        local item = unit.item or base.item(unit._id)

        --理论上第一次会拿到，但是实际上item的部分同步有延迟，总之先timer做个保险，客户端无法准确的获取到单位被销毁的事件，不能用loop，以防万一先跑个1000次
        base.timer(50,1000,function(t)
            if unit.item then
                item_init( unit, unit.item, link)
                t:remove()
            else
                local item = base.item(unit._id)
                if item then
                    unit.item = item
                    item_init( unit, item, link)
                    t:remove()
                end
            end
        end)
    end)
end



--英雄卡
do
    local function item_init(unit, item, link)
        local hero_info = utils.get_hero_info(link)
        local rare = hero_info.rare
        item.name = '[英雄' .. rare .. ']' .. hero_info.name

        item.des = 'asdfasfsdafsda'
        item.icon = hero_info.icon

        item.des = hero_info.tip

        if not item.cache then
            local item_link = unit:get'sys_item_link'
            local item_cache = base.eff.cache(item_link)
            item.cache = item_cache
        end
    end

    --监听
    utils.unit_attr_listener( 'bind_unit', function( unit, link)
        local item = unit.item or base.item(unit._id)

        --理论上第一次会拿到，但是实际上item的部分同步有延迟，总之先timer做个保险，客户端无法准确的获取到单位被销毁的事件，不能用loop，以防万一先跑个1000次
        base.loop(50,function(t)
            if unit.item then
                item_init( unit, unit.item, link)
                t:remove()
            else
                local item = base.item(unit._id)
                if item then
                    unit.item = item
                    item_init( unit, item, link)
                    t:remove()
                end
            end
        end)
    end)
end
