# k.response
> k.response 提供一系列用于处理响应信息的方法

## k.response.binary
> 响应体中返回一个二进制数组

> params:
> - contentType: `string`
> - bytes: `number[]`

> return: `void`
```js
k.api.get("binary", ()=>{
    const binary = k.file.readBinary("files.svg")
    return k.response.binary('image/svg+xml', binary)
})
```

## k.response.execute
> 提取另一个 url 的响应, 并将它写入到当前的上下文

> params: 
> - url: `string`

> return: `void`

```js
// ------------ api: test ------------
k.response.json({
    abc: '123'
})
// --------- api: k-response ---------
k.api.get("execute", ()=>{
    k.response.execute("/api/v1/test")
    // Excute another Url, and write the response within current context
    k.response.json({data: '123'})
})
// "{ "abc": "123" }{ "data": "123" }"
```

## k.response.json
> 返回一个 json 格式的响应信息

> params:
> - value: `object`

> return: `void`

```js
k.api.get("json", ()=>{
    k.response.json({
        data: '123'
    })
})
// { "data": "123" }
```

## k.response.meta
> 

## k.response.redirect
> 重定向到指定的 url

> params:
> - url: `string`

> return: `void`

```js
k.api.get("redirect", ()=>{
    k.response.redirect("/test")
})
```

## k.response.setHeader
> 设置响应头

> params:
> - key: `string`
> - value: `string`

> return: `void`

```js
k.api.get("setHeader", () => {
    k.response.setHeader("ServerTwo", "powerful kooboo server");

    k.response.setHeader("Access-Control-Allow-Origin", "*")
    return ''
})
``` 

## k.response.statusCode
> 设置响应状态码

> params:
> - code: `number`

> return: `void`

```js
k.api.get("statusCode", () => {
    k.response.statusCode(404)
    return 'Not Found'
})
```

## k.response.unauthorized
> 预设的未授权响应

```js
k.api.get("unauthorized", () => {
    return k.response.unauthorized()
})
//  httpcode: 401, message: 'Unauthorized access'
``` 

> ## k.response.write
> 返回指定内容

> params: 
> - value: `any`

> return: `void`
```js
k.api.get("write", () => {
    k.response.write("hello world");

    k.response.write(1234);

    const obj = { name: "myname" };

    k.response.write(obj);
// hello world1234{ "name": "myname" }
})
```
