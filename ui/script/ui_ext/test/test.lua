
local function test()

    local list = {'z','x','c','v','b'}
    test_ui['@button_panel.array'] = #list

    local uis = test_ui.part.buttons

    for i, v in ipairs(list) do
        local ui = uis[i]
        if ui then
            ui.text = v
            log.info('tx', i, v, ui)
        else
            log.info('not ui')
        end
    end
    
    for k,v in pairs(test_ui.child) do
        log.info('  c', k, v)
    end
    --txt.show = false
end
--test()



base.game:event('玩家_切换英雄',function(_,data)
    log.info('[client]玩家切英雄了')
    log.info(' ', 'player_id', data.player)
    log.info(' ', 'hero', data.hero)
    log.info(' ', 'id_unit', data.id_unit)
    log.info(' ', 'buff_link', data.buff_link)
end)


base.trigger_new(
    function(当前触发器, e)
        log.info('选中单位', e.unit)
    end,
    {{obj = base.any_unit, event_name = "单位-选中"}},
    false,
    nil,
    true
)
