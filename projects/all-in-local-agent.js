// 都选 C · All-in Local Agent —— 团队可直接编辑此文件维护自己的内容
window.PROJECTS = window.PROJECTS || [];
window.PROJECTS.push({
  id:"local-agent", team:"都选 C", product:"All-in Local Agent",
  color:"#58a6ff",
  order:2, members:["Brooks","May","Penn","Lorna"], presenter:"Brooks",
  tagline:"用自己的 Agent，Build Anything —— Local-first 的 Agent 运行与接入平台",
  problem:"用户本机已经装好并登录了 Claude Code、Codex、Gemini CLI、Cursor 等 coding agent，但这些能力彼此分散、无法统一管理，更无法被本机界面或远端（如手机）调用使用。",
  solution:"把本机已有的 agent、账号和运行环境统一接入一个桌面 Hub，并通过同一套 Gateway API 让本机界面或远端移动应用调用它们。AI 推理与工具执行全部发生在用户自己的电脑上，云端 Relay 只负责连接设备和转发消息，不提供 AI 推理。",
  points:[
    "<b>Local-first</b>：复用用户本机已有的 coding agent、账号与运行环境，数据不出本机。",
    "<b>Multi-agent</b>：统一发现并管理多个 Agent Runtime，通过 Role 组成协作群聊。",
    "<b>Structured tasks</b>：把 Agent 输出校验为符合 JSON Schema 的结构化结果，不命中就追问重试。",
    "<b>Remote-ready</b>：移动应用经 Relay 调用本机 Agent，断线重连后还能对账任务结果。",
    "<b>Protocol boundary</b>：在 daemon 内终结 ACP 与各 adapter 的差异，对客户端提供稳定 Gateway API。",
  ],
  modules:[
    ["Hub","Electron 桌面应用 · Runtime/角色管理、多 Agent 群聊、设备配对"],
    ["Daemon","进程监管 · Session / StructuredExchange / Task / 权限策略"],
    ["Protocol","TypeScript 契约包 · Gateway API、Relay 帧、DTO、错误码"],
    ["SDK","RN 兼容 · 配对、任务提交、进度订阅、重连对账"],
    ["Relay","Node WebSocket · 连接管理、路由转发、限流"],
    ["Nutrition App","首个远端场景 · 拍食物拿结构化营养分析"],
  ],
  repo:"https://github.com/2026hackathon/all-in-local-agent",
  assets:"源代码 ✓ · 演示 PPT ✓ · 现场 Demo",
});
