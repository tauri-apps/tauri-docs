import React from 'react'
import styles from './styles.module.css'

import { Opening, Closing } from '@theme/CurlyBraces'

export default ({ rows }) => (
  <div className={styles.row}>
    <Opening />
    {rows.map((row) => (
      <div className={styles.content}>
        <div className={styles.property}
          dangerouslySetInnerHTML={{
            __html:
              '<strong><code>' +
              row.property +
              '</code></strong><span><code>: ' +
              row.type +
              '</code></span>',
          }}
        ></div>
        {!row.child && (
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: row.description }}
          ></div>
        )}

        {row.child}
      </div>
    ))}
    <Closing />
  </div>
)
