import React from 'react'
import styles from './styles.module.css'

import { Opening, Closing } from '@theme/SquareBrackets'

export default ({ children, type }) => (
  <div className={styles.row}>
    <Opening />
    <div className={styles.property}>
      <span>
        <code>{type}</code>
      </span>
    </div>
    <div className={styles.content}>{children}</div>
    <Closing />
  </div>
)
