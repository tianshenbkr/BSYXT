
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
        --send()
    end)
end)
