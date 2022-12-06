import React from 'react'
import Layout from '@theme-original/Navbar/Layout'
import styles from './styles.module.css'
import classNames from 'classnames'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import IconLanguage from '@theme/Icon/Language'

export default function LayoutWrapper(props) {
  const { siteConfig, i18n } = useDocusaurusContext()
  return (
    <>
      <Layout {...props} />
      {i18n.currentLocale != siteConfig.i18n.defaultLocale && (
        <div
          className={classNames('alert alert--info', styles.alert)}
          role="alert"
        >
          {/* Note: This is purposefully not translated so that we can keep the official wording */}
          <IconLanguage className={classNames(styles.iconLanguage)} />
          You're visiting the {
            i18n.localeConfigs[i18n.currentLocale].label
          }{' '}
          version of the site translated by the community. This content is not
          reviewed and is not guaranteed to be accurate nor up-to-date.
        </div>
      )}
    </>
  )
}
