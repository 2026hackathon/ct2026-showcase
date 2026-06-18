<style>
body{background:#0b1020;color:#e8edf7}.wrap{max-width:none;padding:0}.back,.hd{display:none}.md{font-size:16px;line-height:1.7;color:#e8edf7}.md h1,.md h2,.md h3,.md p{margin:0}
.next-page{--surface:#121831;--surface-2:#1a2240;--line:#27314f;--text:#e8edf7;--muted:#9aa6c2;--brand:#3fb950;--brand-dark:#2da347;--brand-soft:rgba(63,185,80,.16);--accent:#5b8cff;--accent-soft:rgba(91,140,255,.15);--warn:#ff9e4a;--alert:#ff6b61;--gold:#ffd23a;--shadow:0 18px 50px rgba(0,0,0,.4);font-family:Inter,"PingFang SC","Microsoft YaHei",sans-serif;background:radial-gradient(circle at 12% -5%,rgba(91,140,255,.18),transparent 32%),radial-gradient(circle at 90% 10%,rgba(63,185,80,.13),transparent 28%),linear-gradient(180deg,#0b1020 0%,#0d142a 100%);min-height:100vh;padding:22px 20px 70px}
.next-shell{max-width:1180px;margin:0 auto}
.next-hero,.next-card{background:var(--surface);border:1px solid var(--line);box-shadow:var(--shadow)}
.next-hero{position:relative;overflow:hidden;border-radius:28px;padding:30px 34px;min-height:300px}
.next-hero:after{content:"";position:absolute;right:-160px;bottom:-200px;width:460px;height:460px;border-radius:50%;background:radial-gradient(circle,rgba(91,140,255,.18),rgba(91,140,255,0) 68%);pointer-events:none}
.next-top{position:relative;z-index:1;max-width:780px}
.next-kicker{font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:var(--brand);font-weight:800;margin-bottom:6px}
.next-title{font-size:38px;line-height:1.06;color:#fff;font-weight:850;letter-spacing:-.01em}
.next-pitch{max-width:720px;color:var(--muted);font-size:15px;line-height:1.75;margin-top:20px}
.next-pitch strong{display:block;color:var(--text);font-size:22px;margin-bottom:4px;font-weight:800}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px;position:relative;z-index:1}
.chip{display:inline-flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:999px;padding:8px 12px;background:rgba(18,24,49,.6);color:var(--muted);font-size:13px;line-height:1}
.chip b{color:var(--text)}
.cta-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px;position:relative;z-index:1}
.next-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:14px;padding:13px 18px;text-decoration:none;font-weight:800;border:1px solid transparent;font-size:14px;transition:transform .18s ease,box-shadow .18s ease,background .18s ease,border-color .18s ease}
.next-btn:hover{transform:translateY(-1px);text-decoration:none}
.primary{background:var(--brand)!important;color:#0b1020!important;box-shadow:0 12px 24px rgba(63,185,80,.25)}
.primary:hover{background:var(--brand-dark)!important;color:#0b1020!important}
.secondary{background:rgba(255,255,255,.04);color:var(--text);border-color:var(--line)}
.secondary:hover{border-color:var(--brand);color:#fff}
.hero-island{position:absolute;right:34px;top:34px;z-index:2;background:#0a0e1c;border-radius:24px;padding:8px 16px;display:inline-flex;align-items:center;gap:14px;box-shadow:0 18px 40px rgba(0,0,0,.45),0 0 0 1px rgba(91,140,255,.08);font-family:'SF Pro Display','PingFang SC',Inter,sans-serif}
.hero-island .ico{font-size:14px;color:#e8edf7}
.hero-island .num{font-size:15px;font-weight:700;color:#fff;font-variant-numeric:tabular-nums}
.hero-island .cam{width:28px;height:6px;border-radius:4px;background:#000;margin:0 4px}
.hero-island .bell{color:var(--warn);font-size:14px}
.hero-island .bell-num{color:var(--warn);font-size:14px;font-weight:700}
.hero-island .ok{color:var(--brand);font-size:14px}
.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:18px;margin-top:18px}
.next-card{border-radius:22px;padding:24px;min-width:0}
.span-12{grid-column:span 12}.span-6{grid-column:span 6}
.section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;margin-bottom:18px}
.section-head h2{font-size:24px;line-height:1.15;color:#fff;font-weight:850}
.section-head p{font-size:13px;color:var(--muted)}
.lead{font-size:17px;line-height:1.85;color:var(--text)}
.lead strong{color:#fff}
.pain-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.pain-card{border:1px solid var(--line);border-radius:18px;background:linear-gradient(180deg,var(--surface-2),var(--surface));padding:18px;min-height:140px}
.pain-card .scene{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:850;margin-bottom:8px}
.pain-card h3{font-size:16px;line-height:1.3;color:#fff;font-weight:850;margin-bottom:8px}
.pain-card p{font-size:13.5px;color:var(--muted);line-height:1.7}
.concepts{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin-top:6px}
.concept{border:1px solid var(--line);border-radius:16px;background:linear-gradient(180deg,var(--surface-2),var(--surface));padding:18px 14px;text-align:center}
.concept .name{font-size:14px;color:#fff;font-weight:850;letter-spacing:.02em;margin-bottom:6px}
.concept .verb{font-size:12px;color:var(--brand);font-weight:850;letter-spacing:.05em;text-transform:uppercase;margin-bottom:8px}
.concept .desc{font-size:12.5px;color:var(--muted);line-height:1.55}
.concepts-note{margin-top:14px;color:var(--muted);font-size:13.5px;line-height:1.7}
.concepts-note strong{color:var(--text)}
.demo-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:6px}
.demo-card{border:1px solid var(--line);border-radius:18px;background:linear-gradient(180deg,var(--surface-2),var(--surface));padding:18px;min-height:200px}
.demo-card .num{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:10px;background:var(--accent-soft);color:var(--accent);font-weight:850;margin-bottom:12px}
.demo-card h3{font-size:16px;color:#fff;font-weight:850;margin-bottom:8px}
.demo-card p{font-size:13.5px;color:var(--muted);line-height:1.7;margin-bottom:10px}
.demo-card .meta{font-size:12px;color:var(--brand);font-weight:850;letter-spacing:.05em}
.glow-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:6px}
.glow-card{border:1px solid var(--line);border-radius:16px;background:var(--surface-2);padding:16px;text-align:center}
.glow-card .dot{display:inline-block;width:16px;height:16px;border-radius:50%;margin-bottom:10px}
.glow-1 .dot{background:var(--warn);box-shadow:0 0 12px var(--warn);opacity:.6}
.glow-2 .dot{background:var(--warn);box-shadow:0 0 18px var(--warn)}
.glow-3 .dot{background:var(--alert);box-shadow:0 0 22px var(--alert)}
.glow-4 .dot{background:var(--accent);box-shadow:0 0 18px var(--accent)}
.glow-card .level{font-size:12px;color:var(--muted);font-weight:850;letter-spacing:.05em;text-transform:uppercase}
.glow-card h4{font-size:14px;color:#fff;font-weight:850;margin:6px 0 4px}
.glow-card p{font-size:12.5px;color:var(--muted);line-height:1.55}
.features{display:grid;gap:12px;margin-top:14px}
.feature{display:grid;grid-template-columns:36px 1fr;gap:14px;border-top:1px solid var(--line);padding-top:14px}
.feature:first-child{border-top:0;padding-top:0}
.num-circle{width:36px;height:36px;border-radius:12px;background:var(--brand-soft);color:var(--brand);display:grid;place-items:center;font-weight:850}
.feature h3{font-size:16px;color:#fff;font-weight:800;margin-bottom:4px}
.feature p{font-size:14px;color:var(--muted);line-height:1.75}
.video-box{border:1px solid var(--line);border-radius:18px;overflow:hidden;background:#000;margin-top:8px}
.video-box video{display:block;width:100%}
.metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.metric{border:1px solid var(--line);border-radius:16px;background:linear-gradient(180deg,var(--surface-2),var(--surface));padding:18px 14px;text-align:center}
.metric .value{font-size:28px;line-height:1;color:#fff;font-weight:850;margin-bottom:8px;font-variant-numeric:tabular-nums}
.metric .label{font-size:12.5px;color:var(--muted);line-height:1.55}
.vibe-card{background:linear-gradient(135deg,#1a1f3d 0%,#1f2a5b 50%,#1e3870 100%);color:#fff;border:0;position:relative;overflow:hidden}
.vibe-card:after{content:"";position:absolute;right:-100px;bottom:-140px;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(91,140,255,.2),rgba(91,140,255,0) 70%)}
.vibe-card h2{font-size:24px;font-weight:850;margin-bottom:10px;color:#fff;position:relative;z-index:1}
.vibe-card p{max-width:820px;color:rgba(232,237,247,.86);font-size:14.5px;line-height:1.85;position:relative;z-index:1;margin-bottom:14px}
.vibe-flow{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font-size:13px;color:rgba(232,237,247,.92);position:relative;z-index:1;margin-bottom:10px}
.vibe-flow b{background:rgba(255,255,255,.08);padding:6px 11px;border-radius:8px;font-weight:700;color:#fff;border:1px solid rgba(255,255,255,.08)}
.vibe-flow span.arrow{color:rgba(232,237,247,.5);padding:0 2px}
.mcp-flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:14px;align-items:center;margin-top:8px}
.mcp-node{border:1px solid var(--line);border-radius:16px;background:var(--surface-2);padding:18px;text-align:center}
.mcp-node h4{font-size:15px;color:#fff;font-weight:850;margin-bottom:6px}
.mcp-node p{font-size:12.5px;color:var(--muted);line-height:1.55}
.mcp-arrow{font-size:22px;color:var(--brand);font-weight:850;text-align:center}
.mcp-node.highlight{border-color:var(--brand);background:linear-gradient(180deg,rgba(63,185,80,.08),var(--surface-2))}
.resources{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.resource{border:1px solid var(--line);border-radius:18px;background:var(--surface-2);padding:18px;display:grid;gap:10px}
.resource .name{font-size:15px;font-weight:850;color:#fff}
.resource .desc{font-size:13px;color:var(--muted);line-height:1.6}
.resource .next-btn{width:100%}
@media(max-width:980px){.pain-grid,.demo-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.concepts{grid-template-columns:repeat(2,minmax(0,1fr))}.glow-grid,.metrics{grid-template-columns:repeat(2,minmax(0,1fr))}.resources{grid-template-columns:1fr}.hero-island{position:relative;right:auto;top:auto;margin-bottom:16px}.mcp-flow{grid-template-columns:1fr;text-align:center}.mcp-arrow{transform:rotate(90deg)}}
@media(max-width:720px){.next-page{padding:14px 12px 50px}.next-hero,.next-card{border-radius:20px;padding:18px}.next-title{font-size:28px}.pain-grid,.demo-grid,.concepts,.glow-grid,.metrics{grid-template-columns:1fr}.cta-row .next-btn{width:100%}.section-head{display:block}.section-head p{margin-top:6px}}
</style>

<div class="next-page">
<div class="next-shell">

<section class="next-hero">
  <div class="hero-island">
    <span class="ico">☰</span>
    <span class="num">3</span>
    <span class="ico" style="color:var(--accent)">⚙</span>
    <span class="num" style="color:var(--accent)">1</span>
    <span class="cam"></span>
    <span class="bell">🔔</span>
    <span class="bell-num">2</span>
    <span class="ok">✓</span>
  </div>
  <div class="next-top">
    <div class="next-kicker">CT 2026 Hackathon</div>
    <h1 class="next-title">Next</h1>
    <div class="next-pitch">
      <strong>你的下一件事</strong>
      把一直空着的刘海变成你的第二块屏 —— 一个永远在线的 AI 任务管家。
      记录 → 追踪 → 提醒 → 复盘，全在一小块里闭环。
    </div>
    <div class="chips">
      <span class="chip"><b>队名</b> 问题不大</span>
      <span class="chip"><b>成员</b> Manz / Murphy / Henry</span>
    </div>
    <div class="cta-row">
      <a class="next-btn primary" href="#demo">看 Demo 视频</a>
      <a class="next-btn secondary" href="#concept">五大概念</a>
      <a class="next-btn secondary" href="#agent">Agent 监控</a>
    </div>
  </div>
</section>

<div class="grid">

<section class="next-card span-12">
  <div class="section-head"><h2>痛点</h2><p>待办散落在 N 个工具里，还要盯着 Agent</p></div>
  <div class="pain-grid">
    <div class="pain-card"><div class="scene">场景 01</div><h3>录入门槛太高</h3><p>聊天、邮件、Jira 里看到一件事，要切 app、复制粘贴、设时间……大部分事在「想记」和「真记」之间就被忘了。</p></div>
    <div class="pain-card"><div class="scene">场景 02</div><h3>提醒来得太晚</h3><p>大多数工具是「到点才弹」，看见提醒已经来不及准备。会议要 PPT、要会前沟通，5 分钟通知没用。</p></div>
    <div class="pain-card"><div class="scene">场景 03</div><h3>早上开机一脸懵</h3><p>要开 Jira、日历、邮件、GitHub、聊天，一通点击才知道今天该干嘛。Agent 跑完没人告诉你。</p></div>
  </div>
</section>

<section class="next-card span-12">
  <div class="section-head"><h2>解法</h2><p>把一直空着的刘海变成第二块屏</p></div>
  <p class="lead">
    不是「又一个待办清单」—— 是一个 <strong>永远在线的 AI 助手</strong>。收缩态只占刘海两边的翅膀，
    不挡你任何内容；<strong>鼠标悬停展开，移开收回</strong>；余光扫一眼就知道急不急。
    记录、追踪、提醒、复盘 <strong>整个闭环就在这一小块里完成</strong>。
  </p>
</section>

<section class="next-card span-12" id="concept">
  <div class="section-head"><h2>核心理念 · 按「你和它的关系」分</h2><p>一天里所有要操心的事，归为 5 类，零重叠</p></div>
  <div class="concepts">
    <div class="concept"><div class="verb">要做完</div><div class="name">Todo</div><div class="desc">手动输入 / 截图识别 / Apple 提醒事项</div></div>
    <div class="concept"><div class="verb">要推进</div><div class="name">WorkItem</div><div class="desc">Jira ticket / GitHub PR<br>只读，跳转外部</div></div>
    <div class="concept"><div class="verb">要参加</div><div class="name">Calendar</div><div class="desc">日历事件 / 节假日<br>合并任务一条时间线</div></div>
    <div class="concept"><div class="verb">要读</div><div class="name">Message</div><div class="desc">邮件 / Jira / Confluence @我</div></div>
    <div class="concept"><div class="verb">要 review</div><div class="name">Agent</div><div class="desc">Claude Code / opencode 会话</div></div>
  </div>
  <div class="concepts-note">
    多数工具按「来源」分（邮件/Jira/日历…），同一件事在好几个地方重复。我们换维度按「关系」分，
    每个概念<strong>一个 tab</strong>，今日聚合在 Today。这五类是<strong>整个数据模型的地基</strong>。
  </div>
</section>

<section class="next-card span-12" id="demo">
  <div class="section-head"><h2>Demo 视频</h2><p>F2 截图、一屏管全部、Agent 监控、提醒辉光，一段看完</p></div>
  <div class="video-box">
    <video controls preload="metadata" playsinline>
      <source src="demo.mp4" type="video/mp4">
    </video>
  </div>
</section>

<section class="next-card span-12">
  <div class="section-head"><h2>三个核心 Demo</h2><p>截图秒变待办 · 一屏管全部 · Agent 会话监控</p></div>
  <div class="demo-grid">
    <div class="demo-card">
      <div class="num">1</div>
      <h3>截图秒变结构化待办</h3>
      <p>按 <b>F2</b> 框选屏幕任意文字，AI 视觉理解，3 秒生成待办：自动判优先级、算截止时间、给提前提醒、挂原图。</p>
      <div class="meta">F2 · 视觉模型 · 3 秒</div>
    </div>
    <div class="demo-card">
      <div class="num">2</div>
      <h3>一屏管全部工作流</h3>
      <p><b>Today</b> 给建议工作顺序；<b>Work</b> 汇 Jira/PR；<b>Calendar</b> 事件+任务合一条时间线；<b>Inbox</b> 邮件收成一句话。</p>
      <div class="meta">Today · Work · Calendar · Inbox</div>
    </div>
    <div class="demo-card">
      <div class="num">3</div>
      <h3>Agent 会话监控</h3>
      <p>把终端里 AI agent 的状态搬上刘海：运行中 → 待确认 → 完成弹卡，点完成卡<b>直接跳回 Terminal / iTerm / tmux pane</b>。</p>
      <div class="meta">Claude Code · opencode 双支持</div>
    </div>
  </div>
</section>

<section class="next-card span-12">
  <div class="section-head"><h2>提醒分四级辉光</h2><p>余光就知道急不急，不是「到点才弹」</p></div>
  <div class="glow-grid">
    <div class="glow-card glow-1"><span class="dot"></span><div class="level">① 提前</div><h4>橙色慢呼吸</h4><p>进入「提前量」窗口<br>无卡、无声</p></div>
    <div class="glow-card glow-2"><span class="dot"></span><div class="level">② 临近</div><h4>橙色脉冲</h4><p>剩 5~15 min<br>触控板震动一次</p></div>
    <div class="glow-card glow-3"><span class="dot"></span><div class="level">③ 到点</div><h4>红色强脉冲</h4><p>弹提醒卡 + Glass 声<br>过期 5min 重复</p></div>
    <div class="glow-card glow-4"><span class="dot"></span><div class="level">+ AI 解析</div><h4>彩虹流光</h4><p>SwiftGlow Metal 渲染<br>识图时唯一真"流动"</p></div>
  </div>
  <div class="concepts-note">
    提前量默认按<strong>录入意图</strong>给：日程 60min / 提醒 15min / 任务按优先级。
    <strong>高优先级「提前准备」不会自动消失</strong>——留状态直到你处理。
  </div>
</section>

<section class="next-card span-12" id="agent">
  <div class="section-head"><h2>Agent 会话监控 · 写代码人的刚需</h2><p>AI agent 越来越多，但你得一直盯着终端。Next 把它搬上刘海。</p></div>
  <div class="features">
    <div class="feature"><div class="num-circle">1</div><div><h3>实时计数</h3><p>运行中 <b style="color:var(--accent)">⚙</b> 蓝、待确认 <b style="color:var(--warn)">🔔</b> 橙，左翼并排显示。<b>子任务完成不打扰</b>，只有整轮结束才提示——基于 Claude Code / opencode 的真实 hook 事件。</p></div></div>
    <div class="feature"><div class="num-circle">2</div><div><h3>完成弹卡 → 跳回终端</h3><p>一整轮跑完弹 landed 卡，点卡片直接跳回对应终端 session：<b>Terminal / iTerm / tmux 具体 pane / Ghostty / Warp</b> 都能定位。点完即标记已看，从计数和 Today 移除。</p></div></div>
    <div class="feature"><div class="num-circle">3</div><div><h3>装一次就行</h3><p>菜单栏 Debug 一键安装 <b>Claude Code hook</b>（写 ~/.claude/settings.json）和 <b>opencode plugin</b>。会话事件经 JSONL 流式喂进来，DispatchSource 监听文件变化实时刷新。</p></div></div>
  </div>
</section>

<section class="next-card span-12">
  <div class="section-head"><h2>AI 不是某个功能，AI 在每个环节</h2><p>截图视觉解析 / 紧急度判断 / 邮件一句话摘要 / 晨晚报 / Today 多源建议</p></div>
  <div class="features">
    <div class="feature"><div class="num-circle">✨</div><div><h3>晨晚报 · 清零有仪式感</h3><p><b>早报</b>告诉你今天先做什么——今日优先 / 会议 / 工单，<b>建议的工作顺序自动避开会议时段</b>。<b>晚报</b>带你复盘：完成与结转一目了然，<b>明天的高优先级提前点出来</b>。</p></div></div>
    <div class="feature"><div class="num-circle">💡</div><div><h3>Today 多源建议</h3><p>面板顶部那条蓝色建议——综合<b>待办、活跃工单、当天会议</b>三个数据源给的结论。内容签名去重，没变就不刷新；GitHub/Jira 状态变化触发重算。</p></div></div>
    <div class="feature"><div class="num-circle">📧</div><div><h3>邮件价值过滤</h3><p>Gmail / O365 拉取「最近 3 天 + 未读 + 增量」，AI 给每封一句话摘要 + 重要级别。营销/通知/自动告警过滤掉，<b>真正要回的事</b>才进 Inbox。</p></div></div>
  </div>
</section>

<section class="next-card span-12">
  <div class="section-head"><h2>未来扩展 · MCP Server</h2><p>把 Next 变成你所有 agent 的统一提醒出口</p></div>
  <div class="mcp-flow">
    <div class="mcp-node"><h4>你的 Agent / 脚本 / CI</h4><p>构建挂了、agent 跑完了、定时任务到了</p></div>
    <div class="mcp-arrow">→</div>
    <div class="mcp-node"><h4>MCP Server</h4><p>统一接入协议</p></div>
    <div class="mcp-arrow">→</div>
    <div class="mcp-node highlight"><h4>Next · 刘海</h4><p>弹提醒卡 / 写待办<br>余光就看到</p></div>
  </div>
</section>

</div>
</div>
</div>
