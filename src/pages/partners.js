import React from 'react'
import Layout from '@theme/Layout'

const imgPath = '/img/partners/'

const Avatar = ({ name, tags, image, description, link }) => {
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
            <button className="button button--secondary">Discover</button>
          </a>
        </div>
      </div>
    </div>
  )
}

function Partners() {
  const sponsors = [
    {
      name: <>Digital Ocean</>,
      link: 'https://m.do.co/c/40f468c2e493',
      tags: ['datacenter', 'deployment'],
      image: imgPath + 'DO_Logo_Vertical_Blue.png',
      description: (
        <>
          This project's infrastructure is supported in part by Digital Ocean.
          Click the button here to visit the Digital Ocean website and get $100
          credit that you can use within 60 days.
        </>
      ),
    },
    {
      name: <>netlify</>,
      link: 'https://www.netlify.com',
      tags: ['CD', 'documentation-site'],
      image: imgPath + 'netlify.svg',
      description: (
        <>
          Our docs are continuously deployed thanks to the kind support and
          amazing tooling provided to us by netlify. Their service puts the
          continuity in CI and the fun in functionality.
        </>
      ),
    },
    {
      name: <>MailScript()</>,
      link: 'https://mailscript.com',
      tags: ['automation', 'email'],
      image: imgPath + 'MailScript_logo.png',
      description: (
        <>
          Mailscript helps us automate and wrangle our many, many github
          notifications and apply granular actions to mails using rules.
          Whether forwards, catchalls, webhooks or even SMS notifications -
          MailScript() keeps on innovating!
        </>
      ),
    },
    {
      name: <>Clickup</>,
      link: 'https://clickup.com',
      tags: ['time management', 'scrum'],
      image: imgPath + 'clickup.png',
      description: (
        <>
          ClickUp is one app to replace them all. It's the future of work - where
          anyone can work on anything. More than just task management - ClickUp
          offers docs, reminders, goals, calendars, scheduling, and even an inbox.
          Fully customizable, ClickUp works for every type of team, so all teams
          can use the same app to plan, organize, and collaborate.
        </>
      ),
    },
    {
      name: <>wallaby.js</>,
      link: 'https://wallabyjs.com/',
      tags: ['testing', 'JS/TS'],
      image: imgPath + 'wallabyjs.png',
      description: (
        <>
          The awesome folks at wallaby.js comped the core team of Tauri with
          their futuristic REPL in the IDE test runner. If you avoid testing
          your JS because it takes so long - with wallaby you'll appreciate the
          immediate inline feedback. We do...
        </>
      ),
    },
  ]

  const collaborators = [
    {
      name: <>GUIJS</>,
      link: 'https://guijs.dev/',
      tags: ['Dev Toolkit', 'Early adopter'],
      image: imgPath + 'guijs-round.svg',
      description: (
        <>
          GUIJS is a toolkit for making your devlife easier. This collaboration
          enabled the extension of Tauri to have a new mode, the sidecar.
        </>
      ),
    },
    {
      name: <>PureOS</>,
      link: 'https://www.pureos.net/',
      tags: ['FLOSS OS', 'App store'],
      image: imgPath + 'pureos.png',
      description: (
        <>
          It can be argued that the humble beginnings of Tauri stretch back to a
          conversation where PureOS explained that Electron apps will never ship
          on the official PureOS store, and something else would be needed.
        </>
      ),
    },
    {
      name: <>IOTA</>,
      link: 'https://iota.org/',
      tags: ['App dev', 'Early adopter'],
      image: imgPath + 'IOTA_Logo_white_100px.png',
      description: (
        <>
          The first adopter of Tauri, close collaborators with common interests.
          IOTA is a permissionless distributed ledger technology, without miners
          and suited for low power devices.
        </>
      ),
    },
    {
      name: <>Amethyst</>,
      link: 'https://amethyst.rs/',
      tags: ['Games', 'Early adopter'],
      image: imgPath + 'amethyst-white.svg',
      description: (
        <>
          A data-driven game engine, in Rust - committed to nuturing an open
          source community.
        </>
      ),
    },
    {
      name: <>Meros</>,
      link: 'https://meroscrypto.io/',
      tags: ['App dev', 'Early adopter'],
      image: imgPath + 'meros.png',
      description: (
        <>
          If PureOS planted the seed of Tauri, Kayaba from Meros really kicked
          the can down the road with a perfectly timed question.
        </>
      ),
    },
    {
      name: <>Tensor</>,
      link: 'https://youtube.com/c/tensorprogramming',
      tags: ['Education', 'Videos'],
      image: imgPath + 'tensor.png',
      description: (
        <>
          One of the most polyglot professionals out there, TensorProgramming
          shares his knowledge and excitement about dozens of different
          programming languages on his YouTube channel.
        </>
      ),
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
    <Layout title="Partners">
      <div className="container margin-vert--lg">
        <h1 className="text--center margin-bottom--xl">Partners</h1>
        <section>
          <h2>Sponsors</h2>
          <div className="row">
            {sponsors.map((sponsor, index) => (
              <Avatar {...sponsor} key={index} />
            ))}
          </div>
        </section>
        <section>
          <h2>Collaborators</h2>
          <div className="row">
            {collaborators.map((collaborator, index) => (
              <Avatar {...collaborator} key={index} />
            ))}
          </div>
        </section>
        <section>
          <h2>Patrons</h2>
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
