+++
title = "Two Pi Extensions: pi-ext-pomo and pi-ext-tutor-mode"
date = "2026-02-08"
+++

This post briefly introduces two Pi extensions I built: **pi-ext-pomo** and **pi-ext-tutor-mode**.

## pi-ext-pomo

`pi-ext-pomo` is a Pomodoro and wellness reminder extension for Pi.

### Main features
- Pomodoro timer with focus/break switching
- Eye reminder (default: every 20 minutes)
- Posture reminder (default: every 50 minutes)
- Footer countdown status
- Session state persistence after restart

### Commands
- `/pomo start` (default 25/5)
- `/pomo start 30/5`
- `/pomo pause`
- `/pomo resume`
- `/pomo stop`
- `/pomo status`
- `/eye`
- `/posture`

Repository: `https://github.com/rnoldo/pi-ext-pomo`

---

## pi-ext-tutor-mode

`pi-ext-tutor-mode` is an English-learning workflow extension for Pi.

### Main features
- Real-time English correction
- Native phrasing alternatives
- Vocabulary tracking
- Daily review workflow
- Mode toggle (on/off)

### Commands
- `tutor-mode on`
- `tutor-mode off`
- `tutor-mode status`
- `tutor mode review` (chat trigger phrase)

### Example session
```text
You: tutor-mode on
Pi: ✅ Tutor Mode ON

You: I still wondering if this can works?
Pi:
Your version: "I still wondering if this can works?"
Native: "I'm still wondering if this can work?"
Tips:
- add "am" -> "I'm"
- "can" uses base form -> "work"

You: I'm still wondering if this can work?
Pi: Great.
```

### Vocabulary files example

Saved by date, for example:

```text
docs/vocabulary/2026-02-08.md
docs/vocabulary/2026-02-09.md
```

Sample content of `docs/vocabulary/2026-02-08.md`:

```md
# Vocabulary - 2026-02-08

- I'm still wondering if this can work.
- It depends on the context.
- Let's verify this step by step.
- I may be wrong, but here is my assumption.
```

Repository: `https://github.com/rnoldo/pi-ext-tutor-mode`
