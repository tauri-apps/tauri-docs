import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'
import { Collapse } from '@theme/Collapse'

import { Opening, Closing } from '@theme/CurlyBraces'

function Header(row) {
  return (
    <span
      className={styles.property}
      dangerouslySetInnerHTML={{
        __html: `<code><strong>${row.property}</strong><span>${
          row.optional ? '?' : ''
        }: ${row.type}</span></code>`,
      }}
    ></span>
  )
}

function Content(row) {
  return (
    <div>
      {!row.child && Header(row)}
      {!row.child && (
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: row.description }}
        ></div>
      )}

      {row.child}
    </div>
  )
}

export default ({ rows, anchorRoot = '' }) => {
  return (
    <div className={styles.row}>
      <Opening />
      
      <div className={classnames(styles.content)}>
      {rows.map((row) =>
        row.child ? (
          <Collapse header={Header(row)}>
            {Content(row)}
          </Collapse>
        ) : (
          <div
            id={(anchorRoot ? anchorRoot + '.' : '') + row.property}
            className={classnames('anchorify')}
          >
            {Content(row)}
          </div>
        )
      )}
      </div>
      <Closing />
    </div>
  )
}
