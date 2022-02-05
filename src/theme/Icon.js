import React from 'react'
import classnames from 'classnames'

const legend = {
  danger: {
    color: 'var(--ifm-color-danger)',
    icon: 'exclamation-diamond-fill',
  },
  warning: {
    color: 'var(--ifm-color-warning)',
    icon: 'skip-end-fill',
  },
  info: {
    color: 'var(--ifm-color-info)',
    icon: 'info-circle-fill',
  },
  default: {
    color: 'var(--ifm-font-base-color)',
    icon: 'info-circle-fill',
  }
}

export default ({ type = 'default' }) => (
  <i
    className={classnames('bi', 'bi-' + legend[type].icon)}
    style={{ color: legend[type].color }}
  ></i>
)
