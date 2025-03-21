# 站点同步助手 <span class="beta-badge">beta</span>
> 该助手是基于 `k.site` 的本地与远程代码同步工具, 可以通过脚本实现 拉取/推送 操作

## 安装
在目标站点导入模块: [[site_import_helper]](/downloads/site_import_helper.zip) (ps: last updated: `2025-03-12`)

> 该模块会在站点开放两个 api, `__export` 和 `__import`, 分别用于导出和同步站点代码


## 使用
> 通过 cli 创建的项目, 在 `utils`文件下分别有 `sync-from-remote.js` & `sync-to-remote.js`, 分别用于拉取和同步代码

### 推送
1. 定义脚本变量 (直接进入脚本中进行修改)
   - 本地文件夹名称: `LOCAL_DIR`
   - 远程仓库地址: `REMOTE_REPO_URL`
   - 导出 API 路径: `REMOTE_REPO_URL`
   - 忽略文件目录: `KBIGNORE_PATH`

```js
// ----- /utils/sync-to-remote.js -----
// 本地文件夹
const LOCAL_DIR = 'task-manage';

// .kbignore 文件路径
const KBIGNORE_PATH = path.join(LOCAL_DIR, 'utils', '.kbignore');

// 远程仓库地址
const REMOTE_REPO_URL = 'http://task_manage-kbdev-hz.kooboo.cn';
const IMPORT_API_URL = `${REMOTE_REPO_URL}/_site_import_helper/api/__import`;
```

2. 使用脚本
```bash
# 全量推送 (kooboo 会进行代码比对, 自动识别更新文件)
# mac 使用
node utils/sync-to-remote.js
# windows 使用
node .\utils\sync-to-remote.js

# 局部推送 (--dirs: layouts | pages | views | scripts | apis | codeblocks) 逗号分隔
# mac 使用
node utils/sync-to-remote.js --dirs views,xxx
# windows 使用
node .\utils\sync-to-remote.js --dirs views,xxx
```

3. 查看更新数据/日志
   - 远程: 可前往站点 CMS -> 系统 -> 站点日志 查看更新内容
   - 本地: 可前往 /utils/sync-json 目录下查看更新内容 json

效果如图:
![push-successs](/images/push-success.png)


### 拉取
1. 定义脚本变量 (直接进入脚本中进行修改)
   - 本地文件夹名称: `LOCAL_DIR`
   - 日志文件路径: `PULL_JSON_DIR`
   - 远程仓库地址: `REMOTE_REPO_URL`
   - 导出 API 路径: `REMOTE_REPO_URL`
   - 忽略文件目录: `KBIGNORE_PATH`
  
2. 使用脚本 

```bash
# 全量推送 (kooboo 会进行代码比对, 自动识别更新文件)
# mac 使用
node utils/sync-from-remote.js
# windows 使用
node .\utils\sync-from-remote.js

# 局部推送 (--types: layout | page | view | script | api | codeblock) 逗号分隔
# mac 使用
node utils/sync-from-remote.js --types view,xxx
# windows 使用
node .\utils\sync-from-remote.js --types view,xxx
```

3. 查看拉取日志
   - 推荐结合 git 进行版本控制, 可以快速查看更新内容
   - 本地: 可前往 /utils/sync-json 目录下查看更新内容 json

效果如图:
![pull-successs](/images/pull-success.png)

