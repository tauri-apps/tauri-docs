import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'
import Collapse, { Panel } from 'rc-collapse'

import { Opening, Closing } from '@theme/CurlyBraces'

function Header (row) {
  return (
    <div
      className={styles.property}
      dangerouslySetInnerHTML={{
        __html: `<code><strong>${row.property}</strong><span>${
          row.optional ? '?' : ''
        }: ${row.type}</span></code>`,
      }}
    ></div>
  )
}

function Content (row) {
  return (
    <div>
      {!row.child && (Header(row))}
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
      <Collapse>
        {rows.map((row) => (
          row.child ? <Panel extra={Header(row)}>
            {Content(row)}
          </Panel> : <div
            id={(anchorRoot ? anchorRoot + '.' : '') + row.property}
            className={classnames(styles.content, 'anchorify')}
          >
            {Content(row)}
          </div>
        ))}
      </Collapse>
      <Closing />
    </div>
  )
}