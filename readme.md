# sketch-json [![Build Status](https://travis-ci.org/bukinoshita/sketch-json.svg?branch=master)](https://travis-ci.org/bukinoshita/sketch-json)

> Transform sketch files to json and json to sketch files

## Install

```bash
$ yarn add sketch-json
```

## Usage

```javascript
const sketchJson = require('sketch-json')

sketchJson.toJson().then(() => console.log('Done!'))
// => Done!

sketchJson.toSketch().then(() => console.log('Done!'))
// => Done!
```

## How it works

Different from [sketch2json](https://github.com/xaviervia/sketch2json), with `sketch-json` you can transform `json` to `sketch` and `sketch` to `json`.

`sketch-json` will generate the `json` files by zipping the `sketch` file and decompressing it. By doing that a sketch folder will be generated with all json files

The idea of this libraries is to prepare json files to be pushed/pull to github/gitlab/etc. Version control for designers!

## Versioning design

<img src="https://github.com/bukinoshita/smiley-sketch/blob/master/smile-sketch.gif" width="500"/>

## API

### sketchJson

#### .toJson()

Returns a `promise`<br/>
Transform Sketch files to json

#### .toSketch()

Returns a `promise`<br/>
Transform json files to Sketch

## Related

* [git-sketch](https://github.com/bukinoshita/git-sketch) — Versioning design with ease
* [sketch-json-cli](https://github.com/bukinoshita/sketch-json-cli) — CLI for this module
* [smiley-sketch](https://github.com/bukinoshita/smiley-sketch) — Smiley sketch
* [terminal-sketch](https://github.com/bukinoshita/terminal-sketch) — Terminal sketch

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
