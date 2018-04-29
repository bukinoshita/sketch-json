'use strict'

const fs = require('fs-extra')
const decompress = require('decompress')
const globby = require('globby')
const del = require('del')

const prettify = require('./prettify')

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    const files = await globby(['**/*.sketch'])

    if (files.length <= 0) {
      return reject(new TypeError('Sketch file not found'))
    }

    await del(['sketch-json'])

    files.map(async file => {
      const copy = `${process.cwd()}/${file}`.replace('.sketch', '.zip')

      await fs.copy(file, copy)

      const folder =
        files.length > 1
          ? `sketch-json/${file.replace('.sketch', '')}`
          : 'sketch-json'

      console.log(file)

      await decompress(copy, folder)
      await prettify()
      resolve()
    })
  })
}
