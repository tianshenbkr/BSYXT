

local sxl = {}
local mt = {}
sxl.__index = mt
setmetatable( sxl, sxl)
base.sxl = sxl

function mt:challenge_finish()
    local py = self.player
    local hero = py:get_hero()
    local challenge = base.eff.cache( self.cache.Challenge)

    --utils.show_table(task_info)
    if challenge.AwardAttr then
        for k,v in ipairs(challenge.AwardAttr) do
            if v.Percentage == true then
                at = attr[2]
                hero:add_ex(v.Key, v.Value(), 2)
            else
                hero:add_ex(v.Key, v.Value(), 1)
            end
        end
    end

    if challenge.AwardItem then
        for k,v in ipairs(challenge.AwardItem) do
            for i = 1, v.Number do
                base.create_item_on_unit( v.Item, hero)
            end
        end
    end

    if challenge.AwardEffect then
        for k,v in ipairs(challenge.AwardEffect) do
            if v ~= '' then
                utils.eff_unit_func( hero, v)
                --local cache = base.eff.cache(v)
                --if cache and cache.Func then
                --    local func = cache.Func
                --    func(self)
                --end
            end
        end
    end

    if challenge.AwardBuff then
        for k, link in ipairs(challenge.AwardBuff) do
            if link and link ~= '' then
                hero:add_buff_new( link)
            end
        end
    end

    --完成
    for k,v in ipairs( py._sxl_data.list) do
        if v == self then
            table.remove( py._sxl_data.list, k)
            for _, target in ipairs(py._sxl_data.list) do
                target.slot = _
            end
            py:sync_sxl_link()
            break
        end
    end

    --[[
    if self.cache.AutoNext == true then
        --自动继续
        if self.task_info[level+1] then
            base.wait(self.AutoDelay*1000,function()
                self:start_task()
            end)
        end
    elseif self.cache.AutoExit == true then
        --自动退出
        base.wait(self.cache.AutoDelay*1000,function()
            base.game:event_notify('玩家_完成rpg挑战自动退出', {
                player = self.player,
            })
        end)
    end
    ]]
end

--清空关卡
function mt:clear()
    if not self.current_task then
        return
    end
    for k,v in ipairs(self.current_task.trg) do
        v:remove()
    end
    for k,v in ipairs(self.current_task.unit) do
        v:remove()
    end
    self.current_task = nil
end


function mt:create_enemy( task_info)
    local tt = self.current_task.trg
    local tu = self.current_task.unit
    local task_bind = self
    local challenge = base.eff.cache( self.cache.Challenge)

    local c_map = {}

    local function create( info)
        local enemy = base.player_create_unit_ai(
            base.player(2),
            info.Unit,
            info.Position:polar_to_ex(
                Math.random_int(0,360),
                Math.random_int(0,info.CreateRange or 0)
            ),
            info.CreateFacing or 0,
            true
        )
        log.info( 'create', enemy)
        tu[#tu+1] = enemy
        enemy._task_bind = task_bind
    end
    local function over()
        --完成了
        self:challenge_finish()
    end
    --完成检查
    local function over_check()
        for k,v in pairs( c_map) do
            if v[2] < 0 then
            elseif v[1] < v[2] then
                return
            end
        end
        over()
    end
    --杀死统计
    local function kill( unit)
        local name = unit:get_name()
        c_map[name][1] = c_map[name][1] + 1
        if c_map[name][3] < 0 then
            local timer = base.wait(1000,function()
                create(c_map[name][4])
                for k,v in ipairs(tt) do
                    if v == timer then
                        table.remove( tt, k)
                        break
                    end
                end
            end)
            tt[#tt+1] = timer
        elseif c_map[name][2] < c_map[name][3] then
            c_map[name][2] = c_map[name][2] + 1
            tt[#tt+1] = base.wait(1000,function()
                create(c_map[name][4])
            end)
        else
            over_check()
        end
    end
    --加入条件
    local function condition( info)
        c_map[info.Unit] = {
            0,--击杀数
            info.MaxNumber,--创建数量
            info.Number,--需求数
            info,
        }
    end

    local Wave = {}
    for _,link in ipairs(challenge.Wave) do
        local v = base.eff.cache( link)
        Wave[_] = {
            Position = v.Position and v.Position[1](),
            Delay = v.Delay,
            MaxNumber = v.MaxNumber,
            Number = v.Number,
            Unit = v.Unit,
            CreateRange = v.CreateRange,
        }
        v =  Wave[_]
        if v.Number < 0 then
            v.IsTask = false
        elseif v.MaxNumber == 0 then
            v.MaxNumber = v.Number
        elseif v.MaxNumber < 0 then
        end
        --log.info('Wave', _, v.Unit, v.Number, v.MaxNumber)
    end
    base.game:event_notify('挑战刷怪数据准备', self.player, self, Wave)
    --过一遍所有的敌人信息
    for _,info in ipairs(Wave) do
        local point = info.Position
        tt[#tt+1] = base.wait(info.Delay*1000,function()
            for i = 1, info.MaxNumber do
                create(info)
            end
        end)
        --if info.IsTask then
            condition(info)
        --end
    end
    tt[#tt+1] = base.game:event('单位-死亡', function( _, unit, killer)
        if unit._task_bind == task_bind then
            kill( unit)
        end
    end)
end

--开始挑战关卡
function mt:start_challenge()
    if self.need_kill > 0 then
        --log.info('杀敌没杀完-无法挑战')
        return
    end
    self:clear()
    self.current_task = {
        trg = {},
        unit = {},
    }
    local challenge = {
        __index = base.eff.cache( self.cache.Challenge),
    }
    setmetatable( challenge, challenge)

    if not challenge then
        --log.error('[升仙令]没有找到对应关卡link', self.link, id)
        return
    end

    local py = self.player
    local pid = py:get_slot_id()
    local hero = py:get_hero()
    if hero:is_alive_ex() == false then
        --log.info('英雄死亡，无法挑战')
        return
    end
    --有玩家点，把玩家英雄穿进去
    local enter_point = challenge.PlayerPosition and challenge.PlayerPosition[1]()
    local scene = enter_point and enter_point:get_scene() or info.TaskScene
    if scene then
        --log.info('scene', scene)
        base.player_jump_scene( py, scene, true)
    end
    if enter_point then
        --log.info('enter_point', enter_point)
        hero:blink_ex( enter_point)
    end
    base.game:event_notify('升仙令挑战', {
        player = self.player,
        --rpg_challenge = self,
        --id = id,
    })
    --镜头不确定，反正先挪过去，后面看需求改
    --py:set_camera
    --{
    --  position = enter_point,
    --  rotation = { -80, 0, 0},
    --  focus_distance = 1500,
    --    time = 100,--ms
    --}
    --log.info('camera_focus', py, hero)


    --创建敌人
    self:create_enemy( challenge)
end

function mt:init()
    local cache = self.cache
    local need_kill = cache.KillCount or 0
    local trgs = self.trgs

    self.need_kill = need_kill

    local py = self.player

    if need_kill > 0 then
        trgs[#trgs+1] = base.game:event('单位-死亡', function(_, dead, killer)
            if killer:get_owner() == dead:get_owner() then return end
            if killer and killer:get_owner() == py and dead:is_item() == false then
                need_kill = need_kill - 1
                self.need_kill = need_kill
                py:sync_sxl_num( self.slot, need_kill)
                --log.info('kill', need_kill)
                if need_kill <= 0 then
                    --log.info('前置杀敌完成')
                    _:remove()
                end
            end
        end)
    end
end

function sxl:create( py, link, id)
    py._sxl_data = py._sxl_data or {
        list = {},
    }
    if id then

    end
    local target = {
        player = py,
        hero = py:get_hero(),
        link = link,
        cache = base.eff.cache( link),
        trgs = {},
        slot = #py._sxl_data.list+1,
        --__index = sxl
    }
    table.insert(py._sxl_data.list, target)

    setmetatable( target, sxl)
    --setmetatable( target, target)
    target:init()
    
    py:sync_sxl_link()
end




function base.runtime.player:sync_sxl_link()
    log.info('sync_sxl_link')
    local list = self._sxl_data and self._sxl_data.list
    local send = {}
    for k,v in ipairs(list or {}) do
        send[k] = {
            v.link,
            v.need_kill,
        }
        --log.info('send',v.link, v.need_kill)
    end
    self:ui 'rpg_sxl_link' {
        list = send,
    }
end
function base.runtime.player:sync_sxl_num( id, num)
    --log.info('sync_sxl_num', id, num)
    self:ui 'rpg_sxl_num' {
        id = id,
        num = num,
    }
end
base.ui.proto.rpg_sxl_click = function( py, msg)
    py._sxl_data.list[msg.id]:start_challenge()
end

base.rpg_test.register('升仙令测试', function(player)
    sxl:create( player, '$$busiyixiantu_5n1b.rpg_地图数据.升仙令测试.root')
end)


base.rpg_test.register('刷怪测试x15', function(player)
    base.timer( 200, 15, function()
        local hero = player:get_hero()
        local enemy = base.player_create_unit_ai( base.player(2), '$$busiyixiantu_5n1b.unit.修炼室小怪.root', hero:get_point(), 0, true)
    end)
end)

