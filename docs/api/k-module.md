# k.module
> k.module 提供了一系列模块的操作方法

## 模块方法
> 模块方法模块内的属性或者方法, 需要在 module 中使用

### k.module.baseUrl
> 获取当前模块的地址 (需要在模块中调用)

```js
// --- module:doc_module Api test ---
// 经测试, module 的 api 暂未支持动态 api
k.api.get(()=>{
  return k.module.baseUrl
})
// "http://kb-doc.redev.cn/_doc_module"
```

### k.module.config
> 获取当前模块的配置数据 (需要先在 Module.config 中配置)

```js
// --- module:doc_module Api test ---
k.api.get(()=>{
  return k.module.config
})
```


### k.module.localFile
> 获取并支持操作模块的本地文件

```js
// 可操作类型: 
// k.module.localFile.api
// k.module.localFile.css 
// k.module.localFile.file
// k.module.localFile.img 
// k.module.localFile.js 
// k.module.localFile.view 

// 操作方法示例:
k.module.localFile.css.writeText("abc.css", "div{color:red;}")
 
var result = k.module.localFile.css.readText("abc.css");  
k.response.write(result); 

```


### k.module.localIndexedDb
> 操作当前 module 下的 IndexedDB 实例

```js
// 操作方法示例
var obj = {
    FirstName: "my first Name",
    LastName: "my last name"
}

k.module.localIndexedDb.newtable.add(obj); 
 
var list = k.module.localIndexedDb.newtable.all(); 
k.response.json(list); 

```

### k.module.localSqlite
> 提供一个本地的Sqlite数据库，使用方法与站点下的Sqlite数据库是一样的

```js
var obj = {
    FirstName: "my first Name",
    LastName: "my last name"
}

k.module.localSqlite.newtable.add(obj); 
 
var list = k.module.localSqlite.newtable.all(); 
k.response.json(list); 
```

### k.module.name
> 获取当前模块的名称

```js
k.api.get("name", () => {
    return k.module.name
})
// return:
// "module_create"
```

### k.module.openFileStream()
> 操作指定文件类型的文件, 类似`k.module.localFile`

> params: 
> - fileType: `'css'| 'js'|  'view'|  'api'|  'img'|  'file'

> return `KModuleFiles`
```js
 k.api.get(()=>{
    return k.module.openFileStream("css").files()
 })
```

## 操作模块方法
> 操作方法是站点中的通用方法, 可以在 API 或者 CodeBlock 中直接使用

### k.module.createModule()
> 创建一个新模块

> params:
> - name: `string`

>return:
> - `ScriptModule`

```js
k.api.get("createModule", () => {
    const _module =  k.module.createModule('module_create')
    return _module
})
// return: 
{
    "PackageName": null,
    "ModuleVersion": null,
    "RelativeFolder": null,
    "StartView": null,
    "Settings": null,
    "TaskJs": null,
    "Online": true,
    "Version": 76,
    "ConstType": 60,
    "CreationDate": "2025-02-28T01:25:22.6922567Z",
    "LastModified": "2025-02-28T01:25:22.6922354Z",
    "LastModifyTick": 638763027226922354,
    "Id": "49891354-c298-722e-8052-f92893323384",
    "name": "module_create"
}
```

### k.module.exportAsZip()
> 导出指定模块的 zip 文件的二进制数组

> params:
> - nameOrId: `string`

> return: `number[]`

```js
k.api.get("exportAsZip", () => {
    const binary = k.module.exportAsZip("module_create")
    const file = k.file.writeBinary("/modules/module_create.zip", binary)
    return file
})
```

### k.module.importFromUrl()
> - 从其他kooboo站点导入模块

> params:
> - siteUrl: `string`
> - moduleId: `string`
> - newModuleName: `string`

> return: `string`

```js
k.api.get("importFromUrl", () => {
    return k.module.importFromUrl("https://misago.redev.cn", "aa2c9a72-b21b-b5ab-eeae-b45ac06eb969", "files")
})
// return:
// "aa2c9a72-b21b-b5ab-eeae-b45ac06eb969"
```

### k.module.importZip()
> 导入 zip 文件

> params:
> - name: `string`
> - zip: `number[]`

> return: `string`
```js
k.api.get("importZip", () => {
    const binary = k.file.readBinary("/modules/module_create.zip")
    return k.module.importZip("impoerFiles", binary)
})
// return:
// "5ebcdb15-2373-e0ed-6570-05566f87f606"
```

### k.module.installFromRepository()
> 从代码库安装模块, 配合`searchRepository`使用

> params:
> - packageId: `string`
> - name: `string`

> return: `string`

```js
k.api.get("installFromRepository", () => {
    return k.module.installFromRepository("3963b945-a47a-4a0d-0063-e0d85e4fe7a1", "files")
})
// return:
// "aa2c9a72-b21b-b5ab-eeae-b45ac06eb969"
```

### k.module.isNameExists()
> 检查模块名称是否存在

> params:
> - name: `string`

> return: `boolean`

```js
k.api.get("isNameExists", () => {
    return k.module.isNameExists("tttt")
})
// return: false
```


### k.module.list()
> 获取所有模块信息

> return: `ScriptModule[]`

```js
k.api.get("list", () => {
    return k.module.list()
})
// return:
[
  {
      "PackageName": null,
      "ModuleVersion": null,
      "RelativeFolder": null,
      "StartView": null,
      "Settings": null,
      "TaskJs": null,
      "Online": true,
      "Version": 24,
      "ConstType": 60,
      "CreationDate": "2025-02-20T08:27:44.7160106Z",
      "LastModified": "2025-02-20T08:27:44.7160168Z",
      "LastModifyTick": 638756368647160168,
      "Id": "468c3912-961b-7b96-dea5-dd2815611f5d",
      "name": "sqlite_orm"
  },
  ...
]
```



### k.module.remove()
> 删除指定模块

> params:
> - nameOrId: `string`

> return: `void`

```js
k.api.get("remove", () => {
    return k.module.remove("module_create")
})
```

### k.module.searchRepository()
> 从模块库搜索模块

> params:
> - keyword: `string`

> return: `ModuleSearchResult[]`

```js
k.api.get("searchRepository", () => {
    return k.module.searchRepository("file")
})
// return:
[
  {
    "PackageId": "3963b945-a47a-4a0d-0063-e0d85e4fe7a1",
    "Title": "files",
    "Description": "Module Summary Information"
  }
]
```

### k.module.task
