const { execSync } = require('child_process')

  console.log(`Running translations...`)

  execSync(
    `crowdin:sync`,
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
