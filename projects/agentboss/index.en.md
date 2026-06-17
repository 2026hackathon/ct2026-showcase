## Overview

`agentboss` is a **local-first** command-line tool (CLI: `aboss`) that ETLs your OpenCode / Claude Code session data into a local SQLite database and serves a web dashboard, helping you review how your AI agent performs: where it does well, where it stumbles, where the time goes, and how you should improve your prompts and workflows.

All data stays on your machine (`~/.agent-boss/boss.db`) — nothing is uploaded.

## The problem

Heavy AI-tool users struggle to look back: time, tokens and money drain away like water with no way to pin down the effective output; the hidden cost of repeated back-and-forth and corrections is never quantified; and when you want to capture how your AI-collaboration skills grew over the year, you find there's no coordinate for it in traditional review frameworks.

## How it works

A personal growth engine that runs locally and focuses on retrospection and improving human-AI collaboration efficiency. It builds an automated optimization loop: **data monitoring → efficiency diagnosis → self-evolution → capability model & AI-environment radar → continuous growth**. From "using AI by gut feel" to "mastering AI with data."

## Highlights

- **Collaboration efficiency, visualized**: blockers / time / tokens / cost are fully transparent, surfacing wasted output (scrapped requirements, requirement drift) so you can see where efficiency goes.
- **Capability mirror**: AI analyzes your interactions to generate a deep capability radar and growth curve, making the skills AI *can't* replace quantifiable and traceable.
- **AI diagnosis**: assesses your knowledge base, tool usage and output quality, pinpointing weak spots and giving actionable optimization paths.
- **Self-evolution engine**: detects bottlenecks (e.g. missing project context dragging out requirement clarification), auto-generates suggestions, and applies them as system instructions in one click.

## What sets it apart

- Not a chat box — a collaboration coach
- Not just statistics — it drives growth
- Local-first, your data stays in your control

## Install

```bash
npm install -g agentboss
```

Requires Node.js >= 18.

## Usage

```bash
aboss              # start the service and open the browser automatically (default http://localhost:3141)
aboss -p 4000      # specify a port
aboss --no-open    # start without opening the browser
```

On first launch it automatically scans your local OpenCode / Claude Code session databases, runs an initial sync, then runs analysis tasks in the background.

## Dependencies

- At least one of [OpenCode](https://opencode.ai) or [Claude Code](https://docs.anthropic.com/claude/docs/claude-code) installed, with some session data generated
- The analysis feature calls your local `opencode` or `claude` command as the LLM judge (no extra API key needed)

## Demo / Screenshots

![Home](imgs/homepage.png)
![Efficiency metrics](imgs/metric.png)
![Optimization advice](imgs/advice.png)
