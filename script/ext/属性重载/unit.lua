
local mt = base.runtime.unit

--把固定值映射到对应属性的百分比上
local attr_map_per = {
    ['攻击力加成'] = '攻击',
    ['魔法攻击加成'] = '魔法攻击',
    ['生命值加成'] = '生命上限',
    ['护甲加成'] = '护甲',
    ['魔抗加成'] = '魔抗',
}



local unit_add = mt.add
local unit_add_ex = mt.add_ex
function mt:add(name, value, ...)
    if attr_map_per[name] then
        name = attr_map_per[name]
        unit_add_ex(self,name,value,2)
        return
    end
    unit_add(self,name,value,...)
end

function mt:add_ex(name, value, ...)
    if attr_map_per[name] then
        name = attr_map_per[name]
        unit_add_ex(self,name,value,2)
        return
    end
    unit_add_ex(self,name,value,...)
end

local unit_set = mt.set
local unit_set_ex = mt.set_ex
function mt:set(name, value, ...)
    if attr_map_per[name] then
        name = attr_map_per[name]
        unit_set_ex(self,name,value,2)
        return
    end
    unit_set(self,name,value,...)
end

function mt:set_ex(name, value, ...)
    if attr_map_per[name] then
        name = attr_map_per[name]
        unit_set_ex(self,name,value,2)
        return
    end
    unit_set_ex(self,name,value,...)
end

local unit_get = mt.get
local unit_get_ex = mt.get_ex
function mt:get(name, ...)
    if attr_map_per[name] then
        name = attr_map_per[name]
        return unit_get_ex(self,name, 2)
    end
    return unit_get(self,name,...)
end

function mt:get_ex(name, ...)
    if attr_map_per[name] then
        name = attr_map_per[name]
        return unit_get_ex(self,name,2)
    end
    return unit_get_ex(self,name,...)
end
