---
sidebar_position: 2
---

# Sicurezza

This guide seeks to explain the high-level concepts and security features at the core of Tauri's design that make you, your apps, and your users safer by default.

:::info Note
While we take every opportunity to help you harden your application - there are always underlying threats like BIOS attacks, memory rowhammering and other operating system vulnerabilities that are constantly being discovered and (in the best cases) responsibly disclosed.

Furthermore, there are many ways that development teams can cut corners and either leak sensitive information or leave doors wide open to any of a range of attacks. Security is a never-ending quest, and your users count on you to keep them safe.

Therefore, we highly recommend that you take some time to consider the security ramifications of everything that your application does, especially in the context of running on the semi-hostile platform of end-user devices.

If you need help or want a review, you are welcome to contact the Tauri team for security consultation.
:::

## Security Researchers

If you feel that there is a security concern or issue with anything in Tauri, please do not publicly comment on your findings. Instead, reach out directly to our security team: security@tauri.app

Although we do not currently have a budget for Security Bounties, in some cases, we will consider rewarding responsible disclosure with our limited resources.

## No Server Required

Tauri enables you to construct an application that uses web technology for the user interface without requiring you to use a server to communicate with the backend. Even if you used advanced techniques of dynamic imports and offload work to the backend, no traffic can be sniffed on TCP ports or external processes - because they aren't there. This reduces not only the physical and virtual footprint of your final binary by a good deal, but it also reduces the surface area of potential attack vectors by removing them from the equation.

## Language Features of Rust

By turning to the programming language renowned for its memory safety and speed, Tauri simply erases whole classes of conventional attacks. "Use after free" just isn't something that can happen with Tauri.

## Dynamic Ahead of Time Compilation (AOT)

This compilation process happens several times during the bootstrapping phase of a Tauri app. Using our default dynamic Ahead of Time compiler, you can generate code references that are unique for every session and are still technically static code units.

## Function Hardening

### Functional ASLR

Functional address Space Layout Randomization techniques randomize function names at runtime and can implement OTP hashing, so no two sessions are ever the same. We propose a novel type of function naming at boot time and optionally after every execution. Using a UID for each function pointer prevents static attacks.

### Kamikaze Function Injection

This advanced type of fASLR using the `EVENT` API endpoint is a promise wrapped in a closure (with randomized handle) that Rust inserts at runtime into the WebView, where its interface is locked within the promise resolution handler and is nulled after execution.

### Bridge, don't serve

Instead of passing potentially unsafe functions, an event bridge can be used to pass messages and commands to named brokers at each respective side of the application.

### One Time Pad Tokenization and Hashing

Hashing important messages with an OTP salt, you are able to encrypt messages between the user interface and the Rust backend. We are currently investigating the use of additional sources of entropy, such as the amazing [Infinite Noise TRNG](https://13-37.org/en/shop/infinite-noise-trng/).

## System Features

### Allowing API

You have the ability to pick and choose which API functions are available to the UI and to Rust. If they are not enabled, the code will not be shipped with your app, which reduces binary size and attack surface. They are opt-in, so you have to consciously choose to progressively enhance your application.

### Content Security Policy Management

Preventing unauthorized code execution for websites has long since been "resolved" by using CSPs. Tauri can inject CSPs into the `index.html` of the user interface, and when using a localhost server, it will also send these headers to the UI or any other clients that connect with it.

### Decompilation is Difficult

This means that your apps cannot be easily decompiled, as is the case with Electron ASAR files, which makes the process of reverse engineering your project much more time-intensive and requires specialist training.

## Ecosystem

### Build Pipelines and Artifact Authenticity

The process of releasing our source-code artifacts is highly automated yet mandates kickoff and review from real humans. Our current release strategy uses a combination of GitHub Actions and IOTA Tangle publication

### Resilient PR and Approval Processes

Our WG-TECH reviews code changes, tags PRs with scope, and makes sure that everything stays up to date. And when its time to publish a new version, one of the maintainers tags a new release on dev, which:

- Validates core
- Runs smoke tests
- Audits security for crates and npm
- Generates changelogs
- Creates artifacts
- Publishes checksums to IOTA
- Creates a draft release

Then the maintainer reviews the release notes, edits if necessary, and a new release is forged.

## Future Work

### Signed Binaries

Because the entire project is shipped within a monolithic binary, code can be signed for all distributables. (Currently using external tooling, but we are actively working on making the bundler a one-stop-shop.) This makes it virtually impossible for hackers to change an installed Application without the operating system noticing. [Reference](https://github.com/electron/asar/issues/123)

### Post-Binary Analysis

Use industrial-grade pentester-tooling (via our forthcoming Tauri-Frida GUI) to discover and fix security weaknesses in your final binaries.

### Post-Binary Enhancement

After the build is before the delivery and Tauri will provide you with tools never seen before. Stay tuned!

### Audits

We are currently in the process of our first external audit. When complete, we will publish the results here.
