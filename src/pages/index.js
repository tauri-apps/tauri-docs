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
      icon: 'ti-target',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      icon: 'ti-crown',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      icon: 'ti-pulse',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      icon: 'ti-desktop',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      icon: 'ti-flag-alt',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      icon: 'ti-link',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      icon: 'ti-blackboard',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      icon: 'ti-share',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
    },
    {
      icon: 'ti-comment-alt',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
    },
    {
      icon: 'ti-arrow-circle-right',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      icon: 'ti-layout-tab',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      icon: 'ti-control-eject',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      icon: 'ti-download',
      color: COLORS.green,
      targetQuarter: 'Q3 2020',
    },
    {
      icon: 'ti-loop',
      color: COLORS.sky,
      targetQuarter: 'Q1 2021',
    },
    {
      icon: 'ti-smallcap',
      color: COLORS.sky,
      targetQuarter: 'Q1 2021',
    },
    {
      icon: 'ti-layout-grid3-alt',
      color: COLORS.sky,
      targetQuarter: 'Q1 2021',
    },
    {
      icon: 'ti-cup',
      color: COLORS.sky,
      targetQuarter: 'Q1 2021',
    },
    {
      icon: 'ti-layout-sidebar-none',
      color: COLORS.blue,
      targetQuarter: 'Q1 2021',
    },
    {
      icon: 'ti-lock',
      color: COLORS.blue,
      targetQuarter: '2021',
    },
    {
      icon: 'ti-exchange-vertical',
      color: COLORS.blue,
      targetQuarter: '2021',
    },
    {
      icon: 'ti-package',
      color: COLORS.blue,
      targetQuarter: '2021',
    },
    {
      icon: 'ti-download',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-flag-alt',
      color: COLORS.red,
      targetQuarter: '2021',
    },
    {
      icon: 'ti-clipboard',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-rss-alt',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-upload',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-bolt',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-panel',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-loop',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-magnet',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-mobile',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-control-shuffle',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-shine',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-flag-alt',
      color: COLORS.red,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-world',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-direction-alt',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
      icon: 'ti-slice',
      color: COLORS.blue,
      targetQuarter: 'Planned',
    },
    {
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
