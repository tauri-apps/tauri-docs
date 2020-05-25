/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React, { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import { defaultProps } from 'prism-react-renderer'
import Highlight from 'react-highlight'
import Prism from 'prism-react-renderer/prism'
import defaultTheme from 'prism-react-renderer/themes/palenight'
import Clipboard from 'clipboard'
import rangeParser from 'parse-numeric-range'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useThemeContext from '@theme/hooks/useThemeContext'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-rust')

import styles from './styles.module.css'

const highlightLinesRangeRegex = /{([\d,-]+)}/
const getHighlightDirectiveRegex = (
  languages = ['js', 'jsBlock', 'jsx', 'python', 'html', 'rust']
) => {
  // supported types of comments
  const comments = {
    js: {
      start: '\\/\\/',
      end: '',
    },
    jsBlock: {
      start: '\\/\\*',
      end: '\\*\\/',
    },
    jsx: {
      start: '\\{\\s*\\/\\*',
      end: '\\*\\/\\s*\\}',
    },
    python: {
      start: '#',
      end: '',
    },
    rust: {
      start: '\\/\\/',
      end: '',
    },
    rustBlock: {
      start: '\\/\\*',
      end: '\\*\\/',
    },
    html: {
      start: '<!--',
      end: '-->',
    },
  }
  // supported directives
  const directives = [
    'highlight-next-line',
    'highlight-start',
    'highlight-end',
  ].join('|')
  // to be more reliable, the opening and closing comment must match
  const commentPattern = languages
    .map(
      (lang) =>
        `(?:${comments[lang].start}\\s*(${directives})\\s*${comments[lang].end})`
    )
    .join('|')
  // white space is allowed, but otherwise it should be on it's own line
  return new RegExp(`^\\s*(?:${commentPattern})\\s*$`)
}
// select comment styles based on language
const highlightDirectiveRegex = (lang) => {
  switch (lang) {
    case 'js':
    case 'javascript':
    case 'ts':
    case 'typescript':
      return getHighlightDirectiveRegex(['js', 'jsBlock'])

    case 'jsx':
    case 'tsx':
      return getHighlightDirectiveRegex(['js', 'jsBlock', 'jsx'])

    case 'html':
      return getHighlightDirectiveRegex(['js', 'jsBlock', 'html'])

    case 'python':
    case 'py':
      return getHighlightDirectiveRegex(['python'])

    case 'rust':
      return getHighlightDirectiveRegex(['rust', 'rustBlock'])

    default:
      // all comment types
      return getHighlightDirectiveRegex()
  }
}
const codeBlockTitleRegex = /title=".*"/

export default ({ children, className: languageClassName, metastring }) => {
  const {
    siteConfig: {
      themeConfig: { prism = {} },
    },
  } = useDocusaurusContext()

  const [showCopied, setShowCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  // The Prism theme on SSR is always the default theme but the site theme
  // can be in a different mode. React hydration doesn't update DOM styles
  // that come from SSR. Hence force a re-render after mounting to apply the
  // current relevant styles. There will be a flash seen of the original
  // styles seen using this current approach but that's probably ok. Fixing
  // the flash will require changing the theming approach and is not worth it
  // at this point.
  useEffect(() => {
    setMounted(true)
  }, [])

  const target = useRef(null)
  const button = useRef(null)
  let highlightLines = []
  let codeBlockTitle = ''

  const { isDarkTheme } = useThemeContext()
  const lightModeTheme = prism.theme || defaultTheme
  const darkModeTheme = prism.darkTheme || lightModeTheme
  const prismTheme = isDarkTheme ? darkModeTheme : lightModeTheme

  if (metastring && highlightLinesRangeRegex.test(metastring)) {
    const highlightLinesRange = metastring.match(highlightLinesRangeRegex)[1]
    highlightLines = rangeParser.parse(highlightLinesRange).filter((n) => n > 0)
  }

  if (metastring && codeBlockTitleRegex.test(metastring)) {
    codeBlockTitle = metastring
      .match(codeBlockTitleRegex)[0]
      .split('title=')[1]
      .replace(/"+/g, '')
  }

  useEffect(() => {
    let clipboard

    if (button.current) {
      clipboard = new Clipboard(button.current, {
        target: () => target.current,
      })
    }

    return () => {
      if (clipboard) {
        clipboard.destroy()
      }
    }
  }, [button.current, target.current])

  let language = languageClassName && languageClassName.replace(/language-/, '')

  if (!language && prism.defaultLanguage) {
    language = prism.defaultLanguage
  }

  // only declaration OR directive highlight can be used for a block
  let code = children.replace(/\n$/, '')
  if (highlightLines.length === 0 && language !== undefined) {
    let range = ''
    const directiveRegex = highlightDirectiveRegex(language)
    // go through line by line
    const lines = children.replace(/\n$/, '').split('\n')
    let blockStart
    // loop through lines
    for (let index = 0; index < lines.length; ) {
      const line = lines[index]
      // adjust for 0-index
      const lineNumber = index + 1
      const match = line.match(directiveRegex)
      if (match !== null) {
        const directive = match
          .slice(1)
          .reduce((final, item) => final || item, undefined)
        switch (directive) {
          case 'highlight-next-line':
            range += `${lineNumber},`
            break

          case 'highlight-start':
            blockStart = lineNumber
            break

          case 'highlight-end':
            range += `${blockStart}-${lineNumber - 1},`
            break

          default:
            break
        }
        lines.splice(index, 1)
      } else {
        // lines without directives are unchanged
        index += 1
      }
    }
    highlightLines = rangeParser.parse(range)
    code = lines.join('\n')
  }

  const handleCopyCode = () => {
    window.getSelection().empty()
    setShowCopied(true)

    setTimeout(() => setShowCopied(false), 2000)
  }
  console.log(styles)

  return (
    <div ref={target} className={styles.codeBlockContainer}>
      {/* {codeBlockTitle && (
          <div style={style} className={styles.codeBlockTitle}>
            {codeBlockTitle}
          </div>
        )} */}
      <Highlight
        className={classnames(language, 'codeBlockContent')}
        {...defaultProps}
        key={mounted}
        code={code}
        language={language}
      >
        {code}
      </Highlight>
      <button
        ref={button}
        type="button"
        aria-label="Copy code to clipboard"
        className={classnames(styles.copyButton, {
          [styles.copyButtonWithTitle]: codeBlockTitle,
        })}
        onClick={handleCopyCode}
      >
        {showCopied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}
