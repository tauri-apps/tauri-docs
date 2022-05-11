import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export function getCurrentVersion() {
  const context = useDocusaurusContext()
  try {
    return context.globalData[
      'docusaurus-plugin-content-docs'
    ].default.versions.filter((item) => item.isLast)[0].path
  } catch {
    return 'v1'
  }
}
