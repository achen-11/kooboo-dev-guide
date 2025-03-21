# k.net.url

> k.net.url 提供了一系列用于代理发起请求的方法

## k.net.url.delete()
> 代理发起一个 `DELETE` 请求

> params:
> - url: `string`
> - data: `object`
> - headers: `record<string, string>`
> - cookies: `record<string, string>`

> return: `CurlResponse`

```js
k.api.get("delete", () => {
    let data = k.request.headers
    data.add("headerKey", "headerValue")
    data['headerKey'] = 'value'
    return k.net.url.delete(
        "http://kb-document.wanggaojiachen.kooboo.cn/api/v1/test",
        "name=myname&field=value",
        k.request.headers,
        { 'cookieKey': 'cookieValue' }
    )
})

```

## k.net.url.deleteAsObject()
> 代理发起一个 `DELETE` 请求，并返回一个 json 对象

> params:
> - url: `string`
> - data: `string`
> - token: `string`

```js
k.api.get("deleteAsObject", () => {
    return k.net.url.deleteAsObject(
        "http://kb-document.wanggaojiachen.kooboo.cn/api/v1/test",
        JSON.stringify({key: 'value'}),
        "tokenxxxx"
    )
})
```

## k.net.url.downloadZip()

## k.net.url.get()
> 代理发起一个 `GET` 请求

> params:
> - url: `string`
> - headers: `record<string, string>`
> - cookies: `record<string, string>`

> return: `CurlResponse`

```js
k.api.get("get", () => {
    return k.net.url.get(
        "http://kb-document.wanggaojiachen.kooboo.cn/api/v1/test",
        { 'Authorization': 'Bearer tokenxxxx' },
        { 'cookieKey': 'cookieValue' }
    )
})
```

## k.net.url.getAsBinary() <Badge type="higher" text="常用" />
> 代理发起一个 `GET` 请求，并返回一个二进制数据
> 常用场景: 通过`url`读取图片的二进制数据

> params:
> - url: `string`

```js
k.api.get("getAsBinary", () => {
    return k.net.url.getAsBinary("http://kb-document.wanggaojiachen.kooboo.cn/__kb/kfile/empty.png")
})
```

## k.net.url.getAsObject()
> 代理发起一个 `GET` 请求，并返回一个 json 对象

> params:
> - url: `string`

```js
k.api.get("getAsObject", () => {
    return k.net.url.getAsObject("http://www.kooboo.com");
})
```

## k.net.url.getJson()
> 代理发起一个 `GET` 请求，并返回一个 json 对象

> params:
> - url: `string` 

```js
k.api.get("getJson", () => {
    return k.net.url.getJson("http://www.kooboo.com");
})
```

## k.net.url.patch()
> 代理发起一个 `PATCH` 请求, 用法同 k.net.url.delete

## k.net.url.patchAsObject()
> 代理发起一个 `PATCH` 请求，并返回一个 json 对象, 用法同 k.net.url.deleteAsObject

## k.net.url.patchData()
> 代理发起一个 `PATCH` 请求, 用法同 k.net.url.postData

## k.net.url.post()
> 代理发起一个 `POST` 请求, 用法同 k.net.url.delete 

## k.net.url.postAsBinary()
> 代理发起一个 `POST` 请求, 用法同 k.net.url.getAsBinary

## k.net.url.postData()
> 携带 body 代理发起一个 `POST` 请求, 用法同 k.net.url.delete

## k.net.url.postDataAsObject()
> 携带 body 代理发起一个 `POST` 请求, 

## k.net.url.postform()
> 携带 form 代理发起一个 `POST` 请求, 用法同 k.net.url.postData

## k.net.url.put()
> 代理发起一个 `PUT` 请求, 用法同 k.net.url.delete

## k.net.url.putAsObject()
> 代理发起一个 `PUT` 请求, 并返回一个 json 对象, 用法同 k.net.url.deleteAsObject

## k.net.url.sendMessage() <Badge type="higher" text="推荐" />
> 代理发起一个请求

> params:
> - requestMessage: `any`
> - data: `any`

> return: `CurlResponse`

```js
k.api.get("sendMessage", () => {
    return k.net.url.sendMessage(k.request, {
        url: "https://kb-doc.redev.cn/api/v1/test",
        method: "GET",
        params: { "a": "1", "b": "2" },
        headers: { "a": "1", "b": "2" },
        data: { url, method, params, headers, body },
    });
})
```

## 使用案例
> 相关应用案例:
> - [API 开发调试工具](https://www.kooboo.cn/_Admin/template/detail?templateId=4387afd1-36cc-47f9-a6f8-99f6236176a1)