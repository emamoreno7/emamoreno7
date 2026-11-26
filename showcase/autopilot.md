# AutoPilot AI

[Back to profile](../README.md) · [Product screenshots](../portfolio-media/README.md#autopilot-ai)

I'm building AutoPilot to manage the work that normally sits between a brand's content ideas and its social media accounts: planning, writing, media generation, approval and publishing.

Rather than treating every prompt as a new conversation, the system uses stored brand context. Content can then move through drafts, review and scheduling without losing its history.

```mermaid
flowchart LR
    A[Brand context] --> B[Content generation]
    B --> C[Draft]
    B --> D[Video production]
    D --> C
    C --> E[Approval or configured automation]
    E --> F[Publishing]
    F --> G[History and analytics]
```

The diagram shows the intended workflow.

There are three agent modes: off, suggestions and autopilot. The reason for keeping these separate is that generating a draft and posting to a live account are very different operations. I want the user to decide where the system is allowed to act.

The application uses Next.js, TypeScript and Supabase. The repository includes Instagram and YouTube integration workflows, OAuth, and a video pipeline based on scripts and Remotion.

The test suite includes workspace isolation, agent decisions, worker dispatch and AI resilience. I also use scheduled GitHub Actions for the publishing and YouTube workflows.

On November 25, 2026, the AutoPilot pipeline, publication job and YouTube AutoPilot job each completed successfully in GitHub Actions, including their configured result-check steps. This is evidence of successful scheduled executions, not confirmation that a particular post or video went live.

The mobile interface also lets me set daily posting limits, minimum intervals, active days and a local-time publishing window. There is a manual stop control and an option to run the agent without waiting for the scheduled job. The scheduling screen explains when there is not enough historical engagement data to optimize posting times. The provider settings expose the primary model, fallback order and image-generation provider; the billing screen displays usage against plan limits.

The content library shows items and their publishing status. The interface is not independent proof that each post reached the external platform or that all provider failovers have been tested.

The product remains in development and the source is private.
