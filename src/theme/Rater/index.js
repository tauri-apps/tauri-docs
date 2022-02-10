import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

const Item = ({ backgroundColor }) => <span style={{ backgroundColor }}></span>

const Rater = ({ value, color = '#FFC231' }) => {
  const items = []

  for (let i = 0; i < 5; ++i) {
    items.push(<Item backgroundColor={i < value ? color : '#759aa1'} />)
  }

  return <span className={classNames(styles.rater)}>{items}</span>
}

export default Rater
