import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import {
  findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal'
import isInternalUrl from '@docusaurus/isInternalUrl'
import { translate } from '@docusaurus/Translate'
import styles from './styles.module.css'
function CardContainer({ href, children }) {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}
    >
      {children}
    </Link>
  )
}
function CardLayout({ href, icon, title, description, item }) {
  // console.log(item)
  return (
    <CardContainer href={href}>
      {/* {image && <p>Image goes here{image}</p>} */}

      <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
        {icon} {title}
      </h2>
      {description && (
        <p className={clsx(styles.cardDescription)} title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  )
}
function CardCategory({ item }) {
  const href = findFirstCategoryLink(item)
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null
  }

  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={item.customProps?.description}
    />
  )
}
function CardLink({ item }) {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗'
  const doc = useDocById(item.docId ?? undefined)
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={doc?.description}
      item={item.customProps}
    />
  )
}
export default function DocCard({ item }) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />
    case 'category':
      return <CardCategory item={item} />
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`)
  }
}
