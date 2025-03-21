## k.mail.amazonses

## k.mail.createMessage
> 创建一个新消息对象以发送

> return: `MailMessage`

```js
k.api.get("createMessage", () => {
    const msg = k.mail.createMessage()
    msg.from = "1234567892@qq.com"; // 发件人
    msg.to = "guoqi@sample.cn"; // 收件人
    msg.subject = "Test Subject"; // 邮件标题
    msg.htmlBody = " Html body content "; // 邮件内容
    msg.addAttachment("https://www.kooboo.cn/img/logo-white.png"); // 添加附件
})
```

## k.mail.createSmtpServer
> 创建一个SMTP服务器设置对象

> return: `SmtpServer`

```js
k.api.get("createSmtpServer", () => {
    const server = k.mail.createSmtpServer()
    server.host = "smtp.qq.com"; // 服务器地址
    server.port = 465 ; // 端口
    server.ssl = true; // 是否启用SSL
    server.username = "1234567892@qq.com"; // 用户名
    server.password = "your_password_here" // smtp 授权码;
})
```

## k.mail.imap

## k.mail.module

## k.mail.smtp.send
> 发送邮件

> params:
> - server: `SmtpServer`
> - message: `MailMessage`

> return: `void`

```js
k.api.get("send", () => {
    const server = k.mail.createSmtpServer()
    server.host = "smtp.qq.com"; // 服务器地址
    server.port = 465 ; // 端口
    server.ssl = true; // 是否启用SSL
    server.username = "1234567892@qq.com"; // 用户名
    server.password = "your_password_here" // smtp 授权码;

    const msg = k.mail.createMessage()
    msg.from = "1234567892@qq.com"; // 发件人
    msg.to = "guoqi@sample.cn"; // 收件人
    msg.subject = "Test Subject"; // 邮件标题
    msg.htmlBody = " Html body content "; // 邮件内容
    msg.addAttachment("https://www.kooboo.cn/img/logo-white.png"); // 添加附件

    k.mail.smtp.send(server, msg)
})
```

## k.mail.spamassassin

## k.mail.utility

## 案例
> 相关指南:
> - [邮件模板](/dev-guide/practice/email-template.md)

> 相关应用案例: