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
import { CreateTauriApp } from '@theme/Command'

// See translations for label and description

function Cards() {
  const cards = [
    {
      label: translate({ message: 'Brownfield' }),
      description: translate({
        message:
          "Compatibility with any front-end framework means you don't have to change your stack.",
      }),
      link: '/guides/getting-started/setup',
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
      link: '/references/architecture/security',
      isDoc: true,
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
      imageUrl: 'img/index/illustrations/box.svg',
    },
    {
      label: translate({ message: 'Cross Platform' }),
      description: translate({
        message:
          'Bundle binaries for all major desktop platforms (mobile coming soon).',
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
      link: 'https://docs.rs/tauri/1/',
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
            {card.link && <Link
              className={'button button--primary'}
              href={(card.isDoc ? latestVersion.path : '') + card.link}
            >
              {card.linkText}
            </Link>}
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

function OfficialPartners() {
  // All logos should be a svg with a 500x100 frame (content resized inside
  // with padding to appear balanced).
  const items = [
    {
      name: 'CrabNebula',
      link: 'https://www.crabnebula.dev',
      logoColorDark: 'crabnebula_color_dark.svg',
      logoColorLight: 'crabnebula_color_light.svg',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return <Logo className={styles.partner} brand={item} key={index} />
      })}
    </div>
  )
}

function PremiumSponsors() {
  // All logos should be a svg with a 500x100 frame (content resized inside
  // with padding to appear balanced).
  const items = [
    {
      name: 'AWS',
      link: 'https://aws.amazon.com',
      logoColorDark: 'AWS_color_dark.svg',
      logoColorLight: 'AWS_color_light.svg',
    },
    {
      name: '1Password',
      link: 'https://1password.com',
      logoColorDark: '1Password_color_dark.svg',
      logoColorLight: '1Password_color_light.svg',
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
    {
      name: 'Padloc',
      link: 'https://padloc.app',
      logoColorDark: 'padloc_color_light.svg',
      logoColorLight: 'padloc_color_light.svg',
    },
    {
      name: 'Meilisearch',
      link: 'https://www.meilisearch.com',
      logoColorDark: 'meilisearch_color_dark.svg',
      logoColorLight: 'meilisearch_color_light.svg',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return <Logo className={styles.premium} brand={item} key={index} />
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
      name: 'VPS Server',
      link: 'https://www.vpsserver.com',
      logoColorDark: 'vps_server_color_dark.svg',
      logoColorLight: 'vps_server_color_light.svg',
    },
    {
      name: 'Dimension',
      link: 'https://dimension.dev/',
      logoColorDark: 'dimension_color_dark.svg',
      logoColorLight: 'dimension_color_light.svg',
    },
    {
      name: 'Lightfinder',
      link: 'https://lightfinder.com/',
      logoColorDark: 'lightfinder_color_dark.svg',
      logoColorLight: 'lightfinder_color_light.svg',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return <Logo className={styles.sponsor} brand={item} key={index} />
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
    <Link href={props.brand.link} className={props.className}>
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

function DynamicHeaderImage() {
  const { colorMode } = useColorMode()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Pre-fetch images
  useEffect(() => {
    const images = []

    const darkTauriLogo = (new Image().src = 'img/header_dark.svg')
    images.push(darkTauriLogo)

    const lightTauriLogo = (new Image().src = 'img/header_light.svg')
    images.push(lightTauriLogo)
  }, [])

  // Set dark mode correctly
  useEffect(() => {
    setIsDarkMode(colorMode === 'dark')
  }, [colorMode])

  return (
    <img
      src={
        isDarkMode
          ? '/img/index/header_dark.svg'
          : '/img/index/header_light.svg'
      }
    />
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
      <header className={classNames('hero', styles.hero)}>
        <div className={classNames(styles.heroContainer)}>
          <span className={classNames(styles.heroImage)}>
            <DynamicHeaderImage />
          </span>
          <br />
          <div className={classNames(styles.heroSubtitle, 'hero__subtitle')}>
            <Translate>
              Build an optimized, secure, and frontend-independent application
              for multi-platform deployment.
            </Translate>
          </div>

          <div className={classNames(styles.commandContainer)}>
            <CreateTauriApp />
          </div>

          <Link
            className={classNames('button button--secondary button--lg')}
            to={latestVersion.path + '/guides/getting-started/setup'}
          >
            <Translate>Quick Start</Translate>
          </Link>
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
            <h1 className={styles.h1}>Official Partners</h1>
            <OfficialPartners />
          </section>

          <div className={styles.spacer} />
          <section>
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
