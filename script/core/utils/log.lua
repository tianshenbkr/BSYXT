
--重载log.info，特殊情况下屏蔽一些原生的打印
--注意，可能会屏蔽一些重要信息，如果发现打印信息有问题需要查看一下
local log_info_interval = log.info
log.info = function(...)
    local args ={...}
    --if args[1] == 'log_info_interval' then
    --    return
    --end
    log_info_interval( ... )
end