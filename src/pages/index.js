import React from 'react'
import Fade from 'react-reveal/Fade'
import classnames from 'classnames'

import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useThemeContext from '@theme/hooks/useThemeContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Translate, { translate } from '@docusaurus/Translate'

const HeroAnimation = () => {
  const { isDarkTheme } = useThemeContext()

  return (
    <lottie-player
      src={isDarkTheme ? 'tauri-splash.json' : 'tauri-splash-dark.json'}
      background="transparent"
      speed="1"
      style={{ width: '75%', margin: 'auto' }}
      autoplay
    ></lottie-player>
  )
}

const features = [
  [
    {
      imageUrl: 'img/undraw_brownfield.svg',
      label: translate({ message: 'Brownfield' }),
      description: translate({
        message:
          "Compatibility with any front-end framework means you don't have to change your stack",
      }),
    },
    {
      imageUrl: 'img/undraw_open_source.svg',
      label: translate({ message: 'FLOSS' }),
      description: translate({ message: 'Relicensing is possible with Tauri' }),
    },
    {
      imageUrl: 'img/undraw_takeout_boxes.svg',
      label: translate({ message: 'Bundle' }),
      description: translate({
        message: 'Zize of a Tauri App can be less than 600KB',
      }),
    },
  ],
  [
    {
      imageUrl: 'img/undraw_security.svg',
      link: 'docs/about/security',
      label: translate({ message: 'Security' }),
      description: translate({
        message: "Tauri-Team's biggest priority and drives our innovation",
      }),
    },
    {
      imageUrl: 'img/undraw_patterns.svg',
      link: 'docs/guides/patterns/about-patterns',
      label: translate({ message: 'Patterns' }),
      description: translate({
        message:
          'Here to help you choose important features with simple configuration',
      }),
    },
    {
      imageUrl: 'img/undraw_cross_platform.svg',
      link: 'docs/development/cross-platform',
      label: translate({ message: 'Cross-platform' }),
      description: translate({
        message:
          'Bundle binaries for major desktop platforms (mobile & WASM coming soon)',
      }),
    },
  ],
]

function Feature({ imageUrl, link, label, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className="col col--4 feature">
      <div className="card">
        <div className="card__body">
          {imgUrl && (
            <div className="text--center">
              <img className={styles.featureImage} src={imgUrl} alt={label} />
            </div>
          )}
          <h3>{label}</h3>
          <p>{description}</p>
        </div>
        {link && (
          <div className="card__footer">
            <Link to={useBaseUrl(link)}>
              <button className="button button--secondary button--block">
                <Translate>See more</Translate>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

const Roadmap = ({ siteConfig }) => {
  const colors = {
    released: getComputedStyle(document.body).getPropertyValue(
      '--tauri-accent-green'
    ),
    ready: getComputedStyle(document.body).getPropertyValue(
      '--tauri-accent-blue'
    ),
    todo: getComputedStyle(document.body).getPropertyValue(
      '--tauri-accent-orange'
    ),
    milestone: getComputedStyle(document.body).getPropertyValue(
      '--tauri-accent-purple'
    ),
  }
  // See translations for label/description
  const items = [
    {
      label: 'CLI',
      description: translate({
        message: 'Generate, develop and build Tauri apps from the command line',
      }),
      icon: 'bi bi-stars',
      color: colors.released,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'API',
      description: translate({
        message:
          'Finalize, audit, write documentation and create examples for the smoke-tests',
      }),
      icon: 'bi bi-wrench',
      color: colors.released,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Testing & CI',
      description: translate({
        message: 'Implement CI with testing and bundle-pipeline validation',
      }),
      icon: 'bi bi-check-all',
      color: colors.released,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Desktop Bundler',
      description: translate({
        message: 'Bundle for all major desktops from native systems',
      }),
      icon: 'bi bi-boxes',
      color: colors.released,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Alpha Release',
      description: translate({
        message:
          'Technical Release Candidate for desktop, edge cases and bugs acceptable',
      }),
      icon: 'bi bi-flag-fill',
      color: colors.released,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Sidecar',
      description: translate({
        message: 'Integrate and instrument other binaries',
      }),
      icon: 'bi bi-file-earmark-binary-fill',
      color: colors.released,
      targetQuarter: 'Q1 2020',
    },
    {
      label: 'Splashscreen',
      description: translate({
        message: 'Use a splashscreen while the main content is loading',
      }),
      icon: 'bi bi-easel-fill',
      color: colors.released,
      targetQuarter: 'Q1 2020',
    },
    {
      label: 'App Storage',
      description: translate({
        message: 'Use a canonical location to store userdata',
      }),
      icon: 'bi bi-hdd-fill',
      color: colors.released,
      targetQuarter: 'Q2 2020',
    },
    {
      label: 'Native Notifications',
      description: translate({
        message: 'Cross-platform notifications using polyfilled WEB API',
      }),
      icon: 'bi bi-app-indicator',
      color: colors.released,
      targetQuarter: 'Q2 2020',
    },
    {
      label: 'GitHub Action for Building Apps',
      description: translate({
        message:
          'Build your Web application as a Tauri binary for MacOS, Linux and Windows',
      }),
      icon: 'bi bi-github',
      color: colors.released,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'VS Code Extension',
      description: translate({
        message: 'Commands and validate tauri.conf.json',
      }),
      icon: 'bi bi-code',
      color: colors.released,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'Core Plugin System',
      description: translate({
        message: 'Build reusable plugins to extend Tauri core',
      }),
      icon: 'bi bi-plug-fill',
      color: colors.released,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'CLI Updater',
      description: translate({
        message: 'Update core dependencies automatically from the CLI',
      }),
      icon: 'bi bi-arrow-down-up',
      color: colors.released,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'Webview Bindings',
      description: translate({ message: 'New pure Rust Webview bindings' }),
      icon: 'bi bi-arrow-repeat',
      color: colors.released,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Keyboard Shortcuts',
      description: translate({ message: 'Hook and react to keypresses' }),
      icon: 'bi bi-keyboard-fill',
      color: colors.released,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Multi Window',
      description: translate({
        message: 'Run multiple window instances in Tauri',
      }),
      icon: 'bi bi-window-stack',
      color: colors.released,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Rust-based CLI',
      description: translate({ message: 'Create Rust CLI' }),
      icon: 'bi bi-terminal-fill',
      color: colors.released,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Transparent Window',
      description: translate({ message: 'Have transparent windows' }),
      icon: 'bi bi-fullscreen',
      color: colors.released,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Secure Context for Web APIs',
      description: translate({
        message: 'Setup secure context to enable access to restricted APIs',
      }),
      icon: 'bi bi-lock-fill',
      color: colors.released,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Self Updater',
      description: translate({
        message: 'Update Tauri Apps from within Tauri',
      }),
      icon: 'bi bi-box-arrow-in-down',
      color: colors.released,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Window Menus',
      description: translate({
        message: 'Desktop Cross-platform Window Menus',
      }),
      icon: 'bi bi-menu-button',
      color: colors.released,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'App Tray',
      description: translate({ message: 'Desktop Cross-platform Icon Tray' }),
      icon: 'bi bi-menu-up',
      color: colors.released,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'Beta Release',
      description: translate({
        message: 'Generally stable on Desktop, API locked down',
      }),
      icon: 'bi bi-bookmark-check-fill',
      color: colors.released,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'Clipboard',
      description: translate({
        message: 'Enable programmatic and keyboard access to clipboard',
      }),
      icon: 'bi bi-clipboard',
      color: colors.released,
      targetQuarter: 'Q3 2021',
    },
    {
      label: 'Security Audit',
      description: translate({
        message: '3rd party security audit of core libraries',
      }),
      icon: 'bi bi-shield-fill-check',
      color: colors.todo,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'iframe with native API',
      description: translate({
        message:
          'Opt-in feature enabling for iframe dialog with Tauri and the native API',
      }),
      icon: 'bi bi-bounding-box-circles',
      color: colors.todo,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Scoped FileSystem',
      description: translate({
        message: 'For improved security of files interaction',
      }),
      icon: 'bi bi-safe-fill',
      color: colors.todo,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Stable Release',
      description: translate({ message: 'Stable on On all Platforms' }),
      icon: 'bi bi-flag-fill',
      color: colors.milestone,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Channel API',
      description: translate({ message: 'Send messages through a channel' }),
      icon: 'bi bi-chat-dots-fill',
      color: colors.todo,
      targetQuarter: 'Planned',
    },
    {
      label: 'One-Time Commands',
      description: translate({
        message: 'Run a command that is no longer available after first run',
      }),
      icon: 'bi bi-brightness-alt-high-fill',
      color: colors.todo,
      targetQuarter: 'Planned',
    },
    {
      label: 'Deno Bindings',
      description: translate({
        message: "Use Deno to build your App's backend",
      }),
      icon: 'bi bi-box-seam',
      color: colors.todo,
      targetQuarter: 'Planned',
    },
    {
      label: 'Mobile Bundler',
      description: translate({
        message: 'Bundle to all major mobile device operating systems',
      }),
      icon: 'bi bi-phone-fill',
      color: colors.todo,
      targetQuarter: 'Planned',
    },
    {
      label: 'Cross Compiler',
      description: translate({
        message:
          'Generate bundled binaries from select operating system environments',
      }),
      icon: 'bi bi-shuffle',
      color: colors.todo,
      targetQuarter: 'Planned',
    },
    {
      label: 'PureOS App Store',
      description: translate({ message: 'Verified builds for PureOS' }),
      icon: 'bi bi-shop-window',
      color: colors.todo,
      targetQuarter: 'Planned',
    },
    {
      label: 'Other Bindings',
      description: translate({
        message:
          'Go, Nim, Python, C++ and other bindings are possible with the stable API',
      }),
      icon: 'bi bi-globe2',
      color: colors.todo,
      targetQuarter: 'Planned',
    },
    {
      label: 'Alternative Renderer',
      description: translate({
        message:
          'Candidate presentation for Webview Alternatives, including GL windowing',
      }),
      icon: 'bi bi-brush-fill',
      color: colors.todo,
      targetQuarter: 'Planned',
    },
    {
      label: 'Tauri-Frida',
      description: translate({
        message: 'A decompiler and threat analyzer for Tauri Apps, using Frida',
      }),
      icon: 'bi bi-shield-fill-exclamation',
      color: colors.todo,
      targetQuarter: 'Planned',
    },
    {
      label: 'The Future',
      description: translate({
        message:
          'Something missing? Got a great idea? We want you to help us make it happen',
      }),
      icon: 'bi bi-infinity',
      color: colors.todo,
      targetQuarter: translate({ message: '& BEYOND' }),
    },
  ].map((item) => {
    return (
      <li key={item.title}>
        <Fade bottom>
          <div className="icon" style={{ backgroundColor: item.color }}>
            <span className={item.icon}></span>
          </div>
          <div className="content">
            <div className="title">{item.label}</div>
            <div className="description">{item.description}</div>
          </div>
          <div>{item.targetQuarter}</div>
        </Fade>
      </li>
    )
  })

  return (
    <div id="roadmap" className="container anchorify">
      <h2 style={{ textAlign: 'center', position: 'relative' }}>
        <Translate>Roadmap</Translate>
      </h2>
      <p style={{ textAlign: 'center', position: 'relative' }}>
        <Translate>This roadmap is subject to change</Translate>
      </p>
      <ul className="roadmap-legend">
        <li>
          <span style={{ backgroundColor: colors.released }}></span>{' '}
          <Translate>Released</Translate>
        </li>
        <li>
          <span style={{ backgroundColor: colors.ready }}></span>{' '}
          <Translate>Ready</Translate>
        </li>
        <li>
          <span style={{ backgroundColor: colors.todo }}></span>{' '}
          <Translate>To Do</Translate>
        </li>
        <li>
          <span style={{ backgroundColor: colors.milestone }}></span>{' '}
          <Translate>Milestone</Translate>
        </li>
      </ul>
      <ul className="roadmap">{items}</ul>
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
      <header className={classnames(styles.heroBanner)}>
        <div className="container">
          <HeroAnimation />
          <p
            className="hero__subtitle"
            dangerouslySetInnerHTML={{
              __html: translate({
                message:
                  'Build smaller, faster, and more secure <br />desktop applications with a web frontend',
              }),
            }}
          ></p>
          <div className={styles.buttons}>
            <div className="container">
              <div className="row">
                <div className="col col--4 col--offset-2">
                  <Link
                    className={classnames(
                      'button button--outline button--secondary button--lg',
                      styles.about
                    )}
                    to={useBaseUrl('docs/about/intro')}
                  >
                    <span>
                      <Translate>Learn More</Translate>
                    </span>
                  </Link>
                </div>
                <div className="col col--4">
                  <Link
                    className={classnames(
                      'button button--outline button--secondary button--lg',
                      styles.getStarted
                    )}
                    to={useBaseUrl('docs/get-started/intro')}
                  >
                    <span>
                      <Translate>Get Started</Translate>
                    </span>
                  </Link>
                </div>
                <div className="col col--2"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {features && features.length && (
          <section className={classnames('features', styles.features)}>
            <div className="container">
              {features.map((row, index) => {
                return (
                  <div className="row" key={index}>
                    {row.map((props, idx) => (
                      <Feature
                        key={idx}
                        {...props}
                        siteConfig={siteConfig}
                        index={idx + row.length * index}
                      />
                    ))}
                  </div>
                )
              })}
            </div>
          </section>
        )}
        <section className="roadmap-container">
          <Roadmap siteConfig={siteConfig} />
        </section>
      </main>
    </Layout>
  )
}

export default Home
