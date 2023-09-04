
base.game:event('玩家_选择英雄_数据准备', function(_,data)
    local hero = data.hero

    --常驻的百分比回血，强制添加keep
    hero:add_buff '属性-回血' {
        keep = true,
    }
end)