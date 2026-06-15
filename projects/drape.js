// 干饭搭子 · Drape —— 团队可直接编辑此文件维护自己的内容
window.PROJECTS = window.PROJECTS || [];
window.PROJECTS.push({
  id:"drape", team:"干饭搭子", product:"Drape",
  color:"#ec6cb9",
  order:4, members:["Jenny","Jay","Even","Peyton"], presenter:"Jenny",
  award:{rank:"ai", icon:"🤖", label:"AI 驾驭奖"},
  tagline:"AI 穿搭助手 —— 不追潮流 · 不必买新 · 穿好你已有的",
  problem:"衣橱很满却经常忘记自己有什么；买了新衣不知道跟旧的怎么搭；纠结半天最后还是穿回同一套；看到喜欢的不知道自己的上身效果。「衣食住行」里，Drape 解决「穿」。",
  solution:"用 AI 帮你重新发现衣橱里的衣服——虚拟试穿看效果、智能搭配找灵感。核心理念是「衣橱优先」：当你上传一件新衣，Drape 不会立刻劝你买，而是先翻你的衣橱找能搭的相似款；找不到，才带你去社区看灵感。结果是更少冲动消费、更高衣橱利用率。",
  points:[
    "<b>数字化衣橱</b>：拍照 / 上传，AI 分析成商品化单品，让被遗忘的衣服重见天日。",
    "<b>AI 形象</b>：录入 body profile（照片+身高体重），生成你的虚拟形象用于试穿。",
    "<b>试穿即一等公民</b>：生成 → 审查 → 细化。因为整图重绘会漂移人脸身份与身材比例，每次生成都附一份可检视的评审结果。",
    "<b>搭配与发现</b>：按 Work/Casual/Evening 等场合生成多套搭配；社区灵感作为购买参考。",
  ],
  stack:["Next.js 15 + React 19","OpenAI Agents SDK","Azure OpenAI","Prisma + SQLite","编排是确定性代码，不是 agent"],
  repo:"私有 PoC · Web 端竖屏体验",
  assets:"PoC 源码 · 演示 PPT (Drape_Deck) · FigJam 设计稿",
});
