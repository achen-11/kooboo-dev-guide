# ElementPlus使用

## ElementPlus依赖

```html
<!-- view: __Common__ -->

<!-- 样式 -->
<link rel="stylesheet" href="/element-plus.css" />
<!-- 暗黑主题(可选) -->
<link rel="stylesheet" href="/element-plus-dark.css" /> 

<script src="/element-plus.js"></script>

<!-- Icons -->
<script src="/element-plus-icons.js"></script>

<!-- 多语言语言(可选) -->
<script src="/element-plus_zh-cn.js"></script>
<script src="/element-plus_en.js"></script>
```
## 引入ElementPlus

```html
<!-- view: __Common_vue__ -->
<script>
  const app = Vue.createApp({
		setup() {	
			const elementEn = ElementPlusLocaleEn
			const elementZh = ElementPlusLocaleZhCn
	
			return {
				elementEn,
				elementZh
			}
		}
	})
  
  app.use(ElementPlus)
    // 全局方法
	var { ElMessage, ElMessageBox, ElConfigProvider } = ElementPlus

  	// Element Plus Icons
	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		app.component('icon' + key, component)
    // 使用: <icon-xxx />
	}
</script>
```

## ElementPlus 多语言

```html
<!-- layout: main -->

 	<div id="app" class="flex h-[100vh]">
		<el-config-provider :locale="locale==='zh' ? elementZh : elementEn">
		</el-config-provider>
	</div>
```

## 注意
> 由于 kooboo 是使用浏览器直接引入的方式, 根据官方文档, 需要使用双闭合标签, 单个闭合标签可能会导致一些例外情况
```html
<!-- examples -->
<el-table>
  <el-table-column></el-table-column>
  <el-table-column></el-table-column>
</el-table>
```