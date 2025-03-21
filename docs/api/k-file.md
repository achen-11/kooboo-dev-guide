# k.file

> k.file 提供了一系列操作站点内磁盘文件的方法

## k.file.append()
> 追加文件内容, 如果不存在则创建文件

> params: 
> - fileName: `string`
> - content: `string`

> return: `void`

```js
k.api.get("append", () => {
    return k.file.append("filename", "content")
})
```

## k.file.copy()
> 复制文件

> params: 
> - oldName: `string`
> - newName: `string`

> return: `void`

```js
k.api.get("copy", () => {
    return k.file.copy('filename.txt','newFile.txt');
})
```

## k.file.createFolder()
> 创建文件夹

> params: 
> - folderName: `string`
> - parentFolder?: `string`

> return: `void`

```js
k.api.get("createFolder", () => {
    return k.file.createFolder("folderName")
})
```

## k.file.delete()
> 删除文件

> params: 
> - fileName: `string`

> return: `void`

```js
k.api.get("delete", () => {
    return k.file.delete("filename")
})
```

## k.file.deleteFolder()
> 删除文件夹以及其下的所有文件和子文件夹

> params: 
> - folderName: `string`

> return: `void`

```js
k.api.get("deleteFolder", () => {
    return k.file.deleteFolder("folderName")
})
```

## k.file.exists()
> 判断文件是否存在

> params: 
> - fileName: `string`

> return: `boolean`

```js
k.api.get("exists", () => {
    return k.file.exists("filename.txt")
})
```

## k.file.folderFiles()
> 获取指定文件夹内的所有文件信息

> params: 
> - folder: `string`
> - searchOptions?: `SearchFolderOptions`

> return: FileInfo[]

```js
k.api.get("folderFiles", () => {
    return k.file.folderFiles("folderName")
})
```

## k.file.get()
> 获取指定文件的信息

> params: 
> - fileName: `string`

> return: `FileInfo`

```js
k.api.get("get", () => {
    return k.file.get("filename.txt")
})
// return:
{
    "Name": "filename.txt",
    "FullName": "filename.txt",
    "Size": 30,
    "StringSize": "0.03KB",
    "RelativeUrl": "/__kb/kfile/filename.txt",
    "AbsoluteUrl": "http://kb-document.wanggaojiachen.kooboo.cn/__kb/kfile/filename.txt",
    "url": "/__kb/kfile/filename.txt",
    "LastModified": "2025-02-24T20:30:58.9579388+08:00",
    "AuthorUserName": null
}
```

## k.file.getAllFiles()
> 获取所有的文件

> return: `FileInfo[]`

```js
k.api.get("getAllFiles", () => {
    return k.file.getAllFiles()
})
```

## k.file.load()
> 加载文件, 并获取文件的相关信息, 与 get 方法一致

> params: 
> - fileName: `string`

> return: `FileInfo`
```js
k.api.get("load", () => {
    return k.file.load("filename.txt")
})
// return:
{
    "Name": "filename.txt",
    "FullName": "filename.txt",
    "Size": 30,
    "StringSize": "0.03KB",
    "RelativeUrl": "/__kb/kfile/filename.txt",
    "AbsoluteUrl": "http://kb-document.wanggaojiachen.kooboo.cn/__kb/kfile/filename.txt",
    "url": "/__kb/kfile/filename.txt",
    "LastModified": "2025-02-24T20:30:58.9579388+08:00",
    "AuthorUserName": null
}
```

## k.file.read()
> 读取文件内容文本

> params: 
> - fileName: `string`

> return: `string`

```js
k.api.get("read", () => {
    return k.file.read("filename.txt")
})

// return: "content to append to text file"
```

## k.file.readBinary()
> 将文件读取字节数组

> params: 
> - FileName: `string`

> return: `number[]`

```js
k.api.get("readBinary", () => {
    return k.file.readBinary("empty.png")
})
// return: [ 137, 80, ...]
```

## k.file.rename()
> 重命名文件

> params: 
> - oldName: `string`
> - newName: `string`

> return: `void`
```js
k.api.get("rename", () => {
    return k.file.rename("filename.txt", "newFilename.txt")
})
```

## k.file.renameFolder
> 重命名文件夹

> params: 
> - oldName: `string`
> - newName: `string`

> return: `void`

```js
k.api.get("renameFolder", () => {
    return k.file.renameFolder("folderName", "newFolderName")
})
```

## k.file.resumableUpload
> 断点续传
### k.file.resumableUpload.create()
> 创建断点续传任务

> params: 
> - name: `string`
> - size: `number`
> - chunkSize: `number`

> return: `ResumableUploadTask`

```js
k.api.get("resumableUploadCreate", () => {
    return k.file.resumableUpload.create("video.mp4", 10*1024*1024, 1024*1024)
})
```
### k.file.resumableUpload.get()

### k.file.resumableUpload.remove()
## k.file.subFolders
> 获取指定文件夹下的所有子文件夹

> params: 
> - folder: `string`

> return: `FolderInfo[]`

```js
k.api.get("subFolders", () => {
    return k.file.subFolders("folderName")
})
// return:
[
    {
        "Name": "folder1",
        "FullName": "folder1",
    }
]
```

## k.file.url
> 访问相对路径对应文件的真实可访问的路径

> params: 
> - fileName: `string`

> return: `string`

```js
k.api.get("url", () => {
    return k.file.url("empty.png")
})
// return: "/__kb/kfile/empty.png"
```

## k.file.write
> 写入文件内容

> params: 
> - fileName: `string`
> - content: `string`

> return: `FileInfo`

```js
k.api.get("write", () => {
    return k.file.write("filename.txt", "content to write to text file")
})
```

## k.file.writeBinary
> 将字节数组写入站点磁盘文件夹

> params: 
> - fileName: `string`
> - binary: `number[]`

> return: `FileInfo`

```js
k.api.get("writeBinary", () => {
    return k.file.writeBinary("empty.png", [137, 80, ...])
})
```

## 使用案例
> 相关应用
> - [在线云盘](https://www.kooboo.cn/_Admin/template/detail?templateId=b893245c-94a4-4d59-9f26-b02914ca26b2) - (断点续传)
> - [files] (站点 kfile 可视化管理模块)
>   - Kooboo 后台 -> 模块 -> 搜索 -> files