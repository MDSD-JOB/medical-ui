import message from 'ant-design-vue/es/message'
const CLIENT_TAG_ID = '__MEDICAL_UI_THEME_LINK__'

const themes = [
  { theme: 'default', name: '默认', color: '#0056a4' },
  { theme: 'purple', name: '紫色', color: '#722ed1' },
  { theme: 'cyan', name: '青色', color: '#13c2c2' },
  { theme: 'green', name: '绿色', color: '#52c41a' },
  { theme: 'magenta', name: '洋红', color: '#eb2f96' },
  { theme: 'red', name: '红色', color: '#f5222d' },
  { theme: 'orange', name: '橙色', color: '#fa8c16' },
  { theme: 'yellow', name: '黄色', color: '#fadb14' },
  { theme: 'volcano', name: '火山', color: '#fa541c' },
  { theme: 'geekblue', name: '蓝色', color: '#2f54eb' },
  { theme: 'lime', name: '石灰', color: '#a0d911' },
  { theme: 'gold', name: '金色', color: '#faad14' }
]

const updateTheme = n => {
  const hideMessage = message.loading('正在切换主题！', 0)
  if (themes.findIndex(v => v.theme === n) > 0) {
    let link = document.getElementById(CLIENT_TAG_ID)
    if (!link) {
      link = document.createElement('link')
      link.rel = 'stylesheet'
      link.id = CLIENT_TAG_ID
      document.head.appendChild(link)
    }
    link.href = `/themes/${n}.css`
  }
  setTimeout(() => {
    document.documentElement.dataset.theme = n
    hideMessage()
  }, 100)
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

export { updateTheme, themes, updateWeakMode, updateDarkMode, updateGrayMode }
