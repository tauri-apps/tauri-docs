const { execSync } = require('child_process')

const languages = [
  'en',
  // 'fr',
  // 'pt-br',
  // 'zh-hant',
  // 'zh-hans',
  // 'ru'
]
languages.forEach(async (language) => {
  console.log(`Building "${language}" docs version...`)

  // Trying to build concurrently made the generation crash, that's why we're using execSync here
  execSync(
    `LANGUAGE=${language} yarn build --out-dir ./build/${language}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        return
      }
      console.log(`stdout: ${stdout}`)
      console.error(`stderr: ${stderr}`)
    }
  )
  console.log('Done!')
})
