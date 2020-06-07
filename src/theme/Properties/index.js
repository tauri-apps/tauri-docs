import React from 'react'
import styles from './styles.module.css'

import { Opening, Closing } from '@theme/CurlyBraces'

export default ({ rows }) => (
  <div className={styles.row}>
    <Opening />
    {rows.map((row) => (
      <div className={styles.content}>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<h3><code>' +
              row.property +
              '</code></h3> <code>' +
              row.type +
              '</code>',
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
