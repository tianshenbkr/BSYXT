
local ctrl_util = require '@common.base.gui.control_util'
local component = require '@common.base.gui.component'
local streamer = require 'ui_ext.plugn.streamer'
local getset = component.getset
local set = ctrl_util.set_ctrl_prop
local get = ctrl_util.get_ctrl_prop


local all_mc = {}
local rpg_challenge = {}
setmetatable(rpg_challenge,rpg_challenge)
local mt = {}
rpg_challenge.__index = mt

--数编link
mt.link = nil

--当前等级
mt.level = 0

function mt:set_level(lv)
    self.level = lv

    local link = self.cache.rpgSubChallenge and self.cache.rpgSubChallenge[self.level+1]
    if not link then return end
    local cache = base.eff.cache(link)
    if self._bind_ui_title then
        local str = base.i18n.get_text(cache.RaidName)
        set( self._bind_ui_title, 'text', str)
        log.info('title', str)
    end
    if self._bind_ui_tip then
        local str = base.i18n.get_text(cache.Describe)
        set( self._bind_ui_tip, 'text', str)
        log.info('tip', str)
    end
end

function mt:get_title()
    local link = self.cache.rpgSubChallenge and self.cache.rpgSubChallenge[self.level+1]
    if not link then return end
    local cache = base.eff.cache(link)
    return base.i18n.get_text(cache.RaidName) or '没有找到title'
end

function mt:get_tip()
    local link = self.cache.rpgSubChallenge and self.cache.rpgSubChallenge[self.level+1]
    if not link then return end
    local cache = base.eff.cache(link)
    return base.i18n.get_text(cache.Describe) or '没有找到tip'
end

function mt:bind_ui_title(ui)
    log.info('bind_ui_title', ui)
    self._bind_ui_title = ui
    set( ui, 'text', self:get_title())
end

function mt:bind_ui_tip(ui)
    log.info('bind_ui_tip', ui)
    self._bind_ui_tip = ui
    set( ui, 'text', self:get_tip())
end

function mt:bind_ui_button(ui, level, on_click)
    log.info('bind_ui_button', ui)
    local id = self.id
    local link = self.link
    ui.event.on_click = function()
        log.info('_ask_rpg_challenge', id)
        base.game:server '_ask_rpg_challenge' {
            id = id,
            level = level,
        }
        if on_click then
            on_click()
        end
    end
end


rpg_challenge.create = function( id, link)
    log.info('rpg_challenge.create', id, link)
    local target = {
        id = id,
        link = link,
        cache = base.eff.cache( link),
    }
    setmetatable( target, {__index = rpg_challenge})
    
    base.game:event_notify('本地玩家_创建rpg_challenge',{
        rpg_challenge = target
    })
    return target
end

base.proto.rpg_challenge_link = function (msg)
    log.info('rpg_challenge_link')
    local list = msg.list
    for k,v in ipairs(list) do
        if not all_mc[k] then
            all_mc[k] = rpg_challenge.create( k, v)
        end
    end
end

base.proto.rpg_challenge_level = function (msg)
    log.info('rpg_challenge_level')
    local list = msg.list
    for k,v in ipairs(list) do
        if all_mc[k] then
            log.info('k',k,v)
            all_mc[k]:set_level( v)
        end
    end
end


--[[
base.game:event('本地玩家_创建rpg_challenge', function(_, data)
    log.info('本地玩家_创建rpg_challenge', data.rpg_challenge)
end)]]


--rpg_challenge_start
base.proto.mxh_cs = function (msg)
    base.game:event_notify('本地玩家_rpg挑战开始', {
        link = msg.link,
        id = msg.id,
    })
end
