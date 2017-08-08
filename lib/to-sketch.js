'use strict'

const fs = require('fs-extra')
const globby = require('globby')

module.exports = () => {
  return new Promise((resolve, reject) => {
    globby(['*.zip']).then(zipFiles => {
      if (zipFiles.length <= 0) {
        return reject(new TypeError('Zip file not found'))
      }

      zipFiles.map(zipFile => {
        const copy = `${process.cwd()}/${zipFile}`
        const zipCopy = copy.replace('.zip', '.sketch')

        return fs.copy(zipFile, zipCopy, err => {
          if (err) {
            return reject(
              new TypeError('An error occurred when copying the zip file')
            )
          }

          resolve()
        })
      })
    })
  })
}
