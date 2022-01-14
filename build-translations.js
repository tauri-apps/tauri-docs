const { execSync } = require('child_process')

  console.log(`Running translations...`)

  // Java must be installed for this due to the Crowdin CLI
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

  // Run the normal build
  execSync('node build')