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
      imageUrl: 'img/undraw_brownfield.svg',
      label: translate({message: 'Brownfield'}),
      description: translate({message: "compatibility with any front-end framework means you don't have to change your stack"}),
    },
    {
      imageUrl: 'img/undraw_open_source.svg',
      label: translate({message: 'FLOSS'}),
      description: translate({message: 'relicensing is possible with Tauri'}),
    },
    {
      imageUrl: 'img/undraw_takeout_boxes.svg',
      label: translate({message: 'Bundle'}),
      description: translate({message: 'size of a Tauri App can be less than 600KB'}),
    },
  ],
  [
    {
      imageUrl: 'img/undraw_security.svg',
      link: 'docs/about/security',
      label: translate({message: 'Security'}),
      description: translate({message: "is the Tauri-Team's biggest priority and drives our innovation"}),
    },
    {
      imageUrl: 'img/index/undraw_patterns.svg',
      link: 'docs/architecture/patterns/about-patterns',
      linkText: translate({ message: 'Learn more' }),
      label: translate({ message: 'Patterns' }),
      description: translate({
        message:
          'Here to help you choose important features with simple configuration',
      }),
    },
    {
      imageUrl: 'img/index/undraw_cross_platform.svg',
      link: 'docs/building/cross-platform',
      linkText: translate({ message: 'Compilation' }),
      label: translate({ message: 'Cross-platform' }),
      description: translate({
        message:
          'Bundle binaries for major desktop platforms (mobile & WASM coming soon)',
      }),
    },
  ]
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
      description: translate({message: "Generate, develop and build Tauri apps from the command line."}),
      icon: 'ti-target',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'API',
      description: translate({message: "Finalize, audit, write documentation and create examples for the smoke-tests."}),
      icon: 'ti-crown',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Testing & CI',
      description: translate({message: "Implement CI with testing and bundle-pipeline validation."}),
      icon: 'ti-pulse',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Desktop Bundler',
      description: translate({message: "Bundle for all major desktops from native systems."}),
      icon: 'ti-desktop',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Alpha Release',
      description: translate({message: "Technical Release Candidate for desktop, edge cases and bugs acceptable."}),
      icon: 'ti-flag-alt',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Sidecar',
      description: translate({message: "Integrate and instrument other binaries."}),
      icon: 'ti-link',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      label: 'Splashscreen',
      description: translate({message: "Use a splashscreen while the main content is loading."}),
      icon: 'ti-blackboard',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      label: 'App Storage',
      description: translate({message: "Use a canonical location to store userdata."}),
      icon: 'ti-share',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
    },
    {
      label: 'Native Notifications',
      description: translate({message: "Cross-platform notifications using polyfilled WEB API."}),
      icon: 'ti-comment-alt',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
    },
    {
      label: 'GH Action for Building Apps',
      description: translate({message: "Build your Web application as a Tauri binary for MacOS, Linux and Windows"}),
      icon: 'ti-arrow-circle-right',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'VS Code Extension',
      description: translate({message: "Commands and validate tauri.conf.json"}),
      icon: 'ti-layout-tab',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'Core Plugin System',
      description: translate({message: "Build reusable plugins to extend Tauri core."}),
      icon: 'ti-control-eject',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'CLI Updater',
      description: translate({message: "Update core dependencies automatically from the CLI."}),
      icon: 'ti-download',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'Webview Bindings',
      description: translate({message: "New pure Rust Webview bindings."}),
      icon: 'ti-loop',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Keyboard Shortcuts',
      description: translate({message: "Hook and react to keypresses."}),
      icon: 'ti-smallcap',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Multi Window',
      description: translate({message: "Run multiple window instances in Tauri."}),
      icon: 'ti-layout-grid3-alt',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Rust-based CLI',
      description: translate({message: "Create Rust CLI."}),
      icon: 'ti-cup',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Transparent Window',
      description: translate({message: "Have transparent windows."}),
      icon: 'ti-layout-sidebar-none',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Secure Context for Web APIs',
      description: translate({message: "Setup secure context to enable access to restricted APIs."}),
      icon: 'ti-lock',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Self Updater',
      description: translate({message: "Update Tauri Apps from within Tauri."}),
      icon: 'ti-download',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Window Menus',
      description: translate({message: "Desktop Cross-platform Window Menus."}),
      icon: 'ti-menu',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'App Tray',
      description: translate({message: "Desktop Cross-platform Icon Tray."}),
      icon: 'ti-panel',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'Beta Release',
      description: translate({message: "Generally stable on Desktop, API locked down."}),
      icon: 'ti-flag-alt',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'Clipboard',
      description: translate({message: "Enable programmatic and keyboard access to clipboard."}),
      icon: 'ti-clipboard',
      color: COLORS.green,
      targetQuarter: 'Q3 2021',
    },
    {
      label: 'Security Audit',
      description: translate({message: "3rd party security audit of core libraries."}),
      icon: 'ti-magnet',
      color: COLORS.blue,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Iframe with native API',
      description: translate({message: "Opt-in feature enabling for iframe dialog with Tauri and the native API."}),
      icon: 'ti-exchange-vertical',
      color: COLORS.blue,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Scoped FileSystem',
      description: translate({message: "For improved security of files interaction."}),
      icon: 'ti-package',
      color: COLORS.blue,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Stable Release',
      description: translate({message: "Stable on On all Platforms."}),
      icon: 'ti-flag-alt',
      color: COLORS.red,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Channel API',
      description: translate({message: "Send messages through a channel."}),
      icon: 'ti-rss-alt',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'One-Time Commands',
      description: translate({message: "Run a command that is no longer available after first run."}),
      icon: 'ti-upload',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'DENO Bindings',
      description: translate({message: "Use Deno to build your App's backend."}),
      icon: 'ti-loop',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Mobile Bundler',
      description: translate({message: "Bundle to all major mobile device operating systems."}),
      icon: 'ti-mobile',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Cross Compiler',
      description: translate({message: "Generate bundled binaries from select operating system environments."}),
      icon: 'ti-control-shuffle',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'PureOS App Store',
      description: translate({message: "Verified builds for PureOS."}),
      icon: 'ti-shine',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Other Bindings',
      description: translate({message: "Go, Nim, Python, C++ and other bindings are possible with the stable API."}),
      icon: 'ti-world',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Alternative Renderer',
      description: translate({message: "Candidate presentation for Webview Alternatives, including GL windowing."}),
      icon: 'ti-direction-alt',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Tauri-Frida',
      description: translate({message: "A decompiler and threat analyzer for Tauri Apps, using Frida."}),
      icon: 'ti-slice',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'The Future',
      description: translate({message: "Something missing? Got a great idea? We want you to help us make it happen."}),
      icon: 'ti-infinite',
      color: COLORS.blue,
      targetQuarter: translate({message: '& BEYOND'})
    },
  ].map((item) => {
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
      <div className={classNames('container', styles.container)}>
        <div className={classNames('row', styles.heroContainer)}>
          <svg
            width="458"
            height="255"
            viewBox="0 0 458 255"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={animationRef}
            className={classNames('headerImage', styles.headerImage)}
          >
            <path
              d="M91.9832 250C89.4165 250 87.3165 249.183 85.6832 247.55C84.2832 245.917 83.5832 243.933 83.5832 241.6V60.3L30.3832 101.25C28.2832 102.65 26.1832 103.233 24.0832 103C21.9832 102.533 20.1165 101.25 18.4832 99.15L3.78315 80.25C2.38315 78.15 1.79982 75.9333 2.03315 73.6C2.49982 71.2667 3.78315 69.4 5.88315 68L84.2832 7.45001C85.6832 6.28335 87.0832 5.58334 88.4832 5.34999C89.8832 5.11666 91.3998 5 93.0332 5H123.833C126.167 5 128.15 5.81667 129.783 7.45001C131.416 9.08334 132.233 11.0667 132.233 13.4V241.6C132.233 243.933 131.416 245.917 129.783 247.55C128.15 249.183 126.167 250 123.833 250H91.9832Z"
              // fill="#F7F7F7"
              stroke="var(--ifm-color-content)"
              strokeWidth="4"
            />
            <path
              d="M186.445 250C184.112 250 182.128 249.183 180.495 247.55C178.862 245.917 178.045 243.933 178.045 241.6V206.95C178.045 204.383 178.862 202.283 180.495 200.65C182.128 199.017 184.112 198.2 186.445 198.2H221.445C223.778 198.2 225.762 199.017 227.395 200.65C229.028 202.283 229.845 204.383 229.845 206.95V241.6C229.845 243.933 229.028 245.917 227.395 247.55C225.762 249.183 223.778 250 221.445 250H186.445Z"
              // fill="#F7F7F7"
              stroke="var(--ifm-color-content)"
              strokeWidth="4"
            />
            <path
              d="M361.737 253.5C345.171 253.5 331.054 251.05 319.387 246.15C307.721 241.25 298.154 234.483 290.687 225.85C283.221 217.217 277.621 207.3 273.887 196.1C270.154 184.667 267.937 172.533 267.237 159.7C267.004 153.4 266.771 146.517 266.537 139.05C266.537 131.35 266.537 123.65 266.537 115.95C266.771 108.25 267.004 101.133 267.237 94.6C267.704 81.7667 269.921 69.75 273.887 58.55C277.854 47.1167 283.571 37.2 291.037 28.8C298.737 20.4 308.421 13.75 320.087 8.85001C331.754 3.95001 345.637 1.5 361.737 1.5C378.071 1.5 392.071 3.95001 403.737 8.85001C415.404 13.75 424.971 20.4 432.437 28.8C440.137 37.2 445.854 47.1167 449.587 58.55C453.554 69.75 455.771 81.7667 456.237 94.6C456.704 101.133 456.937 108.25 456.937 115.95C456.937 123.65 456.937 131.35 456.937 139.05C456.937 146.517 456.704 153.4 456.237 159.7C455.771 172.533 453.671 184.667 449.937 196.1C446.204 207.3 440.604 217.217 433.137 225.85C425.671 234.483 415.987 241.25 404.087 246.15C392.421 251.05 378.304 253.5 361.737 253.5ZM361.737 213.25C376.904 213.25 387.987 208.35 394.987 198.55C402.221 188.517 405.954 174.983 406.187 157.95C406.654 151.183 406.887 144.417 406.887 137.65C406.887 130.65 406.887 123.65 406.887 116.65C406.887 109.65 406.654 103 406.187 96.7C405.954 80.1334 402.221 66.8333 394.987 56.8C387.987 46.5333 376.904 41.4 361.737 41.4C346.804 41.4 335.721 46.5333 328.487 56.8C321.487 66.8333 317.754 80.1334 317.287 96.7C317.287 103 317.171 109.65 316.937 116.65C316.937 123.65 316.937 130.65 316.937 137.65C317.171 144.417 317.287 151.183 317.287 157.95C317.754 174.983 321.604 188.517 328.837 198.55C336.071 208.35 347.037 213.25 361.737 213.25Z"
              stroke="var(--ifm-color-content)"
              strokeWidth="4"
            />
          </svg>
          <div className={styles.heroSubtitle}>
            <Translate>
              Build smaller, faster, and more secure desktop applications with a
              web frontend
            </Translate>
          </div>

          <div className={classNames(styles.heroButton, 'col', 'col--4')}>
            <Link
              className={classNames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/getting-started/prerequisites')}
            >
              <span>
                <Translate>Get Started</Translate>
              </span>
            </Link>
          </div>
        </div>
      </div>
      
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
