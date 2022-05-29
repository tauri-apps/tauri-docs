import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './index.module.css'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useLatestVersion } from '@docusaurus/plugin-content-docs/client'
import Translate, { translate } from '@docusaurus/Translate'
import BrowserOnly from '@docusaurus/BrowserOnly'

// See translations for label and description

function Cards() {
  const cards = [
    {
      label: translate({ message: 'Brownfield' }),
      description: translate({
        message:
          "Compatibility with any front-end framework means you don't have to change your stack.",
      }),
      link: '/guides/getting-started/beginning-tutorial',
      isDoc: true,
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/brownfield.svg',
    },
    {
      label: translate({ message: 'Security' }),
      description: translate({
        message:
          'Front-of-mind for the Tauri Team driving our highest priorities and biggest innovations.',
      }),
      link: 'about/security',
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/security.svg',
    },
    {
      label: translate({ message: 'FLOSS' }),
      description: translate({
        message:
          'Relicensing and redistribution is possible thanks to MIT or MIT/Apache 2.0 licensing where applicable.',
      }),
      link: 'about/intro#honest-open-source',
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/floss.svg',
    },
    {
      label: translate({ message: 'Bundle Size' }),
      description: translate({
        message:
          "By using the OS's native web renderer, the size of a Tauri app can be less than 600KB.",
      }),
      link: 'about/benchmarks',
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/box.svg',
    },
    {
      label: translate({ message: 'Cross Platform' }),
      description: translate({
        message:
          'Bundle binaries for all major desktop platforms (mobile & WASM coming soon).',
      }),
      link: '/guides/building/cross-platform',
      isDoc: true,
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/cross_platform.svg',
    },
    {
      label: translate({ message: 'Built on Rust' }),
      description: translate({
        message:
          'With performance and security at the center, Rust is the language for the next generation of apps.',
      }),
      link: 'https://docs.rs/tauri/1.0.0-rc/',
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/code.svg',
    },
  ]

  const latestVersion = useLatestVersion()

  return (
    <section className={classNames(styles.cardContainer)}>
      {cards.map((card, index) => (
        <div className={classNames(styles.card, 'card')} key={index}>
          <div className={classNames(styles.cardSide, styles.cardLeading)}>
            <h2>{card.label}</h2>
            <p>{card.description}</p>
            <div className={classNames(styles.cardSpacer)}></div>
            <Link
              className={'button button--primary'}
              href={(card.isDoc ? latestVersion.path : '') + card.link}
            >
              {card.linkText}
            </Link>
          </div>
          <div className={classNames(styles.cardSide, styles.cardImage)}>
            <img src={card.imageUrl} />
          </div>
        </div>
      ))}
    </section>
  )
}

function Features() {
  const items = [
    {
      title: translate({ message: 'Desktop Bundler' }),
      description: translate({
        message: 'Bundle for all major desktops from native systems',
      }),
      icon: 'box-seam',
    },
    {
      title: translate({ message: 'Self Updater' }),
      description: translate({
        message: 'Update Tauri Apps from within themselves',
      }),
      icon: 'cloud-arrow-down',
    },
    {
      title: translate({ message: 'Core Plugin System' }),
      description: translate({
        message: 'Build reusable plugins to extend Tauri core',
      }),
      icon: 'puzzle',
    },
    {
      title: translate({ message: 'Scoped Filesystem' }),
      description: translate({
        message: 'Improved security of file interactions',
      }),
      icon: 'safe',
    },
    {
      title: translate({ message: 'App Tray' }),
      description: translate({
        message: 'Cross-platform desktop icon tray',
      }),
      icon: 'menu-app',
    },
    {
      title: translate({ message: 'GitHub Action' }),
      description: translate({
        message: 'Build your Tauri binary for macOS, Linux, and Windows',
      }),
      icon: 'github',
    },
    {
      title: translate({ message: 'Native Notifications' }),
      description: translate({
        message: 'Cross-platform notifications using polyfilled web API',
      }),
      icon: 'app-indicator',
    },
    {
      title: translate({ message: 'Sidecar' }),
      description: translate({
        message: 'Integrate and instrument other binaries',
      }),
      icon: 'code-square',
    },
    {
      title: translate({ message: 'App Storage' }),
      description: translate({
        message: 'Use a canonical location to store user data',
      }),
      icon: 'folder2-open',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return (
          <FeatureRoadmapEntry
            {...item}
            key={index}
            cname={styles.featureIcon}
          />
        )
      })}
    </div>
  )
}

function Roadmap() {
  const items = [
    {
      title: translate({ message: 'Mobile Bundler' }),
      description: translate({
        message: 'Bundle to all major mobile device operating systems',
      }),
      icon: 'phone',
    },
    {
      title: translate({ message: 'Cross Compiler' }),
      description: translate({
        message:
          'Generate bundled binaries from select operating system environments',
      }),
      icon: 'gear-wide-connected',
    },
    {
      title: translate({ message: 'Other Bindings' }),
      description: translate({
        message:
          'Go, Nim, Python, C++ and other bindings are possible with the stable API',
      }),
      icon: 'arrow-repeat',
    },
    {
      title: translate({ message: 'One-Time Commands' }),
      description: translate({
        message: 'Run a command that is no longer available after first run',
      }),
      icon: 'stars',
    },
    {
      title: translate({ message: 'Alternative Renderers' }),
      description: translate({
        message:
          'Candidate presentation for Webview alternatives, including GL windowing',
      }),
      icon: 'brush',
    },
    {
      title: translate({ message: 'Channel API' }),
      description: translate({
        message: 'Send messages through a channel',
      }),
      icon: 'signpost-2',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return (
          <FeatureRoadmapEntry
            {...item}
            key={index}
            cname={styles.roadmapIcon}
          />
        )
      })}
    </div>
  )
}

function FeatureRoadmapEntry(props) {
  return (
    <div className={styles.featureRoadmapEntry}>
      <div className={styles.featureRoadmapIconContainer}>
        <i
          className={classNames(
            styles.featureRoadmapIcon,
            'bi',
            `bi-${props.icon}`,
            props.cname
          )}
        />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
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
      logoColorDark: '1Password_color_dark.svg',
      logoColorLight: '1Password_color_light.svg',
    },
    {
      name: 'PACKT',
      link: 'https://www.packtpub.com',
      logoColorDark: 'packt_color_dark.svg',
      logoColorLight: 'packt_color_light.svg',
    },
    {
      name: 'Cloudflare',
      link: 'https://www.cloudflare.com',
      logoColorDark: 'Cloudflare_color_dark.svg',
      logoColorLight: 'Cloudflare_color_light.svg',
    },
    {
      name: 'nlnet',
      link: 'https://nlnet.nl',
      logoColorDark: 'nlnet_color_dark.svg',
      logoColorLight: 'nlnet_color_light.svg',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return <Logo classNames={styles.sponsor} brand={item} key={index} />
      })}
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
    },
    {
      name: 'Netlify',
      link: 'https://www.netlify.com',
      logoColorDark: 'Netlify_color_dark.svg',
      logoColorLight: 'Netlify_color_light.svg',
    },
    {
      name: 'keygen',
      link: 'https://keygen.sh',
      logoColorDark: 'keygen_color_dark.svg',
      logoColorLight: 'keygen_color_light.svg',
    },
    {
      name: 'ClickUp',
      link: 'https://clickup.com',
      logoColorDark: 'ClickUp_color_dark.svg',
      logoColorLight: 'ClickUp_color_light.svg',
    },
    {
      name: 'CoParse',
      link: 'https://coparse.com',
      logoColorDark: 'CoParse_color_dark.svg',
      logoColorLight: 'CoParse_color_light.svg',
    },
    {
      name: 'Mintter',
      link: 'https://mintter.com',
      logoColorDark: 'Mintter_color_dark.svg',
      logoColorLight: 'Mintter_color_light.svg',
    },
    {
      name: 'Leniolabs_',
      link: 'https://www.leniolabs.com',
      logoColorDark: 'leniolabs_color_dark.svg',
      logoColorLight: 'leniolabs_color_light.svg',
    },
    {
      name: 'Meros',
      link: 'https://meroscrypto.io',
      logoColorDark: 'meros_color_dark.svg',
      logoColorLight: 'meros_color_light.svg',
    },
    {
      name: 'Tensor Programming',
      link: 'https://www.youtube.com/c/tensorprogramming',
      logoColorDark: 'tensor_color_dark.svg',
      logoColorLight: 'tensor_color_light.svg',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return <Logo classNames={styles.sponsor} brand={item} key={index} />
      })}
    </div>
  )
}

function Logo(props) {
  const { colorMode } = useColorMode()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const logoDir = '/img/index/partners/'

  // Do not remove this!
  // This is a workaround for incorrect color modes being applied after reloading the page.
  useEffect(() => {
    setIsDarkMode(colorMode === 'dark')
  }, [colorMode])

  // Pre-fetches images
  useEffect(() => {
    const images = []

    const darkImage = (new Image().src = logoDir + props.brand.logoColorDark)
    images.push(darkImage)

    const lightImage = (new Image().src = logoDir + props.brand.logoColorLight)
    images.push(lightImage)
  }, [])

  return (
    <Link href={props.brand.link} className={styles.sponsor}>
      <img
        src={useBaseUrl(
          logoDir +
            (isDarkMode
              ? props.brand.logoColorDark
              : props.brand.logoColorLight)
        )}
        alt={props.brand.name}
      />
    </Link>
  )
}

export default function App() {
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
                    to="/about/intro"
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
                    to={latestVersion.path + '/guides/'}
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
        <section className="container">
          <div className={classNames(styles.row)}>
            <Cards />
          </div>
        </section>

        <section className="hero hero--dark">
          <div className="container">
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.row}>
              <Features />
            </div>

            <div className={styles.spacer} />
            <h1 className={styles.h1}>Roadmap</h1>
            <div className={styles.row}>
              <Roadmap />
            </div>
          </div>
        </section>

        <div className={styles.spacer} />
        <div className="container">
          <section id="sponsors">
            <h1 className={styles.h1}>Premium Sponsors</h1>
            <PremiumSponsors />
          </section>

          <div className={styles.spacer} />
          <section>
            <h1 className={styles.h1}>Sponsors</h1>
            <Sponsors />
          </section>
          <div className={styles.spacer} />
        </div>
      </main>
    </Layout>
  )
}
