/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const translate = require('../../server/translate.js').translate

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
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
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
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
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
          title: <translate>CLI</translate>,
          description: (
            <translate>
              Generate, develop and build Tauri apps from the command line.
            </translate>
          ),
          icon: '',
          color: COLORS.green,
          targetQuarter: 'Q4 2019',
        },

        {
          title: <translate>API</translate>,
          description: (
            <translate>
              Finalize, audit, write documentation and create examples for the
              smoke-tests.
            </translate>
          ),
          icon: '',
          color: COLORS.green,
          targetQuarter: 'Q4 2019',
        },
        {
          title: <translate>Testing & CI</translate>,
          description: (
            <translate>
              Implement CI with testing and bundle-pipeline validation.
            </translate>
          ),
          icon: '',
          color: COLORS.green,
          targetQuarter: 'Q4 2019',
        },
        {
          title: <translate>Desktop Bundler</translate>,
          description: (
            <translate>
              Bundle for all major desktops from native systems.
            </translate>
          ),
          icon: '',
          color: COLORS.green,
          targetQuarter: 'Q4 2019',
        },
        {
          title: <translate>Alpha Release</translate>,
          description: (
            <translate>
              Technical Release Candidate for desktop, edge cases and bugs
              acceptable.
            </translate>
          ),
          icon: '',
          color: COLORS.green,
          targetQuarter: 'Q4 2019',
        },
        {
          title: <translate>Sideloader</translate>,
          description: (
            <translate>Integrate and instrument other binaries.</translate>
          ),
          icon: '',
          color: COLORS.green,
          targetQuarter: 'Q1 2020',
        },
        {
          title: <translate>Splashscreen</translate>,
          description: (
            <translate>
              Use a splashscreen while the main content is loading.
            </translate>
          ),
          icon: '',
          color: COLORS.green,
          targetQuarter: 'Q1 2020',
        },
        {
          title: <translate>App Storage</translate>,
          description: (
            <translate>Use a canonical location to store userdata.</translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q1 2020',
        },
        {
          title: <translate>Multi Window</translate>,
          description: (
            <translate>Run multiple window instances in Tauri.</translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q1 2020',
        },
        {
          title: <translate>Self Updater</translate>,
          description: (
            <translate>Update Tauri Apps from within Tauri.</translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q1 2020',
        },
        {
          title: <translate>WASM Bundler</translate>,
          description: (
            <translate>Manufacture WASM bundler for use in websites.</translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q1 2020',
        },
        {
          title: <translate>PureOS App Store</translate>,
          description: <translate>Verified builds for PureOS.</translate>,
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q1 2020',
        },
        {
          title: <translate>App Tray</translate>,
          description: <translate>Desktop Cross-platform Icon Tray.</translate>,
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q2 2020',
        },
        {
          title: <translate>Native Notifications</translate>,
          description: (
            <translate>
              Cross-platform notifications using polyfilled WEB API.
            </translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q2 2020',
        },
        {
          title: <translate>Beta Release</translate>,
          description: (
            <translate>Generally stable on Desktop, API locked down.</translate>
          ),
          icon: '',
          color: COLORS.red,
          targetQuarter: 'Q2 2020',
        },
        {
          title: <translate>Mobile Bundler</translate>,
          description: (
            <translate>
              Bundle to all major mobile device operating systems.
            </translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q2 2020',
        },
        {
          title: <translate>DENO</translate>,
          description: <translate>Enable alternative DENO CLI.</translate>,
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q3 2020',
        },
        {
          title: <translate>Cross Compiler</translate>,
          description: (
            <translate>
              Generate bundled binaries from select operating system
              environments.
            </translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q3 2020',
        },
        {
          title: <translate>Alternative Renderer</translate>,
          description: (
            <translate>
              Candidate presentation for Webview Alternatives, including GL
              windowing.
            </translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q3 2020',
        },
        {
          title: <translate>Tauri-Frida</translate>,
          description: (
            <translate>
              A decompiler and threat analyzer for Tauri Apps, using Frida.
            </translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q4 2020',
        },
        {
          title: <translate>Stable Release</translate>,
          description: <translate>Stable on On all Platforms.</translate>,
          icon: '',
          color: COLORS.red,
          targetQuarter: 'Q4 2020',
        },
        {
          title: <translate>Other Bindings</translate>,
          description: (
            <translate>
              Go, Nim, Python, C++ and other bindings are possible with the
              stable API.
            </translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: 'Q1 2021',
        },
        {
          title: <translate>The Future</translate>,
          description: (
            <translate>
              Something missing? Got a great idea? We want you to help us make
              it happen.
            </translate>
          ),
          icon: '',
          color: COLORS.blue,
          targetQuarter: '& BEYOND',
        },
      ].map((item) => {
        return (
          <li key={item.toString()}>
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
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          {/* <TryOut /> */}
          <Timeline />
          <Description />
          <Showcase />
        </div>
      </div>
    )
  }
}

module.exports = Index
