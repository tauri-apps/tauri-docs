import React from 'react'
import Layout from '@theme/Layout'

import siteConfig from '../../docusaurus.config'

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

// export default Hello;

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// const React = require('react')

// const CompLibrary = require('../../core/CompLibrary.js')

// const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
// const Container = CompLibrary.Container
// const GridBlock = CompLibrary.GridBlock

// const translate = require('../../server/translate.js').translate

const Translate = (props) => (
  <span>{props.children}</span>
)

const GridBlock = (props) => (
  <div className={props.className} key={props.title}>
    <div className="blockContent">
      {props.children}
    </div>
  </div>
)

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    )

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    )

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a
          className="button"
          href={props.href}
          target={props.target}
          style={{ color: props.color, borderColor: props.color }}
        >
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        Need an awesome animation with CTAs here
        <div className="inner">
          {/* <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} /> */}
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    // const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig

    const Block = (props) => (
      <div
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </div>
    )

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}
      >
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    )

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    )

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    )

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    )

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content:
              "is the Tauri-Team's biggest priority and drives our innovation. ",
            image: `${baseUrl}img/undraw_Security_on_ff2u.svg`,
            imageAlign: 'top',
            title: 'Security',
          },
          {
            content:
              'relicensing is possible with Tauri, but not with Electron. ',
            image: `${baseUrl}img/undraw_open_source_1qxw.svg`,
            imageAlign: 'top',
            title: 'FLOSS',
          },
        ]}
      </Block>
    )

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ))

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      )
    }

    const Timeline = () => {
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
          description: (
            <Translate>Update Tauri Apps from within Tauri.</Translate>
          ),
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
              Generate bundled binaries from select operating system
              environments.
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
              Go, Nim, Python, C++ and other bindings are possible with the
              stable API.
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
              Something missing? Got a great idea? We want you to help us make
              it happen.
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
          <Block id="try">
            {[
              {
                title: 'Roadmap',
              },
            ]}
          </Block>
          <ul className="roadmap">{items}</ul>
        </div>
      )
    }

    return (
      <Layout>
        <HomeSplash siteConfig={siteConfig} language={'en'} />
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout /> */}
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          <Timeline />
          {/* <Description /> */}
          {/* <Showcase /> */}
        </div>
      </Layout>
    )
  }
}

export default Index
