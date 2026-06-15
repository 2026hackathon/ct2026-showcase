// ============================================================
//  队伍清单（卡片元信息）—— 改动较少，一般只在排序/名字/奖项变动时编辑
//  每队的「正文内容、图片、Demo」请改各自目录下的 index.md
//    projects/<id>/index.md
// ============================================================
window.TEAMS = [
  {
    id:"agentboss", order:1, color:"#a371f7",
    team:"乘风破限", product:"Agent Boss",
    tagline:"做 AI 的 Boss，不做 AI 的保姆 —— 量化 · 成长 · 进化",
    members:["Felix","Cato","Knight","Bonnie"], presenter:"Felix",
    repo:"https://github.com/2026hackathon/AgentBoss",
  },
  {
    id:"local-agent", order:2, color:"#58a6ff",
    team:"都选 C", product:"All-in Local Agent",
    tagline:"用自己的 Agent，Build Anything —— Local-first 的 Agent 运行与接入平台",
    members:["Brooks","May","Penn","Lorna"], presenter:"Brooks",
    repo:"https://github.com/2026hackathon/all-in-local-agent",
  },
  {
    id:"core-ai", order:3, color:"#f85149",
    team:"Core-AI Team", product:"Core-AI Team",
    tagline:"从 Copilot 到 Company —— 纯 Agent 驱动的 AI 虚拟项目公司",
    members:["Xander","Cyril","Stephen","Richard"], presenter:"Xander",
    award:{rank:"gold", icon:"🥇", label:"一等奖 · 金牌"},
    repo:"https://github.com/2026hackathon/Core-AI-Team",
  },
  {
    id:"drape", order:4, color:"#ec6cb9",
    team:"干饭搭子", product:"Drape",
    tagline:"AI 穿搭助手 —— 不追潮流 · 不必买新 · 穿好你已有的",
    members:["Jenny","Jay","Even","Peyton"], presenter:"Jenny",
    award:{rank:"ai", icon:"🤖", label:"AI 驾驭奖"},
    repo:"https://github.com/2026hackathon/drape",
  },
  {
    id:"next", order:5, color:"#3fb950",
    team:"问题不大", product:"Next",
    tagline:"你的下一件事 —— 住在灵动岛的 AI 任务管家",
    members:["Manz","Murphy","Henry"], presenter:"Henry",
    repo:"",
  },
  {
    id:"diggy", order:6, color:"#f0883e",
    team:"打出风采", product:"Diggy 挖挖",
    tagline:"可进化的 DevOps AI Agent —— 让查日志/定位问题变成人人可用、结论可验证的服务",
    members:["Miller","Simon","Brooker"], presenter:"Simon",
    award:{rank:"bronze", icon:"🥉", label:"三等奖 · 铜牌"},
    repo:"https://github.com/2026hackathon/diggy",
  },
  {
    id:"dm-seek", order:7, color:"#39c5cf",
    team:"Team Aback", product:"DM-Seek",
    tagline:"软件研发的「理解 × 追溯 × 验证」基础设施",
    members:["Dylan","Jason","Mantee"], presenter:"Dylan",
    repo:"https://github.com/2026hackathon/dm-seek",
  },
  {
    id:"menupilot", order:8, color:"#e3b341",
    team:"爱吃香菜", product:"MenuPilot",
    tagline:"把菜单变成一场可解释、可回退的增长实验 —— Menu Growth Simulator",
    members:["Kent","Lim"], presenter:"Lim",
    award:{rank:"silver", icon:"🥈", label:"二等奖 · 银牌"},
    repo:"https://github.com/2026hackathon/menupilot",
  },
];
