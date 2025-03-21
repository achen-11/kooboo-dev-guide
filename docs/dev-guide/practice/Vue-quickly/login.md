# 登录流程
> 直接使用 kooboo 内置的登录流程

## 鉴权拦截
```html
<!-- layout: main -->
<script env="server" type="module">
  import * as UserFn * from './Services.User'
  // 请先登录
  if (!k.account.isLogin) {
    k.response.redirect('/_Admin/login?permission=u&returnurl=/') // 返回 kooboo 内置登录页
    return
  }
  const username = k.account.user.current.userName
  const userInfo = UserFn.getUserInfo()
  k.utils.clientJS.setVariable('__USER_INFO__', userInfo)
</script>
```

## 退出登录

1. 定义退出登录api

```js
// Api: __logout__
k.account.logout()
k.cookie.clear()
k.response.redirect("/_Admin/login?permission=o&returnurl=/")
```

2. 在需要退出登录的地方调用

```html
<script>
  const handleLogout = () => {
    location.href = "/__logout"
  }
</script>
```