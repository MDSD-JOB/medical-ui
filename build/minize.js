const fs = require('fs-extra')
const compiler = require('vue-template-compiler')
const path = require('path')

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory()
}

function compile(dir) {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const absolutePath = path.join(dir, file)
    if (isDir(absolutePath)) {
      return compile(absolutePath)
    }
    if (/\.vue|.js$/.test(file)) {
      const source = fs.readFileSync(absolutePath, 'utf-8')
      const content = compiler(source).js
      const outputPath = absolutePath
        .replace('packages', 'lib')
        .replace('.vue', '.js')
      fs.outputFileSync(outputPath, content)
    }
  })
}

const dir = path.join(__dirname, '../packages')
compile(dir)
