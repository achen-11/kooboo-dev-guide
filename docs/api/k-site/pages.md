# k.site.pages

> k.site.pages 提供一系列用于获取或处理站点 `页面` 的方法

## add()
> 创建一个页面

> params:
> - pageObject: `Page`
>   - name: `string`
>   - body: `string`
>   - url: `string`
>   - layoutName?: `string`

```js
k.api.get("add", ()=>{
    k.site.pages.add({
        name: "test-page",
        url: "/test-page",
        body: `<layout id="test-layout">
                <placeholder id="Main">
                    <h1>测试页面</h1>
                </placeholder>
              </layout>`,
        layoutName: "test-layout"
    })
    return 'add success'
})
```

## all()
> 获取站点的所有页面

> return: `Page[]`

```js
k.api.get("all", ()=>{
    return k.site.pages.all()
})
// return
[
  {
      "Headers": {
          "Titles": {},
          "CustomHeader": null,
          "Metas": [],
          "Styles": [],
          "Scripts": [],
          "IsPwa": false,
          "ConstType": 0,
          "CreationDate": "2025-03-05T09:36:09.6887746Z",
          "LastModified": "2025-03-05T09:36:09.688777Z",
          "LastModifyTick": 638767641696887800,
          "Id": "9824e2be-4b06-482e-b9b5-b072fc84efd7",
          "name": null
      },
      "Id": "e82f3ec5-0c4a-4ae0-93b3-753d8a6471c5",
      "LayoutName": "test-layout",
      "HasLayout": true,
      "IsStatic": false,
      "IsSecure": false,
      "Type": "Normal",
      "DefaultStart": false,
      "Parameters": {},
      "RequestParas": null,
      "DisableUnocss": false,
      "EnableCache": false,
      "CacheByVersion": false,
      "CacheVersionType": 0,
      "CacheByDevice": false,
      "CacheByCulture": false,
      "CacheMinutes": 0,
      "CacheKeys": null,
      "CacheQueryKeys": null,
      "DesignConfig": null,
      "Body": "<layout id=\"test-layout\">\n\t<placeholder id=\"Main\">\n\t\t<h1>测试页面</h1>\n\t</placeholder>\n</layout>",
      "name": "test-page",
      "Online": true,
      "Version": 384,
      "ConstType": 91,
      "CreationDate": "2025-03-05T09:36:09.688821Z",
      "LastModified": "2025-03-05T09:36:09.6877383Z",
      "LastModifyTick": 638767641696877400
  }
]
```

## delete()
> 删除一个页面

> params: 
> - nameOrId: `string`

```js
k.api.get("delete", ()=>{ 
    k.site.pages.delete("test-page")
    return 'delete success'
})
```

## get()
> 根据 name 或者 id 获取指定页面

> params: 
> - nameOrId: `string`

> return: `Page`

```js
k.api.get("get", ()=>{
    return k.site.pages.get("test-page")
})
```

## getAbsUrl()
> 根据 id 获取页面的绝对路径

> params:
> - id: `string`

> return: `string`

```js
k.api.get("getAbsUrl", ()=>{
    return k.site.pages.getAbsUrl("xxx")
    // return "http://kb-doc.kbdev.kooboo.cn/test-page"
})
```

## getByLog()
> 根据日志 id 获取指定页面

> params:
> - logId: `number`

> return: `Page`

```js
k.api.get("getByLog", ()=>{
    return k.site.pages.getByLog(123)
})
```

## getByUrl()
> 根据 url 获取页面

> params: 
> - url: `string`

> return: `Page`

```js
k.api.get("getByUrl", ()=>{
    return k.site.pages.getByUrl('/test-page')
})
```

## getLogs()
> 获取指定页面的所有日志

> params:
> - nameOrId: `string`

> return: `Log[]`

```js
k.api.get("getLogs", ()=>{
    return k.site.pages.getLogs("test-page")
})
// return
[
  {
    "StoreName": "Page",
    "TableName": null,
    "UserName": null,
    "UserId": "00000000-0000-0000-0000-000000000000",
    "EditTime": "2025-03-05T09:02:03.7653708Z",
    "editType": 1,
    "LogId": 397
  }
]
```

## getUrl()
> 根据 id 获取指定页面的 url

> params:
> - id: `string`

> return: `string`

```js
k.api.get("getUrl", ()=>{
    return k.site.pages.getUrl("xxx")
    // return "/test-page"
})
```

## update()
> 更新一个页面

> params:
> - page: `Page`

```js
k.api.get("update", ()=>{
    const page = k.site.pages.getByUrl('/test-page')
    page.body = `
    <layout id="test-layout">
        <placeholder id="Main">
            <h1>更新后的测试页面</h1>
        </placeholder>
    </layout>
    `
    
    k.site.pages.update(page)
    return 'update success'
})
```

## updateBody()
> 更新指定页面的 body

> params:
> - nameOrId: `string`
> - body: `string`

```js
k.api.get("updateBody", ()=>{
    const page = k.site.pages.getByUrl('/test-page')
    k.site.pages.updateBody(page.id, `
    <layout id="test-layout">
        <placeholder id="Main">
            <h1>通过 updateBody 更新的页面内容</h1>
        </placeholder>
    </layout>`)
    return 'updateBody success'
})
```