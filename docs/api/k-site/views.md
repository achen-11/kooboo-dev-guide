# k.site.views
> k.site.views 提供一系列用于获取或处理站点 `视图` 的方法

## add()
> 创建一个视图

> params: 
> - viewObject:`View`
>   - name: `string`
>   - body: `string`

```js
k.api.get("add", ()=>{
    k.site.views.add({
        name: "test",
        body: "<div> test view </div>"
    })
    return 'add success'
})
```

## all()
> 获取站点的所有视图

```js
k.api.get("all", ()=>{
    return k.site.views.all()
})
// return
[
  {
      "Id": "22e26c62-1b35-b268-59f7-3de172f11249",
      "name": "test",
      "ModuleId": "00000000-0000-0000-0000-000000000000",
      "Extension": "html",
      "Parameters": null,
      "PropDefines": [],
      "RequestParas": null,
      "EnableCache": false,
      "CacheByVersion": false,
      "CacheVersionType": 0,
      "CacheByDevice": false,
      "CacheByCulture": false,
      "CacheMinutes": 0,
      "CacheKeys": null,
      "CacheQueryKeys": null,
      "Body": "<div> test view </div>",
      "Online": true,
      "Version": 36,
      "ConstType": 10,
      "CreationDate": "2025-02-26T07:52:29.5964828Z",
      "LastModified": "2025-02-26T07:52:29.5965856Z",
      "LastModifyTick": 638761531495965800
  }
]
```

## delete()
> 删除一个视图

> params: 
> - nameOrId: `string`

```js
k.api.get("delete", ()=>{ 
    k.site.views.delete("test")
    return 'delete success'
})
```

## get()
> 获取一个视图

> params: 
> - nameOrId: `string`

> return: `View`

```js
k.api.get("get", ()=>{
    return k.site.views.get("test-view")
})
``` 

## getByLog()
> 根据日志 id 获取指定视图

> params: 
> - logId: `number`

> return: `View`

```js
k.api.get("getByLog", ()=>{
    return k.site.views.getByLog(337)
})
```

## getLogs()
> 获取指定视图的所有日志

> params: 
> - nameOrId: `string`

> return: `Log[]`

```js
k.api.get("getLogs", ()=>{
    return k.site.views.getLogs("test-view")
})
```

## update()
> 更新一个视图

> params: 
> - viewObject:`View`

```js
k.api.get("update", ()=>{
    const view = k.site.views.get("test-view")
    view.body = "<div> test view update </div>"
    
    k.site.views.update(view)
    return 'update success'
})
```
## updateBody()
> 更新一个视图的 body

> params: 
> - nameOrId: `string`
> - body: `string`

```js
k.api.get("updateBody", ()=>{
    k.site.views.updateBody("test-view", "<div> test view update body </div>")
    return 'updateBody success'
})
```