---
authors: [nothingismagick]
image: ./tauri_1_0_images/header.png
---

# Tauri 1.0 Release

![Tauri 1.0 Launch Hero Image](./tauri_1_0_images/header.png)

After 9 months of betas and 4 months of release candidates, [Tauri version 1.0 is now available!](https://github.com/tauri-apps/tauri)

## What is Tauri?

Tauri is an app construction toolkit that lets you build software for all major desktop operating systems using web technologies. The core libraries have been written for you in Rust and the user interface can be written using virtually any frontend framework. It includes an optional and tree-shakeable JavaScript API for comfortable low-level system access, a desktop binary bundler with code signing and artifact verification, a secure updater to keep your users on the latest version, an extensive plugin system, and support for OS-level integrations such as notifications and app trays.

Tauri is as simple to use as it is easy to extend. For those new to the Rust programming language, Tauri provides a comfortable learning environment that will grow with you. Once you have installed rust, creating your first app is a mere running of [`create tauri-app`](https://github.com/tauri-apps/create-tauri-app). But you don’t have to use Node.js at all, if you would prefer to remain in the safety and comfort of 100% Rust.

We built Tauri for the security focussed, privacy respecting, and environmentally conscious software engineering community.

### Security

The entire project has been [horizontally and vertically audited by an independent third party](https://github.com/tauri-apps/tauri/blob/dev/audits/Radically_Open_Security-v1-report.pdf), and we maintain a very strict approach to updating the core. We want you to be confident that major versions are as safe to use as they are ergonomic.

### Privacy

Tauri allows you to build “[local first](https://twitter.com/schickling/status/1537134435702714368?cxt=HHwWgMClwYHo_9QqAAAA)” applications without a webserver, so your users don’t have to share their data with big tech. Using local databases and rust based cryptography have never been easier.

<figure>

![Johannes Schickling at Worker Conf 2022 (photo by @TejasKumar)](./tauri_1_0_images/worker_conf_2022.png)

<figcaption>Johannes Schickling at Worker Conf 2022 (photo by <a href="https://twitter.com/TejasKumar_">@TejasKumar via Twitter</a>)</figcaption>

</figure>

### Environment

The apps you make are [lean and performant](https://tauri.app/about/benchmarks), which reduces electricity, storage space, and general natural resource consumption. Every byte saved is a leaf on a tree that gets to grow.

### Community

We know that open source software is a means of fostering equality and collaboration, which is why we placed the [ownership of the code at the Commons Conservancy](https://dracc.commonsconservancy.org/0035/). You can rest assured knowing that the code base will never be rug-pulled or locked behind open-core pay-to-play feature gates. We believe in open collaboration and safe spaces for all. We have an open working group, accessible to any competent contributors. And we love you all. ❤️

## Feedback

You can visit our code base, file a bug-report, request a feature, or join the discussion on [GitHub](https://github.com/tauri-apps/tauri). There’s lots of things that people make, and visiting the [awesome-tauri repo on GitHub](https://github.com/tauri-apps/awesome-tauri) is a great place to discover and share. If you need support or just want to hang out, you can [join our Discord server](https://discord.gg/tauri).

Tauri is one of the top 200 projects on GitHub in all programming languages.

People love to discuss what is great and terrible about Tauri on orange websites:

Tauri entered at the top of the charts for the [2021 edition of State of JS](https://2021.stateofjs.com/en-US/libraries/mobile-desktop):

<a href="https://2021.stateofjs.com/en-US/libraries/mobile-desktop">

![State of JS 2021](./tauri_1_0_images/state_of_js.png)

</a>

Engineers at big companies seem to be eying up Tauri for future projects.

https://api.ossinsight.io/share/e0a8c3f4-a28f-48ac-b541-7b19fe08975b

## Accolades

> "Spacedrive had to feel native across all platforms, all while being lightweight, instant to launch and extremely fast to use. This just wasn’t possible with a web-based UI — until now, thanks to Tauri."

Jamie Pine, Spacedrive Founder

> “Tauri has the potential to unlock a new generation of desktop software that feels native to users but is as easy to build as web apps.”

Johannes Schickling, Founder of Prisma

> “Tauri stands to reduce the disastrously negative environmental costs of bloated and memory-hogging applications on the internet by orders of magnitude. Any rough approximation of monetary value that could result in, would easily reach hundreds of billions in cost savings for our modern era of grossly underutilized local compute and storage resources.”

Joseph Jacks, Founder / GP at OSS Capital

## What’s Next?

Fresh off the heels of the 1.0 release, the team is already setting our sights on the next steps for Tauri. While we continuously work on improving our documentation, we’re also working on:
mobile support for both iOS and Android
alternative renderers
IPC enhancements to enable improved debugging
runtime plugins
support for additional bindings in other languages.

We’re also inspired by the community to see which features are being used and what new features will enable them to develop even more amazing applications. Your feedback is the most important thing to Tauri’s future innovation.
Thank You
A special thanks to all our contributors who volunteered their precious time to make Tauri awesome and all our sponsors whose generous donations made Tauri possible (and financed a large portion of our audit!)!

The support of industry giants has been really helpful keeping the lights on. Here’s an alphabetical list:
Cloudflare for sponsoring unlimited workers for the OSS updater service (coming soon)
DigitalOcean for comping the droplets that run our bots and search
GitHub for the extra minutes of CI
Netlify for our website hosting
NLNET who has financially supported Tauri development via Grants
PACKT who will be publishing our books

Here are a few notable contributors we’d like to thank explicitly:

| GitHub Profile    | Contribution                                                                                     | Repository                          |
| ----------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------- |
| @malyn            | Fixed http stream                                                                                | wry                                 |
| @wravery          | windows-rs support, webview2-rs                                                                  | tao/wry                             |
| @liushuyu         | Added headers feature to webkit2gtk                                                              | wry                                 |
| @emirror-de       | System tray support                                                                              | tao                                 |
| @lorenzolewis     | tauri.app updates                                                                                | tauri-docs                          |
| @probablykasper   | Support for more accelerators, restructured documentation                                        | tao, tauri-docs                     |
| @grbd             | Added an example to use tauri as a C++ DLL                                                       | tauri                               |
| @youngsing        | Added macOS vibrancy                                                                             | tauri-plugin-vibrancy               |
| @lemarier         | Updater, menus, system tray, iOS, clipboard api, bytes-stream & ++                               | wry, tao, tauri                     |
| @JonasKruckenberg | Tauri plugin upgrades                                                                            | tauri-plugin-\*                     |
| @ImmaZoni         | Code signing guides for macOS and Windows                                                        | tauri-docs                          |
| @chippers         | Isolation pattern, shell scope, compile-time code generation and several other security features | tauri                               |
| @fabianlars       | Community support, AppImage fixes, code review                                                   | all repos, mainly tauri, tauri-docs |
| @amrbashir        | TAO and WRY features and fixes, overall OS guru                                                  | tao, wry                            |
| @wusyong          | TAO and WRY founder and researcher                                                               | tao, wry                            |

We’d like to wrap up by highlighting comments from just a small handful of Tauri contributors:

### Lucas Nogueira

What feature are you most excited about?

Plugins!

What are you most excited about now that the launch is through?

MOBILE and the upcoming egui integration launch

Any additional comments you'd like to add in?

Thanks to everyone that contributed asking questions in Discord or opening issues and PRs in the repos!!!!

### Wu Yu-Wei

What inspired you to join Tauri?

The motivation is simple. I just want to contribute to some open-source projects.

What feature are you most excited about?

Auto-updater I think. A built-in OTA feature feels pretty handy.

What is your proudest moment/contribution with Tauri?

Published wry crate and particular in this commit:
https://github.com/tauri-apps/wry/commit/722e1212a4795f5f81638667cbd31bc53a5d27ed

What are you most excited about now that the launch is through?

I would like to explore building a browser in Rust again.

### Amr Bashir

What inspired you to join Tauri?

I could write a lot about this, but to cut things short, I was looking for a better alternative to Electron and I found Tauri. It offered a smaller size and faster backend. I started contributing with small PR fixes and helped some people in discord and then came `wry` which was new and missing a lot of features so I started to contribute to that too. I didn't know rust back then but the team was so amazing, they guided me and inspired me to keep going until one day Daniel asked me to join the working group and I was proud to be part of the team.

What feature are you most excited about?

The customizations we offer for the window but that's because it is what I mostly worked on. I am also excited about how tauri will change the mindset of some people and help them build secure apps by default.

What is your proudest moment/contribution with Tauri?

Probably when I removed about 20 lines of code in favor of only 3 lines. I wrote both and that's why it felt special, because it was an indicator of how much I've grown as a developer.

What are you most excited about now that the launch is through?

A new era has begun and there is already awesome things planned for v2 that I can't wait to see

Any additional comments you'd like to add in?

I honestly love you everyone in the team, you're all wholesome and I thank you for what you've done.

### lemarier

What inspired you to join Tauri?

help the team from my previous experiences

What feature are you most excited about?

pretty much everything, getting tauri out of a proof of concept to something stable is a huge milestone.

What is your proudest moment/contribution with Tauri?

tao and all under laying features (menus, trays etc..), benchmarks and the proof of concept for iOS.

What are you most excited about now that the launch is through?

Mobile

### Chip Reed

What inspired you to join Tauri?

I enjoyed the technology stack. The build system bothered me enough to rewrite it to be more in-line with a typical Rust project.

What feature are you most excited about?

Not needing to use `--locked` when installing the CLI.

What is your proudest moment/contribution with Tauri?

Isolation Pattern

What are you most excited about now that the launch is through?

Creating tools to make using Tauri easier from a development perspective.

### Laegel

What inspired you to join Tauri?

Electron, for its inefficiency.

What feature are you most excited about?

It may sound silly but I love customizing stuff, so the possibility to make almost anything with our windows appearance is neat.

What is your proudest moment/contribution with Tauri?

Creating the foundations of Tauri docs as we know them today and trying to provide clean and easy to understand docs.

What are you most excited about now that the launch is through?

That more people get to know Tauri so they can write smaller apps.

Any additional comments you'd like to add in?

I joined Tauri because I was looking for a lightweight alternative to Electron. At this moment, I wasn't expecting I'd be able to learn a lot of different things about programming, how OSS work, meet amazing people and have fun, and have the feeling to be useful by contributing to a tool that helps to reduce our carbon footprint by making lighter apps.

### Kasper Henningsen

What inspired you to join Tauri?

Was making a few Tauri apps, and just found some features/improvements I wanted to go for.

### Fabian-Lars

What inspired you to join Tauri?

I started answering questions on discord out of pure boredom and wasn't able to stop doing that since then. After a while I was asked to join the team and because I really liked the project and the people working on it so I didn't have much of a choice!

What feature are you most excited about?

Is "All of them" a valid answer?

What is your proudest moment/contribution with Tauri?

Hmm, probably when I was asked to join the Team. Fixing AppImages again and again and again is a close second...

What are you most excited about now that the launch is through?

I'm most excited about starting to work on v2 (and beyond) now. The time of RC fatigue is finally over!

### Jonas Kruckenberg

What inspired you to join Tauri?

I was using Electron for a long time, but always struggled with locking it down properly. When I stumbled across Tauri, promising both great security and small apps, I was pretty much instantly hooked.

What feature are you most excited about?

The auto-updater is pretty great but plugins are very dear to me and definitely the most promising feature of Tauri!

What is your proudest moment/contribution with Tauri?

Moderating the tauri-awesome repo. Seeing so many strangers build cool things with and for the work you’ve been doing. That’s a really great feeling.

What are you most excited about now that the launch is through?

Sleep. And all the cool features for v2 and beyond! Tauri devtools, Runtime plugins using WASM and much more. All things that make me really excited for the future!

### Didrik Nordström

What inspired you to join Tauri?

A responsive, competent, helpful and inclusive team.

What feature are you most excited about?

File drag & drop.

What is your proudest moment/contribution with Tauri?

Quality/stability: Tracking down and fixing a segmentation fault: https://github.com/h4llow3En/mac-notification-sys/pull/40

What are you most excited about now that the launch is through?

Getting more users => more bugs reported => more bugs fixed => improved stability.

### secdude

What inspired you to join Tauri?

A thorough approach on multi platform applications with the possibility to harden and isolate the frontend and backend logic. Additionally, a great group of people engaged with it.

What feature are you most excited about?

Conditional compilation of features by default.

What is your proudest moment/contribution with Tauri?

:shrug: v1 I guess

What are you most excited about now that the launch is through?

Mobile expansion, refactoring the core to reduce the complexity and awesome new features.

### Lorenzo Lewis

What feature are you most excited about?

Overall resource efficiency. We've all been where we have a handful of "native" web apps running on our machine and it grinds to a halt. I'm ready for those small bundle sizes!

What is your proudest moment/contribution with Tauri?

The overall tauri.app website. It was in a good place when I joined, but I knew I could help boost it up to the next level. Even things like picking a title for a sidebar can take a long time with all the discussions, but at the end of the day we all have the best output from putting our heads together.

What are you most excited about now that the launch is through?

Working with the community who's using Tauri hands-on. I would love to hear feedback on what's working, what we can improve, and what new features we can add to push Tauri even further.

### Noah Klayman

What inspired you to join Tauri?

I spent a lot of time working on Electron tooling and learned a lot about what not to do in a desktop app framework. Tauri was a chance to use what I learned to build a framework that provides a better developer and user experience.

Launched feature you're most excited about?

Auto-updater. It's really hard to get something that complex right and Tauri has done a fantastic job.

What is your proudest moment/contribution with Tauri?

Getting the custom protocol based asset loader to work, especially on Windows.

What are you most excited about now that the launch is through?

With a completed security audit and stable codebase, enterprise companies can now use Tauri for high-value projects.
