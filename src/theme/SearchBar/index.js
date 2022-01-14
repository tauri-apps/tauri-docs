import React, { useEffect } from 'react'
import classNames from 'classnames'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import 'docs-searchbar.js/dist/cdn/docs-searchbar.min.css'
import styles from './searchbar.module.css'
import Icon from '@theme/Icon'

const SearchBar = ({className}) => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  useEffect(() => {
    const docsSearchBar = require('docs-searchbar.js').default
    docsSearchBar({
      hostUrl: 'https://search.tauri.studio',
      apiKey:
        'ea0105f56bb5a2111ed28c7a0c637fc0bed07273f571dc7cb1f73900e44f8e7f',
      indexUid: siteConfig.themeConfig.version.trim().replace(/\W/g, '_'),
      inputSelector: '#search-bar-input',
      debug: process.env.NODE_ENV === 'development',
      transformData(hits) {
        return hits.map((hit) => ({ ...hit, url: '/en/docs/' + hit.url }))
      },
    })
  }, [])
  return (
    <div className={classNames(className, 'SearchBar', 'meilisearch-search-wrapper', styles.searchWrapper)}>
      <Icon title="search" className={classNames(styles.searchIcon)}/>
      <input
        placeholder="Search"
        type="text"
        className={classNames(styles.search)}
        id="search-bar-input"
      />
    </div>
  )
}

export default SearchBar
