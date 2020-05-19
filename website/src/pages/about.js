import React from 'react'
import Layout from '@theme/Layout'

function About() {
  return (
    <Layout title="About">
      <div className="container margin-vert--lg">
        <h1 id="What-is-Tauri">What is Tauri?</h1>
        <p>
          Tauri is a toolkit that helps developers make applications for the
          major desktop platforms - using virtually any frontend framework in
          existence. The core is built with Rust and the CLI leverages Node.js
          making Tauri a genuinely polyglot approach to creating and maintaining
          great apps.
        </p>
        <p>
          If you want to know more about the technical details, then please
          visit the{' '}
          <a href="/docs/getting-started/intro">
            Introduction
          </a>
          . If you want to know more about this project’s philosophy - then keep
          reading.
        </p>
        <p>
          <a href="/" target="_blank" rel="noopener">
            VIDEO EMBED
          </a>
        </p>
        <h2 id="Security-First">Security First</h2>
        <p>
          In today’s world, every honest threat model assumes that the user’s
          device has already been compromised. This puts app developers in a
          complicated situation, because if the device is already at risk, how
          can the software be trusted?
        </p>
        <p>
          Defense in depth is the approach we’ve taken. We want you to be able
          to take every precaution possible to minimise the surface area you
          present to attackers. Tauri lets you choose which API endpoints to
          ship, whether or not you want a localhost server built into your app,
          and it even randomizes functional handles at runtime. These and other
          techniques form a secure baseline that empowers you and your users.
        </p>
        <p>
          Slowing down attackers by making static attacks crushingly difficult
          and isolating systems from one another is the name of the game. And if
          you are coming from the Electron ecosystem - rest assured - by default
          Tauri only ships binaries, not ASAR files.
        </p>
        <p>
          By chosing to build Tauri with security as a guiding force, we give
          you every opportunity to take a proactive security posture.
        </p>
        <h2 id="Polyglots-not-Silos">Polyglots, not Silos</h2>
        <p>
          Most contemporary frameworks use a single language paradigm and are
          therefore trapped in a bubble of knowledge and idiom. This can work
          well for certain niche applications, but it also fosters a kind of
          tribalism.
        </p>
        <p>
          This can be seen in the way that the React, Angular and Vue
          development communities huddle on their stacks, ultimately breeding
          very little cross-pollination.
        </p>
        <p>
          This same situation can be seen in the Rust vs Node vs C++
          battlefields, where hardliners take their stances and refuse to
          collaborate across communities.
        </p>
        <p>
          Today, Tauri uses Rust for the backend - but in the not too distant
          future, other backends like Go, Nim, Python, Csharp etc. will be
          possible. This is because we are maintaining the offical Rust bindings
          to the{' '}
          <a href="https://github.com/webview" target="_blank" rel="noopener">
            webview
          </a>{' '}
          organisation and plan to let you switch out the backend for your
          needs. Since our API can be implemented in any language with C
          interop, full compliance is only a PR away.
        </p>
        <h2 id="Honest-Open-Source">Honest Open Source</h2>
        <p>
          None of this would make any sense without a community. Today software
          communities are amazing places where people help each other and make
          awesome things - open source is a very big part of that.
        </p>
        <p>
          Open source means different things to different people, but most will
          agree that it serves to support freedom. When software doesn’t respect
          your rights, then it can seem unfair and potentially compromise your
          freedoms by operating in unethical ways.
        </p>
        <p>
          This is why we are proud that FLOSS advocates can build applications
          with Tauri that are “certifiably” open source and can be included in
          FSF endorsed GNU/Linux distributions.
        </p>
        <h2 id="The-Future">The Future</h2>
        <p>
          Tauri’s future depends on your involvement and contributions. Try it
          out, file issues, join a working group or make a donation - every
          contribution is important. Please, at any rate, do get in touch!!!
        </p>
      </div>
    </Layout>
  )
}

export default About
