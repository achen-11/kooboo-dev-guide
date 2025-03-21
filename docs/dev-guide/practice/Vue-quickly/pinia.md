# Pinia

## 引入 Pinia
```html
<!-- view: __Common__ -->
<script src="/pinia.min.js"></script>
<view id="common-store"></view>
```

## 创建 store
```html
<!-- view: __Common_store__ -->
<script>
  const { defineStore } = Pinia
  const useStore = defineStore('store', {
    state: () => ({}),
  })
</script>
```

## 挂载 store
```html
<!-- view: __Common_vue__ -->
<script>
  const app = Vue.createApp({
    setup() {
      
    }
  })
  app.use(Pinia.createPinia())
  app.mount('#app')
</script>

```
## 使用 store
```html
<!-- view: testView -->

<script>
  defineComponent('testView', {
    template: '#testView',
    setup() {
      const store = useStore()
      const { count } = toRefs(store)
      return {
        count
      }
    }
  })
</script>
```