# k.site.scripts

> k.site.scripts 提供一系列用于获取或处理站点 `脚本` 的方法

## add()
> 创建一个脚本

> params:
> - scriptObject: `Script`
>   - name: `string`
>   - body: `string`

```js
k.api.get("add", ()=>{
    k.site.scripts.add({
        name: "test-script.js",
        body: `function sayHello() {
            console.log('Hello from test script');
            return 'Hello';
        }`
    })
    return 'add success'
})
```

## all()
> 获取所有脚本文件

> return: `Script[]`

```js
k.api.get("all", ()=>{
    return k.site.scripts.all()
})
// return
[
  {
      "Id": "2814cdca-c075-4344-ad17-d77141c9be90",
      "name": "common.js",
      "Engine": null,
      "IsEmbedded": false,
      "Extension": "js",
      "BodyHash": 50436817,
      "DisplayName": "common.js",
      "OwnerObjectId": "00000000-0000-0000-0000-000000000000",
      "OwnerConstType": 0,
      "KoobooOpenTag": null,
      "ItemIndex": 0,
      "type": null,
      "Body": "function init() {\n    console.log('init');\n}",
      "Source": null,
      "SourceChange": false,
      "DomTagName": "script",
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
> 删除一个脚本

> params: 
> - nameOrId: `string`

```js
k.api.get("delete", ()=>{ 
    k.site.scripts.delete("test-script.js")
    return 'delete success'
})
```

## get()
> 根据 name 或者 id 获取指定脚本

> params: 
> - nameOrId: `string`

> return: `Script`

```js
k.api.get("get", ()=>{
    return k.site.scripts.get("test-script.js")
})
```

## getAbsUrl()
> 根据 id 获取脚本的绝对路径

> params:
> - id: `string`

> return: `string`

```js
k.api.get("getAbsUrl", ()=>{
    return k.site.scripts.getAbsUrl("xxx")
    // return "http://kb-doc.kbdev.kooboo.cn/js/test-script.js"
})
```

## getByLog()
> 根据日志 id 获取指定脚本

> params:
> - logId: `number`

> return: `Script`

```js
k.api.get("getByLog", ()=>{
    return k.site.scripts.getByLog(123)
})
```

## getByUrl()
> 根据 url 获取脚本

> params: 
> - url: `string`

> return: `Script`

```js
k.api.get("getByUrl", ()=>{
    return k.site.scripts.getByUrl('/js/test-script.js')
})
```

## getLogs()
> 获取指定脚本的所有日志

> params:
> - nameOrId: `string`

> return: `Log[]`

```js
k.api.get("getLogs", ()=>{
    return k.site.scripts.getLogs("test-script.js")
})
// return
[
  {
    "StoreName": "Script",
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
> 根据 id 获取指定脚本的 url

> params:
> - id: `string`

> return: `string`

```js
k.api.get("getUrl", ()=>{
    return k.site.scripts.getUrl("xxx")
    // return "/js/test-script.js"
})
```

## update()
> 更新一个脚本

> params:
> - script: `Script`

```js
k.api.get("update", ()=>{
    const script = k.site.scripts.get("test-script.js")
    script.body = `function sayHello() {
        console.log('Hello from updated test script');
        return 'Hello updated';
    }
    
    function sayGoodbye() {
        console.log('Goodbye from test script');
        return 'Goodbye';
    }`
    
    k.site.scripts.update(script)
    return 'update success'
})
```

## updateBody()
> 更新指定脚本的 body

> params:
> - nameOrId: `string`
> - body: `string`

```js
k.api.get("updateBody", ()=>{
    k.site.scripts.updateBody("test-script.js", `function sayHello() {
        console.log('Hello from updateBody');
        alert('Hello!');
        return 'Hello from updateBody';
    }`)
    return 'updateBody success'
})
```
