import React from 'react'
import Fade from 'react-reveal/Fade'
import classnames from 'classnames'

import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Translate, { translate } from '@docusaurus/Translate'

// See translations for label and description
const features = [
  [
    {
      label: translate({message: "Brownfield"}),
      description: translate({message: "Compatibility with any front-end framework means you don't have to change your stack"}),
      imageUrl: 'img/undraw_brownfield.svg',
    },
    {
      label: translate({message: "FLOSS"}),
      description: translate({message: "Relicensing is possible with Tauri"}),
      imageUrl: 'img/undraw_open_source.svg',
    },
    {
      label: translate({message: "Bundle"}),
      description: translate({message: "Size of a Tauri App can be less than 600KB"}),
      imageUrl: 'img/undraw_takeout_boxes.svg',
    },
  ],
  [
    {
      label: translate({message: "Security"}),
      description: translate({message: "Tauri-Team's biggest priority and drives our innovation"}),
      imageUrl: 'img/undraw_security.svg',
      link: 'docs/about/security',
    },
    {
      label: translate({message: "Patterns"}),
      description: translate({message: "Here to help choose important features with simple configuration"}),
      imageUrl: 'img/undraw_patterns.svg',
      link: 'docs/usage/patterns/about-patterns',
    },
    {
      label: translate({message: "Cross-platform Compilation"}),
      description: translate({message: "Allows to bundle binaries for major desktop platforms (mobile & WASM coming soon)"}),
      imageUrl: 'img/undraw_cross_platform.svg',
      link: 'docs/usage/ci-cd/cross-platform',
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
              <img
                className={styles.featureImage}
                src={imgUrl}
                alt={
                  label
                }
              />
            </div>
          )}
          <h3>
            {label}
          </h3>
          <p>
            {
              description
            }
          </p>
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
  const COLORS = {
    green: '#48f9c7',
    blue: '#2945ff',
    sky: '#63daf7',
    red: '#ff8e13',
  }
  // See translations for label/description
  const items = [
    {
      label: 'CLI',
      icon: 'ti-target',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
      description: 'Generate, develop and build Tauri apps from the command line.'
    },
    {
      label: 'API',
      icon: 'ti-crown',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
      description: 'Finalize, audit, write documentation and create examples for the smoke-tests.'
    },
    {
      label: 'Testing & CI',
      icon: 'ti-pulse',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
      description: 'Implement CI with testing and bundle-pipeline validation.'
    },
    {
      label: 'Desktop Bundler',
      icon: 'ti-desktop',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
      description: 'Bundle for all major desktops from native systems.'
    },
    {
      label: 'Alpha Release',
      icon: 'ti-flag-alt',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
      description: 'Technical Release Candidate for desktop, edge cases and bugs acceptable.'
    },
    {
      label: 'Sidecar',
      icon: 'ti-link',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
      description: 'Integrate and instrument other binaries.'
    },
    {
      label: 'Splashscreen',
      icon: 'ti-blackboard',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
      description: 'Use a splashscreen while the main content is loading.'
    },
    {
      label: 'App Storage',
      icon: 'ti-share',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
      description: 'Use a canonical location to store userdata.'
    },
    {
      label: 'Native Notifications',
      icon: 'ti-comment-alt',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
      description: 'Cross-platform notifications using polyfilled WEB API.'
    },
    {
      label: 'GH Action for Building Apps',
      icon: 'ti-arrow-circle-right',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
      description: 'Build your Web application as a Tauri binary for MacOS, Linux and Windows'
    },
    {
      label: 'VS Code Extension',
      icon: 'ti-layout-tab',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
      description: 'Commands and validate tauri.conf.json'
    },
    {
      label: 'Core Plugin System',
      icon: 'ti-control-eject',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
      description: 'Build reusable plugins to extend Tauri core.'
    },
    {
      label: 'CLI Updater',
      icon: 'ti-download',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
      description: 'Update core dependencies automatically from the CLI.'
    },
    {
      label: 'Webview Bindings',
      icon: 'ti-loop',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
      description: 'New pure Rust Webview bindings.'
    },
    {
      label: 'Keyboard Shortcuts',
      icon: 'ti-smallcap',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
      description: 'Hook and react to keypresses.'
    },
    {
      label: 'Multi Window',
      icon: 'ti-layout-grid3-alt',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
      description: 'Run multiple window instances in Tauri.'
    },
    {
      label: 'Rust-based CLI',
      icon: 'ti-cup',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
      description: 'Create Rust CLI.'
    },
    {
      label: 'Transparent Window',
      icon: 'ti-layout-sidebar-none',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
      description: 'Have transparent windows.'
    },
    {
      label: 'Secure Context for Web APIs',
      icon: 'ti-lock',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
      description: 'Setup secure context to enable access to restricted APIs.'
    },
    {
      label: 'Self Updater',
      icon: 'ti-download',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
      description: 'Update Tauri Apps from within Tauri.'
    },
    {
      label: 'Window Menus',
      icon: 'ti-menu',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
      description: 'Desktop Cross-platform Window Menus.'
    },
    {
      label: 'App Tray',
      icon: 'ti-panel',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
      description: 'Desktop Cross-platform Icon Tray.'
    },
    {
      label: 'Beta Release',
      icon: 'ti-flag-alt',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
      description: 'Generally stable on Desktop, API locked down.'
    },
    {
      label: 'Clipboard',
      icon: 'ti-clipboard',
      color: COLORS.green,
      targetQuarter: 'Q3 2021',
      description: 'Enable programmatic and keyboard access to clipboard.'
    },
    {
      label: 'Security Audit',
      icon: 'ti-magnet',
      color: COLORS.blue,
      targetQuarter: 'Q1 2022',
      description: '3rd party security audit of core libraries.'
    },
    {
      label: 'Iframe with native API',
      icon: 'ti-exchange-vertical',
      color: COLORS.blue,
      targetQuarter: 'Q1 2022',
      description: 'Opt-in feature enabling for iframe dialog with Tauri and the native API.'
    },
    {
      label: 'Scoped FileSystem',
      icon: 'ti-package',
      color: COLORS.blue,
      targetQuarter: 'Q1 2022',
      description: 'For improved security of files interaction.'
    },
    {
      label: 'Stable Release',
      icon: 'ti-flag-alt',
      color: COLORS.red,
      targetQuarter: 'Q1 2022',
      description: 'Stable on On all Platforms.'
    },
    {
      label: 'Channel API',
      icon: 'ti-rss-alt',
      color: COLORS.blue,
      targetQuarter: 'Planned',
      description: 'Send messages through a channel.'
    },
    {
      label: 'One-Time Commands',
      icon: 'ti-upload',
      color: COLORS.blue,
      targetQuarter: 'Planned',
      description: 'Run a command that is no longer available after first run.'
    },
    {
      label: 'DENO Bindings',
      icon: 'ti-loop',
      color: COLORS.blue,
      targetQuarter: 'Planned',
      description: "Use Deno to build your App's backend."
    },
    {
      label: 'Mobile Bundler',
      icon: 'ti-mobile',
      color: COLORS.blue,
      targetQuarter: 'Planned',
      description: 'Bundle to all major mobile device operating systems.'
    },
    {
      label: 'Cross Compiler',
      icon: 'ti-control-shuffle',
      color: COLORS.blue,
      targetQuarter: 'Planned',
      description: 'Generate bundled binaries from select operating system environments.'
    },
    {
      label: 'PureOS App Store',
      icon: 'ti-shine',
      color: COLORS.blue,
      targetQuarter: 'Planned',
      description: 'Verified builds for PureOS.'
    },
    {
      label: 'Other Bindings',
      icon: 'ti-world',
      color: COLORS.blue,
      targetQuarter: 'Planned',
      description: 'Go, Nim, Python, C++ and other bindings are possible with the stable API.'
    },
    {
      label: 'Alternative Renderer',
      icon: 'ti-direction-alt',
      color: COLORS.blue,
      targetQuarter: 'Planned',
      description: 'Candidate presentation for Webview Alternatives, including GL windowing.'
    },
    {
      label: 'Tauri-Frida',
      icon: 'ti-slice',
      color: COLORS.blue,
      targetQuarter: 'Planned',
      description: 'A decompiler and threat analyzer for Tauri Apps, using Frida.'
    },
    {
      label: 'The Future',
      icon: 'ti-infinite',
      color: COLORS.blue,
      targetQuarter: translate({message: "& BEYOND"}),
      description: 'Something missing? Got a great idea? We want you to help us make it happen.'
    },
  ].map((item, index) => {
    return (
      <li key={item.title}>
        <Fade bottom>
          <div className="icon" style={{ backgroundColor: item.color }}>
            <span className={item.icon}></span>
          </div>
          <div className="content">
            <div className="title">
              {item.label}
            </div>
            <div className="description">
              {
                item.description
              }
            </div>
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
        <Translate>Notice: This roadmap is subject to change.</Translate>
      </p>
      <ul className="roadmap-legend">
        <li>
          <span style={{ backgroundColor: COLORS.green }}></span>{' '}
          <Translate>Released</Translate>
        </li>
        <li>
          <span style={{ backgroundColor: COLORS.sky }}></span>{' '}
          <Translate>Ready</Translate>
        </li>
        <li>
          <span style={{ backgroundColor: COLORS.blue }}></span>{' '}
          <Translate>To Do</Translate>
        </li>
        <li>
          <span style={{ backgroundColor: COLORS.red }}></span>{' '}
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
      description={translate({message: "Tauri is a framework for building tiny, blazing fast binaries for all major desktop platforms. Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface."})}
    >
      <header className={classnames('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <lottie-player
            src="tauri-splash.json"
            background="transparent"
            speed="1"
            style={{width: "75%", margin: "auto"}}
            autoplay
          ></lottie-player>
          <p
            className="hero__subtitle"
            dangerouslySetInnerHTML={{
              __html: translate({message: "Build smaller, faster, and more secure <br />desktop applications with a web frontend"}),
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
                      <Translate>Learn more</Translate>
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
                      <Translate>Get started</Translate>
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
              <div className="row">
              </div>
              {features.map((row, index) => {
                return (
                  <div className="row" key={index}>
                    {row.map((props) => (
                      <Feature {...props} />
                      // <Feature
                      //   key={idx}
                      //   {...props}
                      //   index={idx + row.length * index}
                      // />
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
