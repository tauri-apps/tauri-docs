import React from 'react'
import classnames from 'classnames'

const colors = {
  danger: 'var(--ifm-color-danger)',
  warning: 'var(--ifm-color-warning)',
  info: 'var(--ifm-color-info)',
  default: 'var(--ifm-font-base-color)',
}

export default ({ title, className, color = 'default' }) => (
  <i
    className={classnames('ti-' + title, className)}
    style={{ color: colors[color] }}
  ></i>
)
