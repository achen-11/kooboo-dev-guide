# k.site.layouts
> k.site.layouts 提供一系列用于获取或处理站点 `布局` 的方法

## add()
> 创建一个布局

> params: 
> - layoutObject:`Layout`
>   - name: `string`
>   - body: `string`

```js
k.api.get("add", ()=>{
    k.site.layouts.add({
        name: "test-layout",
        body: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
          </head>
          <body>
              <div k-placeholder="Main"> Sample text inside the layout.. </div>
          </body>
          </html>
        `
    })
    return 'add success'
})
```

## all()
> 获取站点的所有布局

> return: `Layout[]`

```js
k.api.get("all", ()=>{
    return k.site.layouts.all()
})
// return
[
  {
    "Id": "5938e85b-cdb4-c3b3-db63-e37c752fb445",
    "name": "main",
    "Extension": "html",
    "Body": `
      <!DOCTYPE html>
      <html lang="en">

      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>

      <body>
          <div k-placeholder="Main"> Sample text inside the layout.. </div>
      </body>

      </html>
    `,
    "Online": true,
    "Version": 348,
    "ConstType": 98,
    "CreationDate": "2025-03-05T08:52:32.2418315Z",
    "LastModified": "2025-03-05T08:52:32.2422854Z",
    "LastModifyTick": 638767615522422900
  }
]
```

## delete()
> 删除一个布局

> params: 
> - nameOrId: `string`

```js
k.api.get("delete", ()=>{ 
    k.site.layouts.delete("test-layout")
    return 'delete success'
})
```

## get()
> 根据 name 或者 id 获取指定布局

> params: 
> - nameOrId: `string`

> return: `Layout`

```js
k.api.get("get", ()=>{
    return k.site.layouts.get("test-layout")
})
``` 

## getByLog()
> 根据日志 id 获取指定布局

> params: 
> - logId: `number`

> return: `Layout`

```js
k.api.get("getByLog", ()=>{
    return k.site.layouts.getByLog(357)
})
```

## getLogs()
> 获取指定布局的所有日志

> params: 
> - nameOrId: `string`

> return: `Log[]`

```js
k.api.get("getLogs", ()=>{
    return k.site.layouts.getLogs("test-layout")
})
// return
{
    "StoreName": "Layout",
    "TableName": null,
    "UserName": null,
    "UserId": "00000000-0000-0000-0000-000000000000",
    "EditTime": "2025-03-05T09:02:03.7653708Z",
    "editType": 1,
    "LogId": 357
}
```

## update()
> 更新一个布局

> params: 
> - layoutObject:`Layout`

```js
k.api.get("update", ()=>{
    const layout = k.site.layouts.get("test-layout")
    layout.body = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <div class="layout-updated">
              <div k-placeholder="Main"> Sample text inside the layout.. </div>
          </div>
      </body>
      </html>
    `
    k.site.layouts.update(layout)
    return 'update success'
})
```

## updateBody()
> 根据 name 或者 id 更新一个布局的 body

> params: 
> - nameOrId: `string`
> - body: `string`

```js
k.api.get("updateBody", ()=>{
    k.site.layouts.updateBody("test-layout", `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <div class="layout-updated-body">
              <div k-placeholder="Main"> Sample text inside the layout.. </div>
          </div>
      </body>
      </html>
    `)
    return 'updateBody success'
})
```
