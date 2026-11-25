# Business applications and SaaS

[Back to profile](../README.md)

A large part of my work involves retail and service businesses. Besides the screens people use every day, I work on the database rules that make operations reliable: who can change a price, record a payment, return a sale or access another location's data.

## Retail systems

My retail projects cover catalogs, inventory, sales, returns and cash management. In MegaShop, I've also worked on importing products from spreadsheets and photographs of supplier documents. AI helps with extraction and classification, but imported data needs review before it becomes part of the catalog.

[View the public MegaShop repository](https://github.com/emamoreno7/Gestion-Inteligente-MegaShop).

## GYM OS

This is a pilot for managing gyms, branches, memberships, payments and access. One of the problems I'm working on is preventing duplicate payments or repeated use of the same temporary QR code.

I use PostgreSQL transactions and database authorization rules for operations that cannot safely depend on a frontend check alone. The design includes tenant isolation, membership permissions and audit records.

The pilot has a rule-based exercise recommendation feature. Generative AI is planned, not implemented in the documented pilot. End-to-end tenant isolation and transaction testing are still needed before production.

## Stack

Next.js and React, TypeScript, Supabase Auth, PostgreSQL, RLS and versioned SQL migrations. The individual projects differ in their deployment and data models.
