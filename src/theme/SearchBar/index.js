import React, { useEffect } from 'react'
import classNames from 'classnames'
import 'docs-searchbar.js/dist/cdn/docs-searchbar.min.css'
import styles from './searchbar.module.css'

const SearchBar = ({className}) => {
  console.log(className);
  useEffect(() => {
    const docsSearchBar = require('docs-searchbar.js').default
    docsSearchBar({
      hostUrl: 'https://search.tauri.studio',
      apiKey:
        'ea0105f56bb5a2111ed28c7a0c637fc0bed07273f571dc7cb1f73900e44f8e7f',
      indexUid: '0_0_0',
      inputSelector: '#search-bar-input',
      debug: process.env.NODE_ENV === 'development',
      transformData(hits) {
        return hits.map((hit) => ({ ...hit, url: '/en/docs/' + hit.url }))
      },
    })
  }, [])
  return (
    <div className={className + " SearchBar"}>
      <input
        type="text"
        className={classNames(styles.search)}
        id="search-bar-input"
      />
    </div>
  )
}

export default SearchBar
