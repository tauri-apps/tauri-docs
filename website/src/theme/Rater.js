import React from 'react'
import classnames from 'classnames'
import styles from './rater.module.css'

const Item = ({ isChecked }) => (
  <span className={classnames(isChecked ? styles.checked : '')}></span>
)

const Rater = ({ value }) => {
  const items = []
  for (let i = 0; i < 5; ++i) {
    items.push(<Item isChecked={i < value} />)
  }

  return <span className={classnames(styles.rater)}>{items}</span>
}

export default Rater
