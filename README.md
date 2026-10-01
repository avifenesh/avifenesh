# Hey, I'm Avi 👋

I like machines close to the metal and results you can measure. I run **[tiyuvta](https://tiyuvta.ai)**, a research lab that helps companies choose, adapt and deploy open models on their hardware or cloud account. I also build in-memory data systems at **AWS ElastiCache**, and maintain open-source tools people actually run.

Research notes and working papers live at **[avifenesh.ai](https://avifenesh.ai)**. Issues, questions, and counterexamples are always welcome.

## tiyuvta

**[tiyuvta](https://tiyuvta.ai)** is my research lab. We help companies run open models on their hardware or cloud account. The work includes model and hardware assessment, deployment and serving-engine optimization, fine-tuning and evaluation, and cloud setup. We compare options on your workload and budget, then agree the deliverables, handover and support.

Our research in model execution, quantization, pruning, speculative decoding and Hebrew models informs that work. **[See the services and discuss your project](https://tiyuvta.ai/services/)**.

The lab's models are on **[Hugging Face](https://huggingface.co/tiyuvta)**: NVFP4 builds of GLM, DeepSeek, MiMo, Qwen and DictaLM, MTP draft heads in GGUF, and Phonon-2 in ONNX.

## ML research

- **[memra](https://github.com/avifenesh/memra)**: tiyuvta's from-scratch Rust + CUDA research engine for RTX PRO 6000 Blackwell and RTX 5090, an instrument behind the studies below. Safetensors is the tuned path, GGUF stays supported, and a mechanism that wins on one card and loses on the other becomes a per-device default rather than a compromise. On crates.io with prebuilt binaries.
- **[hqmtp](https://github.com/avifenesh/hqmtp)**: MTP draft-head lab, concluded. Function cuts (pruning, low-rank, distillation) pay a 10–19-point off-distribution tax that fidelity cuts don't; the zero-training trimmed-vocabulary recipe won at 1.8–2.7× end to end. The negative results stay in the ledger.
- **[recipe-lab](https://github.com/avifenesh/recipe-lab)**: layer-loop weight sharing + ε=λ/(N√L) residual scaling, combined for the first time and tested from zero in 11 pre-registered rounds. In the data-constrained regime the looped model beat FLOPs-matched vanilla in all three mixer families (attention, pure SSM, and hybrid; seven paired runs, zero sign flips), with 26–34% fewer parameters. Rule isolated: loop the state-mixer, never the retriever.
- **[mem-retrofit](https://github.com/avifenesh/mem-retrofit)**: grafted a product-key memory layer onto a stock dense 4B and ran it against LoRA over sequential updates. The retrofit is free at lr/10; the published forgetting advantage failed 12/12 confidence intervals.
- More studies with receipts: **[fixed-compute-frontier](https://github.com/avifenesh/fixed-compute-frontier)** (a preregistered kill-gate ledger, ~84 theory lanes) · **[gemma-expert-atlas](https://github.com/avifenesh/gemma-expert-atlas)** (26B MoE expert surgery, 3,840 experts traced) · **[block-routed-swiglu](https://github.com/avifenesh/block-routed-swiglu)** (near-free kernel, refuted capability) · **[moe-lab](https://github.com/avifenesh/moe-lab)** · **[assumption-excavator](https://github.com/avifenesh/assumption-excavator)**.
- Working papers: **[small-vocabulary MTP heads](https://avifenesh.ai/research/small-vocabulary-mtp/)** · **[prune, heal, quantize](https://avifenesh.ai/research/prune-heal-quantize/)**. Methods, failed arms, and evidence in the open.
- In review upstream:
  - **[SGLang](https://github.com/sgl-project/sglang)**: SM120 (RTX PRO 6000 / 5090) fixes for [sparse MLA](https://github.com/sgl-project/sglang/pull/39288), [DeepSeek V4 decode](https://github.com/sgl-project/sglang/pull/39492) and [long FP8 prefill](https://github.com/sgl-project/sglang/pull/40742), plus [DeepGEMM BF16 output divergence](https://github.com/sgl-project/DeepGEMM/pull/90). HiCache: a [hybrid host tier for Mamba state](https://github.com/sgl-project/sglang/pull/39436), [SWA match gating](https://github.com/sgl-project/sglang/pull/39541), [NextN layer handling](https://github.com/sgl-project/sglang/pull/39433). Tool calls: [strict DSML parsing for DeepSeek V3.2/V4](https://github.com/sgl-project/sglang/pull/39435), [Qwen3Coder object parameters](https://github.com/sgl-project/sglang/pull/39809). Also [MiMo ModelOpt mappings](https://github.com/sgl-project/sglang/pull/40675) and [credential redaction in logs](https://github.com/sgl-project/sglang/pull/39449).
  - **[vLLM](https://github.com/vllm-project)**: [hybrid-KV loads through LMCache](https://github.com/vllm-project/vllm/pull/42620), [activation caching in llm-compressor](https://github.com/vllm-project/llm-compressor/pull/3144).
  - **[LMCache](https://github.com/LMCache/LMCache)**: [binary buffers](https://github.com/LMCache/LMCache/pull/3285) and [safe read failures](https://github.com/LMCache/LMCache/pull/3292) in the local disk backend.
  - **[llama.cpp](https://github.com/ggml-org/llama.cpp/pull/25153)**: imatrix-aware NVFP4 quantization.

## Maintaining

- **[Valkey](https://github.com/valkey-io/valkey)** and its ecosystem. I maintain **[Valkey GLIDE](https://github.com/valkey-io/valkey-glide)**, the official multi-language client (Rust core, Java/JNI, Node/N-API), and **[valkey-skills](https://github.com/valkey-io/valkey-skills)**, the official AI skills for the ecosystem, which I started. I contribute to Valkey itself, and a good part of my open-source time goes to the people around it: the clients team, talks, and helping the people who run it.
- **[agent-sh](https://github.com/agent-sh)**, my org: an ecosystem of tools for agent-assisted development, working across Claude Code, Codex, OpenCode, Cursor, and Kiro.
- **[glide-mq](https://github.com/avifenesh/glide-mq)**: Node.js queue on Valkey Streams with a Rust N-API core, plus adapters for [Hono](https://github.com/avifenesh/glidemq-hono), [Fastify](https://github.com/avifenesh/glidemq-fastify), [Hapi](https://github.com/avifenesh/glidemq-hapi), [NestJS](https://github.com/avifenesh/glidemq-nestjs) and a [dashboard](https://github.com/avifenesh/glidemq-dashboard).
- Also around: **[RustOwl](https://github.com/cordx56/rustowl)** (runtime, memory, and CI work).

## Systems

- **[Valkey](https://github.com/valkey-io/valkey)**: core contributor; sync-from-replica replication in review. On the side: CRIU copy-on-write live-migration research, under 50 ms of freeze while migrating a 200 GB loaded instance.
- **[SGLang router on Valkey](https://github.com/sgl-project/sglang/pull/39785)**: a shared, restart-safe placement index for sgl-kv-indexer, then an [event log with worker replay and indexer failover](https://github.com/sgl-project/sglang/pull/39822). Measured under load in **[sglang-valkey-demo](https://github.com/avifenesh/sglang-valkey-demo)**.
- **[ferrings](https://github.com/avifenesh/ferrings)**: io_uring TCP transport for Node.js with a Rust N-API core. 2.5x Node `http` throughput and 37-57% fewer syscalls per connection in the published bench. On [npm](https://www.npmjs.com/package/ferrings).
- **[FlowFabric](https://github.com/avifenesh/FlowFabric)**: durable-execution engine in Rust for Valkey, Postgres, and SQLite: lease-safe workers, waitpoints, budgets.
- **[layout-audit](https://github.com/avifenesh/layout-audit)**: DWARF memory-layout analysis: padding, layout diffs, size budgets for C/C++/Rust/Go.
- **[scrump](https://github.com/avifenesh/scrump)**: format-aware secret scrubber for binary capture artifacts: perf.data, core dumps, nsys traces, JFR.
- **[ocaml-valkey](https://github.com/avifenesh/ocaml-valkey)**: OCaml 5 + Eio Valkey client, published on [opam](https://opam.ocaml.org/packages/valkey).

## Agents

- **[agnix](https://github.com/agent-sh/agnix)**: linter and language server for AI agent configs: 444 rules with autofixes, a GitHub Action, an MCP server, and editor plugins.
- **[computer-use-linux](https://github.com/agent-sh/computer-use-linux)** / **[agent-workspace-linux](https://github.com/agent-sh/agent-workspace-linux)**: Linux desktop control over MCP, and isolated agent-owned desktops so an agent never has to touch your real machine.
- **[parlar](https://github.com/agent-sh/parlar)**: voice mode for Claude Code and Codex. You talk to a running session, idle or mid-work, and it answers out loud. Local CPU only: VAD, Phonon-2 recognition, Kokoro speech. On [crates.io](https://crates.io/crates/parlar).
- **[agentsys](https://github.com/agent-sh/agentsys)**: the agent-sh plugin set (workflow, review, ship, deslop, perf) for Claude Code, OpenCode, Codex, Cursor, and Kiro.
- **[revuto](https://github.com/avifenesh/revuto)**: local PR reviewer that works with any model and learns each repo from its PR history and maintainer feedback. It reviews my own repos.
- **[harness tools](https://github.com/avifenesh/tools)**: read, write, grep, glob, bash, webfetch, lsp and skill tools built for LLM callers, as `@agent-sh/harness-*` on npm with Rust ports at parity.
- **[linubot](https://github.com/agent-sh/linubot)**: Linux desktop app for a team of AI helpers: per-bot providers, memory, and isolated computer workspaces.
- **[Codex Desktop for Linux](https://github.com/ilysenko/codex-desktop-linux)**: contributor (120+ commits) to the unofficial Linux build of the ChatGPT/Codex desktop app. Linux Computer Use, Read Aloud and conversation mode, the in-app updater, launcher hardening.

## Elsewhere

- Talks: **[Inside Valkey GLIDE](https://developers.podcast.go-aws.com/web/episodes/165/index.html)** on the AWS Developers Podcast · **[Glide into resiliency](https://www.youtube.com/live/j4myaAsk8_8)** on Let's Talk About Data
- Writing: **[avifenesh.ai/writing](https://avifenesh.ai/writing/)** · answering on **[Stack Overflow](https://stackoverflow.com/users/12085223/avifen)**
- Hugging Face: **[Avifenesh](https://huggingface.co/Avifenesh)** · **[tiyuvta](https://huggingface.co/tiyuvta)**
- 📫 **aviarchi1994@gmail.com** · [LinkedIn](https://www.linkedin.com/in/avi-fenesh/) · [X](https://x.com/avi_fenesh)

If something here saved you time, [sponsoring](https://github.com/sponsors/avifenesh) helps me keep doing it.
