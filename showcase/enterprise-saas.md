# Business applications and SaaS

[Back to profile](../README.md)

A large part of my work involves retail and service businesses. Besides the screens people use every day, I work on the database rules that make operations reliable: who can change a price, record a payment, return a sale or access another location's data.

## Retail systems

My retail projects cover catalogs, inventory, sales, returns and cash management. In MegaShop, I've also worked on importing products from spreadsheets and photographs of supplier documents. AI helps with extraction and classification, but imported data needs review before it becomes part of the catalog.

The import pipeline normalizes prices and product information, combines AI classification with keyword rules and flags similar catalog entries for review. The system is designed around Supabase RLS, role-based permissions and branch-specific access. Stock movements and administrative logs are part of the operational interface.

I'm extending the inventory workflow to monitor potential duplicates and products with no movement over a monthly period. A planned integration with AutoPilot would match relevant market trends against the shop's available stock and use connected social accounts to promote suitable products. I see this as a way to connect retail operations with autonomous marketing, while keeping inventory accuracy and publishing permissions under the merchant's control.

The similarity check during imports is implemented; continuous inventory monitoring and the cross-product publishing flow still need independent validation.

[View the public MegaShop repository](https://github.com/emamoreno7/Gestion-Inteligente-MegaShop).

## GYM OS

This is a pilot for managing gyms, branches, memberships, payments and access. One of the problems I'm working on is preventing duplicate payments or repeated use of the same temporary QR code.

I use PostgreSQL transactions and database authorization rules for operations that cannot safely depend on a frontend check alone. The design includes tenant isolation, membership permissions and audit records.

On November 17, 2026, three GitHub Actions workflows completed successfully against the same revision: the Next.js build and typecheck, static security and backend contract checks, and database integration.

The database job started an isolated PostgreSQL instance, applied the migrations and passed its tenant RLS, billing and QR assertions. I use a disposable database for this so the checks do not touch customer data. These are integration checks in an isolated environment, not a production security audit.

The pilot has a rule-based exercise recommendation feature. Generative AI is still planned. Deployment-specific and end-to-end acceptance testing remain necessary.

## Stack

Next.js and React, TypeScript, Supabase Auth, PostgreSQL, RLS and versioned SQL migrations. The individual projects differ in their deployment and data models.
