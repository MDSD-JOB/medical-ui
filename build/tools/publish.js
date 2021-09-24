const inquirer = require('inquirer')
const { execSync } = require('child_process')

console.log('开始准备发布!')

const questions = [
  {
    type: 'list',
    name: 'level',
    message: '发什么等级?',
    choices: ['patch', 'minor', 'major'],
    filter: function(val) {
      return val.toLowerCase()
    }
  },
  {
    type: 'list',
    name: 'pack',
    message: '用什么打包方式?',
    choices: [
      {
        name: 'vue-cli3 库模式',
        value: 'build:lib'
      },
      { name: '自定义 webpack', value: 'comp' },
      { name: '无 webpack', value: 'compile' }
    ],
    filter: function(val) {
      return val.toLowerCase()
    }
  }
]

inquirer.prompt(questions).then(answer => {
  const { pack, level } = answer

  // TODO: 检测git工作树, 如未清空则自动生成提交

  try {
    execSync(`yarn ${pack}`, { stdio: 'inherit', encoding: 'utf8' })

    // 发布前要清空工作树, 这个错误被捕获但没有打印出日志
    execSync(`npm version ${level}`, { stdio: 'inherit', encoding: 'utf8' })

    execSync('npm publish --with-run-tools', {
      stdio: 'inherit',
      encoding: 'utf8'
    })

    console.log('发布成功!')
  } catch (e) {
    console.log('发布失败! 错误信息如下: \n')
    console.log('--------------------------------')
    console.warn(e)
  }
})
