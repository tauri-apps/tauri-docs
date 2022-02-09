import React from 'react'
import classNames from 'classnames'

import Icon from '../Icon'

import styles from './styles.module.css'

export default ({ type = 'info', title, icon, children }) => (
  <div
    className={classNames('alert', 'alert--' + type, styles.alert)}
    style={{ marginBottom: '30px' }}
    role="alert"
  >
    {icon && (
      <>
        <Icon title={icon} className={styles.icon} />
        &nbsp;
      </>
    )}
    <div className={styles.container}>
      {title && <span className={styles.title}>{title}</span>}
      <div className={styles.content}>{children}</div>
    </div>
  </div>
)
