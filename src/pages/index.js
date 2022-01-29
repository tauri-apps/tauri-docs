import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Translate, { translate } from '@docusaurus/Translate'
import './index.css'

function Hero() {
  return <div style={{ fontSize: '15rem' }}>1.0</div>
}

function Capabilities() {
  const capabilities = [
    {
      imageUrl: 'img/undraw_brownfield.svg',
      link: 'docs/about/security',
      linkText: translate({ message: 'Frontend Guides' }),
      label: translate({ message: 'Brownfield' }),
      description: translate({
        message:
          "Compatibility with any front-end framework means you don't have to change your stack",
      }),
    },
    {
      imageUrl: 'img/undraw_open_source.svg',
      link: 'docs/about/security',
      linkText: translate({ message: 'Licensing Information' }),
      label: translate({ message: 'FLOSS' }),
      description: translate({ message: 'Relicensing is possible with Tauri' }),
    },
    {
      imageUrl: 'img/undraw_takeout_boxes.svg',
      link: 'docs/about/security',
      linkText: translate({ message: 'Benchmarks' }),
      label: translate({ message: 'Bundle' }),
      description: translate({
        message: 'Size of a Tauri App can be less than 600KB',
      }),
    },
    {
      imageUrl: 'img/undraw_security.svg',
      link: 'docs/about/security',
      linkText: translate({ message: 'Ethos' }),
      label: translate({ message: 'Security' }),
      description: translate({
        message: "Tauri-Team's biggest priority and drives our innovation",
      }),
    },
    {
      imageUrl: 'img/undraw_patterns.svg',
      link: 'docs/guides/patterns/about-patterns',
      linkText: translate({ message: 'Learn more' }),
      label: translate({ message: 'Patterns' }),
      description: translate({
        message:
          'Here to help you choose important features with simple configuration',
      }),
    },
    {
      imageUrl: 'img/undraw_cross_platform.svg',
      link: 'docs/development/cross-platform',
      linkText: translate({ message: 'Compilation' }),
      label: translate({ message: 'Cross-platform' }),
      description: translate({
        message:
          'Bundle binaries for major desktop platforms (mobile & WASM coming soon)',
      }),
    },
  ]

  return (
    <div>
      {capabilities.map((capability, index) => {
        return (
          <div className="row capability" key={index}>
            <div className="col col--5">
              <h2 className="label">{capability.label}</h2>
              <h3>{capability.description}</h3>
              <h4 className="link">
                <Link to={capability.link}>{capability.linkText}</Link>
              </h4>
            </div>
            <div className="col col--4 col--offset-3 imageCol">
              <img
                className={'image'}
                src={useBaseUrl(capability.imageUrl)}
                alt={capability.label}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function IconItem(props) {
  return (
    <div className="col col--4" id={props.index}>
      <div className="icon">
        <span className={props.item.icon}></span>
      </div>
      <div className="content">
        <h3 className="title">{props.item.label}</h3>
        <div className="description">{props.item.description}</div>
      </div>
    </div>
  )
}

function Features() {
  const items = [
    {
      label: 'CLI',
      description: translate({
        message: 'Generate, develop and build Tauri apps from the command line',
      }),
      icon: 'bi bi-stars',
    },
    {
      label: 'API',
      description: translate({
        message:
          'Finalize, audit, write documentation and create examples for the smoke-tests',
      }),
      icon: 'bi bi-wrench',
    },
    {
      label: 'Testing & CI',
      description: translate({
        message: 'Implement CI with testing and bundle-pipeline validation',
      }),
      icon: 'bi bi-check-all',
    },
    {
      label: 'Desktop Bundler',
      description: translate({
        message: 'Bundle for all major desktops from native systems',
      }),
      icon: 'bi bi-boxes',
    },
    {
      label: 'Alpha Release',
      description: translate({
        message:
          'Technical Release Candidate for desktop, edge cases and bugs acceptable',
      }),
      icon: 'bi bi-flag-fill',
    },
    {
      label: 'Sidecar',
      description: translate({
        message: 'Integrate and instrument other binaries',
      }),
      icon: 'bi bi-file-earmark-binary-fill',
    },
    {
      label: 'Splashscreen',
      description: translate({
        message: 'Use a splashscreen while the main content is loading',
      }),
      icon: 'bi bi-easel-fill',
    },
    {
      label: 'App Storage',
      description: translate({
        message: 'Use a canonical location to store userdata',
      }),
      icon: 'bi bi-hdd-fill',
    },
    {
      label: 'Native Notifications',
      description: translate({
        message: 'Cross-platform notifications using polyfilled WEB API',
      }),
      icon: 'bi bi-app-indicator',
    },
    {
      label: 'GitHub Action for Building Apps',
      description: translate({
        message:
          'Build your Web application as a Tauri binary for MacOS, Linux and Windows',
      }),
      icon: 'bi bi-github',
    },
    {
      label: 'VS Code Extension',
      description: translate({
        message: 'Commands and validate tauri.conf.json',
      }),
      icon: 'bi bi-code',
    },
    {
      label: 'Core Plugin System',
      description: translate({
        message: 'Build reusable plugins to extend Tauri core',
      }),
      icon: 'bi bi-plug-fill',
    },
    {
      label: 'CLI Updater',
      description: translate({
        message: 'Update core dependencies automatically from the CLI',
      }),
      icon: 'bi bi-arrow-down-up',
    },
    {
      label: 'Webview Bindings',
      description: translate({ message: 'New pure Rust Webview bindings' }),
      icon: 'bi bi-arrow-repeat',
    },
    {
      label: 'Keyboard Shortcuts',
      description: translate({ message: 'Hook and react to keypresses' }),
      icon: 'bi bi-keyboard-fill',
    },
    {
      label: 'Multi Window',
      description: translate({
        message: 'Run multiple window instances in Tauri',
      }),
      icon: 'bi bi-window-stack',
    },
    {
      label: 'Rust-based CLI',
      description: translate({ message: 'Create Rust CLI' }),
      icon: 'bi bi-terminal-fill',
    },
    {
      label: 'Transparent Window',
      description: translate({ message: 'Have transparent windows' }),
      icon: 'bi bi-fullscreen',
    },
    {
      label: 'Secure Context for Web APIs',
      description: translate({
        message: 'Setup secure context to enable access to restricted APIs',
      }),
      icon: 'bi bi-lock-fill',
    },
    {
      label: 'Self Updater',
      description: translate({
        message: 'Update Tauri Apps from within Tauri',
      }),
      icon: 'bi bi-box-arrow-in-down',
    },
    {
      label: 'Window Menus',
      description: translate({
        message: 'Desktop Cross-platform Window Menus',
      }),
      icon: 'bi bi-menu-button',
    },
    {
      label: 'App Tray',
      description: translate({ message: 'Desktop Cross-platform Icon Tray' }),
      icon: 'bi bi-menu-up',
    },
    {
      label: 'Beta Release',
      description: translate({
        message: 'Generally stable on Desktop, API locked down',
      }),
      icon: 'bi bi-bookmark-check-fill',
    },
    {
      label: 'Clipboard',
      description: translate({
        message: 'Enable programmatic and keyboard access to clipboard',
      }),
      icon: 'bi bi-clipboard',
    },
  ]

  return (
    <div className="row">
      <h2>Features</h2>
      <div className="feature row">
        {items.map((item, index) => {
          return <IconItem item={item} index={index} />
        })}
      </div>
    </div>
  )
}

function Roadmap() {
  // See translations for label/description
  const items = [
    {
      label: 'Security Audit',
      description: translate({
        message: '3rd party security audit of core libraries',
      }),
      icon: 'bi bi-shield-fill-check',
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'iframe with native API',
      description: translate({
        message:
          'Opt-in feature enabling for iframe dialog with Tauri and the native API',
      }),
      icon: 'bi bi-bounding-box-circles',
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Scoped FileSystem',
      description: translate({
        message: 'For improved security of files interaction',
      }),
      icon: 'bi bi-safe-fill',
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Stable Release',
      description: translate({ message: 'Stable on On all Platforms' }),
      icon: 'bi bi-flag-fill',
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Channel API',
      description: translate({ message: 'Send messages through a channel' }),
      icon: 'bi bi-chat-dots-fill',
      targetQuarter: 'Planned',
    },
    {
      label: 'One-Time Commands',
      description: translate({
        message: 'Run a command that is no longer available after first run',
      }),
      icon: 'bi bi-brightness-alt-high-fill',
      targetQuarter: 'Planned',
    },
    {
      label: 'Deno Bindings',
      description: translate({
        message: "Use Deno to build your App's backend",
      }),
      icon: 'bi bi-box-seam',
      targetQuarter: 'Planned',
    },
    {
      label: 'Mobile Bundler',
      description: translate({
        message: 'Bundle to all major mobile device operating systems',
      }),
      icon: 'bi bi-phone-fill',
      targetQuarter: 'Planned',
    },
    {
      label: 'Cross Compiler',
      description: translate({
        message:
          'Generate bundled binaries from select operating system environments',
      }),
      icon: 'bi bi-shuffle',
      targetQuarter: 'Planned',
    },
    {
      label: 'PureOS App Store',
      description: translate({ message: 'Verified builds for PureOS' }),
      icon: 'bi bi-shop-window',
      targetQuarter: 'Planned',
    },
    {
      label: 'Other Bindings',
      description: translate({
        message:
          'Go, Nim, Python, C++ and other bindings are possible with the stable API',
      }),
      icon: 'bi bi-globe2',
      targetQuarter: 'Planned',
    },
    {
      label: 'Alternative Renderer',
      description: translate({
        message:
          'Candidate presentation for Webview Alternatives, including GL windowing',
      }),
      icon: 'bi bi-brush-fill',
      targetQuarter: 'Planned',
    },
    {
      label: 'Tauri-Frida',
      description: translate({
        message: 'A decompiler and threat analyzer for Tauri Apps, using Frida',
      }),
      icon: 'bi bi-shield-fill-exclamation',
      targetQuarter: 'Planned',
    },
    {
      label: 'The Future',
      description: translate({
        message:
          'Something missing? Got a great idea? We want you to help us make it happen',
      }),
      icon: 'bi bi-infinity',
      targetQuarter: translate({ message: '& BEYOND' }),
    },
  ]

  return (
    <div className="row">
      <h2>Roadmap</h2>
      <div className="roadmap row">
        {items.map((item, index) => {
          return <IconItem item={item} index={index} />
        })}
      </div>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description={translate({
        message:
          'Tauri is a framework for building tiny, blazing fast binaries for all major desktop platforms. Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface.',
      })}
    >
      <div className="container">
        <header>
          <div className="row">
            <Hero />
          </div>

          <p className="hero__subtitle row">
            <Translate>
              Build smaller, faster, and more secure desktop applications with a
              web frontend
            </Translate>
          </p>

          <div className="row">
            <div className="col col--4">
              <Link
                className={
                  'button button--outline button--secondary button--lg about'
                }
                to={useBaseUrl('docs/about/intro')}
              >
                <span>
                  <Translate>Learn More</Translate>
                </span>
              </Link>
            </div>
            <div className="col col--4">
              <Link
                className={
                  'button button--outline button--secondary button--lg getStarted'
                }
                to={useBaseUrl('docs/get-started/intro')}
              >
                <span>
                  <Translate>Get Started</Translate>
                </span>
              </Link>
            </div>
          </div>
        </header>

        <main>
          <section>
            <Capabilities />
          </section>

          <section>
            <Features />
          </section>

          <section>
            <Roadmap />
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default Home
