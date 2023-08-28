

base.game:event('游戏-开始', function()
    utils.each_player(function(py)
        base.rpg_challenge.create( py, '$$busiyixiantu_5n1b.rpg_challenge.主线挑战.root')
        base.rpg_challenge.create( py, '$$busiyixiantu_5n1b.rpg_challenge.爬塔.root')
        base.rpg_challenge.create( py, '$$busiyixiantu_5n1b.rpg_challenge.不可思议的挑战.root')
    end)
end)