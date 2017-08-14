# sketch-json [![Build Status](https://travis-ci.org/bukinoshita/sketch-json.svg?branch=master)](https://travis-ci.org/bukinoshita/sketch-json)

> Transform sketch files to json and json to sketch files


## How it works

Different from [sketch2json](https://github.com/xaviervia/sketch2json), with `sketch-json` you can transform `json` to `sketch` and `sketch` to `json`.

`sketch-json` will generate the `json` files by zipping the `sketch` file and decompressing it. By doing that a [sketch folder will be generated with all json files](https://github.com/bukinoshita/sketch-json/tree/master/example/sketch).

The idea of this libraries is to prepare json files to be pushed/pull to github/gitlab/etc. Version control for designers!


## Versioning design

<img src="https://github.com/bukinoshita/sketch-json/blob/master/example/sketch-json.gif" />

Check versioning [here](https://github.com/bukinoshita/sketch-json/commit/2b816ff85e75a733b45e3b514bb2626b4637cdf8)<br/>
Check `terminal-sketch` example [here](https://github.com/bukinoshita/terminal-sketch)


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


## API

### sketchJson

#### .toJson()

Returns a `promise`<br/>
Transform Sketch files to json

#### .toSketch()

Returns a `promise`<br/>
Transform json files to Sketch


## Related

- [git-sketch](https://github.com/bukinoshita/git-sketch) — Versioning design with ease


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
