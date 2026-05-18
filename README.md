# Avi Fenesh

```sh
$ echo "Hello, world!"
```

I build and maintain open-source systems around **Valkey**, **agentic developer tooling**, and low-level runtime work. The common thread is practical infrastructure: clients, queues, workflow engines, linters, editor tooling, docs, examples, and the support work that helps other people actually use them.

I run **[agent-sh](https://github.com/agent-sh)**, an open-source org for AI-assisted development workflows, and I maintain independent Valkey-adjacent projects such as **[glide-mq](https://github.com/avifenesh/glide-mq)**, **[ocaml-valkey](https://github.com/avifenesh/ocaml-valkey)**, **[FlowFabric](https://github.com/avifenesh/FlowFabric)**, and **[valkey-skills](https://github.com/avifenesh/valkey-skills)**.

I also contribute to and support the broader **Valkey / Valkey GLIDE** ecosystem: issue triage, debugging user reports, CI and flaky-test cleanup, docs, examples, contributor onboarding, API review, and keeping OSS discussions useful enough that people still want to participate.

By day I work on high-performance in-memory data systems at **AWS ElastiCache**. That gives context for the systems work, but this profile is about my personal and community OSS.

[![X](https://img.shields.io/badge/X-early%20logs-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/avi_fenesh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Avi%20Fenesh-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/avi-fenesh/)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-avifen-F48024?style=for-the-badge&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/12085223/avifen)
[![Reddit](https://img.shields.io/badge/Reddit-u%2Fcode__things-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/user/code_things/)

---

## Work Worth Supporting

- **[agent-sh](https://github.com/agent-sh)** - DX-focused ecosystem for AI-powered research and development, with 34 public repos.
- **[agentsys](https://github.com/agent-sh/agentsys)** - agent orchestration runtime and marketplace: 24 plugins, 50 agents, 45 skills, phase-gated workflows, and support for Claude Code, OpenCode, Codex, Cursor, and Kiro.
- **[agnix](https://github.com/agent-sh/agnix)** - Rust linter, LSP, MCP server, GitHub Action, and editor integrations for AI coding assistant configs. It validates `CLAUDE.md`, `AGENTS.md`, `SKILL.md`, hooks, MCP, and plugin metadata with 423 rules.
- **[glide-mq](https://github.com/avifenesh/glide-mq)** - high-performance Node.js queue on Valkey/Redis Streams with a Rust N-API core, 1 RTT per job, server functions, workflows, schedulers, retries, DLQs, OpenTelemetry, dashboard/plugins, and AI-native primitives like token streaming, budget caps, suspend/resume, and model fallback chains.
- **[ocaml-valkey](https://github.com/avifenesh/ocaml-valkey)** - modern OCaml 5 + Eio Valkey client: RESP3-only, cluster routing, TLS/mTLS, IAM auth, client-side caching, pub/sub, batching, blocking pools, typed module wrappers, tests, fuzzing, and docs.
- **[FlowFabric](https://github.com/avifenesh/FlowFabric)** - Rust durable execution engine for Valkey/Postgres/SQLite with lease-safe workers, waitpoints, HMAC-signed human approval, capability routing, budgets, and streaming output.
- **[valkey-skills](https://github.com/avifenesh/valkey-skills)** - 24 AI skills and 190 markdown reference files for Valkey, GLIDE, migrations, ops, server internals, Search, Bloom, and queue workflows; source-verified against real Valkey/GLIDE code.
- **[claucode.nvim](https://github.com/avifenesh/claucode.nvim)** - Neovim bridge for Claude Code with multi-session support, file watching, prompt/context helpers, and MCP-powered diff preview.
- **[tools](https://github.com/avifenesh/tools)** - TypeScript-first agent tool harness with Rust parity for read/write/grep/glob/bash/webfetch/LSP/skill tools, designed around how real LLMs recover from errors.

---

## Valkey Ecosystem

I do not own `valkey-io`; I contribute to and support it as part of the community.

- **[Valkey GLIDE](https://github.com/valkey-io/valkey-glide)** - maintenance and implementation work across reliability, TLS, timeouts, Java/JNI, Node/N-API, CI, docs, and user support.
- **[Valkey](https://github.com/valkey-io/valkey)** - upstream contributions and compatibility work, including naming and ecosystem behavior.
- **Independent Valkey tooling** - queues, workflow engines, OCaml client work, migration adapters, skills, examples, and docs that help the ecosystem around Valkey grow.

---

## Community & Mentoring

- **Support:** I spend real time on issue triage, reproductions, user debugging, integration guidance, CI failures, docs, and migration questions.
- **Stack Overflow:** `1,100+` reputation, `~25k` people reached, strongest tag: `redis`.
- **Reddit:** `u/code_things`, sharing and gathering feedback for GLIDE MQ, OCaml Valkey, agent-sh, and Valkey client work.
- **Mentoring:** I mentor early-career engineers through production habits: feature branches, PR review, tests, CI/CD, system design, distributed systems, Valkey, Kafka, SSE, Postgres, Java, Node.js, and open-source contribution.
- **Tone:** I care about the human side of OSS: clearer issues, kinder reviews, direct technical feedback, and contributor paths that do not make people feel stupid for trying.

---

## Support This Work

If my OSS maintenance, debugging, docs, tooling, mentorship, or community support saved you time, sponsorship helps me keep doing it outside the narrow boundaries of any single job or repo.

I am especially interested in support for:

- **agent-sh** tooling: agentsys, agnix, harness tools, skills, plugins, docs, examples, and release work
- **Valkey-adjacent personal projects:** GLIDE MQ, OCaml Valkey, FlowFabric, valkey-skills, adapters, examples, and migration guides
- **OSS support:** issue triage, user debugging, CI/release health, docs, examples, and contributor onboarding
- **Mentoring:** helping newer engineers learn real production engineering and enter OSS with confidence

GitHub Sponsors setup is next for my personal work and for **agent-sh**. This is not a `valkey-io` sponsorship ask.

---

## Talks & Media

- **Inside Valkey GLIDE** - AWS Developers Podcast
  https://developers.podcast.go-aws.com/web/episodes/165/index.html
- **Glide into resiliency** - Valkey GLIDE on Let's Talk About Data
  https://www.youtube.com/live/j4myaAsk8_8

---

## Contact

**aviarchi1994@gmail.com** - Happy to talk systems, Rust/C, datastore internals, Valkey/Redis clients, agentic tooling, mentoring, or DX.

---

### Keywords

Rust | C | Java | Node.js | TypeScript | OCaml | Systems programming | Distributed systems | Valkey | Redis OSS | Client libraries | OSS maintenance | Mentoring | Agentic coding | Developer tools | DX | High availability | Performance engineering | IO/async | Linux | FFI | JNI | N-API
