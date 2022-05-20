import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import classNames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './index/styles.module.css'
import Translate, { translate } from '@docusaurus/Translate'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { useLatestVersion } from '@docusaurus/plugin-content-docs/client'

// See translations for label and description
const features = [
  [
    {
      imageUrl: 'img/undraw_brownfield.svg',
      label: translate({ message: 'Brownfield' }),
      description: translate({
        message:
          "compatibility with any front-end framework means you don't have to change your stack",
      }),
    },
    {
      imageUrl: 'img/undraw_open_source.svg',
      label: translate({ message: 'FLOSS' }),
      description: translate({ message: 'relicensing is possible with Tauri' }),
    },
    {
      imageUrl: 'img/undraw_takeout_boxes.svg',
      label: translate({ message: 'Bundle' }),
      description: translate({
        message: 'size of a Tauri App can be less than 600KB',
      }),
    },
  ],
  [
    {
      imageUrl: 'img/undraw_security.svg',
      link: '/about/security',
      label: translate({ message: 'Security' }),
      description: translate({
        message:
          "is the Tauri-Team's biggest priority and drives our innovation",
      }),
    },
    {
      imageUrl: 'img/undraw_recipes.svg',
      link: '/guides/architecture/inter-process-communication',
      linkText: translate({ message: 'Learn more' }),
      label: translate({ message: 'Recipes' }),
      description: translate({
        message:
          'Here to help you choose important features with simple configuration',
      }),
    },
    {
      imageUrl: 'img/undraw_cross_platform.svg',
      link: '/guides/building/cross-platform',
      linkText: translate({ message: 'Compilation' }),
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
  const latestVersion = useLatestVersion()

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
            <Link to={latestVersion.path + link}>
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

const Roadmap = () => {
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
      description: translate({
        message:
          'Generate, develop and build Tauri apps from the command line.',
      }),
      icon: 'ti-target',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'API',
      description: translate({
        message:
          'Finalize, audit, write documentation and create examples for the smoke-tests.',
      }),
      icon: 'ti-crown',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Testing & CI',
      description: translate({
        message: 'Implement CI with testing and bundle-pipeline validation.',
      }),
      icon: 'ti-pulse',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Desktop Bundler',
      description: translate({
        message: 'Bundle for all major desktops from native systems.',
      }),
      icon: 'ti-desktop',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Alpha Release',
      description: translate({
        message:
          'Technical Release Candidate for desktop, edge cases and bugs acceptable.',
      }),
      icon: 'ti-flag-alt',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Sidecar',
      description: translate({
        message: 'Integrate and instrument other binaries.',
      }),
      icon: 'ti-link',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      label: 'Splashscreen',
      description: translate({
        message: 'Use a splashscreen while the main content is loading.',
      }),
      icon: 'ti-blackboard',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      label: 'App Storage',
      description: translate({
        message: 'Use a canonical location to store userdata.',
      }),
      icon: 'ti-share',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
    },
    {
      label: 'Native Notifications',
      description: translate({
        message: 'Cross-platform notifications using polyfilled WEB API.',
      }),
      icon: 'ti-comment-alt',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
    },
    {
      label: 'GH Action for Building Apps',
      description: translate({
        message:
          'Build your Web application as a Tauri binary for MacOS, Linux and Windows',
      }),
      icon: 'ti-arrow-circle-right',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'VS Code Extension',
      description: translate({
        message: 'Commands and validate tauri.conf.json',
      }),
      icon: 'ti-layout-tab',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'Core Plugin System',
      description: translate({
        message: 'Build reusable plugins to extend Tauri core.',
      }),
      icon: 'ti-control-eject',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'CLI Updater',
      description: translate({
        message: 'Update core dependencies automatically from the CLI.',
      }),
      icon: 'ti-download',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'Webview Bindings',
      description: translate({ message: 'New pure Rust Webview bindings.' }),
      icon: 'ti-loop',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Keyboard Shortcuts',
      description: translate({ message: 'Hook and react to keypresses.' }),
      icon: 'ti-smallcap',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Multi Window',
      description: translate({
        message: 'Run multiple window instances in Tauri.',
      }),
      icon: 'ti-layout-grid3-alt',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Rust-based CLI',
      description: translate({ message: 'Create Rust CLI.' }),
      icon: 'ti-cup',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Transparent Window',
      description: translate({ message: 'Have transparent windows.' }),
      icon: 'ti-layout-sidebar-none',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Secure Context for Web APIs',
      description: translate({
        message: 'Setup secure context to enable access to restricted APIs.',
      }),
      icon: 'ti-lock',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Self Updater',
      description: translate({
        message: 'Update Tauri Apps from within Tauri.',
      }),
      icon: 'ti-download',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Window Menus',
      description: translate({
        message: 'Desktop Cross-platform Window Menus.',
      }),
      icon: 'ti-menu',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'App Tray',
      description: translate({ message: 'Desktop Cross-platform Icon Tray.' }),
      icon: 'ti-panel',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'Beta Release',
      description: translate({
        message: 'Generally stable on Desktop, API locked down.',
      }),
      icon: 'ti-flag-alt',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'Clipboard',
      description: translate({
        message: 'Enable programmatic and keyboard access to clipboard.',
      }),
      icon: 'ti-clipboard',
      color: COLORS.green,
      targetQuarter: 'Q3 2021',
    },
    {
      label: 'Security Audit',
      description: translate({
        message: '3rd party security audit of core libraries.',
      }),
      icon: 'ti-magnet',
      color: COLORS.green,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Isolation pattern',
      description: translate({
        message: 'Mechanism to secure the IPC from malicious third-party code.',
      }),
      icon: 'ti-exchange-vertical',
      color: COLORS.green,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Scoped FileSystem',
      description: translate({
        message: 'For improved security of files interaction.',
      }),
      icon: 'ti-package',
      color: COLORS.green,
      targetQuarter: 'Q1 2022',
    },
    {
      label: 'Stable Release',
      description: translate({ message: 'Stable on On all Platforms.' }),
      icon: 'ti-flag-alt',
      color: COLORS.red,
      targetQuarter: 'April 2022',
    },
    {
      label: 'Channel API',
      description: translate({ message: 'Send messages through a channel.' }),
      icon: 'ti-rss-alt',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'One-Time Commands',
      description: translate({
        message: 'Run a command that is no longer available after first run.',
      }),
      icon: 'ti-upload',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'DENO Bindings',
      description: translate({
        message: "Use Deno to build your App's backend.",
      }),
      icon: 'ti-loop',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Mobile Bundler',
      description: translate({
        message: 'Bundle to all major mobile device operating systems.',
      }),
      icon: 'ti-mobile',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Cross Compiler',
      description: translate({
        message:
          'Generate bundled binaries from select operating system environments.',
      }),
      icon: 'ti-control-shuffle',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'PureOS App Store',
      description: translate({ message: 'Verified builds for PureOS.' }),
      icon: 'ti-shine',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Other Bindings',
      description: translate({
        message:
          'Go, Nim, Python, C++ and other bindings are possible with the stable API.',
      }),
      icon: 'ti-world',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Alternative Renderer',
      description: translate({
        message:
          'Candidate presentation for Webview Alternatives, including GL windowing.',
      }),
      icon: 'ti-direction-alt',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Tauri-Frida',
      description: translate({
        message:
          'A decompiler and threat analyzer for Tauri Apps, using Frida.',
      }),
      icon: 'ti-slice',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'The Future',
      description: translate({
        message:
          'Something missing? Got a great idea? We want you to help us make it happen.',
      }),
      icon: 'ti-infinite',
      color: COLORS.blue,
      targetQuarter: translate({ message: '& BEYOND' }),
    },
  ].map((item) => {
    return (
      <li key={item.label}>
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

function PremiumSponsors() {
  // All logos should be a svg with a 500x100 frame (content resized inside
  // with padding to appear balanced).
  const items = [
    {
      name: '1Password',
      link: 'https://1password.com',
      logoMonochrome: '1Password_monochrome.svg',
      logoColorDark: '1Password_color_dark.svg',
      logoColorLight: '1Password_color_light.svg',
    },
    {
      name: 'PACKT',
      link: 'https://www.packtpub.com',
      logoMonochrome: 'packt_monochrome.svg',
      logoColorDark: 'packt_color_dark.svg',
      logoColorLight: 'packt_color_light.svg',
    },
    {
      name: 'Cloudflare',
      link: 'https://www.cloudflare.com',
      logoMonochrome: 'Cloudflare_monochrome.svg',
      logoColorDark: 'Cloudflare_color_dark.svg',
      logoColorLight: 'Cloudflare_color_light.svg',
    },
    {
      name: 'nlnet',
      link: 'https://nlnet.nl',
      logoMonochrome: 'nlnet_monochrome.svg',
      logoColorDark: 'nlnet_color_dark.svg',
      logoColorLight: 'nlnet_color_light.svg',
    },
  ]

  return (
    <div>
      <h1 className={styles.heading}>Premium Sponsors</h1>
      <div className={classNames('row', styles.row)}>
        {items.map((item, index) => {
          return <Logo brand={item} key={item.name + item.link} />
        })}
      </div>
    </div>
  )
}

function Sponsors() {
  // All logos should be a svg with a 500x100 frame (content resized inside
  // with padding to appear balanced).
  const items = [
    {
      name: 'DigitalOcean',
      link: 'https://www.digitalocean.com',
      logoColorDark: 'DigitalOcean_color_dark.svg',
      logoColorLight: 'DigitalOcean_color_light.svg',
      logoMonochrome: 'DigitalOcean_monochrome.svg',
    },
    {
      name: 'Netlify',
      link: 'https://www.netlify.com',
      logoColorDark: 'Netlify_color_dark.svg',
      logoColorLight: 'Netlify_color_light.svg',
      logoMonochrome: 'Netlify_monochrome.svg',
    },
    {
      name: 'keygen',
      link: 'https://keygen.sh',
      logoColorDark: 'keygen_color_dark.svg',
      logoColorLight: 'keygen_color_light.svg',
      logoMonochrome: 'keygen_monochrome.svg',
    },
    {
      name: 'ClickUp',
      link: 'https://clickup.com',
      logoColorDark: 'ClickUp_color_dark.svg',
      logoColorLight: 'ClickUp_color_light.svg',
      logoMonochrome: 'ClickUp_monochrome.svg',
    },
    {
      name: 'CoParse',
      link: 'https://coparse.com',
      logoColorDark: 'CoParse_color_dark.svg',
      logoColorLight: 'CoParse_color_light.svg',
      logoMonochrome: 'CoParse_monochrome.svg',
    },
    {
      name: 'Mintter',
      link: 'https://mintter.com',
      logoColorDark: 'Mintter_color_dark.svg',
      logoColorLight: 'Mintter_color_light.svg',
      logoMonochrome: 'Mintter_monochrome.svg',
    },
    {
      name: 'Leniolabs_',
      link: 'https://www.leniolabs.com',
      logoColorDark: 'leniolabs_color_dark.svg',
      logoColorLight: 'leniolabs_color_light.svg',
      logoMonochrome: 'leniolabs_monochrome.svg',
    },
    {
      name: 'Meros',
      link: 'https://meroscrypto.io',
      logoColorDark: 'meros_color_dark.svg',
      logoColorLight: 'meros_color_light.svg',
      logoMonochrome: 'meros_monochrome.svg',
    },
    {
      name: 'Tensor Programming',
      link: 'https://www.youtube.com/c/tensorprogramming',
      // TODO:
      logoColorDark: 'tensor_color_dark.svg',
      logoColorLight: 'tensor_color_light.svg',
      logoMonochrome: 'tensor_monochrome.svg',
    },
  ]

  return (
    <div>
      <h1 className={styles.heading}>Sponsors</h1>
      <div className={classNames('row', styles.row)}>
        {items.map((item, index) => {
          return <Logo brand={item} key={item.name + item.link} />
        })}
      </div>
    </div>
  )
}

function Logo(props) {
  const { colorMode } = useColorMode()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isHovering, setisHovering] = useState(false)
  const logoDir = '/img/index/partners/'

  // Do not remove this!
  // This is a workaround for incorrect color modes being applied after reloading the page.
  useEffect(() => {
    setIsDarkMode(colorMode === 'dark')
  }, [colorMode])

  return (
    <Link
      className={classNames('col col--3', styles.logo)}
      href={props.brand.link}
      onMouseEnter={() => {
        setisHovering(true)
      }}
      onMouseLeave={() => {
        setisHovering(false)
      }}
    >
      <img
        src={useBaseUrl(
          logoDir +
            (isHovering
              ? isDarkMode
                ? props.brand.logoColorDark
                : props.brand.logoColorLight
              : props.brand.logoMonochrome)
        )}
        alt={props.brand.name}
        className={classNames(
          isDarkMode && !isHovering ? styles.darkFilter : ''
        )}
      />
    </Link>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const latestVersion = useLatestVersion()

  return (
    <Layout
      title={`${context.siteConfig.tagline}`}
      description={translate({
        message:
          'Tauri is a framework for building tiny, blazing fast binaries for all major desktop platforms. Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface.',
      })}
    >
      <header className={classNames('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <BrowserOnly>
            {() => {
              require('@lottiefiles/lottie-player')
              return (
                <Lottie-Player
                  src="tauri-splash.json"
                  background="transparent"
                  speed="1"
                  style={{ height: '40vh', margin: 'auto' }}
                  autoplay
                />
              )
            }}
          </BrowserOnly>
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
                    className={classNames(
                      'button button--outline button--secondary button--lg',
                      styles.about
                    )}
                    to={latestVersion.path + '/about/intro'}
                  >
                    <span>
                      <Translate>Learn More</Translate>
                    </span>
                  </Link>
                </div>
                <div className="col col--4">
                  <Link
                    className={classNames(
                      'button button--outline button--secondary button--lg',
                      styles.getStarted
                    )}
                    to={
                      latestVersion.path +
                      '/guides/getting-started/prerequisites'
                    }
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
          <section className={classNames('features', styles.features)}>
            <div className="container">
              {features.map((row, index) => {
                return (
                  <div className="row" key={index}>
                    {row.map((props, idx) => (
                      <Feature
                        key={idx}
                        {...props}
                        siteConfig={context.siteConfig}
                        index={idx + row.length * index}
                      />
                    ))}
                  </div>
                )
              })}
            </div>
          </section>
        )}
        <div className={classNames('container', styles.container)}>
          <section>
            <Roadmap siteConfig={context.siteConfig} />
          </section>

          <section id="sponsors">
            <PremiumSponsors />
          </section>

          <section>
            <Sponsors />
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default Home
