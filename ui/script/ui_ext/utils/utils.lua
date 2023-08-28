
local mt = base.utils

Math = base.math

--监听base.game属性变化，游戏属性是玩家重连也能获取的，和对客户端发送消息有所不同
do
    local attr_func = {}
    base.game:event('游戏-属性变化', function(_, key, value)
        if attr_func[key] then
            for k,func in ipairs(attr_func[key]) do
                func(value)--游戏响应事件，传value
            end
        end
    end)
    --注册监听
    mt.game_attr_listener = function(key, func)
        attr_func[key] = attr_func[key] or {}
        table.insert(attr_func[key], func)
    end
end



--监听玩家属性变化
do
    local player_func = {}
    local local_player_func = {}
    local local_player = base.local_player()
    base.game:event( '玩家-属性变化', function(_, player, key, value)
        if player_func[key] then
            for k,func in ipairs(player_func[key]) do
                func( player, value)--所有玩家响应事件，传player，value
            end
        end
        if player == local_player and local_player_func[key] then
            for k,func in ipairs(player_func[key]) do
                func( value)--本地玩家响应事件，传player，value
            end
        end
    end)
    --注册监听
    mt.player_attr_listener = function(key, func)
        player_func[key] = player_func[key] or {}
        table.insert(player_func[key], func)
    end
    mt.local_player_attr_listener = function(key, func)
        local_player_func[key] = local_player_func[key] or {}
        table.insert(local_player_func[key], func)
    end
end


--监听单位属性变化
do
    local attr_func = {}
    base.game:event('单位-属性变化', function(_, unit, key, value)
        if attr_func[key] then
            for k,func in ipairs(attr_func[key]) do
                func(unit, value)--游戏响应事件，传unit, value
            end
        end
    end)
    --注册监听
    mt.unit_attr_listener = function(key, func)
        attr_func[key] = attr_func[key] or {}
        table.insert(attr_func[key], func)
    end
end


--打印一个表格内的信息
--[[
    tb  表格
    deep    最大深度，默认最深3层
    group   不打印的信息（可为空，表格内的表只会打印一次）
]]
mt.show_table = function( tb, deep, group, now, show_str)
    if type(deep) == 'table' then
        --是ts传进来的
        tb = deep
        deep = group
        group = nil
    end
    --log.info('mt.show_table', tb, deep, group, now, show_str)
    show_str = show_str or {}
    group = group or {}
    group[tb] = true
    --log.info('base.test_show_table', tb, deep, now)
    deep = deep or 3
    now = now or 0
    local front = ''
    for i = 0, now do
        front = front .. '\t'
    end
    if now == 0 then
        show_str[#show_str+1] = '\n[show_table]' .. tostring(tb) .. '===================================================='
    end

    if deep > now then
        for k,v in pairs(tb) do
            --log.info(front, k, v)
            show_str[#show_str+1] = front .. '\t' .. k .. '\t' .. tostring(v)
            if type(v) == 'table' and not group[v] then
                mt.show_table( v, deep, group, now+1, show_str)
            end
        end
    end
    if now == 0 then
        local str = table.concat(show_str, '\n')
        log.info(str)
    end
end


utils.get_text = base.i18n.get_text

do
    local skill_rare_map = {}
    mt.get_skill_rare = function(link)
        if skill_rare_map[link] then return skill_rare_map[link] end
        local cache = base.eff.cache(link)
        local rare = 1
        local attr = cache.SpellAttribute
        if attr then
            rare = attr['稀有度'] or 1
        end
        skill_rare_map[link] = rare
        log.info('[server]get_skill_rare', link, rare)
        return rare
    end
end

do
    mt.get_skill_tip = function(link, level)
        local cache = base.eff.cache(link)
        if not cache then
            return table.concat({
                '[ER_GST]',
                link,
            })
        end
        level = level or 1
        if level <= 0 then
            level = 1
        end
        local tip = cache.Description
        if tip and #tip > 0 then
            tip = tip[math.min(#tip, level)]
            tip = base.i18n.get_text(tip)
            if cache.DescriptionParams then
                local params = {}
                for _, value in ipairs(cache.DescriptionParams) do
                    table.insert(params, value(self))
                end
                tip = string.format(tip, table.unpack(params))
            end
        end
        return tip or ""
    end
end


do
    local skill_icon_map = {}
    mt.get_skill_icon = function(link)
        if skill_icon_map[link] then
            return skill_icon_map[link]
        end
        local cache = base.eff.cache(link)
        if not cache then
            skill_icon_map[link] = ""
            log.info('没有cache')
            return ""
        end
        skill_icon_map[link] = cache.IconName
        log.info('icon', cache.IconName)
        return cache.IconName or ""
    end
end

do
    local skill_title_map = {}
    mt.get_skill_title = function(link)
        if skill_title_map[link] then
            return skill_title_map[link]
        end
        local cache = base.eff.cache(link)
        if not cache then
            skill_title_map[link] = ""
            return ""
        end
        skill_title_map[link] = utils.get_text( cache.Name)
        return skill_title_map[link]
    end
end


--英雄卡
--用到的估计不多，直接拿
local function get_tf_buff_link(link)
    local buff_link = link:gsub([[.unit.]], [[.buff.]])
    buff_link = buff_link:gsub([[.root]], [[被动技能.root]])
    local buff_cache = base.eff.cache(buff_link)
    if buff_cache then
        return true, buff_link
    else
        return false, buff_link
    end
end
mt.get_hero_info = function(link)
    local cache = base.eff.cache(link)
    if not cache then
        return nil
    end
    local info = {}
    info.name = utils.get_text( cache.Name)
    info.rare = cache.AttributeString and cache.AttributeString['STRING_稀有度'] or ''
    info.icon = cache.Icon
    info.tip = table.concat({
        '使用后切换英雄：\n',
        utils.get_text( cache.Description) or '',
    })
    
    local res, tf_link = get_tf_buff_link(link)
    if res == true then
        local bc = base.eff.cache(tf_link)
        info.tip = table.concat({
            info.tip,
            '\n\n',
            utils.get_text( bc.Name) or '',
            '\n',
            utils.get_text( bc.Description) or '',
        })
    end
    return info
end



--数值，保留几位小数（0,1,2）
mt.get_str_value = function( value, num)
    num = num or 2
	if value < 0 then value = -value end
    local a,b = math.modf(value)
    if not b or b == 0 then
        return tostring(math.floor(a))
    else
        if (num or 2) == 0 then
            return tostring(math.floor(a))
        else
			local a,b = math.modf(value*10)
			if num == 1 or b == 0 then
				return string.format('%.1f',value)
			else
				--最高给个2位小数
				return string.format('%.2f',value)
			end
        end
    end
end


mt.get_attr_tip = function(attr, value, num)
    local str = {attr}
    if value > 0 then
        str[#str+1] = '+'
    else
        str[#str+1] = '-'
        value = -value
    end
    str[#str+1] = mt.get_str_value( value, num)

    return table.concat(str)
end


local ____lualib = base.tsc
local __TS__TypeReference = ____lualib.__TS__TypeReference
mt.get_ui_by_name = function(name)
    return base.gui_get_part_as(
        __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
        base.gui_get_main_page(),
        name
    )
end