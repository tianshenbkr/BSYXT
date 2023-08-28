

--[[放一些常用功能、通用的扩展]]
Math = base.math

local mt = {}
base.utils = mt
utils = mt


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

mt.each_player = function(act)
    for k,py in ipairs(base.get_each_player("user")) do
        act(py)
    end
end


--理论上所有技能卡英雄卡符文卡
mt.get_card_rare = function(link)
    return base.data.card_rare_map[link]
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


--获取表里随机n个数据
mt.get_random_table = function(tb, num)
    local new = {}
    for k,v in pairs(tb) do
        new[#new+1] = v
    end
    local rt = {}
    for i = 1, num do
        if #new>0 then
            local rd = Math.random_int(1, #new)
            rt[#rt+1] = new[rd]
            table.remove(new,rd)
        end
    end
    return rt
end

mt.link_check = function(link)
    if not link:find('root') then
        return link .. '.root'
    end
    return link
end

--获取效果的func
mt.get_act_func = function(link)
    local cache = base.eff.cache(v)
    if cache and cache.Func then
        local func = cache.Func
        return func
    end
end

--假装eff，让单位拿到效果
mt.eff_unit_func = function( unit, link)
    local cache = base.eff.cache(link)
    if cache and cache.Func then
        local func = cache.Func
        func({
            type = 'eff_param',
            main_target = function( self)
                return self
            end,
            get_unit = function( self)
                return unit
            end,
        })
    end
end


--table拷贝
mt.table_copy = function(tb)
    local new = {}
    for k,v in pairs(tb) do
        if type(v) == 'table' then
            new[k] = utils.table_copy( v)
        else
            new[k] = v
        end
    end
    return new
end