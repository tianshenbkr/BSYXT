

local cheat = {}



local send_over = false
--开局把要测试的功能发送到客户端，客户端创建测试面板
local function send()
    local list = {}
    for k,tb in pairs(cheat) do
        list[k] = {}
        for _,v in ipairs(tb) do
            table.insert(list[k], v.text)
        end
    end
    base.game.set('rpg_test_panel', {
        list = list,
    })
    --base.utils.show_table( list)
    send_over = true
end
base.game:event('游戏-开始', function()
    base.timer( 1000, 1, function()
        send()
    end)
end)



--动态注册测试按钮，可以从其他的地方传进来
base.rpg_test.register = function( text, act, id)
    id = id or 1
    cheat[id] = cheat[id] or {}
    cheat[id][#cheat[id]+1] = {
        text = text,
        act = act,
        id = id or 1,
    }
    if send_over == true then
        send()
    end
end

base.rpg_test.register_ts = function( _, text, act, id)
    id = id or 1
    cheat[id] = cheat[id] or {}
    cheat[id][#cheat[id]+1] = {
        text = text,
        act = act,
        id = id or 1,
    }
    if send_over == true then
        send()
    end
end



--接收点击事件
base.ui.proto.rpg_test_panel_click = function( player, msg)
    if cheat[msg.id] and cheat[msg.id][msg.key] and cheat[msg.id][msg.key].act then
        cheat[msg.id][msg.key].act(player)
    end
end



--公用测试
local function init_globals()
    
    base.rpg_test.register('测试_杀怪BUFF', function(player)
        local hero = player:get_hero()
        hero:add_skill('$$busiyixiantu_5n1b.spell.测试_杀怪BUFF.root','隐藏')
    end)
    base.rpg_test.register('金钱+10w', function(player)
        player:add('金钱', 100000)
    end)

end
init_globals()




--本地测试
if _SCE_PC_ENV.ID == 1 then
    require 'ext.测试功能.测试1'--魏
end
