import React from 'react'
import Layout from '@theme/Layout'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const Avatar = ({ name, tags, image, description, link }) => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <div className="col col--4 margin-bottom--lg">
      <div
        className={'card'}
        style={{
          textAlign: 'center',
          backgroundColor: '#303846',
          color: '#ffffff',
        }}
      >
        <div
          className="card__image"
          style={{
            marginTop: 10,
            minHeight: 100,
            display: 'flex',
            alignSelf: 'center',
          }}
        >
          <img
            style={{ maxHeight: 100, objectFit: 'contain' }}
            src={image}
            alt={name}
          />
        </div>
        <div className="card__body">
          <div className="avatar">
            <div className="avatar__intro margin-left--none">
              <h4 className="avatar__name">{name}</h4>
              <ul style={{ padding: 0, marginTop: 10 }}>
                {tags.map((tag, index) => (
                  <li
                    className="badge badge--secondary"
                    key={index}
                    style={{ margin: 2 }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <small className="avatar__subtitle">{description}</small>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <a href={link} target="_blank">
            <button className="button button--secondary">
              {siteConfig.themeConfig.t.global.discover}
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

function Partners() {
  const imgPath = useBaseUrl('/img/partners/')

  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  const sponsors = [
    {
      name: <>Digital Ocean</>,
      link: 'https://m.do.co/c/40f468c2e493',
      tags: ['datacenter', 'deployment'],
      image: imgPath + 'DO_Logo_Vertical_Blue.png',
    },
    {
      name: <>netlify</>,
      link: 'https://www.netlify.com',
      tags: ['CD', 'documentation-site'],
      image: imgPath + 'netlify.svg',
    },
    {
      name: <>MailScript()</>,
      link: 'https://mailscript.com',
      tags: ['automation', 'email'],
      image: imgPath + 'MailScript_logo.png',
    },
    {
      name: <>Clickup</>,
      link: 'https://clickup.com',
      tags: ['time management', 'scrum'],
      image: imgPath + 'clickup.png',
    },
    {
      name: <>wallaby.js</>,
      link: 'https://wallabyjs.com/',
      tags: ['testing', 'JS/TS'],
      image: imgPath + 'wallabyjs.png',
    },
  ]

  const collaborators = [
    {
      name: <>GUIJS</>,
      link: 'https://guijs.dev/',
      tags: ['Dev Toolkit', 'Early adopter'],
      image: imgPath + 'guijs-round.svg',
    },
    {
      name: <>PureOS</>,
      link: 'https://www.pureos.net/',
      tags: ['FLOSS OS', 'App store'],
      image: imgPath + 'pureos.png',
    },
    {
      name: <>IOTA</>,
      link: 'https://iota.org/',
      tags: ['App dev', 'Early adopter'],
      image: imgPath + 'IOTA_Logo_white_100px.png',
    },
    {
      name: <>Amethyst</>,
      link: 'https://amethyst.rs/',
      tags: ['Games', 'Early adopter'],
      image: imgPath + 'amethyst-white.svg',
    },
    {
      name: <>Meros</>,
      link: 'https://meroscrypto.io/',
      tags: ['App dev', 'Early adopter'],
      image: imgPath + 'meros.png',
    },
    {
      name: <>Tensor</>,
      link: 'https://youtube.com/c/tensorprogramming',
      tags: ['Education', 'Videos'],
      image: imgPath + 'tensor.png',
    },
  ]

  const patrons = [
    {
      name: 'anonymous',
      link: '',
    },
    {
      name: 'Robin van Boven',
      link: '',
    },
    {
      name: 'Jonathan Baginski',
      link: '',
    },
    {
      name: 'Allan Gaunt',
      link: '',
    },
    {
      name: 'jleni',
      link: '',
    },
    {
      name: 'Mary-Tyler Moore',
      link: '',
    },
    {
      name: 'romatthe',
      link: '',
    },
    {
      name: 'Taylor Gregoire-Wright',
      link: '',
    },
    {
      name: 'Oscar Lito M Pablo',
      link: '',
    },
    {
      name: 'Cameron Snaders',
      link: '',
    },
    {
      name: 'Yuya Sato',
      link: '',
    },
    {
      name: 'Calvin Kipperman',
      link: '',
    },
    {
      name: 'laona',
      link: '',
    },
    {
      name: 'Fritz-Rainer Doebbelin',
      link: '',
    },
    {
      name: 'Jonathan Baginski',
      link: '',
    },
    {
      name: 'ken',
      link: '',
    },
  ]
  return (
    <Layout title={siteConfig.themeConfig.t.pages.partners.partnersLabel}>
      <div className="container margin-vert--lg">
        <h1 className="text--center margin-bottom--xl">
          {siteConfig.themeConfig.t.pages.partners.partnersLabel}
        </h1>
        <section>
          <h2>Sponsors</h2>
          <div className="row">
            {sponsors.map((sponsor, index) => {
              const item = {
                ...sponsor,
                description:
                  siteConfig.themeConfig.t.pages.partners.sponsors[index]
                    .description,
              }
              return <Avatar {...item} key={index} />
            })}
          </div>
        </section>
        <section>
          <h2>{siteConfig.themeConfig.t.pages.partners.collaboratorsLabel}</h2>
          <div className="row">
            {collaborators.map((collaborator, index) => {
              const item = {
                ...collaborator,
                description:
                  siteConfig.themeConfig.t.pages.partners.collaborators[index]
                    .description,
              }
              return <Avatar {...item} key={index} />
            })}
          </div>
        </section>
        <section>
          <h2>{siteConfig.themeConfig.t.pages.partners.patronsLabel}</h2>
          <ul>
            {patrons.map((patron) => (
              <li>{patron.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default Partners
