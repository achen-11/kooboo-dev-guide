# 创建Vue-app
> common-vue 在 common 下方引入, 用于创建 vue-app, 以及引入其他相关依赖(vue-router, vue-i18n, ...)
```html
<!-- view: __Common_vue__ -->
<script> 
    const app = Vue.createApp({
        setup() {
            return {}
        }
    })

    app.use(ElementPlus) // pinia, vue-router, vue-i18n, ...
</script>
```

### 全局组件注册
```html
<script>
    // common.js -> 全局组件注册 
    for (const [key, component] of Object.entries(getComponents())) {
        app.component(key, component)
    }
</script>
```

### vue全局变量声明
```html
<script>
    app.config.globalProperties.t = t
    app.config.globalProperties.$xxx = xxx

</script>
```

### vue-app 挂载
```html
<script>
    app.mount('#app')
</script>
```
