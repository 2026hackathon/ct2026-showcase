# First, a few words

> Hi, we're **Team Aback** from this year's CT Hackathon. Thanks to teammates **Mantee** and **Jason** for their hard work, and congrats to us on finishing the race.
>
> **Special thanks**
> - **Jay** — we used the [Knowlery plugin](https://jayjiangct.github.io/knowlery/zh/) that Jay built to power the demo's knowledge base
> - **Dobby** — our honorary captain, truly a good boy
>
> **Important**: before using the dm-seek demo, be sure to switch your Claude Code model config to **DeepSeek** and make sure you've run `/logout`. The Agent Team is **really expensive**.
> If you don't have a DeepSeek API key yet, contact **Jakob**.
>
> This demo hasn't been deeply optimized and still has plenty of issues — feedback is very welcome to help us improve.
>
> — *Dylan*

![Dobby](imgs/dobby.jpg)

---

## The problem

The software-development version of "wait, who?":

1. **Knowledge amnesia** — code tells you *what* was done but not *why*, and historical decisions vanish when colleagues leave;
2. **Unknown impact** — a small change can ripple across multiple services, and assessing it relies heavily on personal experience;
3. **Fragmented sources** — code, Git, Jira, Confluence, PRs and docs are scattered across different systems, so investigating an issue feels like piecing together fragments.

## How it works

Starting from a single natural-language question, **7 agents collaborate** to: locate the code, trace the history, reconstruct the requirement, and verify the evidence. With code as the single source of truth, a **Code + Git + Jira three-way closed loop** forms a high-confidence conclusion, producing answers with provenance and confidence. It fills in the "system understanding layer" that existing tools lack.

## Highlights

- **7-agent pipeline**: Dongmei-MA coordinates and dispatches → KB Keeper / Code Analyst / Repo Tracer / Jira Tracer gather evidence in parallel → Synthesizer integrates → Evidence Verifier validates.
- **Evidence First**: every conclusion carries provenance and confidence; when evidence is insufficient it automatically reworks, downgrading delivery after at most 2 rounds.
- **Three application scenarios**: requirement assessment (which modules a change affects), bug localization (why a feature didn't show up), and tracing requirements while auto-running tests to produce a report.
- **Vs. competitors**: compared with Copilot/Cursor, Sourcegraph, Glean/Rovo and Devin, DM-Seek focuses on the Why / Impact / Evidence closed loop.

## Demo analysis reports

- [Sample HTML output report](reports/HDR-BA-allocationSetting-排查报告.html)
- [Full run walkthrough](reports/dm-seek-全流程总结.html)
- [More report samples](https://github.com/2026hackathon/dm-seek/tree/main/reports)
