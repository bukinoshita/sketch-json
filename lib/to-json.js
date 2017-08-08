'use strict'

const fs = require('fs-extra')
const decompress = require('decompress')
const globby = require('globby')

module.exports = () => {
  return new Promise((resolve, reject) => {
    globby(['*.sketch']).then(sketchFiles => {
      if (sketchFiles.length <= 0) {
        return reject(new TypeError('Sketch file not found'))
      }

      sketchFiles.map(sketchFile => {
        const copy = `${process.cwd()}/${sketchFile}`
        const sketchCopy = copy.replace('.sketch', '.zip')

        return fs.copy(sketchFile, sketchCopy, err => {
          if (err) {
            return reject(
              new TypeError('An error occurred when copying the sketch file')
            )
          }

          const folder =
            sketchFiles.length > 1
              ? `sketch/${sketchFile.replace('.sketch', '')}`
              : 'sketch'
          decompress(sketchCopy, folder).then(() => resolve())
        })
      })
    })
  })
}
