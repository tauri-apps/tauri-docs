import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
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
          "Compatibility with any front-end framework means you don't have to change your stack",
      }),
      link: 'about/security',
      linkText: translate({ message: 'Read More' }),
      imageUrl: 'img/index/illustrations/brownfield.svg',
    },
    {
      label: translate({ message: 'Security' }),
      description: translate({
        message:
          'Front-of-mind for the Tauri Team that drives our highest priorities and biggest innovations',
      }),
      link: 'about/security',
      linkText: translate({ message: 'Read More' }),
      imageUrl: 'img/index/illustrations/security.svg',
    },
    {
      label: translate({ message: 'FLOSS' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      link: 'guides/building/cross-platform',
      linkText: translate({ message: 'Read More' }),
      imageUrl: 'img/index/illustrations/floss.svg',
    },
    {
      label: translate({ message: 'Bundle Size' }),
      description: translate({
        message:
          "By using the OS's native web renderer, the size of a Tauri app can be less than 600KB",
      }),
      link: 'guides/building/cross-platform',
      linkText: translate({ message: 'See Benchmarks' }),
      imageUrl: 'img/index/illustrations/box.svg',
    },
    {
      label: translate({ message: 'Cross Platform' }),
      description: translate({
        message:
          'Bundle binaries for major desktop platforms (mobile & WASM coming soon)',
      }),
      link: 'guides/building/cross-platform',
      linkText: translate({ message: 'Read More' }),
      imageUrl: 'img/index/illustrations/cross_platform.svg',
    },
    {
      label: translate({ message: 'Built on Rust' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      link: 'guides/architecture/inter-process-communication',
      linkText: translate({ message: 'Read More' }),
      imageUrl: 'img/index/illustrations/code.svg',
    },
  ]
  return (
    <section className={classNames(styles.cardContainer)}>
      {cards.map((card, index) => (
        <div className={classNames(styles.card, 'card')} key={index}>
          <div className={classNames(styles.cardSide, styles.cardLeading)}>
            <h2>{card.label}</h2>
            <p>{card.description}</p>
            <div className={classNames(styles.cardSpacer)}></div>
            <Link className={'button button--primary'}>{card.linkText}</Link>
          </div>
          <div className={classNames(styles.cardSide)}>
            <img src={card.imageUrl} className={classNames(styles.cardImage)} />
          </div>
        </div>
      ))}
    </section>
  )
}

function Features() {
  const items = [
    {
      title: translate({ message: 'CLI' }),
      description: translate({
        message: 'Generate, develop and build Tauri apps from the command line',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'Sidecar' }),
      description: translate({
        message: 'Integrate and instrument other binaries',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'Splashscreen' }),
      description: translate({
        message: 'Use a splashscreen while the main content is loading',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'Native Notifications' }),
      description: translate({
        message: 'Cross-platform notifications using polyfilled WEB API',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'VS Code Extension' }),
      description: translate({
        message: 'Commands and validate tauri.conf.json',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'Keyboard Shortcuts' }),
      description: translate({
        message: 'Hook and react to keypresses.',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'Native Notifications' }),
      description: translate({
        message: 'Cross-platform notifications using polyfilled WEB API',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'VS Code Extension' }),
      description: translate({
        message: 'Commands and validate tauri.conf.json',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'Keyboard Shortcuts' }),
      description: translate({
        message: 'Hook and react to keypresses.',
      }),
      icon: '',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return <FeatureRoadmapEntry {...item} key={index} />
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
      icon: '',
    },
    {
      title: translate({ message: 'Cross Compiler' }),
      description: translate({
        message:
          'Generate bundled binaries from select operating system environments',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'Other Bindings' }),
      description: translate({
        message:
          'Go, Nim, Python, C++ and other bindings are possible with the stable API',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'One-Time Commands' }),
      description: translate({
        message: 'Run a command that is no longer available after first run',
      }),
      icon: '',
    },
    {
      title: translate({ message: 'DENO Bindings' }),
      description: translate({
        message: "Use Deno to build your App's backend",
      }),
      icon: '',
    },
    {
      title: translate({ message: 'Channel API' }),
      description: translate({
        message: 'Send messages through a channel',
      }),
      icon: '',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return <FeatureRoadmapEntry {...item} key={index} />
      })}
    </div>
  )
}

function FeatureRoadmapEntry(props) {
  return (
    <div className={styles.featureRoadmapEntry}>
      <div className={styles.featureRoadmapIcon}></div>
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

      <main className="container">
        <section>
          <div className={classNames(styles.row)}>
            <Cards />
          </div>
        </section>

        <section>
          <h1 className={styles.h1}>Features</h1>
          <div className={classNames(styles.row, styles.featuresRow)}>
            <Features />
          </div>
        </section>

        <section>
          <h1 className={styles.h1}>Roadmap</h1>
          <div className={classNames(styles.row, styles.featuresRow)}>
            <Roadmap />
          </div>
        </section>

        <section id="sponsors">
          <h1 className={styles.h1}>Premium Sponsors</h1>
          <PremiumSponsors />
        </section>

        <section>
          <h1 className={styles.h1}>Sponsors</h1>
          <Sponsors />
        </section>
      </main>
    </Layout>
  )
}
