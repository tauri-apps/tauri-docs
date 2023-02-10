import data from '../../tauri/tooling/api/docs/js-api.json'
import { writeFileSync } from 'fs'
import type { JSONOutput } from 'typedoc'

const linuxTag = '@linuxSupport'
const macTag = '@macSupport'
const windowsTag = '@windowsSupport'
const androidTag = '@androidSupport'
const iosTag = '@iosSupport'
const tags = [linuxTag, macTag, windowsTag, androidTag, iosTag]

const tsTable = []
tsTable.push(`| Name | Linux | macOS | Windows | Android | iOS |`)
tsTable.push('| ---- | ----- | ----- | ------- | ------- | --- |')

// @ts-ignore
data.children.forEach((child) => parseDeclaration(child))

function parseDeclaration(
  reflection: JSONOutput.DeclarationReflection,
  parentName?: string
) {
  let path = parentName ? `${parentName}/` : ''
  path = path += `${reflection.name}`
  reflection.signatures?.forEach((signature) => {
    let row = ''
    row += `| \`${path}\` |`
    tags.forEach((tag) => {
      const potentialTag = signature.comment?.blockTags?.find(
        (obj) => obj.tag === tag
      )
      if (potentialTag) {
        row += ` ${potentialTag.content[0].text} |`
      } else {
        row += ` ❗️ |`
      }
    })
    tsTable.push(row)
  })
  reflection.children?.forEach((child) => parseDeclaration(child, path))
}

writeFileSync('ts-overview.md', tsTable.join('\n'))
