

local type_act = {}

--选择英雄
type_act['pick_hero'] = function(choose_info)
    local function get_unit_list(link)
        local cache = base.eff.cache(link)
        if not cache then return nil end
        if not cache.unitIdList then return nil end
        local list = {}
        for k,ulink in ipairs(cache.unitIdList) do
            local ul = ulink
            if not ul:find('root') then
                ul = ul .. '.root'
            end
            local ucache = base.eff.cache(ul)
            if ucache then
                local hero_name = base.i18n.get_text(ucache.Name)
                list[#list+1] = hero_name
                --log.info('hero_name', k, hero_name)
            else
                log.error( 'pick_hero 没有找到unit cache', ul)
            end
        end
        return list
    end

    local list_phy = get_unit_list('$$busiyixiantu_5n1b.rpg_地图数据.英雄列表_物理.root')
    local list_mag = get_unit_list('$$busiyixiantu_5n1b.rpg_地图数据.英雄列表_法术.root')
    local list_all = {}
    for _,list in ipairs({list_phy, list_mag}) do
        for _,v in ipairs(list) do
            list_all[#list_all+1] = v
        end
    end
    local function get_tip(list)
        --local str = {}
        --return table.concat({
        --    '在以下英雄中随机：',
        --    '\n',
        --    table.concat(list,'，'),
        --})
        return '随机英雄'
    end
    choose_info.list = {}

    table.insert( choose_info.list, {
        title = '物理英雄',
        icon = 'image/image_pick_hero/phy.png',
        tip = get_tip(list_phy),
    })
    table.insert( choose_info.list, {
        title = '随机',
        icon = 'image/image_pick_hero/random.png',
        tip = get_tip(list_all),
    })
    table.insert( choose_info.list, {
        title = '法术英雄',
        icon = 'image/image_pick_hero/mag.png',
        tip = get_tip(list_mag),
    })
    choose_info.title = '选英雄'
end


--学习技能，要选一个已有的技能删掉
type_act['hero_skill'] = function(choose_info)
    local max = choose_info.max
    local player = base.local_player()
    local hero = player:get_hero()

    choose_info.title = '选择替换的技能'
    choose_info.list = {}
    for i = 1, max do
        local skl = hero:find_skill(i,'英雄')
        if skl then
            local link = skl:get_name()
            local rare = utils.get_skill_rare(link)
            choose_info.list[i] = {
                title = utils.get_skill_title( link) .. '[' .. math.floor(rare) .. ']',
                tip = utils.get_skill_tip( link),
                icon = utils.get_skill_icon(link),
            }
        end
    end
end


--学习符文，选一个已有的技能删掉
type_act['hero_fw'] = function(choose_info)
    local max = choose_info.max
    local player = base.local_player()
    local hero = player:get_hero()

    choose_info.title = '选择替换的符文'
    choose_info.list = {}
    if not hero._fw_id_list then
        log.error('错误-没有找到符文信息')
        return
    end
    for id,link in ipairs(hero._fw_id_list) do
        local rare = utils.get_skill_rare( link)
        choose_info.list[id] = {
            title = utils.get_skill_title( link) .. '[' .. math.floor(rare) .. ']',
            tip = utils.get_skill_tip( link),
            icon = utils.get_skill_icon(link),
        }
    end
end

type_act['mb'] = function(choose_info)
    local rare = choose_info.mb_rare
    for k,id in ipairs(choose_info.mb_list) do
        local link = ('$$busiyixiantu_5n1b.buff.秘宝奖励%d_%d.root'):format( rare, id)
        local cache = base.eff.cache(link)
        choose_info.list[k] = {
            title = base.i18n.get_text(cache.Name),
            icon = cache.BuffIcon,
            tip = base.i18n.get_text(cache.Description),
        }
    end
end

type_act['use_zjd'] = function(choose_info)
    local hero = base.local_player():get_hero()
    choose_info.title = '选择吃掉的SSS装备'
    choose_info.list = {}
    local equips = {}
    for k,v in pairs(hero:get_inventory_items(4)) do
        if v.cache.Quality == 6 then
            table.insert(equips, v)
        end
    end

    for k, v in pairs(equips) do
        local sx_list = base.eff.cache(v.cache.EquipMod.Buffs[1]).KeyValuePairs
        local tip = ''
        for key, value in pairs(sx_list) do
            if tip ~= '' then
                tip = tip..'\n'
            end
            tip = tip..value.Key..'+'..value.Value()
            if value.Percentage == true then
                tip = tip..'%'
            end
        end

        choose_info.list[k] = {
            title = base.i18n.get_text(v.cache.Name),
            icon = v.cache.Icon,
            tip = tip,
        }
    end
end


--等级奖励
do
    local function get_attr_tip(id, key)
        local info = base.data.level_reward[id][key]
        local str = {}
        for k,v in ipairs(info) do
            str[#str+1] = utils.get_attr_tip( v.attr, v.value) .. '%'
        end
        return table.concat(str,'\n')
    end
    type_act['herolv'] = function(choose_info)
        local max = choose_info.max
        local player = base.local_player()
        local hero = player:get_hero()

        local id = choose_info.reward_id
        local keys = choose_info.reward_keys

        choose_info.title = '选择奖励'
        choose_info.list = {}
        
        for k,v in ipairs(keys) do
            choose_info.list[k] = {
                title = '奖励' .. Math.floor(k),
                tip = get_attr_tip( id, v),
            }
        end
    end
end

local function get_attr_tip(list)
    local str = {}
    for k,v in ipairs(list) do
        str[#str+1] = v.attr .. '+' .. utils.get_str_value()
    end
    return table.concat(str)
end


type_act['test2'] = function(choose_info)
    choose_info.list = {}
    for i = 1,2 do
        choose_info.list[i] = {
            title = 'test2_' .. i,
            icon = 'image/npc.png',
            tip = '22222222222222222222',
        }
    end
end
type_act['test3'] = function(choose_info)
    choose_info.list = {}
    for i = 1,4 do
        choose_info.list[i] = {
            title = 'test3_' .. i,
            icon = 'image/npc.png',
            tip = '33333333333333333333333',
        }
    end
end
type_act['test4'] = function(choose_info)
    choose_info.list = {}
end

local function info_process(info)
    if not info.key then return end
    --根据key把数据处理一下，info是引用类型，直接对着info改就行了
    if type_act[info.key] then
        type_act[info.key](info)
    end
end

return info_process