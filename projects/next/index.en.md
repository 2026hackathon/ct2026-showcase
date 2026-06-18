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
      <strong>Your next thing</strong>
      Turn the always-empty notch into a second screen — an always-on AI task butler.
      Capture → track → remind → review, the whole loop in one little strip.
    </div>
    <div class="chips">
      <span class="chip"><b>Team</b> No Big Deal</span>
      <span class="chip"><b>Members</b> Manz / Murphy / Henry</span>
    </div>
    <div class="cta-row">
      <a class="next-btn primary" href="#demo">Watch Demo</a>
      <a class="next-btn secondary" href="#concept">5 Concepts</a>
      <a class="next-btn secondary" href="#agent">Agent Monitor</a>
    </div>
  </div>
</section>

<div class="grid">

<section class="next-card span-12">
  <div class="section-head"><h2>The problem</h2><p>To-dos scattered across N tools — plus you babysit agents</p></div>
  <div class="pain-grid">
    <div class="pain-card"><div class="scene">Scene 01</div><h3>Capture friction is too high</h3><p>You see something in chat, email, or Jira — then switch app, copy/paste, set a time. Most things get forgotten between "meaning to note it" and "actually noting it."</p></div>
    <div class="pain-card"><div class="scene">Scene 02</div><h3>Reminders arrive too late</h3><p>Most tools only fire "when it's due." But meetings need slides and pre-comms — a 5-min ping is useless.</p></div>
    <div class="pain-card"><div class="scene">Scene 03</div><h3>Mornings start in a fog</h3><p>Open Jira, calendar, email, GitHub, chat — half a dozen clicks just to know what to do today. And nothing tells you when your agents finished.</p></div>
  </div>
</section>

<section class="next-card span-12">
  <div class="section-head"><h2>The solution</h2><p>Turn the always-empty notch into your second screen</p></div>
  <p class="lead">
    Not "yet another to-do app" — an <strong>always-on AI assistant</strong>. Collapsed, it only occupies the two wings around the notch;
    <strong>hover to expand, move away to retract</strong>. A glance from the corner of your eye tells you how urgent things are.
    Capture, track, remind, review — <strong>the whole loop happens in this little strip</strong>.
  </p>
</section>

<section class="next-card span-12" id="concept">
  <div class="section-head"><h2>Core idea · Grouped by "your relationship to it"</h2><p>Everything you have to worry about in a day, 5 non-overlapping categories</p></div>
  <div class="concepts">
    <div class="concept"><div class="verb">To finish</div><div class="name">Todo</div><div class="desc">Manual / screenshot / Apple Reminders</div></div>
    <div class="concept"><div class="verb">To push</div><div class="name">WorkItem</div><div class="desc">Jira ticket / GitHub PR<br>read-only, jump external</div></div>
    <div class="concept"><div class="verb">To attend</div><div class="name">Calendar</div><div class="desc">Events / holidays<br>merged with tasks in one timeline</div></div>
    <div class="concept"><div class="verb">To read</div><div class="name">Message</div><div class="desc">Email / Jira / Confluence @-mentions</div></div>
    <div class="concept"><div class="verb">To review</div><div class="name">Agent</div><div class="desc">Claude Code / opencode sessions</div></div>
  </div>
  <div class="concepts-note">
    Most tools group by source (email/Jira/calendar) — the same item shows up in multiple places.
    We grouped by relationship instead: <strong>one tab per concept</strong>, today's slice aggregated in Today.
    These five are <strong>the foundation of the entire data model</strong>.
  </div>
</section>

<section class="next-card span-12" id="demo">
  <div class="section-head"><h2>Demo video</h2><p>Screenshot → to-do, one-screen workflow, agent monitoring, reminder glows — all in one clip</p></div>
  <div class="video-box">
    <video controls preload="metadata" playsinline>
      <source src="demo.mp4" type="video/mp4">
    </video>
  </div>
</section>

<section class="next-card span-12">
  <div class="section-head"><h2>Three core demos</h2><p>Screenshot to to-do · Full workflow on one screen · Agent session monitor</p></div>
  <div class="demo-grid">
    <div class="demo-card">
      <div class="num">1</div>
      <h3>Screenshot → structured to-do</h3>
      <p>Hit <b>F2</b> to capture any region of text. Visual model understands it and produces a structured to-do in 3 seconds: priority, deadline, lead-time reminder, with the original image attached.</p>
      <div class="meta">F2 · vision model · 3 seconds</div>
    </div>
    <div class="demo-card">
      <div class="num">2</div>
      <h3>One screen, full workflow</h3>
      <p><b>Today</b> suggests a work order; <b>Work</b> aggregates Jira/PR; <b>Calendar</b> merges events and tasks; <b>Inbox</b> condenses email into single sentences.</p>
      <div class="meta">Today · Work · Calendar · Inbox</div>
    </div>
    <div class="demo-card">
      <div class="num">3</div>
      <h3>Agent session monitor</h3>
      <p>Bring agent state to the notch: running → awaiting confirmation → done card pops up. Click the done card to <b>jump back to Terminal / iTerm / tmux pane</b>.</p>
      <div class="meta">Claude Code · opencode</div>
    </div>
  </div>
</section>

<section class="next-card span-12">
  <div class="section-head"><h2>Four-tier reminder glow</h2><p>Your peripheral vision tells you how urgent it is — not "fires when it's due"</p></div>
  <div class="glow-grid">
    <div class="glow-card glow-1"><span class="dot"></span><div class="level">① Heads-up</div><h4>Soft amber breath</h4><p>Enter the "lead-time" window<br>no card, no sound</p></div>
    <div class="glow-card glow-2"><span class="dot"></span><div class="level">② Near</div><h4>Amber pulse</h4><p>5–15 min left<br>haptic tap once</p></div>
    <div class="glow-card glow-3"><span class="dot"></span><div class="level">③ Due / overdue</div><h4>Red strong pulse</h4><p>Card + Glass sound<br>repeat every 5 min</p></div>
    <div class="glow-card glow-4"><span class="dot"></span><div class="level">+ AI parsing</div><h4>Rainbow flow</h4><p>SwiftGlow Metal render<br>only true "flow" effect</p></div>
  </div>
  <div class="concepts-note">
    Lead time defaults by <strong>intent</strong>: event 60min / reminder 15min / task by priority.
    <strong>High-priority "prep" reminders don't auto-dismiss</strong> — they stay until you handle them.
  </div>
</section>

<section class="next-card span-12" id="agent">
  <div class="section-head"><h2>Agent monitor · For developers</h2><p>AI agents are everywhere now — you shouldn't have to keep staring at the terminal.</p></div>
  <div class="features">
    <div class="feature"><div class="num-circle">1</div><div><h3>Real-time counts</h3><p>Running <b style="color:var(--accent)">⚙</b> blue + awaiting <b style="color:var(--warn)">🔔</b> amber side-by-side on the left wing. <b>Subtask completions don't interrupt</b> — only full-turn end fires a notice. Driven by real Claude Code / opencode hook events.</p></div></div>
    <div class="feature"><div class="num-circle">2</div><div><h3>Done card → jump back to terminal</h3><p>A full turn ends → landed card pops up. Click it to jump straight back to the right session: <b>Terminal / iTerm / tmux specific pane / Ghostty / Warp</b> — all locatable. Marked seen on click; removed from count and Today.</p></div></div>
    <div class="feature"><div class="num-circle">3</div><div><h3>Install once</h3><p>Menu-bar Debug installs the <b>Claude Code hook</b> (writes ~/.claude/settings.json) and the <b>opencode plugin</b>. Session events stream in as JSONL — DispatchSource watches the file for live updates.</p></div></div>
  </div>
</section>

<section class="next-card span-12">
  <div class="section-head"><h2>AI isn't one feature — it's everywhere</h2><p>Vision parsing / urgency / email digests / morning & evening briefs / multi-source Today suggestion</p></div>
  <div class="features">
    <div class="feature"><div class="num-circle">✨</div><div><h3>Morning & evening briefs</h3><p><b>Morning brief</b> tells you what to do first — priorities, meetings, work items — with a <b>work order that auto-avoids your meeting blocks</b>. <b>Evening brief</b> reviews today, with <b>tomorrow's high-priority items called out in advance</b>.</p></div></div>
    <div class="feature"><div class="num-circle">💡</div><div><h3>Multi-source Today suggestion</h3><p>The blue suggestion at the top — synthesized across <b>to-dos, active work items, today's meetings</b>. Content-signature dedup so it doesn't refresh on every poll; GitHub/Jira state changes trigger a recompute.</p></div></div>
    <div class="feature"><div class="num-circle">📧</div><div><h3>Email value filter</h3><p>Gmail / O365 pulled as "last 3 days + unread + incremental". AI gives each one a single-sentence digest and importance tier. Marketing/notification/auto-alerts filtered out — only <b>things actually requiring a reply</b> reach Inbox.</p></div></div>
  </div>
</section>

<section class="next-card span-12">
  <div class="section-head"><h2>Future · MCP Server</h2><p>Make Next the unified reminder outlet for all your agents</p></div>
  <div class="mcp-flow">
    <div class="mcp-node"><h4>Your agent / script / CI</h4><p>Build broke, agent finished, scheduled job fired</p></div>
    <div class="mcp-arrow">→</div>
    <div class="mcp-node"><h4>MCP Server</h4><p>Unified protocol</p></div>
    <div class="mcp-arrow">→</div>
    <div class="mcp-node highlight"><h4>Next · Notch</h4><p>Pop a reminder / write a to-do<br>your peripheral vision sees it</p></div>
  </div>
</section>

</div>
</div>
</div>
