# k.site.styles

> k.site.styles 提供一系列用于获取或处理站点 `样式` 的方法

## add()
> 创建一个样式

> params:
> - styleObject: `Style`
>   - name: `string`
>   - body: `string`

```js
k.api.get("add", ()=>{
    k.site.styles.add({
        name: "test-style.css",
        body: `.test-class {
            color: red;
            font-size: 16px;
        }`
    })
    return 'add success'
})
```

## all()
> 获取所有样式文件

> return: `Style[]`

```js
k.api.get("all", ()=>{
    return k.site.styles.all()
})
// return
[
  {
      "Id": "1814cdca-c075-4344-ad17-d77141c9be90",
      "name": "common.css",
      "Engine": null,
      "IsEmbedded": false,
      "Extension": "css",
      "BodyHash": 50436817,
      "DisplayName": "common.css",
      "OwnerObjectId": "00000000-0000-0000-0000-000000000000",
      "OwnerConstType": 0,
      "KoobooOpenTag": null,
      "ItemIndex": 0,
      "media": null,
      "type": null,
      "Body": ".cm-btn {\n    color: 'red'\n}",
      "Source": null,
      "SourceChange": false,
      "DomTagName": "style",
      "Online": true,
      "Version": 417,
      "ConstType": 93,
      "CreationDate": "2025-03-05T10:05:54.0189177Z",
      "LastModified": "2025-03-05T10:06:19.7202702Z",
      "LastModifyTick": 638767659797202702
  }
]
```

## delete()
> 删除一个样式

> params: 
> - nameOrId: `string`

```js
k.api.get("delete", ()=>{ 
    k.site.styles.delete("test-style.css")
    return 'delete success'
})
```

## get()
> 根据 name 或者 id 获取指定样式

> params: 
> - nameOrId: `string`

> return: `Style`

```js
k.api.get("get", ()=>{
    return k.site.styles.get("test-style.css")
})
```

## getAbsUrl()
> 根据 id 获取样式的绝对路径

> params:
> - id: `string`

> return: `string`

```js
k.api.get("getAbsUrl", ()=>{
    return k.site.styles.getAbsUrl("xxx")
    // return "http://kb-doc.kbdev.kooboo.cn/test-style.css"
})
```

## getByLog()
> 根据日志 id 获取指定样式

> params:
> - logId: `number`

> return: `Style`

```js
k.api.get("getByLog", ()=>{
    return k.site.styles.getByLog(123)
})
```

## getByUrl()
> 根据 url 获取样式

> params: 
> - url: `string`

> return: `Style`

```js
k.api.get("getByUrl", ()=>{
    return k.site.styles.getByUrl('/test-style.css')
})
```

## getLogs()
> 获取指定样式的所有日志

> params:
> - nameOrId: `string`

> return: `Log[]`

```js
k.api.get("getLogs", ()=>{
    return k.site.styles.getLogs("test-style.css")
})
// return
[
  {
    "StoreName": "Style",
    "TableName": null,
    "UserName": null,
    "UserId": "00000000-0000-0000-0000-000000000000",
    "EditTime": "2025-03-05T10:06:19.7202702Z",
    "editType": 1,
    "LogId": 417
  }
]
```

## getUrl()
> 根据 id 获取指定样式的 url

> params:
> - id: `string`

> return: `string`

```js
k.api.get("getUrl", ()=>{
    return k.site.styles.getUrl("xxx")
    // return "/test-style.css"
})
```

## update()
> 更新一个样式

> params:
> - style: `Style`

```js
k.api.get("update", ()=>{
    const style = k.site.styles.get("test-style.css")
    style.body = `.test-class {
        color: blue;
        font-size: 18px;
        font-weight: bold;
    }`
    
    k.site.styles.update(style)
    return 'update success'
})
```

## updateBody()
> 更新指定样式的 body

> params:
> - nameOrId: `string`
> - body: `string`

```js
k.api.get("updateBody", ()=>{
    k.site.styles.updateBody("test-style.css", `.test-class {
        color: green;
        font-size: 20px;
        text-decoration: underline;
    }`)
    return 'updateBody success'
})
```

