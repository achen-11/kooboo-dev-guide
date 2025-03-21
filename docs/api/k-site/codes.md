# k.site.codes
> k.site.codes 提供一系列用于获取或处理站点 `代码` 的方法

## add()
> 创建一个 Api 或者 CodeBlock

> params: 
> - codeObject:`Code`
>   - name: `string`
>   - codeType: `'Api' | 'CodeBlock'`
>   - body: `string`
>   - url?: `string`

```js
// 创建一个 CodeBlock
k.api.get("add", ()=>{
    const codeBlock = {
        name: 'testBlock',
        codeType: 'CodeBlock',
        body: `export const name="123"`
    }
    k.site.codes.add(codeBlock)
    return 'add success'
})

// 创建一个 Api
k.api.get("add", ()=>{
    const codeBlock = {
        name: 'autoApi',
        codeType: 'Api',
        url: '/auto-api/{action}',
        body: `k.api.get(()=>{ return '123' })`
    }
    k.site.codes.add(codeBlock)
    return 'add success'
})
```

## all()
> 获取所有 Api 和 CodeBlock

> return: `Code[]`

```js
k.api.get("all", ()=>{
    return k.site.codes.all()
})
// return 
[
  {
    "IsDecrypted": true,
    "IsCodeEncrypted": false,
    "Lang": null,
    "Id": "f80deb01-c0f8-15dc-9a99-3a1452e2a5e8",
    "Extension": ".js",
    "Body": "return 'getOrSet value'",
    "BodyHash": -7518565,
    "Config": "//// sample config code..... ",
    "EventType": "RouteFinding",
    "CodeType": "CodeBlock",
    "IsJson": false,
    "Cors": false,
    "OwnerObjectId": "00000000-0000-0000-0000-000000000000",
    "OwnerConstType": 0,
    "IsEmbedded": false,
    "KoobooOpenTag": null,
    "Engine": null,
    "ItemIndex": 0,
    "DomTagName": "script",
    "Parameters": null,
    "ScriptType": 1,
    "Online": true,
    "Version": 58,
    "ConstType": 58,
    "CreationDate": "2025-02-24T07:00:55.085311Z",
    "LastModified": "2025-02-24T07:01:19.9039223Z",
    "LastModifyTick": 638759772799039200,
    "name": "CacheCallback"
  }
]
```

## delete()
> 删除一个 Api 或者 CodeBlock

> params: 
> - nameOrId: `string`
> 

```js
k.api.get("delete", ()=>{
    k.site.codes.delete("autoApi")
    return 'delete success'
})
```

## get()
> 获取一个 Api 或者 CodeBlock

> params: 
> - nameOrId: `string`
> 

> return: `Code`

```js
k.api.get("get", ()=>{
    return k.site.codes.get("autoApi")
})
```
## getAbsUrl()
> 根据 id 获取绝对路径

> params:
> - id: `string`

> return: `string`

```js
k.api.get("getAbsUrl", ()=>{
    return k.site.codes.getAbsUrl("47792d63-3dec-a41f-d8ef-a1ae58374340")
    // return "http://kb-doc.kbdev.kooboo.cn/auto-api/%7Baction%7D"
})
```

## getByLog()
> 根据日志 id 获取 Api 或者 CodeBlock

> params:
> - logId: `number`

> return: `Code`

```js
k.api.get("getByLog", ()=>{
    return k.site.codes.getByLog(310)
})
```

## getByUrl()
> 根据 url 获取 Api 或者 CodeBlock

> params: 
> - url: `string`

> return: `Code`

```js
k.api.get("getByUrl", ()=>{
    return k.site.codes.getByUrl('/auto-api/{action}')
})
```
## getLogs()
> 获取指定 Api 或者 CodeBlock 的所有日志

> params:
> - nameOrId: `string`

> return: `Log[]`

```js
k.api.get("getLogs", ()=>{
    return k.site.codes.getLogs("autoApi")
})
// return
[
  {
      "StoreName": "Code",
      "TableName": null,
      "UserName": null,
      "UserId": "00000000-0000-0000-0000-000000000000",
      "EditTime": "2025-03-05T08:17:43.5749072Z",
      "editType": 1,
      "LogId": 310
  }
]
```

## getUrl()
> 根据 id 获取指定 Api 或者 CodeBlock 的 url

> params:
> - id: `string`

> return: `string`

```js
k.api.get("getUrl", ()=>{
    return k.site.codes.getUrl("47792d63-3dec-a41f-d8ef-a1ae58374340")
    // return "/auto-api/{action}"
})
```

## update()
> 更新指定 Api 或者 CodeBlock

> params:
> - code: `Code`

> return: `void`

```js
k.api.get("update", ()=>{
    const api = k.site.codes.get("autoApi")
    api.body = `k.api.get(()=>{
        return 'api update'
    })
    `
    k.site.codes.update(api)
    return 'update success'
})
```

## updateBody()
> 更新指定 Api 或者 CodeBlock 的 body

> params:
> - nameOrId: `string`
> - body: `string`

> return: `void`

```js
k.api.get("updateBody", ()=>{
    k.site.codes.updateBody("autoApi", "k.api.get(()=>{ return 'api body update' })")
    return 'updateBody success'
})
```