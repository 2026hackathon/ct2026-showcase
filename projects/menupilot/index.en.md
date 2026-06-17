# MenuPilot · AI Menu Growth Simulator

> **Internal Company Hackathon 2026 · 2nd Place**  
> Team "Cilantro Lovers" | Lead Lim Chen (SOLO LEAD) + Claude agent team

---
![Hero · intro state](01-hero.png)
## The problem

Restaurant owners revise their menus — moving a dish, tweaking a price — entirely by gut. Last month they moved the signature dish from the prime spot to a corner; this month revenue dropped, and they'll never know whether that was the cause. Chain brands have data teams doing menu engineering, but a street-corner shop has no experimental traffic and can't run a real A/B test. Get it wrong, and you only find out a month later — with no way back.

Yet the menu is the **single biggest profit lever a restaurant can change at zero cost** — done right, menu engineering can lift profit by **10–15%** (menu engineer Gregg Rapp). But customers spend an average of just **109 seconds** looking at a menu (Gallup), so a signature dish buried on page 3 is barely ever seen.

## How it works

**Build a rehearsal simulator.** First calibrate the simulator against this shop's historical sales until it "can reproduce the past," and only then let it rehearse the future. The core loop:

```
upload menu → persona generation (clustering real reviews) → calibration backtest (sales as the judge; unlocks only at ≥85% fit)
            → parallel simulation (3 customer groups browse the menu at once, exposing blind spots)
            → strategy advice (each with a traceable evidence chain) → apply & compare (sandbox re-simulation: don't swap dishes or change prices, only reposition)
```

**Two coexisting paths:**
- **Calibration sandbox** (main line): shops with historical sales → full closed loop → can rehearse "what if I changed this"
- **AI assessment** (second path): shops with no sales → one menu photo → instant 6-dimension structural checkup (price anchoring / menu breadth / high-fit dish exposure / customer coverage / information completeness / category concentration) → zero-data onboarding

## Core technical depth

MenuPilot's moat isn't a single algorithm — it's **assembling mature methods into a complete validation loop of "first prove reproduction → then predict → then backtest."** It deliberately chooses deterministic methods (reproducible, auditable, explainable) and avoids black boxes.

### 1. Calibration gate (the hardest innovation)

A **deterministic grid search** over a three-weight simplex (step 0.01, ≈5,151 combinations), using JSD to measure how well the simulated distribution fits real sales. **Fit < 85% means no unlock and no rehearsal** — AI output is judged by real sales, not the model talking to itself. This project measured **99.0%** fit, far above the gate.

### 2. Cross-validation (the sharpest evidence)

The customer-group split from review clustering — **40/32/28** — almost exactly matches the mixed weights **[0.40, 0.30, 0.30]** found purely by fitting sales. **Reviews don't look at sales, sales reconstruction doesn't look at reviews, yet two independent evidence chains point to the same three-way composition.** This proves that "3 AI customers represent real customer groups" isn't just talk — it's cross-validated by the data.

### 3. Content × position decoupling

Order probability = **base_p (LLM content preference) × visibility (deterministic positional physics)**, normalized. Visibility is a deterministic lookup table of zone coefficient × page coefficient (e.g. prime zone top-right 1.0 → bottom corner bottom-left 0.6, ~1.6× swing; page p1=1.0 → p3=0.35, ~3× swing). **Decoupling content from position** is the prerequisite for answering "what if I move it" — the LLM only judges content preference (locked by schema), and all positional physics goes to deterministic code.

### 4. 6-dimension deterministic diagnosis (0 LLM)

The value of assessment mode isn't the positional lever on a single photo (only ~0.5%) — it's the **multi-dimensional structural checkup**: price architecture & anchoring, menu breadth & decision load (vs attention K=12), high-fit dish exposure, customer coverage, information completeness (CJK-aware, so a Latin menu isn't falsely flagged for missing English names), and dish homogeneity & category concentration (HHI). All deterministic algorithms, no LLM involved.

## Product design

- **Dual visual domains**: the product UI (sans-serif, bright brand-purple background) and the menu canvas (serif + warm paper background + gold dashed lines) are deliberately separated — "the analysis tool" vs "the thing being analyzed" are distinguishable at a glance
- **Progressive disclosure**: a 7-step wizard where the next step unlocks only after the current one is done (gated), with at most one forward entry point per screen
- **Ghost empty states**: each step's initial empty state isn't a blank card — a skeleton underneath previews the content about to appear
- **Explainability labels**: cost annotations show their source (owner_input), and a three-color legend distinguishes what AI does vs what deterministic code does
- **Offline, zero CDN**: fonts bundled locally as woff2, all deterministic computation on the front end, with offline fixtures as a fallback
- **Animations ≤600ms**: all CSS @keyframes serving the narrative rather than showing off, all disabled under prefers-reduced-motion

## Business adoption

- **Menu Report v2** is live with real users; MenuPilot fills the "continuous rehearsal" gap — Report drives acquisition and onboarding, MenuPilot rehearses continuously: complementary, not a replacement
- Aligned with connexup's existing **Menu AI Agent PRD** (v0.1, which needs validation with seed users in the PMF stage) — MenuPilot is exactly the advance validation for this use case
- Swap in a real POS export (a "dish × sales" table) and **the pipeline doesn't change a single line**

## Key numbers

| Metric | Value |
|------|------|
| Calibration fit | **99.0%** (global optimum from grid search; gate 85%) |
| Simulated average-check lift | **+6.3%** ($21.13 → $22.46, repositioning only — no dish swaps, no price changes) |
| Cross-validation | 40/32/28 ≈ [0.40, 0.30, 0.30] (two independent paths converge) |
| 6-dimension diagnosis | 0 LLM, deterministic algorithms |
| Persona | 3 groups (indigo price-sensitive / amber high-value / green health-conscious family), clustered from real reviews |
| Frontend prototype | 11 screens end-to-end, covering both calibration + assessment paths |

## How it was built

**1 lead + a Claude agent team (3 agents in parallel).** Three agents (team-lead / frontend / ppt) each with independent context, delivering in parallel against frozen contracts. The core of vibecoding isn't getting AI to write code — it's managing context, splitting the work via contracts, and letting each role see only what it should. One person, amplified into a team.

Frontend: Next.js + React + TypeScript · Backend: Python FastAPI + NumPy · LLM: Bailian qwen-vl-ocr + Azure GPT · RAG: ChromaDB · 100% offline-demoable.

## Related resources

- 📂 [Source repository](https://github.com/2026hackathon/menupilot)
- 🎨 [Design system skill](https://github.com/unirain/menupilot-design-skill) — extracted as a reusable Claude Code skill (visual tokens + component patterns + full slide pipeline)
- 📊 [Pitch deck](https://github.com/2026hackathon/menupilot/blob/main/ppt/menupilot-deck.pptx) — daylight-precision-instrument grammar, 11 pages + algorithm appendix

---

## Demo video

<video src="demo.mp4" controls preload="metadata" width="100%"></video>

## Interactive prototype · 11 screens

![Hero · intro state](01-hero.png)
![Step 1 · menu import · Vision OCR → structured data with coordinates](02-step1-import.png)
![Step 2 · persona generation · clustering 3 customer groups from real reviews](03-step2-persona.png)
![Step 3a · AI-estimated order distribution](04-step3a-predict.png)
![Step 3b · calibration backtest · 99.0% fit, sandbox unlocked](05-step3b-calibrated.png)
![Step 4 · parallel simulation · 3 trajectories streamed, blind spots revealed](06-step4-simulate.png)
![Step 5 · strategy advice · each with a traceable Evidence Trail](07-step5-strategy.png)
![Step 6 · apply advice · sandbox re-simulation, average check +6.3%](08-step6-apply.png)
![Step 7 · before/after compare · zero-cost change, simulation-verified effect](09-step7-compare.png)
![Assessment mode · upload any real menu](10-eval-upload.png)
![Assessment mode · 6-dimension checkup report](11-eval-report.png)
