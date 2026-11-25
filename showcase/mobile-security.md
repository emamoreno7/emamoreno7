# Mobile security and privacy

[Back to profile](../README.md)

## DOTCOM OS

I'm researching ways to protect sensitive data on mobile devices in the event of loss, theft or unauthorized physical access. The design covers encrypted storage, key management, controlled access and managed-device security.

This is an architecture project rather than a released application. Some of the proposed controls depend on what the operating system and device management APIs actually permit.

## EmA

EmA is a native Android prototype written in Kotlin and Jetpack Compose. The idea is to help users understand everyday spending without sending the contents of their financial notifications to a server.

At the current prototype stage, the work focuses on permission handling, notification access and filtering by application. Parsing amounts, storing events and building the main product interface are still pending.

I want to keep financial notification content out of release logs and analytics. That is a design requirement, not a verified privacy guarantee for a finished application. Physical-device testing is part of the work.
