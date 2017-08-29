'use strict'

const fs = require('fs')
const { js_beautify } = require('js-beautify')
const globby = require('globby')

module.exports = () =>
  globby('./sketch-json/**/*.json').then(files =>
    files.map(file => {
      return fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
          throw new TypeError(err)
        }

        const json = js_beautify(data, { indent_size: 2 })

        fs.writeFile(file, json, err => {
          if (err) {
            throw new TypeError(err)
          }
        })
      })
    })
  )
