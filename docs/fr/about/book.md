---
id: book
title: Get the book
---

<div style={{textAlign:'center'}}>
    <img src="/img/bookCover.png" alt="Tauri - From Theory to Practice" title="Book Cover Mockup" style={{maxWidth:'80%'}}/>
</div>

<div className="alert alert--info" role="alert">
  Tauri: From Theory to Practice<br/>
Architecting Next-Gen Native-Apps for all Platforms [v1:Rust Edition]<br/>
Authors: [Daniel Thompson-Yvetot, Lucas Fernandes Gonçalves Nogueira]<br/>
Publisher: TBD<br/>
Release: late 2020
</div>

### tl;dr;

Visit https://opencollective.com/tauri and preorder your copy of the book today. Your donation will support the ongoing development of Tauri, and you will receive advance digital pdf's for your review as chapters are completed. The final book will ship concurrently with the release of 1.0.0 stable.

If you donate 10 USD / month to Tauri, you will get the advance PDF versions as soon as they are released. If you just want to donate once: 15 USD for pdf and e-book, 30 USD for print version and pdf, 40 USD for all three.

All tutorial subscription tiers receive the rolling PDF free of additional charge.

### Introduction

In 2020, the manufacture of native-apps has become easier and more accessible than ever before. All the same, beginners and seasoned developers alike are confronted with tough choices in a rapidly changing landscape of security and privacy. This is especially true in the semi-trusted environment of user devices.

Tauri takes the guesswork out of the equation, as it was designed from the ground up to embrace new paradigms of secure development and creative flexibility that leverage the language features of Rust and lets you build an app using any frontend framework you like. Find out how you can design, build, audit and deploy tiny, fast, robust, and secure applications for the major Desktop and Mobile platforms, all from the exact same codebase and in record time - without even needing to know the Rust programming language.

Authors Daniel and Lucas, the architects behind Tauri take you on a journey from theory to execution, during which you will learn why Tauri was built and how it works under the hood. Together with guest personalities that specialize in OpenSource, DevOps, Security and Enterprise Architecture, this book also presents discourse-formated philosophical discussions and open-source sustainability viewpoints from which your next-gen apps will profit - and your users will benefit.

In this book you will follow the authors in the iterative evolution of a real project from conception to distribution - all with commentary, complete code resources, built, and packaged Native Apps for reference and staged Capture the Flag (CTF) challenges that progress in difficulty as your comprehension of the system grows.

### About the Topic

Tauri is a brand new way to make cross-platform native-apps for web, desktop and mobile. At this very moment, the pre-alpha version of this MIT licensed community-based software is being prepared for public release: https://github.com/tauri-apps/tauri

Tauri introduces novel methods for Webview integration and innovative patterns for robust threat evasion. The 1.0 release will ship with a multipurpose white-box analyzer and decompiler for any kind of binary and an integrated CLI for ingesting any type of html; which, when combined, provides developers and security teams with a holistic platform that has never existed as a single unit before.

Tauri bridges communities and opens up new opportunities for everyone from the front end developer all the way to the low-level security and network administrators. Due to this level of complexity and robustness, it is important to publish a reference guide that will necessarily be updated as major versions are released.

### What you will learn

By the end of this book you will understand:

- The method and reasoning behind the design of Tauri
- The options you have when building with Tauri
- That having a moral compass is possible in software development
- Why the Rust language makes the most sense as a binding and application layer
- Why Electron, Cordova, React Native, Capacitor and others are no longer the best choice
- Why a binary review is important

And you will be able to:

- Transform a simple website project into a Tauri Native-App
- Make a variety of Tauri Application Types based on the main Patterns
- Decompile and analyze your App for Security Issues
- Publish your App to a variety of App Stores
- Read and write Rust code

### Stuff you'll get if you preorder

- Access to a real demo App built for all platforms available at respective stores (that includes CTF Flags).
- Exclusive One-Pager cheat sheets made available for each section of the book, including the Appendices.
- Early access to videos / webcasts.
- Discounted participation in the “Capture the Flag” event hosted at the launch of the book.

## Outline

This is an early outline of the contents that we expect to publish. Contents subject to change.

### Chapter 1 - Theory

(ca. 50 pages - mostly conversational / technical, graphics)

```
 1. Security Starts with You
 2. Privacy Ends with ${you}
 3. Languages, Dialects and Patterns
 4. Toolchains and Syntactic Sugar
 5. Production Methodologies
 6. Enterprise Readiness
 7. Message Queueing
 8. Embracing Chaos
 9. Distribution Techniques
10. Licensing Strategies
```

### Chapter 2 - Practice

(ca. 130 pages w/ charts, screenshots, code samples)

```
 1. Environment Prerequisites
    - Node, Npm, Yarn, Rustc, Rustup, Buildtools
 2. Development Platform Details
        - MacOS
        - Windows
        - Linux
        - Docker
        - Virtual Machines
        - CI / CD
 3. Tauri Introduction
 4. Tauri Anatomy
 5. Tauri Configuration
    - Files & Folders
    - Icons
    - Splash Screens
    - Window
    - `src-tauri/tauri.conf.json`
 6. Preparing your code
    - Transpile dynamic imports
    - Remove webpack chunking
    - Monolithic Files
    - Minification strategies
 7. Tauri API
    - Design Considerations
    - API Usage Patterns
    - Custom API Functions
    - Endpoints
        - All
        - Answer
        - Bridge
        - Event
        - Execute
        - List Files
        - Open
        - Read Binary File
        - Read Text File
        - Set Title
        - Window
        - Write File
 8. Web APIs
 9. Tauri App Extensions
    - Anatomy
    - Flow
    - Registration
    - Publication
    - API
10. Taskbar Integration (Desktop Only)
    - Anatomy
    - Integrations
        - MacOS
        - Windows
        - Linux
11. Security Features
    - Baseline Rust Features
    - Functional Address Space Layout Randomization (fASLR)
    - Ahead of Time (AoT) Compilation
    - Content Security Policy (CSP)
    - One Time Pads (OTP)
    - Embedded Server: False
    - API Tree-Shaking
    - Matryoschkasumming (with Tauri-Frida)
12. Bridges and Brokers
    - Bridge Patterns
    - Message hashing with OTP
    - Plugin Pattern
    - Kamikaze Function Injection (KFI) Closures
13. Testing
    - Unit Testing
        - Rust
        - JS
    - Integration Testing
    - e2e Testing
14. Building
    - Debugging
    - Packaging
    - Minification
    - Distribution Platform Details
        - MacOS (.app / .dmg)
        - Win (.exe / .msi)
        - Linux Arm64 (.appImage / .deb)
        - Linux x64 (.appImage / .deb)
        - iOS (.ipa)
        - Android (.apk)
        - PWA Website (with wasm)
    - Code Signing
        - Keystores
        - Certs
        - Fingerprints
    - Providing License for End Users
        - Providers
        - Keys Files
    - Self-Updater
        - Anatomy
        - Service Provisioning
            - Github
            - AWS
            - Homegrown
    - Cross-Platform Bundler
15. Tauri-Frida Harness
    - Introduction to Reverse Engineering
    - Toolchain
    - Usage
    - Binary Hooking at Runtime
    - Pointer Evaluation
    - Spraying, Fuzzing, Spoofing
    - Report Generation
    - Recompilation
    - Post-Binary Analysis
16. Distribution
    - Git
    - Mac Store
    - iOS Store
    - Play store
    - Windows Store
    - Snap Store
    - PureOS Store
    - .deb channels
    - .tar.gz
    - homebrew
    - Fdroid
    - Cydia
    - ChromeOS
    - WASM
```

### Chapter 3 - Philosophical Discourses

(ca. 40 pages of essays, some graphics)

```
1.  Rights and Responsibilities (with Robin van Boven (SFOSC))
    - Who You are Responsible To
    - Being a Vendor Comes with Duties
    - Ubiquitous Resources are Still Precious
    - Use Policy to Address Responsibilities
    - Take a Hippocratic Development Oath
2.  Take a More Secure Stance (with Liran Tal (SNYK))
    - Security Benefits of Frameworks
    - Encrypt All the Things, All the Time
    - Constantly Audit Project Dependencies
    - Harden Yourself, Your Organization and Your Ecosystem
    - “Do What You Can Until You Run Out of Time.” - [ROBERT C. SEACORD]
3.  Production Strategies for Sustainability (with Rhys Parry (Independent))
    - Develop in the “Perfect” Environment
    - Minimal Impact for Existing Enterprise Architectures
    - Use Low-Barrier Tools for Ensuring Wholestack Security
    - Test the Right Things Intelligently
    - Post-Binary Analysis and Redistribution - The Last Mile
```

### Chapter 4 - Execution

(ca. 100 pages w/ code examples, screenshots, graphics)

```
1.  Base Pattern Evolution
    - Hermit
    - Bridge
    - Cloudish
    - Cloudbridge
    - Kamikaze
    - Multiwin
    - GLUI
2.  Advanced Patterns
    - Cryptographic Enclave
    - Identity Management
    - Combine an App with a Daemon
    - IPC / RPC
    - Integrate with DENO
3.  UI Source Complilation
    - React
    - Vue
    - Angular
    - Svelte
    - Gatsby
4.  Building a Real App
    - Multiparty Password Manager
        - Design
        - Prototyping
        - Testing
        - Debugging
        - Packaging
        - Checksumming
5.  Tauri-Frida
    - White Box Reversing
        - Analyzing with Frida
        - Chaos Experiments
            - Interface Jacking
            - Disk Change
            - Latency
            - Process Kill
            - CPU Throttle
        - Static Analysis Reporting
    -  Binary Repackaging
        - Inject License Keys
        - Clear Dead Codepoints
        - Recalculate Integrated Checksum
6.  Publishing the App
    - Git
    - Mac Store
    - iOS Store
    - Play store
    - Windows Store
    - Snap Store
    - PureOS Store
    - .deb channels
    - .tar.gz
    - homebrew
    - Fdroid
    - Cydia
    - ChromeOS
    - WASM
7.  Publishing an Update
```

### Chapter 5 - Appendices

(ca. 120 pages)

```
 1. Configuration Options
 2. Files and Repositories
 3. Tauri CLI references
 4. Tauri API references
 5. ES6 References
 6. Rust References
 7. App Pattern Charts
 8. Tauri-Frida Reference
 9. Glossary
10. Index
```

## Errata

Got something that you think should be in the book? Want to be our publisher? Reach out to us and let us know!
