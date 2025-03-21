# k.page
> k.page 提供了一系列设置页面 Head 信息的方法
> 通常配合 `env="server"` 直接在页面上使用

> meta 标签参考: [meta 标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)

## k.page.setTitle()
> 设置页面标题

> params:
> - title: `string`

```html
<script env="server">
  k.page.setTitle("k-page")
</script>
<!-- k-page > head -->
<head>
	<title>k-page</title>
</head>

```
## k.page.setCharsetMeta()
> 设置页面字符集 (疑似无效)

> params:
> - charset: `string`

```html
<script env="server">
  k.page.setCharsetMeta("utf-8")
</script>
<!-- k-page > head -->
<!-- <head>
	<meta charset="utf-8">
</head> -->
```
## k.page.setNameMeta()
> 设置 `name-content` 式 meta 标签

> params:
> - name: `string`
> - content: `string`

```html
<script env="server">
  k.page.setNameMeta("description", "k-page")
</script>
<!-- k-page > head -->
<head>
	<meta name="description" content="k-page">
</head>
```

## k.page.setPropertyMeta()
> 设置 `property-content` 式 meta 标签

> params:
> - property: `string`
> - content: `string`

```html
<script env="server">
  k.page.setPropertyMeta("og:title", "k-page")
</script>
<!-- k-page > head -->
<head>
	<meta property="og:title" content="k-page">
</head>
```

## k.page.setHttpEquivMeta()
> 设置 `http-equiv-content` 式 meta 标签

> params:
> - equiv: `string`
> - content: `string`

```html
<script env="server">
  k.page.setHttpEquivMeta("refresh", "5;url=https://www.kooboo.cn")
</script>
<!-- k-page > head -->
<head>
	<meta http-equiv="refresh" content="5;url=https://www.kooboo.cn">
</head>
```