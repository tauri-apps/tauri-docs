import React from 'react'
import Fade from 'react-reveal/Fade'
import classnames from 'classnames'

import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

// See translations for label and description
const features = [
  [
    {
      imageUrl: 'img/undraw_brownfield.svg',
    },
    {
      imageUrl: 'img/undraw_open_source.svg',
    },
    {
      imageUrl: 'img/undraw_takeout_boxes.svg',
    },
  ],
  [
    {
      imageUrl: 'img/undraw_security.svg',
      link: 'docs/about/security',
    },
    {
      imageUrl: 'img/undraw_patterns.svg',
      link: 'docs/usage/patterns/about-patterns',
    },
    {
      imageUrl: 'img/undraw_cross_platform.svg',
      link: 'docs/usage/ci-cd/cross-platform',
    },
  ],
]

function Feature({ imageUrl, link, siteConfig, index }) {
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
                  siteConfig.themeConfig.t.pages.index.feature.items[index]
                    .label
                }
              />
            </div>
          )}
          <h3>
            {siteConfig.themeConfig.t.pages.index.feature.items[index].label}
          </h3>
          <p>
            {
              siteConfig.themeConfig.t.pages.index.feature.items[index]
                .description
            }
          </p>
        </div>
        {link && (
          <div className="card__footer">
            <Link to={useBaseUrl(link)}>
              <button className="button button--secondary button--block">
                {siteConfig.themeConfig.t.pages.index.feature.seeMore}
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
    },
    {
      label: 'API',
      icon: 'ti-crown',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Testing & CI',
      icon: 'ti-pulse',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Desktop Bundler',
      icon: 'ti-desktop',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {      
      label: 'Alpha Release',
      icon: 'ti-flag-alt',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      label: 'Sidecar',
      icon: 'ti-link',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      label: 'Splashscreen',
      icon: 'ti-blackboard',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      label: 'App Storage',
      icon: 'ti-share',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
    },
    {
      label: 'Native Notifications',
      icon: 'ti-comment-alt',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
    },
    {
      label: 'GH Action for Building Apps',
      icon: 'ti-arrow-circle-right',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'VS Code Extension',
      icon: 'ti-layout-tab',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'Core Plugin System',
      icon: 'ti-control-eject',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'CLI Updater',
      icon: 'ti-download',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      label: 'Webview Bindings',
      icon: 'ti-loop',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Keyboard Shortcuts',
      icon: 'ti-smallcap',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Multi Window',
      icon: 'ti-layout-grid3-alt',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Rust-based CLI',
      icon: 'ti-cup',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Transparent Window',
      icon: 'ti-layout-sidebar-none',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Secure Context for Web APIs',
      icon: 'ti-lock',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Self Updater',
      icon: 'ti-download',
      color: COLORS.green,
      targetQuarter: 'Q1 2021',
    },
    {
      label: 'Window Menus',
      icon: 'ti-menu',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'App Tray',
      icon: 'ti-panel',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'Beta Release',
      icon: 'ti-flag-alt',
      color: COLORS.green,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'Channel API',
      icon: 'ti-rss-alt',
      color: COLORS.blue,
      targetQuarter: '2021',
    },
    {
      label: 'Security Audit',
      icon: 'ti-magnet',
      color: COLORS.blue,
      targetQuarter: 'Q2 2021',
    },
    {
      label: 'WebRTC',
      icon: 'ti-phone',
      color: COLORS.blue,
      targetQuarter: '2021',
    },
    {
      label: 'Iframe with native API',
      icon: 'ti-exchange-vertical',
      color: COLORS.blue,
      targetQuarter: '2021',
    },
    {
      label: 'Scoped FileSystem',
      icon: 'ti-package',
      color: COLORS.blue,
      targetQuarter: '2021',
    },
    {
      label: 'Clipboard',
      icon: 'ti-clipboard',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'One-Time Commands',
      icon: 'ti-upload',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'DENO Bindings',
      icon: 'ti-loop',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Mobile Bundler',
      icon: 'ti-mobile',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Cross Compiler',
      icon: 'ti-control-shuffle',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'PureOS App Store',
      icon: 'ti-shine',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Stable Release',
      icon: 'ti-flag-alt',
      color: COLORS.red,
      targetQuarter: 'Planned',
    },
    {
      label: 'Other Bindings',
      icon: 'ti-world',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Alternative Renderer',
      icon: 'ti-direction-alt',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'Tauri-Frida',
      icon: 'ti-slice',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      label: 'The Future',
      icon: 'ti-infinite',
      color: COLORS.blue,
      targetQuarter: siteConfig.themeConfig.t.pages.index.roadmap.beyond,
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
              {siteConfig.themeConfig.t.pages.index.roadmap.items[index].label}
            </div>
            <div className="description">
              {
                siteConfig.themeConfig.t.pages.index.roadmap.items[index]
                  .description
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
        {siteConfig.themeConfig.t.pages.index.roadmap.title}
      </h2>
      <p style={{ textAlign: 'center', position: 'relative' }}>
        {siteConfig.themeConfig.t.pages.index.roadmap.notice}
      </p>
      <ul className="roadmap-legend">
        <li>
          <span style={{ backgroundColor: COLORS.green }}></span>{' '}
          {siteConfig.themeConfig.t.pages.index.roadmap.released}
        </li>
        <li>
          <span style={{ backgroundColor: COLORS.sky }}></span>{' '}
          {siteConfig.themeConfig.t.pages.index.roadmap.ready}
        </li>
        <li>
          <span style={{ backgroundColor: COLORS.blue }}></span>{' '}
          {siteConfig.themeConfig.t.pages.index.roadmap.todo}
        </li>
        <li>
          <span style={{ backgroundColor: COLORS.red }}></span>{' '}
          {siteConfig.themeConfig.t.pages.index.roadmap.milestone}
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
      description={siteConfig.themeConfig.t.pages.index.description}
    >
      <header className={classnames('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            src={useBaseUrl('img/tauri_with_wordmark.svg')}
            style={{ maxWidth: 745 }}
          />
          <p
            className="hero__subtitle"
            dangerouslySetInnerHTML={{
              __html: siteConfig.themeConfig.t.pages.index.subtitle,
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
                      {siteConfig.themeConfig.t.pages.index.learnMore}
                    </span>
                  </Link>
                </div>
                <div className="col col--4">
                  <Link
                    className={classnames(
                      'button button--outline button--secondary button--lg',
                      styles.getStarted
                    )}
                    to={useBaseUrl('docs/getting-started/intro')}
                  >
                    <span>
                      {siteConfig.themeConfig.t.pages.index.getStarted}
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
