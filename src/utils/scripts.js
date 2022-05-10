import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export function getCurrentVersion() {
  const context = useDocusaurusContext()
  try {
    return context.globalData[
      'docusaurus-plugin-content-docs'
    ].default.versions.filter((item) => item.name == 'current')[0].path
  } catch {
    return 'v1'
  }
}
