const modulePath = require('path')
const fs = require('fs')

function mkdirSync(path) {
  if(!fs.existsSync(path)) {
    const dirs = path.split(modulePath.sep)
    const toMake = dirs.pop()
    const rest = dirs.join(modulePath.sep)
    mkdirSync(rest);
    fs.mkdirSync(modulePath.join(rest, toMake));
  }
}

mkdirSync(modulePath.join(__dirname, 'path/to/something'))
