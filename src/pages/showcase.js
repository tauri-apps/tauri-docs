import React from 'react'
import Modal from 'react-modal'
import Layout from '@theme/Layout'

const imgPath = '/img/showcase/'

const projects = [
  {
    title: 'GUIJS',
    image: imgPath + 'guijs/logo.svg',
    link: 'https://guijs.dev/',
    description: '',
    screenshots: ['0.png'].map((image) => imgPath + 'guijs/' + image),
  },
  {
    title: 'LuckyYou',
    image: imgPath + 'lucky-you/logo.png',
    link: 'https://github.com/jwenjian/lucky-you/',
    description: 'A free, tiny, simple, beautiful and useful app to do a lucky draw or make a roll call.',
    screenshots: ['0.png'].map((image) => imgPath + 'lucky-you/' + image),
  },
]

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
  },
  content: {
    top: '100px',
    backgroundColor: 'var(--ifm-background-color)',
  },
}

Modal.setAppElement('#__docusaurus')

function Showcase() {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Layout title="Showcase" id="showcase">
      <div className="container margin-vert--lg">
        <h1 className="text--center margin-bottom--xl">Showcase</h1>
        <p className="text--center">
          Here are the applications that have been made with Tauri!
        </p>
        <div className="row">
          {projects.map(
            ({ title, image, link, description, screenshots }, index) => (
              <div className="col col--4 margin-bottom--lg" key={index}>
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
                      alt={title}
                    />
                  </div>
                  <div className="card__body">
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <h4 className="avatar__name">{title}</h4>
                        <small className="avatar__subtitle">
                          {description}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="card__footer">
                    <a href={link} target="_blank">
                      <button
                        className="button button--secondary"
                        onClick={openModal}
                      >
                        Discover
                      </button>
                    </a>
                    {/* <button
                      className="button button--secondary"
                      onClick={openModal}
                    >
                      Discover
                    </button>

                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel={title}
                    >
                      <button onClick={closeModal}>close</button>
                      {screenshots.map(screenshot => <img src={screenshot}/>)}
                    </Modal> */}
                  </div>
                </div>
              </div>
            )
          )}
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
                  src="/img/smile.png"
                  alt="Your project!"
                />
              </div>
              <div className="card__body">
                <div className="avatar">
                  <div className="avatar__intro margin-left--none">
                    <h4 className="avatar__name">Your project</h4>
                    <small className="avatar__subtitle"></small>
                  </div>
                </div>
              </div>
              <div className="card__footer">
                <a href="#" target="_blank">
                  <button className="button button--secondary">Add it!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Showcase
