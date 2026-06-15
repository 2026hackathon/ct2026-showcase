// 爱吃香菜 · MenuPilot —— 团队可直接编辑此文件维护自己的内容
window.PROJECTS = window.PROJECTS || [];
window.PROJECTS.push({
  id:"menupilot", team:"爱吃香菜", product:"MenuPilot",
  color:"#e3b341",
  order:8, members:["Kent","Lim"], presenter:"Lim",
  award:{rank:"silver", icon:"🥈", label:"二等奖 · 银牌"},
  tagline:"把菜单变成一场可解释、可回退的增长实验 —— Menu Growth Simulator",
  problem:"餐厅调整菜单（定价、结构、菜品描述）对营收的影响往往靠拍脑袋决定，缺少一个能事先预测、能解释为什么、又能随时回退的实验工具。",
  solution:"一个菜单增长模拟器。完整主流程：导入菜单 → 设定顾客 persona → 预测并校准 → 模拟改动 → 生成增长策略 → 应用并对比 → 产出评估报告。同时提供「上传任意真实菜单」的 AI 评估第二路径。前端 Demo 本身即原型，11 屏端到端走通。",
  points:[
    "<b>可解释</b>：每一次预测与策略都给出依据，而非黑盒给数字。",
    "<b>可回退</b>：把菜单改动当作一次次实验，应用后可对比、可撤销。",
    "<b>校准主流程</b>：以「金龙阁」真实菜单走通预测→校准→模拟→策略→对比的闭环。",
    "<b>双路径</b>：既有引导式校准流程，也支持上传任意真实菜单做即时 AI 评估报告。",
  ],
  repo:"https://github.com/2026hackathon/menupilot",
  assets:"交互原型册 (PDF/HTML, 11 屏) · 演示 PPT · Demo 视频",
});
