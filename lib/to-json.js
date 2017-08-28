'use strict'

const fs = require('fs-extra')
const decompress = require('decompress')
const globby = require('globby')
const del = require('del')

module.exports = () => {
  return new Promise((resolve, reject) => {
    globby(['*.sketch']).then(sketchFiles => {
      if (sketchFiles.length <= 0) {
        return reject(new TypeError('Sketch file not found'))
      }

      del(['sketch-json']).then(() => {
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
                ? `sketch-json/${sketchFile.replace('.sketch', '')}`
                : 'sketch-json'
            decompress(sketchCopy, folder).then(() => resolve())
          })
        })
      })
    })
  })
}
