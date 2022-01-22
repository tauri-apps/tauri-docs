import classnames from 'classnames'
import React from 'react'
import styles from './oslist.module.css'
import Link from '@docusaurus/Link'

export default ({ content }) => {
  return (
    <div className={classnames(styles.osList, 'container')}>
      <div className="row">
        <Link to={content.linux.link} className={classnames('col')}>
          <div className="card">
            <div className="card__body">
              <div className={styles.osIconLink}>
                <i
                  className={classnames(styles.osIcon, 'bi bi-terminal-fill')}
                />
              </div>
            </div>
            <div className="card__footer">
              <Link to={content.linux.link}>
                <h3>{content.linux.title}</h3>
              </Link>
            </div>
          </div>
        </Link>
        <Link to={content.macos.link} className={classnames('col')}>
          <div className="card">
            <div className="card__body">
              <div className={styles.osIconLink}>
                <i
                  className={classnames(styles.osIcon, 'bi bi-apple')}
                />
              </div>
            </div>
            <div className="card__footer">
              <Link to={content.macos.link}>
                <h3>{content.macos.title}</h3>
              </Link>
            </div>
          </div>
        </Link>
        <Link to={content.windows.link} className={classnames('col')}>
          <div className="card">
            <div className="card__body">
              <div className={styles.osIconLink}>
                <i
                  className={classnames(styles.osIcon, 'bi bi-windows')}
                />
              </div>
            </div>
            <div className="card__footer">
              <Link to={content.windows.link}>
                <h3>{content.windows.title}</h3>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
