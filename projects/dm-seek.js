// Team Aback · DM-Seek —— 团队可直接编辑此文件维护自己的内容
window.PROJECTS = window.PROJECTS || [];
window.PROJECTS.push({
  id:"dmseek", team:"Team Aback", product:"DM-Seek",
  color:"#39c5cf",
  order:7, members:["Dylan","Jason","Mantee"], presenter:"Dylan",
  tagline:"软件研发的「理解 × 追溯 × 验证」基础设施",
  problem:"软件开发界的「马冬梅」事件：① 知识失忆——代码告诉你做了什么却不告诉你为什么，历史决策随同事离职丢失；② 影响未知——一个小改动可能牵动多服务，评估高度依赖个人经验；③ 信息源割裂——代码、Git、Jira、Confluence、PR、文档分散在不同系统，查问题像拼碎片。",
  solution:"从用户一句自然语言问题出发，7 个 Agent 协作完成：定位代码、追溯历史、还原需求、校验证据。以代码为唯一事实基准，Code + Git + Jira 三元闭环形成高置信度结论，输出带出处、带置信度的答案。补上现有工具缺失的「系统理解层」。",
  points:[
    "<b>7 Agent 链路</b>：Dongmei-MA 协调调度 → KB Keeper / Code Analyst / Repo Tracer / Jira Tracer 并行取证 → Synthesizer 综合 → Evidence Verifier 校验。",
    "<b>Evidence First</b>：每条结论都带出处和置信度，证据不足自动返工，最多 2 轮后降级交付。",
    "<b>三大应用场景</b>：需求评估（某改动影响哪些模块）、Bug 定位（为什么某功能没出现）、溯源需求并自动执行测试出报告。",
    "<b>对标竞品</b>：相比 Copilot/Cursor、Sourcegraph、Glean/Rovo、Devin，DM-Seek 专注 Why / Impact / Evidence 的证据闭环。",
  ],
  repo:"https://github.com/2026hackathon/dm-seek",
  assets:"源代码 ✓ · 演示 PPT · Demo / QA 视频",
});
