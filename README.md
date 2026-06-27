# Avi Fenesh

[![Sponsor Avi](https://img.shields.io/badge/Sponsor-Avi%20Fenesh-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/avifenesh)
[![Sponsor agent-sh](https://img.shields.io/badge/Sponsor-agent--sh-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/agent-sh)

I build low-level systems, local inference/ML tooling, and the infrastructure that lets AI agents do real work. By day I work on high-performance in-memory data systems at **AWS ElastiCache**; the OSS below is my own.

[![X](https://img.shields.io/badge/X-avi__fenesh-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/avi_fenesh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Avi%20Fenesh-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/avi-fenesh/)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-avifen-F48024?style=for-the-badge&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/12085223/avifen)

---

## Agent infrastructure

- **[agent-workspace-linux](https://github.com/agent-sh/agent-workspace-linux)** - isolated, agent-owned Linux desktops over MCP: a hidden desktop and browser an agent can drive for GUI and web work without ever touching your real machine.
- **[computer-use-linux](https://github.com/agent-sh/computer-use-linux)** - Linux desktop control over MCP via AT-SPI, GNOME Shell, Wayland portals, and ydotool. Shipped through Codex Desktop Linux, including the performance and read-aloud work.
- **[agnix](https://github.com/agent-sh/agnix)** - the missing linter + LSP for AI coding-assistant configs. Rust core with a GitHub Action, MCP server, and editor plugins; 432 rules over `CLAUDE.md`, `AGENTS.md`, `SKILL.md`, hooks, MCP, and plugin metadata, with autofixes.
- **[agent-sh](https://github.com/agent-sh)** / **[agentsys](https://github.com/agent-sh/agentsys)** - the org I run: a DX-focused ecosystem for AI-assisted development. 24 plugins, 49 agents, 44 skills, 24 commands, phase-gated workflows; works with Claude Code, OpenCode, Codex, Cursor, and Kiro.
- **[eigen](https://github.com/avifenesh/eigen)** - local agent harness in Go with both a GUI and a CLI: one daemon, many resumable sessions, multi-provider routing (Bedrock/Claude/OpenAI-compatible/local), memory, and observability.

## Systems & performance

- **[Valkey GLIDE](https://github.com/valkey-io/valkey-glide)** - maintainer of the official multi-language Valkey/Redis client (Rust core, Java/JNI, Node/N-API): reliability fixes, TLS, timeout/retry behavior, API review, CI, releases, and community.
- **[Valkey](https://github.com/valkey-io/valkey)** - contributor to the in-memory datastore core; started the official **[valkey-skills](https://github.com/valkey-io/valkey-skills)**.
- **[rustowl](https://github.com/cordx56/rustowl)** - performance and reliability work on the ownership/lifetime visualizer (5k★ Rust): runtime/stack-size refactor, jemalloc integration, memory fixes, benchmarking, and CI/security-testing workflows.
- **[FlowFabric](https://github.com/avifenesh/FlowFabric)** - Rust durable-execution engine for Valkey/Postgres/SQLite: lease-safe workers, waitpoints, HMAC-signed human approval, capability routing, budgets, and streaming output.
- **Low-level tooling** - **[layout-audit](https://github.com/avifenesh/layout-audit)** (DWARF binary memory-layout analysis: padding, layout diffs, size budgets for C/C++/Rust/Go) and **[scrump](https://github.com/avifenesh/scrump)** (format-aware secret scrubber for binary capture artifacts).

## Inference & ML

Local-LLM serving and inference performance: speculative decoding / MTP, MoE expert routing and surgery, KV-cache quantization, and long-context serving on consumer GPUs.

## Valkey ecosystem

Beyond GLIDE and core, I build infrastructure around Valkey: **[glide-mq](https://github.com/avifenesh/glide-mq)** - a high-performance Node.js queue on Valkey/Redis Streams (Rust N-API core, AI-native primitives) with a full plugin family: framework adapters for **[Hono](https://github.com/avifenesh/glidemq-hono)**, **[Fastify](https://github.com/avifenesh/glidemq-fastify)**, **[Hapi](https://github.com/avifenesh/glidemq-hapi)**, and **[NestJS](https://github.com/avifenesh/glidemq-nestjs)**, plus a **[dashboard](https://github.com/avifenesh/glidemq-dashboard)** and **[examples](https://github.com/avifenesh/glidemq-examples)**. Also **[ocaml-valkey](https://github.com/avifenesh/ocaml-valkey)** (OCaml 5 + Eio client on [opam](https://opam.ocaml.org/packages/valkey), RESP3-only, cluster routing with AZ-aware reads, TLS/mTLS, Search/JSON/Bloom wrappers).

---

## Community

I spend real time on the support side of OSS: issue triage, reproductions, user debugging, CI/release health, and helping contributors land better PRs. On Stack Overflow: `1,130+` reputation, strongest tags `redis`, `github-actions`, `node.js`, `amazon-web-services`, `valkey`.

## Talks & writing

- **Inside Valkey GLIDE** — [AWS Developers Podcast](https://developers.podcast.go-aws.com/web/episodes/165/index.html)
- **Glide into resiliency** — [Let's Talk About Data](https://www.youtube.com/live/j4myaAsk8_8)
- [How AI workloads changed the queue I was already building](https://dev.to/avifenesh/how-ai-workloads-changed-the-queue-i-was-already-building-5989) · [Your AI Agent Configs Are Probably Broken](https://dev.to/avifenesh/your-ai-agent-configs-are-probably-broken-and-you-dont-know-it-16n1)

## Contact

**aviarchi1994@gmail.com** — systems, datastore internals, inference/ML, Valkey/Redis clients, agentic tooling.

If this work saved you time, [sponsorship](https://github.com/sponsors/avifenesh) helps me keep doing it.
