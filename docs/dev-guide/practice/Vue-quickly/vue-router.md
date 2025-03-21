# Vue-router

## 引入vue-router
```html
<!-- view: __Common__ -->
<script src="/vue-router.min.js"></script>
```

## 定义 routes
```html
<!-- view: page.xxx -->
<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>
<script>
  defineComponent('page-xxx', {
    template: '#page-xxx',
    props: {},
    emits: [],
    setup(props, { emit }) {}
  })
</script>

<!-- view: __Common_routes__ -->
<!-- 引入 view -->
<view id="page-xxx"></view> 
<script>
  var routes = [
    {
      path: '/',
      component: app._context.components['page-xxx']
    }
  ]
</script>
```

## 创建 router 实例
```html
<!-- view: __Common_vue__ -->
<!-- 引入 routes -->
<view id="common_routes"></view>
<script>
	// router
	const { createWebHashHistory, createWebHistory, createRouter, useRouter, useRoute } = VueRouter
	var router = createRouter({
		history: createWebHashHistory(), // 必须使用 hash 模式, 否则会与 kooboo 的 路由跳转冲突
		routes
	})
	router.beforeEach((to, from, next) => {
		// 路由守卫
    // ...
	})
	app.use(router)
	app.mount("#app")
</script>
```

## 注意
> vue-router 与 kooboo 的路由通常二选一即可
> - vue-router是单页面应用
> - kooboo 的路由则是多页面应用