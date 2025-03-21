# 公共组件引入

## 全局变量
> 在 kooboo 中, 全局变量可以通过 `k.utils.clientJS.setVariable` 进行设置

```html
<!-- view: __Common__ -->
<script env="server">
  k.utils.clientJS.setVariable('__CONFIG__', k.site.info.setting)
  k.utils.clientJS.setVariable('__I18N__', k.utils.clientJS.i18n()) // content -> label (多语言)
</script>
```

## 样式引入
> 根据项目实际需求, 引入对应样式文件即可

```html
<link rel="stylesheet" href="/element-plus.css" />
<link rel="stylesheet" href="/element-plus-dark.css" />
<link rel="stylesheet" href="/common.css" />
```
## kooboo-vue组件注册(@ux34)
> 针对 kooboo 的 vue 组件注册封装
```html
<script>
	/* 
		针对kooboo的vue组件注册
	    
		组件使用以下方法会自动注册该组件, 减少重复配置components
		defineComponent('my-component', {...})
	 */
	 
	var { definePage, defineComponent, getComponents } = (() => {
		const components = {}
	
		return {
			/**
			 * definePage
			 * @param {object} component vue组件
			 */
			definePage(component) {
				const key = 'page-component'
				if (components[key]) {
					console.error(`components ${key} multiple registration`)
					return
				}
				components[key] = { ...component, template: '#page-component' }
				return components[key]
			},
			/**
			 * defineComponent
			 * @param {string} key 组件名称
			 * @param {object} component vue组件
			 */
			defineComponent(key, component) {
				if (components[key]) {
					console.error(`components ${key} multiple registration`)
					return
				}
				components[key] = component
				return components[key]
			},
			/**
			 * getComponents
			 * @param {string} key 组件名称
			 * @return {{[key:string]: any}[]} 所有组件
			 */
			getComponents() {
				return components
			}
	
		}
	})()
	
</script>
```
## Vue 常用方法扁平化
> 将 Vue 的常用方法扁平化, 方便在全局使用
```html
<script>
	var { ref, reactive, watch, computed, onMounted, onUnmounted,
		onBeforeUnmount, nextTick, unref, toRef, toRefs, } = Vue
</script>
```

## 其他组件引入
> 根据项目实际需求, 引入对应组件即可

```html
<script src="/dayjs.min.js"></script>
<script src="/utils.js"></script>
<!-- .... -->
```
