# Avi Fenesh

[![Sponsor Avi](https://img.shields.io/badge/Sponsor-Avi%20Fenesh-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/avifenesh)
[![Sponsor agent-sh](https://img.shields.io/badge/Sponsor-agent--sh-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/agent-sh)

```sh
$ echo "Hello, world!"
```

I build and maintain open-source systems around **Valkey**, **agentic developer tooling**, and low-level runtime work. The common thread is practical infrastructure: clients, queues, workflow engines, linters, review systems, editor tooling, docs, examples, and the support work that helps other people actually use them.

I run **[agent-sh](https://github.com/agent-sh)**, an open-source org for AI-assisted development workflows: 24 plugins, 49 agents, 44 skills, 24 commands, **agnix**, and Linux desktop/computer-use tooling for agents. I maintain **Valkey GLIDE** and help manage its community, while also building Valkey ecosystem infrastructure such as **[valkey-io/valkey-skills](https://github.com/valkey-io/valkey-skills)**, private Valkey review automation, **[glide-mq](https://github.com/avifenesh/glide-mq)**, **[ocaml-valkey](https://github.com/avifenesh/ocaml-valkey)**, and **[FlowFabric](https://github.com/avifenesh/FlowFabric)**.

I also contribute directly to **Valkey itself**: core server PRs, compatibility work, website work, docs/man-page content, official AI skills, review automation, contributor onboarding, and keeping OSS discussions useful enough that people still want to participate.

By day I work on high-performance in-memory data systems at **AWS ElastiCache**. That gives context for the systems work, but this profile is about my personal and community OSS.

[![X](https://img.shields.io/badge/X-early%20logs-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/avi_fenesh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Avi%20Fenesh-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/avi-fenesh/)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-avifen-F48024?style=for-the-badge&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/12085223/avifen)
[![Reddit](https://img.shields.io/badge/Reddit-u%2Fcode__things-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/user/code_things/)

---

## Work Worth Supporting

- **[agent-sh](https://github.com/agent-sh)** - DX-focused ecosystem for AI-powered research and development, with 36 public repos, 24 plugins, 49 agents, 44 skills, and 24 commands.
- **[agentsys](https://github.com/agent-sh/agentsys)** - agent orchestration runtime and marketplace: 24 plugins, 49 agents, 44 skills, 24 commands, phase-gated workflows, and support for Claude Code, OpenCode, Codex, Cursor, and Kiro.
- **[agnix](https://github.com/agent-sh/agnix)** - Rust linter, LSP, MCP server, GitHub Action, and editor integrations for AI coding assistant configs. It validates `CLAUDE.md`, `AGENTS.md`, `SKILL.md`, hooks, MCP, and plugin metadata with 432 rules.
- **[glide-mq](https://github.com/avifenesh/glide-mq)** - published high-performance Node.js queue on Valkey/Redis Streams with a Rust N-API core, 1 RTT per job, server functions, workflows, schedulers, retries, DLQs, OpenTelemetry, dashboard/plugins, and AI-native primitives like token streaming, budget caps, suspend/resume, and model fallback chains. It also has framework plugins for **[Hono](https://github.com/avifenesh/glidemq-hono)**, **[Fastify](https://github.com/avifenesh/glidemq-fastify)**, **[Hapi](https://github.com/avifenesh/glidemq-hapi)**, and **[NestJS](https://github.com/avifenesh/glidemq-nestjs)**; all except NestJS are listed on their official ecosystem/plugin pages.
- **[ocaml-valkey](https://github.com/avifenesh/ocaml-valkey)** - modern OCaml 5 + Eio Valkey client, published on **[opam](https://opam.ocaml.org/packages/valkey)** (v0.4.0): RESP3-only, cluster routing with quorum topology discovery and AZ-aware replica reads, TLS/mTLS, client-side caching, pub/sub, batching, blocking pools, Valkey 8.1/9 features (SET IFEQ, hash-field TTL), Search/JSON/Bloom module wrappers, tests, fuzzing, and docs.
- **[FlowFabric](https://github.com/avifenesh/FlowFabric)** - Rust durable execution engine for Valkey/Postgres/SQLite with lease-safe workers, waitpoints, HMAC-signed human approval, capability routing, budgets, and streaming output.
- **[valkey-io/valkey-skills](https://github.com/valkey-io/valkey-skills/pulls)** - official Valkey AI skills. I created the first skills and supporting structure for Valkey, GLIDE, migrations, ops, internals, docs, and agent workflows. My personal `valkey-skills` repo is the working/staging area while pieces merge upstream.
- **Private Valkey review automation** - autonomous PR-review tooling for `valkey-io/valkey`, built around Valkey-specific review knowledge and Bedrock AgentCore.
- **[claucode.nvim](https://github.com/avifenesh/claucode.nvim)** - Neovim bridge for Claude Code with multi-session support, file watching, prompt/context helpers, and MCP-powered diff preview.
- **[computer-use-linux](https://github.com/agent-sh/computer-use-linux)** - Linux desktop control over MCP using AT-SPI, GNOME Shell, Wayland portals, and ydotool; extracted from the Linux Computer Use work shipped through Codex Desktop Linux, including performance work and read-aloud support.
- **[agent-workspace-linux](https://github.com/agent-sh/agent-workspace-linux)** - isolated, agent-owned Linux desktop workspaces over MCP: a hidden desktop and browser an agent can use for GUI and web work without touching your real desktop.
- **[tools](https://github.com/avifenesh/tools)** - TypeScript-first agent tool harness with Rust parity for read/write/grep/glob/bash/webfetch/LSP/skill tools, designed around how real LLMs recover from errors.
- **Low-level / systems tooling** - **[layout-audit](https://github.com/avifenesh/layout-audit)** (GitHub Action + CLI that parses DWARF to analyze binary memory layouts, detect padding, diff and enforce size budgets for C/C++/Rust/Go), **[scrump](https://github.com/avifenesh/scrump)** (fast, format-aware secret scrubber for binary capture artifacts like perf.data, nsys-rep, ELF cores, JFR, pcap), and **[eigen](https://github.com/avifenesh/eigen)** (a terminal-first local coding agent in Go: one daemon, many resumable sessions, multi-provider routing, memory, and observability).

---

## Selected Contributions

Beyond the projects I own or maintain, I also contribute patches, review, docs, and ecosystem fixes across projects I use and care about, including **[Valkey](https://github.com/valkey-io/valkey)**, **[Valkey docs](https://github.com/valkey-io/valkey-doc)**, **[Valkey website](https://github.com/valkey-io/valkey-io.github.io)**, **[valkey-io/valkey-skills](https://github.com/valkey-io/valkey-skills/pulls)**, **[codex-desktop-linux](https://github.com/ilysenko/codex-desktop-linux)**, **[node-rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)** (`RateLimiterValkeyGlide` support), **[rustowl](https://github.com/avifenesh/rustowl)**, and **[tuicr](https://github.com/avifenesh/tuicr)**.

---

## Valkey Ecosystem

I do not own `valkey-io`. I maintain and manage community around **Valkey GLIDE**, and I contribute to Valkey core, docs, website, and ecosystem tooling as part of the broader project.

- **[Valkey GLIDE](https://github.com/valkey-io/valkey-glide)** - maintainer and community-management work across user support, issue triage, contributor onboarding, API review, reliability fixes, TLS, timeouts, Java/JNI, Node/N-API, CI, docs, and releases.
- **[Valkey](https://github.com/valkey-io/valkey)** - direct upstream core contributions, compatibility work, CLI behavior, and ecosystem improvements across the server project.
- **[Valkey docs](https://github.com/valkey-io/valkey-doc) and [website](https://github.com/valkey-io/valkey-io.github.io)** - docs/site contributions, including installation/download improvements.
- **[Official Valkey skills](https://github.com/valkey-io/valkey-skills/pulls)** - AI knowledge packs for Valkey and GLIDE. I started this work and maintain the personal staging repo while upstream review/merge catches up.
- **Valkey review automation** - private autonomous reviewer tooling for Valkey PRs, plus skills and benchmark work that teach agents how to review Valkey code with project-specific context.
- **Independent Valkey tooling** - queues, workflow engines, OCaml client work, migration adapters, examples, and docs that help the ecosystem around Valkey grow.

---

## Community & Mentoring

- **Support:** I spend real time on issue triage, reproductions, user debugging, integration guidance, CI failures, docs, migration questions, and helping contributors land better PRs.
- **Stack Overflow:** `1,130+` reputation across `~25k` people reached, strongest tags: `redis`, `github-actions`, `node.js`, `amazon-web-services`, and `valkey`.
- **Reddit:** `u/code_things`, sharing and gathering feedback for GLIDE MQ, OCaml Valkey, agent-sh, and Valkey client work.
- **Mentoring:** I mentor early-career engineers through production habits: feature branches, PR review, tests, CI/CD, system design, distributed systems, Valkey, Kafka, SSE, Postgres, Java, Node.js, and open-source contribution.
- **Tone:** I care about the human side of OSS: clearer issues, kinder reviews, direct technical feedback, and contributor paths that do not make people feel stupid for trying.

---

## Support This Work

If my OSS maintenance, debugging, docs, tooling, mentorship, or community support saved you time, sponsorship helps me keep doing it outside the narrow boundaries of any single job or repo.

I am especially interested in support for:

- **agent-sh** tooling: agentsys, agnix, harness tools, skills, plugins, docs, examples, and release work
- **Valkey ecosystem tooling:** GLIDE MQ, OCaml Valkey, FlowFabric, private review automation, skills, adapters, examples, and migration guides
- **OSS support:** issue triage, user debugging, CI/release health, docs, examples, and contributor onboarding
- **Mentoring:** helping newer engineers learn real production engineering and enter OSS with confidence

[Sponsor my personal OSS work](https://github.com/sponsors/avifenesh) or [support agent-sh](https://github.com/sponsors/agent-sh). This is not a `valkey-io` sponsorship ask.

---

## Talks & Media

- **Inside Valkey GLIDE** - AWS Developers Podcast
  https://developers.podcast.go-aws.com/web/episodes/165/index.html
- **Glide into resiliency** - Valkey GLIDE on Let's Talk About Data
  https://www.youtube.com/live/j4myaAsk8_8
- **How AI workloads changed the queue I was already building** - DEV Community
  https://dev.to/avifenesh/how-ai-workloads-changed-the-queue-i-was-already-building-5989
- **Your AI Agent Configs Are Probably Broken (and You Don't Know It)** - DEV Community
  https://dev.to/avifenesh/your-ai-agent-configs-are-probably-broken-and-you-dont-know-it-16n1

---

## Contact

**aviarchi1994@gmail.com** - Happy to talk systems, Rust/C, datastore internals, Valkey/Redis clients, agentic tooling, mentoring, or DX.

---

### Keywords

Rust | C | Java | Node.js | TypeScript | OCaml | Systems programming | Distributed systems | Valkey | Redis OSS | Client libraries | OSS maintenance | Mentoring | Agentic coding | Developer tools | DX | High availability | Performance engineering | IO/async | Linux | FFI | JNI | N-API
