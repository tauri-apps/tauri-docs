import classNames from 'classnames'
import React from 'react'
import styles from './oslist.module.css'
import Link from '@docusaurus/Link'

export default ({ content }) => {
  return (
    <div className={classNames(styles.osList, 'container')}>
      <div className="row">
        <div className={classNames('col')}>
          <div className="card">
            <div className="card__body">
              <Link to={content.linux.link} className={styles.osIconLink}>
                <i className={classNames(styles.osIcon, 'ti-linux')}></i>
              </Link>
            </div>
            <div className="card__footer">
              <Link to={content.linux.link}>
                <h3>{content.linux.title}</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className={classNames('col')}>
          <div className="card">
            <div className="card__body">
              <Link to={content.macos.link} className={styles.osIconLink}>
                <i className={classNames(styles.osIcon, 'ti-apple')}></i>
              </Link>
            </div>
            <div className="card__footer">
              <Link to={content.macos.link}>
                <h3>{content.macos.title}</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className={classNames('col')}>
          <div className="card">
            <div className="card__body">
              <Link to={content.windows.link} className={styles.osIconLink}>
                <i className={classNames(styles.osIcon, 'ti-microsoft')}></i>
              </Link>
            </div>
            <div className="card__footer">
              <Link to={content.windows.link}>
                <h3>{content.windows.title}</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
