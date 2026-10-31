# Hey, I'm Avi 👋

I do ML research and maintain open source. The research is about making open models cheaper to train and run: model execution, quantization, pruning, speculative decoding and KV cache placement, with the failed arms published next to the wins. Papers and notes are at **[avifenesh.ai/research](https://avifenesh.ai/research/)**, articles at **[avifenesh.ai/writing](https://avifenesh.ai/writing/)**.

On the open-source side I build **[agentsys](https://github.com/agent-sh/agentsys)** (1k+ stars), the agent-sh plugin system for AI coding agents; **[computer-use-linux](https://github.com/agent-sh/computer-use-linux)**, native Linux desktop control for agents; **[agnix](https://github.com/agent-sh/agnix)**, a linter and language server for agent configs with 30k+ npm downloads a week; and **[glide-mq](https://github.com/avifenesh/glide-mq)**, a Valkey message queue for Node.js with 130k+ downloads a week. I maintain **[Valkey GLIDE](https://github.com/valkey-io/valkey-glide)** and its clients, **[valkey-skills](https://github.com/valkey-io/valkey-skills)** and **[valkey-review-bot](https://github.com/valkey-io/valkey-review-bot)**. I also build in-memory data systems at **AWS ElastiCache**, and run **[tiyuvta](https://tiyuvta.ai)**, a research lab that helps companies run open models on their own hardware or cloud account.

Issues, questions, and counterexamples are always welcome.

<p align="center">
  <a href="https://github.com/sponsors/avifenesh"><img src="https://img.shields.io/badge/Sponsor-%E2%9D%A4-db61a2?style=for-the-badge&logo=githubsponsors&logoColor=white" alt="Sponsor"></a>
</p>
<p align="center"><b>Built and maintained with a lot of agent tokens and hours. If it saves you time, <a href="https://github.com/sponsors/avifenesh">sponsoring</a> helps keep it going.</b></p>

## ML research

- **Released** at tiyuvta: the **[beta gate](https://github.com/avifenesh/gdn-beta-gate)** (paper: *Beta Gate: Shorter RL Reasoning in Qwen3.5 Without Negative Eigenvalues*), a zero-initialized gate on the Gated DeltaNet write strength β in Qwen3.5, trained with LoRA under length-penalized RL ([adapters](https://huggingface.co/collections/Avifenesh/gate-qwen35-6accb63081800b2f2d583b80)). At 4B, with lr 2e-5, 150 steps and a 512-token training cap, it reasons 48% shorter than LoRA on MATH-500 and lifts anytime accuracy (area under the accuracy-budget curve) from 0.786 to 0.852, where a LoRA with 1.9% more parameters reaches 0.792. On 130 fresh AIME and AMC problems read once it beats LoRA by 0.110 anytime accuracy. Negative eigenvalues turned out not to be needed for the effect. It follows a negative-eigenvalue gate retrofit that added +48 points at 4B and +43 at 9B on state tracking at 4x the training length ([record](https://github.com/avifenesh/fixed-compute-frontier/blob/main/results/negeig-retrofit-preregistration.md)); the 27B work is paused.
- Also released: **[Layby](https://github.com/avifenesh/layby)**, KV cache placement for idle LLM sessions by when they come back. A cost rule with no fitted constants and **[Layby-Dwell](https://huggingface.co/Avifenesh/layby-dwell)**, an open 421M return-time model; adapters for vLLM and SGLang and the open ReturnBench benchmark. On a slow disk with Qwen3-8B it cuts p95 time to first token to 0.59 of an LRU CPU tier with the median unchanged, half of LMCache's best setting; with GLM 5.3 Flash on a shared disk, 0.79 at p95 with p99 held at the baseline, where writing everything to disk makes p95 1.35 times worse. Paper on arXiv to follow. Details at **[avifenesh.ai/research](https://avifenesh.ai/research/#running)**.
- **[memra](https://github.com/avifenesh/memra)**: tiyuvta's from-scratch Rust + CUDA research engine for RTX PRO 6000 Blackwell and RTX 5090, an instrument behind the studies below. Safetensors is the tuned path, GGUF stays supported, and a mechanism that wins on one card and loses on the other becomes a per-device default rather than a compromise. On crates.io with prebuilt binaries.
- **[hqmtp](https://github.com/avifenesh/hqmtp)**: MTP draft-head lab, concluded. Function cuts (pruning, low-rank, distillation) pay a 10–19-point off-distribution tax that fidelity cuts don't; the zero-training trimmed-vocabulary recipe won at 1.8–2.7× end to end. The negative results stay in the ledger.
- **[recipe-lab](https://github.com/avifenesh/recipe-lab)**: layer-loop weight sharing + ε=λ/(N√L) residual scaling, combined for the first time and tested from zero in 11 pre-registered rounds. In the data-constrained regime the looped model beat FLOPs-matched vanilla in all three mixer families (attention, pure SSM, and hybrid; seven paired runs, zero sign flips), with 26–34% fewer parameters. Rule isolated: loop the state-mixer, never the retriever.
- **[mem-retrofit](https://github.com/avifenesh/mem-retrofit)**: grafted a product-key memory layer onto a stock dense 4B and ran it against LoRA over sequential updates. The retrofit is free at lr/10; the published forgetting advantage failed 12/12 confidence intervals.
- More studies with receipts: **[fixed-compute-frontier](https://github.com/avifenesh/fixed-compute-frontier)** (a preregistered kill-gate ledger, ~84 theory lanes) · **[gemma-expert-atlas](https://github.com/avifenesh/gemma-expert-atlas)** (26B MoE expert surgery, 3,840 experts traced) · **[block-routed-swiglu](https://github.com/avifenesh/block-routed-swiglu)** (near-free kernel, refuted capability) · **[moe-lab](https://github.com/avifenesh/moe-lab)** · **[assumption-excavator](https://github.com/avifenesh/assumption-excavator)**.
- Working papers: **[small-vocabulary MTP heads](https://avifenesh.ai/research/small-vocabulary-mtp/)** · **[prune, heal, quantize](https://avifenesh.ai/research/prune-heal-quantize/)**. Methods, failed arms, and evidence in the open.
- Articles: **[How AI workloads changed the queue I was already building](https://avifenesh.ai/writing/how-ai-workloads-changed-the-queue/)** · **[Your AI agent configs are probably broken (and you don't know it)](https://avifenesh.ai/writing/your-ai-agent-configs-are-probably-broken/)**.

## Maintaining

- **[Valkey](https://github.com/valkey-io/valkey)** and its ecosystem. I maintain **[Valkey GLIDE](https://github.com/valkey-io/valkey-glide)**, the official multi-language client (Rust core, Java/JNI, Node/N-API), with its [C++](https://github.com/valkey-io/valkey-glide-cpp), [C#](https://github.com/valkey-io/valkey-glide-csharp) and [Ruby](https://github.com/valkey-io/valkey-glide-ruby) clients and the [GLIDE docs](https://github.com/valkey-io/valkey-glide-docs), and **[valkey-skills](https://github.com/valkey-io/valkey-skills)**, the official AI skills for the ecosystem, which I started. I contribute to Valkey itself, and a good part of my open-source time goes to the people around it: the clients team, talks, and helping the people who run it.
- **[valkey-review-bot](https://github.com/valkey-io/valkey-review-bot)**: the automated reviewer on Valkey and Valkey GLIDE pull requests, which I built and maintain. It checks a change against a real checkout, builds and runs tests when that helps, and posts inline findings with a merge-risk and backport verdict. It never approves; that stays with maintainers. So far it has reviewed 600+ pull requests.
- **[agent-sh](https://github.com/agent-sh)**, my org: open tools for agent-assisted development across Claude Code, Codex, OpenCode, Cursor, and Kiro, led by [agentsys](https://github.com/agent-sh/agentsys), [agnix](https://github.com/agent-sh/agnix), [computer-use-linux](https://github.com/agent-sh/computer-use-linux) and [agent-workspace-linux](https://github.com/agent-sh/agent-workspace-linux).
- **[glide-mq](https://github.com/avifenesh/glide-mq)**: Node.js queue on Valkey Streams with a Rust N-API core, plus adapters for [Hono](https://github.com/avifenesh/glidemq-hono), [Fastify](https://github.com/avifenesh/glidemq-fastify), [Hapi](https://github.com/avifenesh/glidemq-hapi), [NestJS](https://github.com/avifenesh/glidemq-nestjs) and a [dashboard](https://github.com/avifenesh/glidemq-dashboard).
- Also around: **[RustOwl](https://github.com/cordx56/rustowl)** (runtime, memory, and CI work).

## Upstream contributions

Open fixes and features:

- **[vLLM](https://github.com/vllm-project/vllm)**: [NVFP4 fused-shard weight scales](https://github.com/vllm-project/vllm/pull/59845), [GLM-5.x NVFP4 MLA weight loading](https://github.com/vllm-project/vllm/pull/59833), and [client-executed tool search](https://github.com/vllm-project/vllm/pull/59792).
- **[SGLang](https://github.com/sgl-project/sglang)**:
  - Inference: [SM120 DeepSeek V4 decode dispatch](https://github.com/sgl-project/sglang/pull/42445), [long FP8 prefill on RTX PRO 6000](https://github.com/sgl-project/sglang/pull/42451), [MiMo ModelOpt mappings](https://github.com/sgl-project/sglang/pull/42450), and [deferred NVFP4 scale layouts](https://github.com/sgl-project/sglang/pull/42452).
  - HiCache: [host Mamba capacity and per-pool metrics](https://github.com/sgl-project/sglang/pull/42443) and [device-only SWA prefix matches](https://github.com/sgl-project/sglang/pull/42446).
  - Tool calls and diagnostics: [strict DSML validation](https://github.com/sgl-project/sglang/pull/42442), [Qwen3Coder JSON repair](https://github.com/sgl-project/sglang/pull/42448), and [credential redaction](https://github.com/sgl-project/sglang/pull/42444).
  - Routing: a [shared Valkey placement index](https://github.com/sgl-project/sglang/pull/42447) and [event replay, worker liveness and failover](https://github.com/sgl-project/sglang/pull/42449), with a [demo under load](https://github.com/avifenesh/sglang-valkey-demo).
- **[llm-compressor](https://github.com/vllm-project/llm-compressor)**: [activation caching for validated dataclasses](https://github.com/vllm-project/llm-compressor/pull/3144).
- **[LMCache](https://github.com/LMCache/LMCache)**: [binary buffers](https://github.com/LMCache/LMCache/pull/3285) and [safe read failures](https://github.com/LMCache/LMCache/pull/3292) in the local disk backend.
- **[llama.cpp](https://github.com/ggml-org/llama.cpp)**: [imatrix-aware NVFP4 quantization](https://github.com/ggml-org/llama.cpp/pull/25153).

## Agents

- **[agnix](https://github.com/agent-sh/agnix)**: linter and language server for AI agent configs: 757 rules with autofixes, a GitHub Action, an MCP server, and editor plugins.
- **[tacit](https://github.com/agent-sh/tacit)**: local or shared fact memory for coding agents in plain Markdown and git, with lexical FTS5 retrieval, git-derived facts, and source-grounded verification.
- **[computer-use-linux](https://github.com/agent-sh/computer-use-linux)** / **[agent-workspace-linux](https://github.com/agent-sh/agent-workspace-linux)** / **[agent-chrome-bridge](https://github.com/agent-sh/agent-chrome-bridge)**: Linux desktop control over MCP, isolated agent-owned desktops, and a shared local Chrome bridge for Claude Code and Codex.
- **[parlar](https://github.com/agent-sh/parlar)**: voice mode for Claude Code and Codex. You talk to a running session, idle or mid-work, and it answers out loud. Local CPU only: VAD, Phonon-2 recognition, Kokoro speech. On [npm](https://www.npmjs.com/package/@agent-sh/parlar) and [crates.io](https://crates.io/crates/parlar).
- **[agentsys](https://github.com/agent-sh/agentsys)**: the agent-sh plugin set (workflow, review, ship, deslop, perf) for Claude Code, OpenCode, Codex, Cursor, and Kiro.
- **[harness tools](https://github.com/agent-sh/tools)**: `read`, `write`, `grep`, `glob`, `bash`, `batch`, `webfetch`, `websearch`, `lsp` and `skill` tools built for LLM callers (`@agent-sh/harness-*` on npm, `harness-tools` on crates.io), plus `@agent-sh/harness-web-mcp` for keyless web search and fetch over MCP.
- **[research-skills](https://github.com/avifenesh/research-skills)**: two AgentSkills for ML systems research: write and check the arXiv paper (`paper_lint.py`), and build, audit and release the code, benchmark and model repo behind it (`repo_audit.py`).
- **[revuto](https://github.com/avifenesh/revuto)**: local PR reviewer that works with any model and learns each repo from its PR history and maintainer feedback. It reviews my own repos.
- **[Codex Desktop for Linux](https://github.com/ilysenko/codex-desktop-linux)**: contributor (120+ commits) to the unofficial Linux build of the ChatGPT/Codex desktop app. Linux Computer Use, Read Aloud and conversation mode, the in-app updater, launcher hardening.

## Systems

- **[Valkey](https://github.com/valkey-io/valkey)**: core contributor; sync-from-replica replication in review. On the side: CRIU copy-on-write live-migration research, under 50 ms of freeze while migrating a 200 GB loaded instance.
- **[ferrings](https://github.com/avifenesh/ferrings)**: io_uring TCP transport for Node.js with a Rust N-API core. 2.5x Node `http` throughput and 37-57% fewer syscalls per connection in the published bench. On [npm](https://www.npmjs.com/package/ferrings).
- **[FlowFabric](https://github.com/avifenesh/FlowFabric)**: durable-execution engine in Rust for Valkey, Postgres, and SQLite: lease-safe workers, waitpoints, budgets.
- **[layout-audit](https://github.com/avifenesh/layout-audit)**: DWARF memory-layout analysis: padding, layout diffs, size budgets for C/C++/Rust/Go.
- **[scrump](https://github.com/avifenesh/scrump)**: format-aware secret scrubber for binary capture artifacts: perf.data, core dumps, nsys traces, JFR.
- **[ocaml-valkey](https://github.com/avifenesh/ocaml-valkey)**: OCaml 5 + Eio Valkey client, published on [opam](https://opam.ocaml.org/packages/valkey).

## tiyuvta

**[tiyuvta](https://tiyuvta.ai)** is my research lab. We help companies run open models on their hardware or cloud account. The work includes model and hardware assessment, deployment and serving-engine optimization, fine-tuning and evaluation, and cloud setup. We compare options on your workload and budget, then agree the deliverables, handover and support.

Our research in model execution, quantization, pruning, speculative decoding and Hebrew models informs that work. **[See the services and discuss your project](https://tiyuvta.ai/services/)**.

The lab's models are on **[Hugging Face](https://huggingface.co/tiyuvta)**: NVFP4 builds of GLM, DeepSeek, MiMo, Qwen and DictaLM, MTP draft heads in GGUF, and Phonon-2 in ONNX.

## Elsewhere

- Talks: **[Inside Valkey GLIDE](https://developers.podcast.go-aws.com/web/episodes/165/index.html)** on the AWS Developers Podcast · **[Glide into resiliency](https://www.youtube.com/live/j4myaAsk8_8)** on Let's Talk About Data
- Writing: **[avifenesh.ai/writing](https://avifenesh.ai/writing/)** · answering on **[Stack Overflow](https://stackoverflow.com/users/12085223/avifen)**
- Hugging Face: **[Avifenesh](https://huggingface.co/Avifenesh)** · **[tiyuvta](https://huggingface.co/tiyuvta)**
- 📫 **[aviarchi1994@gmail.com](mailto:aviarchi1994@gmail.com)** · [LinkedIn](https://www.linkedin.com/in/avi-fenesh/) · [X](https://x.com/avi_fenesh)

If something here saved you time, [sponsoring](https://github.com/sponsors/avifenesh) helps me keep doing it.
