// Packages
const fs = require('fs-extra')
const decompress = require('decompress')
const globby = require('globby')
const del = require('del')

// Lib
const prettify = require('./prettify')

async function toJSON() {
  const files = await globby(['**/*.sketch'])

  if (files && files.length > 0) {
    await del(['sketch-json'])

    files.forEach(async file => {
      const copy = `${process.cwd()}/${file}`.replace('.sketch', '.zip')

      await fs.copy(file, copy)

      const folder = files.length > 1 ? `sketch-json/${file.replace('.sketch', '')}` : 'sketch-json'

      await decompress(copy, folder)
      await prettify()
    })
  }

  return new TypeError('Sketch file not found')
}

module.exports = toJSON
