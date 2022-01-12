const fs = require('fs-extra')
const path = require('path')
const { inspect } = require('util')

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory()
}

const json = {}
const dir = path.join(__dirname, '../src/components')
const files = fs.readdirSync(dir)
files.forEach(file => {
  const absolutePath = path.join(dir, file)
  if (isDir(absolutePath)) {
    json[file] = `./src/components/${file}`
  }
})

module.exports = json

console.log('打包组件: ' + inspect(json))
