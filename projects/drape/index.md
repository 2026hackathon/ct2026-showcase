## 解决什么问题

衣橱很满，却经常忘记自己有什么；看到喜欢的穿搭，不知道自己能不能复刻；买了新衣，也不知道怎么和旧衣服搭。每天出门前的「穿什么」变成反复纠结，最后还是穿回熟悉的几套。

## 怎么解决

Drape 把用户已有衣橱变成可试穿、可搭配、可发现灵感的 AI 衣橱。用户先用 AI 生成的正面照创建可复用 Figure，再拍照录入衣物；系统自动抠图、识别品类 / 颜色 / 风格标签，并支持多件衣物组合上身试穿。AI Stylist 会先从衣橱里挑单品给建议，Discover 则把社区灵感和用户自己的衣物连接起来。

## 关键亮点

- **AI Figure**：上传正面照与基础身材信息，生成可复用的试穿人物；演示使用 AI 生成头像，避免真实隐私风险。
- **衣物商品化**：拍照或从相册上传，AI 自动检测衣物、去背景、补 studio light，并生成品类、颜色、场景和风格标签。
- **多件虚拟试穿**：从衣橱里选择上衣、下装、鞋等多件单品，一键生成完整 outfit，上身结果可保存为 look。
- **AI Stylist**：用自然语言说场景，例如 casual weekend，系统先翻你的衣橱推荐可穿的一套，再直接试穿。
- **Discover 灵感闭环**：浏览社区穿搭，也可以基于某件衣物搜索 featuring looks，让灵感回到已有衣橱，而不是直接变成冲动消费。

## 产品截图

![AI Figure](figure.png)
![Closet listing](closet-item.png)
![Virtual try-on](tryon.png)
![AI Stylist](stylist.png)
![Discover looks](discover.png)

## 产品组成

| Figure | Closet | Try-on | AI Stylist | Discover |
| --- | --- | --- | --- | --- |
| AI body profile，用于后续所有 try-on 的人物基线 | 衣物录入、AI 抠图、商品化标签、分类管理 | 多单品组合生成完整穿搭，并保存为 Look | 从用户衣橱出发的自然语言搭配助手 | 社区灵感流 + 指定衣物的相似穿搭搜索 |

## 硬核成果

| 5 | 3 | 6 |
| :--: | :--: | :--: |
| 核心用户流程 | 单次可组合试穿单品 | 指定单品灵感 looks 示例 |

## 差异化优势

- 衣橱优先，不先劝买
- Figure 可复用
- 衣物录入到试穿闭环
- AI 建议可直接生成上身效果
- 生成结果带 review / refine 意识

## 技术栈

`Next.js 15 + React 19` · `OpenAI Agents SDK` · `Azure OpenAI` · `Prisma + SQLite` · 编排是确定性代码，不是 agent
