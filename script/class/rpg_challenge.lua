

local mt = {}
local rpg_challenge = {}
rpg_challenge.__index = mt
setmetatable( rpg_challenge, rpg_challenge)
base.rpg_challenge = rpg_challenge

--假装是个eff，用来过一些效果节点的检测
mt.type = 'eff_param'
--mt.type = 'rpg_challenge'

--对应的数编大关卡
mt.link = nil

mt.cache = nil

mt.task_links = nil

--玩家当前进度
mt.level = 0
mt.max_level = 0

--自动挑战下一关
mt.auto_next = false

mt.challenging_level = 0
--base.scene_point(

--显示link
function mt:show_info()
    utils.show_table( self, 5, {
        [self.cache] = true,
    })
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
    self.challenging_level = 0
end

function mt:task_finish()
    local current_task = self.current_task
    local level = current_task.level
    self.level = level
    local task_info = self.task_info[level]
    --utils.show_table(task_info)

    local hero = self.player:get_hero()
    if task_info.AwardAttr then
        for k,v in ipairs(task_info.AwardAttr) do
            if v.Percentage == true then
                at = attr[2]
                hero:add_ex(v.Key, v.Value(), 2)
            else
                hero:add_ex(v.Key, v.Value(), 1)
            end
        end
    end

    if task_info.AwardItem then
        for k,v in ipairs(task_info.AwardItem) do
            for i = 1, v.Number do
                base.create_item_on_unit( v.Item, hero)
            end
        end
    end

    if task_info.AwardEffect then
        for k,v in ipairs(task_info.AwardEffect) do
            if v ~= '' then
                local cache = base.eff.cache(v)
                if cache and cache.Func then
                    local func = cache.Func
                    func(self)
                end
            end
        end
    end

    if task_info.AwardBuff then
        for k, link in ipairs(task_info.AwardBuff) do
            if link and link ~= '' then
                hero:add_buff_new( link)
                base.game:event_notify('mxh挑战BUFF', hero, self, level, link)
            end
        end
    end

    --同步到客户端，刷新一下显示
    self.player:sync_rpg_challenge_level()
    base.game:event_notify('玩家_完成mxh挑战', self.player, self, level)

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
    self.challenging_level = 0
end


function mt:create_enemy( id)
    local tt = self.current_task.trg
    local tu = self.current_task.unit
    local task_bind = self

    local task_info = self.task_info[id]
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
        tu[#tu+1] = enemy
        enemy._task_bind = task_bind
    end
    local function over()
        --完成了
        self:task_finish()
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
    for k,v in ipairs(task_info.Wave) do
        Wave[k] = {
            Position = v.Position,
            Delay = v.Delay,
            MaxNumber = v.MaxNumber,
            Number = v.Number,
            Unit = v.Unit,
            CreateRange = v.CreateRange,
        }
        log.info('Wave', k, v.Unit, v.Number, v.MaxNumber)
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
function mt:start_task(id)
    self.challenging_level = id
    self:clear()
    if not id then
        id = math.min(self.level+1, self.max_level)
    end
    self.current_task = {
        level = id,
        trg = {},
        unit = {},
    }
    local info = self.task_info[id]
    if not info then
        utils.show_table( self.cache)
        log.error('[rpg_challenge]没有找到对应关卡link', self.link, id)
        return
    end
    local py = self.player
    local pid = py:get_slot_id()
    local hero = py:get_hero()
    if hero:is_alive_ex() == false then
        log.info('英雄死亡，无法挑战')
        return
    end
    --有玩家点，把玩家英雄穿进去
    local enter_point = info.PlayerPosition or self.PlayerPosition
    local scene = enter_point and enter_point:get_scene() or info.TaskScene
    local camera_point = info.CameraPosition or self.CameraPosition
    if scene then
        log.info('scene', scene)
        base.player_jump_scene( py, scene, true)
    end
    if enter_point then
        log.info('enter_point', enter_point)
        hero:blink_ex( enter_point)
    end
    --镜头不确定，反正先挪过去，后面看需求改
    if self.cache.CameraFollow then
        --py:unlock_camera()
        py:set_camera
        {
            position = enter_point,
            rotation = { -80, 0, 0},
            focus_distance = 1500,
            time = 100,--ms
        }
        log.info('camera_focus', py, hero)
        --py:camera_focus( hero)
    end
    self.player:ui 'mxh_cs' {
        link = self.link,
        id = id,
    }

    --创建敌人
    self:create_enemy( id)
end


--初始化
function mt:init()
    local player = self.player
    local pid = player:get_slot_id()
    local cache = base.eff.cache( self.link)
    self.cache = cache

    self.auto_next = cache.AutoNext
    self.task_info = {}

    if cache.rpgSubChallenge and #cache.rpgSubChallenge>0 then
        for k,link in ipairs(cache.rpgSubChallenge) do
            local sub_cache = base.eff.cache( link)
            if link~='' and sub_cache then
                local tc = {__index=sub_cache}--同一个关卡可能被作为多个子关卡，需要做个处理
                setmetatable(tc, tc)
                self.task_info[k] = tc
                if tc.Wave then
                    local new_Wave = {}
                    for k,v in ipairs(tc.Wave) do
                        if v and v ~= '' then
                            local wc = base.eff.cache(v)
                            if wc then
                                local enemy_info = { __index = wc}
                                setmetatable(enemy_info,enemy_info)
                                new_Wave[#new_Wave+1] = enemy_info
                            end
                        end
                    end
                    tc.Wave = new_Wave
                end
                self.max_level = k
            else
                log.error('错误-没有找到关卡信息', self.link, k, link)
            end
        end
    end

    
    --创建场景副本，把所有用到的场景过一遍，把所有的玩家点，怪物创建点过一遍，改到场景副本里
    if cache.UseSceneCopy == true then
    
        local function get_scene_key( point)
            local default_scene = point:get_scene()
            local sc = player:get_scene( default_scene)
            local key = sc.key
            local new_point = base.scene_point( point[1], point[2], point[3], key)
            return new_point
        end

        --顶部的position
        local player_point = cache.PlayerPosition and cache.PlayerPosition[1] and cache.PlayerPosition[1]()
        if player_point then
            self.PlayerPosition = get_scene_key(player_point)
        else
            self.PlayerPosition = false
        end
        local camera_point = cache.CameraPosition and cache.CameraPosition[1] and cache.CameraPosition[1]()
        if camera_point then
            self.CameraPosition = get_scene_key(camera_point)
        else
            self.CameraPosition = false
        end
        local function task_init(task)
            local default_scene = nil
            local key = nil
            local point = task.PlayerPosition and task.PlayerPosition[1] and task.PlayerPosition[1]()
            if point then
                task.PlayerPosition = get_scene_key(point)
                task.TaskScene = point:get_scene()
            else
                task.PlayerPosition = false
            end
            --敌人创建
            if task.Wave then
                for __,v in ipairs(task.Wave) do
                    local loc = v.Position and v.Position[1] and v.Position[1]()
                    if loc then
                        v.Position = get_scene_key(loc)
                    else
                        v.Position = nil
                        log.error('敌人没有创建点', self.link, _, __)
                    end

                    if v.Number < 0 then
                        v.IsTask = false
                    elseif v.MaxNumber == 0 then
                        v.MaxNumber = v.Number
                    elseif v.MaxNumber < 0 then
                    end

                    if v.Number > 0 then
                        v.Number = math.max( v.Number, v.MaxNumber)
                    end
                end
            end
        end

        for _, task in ipairs( self.task_info) do
            task_init(task)
        end
    else
        local player_point = cache.PlayerPosition and cache.PlayerPosition[pid] and cache.PlayerPosition[pid]()
        if player_point then
            self.PlayerPosition = player_point
        else
            self.PlayerPosition = false
        end
        local camera_point = cache.CameraPosition and cache.CameraPosition[pid] and cache.CameraPosition[pid]()
        if camera_point then
            self.CameraPosition = get_scene_key(camera_point)
        else
            self.CameraPosition = false
        end
        local function task_init(task)
            local point = task.PlayerPosition and task.PlayerPosition[pid] and task.PlayerPosition[pid]()
            if point then
                task.PlayerPosition = point
            else
                task.PlayerPosition = false
            end
            if task.Wave then
                for __,v in ipairs(task.Wave) do
                    local loc = v.Position and v.Position[pid] and v.Position[pid]()
                    if loc then
                        v.Position = loc
                    else
                        v.Position = false
                    end
                    if v.Number < 0 then
                        v.IsTask = false
                    elseif v.MaxNumber == 0 then
                        v.MaxNumber = v.Number
                    elseif v.MaxNumber < 0 then
                    end
                    if v.Number > 0 then
                        v.Number = math.max( v.Number, v.MaxNumber)
                    end
                end
            end
        end

        for _, task in ipairs( self.task_info) do
            task_init(task)
        end
    end
end

function mt:main_target()
    return self
end
function mt:get_unit()
    return self.player:get_hero()
end

rpg_challenge.create = function( player, link)
    if not player._rpg_challenge_info then
        player._rpg_challenge_info = {
            scene_target = {},
            all_mc = {},
        }
        --挑战信息刷新
        function player:sync_rpg_challenge_link()
            local list = {}
            for k,mc in ipairs(player._rpg_challenge_info.all_mc) do
                list[k] = mc.link
            end
            --player:set('rpg_challenge_link', link_list)
            player:ui 'rpg_challenge_link' {
                list = list,
            }
        end
        --挑战信息刷新
        function player:sync_rpg_challenge_level()
            local list = {}
            for k,mc in ipairs(player._rpg_challenge_info.all_mc) do
                list[k] = mc.level
            end
            --player:set('rpg_challenge_level', lv_list)
            player:ui 'rpg_challenge_level' {
                list = list,
            }
        end
    end

    local mc = {
        player = player,
        link = utils.link_check( link),
        scene_target = {},
    }
    setmetatable( mc, rpg_challenge)
    mc:init()

    table.insert(player._rpg_challenge_info.all_mc, mc)

    player:sync_rpg_challenge_link()
    
    log.info('rpg_challenge.create', player, link)
    return mc
end

rpg_challenge.create_v2 = function( _, player, link)
    return rpg_challenge.create( player, link)
end

base.wait(0,function()
    local mc = nil
    --base.rpg_test.register('创建关卡', function(player)
    --    mc = rpg_challenge.create( player, '$$busiyixiantu_5n1b.rpg_challenge.挑战1')
    --    --mc:show_info()
    --end)
    --base.rpg_test.register('挑战关卡', function(player)
    --    mc:start_task()
    --end)
end)


base.ui.proto._ask_rpg_challenge = function (player, msg)
    if not player._rpg_challenge_info then
        log.error('没有找到player._rpg_challenge_info', player)
        return
    end
    local id = msg.id
    local level = msg.level
    local mc = player._rpg_challenge_info.all_mc[id]
    if not mc then
        utils.show_table( player._rpg_challenge_info.all_mc)
        return log.error('错误-没有找到mc')
    end
    mc:start_task( level)
end



base.game:event('挑战刷怪数据准备', function(_, player, mc, Wave)
    if mc.link ~= '$$busiyixiantu_5n1b.rpg_challenge.金币怪.root' then
        return
    end
    local hero = player:get_hero()
    if hero:has_buff('$$busiyixiantu_5n1b.buff.练功者buff.root') then
        for k,v in ipairs(Wave) do
            v.MaxNumber = v.MaxNumber + 1
        end
    end
end)

base.game:event('单位-获得状态', function(_, u, bff)
    if bff.link == '$$busiyixiantu_5n1b.buff.练功者buff.root' then
        local py = u:get_owner()
        for k, mc in ipairs( py._rpg_challenge_info.all_mc) do
            if mc.link == '$$busiyixiantu_5n1b.rpg_challenge.金币怪.root' then
                if mc.challenging_level > 0 then
                    mc:start_task( mc.challenging_level)
                end
            end
        end
    end
end)

base.game:event('单位-失去状态', function(_, u, bff)
    if bff.link == '$$busiyixiantu_5n1b.buff.练功者buff.root' then
        local py = u:get_owner()
        for k, mc in ipairs( py._rpg_challenge_info.all_mc) do
            if mc.link == '$$busiyixiantu_5n1b.rpg_challenge.金币怪.root' then
                if mc.challenging_level > 0 then
                    mc:start_task( mc.challenging_level)
                end
            end
        end
    end
end)