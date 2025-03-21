# k.cache

> k.cache 提供了缓存的一系列操作

## k.cache.containsKey()
> 判断缓存是否存在

> params: 
> - key: `string`
>
> return: `boolean`
>
```js
// --- Api: k-cache ---
k.api.get("containsKey", () => {
    return k.cache.containsKey("key")
})

```
## k.cache.get()
> 获取缓存

> params: 
> - key: `string`
>
> return: `any`
```js
// --- Api: k-cache ---
k.api.get("get", () => {
    k.cache.set("key", "value", 60)
    return k.cache.get("key")
})

// return: 'value'
```
## k.cache.getOrCreate()
> 获取缓存，如果缓存不存在，则创建缓存

> params: 
> - key: `string`
> - factory: `() => any`
> - seconds: `number`
>
> return: `any`
```js
// --- Api: k-cache ---
k.api.get("getOrCreate", () => {
    return k.cache.getOrCreate("key", () => "factory value", 60)
})

// return: 'factory value'
```
## k.cache.getOrSet()
## k.cache.group
## k.cache.localCache()
## k.cache.remove()
> 删除指定缓存

> params: 
> - key: `string`
>
> return: `void`

```js
// --- Api: k-cache ---
k.api.get("remove", () => {
    k.cache.set("key", "value", 60)
    k.cache.remove("key")
    return k.cache.get("key")
})
```
## k.cache.removeAll()
> 删除所有缓存

> params: 
> - key: `string`
>
> return: `void`

```js
// --- Api: k-cache ---
k.api.get("removeAll", () => {
    k.cache.set("key", "value", 60)
    k.cache.removeAll()
    return k.cache.get("key")
})
```
## k.cache.set()
> 设置缓存

> params: 
> - key: `string`
> - value: `any`
> - seconds: `number`
> 设置缓存
```js
// --- Api: k-cache ---
k.api.get("set", () => {
    k.cache.set("key", "value", 60)
    return k.cache.get("key")
})

// return: 'value'
```


