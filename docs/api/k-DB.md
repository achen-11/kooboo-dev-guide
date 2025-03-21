# Database 操作

> DB命名空间包含了数据库的基本操作， 目前内置了7种数据库的支持， SqlServer, MySql与Mongo需要在系统配置里配置连接字符串。不同数据库的使用非常相似， 我们尽量提供统一的操作规范。

> 此篇章的基础操作可直接参考官网文档: [Database](https://kooboo.cn/docs/KScript/Database)

> 这里介绍 一个 ORM 模块: sqlite_orm (`@author ux34`), 用于快速操作 sqlite 数据库

## 安装

- 1.下载模块
    -  [[点击下载]](/downloads/sqlite_orm.zip) (ps: 模块 last updated: `2025-02-20`)
- 2.前往 kooboo CMS 后台, 找到 `模块` 菜单, 导入模块
![导入模块](/images/sqlite_orm-import.png)
- 3.安装完成后, 点击模块名称后可以进入模块详情, 如下图
![sqlite_orm](/images/sqlite_orm-01.png)

## 使用
### 1. 定义 model
创建一个 CodeBlock, 以产品表举例
> (koooboo IDE采用 "." 进行文件夹分级管理), 因此可以统一命名: Models.xxx
```ts
// CodeBlock: Models.products
import { define } from 'module:sqlite_orm' // 引入模块

// 支持定义枚举
export enum ProductStatus {
    Pending,
    Passed,
    Rejected
}
// define 方法内置表创建检查, 如果表不存在会自动创建
const model = define("products", {
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    size: {
        type: <'xs' | 'lg' | 'xl'>String,
    },
    status: {
        type: <ProductStatus>Number,
        default: ProductStatus.Pending
    },
    acitve: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export default model
```

### 2. 使用 model

#### 2.1 新增数据
> 新增直接调用 create 方法填入数据即可, 会返回新增的数据
```js
// --- CodeBlock: Services.products ---
import ProductModel from './Models.products'

export const createProduct = (data) => {
    // ...字段校验
    const product_id = ProductModel.create({
        ...data
    })
    return ProductModel.findById(product_id)
}


// --- Api: test ---
import { createProduct } from './Services.products'
import { ProductStatus } from "./Models.products"

k.api.get(() => {
    return createProduct({
        title: 'test product',
        price: 99.9,
        status: ProductStatus.Pending,
        size: 'xl'
    })
})

// return: 
{
    "title": "test product",
    "price": 99.9,
    "size": "xl",
    "status": 0,
    "acitve": false,
    "_id": "9ecb5055-616c-4abb-8b67-762a82542374", // kooboo 内置的唯一标识
    "created": 1740045591199,
    "updated": 1740045591199
}
```

#### 2.2 查询数据
> 查询
##### 根据 _id 查询
```js
// --- CodeBlock: Services.products ---
export const findProductById = (id: string) => {
    return ProductModel.findById(id)
}
// --- Api: test ---
import { findProductById } from './Services.products'

k.api.get(() => {
    return findProductById('9ecb5055-616c-4abb-8b67-762a82542374')
})
// return: 
{
    "title": "test product",
    "price": 99.9,
    "size": "xl",
    "status": 0,
    "acitve": false,
    "_id": "9ecb5055-616c-4abb-8b67-762a82542374",
    "created": 1740045591199,
    "updated": 1740045591199
}
```

##### 分页查询
```js
// --- CodeBlock: Services.products ---
// 分页查询 product
export const findProductByPage = (query) => {
    const { page, pageSize, status } = query
    return ProductModel.findPaginated({ status: status || ProductStatus.Pending }, {
        page: page || 1,
        pageSize: pageSize || 10
    })
}

// --- Api: test ---
import { findProductByPage } from './Services.products'

k.api.get(() => {
    return findProductByPage({ status: ProductStatus.Pending })
})
// return: 
{
    "list": [
        {
            "title": "test product",
            "price": 99.9,
            "size": "xl",
            "status": 0,
            "acitve": 0,
            "_id": "9ecb5055-616c-4abb-8b67-762a82542374",
            "created": 1740045591199,
            "updated": 1740045591199
        }
    ],
    "page": 1,
    "pageSize": 10,
    "total": 1
}
```

#### 2.3 更新数据


##### 根据 _id 更新
```ts
// --- CodeBlock: Services.products ---
export const updateProduct = (id:string, data: any)=>{
    return ProductModel.updateById(id, {
        ...data
    })
}

// --- Api: test ---
import { updateProduct } from './Services.products'

k.api.get(() => {
    return updateProduct('9ecb5055-616c-4abb-8b67-762a82542374', {
        title: 'update title'
    })
})

// return:
{
    "title": "update title",
    "price": 99.9,
    "size": "xl",
    "status": 0,
    "acitve": false,
    "_id": "9ecb5055-616c-4abb-8b67-762a82542374",
    "created": 1740045591199,
    "updated": 1740046645402
}
```

##### 根据条件批量更新
```ts
// --- CodeBlock: Services.products ---
export const updateProductByCondition = (condition: any, data: any) => {
    return ProductModel.update(condition, {
        ...data
    })
}

// --- Api: test ---
import { updateProductByCondition } from './Services.products'

k.api.get(() => {
    return ProductFn.updateProductByCondition({
        status: ProductStatus.Pending
    }, {
        status: ProductStatus.Passed
    })
})

// return:
[
    "9ecb5055-616c-4abb-8b67-762a82542374"
]
```

#### 2.4 删除数据

##### 根据 _id 删除
```ts
// --- CodeBlock: Services.products ---
export const deleteProductById = (id: string) => {
    return ProductModel.deleteById(id)
}

// --- Api: test ---
import { deleteProductById } from './Services.products'

k.api.get(() => {
    return deleteProductById('9ecb5055-616c-4abb-8b67-762a82542374')
})

// return: 
true
```

##### 根据条件删除
```ts
// --- CodeBlock: Services.products ---
export const deleteProductByCondition = (condition: any) => {
    return ProductModel.deleteMany(condition)
}

// --- Api: test ---
import { deleteProductByCondition } from './Services.products'

k.api.get(() => {
    return deleteProductByCondition({ status: ProductStatus.Pending })
})

// return:
{}
```

## k.DB.sqlite.query
> 使用 sqlite_orm 的 query 方法, 可以直接执行 sql 语句

> params:
> - sql: string 
> - params?: {key: value}

> return: any

```js
k.api.get(()=>{
    return k.DB.sqlite.query(`
        SELECT * FROM products
        WHERE status = @status
    `, {
        status: ProductStatus.Pending
    })
})
```

