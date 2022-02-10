import React from 'react'
import classNames from 'classnames'

const colors = {
  danger: 'var(--ifm-color-danger)',
  warning: 'var(--ifm-color-warning)',
  info: 'var(--ifm-color-info)',
  default: 'var(--ifm-font-base-color)',
}

export default ({ title, className, color = 'default' }) => (
  <i
    className={classNames('ti-' + title, className)}
    style={{ color: colors[color] }}
  ></i>
)
