import React from 'react'
import classnames from 'classnames'

export default ({ title, className }) => <i className={classnames('ti-' + title, className)}></i>
