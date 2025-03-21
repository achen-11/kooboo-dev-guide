# AI & kooboo 快速开发 <span class="beta-badge">beta</span>
> 基于前两篇的工具, 现在我们就可以通过 Cursor(Trae) 在本地快速开发 kooboo 项目了 !

## AI 快速开发流程图
> Cursor(Trae) & kooboo 快速开发流程大致可以参考下图:

![ai-process](/images/ai-process.jpg)

下面以 CRM 项目为例, 介绍如何通过 Trae IDE 联合 AI 快速开发 kooboo 项目
### 前置条件确认
1. 下载 Trae IDE (or Cursor IDE)
2. 下载 Kooboo CLI
3. 克隆一份 Kooboo API 文档

### 项目初始化
1. kooboo 创建空白站点
2. 导入 site_import_helper 模块
3. 使用 Kooboo CLI 创建项目
```bash
kooboo create --name crm-manage
```
4. 执行 import 脚本
```bash
node crm-manage/utils/sync-to-remote.js
```
5. 创建 .kbignore 文件, 添加不需要参与同步的第三方依赖文件
6. 创建 .cursorrules 文件, 添加项目开发规范

   ![cursorrules](/images/cursorrules.png)
7. git 初始化 (推荐)
```bash
git init
```


### 项目开发

按照个人习惯通过提示词进行站点开发, 下面通过模块->表设计 -> services -> api -> page 的顺序为例进行开发

#### 1.表设计
```md
`@crm-manage-new` `@.cursorrules` `@03-05.md` 基于我提供的文件,
阅读 crm-manage-new 下的模板代码, 在 crm-manage-new 文件夹下继续完成 crm 系统的开发,
我们按流程一步一步进行, 首先使用sqlite_orm完成表设计部分, 
任何不清楚的语法可以查看 docs 下的文档
```
![ai-crm-db](/images/ai-crm-db.png)

> review 代码并进行记录和优化
```md
`@k-DB.md` 很好, 但有两个问题可以优化, 一个是关于 created 和 updated, 
可以通过 define 的第二个参数进行快捷定义, 我已经在代码中进行修改, 
你可以结合 k-db 进行了解, 把这个错误记录到 review-notes 中避免再次犯错
另外, 枚举可以通过 `@k-DB.md 42-42` 或 `@k-DB.md 45-45` 这样的方式进行引用, 
这个也可以记录到 review-notes, 你新建一个 03-13.md 进行记录
```

![ai-crm-db-pref](/images/ai-crm-db-pref.png)

#### 2. 产品模块-服务端

> 服务端部分
```md
很好, 接下来我们开发产品模块, 先从 api 开始, 遵循 review-notes 中的开发规范, 
记得预留分页和筛选的参数, 另外 sqlite_orm 是不支持 like 和比较大小的参数的, 
遇到这种情况要使用 k.DB.sqlite.query(sql)进行查询, 
api 开发结束后停下来等我 review 后再进行前端的开发
```
![ai-crm-product-api](/images/ai-crm-product-api.png)

> review 代码并进行记录和优化
```md
很好, 大部分代码都没有问题, 但是 kooboo 的 sqlite 在创建时会自动创建一个_id 字段作为主键,
所以不需要额外管理类似 product_id 这样的字段, 你可以同时更新相关的代码, 
包括model, service 和 api, 并且把这个问题写入到 review-notes 中
```
![ai-crm-product-api-pref](/images/ai-crm-product-api-pref.png)

#### 3. 产品模块-前端
```md
好的, 现在看起来一切正常, 接下来我们开始开发产品模块的前端部分, 
记得参照 `@views` 下面的语法和规范进行开发
```
![ai-crm-product-page](/images/ai-crm-product-page.png)

> 进行 review 并进行记录和优化
```md
我 review 后发现了几处错误: 1.没有在 common-vue 引入 page.products,
导致 routes 中无法使用 `common-vue.html 2-2` , 2.部分el-table-column使用了单标签, 
这在 `03-05.md 49-51` 这里提到过, 而你再次犯了这个错误, 这是很不应该的! 
你去把它们改掉, 并且不要再犯这个错误了; 
3. 我更新了 routes, 你按照最新的代码进行继续读写 `common_routes.html`
```
![ai-crm-porduct-page-review](/images/ai-crm-porduct-page-review.png)

#### 4. 产品模块-测试
> 同步到远程 kooboo 进行常规的 CRUD 功能测试

<img src="/images/ai-crm-product-test.png" alt="ai-crm-product-test" class="bordered-image">

> 这样就是一个完成的模块开发, 最艰难的部分已经完成了, ai 的学习能力很强, 接下来的工作就是重复这个过程, 直到完成整个项目

#### 5. 模块开发

> 重复上述过程, 直到完成整个项目

> ps: 模块开发顺序最好按照数据关联关系进行开发, 例如: 订单模块需要关联产品和客户, 所以在开发产品模块和客户模块后, 再开发订单模块, 避免 ai 多次生成同一模块
#### 6. 模块展示

> 客户管理模块

<img src="/images/ai-crm-customer-page.png" alt="ai-crm-customer-page" class="bordered-image">

> 订单管理模块

<img src="/images/ai-crm-order-page.png" alt="ai-crm-order-page" class="bordered-image">

> 合同管理模块

<img src="/images/ai-crm-contract-page.png" alt="ai-crm-contract-page" class="bordered-image">

> 仪表盘模块

<img src="/images/ai-crm-dashboard-page.png" alt="ai-crm-dashboard-page" class="bordered-image">



