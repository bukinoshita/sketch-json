// Packages
const fs = require('fs-extra')
const globby = require('globby')

async function toSketch() {
  const files = await globby(['**/*.zip'])

  if (files && files.length > 0) {
    files.forEach(async zipFile => {
      const copy = `${process.cwd()}/${zipFile}`.replace('.zip', '.sketch')

      await fs.copy(zipFile, copy)
    })
  }

  return new TypeError('Zip file not found')
}

module.exports = toSketch
