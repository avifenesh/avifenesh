# Hey, I'm Avi 👋

I like machines close to the metal and results you can measure. By day I build in-memory data systems at **AWS ElastiCache**; the rest of the time I train and compress small fast models, write CUDA, and maintain open-source tools people actually run.

Research notes and working papers live at **[avifenesh.ai](https://avifenesh.ai)**. Issues, questions, and counterexamples are always welcome.

## ML research

- **[memra](https://github.com/avifenesh/memra)** — from-scratch Rust + CUDA inference engine for one Blackwell GPU (formerly bw24). Bit-exact by construction; runs four model families above llama.cpp on the same rig, plain and speculative decode both. v0.69 shipped to crates.io with prebuilt binaries and FP8 checkpoint serving at 2.6–2.8× plain decode.
- **[hqmtp](https://github.com/avifenesh/hqmtp)** — MTP draft-head lab, concluded. Function cuts (pruning, low-rank, distillation) pay a 10–19-point off-distribution tax that fidelity cuts don't; the zero-training trimmed-vocabulary recipe won at 1.8–2.7× end to end. The negative results stay in the ledger.
- **[recipe-lab](https://github.com/avifenesh/recipe-lab)** — layer-loop weight sharing + ε=λ/(N√L) residual scaling, combined for the first time and tested from zero in 11 pre-registered rounds. In the data-constrained regime the looped model beat FLOPs-matched vanilla on 3/3 seeds with 34% fewer parameters.
- **[mem-retrofit](https://github.com/avifenesh/mem-retrofit)** — grafted a product-key memory layer onto a stock dense 4B and ran it against LoRA over sequential updates. The retrofit is free at lr/10; the published forgetting advantage failed 12/12 confidence intervals.
- More studies with receipts: **[fixed-compute-frontier](https://github.com/avifenesh/fixed-compute-frontier)** (a preregistered kill-gate ledger, ~84 theory lanes) · **[gemma-expert-atlas](https://github.com/avifenesh/gemma-expert-atlas)** (26B MoE expert surgery, 3,840 experts traced) · **[block-routed-swiglu](https://github.com/avifenesh/block-routed-swiglu)** (near-free kernel, refuted capability) · **[moe-lab](https://github.com/avifenesh/moe-lab)** · **[assumption-excavator](https://github.com/avifenesh/assumption-excavator)**.
- Working papers: **[small-vocabulary MTP heads](https://avifenesh.ai/research/small-vocabulary-mtp/)** · **[prune, heal, quantize](https://avifenesh.ai/research/prune-heal-quantize/)** — methods, failed arms, and evidence in the open.
- In review upstream: NVFP4 quantization at [llama.cpp](https://github.com/ggml-org/llama.cpp/pull/25153), hybrid-KV loads at [vLLM](https://github.com/vllm-project/vllm/pull/42620) and [LMCache](https://github.com/LMCache/LMCache/pull/3285).

## Maintaining

- **[Valkey GLIDE](https://github.com/valkey-io/valkey-glide)** — the official multi-language Valkey/Redis client. Rust core, Java/JNI, Node/N-API; 158 PRs authored, 480 reviewed, plus releases and the support that starts after the code works.
- **[valkey-skills](https://github.com/valkey-io/valkey-skills)** — official AI skills for the Valkey ecosystem. Started it, maintain it.
- **[agent-sh](https://github.com/agent-sh)** — my org: an ecosystem of tools for agent-assisted development, working across Claude Code, Codex, OpenCode, Cursor, and Kiro.
- **[glide-mq](https://github.com/avifenesh/glide-mq)** — Node.js queue on Valkey Streams with a Rust N-API core, plus adapters for [Hono](https://github.com/avifenesh/glidemq-hono), [Fastify](https://github.com/avifenesh/glidemq-fastify), [Hapi](https://github.com/avifenesh/glidemq-hapi), [NestJS](https://github.com/avifenesh/glidemq-nestjs) and a [dashboard](https://github.com/avifenesh/glidemq-dashboard).
- Also around: **[RustOwl](https://github.com/cordx56/rustowl)** (runtime, memory, and CI work) and **[ChatGPT Desktop for Linux](https://github.com/ilysenko/codex-desktop-linux)** (Wayland input, accessibility, packaging).

## Systems

- **[Valkey](https://github.com/valkey-io/valkey)** — core contributor; sync-from-replica replication in review. On the side: CRIU copy-on-write live-migration research — under 50 ms of freeze while migrating a 200 GB loaded instance.
- **[FlowFabric](https://github.com/avifenesh/FlowFabric)** — durable-execution engine in Rust for Valkey, Postgres, and SQLite: lease-safe workers, waitpoints, budgets.
- **[layout-audit](https://github.com/avifenesh/layout-audit)** — DWARF memory-layout analysis: padding, layout diffs, size budgets for C/C++/Rust/Go.
- **[scrump](https://github.com/avifenesh/scrump)** — format-aware secret scrubber for binary capture artifacts: perf.data, core dumps, nsys traces, JFR.
- **[ocaml-valkey](https://github.com/avifenesh/ocaml-valkey)** — OCaml 5 + Eio Valkey client, published on [opam](https://opam.ocaml.org/packages/valkey).

## Agents

- **[agnix](https://github.com/agent-sh/agnix)** — linter and language server for AI agent configs: 444 rules with autofixes, a GitHub Action, an MCP server, and editor plugins.
- **[computer-use-linux](https://github.com/agent-sh/computer-use-linux)** / **[agent-workspace-linux](https://github.com/agent-sh/agent-workspace-linux)** — Linux desktop control over MCP, and isolated agent-owned desktops so an agent never has to touch your real machine.
- **[eigen](https://github.com/avifenesh/eigen)** — local agent daemon in Go: resumable sessions, multi-provider routing, memory, observability.

## Elsewhere

- Talks: **[Inside Valkey GLIDE](https://developers.podcast.go-aws.com/web/episodes/165/index.html)** on the AWS Developers Podcast · **[Glide into resiliency](https://www.youtube.com/live/j4myaAsk8_8)** on Let's Talk About Data
- Writing: **[avifenesh.ai/writing](https://avifenesh.ai/writing/)** · answering on **[Stack Overflow](https://stackoverflow.com/users/12085223/avifen)**
- 📫 **aviarchi1994@gmail.com** · [LinkedIn](https://www.linkedin.com/in/avi-fenesh/) · [X](https://x.com/avi_fenesh)

If something here saved you time, [sponsoring](https://github.com/sponsors/avifenesh) helps me keep doing it.
