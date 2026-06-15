// 问题不大 · Next —— 团队可直接编辑此文件维护自己的内容
window.PROJECTS = window.PROJECTS || [];
window.PROJECTS.push({
  id:"next", team:"问题不大", product:"Next",
  color:"#3fb950",
  order:5, members:["Manz","Murphy","Henry"], presenter:"Henry",
  tagline:"你的下一件事 —— 住在灵动岛的 AI 任务管家",
  problem:"待办事项散落在 N 个工具里（聊天 / 邮件 / Jira / 日历 / GitHub / 终端），还要盯着 Agent。录入门槛高，大部分事在「想记」和「真记」之间被忘掉；时间到了才提醒已经来不及；早上要开一堆窗口才知道今天干嘛。",
  solution:"把一直空着的刘海变成第二块屏——一个永远在线的 AI 助手：收缩态只占两翼不挡内容，悬停展开。记录 → 追踪 → 提醒 → 复盘 全在这一小块闭环。按「你和它的关系」把一天要操心的事重新归为五类、零重叠：Todo / WorkItem / Calendar / Message / Agent。",
  points:[
    "<b>截图秒变待办</b>：F2 截图 → AI 视觉解析 → 3 秒生成结构化待办，自动判断优先级、建议截止、挂原图。",
    "<b>一屏管全部工作流</b>：Today 给建议工作顺序、Work 汇 Jira+PR、Calendar 并一条时间线、Inbox 邮件收成一句话。",
    "<b>Agent 会话监控</b>：把 agent 运行状态搬上刘海，运行中→待确认→完成弹卡，可跳回 Terminal / iTerm / tmux。",
    "<b>AI 晨晚报</b>：早报排今天工作顺序避开会议，晚报复盘今天并预警明天高优。",
    "<b>MCP 扩展</b>：下一步开放 MCP server，让任何 agent / 脚本 / CI 都能往 Next 写提醒，成为统一提醒出口。",
  ],
  repo:"待填写",
  assets:"3 人小队 · 48 小时 · spec-driven vibecoding (Swift)",
});
