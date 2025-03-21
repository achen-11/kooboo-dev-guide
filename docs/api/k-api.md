# k.api
> k.api提供一系列方法用于更方便地创建 API
>
> 提供get, put, post, delete四种API方法的支持， 并自动处理参数匹配。

## k.api.get()

> 创建一个当前路由下的 GET API

- 示例 1:

```js
k.api.get(()=>{
  return 'hello world'
})
```

- 示例 2.1: `直接在 callback 中声明并获取请求参数params`

```js
k.api.get((page, limit, keyword)=>{
  // eg. /api/v1/test?page=1&limit=10&keyword=test
  // return {page: 1, limit: 10, keyword: 'test'}
  return {
    page, limit, keyword
  }
})
```

- 示例 2.2: `通过 k.request.queryString 获取请求参数 params`

```js
k.api.get(()=>{
  // eg. /api/v1/test?page=1&limit=10&keyword=test
  // return {page: 1, limit: 10, keyword: 'test'}
  const query = k.request.queryString
  return query
})
```

- 示例 3 `创建子级路由`

  > 前置条件: 在创建 api 时需要声明 `{action}`, 如下图:
  ![动态路由](/images/k-script-动态路由.png)

```js
// eg. /api/v1/test/list
// return {id: 1}
k.api.get("list", (id)=>{
  return [{id: 123}]
})
```
> ⚠️ 注意: 这里有一个上下执行顺序问题❗️
>
> k.api.get(()=>{})是一个通配路由
>
> 当通配路由和子级路由同时存在时, 通配路由需要在子级路由下方
```js
// 此时发起/api/test/list, 因为上下执行顺序问题, 返回的是"通配", 而不是"子级list"
// 这是开发过程中常见的错误
// 因此, 在开发过程中, 需要注意从上至下声明顺序应该是: 子级路由 → 父级路由 → 通配路由

k.api.get(()=>{
  return "通配"
})
k.api.get("list", ()=>{
  return "子级list"
})

```


## k.api.post()

> 创建一个当前路由下的 POST API

- 示例 1

```js
k.api.post(()=>{
  return 'hello world'
})
```

- 示例 2.1 `直接在 callback 中声明并获取请求体 body`

```js
k.api.post((body)=>{
  return body
})
```

- 示例 2.2 `通过 k.request.body 获取请求体 body`

```js
k.api.post(()=>{
  const body = JSON.parse(k.request.body)
  return body
})
```

- 示例 3 `创建子级路由, 使用方法 & 匹配规则同 GET API`

## k.api.put()

> 创建一个当前路由下的 PUT API

- 使用方法 & 匹配规则 同 `POST` 请求

## k.api.delete()

> 创建一个当前路由下的 DELETE API

- 使用方法 & 匹配规则 同 `GET` 请求


## k.api.httpCode()

> 设置 API 的 HTTP 状态码, 通常用于异常处理

- 示例

```js
k.api.get(()=>{
  k.response.json({
    message: 'Opps, something went wrong',
    code: 400,
    data: null
  })
  return k.api.httpCode(400)
})
```
> 此时请求结果如下图: 

![异常 HttpCode](/images/httpCode-01.png)

> ps: 常用异常封装
```js
export function errorResponse(message: string, code=400) {
  k.response.json({
    message,
    code,
    data: null
  })
  return k.api.httpCode(code)
}
```

## 其他(内置httpcode api)
```js
k.api.get((id)=>{
  return k.api.ok()
})

k.api.get((id)=>{  
  return k.api.forbidden(); 
});

k.api.get((id)=>{  
  return k.api.badRequest(); 
});
 
k.api.get((id)=>{  
  return k.api.unauthorized(); 
});

k.api.get((id)=>{  
  return k.api.notFound(); 
});

```