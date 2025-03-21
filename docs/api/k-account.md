# k.account

> Account 包含了登录及账户信息的一系列相关操作

## k.account.isLogin <Badge type="higher" text="常用" />
> 判断当前是否已登录

> type: `boolean`

```ts
// --- API: K-account ---
k.api.get("isLogin", () => {
    return k.account.isLogin
})
// false
```
## k.account.login()
> 账号密码-登录方法

> params: 
> - username: `string`
> - password: `string`
>
> return: 
> - account: `Account`

```ts
// --- API: K-account ---
k.api.get("login", () => {
    // account 会返回一系列用户信息
    const account = k.account.login("username", "password")
    // 账号密码正确
    return k.account.isLogin
})

// account:
{
    "Id": string,
    "CurrentOrgId": string,
    "CurrentOrgName": string,
    "IsAdmin": boolean,
    "UserName": string,
    "EmailAddress": string,
    "EmailId": string,
    "IsEmailVerified": boolean,
    "IsTelVerified": boolean,
    "Tel": string,
    "TwoFAMethod": null,
    "OtpSecret": null,
    "Password": string,
    "PasswordHash": string,
    "FirstName": null,
    "LastName": null,
    "FullName": string,
    "Language": "zh",
    "RegisterIp": string,
    "TempRedirectUrl": string,
    "OneTimeToken": string,
    "Currency": null,
    "RegistrationDate": string,
    "LastModified": string
}
// return: true
```

## k.account.logout()
> 退出登录

> params: `redirectUrl: string`
>
> return: `void`

```ts
// --- API: K-account ---
k.api.get("logout", () => {
    return k.account.logout("/K-account/isLogin")
})
// 退出登录且跳转到 "/K-account/isLogin" -> return false
```

## k.account.oAuth
> 接入第三方登录, 需要先到系统->配置->OAuth2中进行相关配置

> return 第三方登录的 url

```ts
// --- API: K-account ---
k.api.get("oAuth", () => {
    // goole / Apple / Facebook / wechat / weibo /...
    return k.account.oAuth.google.getAuthUrl()
})
```
## k.account.organization
> 获取当前登录用户所属组织的相关信息

> return: 
> - organization: `Organization`

```ts
// --- API: K-account ---
k.api.get("organization", () => {
    return k.account.organization
})
// return:
{
    "Current": {
        "Id": string,
        "Name": string,
        "DisplayName": string,
        "Departments": [],
        "OrganizationUsers": []
    }
}
```

## k.account.creditCard
## k.account.generateToken()
## k.account.loginOrganization()
## k.account.membership
## k.account.server
## k.account.setIdentity()