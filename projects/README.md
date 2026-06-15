# 各队自维护说明

展示站结构：

```
index.html              # 入口导航（项目卡片列表）
team.html               # 项目详情页模板（一般不用动）
lib/marked.min.js       # Markdown 解析器（本地自带）
projects/
  manifest.js           # 队伍清单（卡片元信息：名字/排序/奖项/路演人…）
  <你的队>/
    index.md            # ★ 你的页面正文，自由写 Markdown
    *.png / *.mp4 ...   # ★ 你的图片、视频，直接丢这个目录
```

## 你要改的只有两个地方

### 1）`projects/<你的队>/index.md` —— 页面正文（重点）

纯 Markdown，想写什么写什么。标题、列表、表格、引用、代码块都支持。

**加图片**：把图片文件丢到自己目录里，然后：

```markdown
![营销看板](dashboard.png)
```

连续多张图会自动排成画廊：

```markdown
![](01.png)
![](02.png)
![](03.png)
```

**加视频 / 在线 Demo**（Markdown 里可直接写 HTML）：

```html
<video src="demo.mp4" controls></video>
<iframe src="https://你的demo地址" height="640"></iframe>
```

> 图片/视频用**文件名相对路径**即可（相对你自己的目录），页面会自动补全路径。

### 2）`projects/manifest.js` —— 卡片信息（很少改）

只在产品名、标语、排序、队员、路演人、奖项、仓库地址有变动时，改你那一条对象。

## 本地预览

Markdown 自动渲染需要通过 http 读取文件，**直接双击打开会被浏览器拦截**。在仓库根目录跑一行：

```bash
python3 -m http.server 8000
```

然后浏览器打开 <http://localhost:8000/> 即可。线上的 GitHub Pages 不受此限制，提交后自动生效。

## 想要完全自定义的页面？

如果不想用 Markdown，想自己写整页 HTML/JS：在自己目录放一个 `index.html`，把 `manifest.js` 里你那条的链接指过去即可（找维护者改一下入口也行）。

## 新增一个队伍

1. 建目录 `projects/<id>/`，放一个 `index.md`。
2. 在 `manifest.js` 的数组里加一条对象（参考已有格式，`id` 要和目录名一致）。
