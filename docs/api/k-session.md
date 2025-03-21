# k.session
> k.session 提供一系列用于处理会话级缓存的方法

## k.session.clear()
> 清空 session

```js
k.api.get("clear", () => {
    k.session.clear()
})
```


## k.session.containsKey()
> 判断 session 中是否存在某个 key

> params:
> - key: `string`

> return: `boolean`

```js
k.api.get("containsKey", () => {
    return k.session.containsKey("key")
})
```

## k.session.get()
> 获取 session 中的值

> params:
> - key: `string`

> return: `any`

```js
k.api.get("get", () => {
    return k.session.get("key")
})
```

## k.session.keys
> 获取 session 中的所有 key

> return: `string[]`

```js
k.api.get("keys", () => {
    return k.session.keys
})
```

## k.session.length
> 获取 session 中的键值对数量

> return: `number`

```js
k.api.get("length", () => {
    return k.session.length
})
```

## k.session.remove()
> 删除 session 中的某个 key

> params:
> - key: `string`

> return: `boolean`

```js
k.api.get("remove", () => {
    return k.session.remove("key")
})
```
## k.session.set()
> 在 session 中的定义key-value

> params:
> - key: `string`
> - value: `any`

> return: `void`

```js
k.api.get("set", () => {
    k.session.set("key", "value")
    return k.session.get("key")
})
```

## k.session.values
> 获取 session 中的所有值

> return: `any[]`

```js
k.api.get("values", () => {
    return k.session.values
})
```
