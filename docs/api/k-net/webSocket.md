# k.net.websocket

> k.net.websocket 提供了一系列用于处理 websocket 请求的方法

## k.net.websocket.accept()
> 将当前请求转换成 websocket 请求, 该方法将阻塞请求，直至关闭 websocket

> params:
> - id: `string`
> - receive: (ctx: `WebSocketContext`)=> `void`

```js
const ids= k.net.webSocket.accept('user_1',ctx => {
  // ctx.text
  // ctx.binary
});
```

## k.net.websocket.get()
> 根据 ID 获取连接  

> params:
> - id: `string`

> return: `WebSocketConnection`

```js
const connection = k.net.webSocket.get('user_1');

connection.close() // 关闭连接
connection.sendText() // 发送文本
connection.sendBinary() // 发送二进制
```

## k.net.websocket.list()
> 获取所有连接的 ID

> return: `string[]`

```js
const ids = k.net.webSocket.list();

// ids: ['user_1','user_2']
```

## 使用案例
> 详细使用案例指南👉  [WebSocket 使用指南](/dev-guide/practice/webSocket实战.md)

> 相关应用案例:
> - [组织在线聊天](https://www.kooboo.cn/_Admin/template/detail?templateId=c8225a39-6fb2-4976-8c92-56edb486ce4c)
> - [网页客服](https://www.kooboo.cn/_Admin/template/detail?templateId=76704acb-eecd-49e1-be22-038349bedce5)