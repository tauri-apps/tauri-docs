import { nonDefaultLocales } from '../locales.js'
import fs from 'fs'

nonDefaultLocales.forEach((lang) =>
  fs.rmSync(`src/pages/${lang}`, { recursive: true, force: true })
)
