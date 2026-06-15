// 打出风采 · Diggy 挖挖 —— 团队可直接编辑此文件维护自己的内容
window.PROJECTS = window.PROJECTS || [];
window.PROJECTS.push({
  id:"diggy", team:"打出风采", product:"Diggy 挖挖",
  color:"#f0883e",
  order:6, members:["Miller","Simon","Brooker"], presenter:"Simon",
  award:{rank:"bronze", icon:"🥉", label:"三等奖 · 铜牌"},
  tagline:"可进化的 DevOps AI Agent —— 把查日志、看指标、定位问题，变成人人可用、随叫随到、结论可验证的服务",
  problem:"团队不缺数据和查询技巧（ES-Kibana-AKS 等基础设施已很完善），真正缺的是「从数据到结论的自动化路径」：早晨想知道服务稳不稳要手动开 Kibana 写查询；发布前看错误趋势要查多个 index 自己比对；半夜告警人不在电脑前；同事甩来一条错误日志却没法马上分析。",
  solution:"以 Slack 为统一入口（@Diggy 一句话即可触发），提供两条核心产品链路：M1 时间窗报告——自然语言问时间范围，自动聚合日志生成健康报告；M2 锚点诊断——输入 Kibana 链接或告警 ID，逐轮取证、收敛假设，生成可溯源的诊断报告。",
  points:[
    "<b>快 / 准 / 不越位</b>：极大缩短发现问题到拿到结论的时间；结论可追溯可验证；只做分析者与建议者，不替代人的最终决策。",
    "<b>Runtime Harness</b>：用 Task / Tool / Evidence / Schema+Audit 四道 Gate 硬约束 Agent 行为，全程 audit 留痕。",
    "<b>LLM 负责理解，代码负责事实</b>：所有数字来自 ES 聚合结果，LLM 不参与计算；报告生成后做实体校验，防编造。",
    "<b>逐轮取证而非黑盒推理</b>：模型提出假设、选择下一步取证，每轮证据收敛或推翻假设，结论必须被原始日志引用支撑。",
  ],
  stats:[["515","自动化测试用例"],["162","次提交"],["61","份报告"],["0","手写业务代码"]],
  repo:"https://github.com/2026hackathon/diggy",
  assets:"源代码 ✓ · 演示 PPT ✓ · Demo 视频 (m1/m2)",
});
