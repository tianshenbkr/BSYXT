

local coin_list = base.eff.cache('$$busiyixiantu_5n1b.rpg_地图数据.属性兑换.root').coin
local kill_list = base.eff.cache('$$busiyixiantu_5n1b.rpg_地图数据.属性兑换.root').kill

-- 记录玩家修炼到哪
local player_coin_index = {}
local player_kill_index = {}

-- 玩家一键修炼计时器如果不为空则点击无效
local player_timer = {}

for player in base.each_player 'user' do
    player_coin_index[player] = 1
    player_kill_index[player] = 1
end

local get_coin_sx = function (player)
    local coin_i = player_coin_index[player]
    local unit = player:get_hero()
    local item = coin_list[coin_i]

    if player:get('金钱') >= item.cost then
        player:add('金钱', -item.cost)
        local sx = item.effect.Key
        local value = item.effect.Value()
        local type = item.effect.Percentage
        if type == true then
            value = unit:get(sx) * (value/100)
        end

        unit:add(sx, value)

        player_coin_index[player] = coin_i + 1

        player:ui 'refresh_sx_panel' {
            coin_index = player_coin_index[player],
            kill_index = player_kill_index[player],
        }
        return true
    else
        return false
    end
end
local get_kill_sx = function (player)
    local kill_i = player_kill_index[player]
    local unit = player:get_hero()
    local item = kill_list[kill_i]

    if unit:get('杀敌') >= item.cost then
        unit:add('杀敌', -item.cost)
        local sx = item.effect.Key
        local value = item.effect.Value()
        local type = item.effect.Percentage
        if type == true then
            value = unit:get(sx) * (value/100)
        end

        unit:add(sx, value)

        player_kill_index[player] = kill_i + 1

        player:ui 'refresh_sx_panel' {
            coin_index = player_coin_index[player],
            kill_index = player_kill_index[player],
        }

        return true
    else
        return false
    end
end

base.ui.proto.on_ex_coin_click = function (player)
    if player_timer[player] or player_coin_index[player] > #coin_list then
        return
    end

    if get_coin_sx(player) == true then
        player:ui 'send_tip_on_client' {
            tip = '兑换成功'
        }
    else
        player:ui 'send_tip_on_client' {
            tip = '金钱不足'
        }
    end
end
base.ui.proto.on_ex_allcoin_click = function (player)
    if player_timer[player] or player_coin_index[player] > #coin_list then
        return
    end

    local coin_i = player_coin_index[player]
    local times = 0
    local need_cost = 0

    for i=coin_i, base.math.min(coin_i + 8-((coin_i-1)%8) - 1, #coin_list) do
        if need_cost + coin_list[i].cost <= player:get('金钱') then
            need_cost = need_cost + coin_list[i].cost
            times = times + 1
        else 
            break
        end

    end

    if times > 0 then
        local num = 0
        player_timer[player] = base.loop(100, function ()
            if num < times then
                get_coin_sx(player)
                num = num + 1
            else
                player_timer[player]:remove()
                player_timer[player] = nil
            end
        end)
        player:ui 'send_tip_on_client' {
            tip = '兑换成功'
        }
    else
        player:ui 'send_tip_on_client' {
            tip = '金钱不足'
        }
    end
end
base.ui.proto.on_ex_kill_click = function (player)
    if player_timer[player] or player_kill_index[player] > #kill_list then
        return
    end

    if get_kill_sx(player) == true then
        player:ui 'send_tip_on_client' {
            tip = '兑换成功'
        }
    else
        player:ui 'send_tip_on_client' {
            tip = '杀敌数不足'
        }
    end
    
end
base.ui.proto.on_ex_allkill_click = function (player)
    if player_timer[player] or player_kill_index[player] > #kill_list then
        return
    end

    local unit = player:get_hero()
    local kill_i = player_kill_index[player]
    local times = 0
    local need_cost = 0

    for i=kill_i, base.math.min(kill_i + 8-((kill_i-1)%8) - 1, #kill_list) do
        if need_cost + kill_list[i].cost <= unit:get('杀敌') then
            need_cost = need_cost + kill_list[i].cost
            times = times + 1
        else 
            break
        end
    end

    if times > 0 then
        local num = 0
        player_timer[player] = base.loop(100, function ()
            if num < times then
                get_kill_sx(player)
                num = num + 1
            else
                player_timer[player]:remove()
                player_timer[player] = nil
            end
        end)
        player:ui 'send_tip_on_client' {
            tip = '兑换成功'
        }
    else
        player:ui 'send_tip_on_client' {
            tip = '杀敌数不足'
        }
    end
end
