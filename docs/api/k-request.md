# 请求信息

> k.request 提供一系列 `属性` 用于获取请求信息

## k.request.body

> 获取请求体, 通常用于 POST, PUT 请求获取请求体内容

> type: `string`

> 注: 该属性返回的是 string 类型, 如需使用还需要进行 json 解析
> 但一般不使用这个方法, 直接在 callback 中处理即可

```js
k.api.post(()=>{
  const body = k.request.body
  return body
})
// eg. body 传入 { "key": "123" }
// 返回: "{\n \"key\": \"123\"\n}"
```

## k.request.clientIp

> 获取请求的客户端IP地址

> type: `string`

```js
k.api.get(()=>{
  return k.request.clientIp
})

// return: "120.36.245.209"
```

## k.request.headers

> 获取请求头

> type: `Record<string, string>`

```js
k.api.get(()=>{
  return k.request.headers
})

// eg. return:
{
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Connection": "keep-alive",
    "Host": "kb-document.wanggaojiachen.kooboo.cn",
    "UserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    "AcceptEncoding": "gzip, deflate",
    "AcceptLanguage": "zh-CN,zh;q=0.9,en;q=0.8",
    "CacheControl": "max-age=0",
    "Cookie": "_site_version_=1610; _site_id_=0fc78cb8-7466-4f77-b7f1-ce274a98cb0f; _site_id_=9dbf1f65-a652-1f00-d33b-e991e817e21d; _site_culture=zh; _site_version_=25",
    "UpgradeInsecureRequests": "1"
}
```

## k.request.files

> 获取请求体中上传的文件

> type: `UploadFile[]`
```js
type UploadFile = {
  bytes: string // 文件的二进制内容
  contentType: number // 文件类型
  fileName: string // 文件名
  name: string // formdata 的 key
  save: (filename: string)=> FileInfo // 保存文件到 Kfile
}

k.api.post(()=>{
  return k.request.files
})

// return:
[
  {
      "ContentType": "image/jpeg",
      "Name": "file",
      "FileName": "test_image.jpeg",
      "Bytes": "/9j/4AAQSkZJRgABAQAAAQABAAD....."
  }
]
```

## k.request.form

> 获取请求体中的 form 数据

> type: `Record<string, string>`

```js
k.api.post(()=>{
  return k.request.form
})

// eg. form 传入 { "key": "123" }
// return: { "key": "123" }
```

## k.request.get()
> 获取动态路由参数, 通常用于获取动态路由的参数
> 创建页面时可以通过类似 `/page/{key}` 的方式定义动态路由

> params:  
> - key: `string`
> return: `string`
```html
<!-- page: /page/k-request/{key} -->
  <script env="server">
      // kooboo 支持通过 `k.request.get()` or `k.request.xxx` 获取动态路由参数
      const key2 = k.request.get('key') // or `k.request.key`
      const queryString = k.request.queryString
      k.utils.clientJS.setVariable('page', { key, queryString})
  </script>
  <script>

      console.log('page: ', page)
      // eg. url: /page/k-request/123
      // return: { key: "123", queryString: {} }

  </script>
```
> 特殊情况❗️
> 
> 如果 `请求参数 params` 和 `动态路由参数` 重名, 则 `k.request.get` 会优先返回 `请求参数 params`, 因此在实际应用中需要避免两者重名的情况
```html
<!-- page: /page/k-request/{key} -->
  <script env="server">
      const key2 = k.request.get('key') // or `k.request.key`
      const queryString = k.request.queryString
      k.utils.clientJS.setVariable('page', { key, queryString})
  </script>
  <script>
      console.log('page: ', page)
      // eg. url: /page/k-request/123?key=test
      // return: { key: "test", queryString: { key: 'test' } }
  </script>
```

## k.request.queryString

> 获取请求参数params

> type: `Record<string, string>`

```js
k.api.get(()=>{
  return k.request.queryString
})

// eg. /api/v1/test?page=1&limit=10&keyword=test
// return: { "page": "1", "limit": "10", "keyword": "test" }
```

## k.request.host

> 获取请求的域名

> type: `string`

```js
k.api.get(()=>{
  return k.request.host
})

// eg. return: "kb-document.wanggaojiachen.kooboo.cn"
```

## k.request.method

> 获取请求的方法

> type: `string`

```js
k.api.get(()=>{
  return k.request.method
})

// return: "GET"
```

## k.request.model
> 获取请求参数, 约等于`k.request.queryString`
> 区别: 参数为空时, `k.request.queryString` 返回 `{}`, 而 model 返回 `null`
```js
k.api.get(()=>{
  return k.request.model
})

// eg. /api/v1/test?page=1&limit=10&keyword=test
// return: { "page": "1", "limit": "10", "keyword": "test" }
```

## k.request.page
> 获取 page 的相关属性

```html
    <script env="server">
        const pageInfo = k.request.page

        k.utils.clientJS.setVariable('page', {value: pageInfo})
    </script>
    <script>
        console.log('page: ', page)
        // return 
        {
          "Headers": {
              "Titles": {},
              "CustomHeader": null,
              "Metas": [],
              "Styles": [],
              "Scripts": [],
              "IsPwa": false,
              "ConstType": 0,
              "CreationDate": "2025-02-28T08:59:31.7127231Z",
              "LastModified": "2025-02-28T08:59:31.712725Z",
              "LastModifyTick": 638763299717127300,
              "Id": "e4b56343-5446-483d-ac17-46836df11f4a",
              "name": null
          },
          "Id": "3abccc6f-32e0-4e4d-8a96-3449cfd2b01c",
          "LayoutName": null,
          "HasLayout": false,
          "IsStatic": false,
          "IsSecure": false,
          "Type": "Normal",
          "DefaultStart": false,
          "Parameters": {},
          "RequestParas": [
              "{page}"
          ],
          "DisableUnocss": false,
          "EnableCache": false,
          "CacheByVersion": false,
          "CacheVersionType": 0,
          "CacheByDevice": false,
          "CacheByCulture": false,
          "CacheQueryKeys": null,
          "DesignConfig": null,
          "Body": "<!DOCTYPE html>....",
          "name": "k-request",
          "CreationDate": "2025-02-28T08:59:31.7127538Z",
          "LastModified": "2025-02-28T08:59:31.7121069Z",
          ...
      }
    </script>
``` 

## k.request.url

> 获取请求的 URL

> type: `string`

```js
k.api.get(()=>{
  return k.request.url
})

// return: "/api/v1/test"
```