## 解决什么问题

软件开发界的「马冬梅」事件：

1. **知识失忆** —— 代码告诉你做了什么却不告诉你为什么，历史决策随同事离职丢失；
2. **影响未知** —— 一个小改动可能牵动多服务，评估高度依赖个人经验；
3. **信息源割裂** —— 代码、Git、Jira、Confluence、PR、文档分散在不同系统，查问题像拼碎片。

## 怎么解决

从用户一句自然语言问题出发，**7 个 Agent 协作**完成：定位代码、追溯历史、还原需求、校验证据。以代码为唯一事实基准，**Code + Git + Jira 三元闭环**形成高置信度结论，输出带出处、带置信度的答案。补上现有工具缺失的「系统理解层」。

## 关键亮点

- **7 Agent 链路**：Dongmei-MA 协调调度 → KB Keeper / Code Analyst / Repo Tracer / Jira Tracer 并行取证 → Synthesizer 综合 → Evidence Verifier 校验。
- **Evidence First**：每条结论都带出处和置信度，证据不足自动返工，最多 2 轮后降级交付。
- **三大应用场景**：需求评估（某改动影响哪些模块）、Bug 定位（为什么某功能没出现）、溯源需求并自动执行测试出报告。
- **对标竞品**：相比 Copilot/Cursor、Sourcegraph、Glean/Rovo、Devin，DM-Seek 专注 Why / Impact / Evidence 的证据闭环。

## Demo 分析报告

- [HTML 输出报告样例](reports/HDR-BA-allocationSetting-排查报告.html)
- [运行全流程详情](reports/dm-seek-全流程总结.html)
- [更多报告样例](https://github.com/2026hackathon/dm-seek/tree/main/reports)