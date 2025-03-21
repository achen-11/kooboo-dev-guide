# k.cookie

> k.cookie 提供了一系列操作 cookie 的方法

## k.cookie.clear()
> 清除所有cookie

> return: `void`

```js
// --- Api: k-cookie ---
k.api.get("clear", () => {
    return k.cookie.clear()
})
```

## k.cookie.containsKey()
> 判断cookie是否存在

> params: 
> - key: `string`
> 
> return: `boolean`

```js
// --- Api: k-cookie ---
k.api.get("containsKey", () => {
    return k.cookie.containsKey("cookiename")
})
```


## k.cookie.get()
> 根据 key获取指定cookie

> params: 
> - key: `string`
>
> return: `string`

```js
// --- Api: k-cookie ---
k.api.get("get", () => {
    return k.cookie.get("cookiename")
})
```

## k.cookie.keys
> 获取所有cookie的key

> return: `string[]`

```js
// --- Api: k-cookie ---
k.api.get("keys", () => {
    return k.cookie.keys
})
// return:
[
    "_site_culture",
    "_site_id_",
    "cookiename",
    "_site_version_"
]
```


## k.cookie.remove()
> 删除指定cookie

> params: 
> - key: `string`
>
> return: `boolean`  

```js
// --- Api: k-cookie ---
k.api.get("remove", () => {
    return k.cookie.remove("cookiename")
})
```

## k.cookie.set()
> 设置cookie

> params: 
> - key: `string`
> - value: `string`
> - days?: `number`. default: 30
> - domain?: `string`. default: `null`

> return: `void`
```js
// --- Api: k-cookie ---
k.api.get("set", () => {
    return k.cookie.set("cookiename", "cookievalue", 30)
})
```

## k.cookie.setByMinutes()
> 设置 cookie, (单位: 分钟)

> params: 
> - key: `string`
> - value: `string`
> - minutes: `number`
>
> return: `void`

```js
// --- Api: k-cookie ---
k.api.get("setByMinutes", () => {
    return k.cookie.setByMinutes("cookiename", "cookievalue", 30)
})
```
## k.cookie.values()
> 获取所有cookie的value

> return: `string[]`

```js
// --- Api: k-cookie ---
k.api.get("values", () => {
    return k.cookie.values
})
``` 