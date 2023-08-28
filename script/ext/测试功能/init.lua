
--测试的功能塞这里
base.rpg_test = {}

--默认环境
_SCE_PC_ENV = {
    --电脑ID，用来区分在那台电脑上，给一些测试功能做本地开关
    --1 魏
    ID = 0,
}


--在这个文件里配置本地环境，比如改SCE_PC_ENV.ID=1
--这个文件在git里会被忽略，不进入版本控制，不会引起冲突
pcall( require, 'ext.测试功能.本地环境配置')
--传到客户端
base.game.set('_SCE_PC_ENV', _SCE_PC_ENV)



--只有在编辑器测试环境才载入
--if __lua_state_name == 'StateEditor' then
require 'ext.测试功能.测试面板'
require 'ext.测试功能.测试信息'
require 'ext.测试功能.范例'
--end

