import message from 'ant-design-vue/es/message'
import themeColor from './themeColor'

const colorList = [
  {
    key: '薄暮',
    color: '#F5222D'
  },
  {
    key: '火山',
    color: '#FA541C'
  },
  {
    key: '日暮',
    color: '#FAAD14'
  },
  {
    key: '明青',
    color: '#13C2C2'
  },
  {
    key: '极光绿',
    color: '#52C41A'
  },
  {
    key: '拂晓蓝（默认）',
    color: '#1890FF'
  },
  {
    key: '极客蓝',
    color: '#2F54EB'
  },
  {
    key: '酱紫',
    color: '#722ED1'
  }
]

const updateTheme = newPrimaryColor => {
  const hideMessage = message.loading('正在切换主题！', 0)
  themeColor.changeColor(newPrimaryColor).finally(() => {
    setTimeout(() => {
      hideMessage()
    }, 10)
  })
}

const updateWeakMode = weakMode => {
  // document.body.className = weakMode ? 'weakMode' : ''
  const app = document.body.querySelector('#app')
  if (weakMode) {
    app.classList.add('weakMode')
    app.classList.remove('darkMode')
    app.classList.remove('grayMode')
    document.documentElement.removeAttribute('theme')
  } else {
    app.classList.remove('weakMode')
  }
}

const updateDarkMode = darkMode => {
  const app = document.body.querySelector('#app')
  if (darkMode) {
    document.documentElement.setAttribute('theme', 'dark-mode')
    app.classList.remove('weakMode')
    app.classList.remove('grayMode')
  } else {
    document.documentElement.removeAttribute('theme')
  }
}

const updateGrayMode = grayMode => {
  const app = document.body.querySelector('#app')
  if (grayMode) {
    app.classList.add('grayMode')
    app.classList.remove('weakMode')
    app.classList.remove('darkMode')
    document.documentElement.removeAttribute('theme')
  } else {
    app.classList.remove('grayMode')
  }
}

export {
  updateTheme,
  colorList,
  updateWeakMode,
  updateDarkMode,
  updateGrayMode
}
