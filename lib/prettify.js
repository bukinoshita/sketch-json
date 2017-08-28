'use strict'

const { js_beautify } = require('js-beautify')
const fs = require('fs')

fs.readFile('./../example/sketch/meta.json', 'utf8', function(err, data) {
  if (err) {
    throw err
  }
  console.log(js_beautify(data, { indent_size: 2 }))
})
