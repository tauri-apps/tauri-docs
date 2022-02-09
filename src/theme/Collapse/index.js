import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

export const Collapse = ({ children, isOpened = false, header }) => {
  const [isOpenedState, toggle] = useState(isOpened)

  const collapseStyle = isOpenedState
    ? {
        display: 'block',
      }
    : {
        display: 'none',
      }

  return (
    <div>
      <div className={classNames(styles.header, isOpenedState ? styles.active : '')} onClick={() => toggle(!isOpenedState)}>
        {header}
      </div>
      <div className={styles.content} style={collapseStyle}>
        {children}
      </div>
    </div>
  )
}
