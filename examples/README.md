# A small example from the codebase

The cost panel in the aesthetic center application uses a contribution-margin model. Each service has direct costs (supplies and labor), a selling price and an estimated monthly volume. Fixed costs are deducted from the combined monthly contribution, not allocated to every service.

[Original TypeScript module](https://github.com/emamoreno7/sistema-estetica/blob/8c0f1b6c979bc57efcbc0032340298758024cece/src/lib/costosCalculo.ts)

The [tests](costos-calculo.test.mjs) cover margin versus markup, service-specific costs, losses, inactive services, monthly totals and break-even behavior. They use fictional values and do not need a database, credentials or external APIs.

## Run locally

Use Node.js 22.16 or later with TypeScript type stripping. Clone the two repositories side by side in a new directory:

```bash
git clone https://github.com/emamoreno7/sistema-estetica.git
git -C sistema-estetica checkout --detach 8c0f1b6c979bc57efcbc0032340298758024cece
git clone https://github.com/emamoreno7/emamoreno7.git
cd emamoreno7
node --experimental-strip-types --test examples/costos-calculo.test.mjs
```

No npm dependencies are needed for this example.

On November 26, 2026, the eight new tests passed locally on Node.js 22.16.0, using a copy of the original module whose Git blob SHA matched the repository. They cover the calculation module only; they are not integration tests or a financial or security audit of the application.

The tests were added during the portfolio review. The application source was left unchanged.
