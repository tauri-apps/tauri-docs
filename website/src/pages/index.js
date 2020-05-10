import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const Translate = (props) => (
  <span>{props.children}</span>
)


const Roadmap = () => {
  const COLORS = {
    green: '#4caf50',
    blue: '#2196f3',
    red: '#f44336',
  }
  const items = [
    {
      title: <Translate>CLI</Translate>,
      description: (
        <Translate>
          Generate, develop and build Tauri apps from the command line.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },

    {
      title: <Translate>API</Translate>,
      description: (
        <Translate>
          Finalize, audit, write documentation and create examples for the
          smoke-tests.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      title: <Translate>Testing & CI</Translate>,
      description: (
        <Translate>
          Implement CI with testing and bundle-pipeline validation.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      title: <Translate>Desktop Bundler</Translate>,
      description: (
        <Translate>
          Bundle for all major desktops from native systems.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      title: <Translate>Alpha Release</Translate>,
      description: (
        <Translate>
          Technical Release Candidate for desktop, edge cases and bugs
          acceptable.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      title: <Translate>Sideloader</Translate>,
      description: (
        <Translate>Integrate and instrument other binaries.</Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      title: <Translate>Splashscreen</Translate>,
      description: (
        <Translate>
          Use a splashscreen while the main content is loading.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      title: <Translate>App Storage</Translate>,
      description: (
        <Translate>Use a canonical location to store userdata.</Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q1 2020',
    },
    {
      title: <Translate>Multi Window</Translate>,
      description: (
        <Translate>Run multiple window instances in Tauri.</Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q1 2020',
    },
    {
      title: <Translate>Self Updater</Translate>,
      description: <Translate>Update Tauri Apps from within Tauri.</Translate>,
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q1 2020',
    },
    {
      title: <Translate>WASM Bundler</Translate>,
      description: (
        <Translate>Manufacture WASM bundler for use in websites.</Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q1 2020',
    },
    {
      title: <Translate>PureOS App Store</Translate>,
      description: <Translate>Verified builds for PureOS.</Translate>,
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q1 2020',
    },
    {
      title: <Translate>App Tray</Translate>,
      description: <Translate>Desktop Cross-platform Icon Tray.</Translate>,
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q2 2020',
    },
    {
      title: <Translate>Native Notifications</Translate>,
      description: (
        <Translate>
          Cross-platform notifications using polyfilled WEB API.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q2 2020',
    },
    {
      title: <Translate>Beta Release</Translate>,
      description: (
        <Translate>Generally stable on Desktop, API locked down.</Translate>
      ),
      icon: '',
      color: COLORS.red,
      targetQuarter: 'Q2 2020',
    },
    {
      title: <Translate>Mobile Bundler</Translate>,
      description: (
        <Translate>
          Bundle to all major mobile device operating systems.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q2 2020',
    },
    {
      title: <Translate>DENO</Translate>,
      description: <Translate>Enable alternative DENO CLI.</Translate>,
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q3 2020',
    },
    {
      title: <Translate>Cross Compiler</Translate>,
      description: (
        <Translate>
          Generate bundled binaries from select operating system environments.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q3 2020',
    },
    {
      title: <Translate>Alternative Renderer</Translate>,
      description: (
        <Translate>
          Candidate presentation for Webview Alternatives, including GL
          windowing.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q3 2020',
    },
    {
      title: <Translate>Tauri-Frida</Translate>,
      description: (
        <Translate>
          A decompiler and threat analyzer for Tauri Apps, using Frida.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q4 2020',
    },
    {
      title: <Translate>Stable Release</Translate>,
      description: <Translate>Stable on On all Platforms.</Translate>,
      icon: '',
      color: COLORS.red,
      targetQuarter: 'Q4 2020',
    },
    {
      title: <Translate>Other Bindings</Translate>,
      description: (
        <Translate>
          Go, Nim, Python, C++ and other bindings are possible with the stable
          API.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q1 2021',
    },
    {
      title: <Translate>The Future</Translate>,
      description: (
        <Translate>
          Something missing? Got a great idea? We want you to help us make it
          happen.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: '& BEYOND',
    },
  ].map((item) => {
    return (
      <li key={item.title.props.children}>
        <div className="icon" style={{ backgroundColor: item.color }}></div>
        <div className="content">
          <div className="title">{item.title}</div>
          <div className="description">{item.description}</div>
        </div>
        <div>{item.targetQuarter}</div>
      </li>
    )
  })

  return (
    <div>
      <h3>Roadmap</h3>
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
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('about')}
            >
              Learn more
            </Link>

            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/getting-started/intro')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <section>
        <Roadmap></Roadmap>
      </section>
    </Layout>
  )
}

export default Home
