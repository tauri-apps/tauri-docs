---
title: Tauri Philosophy
i18nReady: true
---

Tauri is a toolkit that helps developers make applications for the major desktop platforms - using virtually any frontend framework in existence. The core is built with Rust, and the CLI leverages Node.js making Tauri a genuinely polyglot approach to creating and maintaining great apps.

<iframe
    style="width: 100%; aspect-ratio: 16/9;"
    src="https://www.youtube-nocookie.com/embed/UxTJeEbZX-0?si=mwQUzXb6mmCg7aom"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>

## Security First

In today's world, every honest threat model assumes that the user's device has already been compromised. This puts app developers in a complicated situation because if the device is already at risk, how can the software be trusted?

Defense in depth is the approach we've taken. We want you to be able to take every precaution possible to minimize the surface area you present to attackers. Tauri lets you choose which API endpoints to ship, whether or not you want a localhost server built into your app, and it even randomizes functional handles at runtime. These and other techniques form a secure baseline that empowers you and your users.

Slowing down attackers by making static attacks crushingly difficult and isolating systems from one another is the name of the game. And if you are coming from the Electron ecosystem - rest assured - by default Tauri only ships binaries, not ASAR files.

By choosing to build Tauri with security as a guiding force, we give you every opportunity to take a proactive security posture.

## Polyglots, not Silos

Most contemporary frameworks use a single language paradigm and are therefore trapped in a bubble of knowledge and idiom. This can work well for certain niche applications, but it also fosters a kind of tribalism.

This can be seen in the way that the React, Angular, and Vue development communities huddle on their stacks, ultimately breeding very little cross-pollination.

This same situation can be seen in the Rust vs. Node vs. C++ battlefields, where hardliners take their stances and refuse to collaborate across communities.

Today, Tauri uses Rust for the backend - but in the not too distant future, other backends like Go, Nim, Python, Csharp, etc. will be possible. This is because we are maintaining the official Rust bindings to the [webview](https://github.com/webview) organization and plan to let you switch out the backend for your needs. Since our API can be implemented in any language with C interop, full compliance is only a PR away.

## Honest Open Source

None of this would make any sense without a community. Today software communities are amazing places where people help each other and make awesome things - open source is a very big part of that.

Open source means different things to different people, but most will agree that it serves to support freedom. When software doesn't respect your rights, then it can seem unfair and potentially compromise your freedoms by operating in unethical ways.

This is why we are proud that FLOSS advocates can build applications with Tauri that are "certifiably" open source and can be included in FSF endorsed GNU/Linux distributions.

## The Future

Tauri's future depends on your involvement and contributions. Try it out, file issues, join a working group or make a donation - every contribution is important. Please, at any rate, do get in touch!!!
