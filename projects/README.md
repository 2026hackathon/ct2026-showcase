# 项目数据 · 各队自维护

展示页（`../index.html`）的内容来自这个目录。**每个队伍一个 `.js` 文件，改自己那份即可**，互不影响。

| 文件 | 队伍 | 产品 |
| --- | --- | --- |
| `agentboss.js` | 乘风破限 | Agent Boss |
| `all-in-local-agent.js` | 都选 C | All-in Local Agent |
| `core-ai-team.js` | Core-AI Team | Core-AI Team |
| `drape.js` | 干饭搭子 | Drape |
| `next.js` | 问题不大 | Next |
| `diggy.js` | 打出风采 | Diggy 挖挖 |
| `dm-seek.js` | Team Aback | DM-Seek |
| `menupilot.js` | 爱吃香菜 | MenuPilot |

## 怎么改

打开你队伍的文件，编辑 `window.PROJECTS.push({ ... })` 里的字段：

| 字段 | 必填 | 说明 |
| --- | :---: | --- |
| `id` | ✓ | 唯一标识，别和别队重复 |
| `team` / `product` | ✓ | 队名 / 产品名 |
| `color` | ✓ | 主题色（十六进制，如 `#58a6ff`），tab 圆点、强调文字都用它 |
| `order` | ✓ | 路演顺序，决定左侧排序 |
| `members` | ✓ | 队员数组，如 `["A","B"]` |
| `presenter` | ✓ | 路演人（须是 members 里的某个名字，会高亮标「· 路演」）|
| `tagline` | ✓ | 一句话标语 |
| `problem` | ✓ | 解决什么问题 |
| `solution` | ✓ | 怎么解决 |
| `points` | ✓ | 关键亮点数组，可用 `<b>...</b>` 加粗 |
| `award` | | 奖项，如 `{rank:"gold", icon:"🥇", label:"一等奖 · 金牌"}`（rank 取 gold/silver/bronze/ai）|
| `modules` | | 产品组成卡片：`[["名称","说明"], ...]` |
| `stats` | | 硬核数字：`[["515","测试用例"], ...]` |
| `diff` | | 差异化优势标签数组 |
| `stack` | | 技术栈标签数组 |
| `repo` | | 仓库地址（`http` 开头会渲染成可点链接）|
| `assets` | | 提交物清单，显示在页脚 |

非必填字段不写或删掉即可，对应板块会自动隐藏。

## 新增一个项目

1. 在本目录新建 `你的产品.js`，照其它文件的格式写 `window.PROJECTS.push({...})`。
2. 在 `../index.html` 的 `<!-- 每个项目一个文件 -->` 注释下，加一行 `<script src="projects/你的产品.js"></script>`。

## 本地预览

直接双击 `../index.html` 用浏览器打开即可（无需起服务器）。
