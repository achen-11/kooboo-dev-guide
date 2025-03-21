# k.site
> k.site 提供一系列用于获取或处理站点信息的方法

## k.site.createPublishUser()

## k.site.createSite()

## k.site.diskSpace

### k.site.diskSpace.getSiteSize()
> 获取当前站点占用的磁盘空间大小

> return: `DiskSize`

```js
k.api.get('diskSpaceGetSiteSize', ()=>{
    return k.site.diskSpace.getSiteSize()
})
// return 
{
    "Total": 782686,
    "TotalSize": "764.34KB",
    "RepositorySize": [
        {
            "Name": "ScriptModule",
            "Length": 7142,
            "ItemCount": 5,
            "Size": "6.97KB"
        },
        {
            "Name": "SiteUser",
            "Length": 7162,
            "ItemCount": 1,
            "Size": "6.99KB"
        },
        ...
    ],
    "RepositoryEditCount": 264
}

```


### k.site.diskSpace.getCommonStoreSize()
> 获取当前站点公共存储空间的大小

> return: `SiteItem.TopSize`

```js
k.api.get('diskSpaceGetCommonStoreSize', ()=>{
    return k.site.diskSpace.getCommonStoreSize()
})
// return
{
    "StoreItem": [
        {
            "Name": "Code",
            "ItemCount": 40,
            "Size": 333207,
            "SizeString": "325.40KB"
        },
        ...
    ]
}
```
## k.site.enableCodeVideoLog
> 获取可用的代码视频日志

> params: 
> - siteUrl: `string`

> return: `string`

```js
k.api.get('enableCodeVideoLog', ()=>{
  // TODO
    // return k.site.enableCodeVideoLog(siteUrl)
})
```

## k.site.exportSite()
> 导出指定站点到 K-File

> params: 
> - nameOrId: `string`
> - copyMode: `'Normal' | 'Fast'`
> - path: `string`

> return: `void`

```js
k.api.get('exportSite', ()=>{
    k.site.exportSite("kb-doc", 'Fast', 'test-site.zip')
    return 'exportSite success'
})
```

## k.site.getSite()
> 获取指定站点信息

> params: 
> - siteName: `string`

> return: `kSiteDb`

## k.site.getHomeUrl
> 获取当前站点的首页URL
> 
> ps: 需要前往CMS -> 页面 -> 路由设置 -> 指定首页路由

> return: `string`

![设置首页路由](/images/site-setHome.png)

```js
k.api.get('getHomeUrl', ()=>{
    return k.site.getHomeUrl()
    // return: "http://kb-doc.kbdev.kooboo.cn/test"
})
```

## k.site.helper
### k.site.helper.