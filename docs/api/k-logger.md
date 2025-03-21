# k.logger
> k.logger 提供了一系列关于日志的操作方法

## k.logger.critical()
> 记录 `严重` 级别日志

> params:
> - `message: string` - 日志信息
> 
> or:
> - `category: string` - 日志分类
> - `message: string` - 日志信息

> return: `void`

```js
k.api.get("critical", ()=>{
    k.logger.critical("Application", "Application crash!")
})
```

## k.logger.debug()
> 记录 `调试` 级别日志, 用法同 `k.logger.critical`

## k.logger.error()
> 记录 `错误` 级别日志, 用法同 `k.logger.critical`

## k.logger.information()
> 记录 `信息` 级别日志, 用法同 `k.logger.critical`

## k.logger.warning()
> 记录 `警告` 级别日志, 用法同 `k.logger.critical`

## k.logger.query()
> 查询日志

> params:
> - query: `CodeLogQuery`

> return: 
> - list: `CodeLog[]`
> - total: `number`
> - pageIndex: `number`
> - pageSize: `number`
> - pageCount: `number`

```js
k.api.get("query", () => {
    return k.logger.query({
        startDate: '2021-10-27 12:00',
        endDate: '2021-10-27 17:25',
        category: 'user',
        level: 'Error',
        pageIndex: 1,
        pageSize: 100,
        keyword: 'exception',
        traceId: '0HMCP7T6K7BFS:00000002'
    })
})
```
