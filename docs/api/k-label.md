# k.label()
> 根据 key 获取标签内容

> params: 
> - NameOrId: `string`

> return: `string`

```js
k.api.get("get", () => {
    return k.label("Cancel")
})
// return: '取消'
```

更多信息请参考：[标签使用指南](../dev-guide/标签使用指南.md)