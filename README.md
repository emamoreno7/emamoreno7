# Emanuel Moreno Di Cesare

Software Architect | AI Systems Engineer | Cybersecurity Researcher

I'm a software developer and architect based in Mendoza, Argentina. I work on business applications, AI systems and cybersecurity research through [DOTCOM](https://www.bydotcom.com).

Most of my current work is in private repositories, so I've put together a few public notes on the systems I'm building and the decisions behind them.

## What I'm working on

**[CYBER-AI / SENTINEL-AI](showcase/cyber-intelligence.md)**

A local cybersecurity assistant and its integration with an agent-based security testing platform. I'm working on hybrid search, semantic validation, evidence provenance and the conditions under which an AI-generated finding should be held for review. The integration builds on the open-source ARTEX project.

**[AutoPilot AI](showcase/autopilot.md)**

A marketing SaaS that uses AI to plan content, generate media and manage publishing workflows. The interesting part for me is controlling what an agent can do on its own and what needs approval.

**[Business applications and SaaS](showcase/enterprise-saas.md)**

Retail POS, inventory and gym management software. I work on the application and database layers, including permissions, transactions, audit trails and tenant isolation.

**[Mobile security and privacy](showcase/mobile-security.md)**

DOTCOM OS is an architecture research project focused on mobile data protection. EmA is an early native Android prototype for processing financial notifications locally.

## A few things I've tested

- CYBER-AI: an earlier HTTP bridge integration run recorded 44 passing tests. [Integration notes](showcase/cyber-intelligence.md#current-status).
- GYM OS: isolated PostgreSQL integration checks passed for tenant RLS, billing and QR access, alongside the frontend build and static checks. [Database notes](showcase/enterprise-saas.md#gym-os).
- AutoPilot: scheduled pipeline, publishing and YouTube jobs completed successfully in GitHub Actions. [Workflow notes](showcase/autopilot.md).

These results refer to specific development runs, not production certifications. The detailed notes explain what was tested and what remains open.

## Tools I work with

- TypeScript, Next.js, React and Python.
- PostgreSQL, Supabase, SQLite and ChromaDB.
- Ollama, RAG, NLI, ONNX Runtime and AI model APIs.
- Kotlin, Jetpack Compose, GitHub Actions and Vercel.

I spend a fair amount of time on database design, debugging, testing and security reviews. In my AI research, I keep the model's output separate from the evidence used to verify it.

## Public repositories

- [DOTCOM website](https://github.com/emamoreno7/dotcom-software-solutions)
- [MegaShop retail management](https://github.com/emamoreno7/Gestion-Inteligente-MegaShop)
- [Aesthetic center management](https://github.com/emamoreno7/sistema-estetica)

For software engineering opportunities or collaborations, you can reach me through [bydotcom.com](https://www.bydotcom.com).
