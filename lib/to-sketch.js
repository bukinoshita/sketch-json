'use strict'

const fs = require('fs-extra')
const globby = require('globby')

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    const files = await globby(['**/*.zip'])

    if (files.length <= 0) {
      return reject(new TypeError('Zip file not found'))
    }

    files.map(async zipFile => {
      const copy = `${process.cwd()}/${zipFile}`.replace('.zip', '.sketch')

      await fs.copy(zipFile, copy)

      resolve()
    })
  })
}
