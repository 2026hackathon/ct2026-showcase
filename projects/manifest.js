// ============================================================
//  队伍清单（卡片元信息）—— 改动较少，一般只在排序/名字/奖项变动时编辑
//  每队的「正文内容、图片、Demo」请改各自目录下的 index.md
//    projects/<id>/index.md   （中文）
//    projects/<id>/index.en.md（英文，可选；缺省时回退到 index.md）
//
//  Team list (card metadata). Bilingual: fields ending in `_en` hold the
//  English copy. Pages fall back to the Chinese field when `_en` is missing.
// ============================================================
window.TEAMS = [
  {
    id:"agentboss", order:1, color:"#a371f7",
    team:"乘风破限", team_en:"Breaking Limits",
    product:"Agent Boss", product_en:"Agent Boss",
    tagline:"做 AI 的 Boss，不做 AI 的保姆 —— 量化 · 成长 · 进化",
    tagline_en:"Be the boss of your AI, not its babysitter — quantify · grow · evolve",
    members:["Felix","Cato","Knight","Bonnie"], presenter:"Felix",
    repo:"https://github.com/2026hackathon/AgentBoss",
  },
  {
    id:"local-agent", order:2, color:"#58a6ff",
    team:"都选 C", team_en:"All C",
    product:"All-in Local Agent", product_en:"All-in Local Agent",
    tagline:"用自己的 Agent，Build Anything —— Local-first 的 Agent 运行与接入平台",
    tagline_en:"Build anything with your own agents — a local-first runtime and gateway for agents",
    members:["Brooks","May","Penn","Lorna"], presenter:"Brooks",
    repo:"https://github.com/2026hackathon/all-in-local-agent",
  },
  {
    id:"core-ai", order:3, color:"#f85149",
    team:"Core-AI Team", team_en:"Core-AI Team",
    product:"Core-AI Team", product_en:"Core-AI Team",
    tagline:"从 Copilot 到 Company —— 纯 Agent 驱动的 AI 虚拟项目公司",
    tagline_en:"From Copilot to Company — a fully agent-driven virtual project company",
    members:["Xander","Cyril","Stephen","Richard"], presenter:"Xander",
    award:{rank:"gold", icon:"🥇", label:"一等奖 · 金牌", label_en:"1st Place · Gold"},
    repo:"https://github.com/2026hackathon/Core-AI-Team",
  },
  {
    id:"drape", order:4, color:"#ec6cb9",
    team:"干饭搭子", team_en:"Meal Buddies",
    product:"Drape", product_en:"Drape",
    tagline:"AI 穿搭助手 —— 不追潮流 · 不必买新 · 穿好你已有的",
    tagline_en:"AI styling assistant — skip the trends, skip the shopping, wear what you already own",
    members:["Jenny","Jay","Even","Peyton"], presenter:"Jenny",
    award:{rank:"ai", icon:"🤖", label:"AI 驾驭奖", label_en:"AI Mastery Award"},
    repo:"https://github.com/2026hackathon/drape",
  },
  {
    id:"next", order:5, color:"#3fb950",
    team:"问题不大", team_en:"No Big Deal",
    product:"Next", product_en:"Next",
    tagline:"你的下一件事 —— 住在灵动岛的 AI 任务管家",
    tagline_en:"Your next thing — an AI task butler living in the Dynamic Island",
    members:["Manz","Murphy","Henry"], presenter:"Henry",
    repo:"",
  },
  {
    id:"diggy", order:6, color:"#f0883e",
    team:"打出风采", team_en:"Bring the Flair",
    product:"Diggy 挖挖", product_en:"Diggy",
    tagline:"可进化的 DevOps AI Agent —— 让查日志/定位问题变成人人可用、结论可验证的服务",
    tagline_en:"An evolving DevOps AI agent — turning log digging and root-cause analysis into a service anyone can use, with verifiable conclusions",
    members:["Miller","Simon","Brooker"], presenter:"Simon",
    award:{rank:"bronze", icon:"🥉", label:"三等奖 · 铜牌", label_en:"3rd Place · Bronze"},
    repo:"https://github.com/2026hackathon/diggy",
  },
  {
    id:"dm-seek", order:7, color:"#39c5cf",
    team:"Team Aback", team_en:"Team Aback",
    product:"DM-Seek", product_en:"DM-Seek",
    tagline:"软件研发的「理解 × 追溯 × 验证」基础设施",
    tagline_en:"Understanding × Tracing × Verification infrastructure for software development",
    members:["Dylan","Jason","Mantee"], presenter:"Mantee",
    repo:"https://github.com/2026hackathon/dm-seek",
  },
  {
    id:"menupilot", order:8, color:"#e3b341",
    team:"爱吃香菜", team_en:"Cilantro Lovers",
    product:"MenuPilot", product_en:"MenuPilot",
    tagline:"把菜单变成一场可解释、可回退的增长实验 —— Menu Growth Simulator",
    tagline_en:"Turn your menu into an explainable, reversible growth experiment — a Menu Growth Simulator",
    members:["Kent","Lim"], presenter:"Lim",
    award:{rank:"silver", icon:"🥈", label:"二等奖 · 银牌", label_en:"2nd Place · Silver"},
    repo:"https://github.com/2026hackathon/menupilot",
  },
];
