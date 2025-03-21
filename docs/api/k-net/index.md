# k.net

> k.net 提供了一系列用于获取和处理网络信息的方法。

## k.net.ping

> 测试网络连接

> params: 
> - url: `string`
> 
> return: `PingResult`

```js
k.api.get("ping", () => {
    return k.net.ping("baidu.com")
})
// return
{
    "Ip": "110.242.68.66",
    "Time": 33,
    "Success": true
}
```

## k.net.sftpClient

### k.net.sftpClient.passwordConnect
### k.net.sftpClient.privateKeyConnect

## k.net.sshClient

### k.net.sshClient.passwordConnect
### k.net.sshClient.privateKeyConnect

## k.net.telnetClient.connect