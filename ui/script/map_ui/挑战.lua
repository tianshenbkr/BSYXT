

base.game:event('本地玩家_创建rpg_challenge', function(_, data)
    local rc = data.rpg_challenge
    if rc.link == '$$busiyixiantu_5n1b.rpg_challenge.主线挑战.root' then
        local bt = utils.get_ui_by_name('挑战测试')
        rc:bind_ui_button( bt)
        log.info('c主线', rc, bt)
    elseif rc.link == '$$busiyixiantu_5n1b.rpg_challenge.爬塔.root' then
        local bt = utils.get_ui_by_name('爬塔')
        rc:bind_ui_button( bt)
        log.info('c爬塔', rc, bt)
    elseif rc.link == '$$busiyixiantu_5n1b.rpg_challenge.不可思议的挑战.root' then
        local bt = utils.get_ui_by_name('不可思议的挑战')
        rc:bind_ui_button( bt)
        log.info('c不可思议', rc, bt)
    end
end)


