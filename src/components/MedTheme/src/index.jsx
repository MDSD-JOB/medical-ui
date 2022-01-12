import './index.less'
import '../../style'

import MedDrawer from './../../MedDrawer'
import MedTooltip from './../../MedTooltip'
import MedDivider from './../../MedDivider'
import MedSwitch from './../../MedSwitch'
import { MedTag } from './../../MedTag'
import MedIcon from './../../MedIcon'
import { MedList, MedListItem, MedListItemMeta } from './../../MedList'

import {
  updateTheme,
  updateWeakMode,
  updateDarkMode,
  updateGrayMode,
  colorList
} from './settingConfig'
export default {
  name: 'MedTheme',
  components: {
    MedDrawer,
    MedTooltip,
    MedDivider,
    MedList,
    MedListItem,
    MedListItemMeta,
    MedSwitch,
    MedIcon,
    MedTag
  },
  data() {
    return {
      visible: false,
      lessLoaded: false,
      weakMode: false,
      darkMode: false,
      grayMode: false,
      colorList
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    toggle() {
      this.visible = !this.visible
    },
    onWeakMode(checked) {
      this.darkMode = false
      this.grayMode = false
      this.weakMode = checked
      updateWeakMode(checked)
    },
    onDarkMode(checked) {
      this.weakMode = false
      this.grayMode = false
      this.darkMode = checked
      updateDarkMode(checked)
    },
    onGrayMode(checked) {
      this.weakMode = false
      this.darkMode = false
      this.grayMode = checked
      updateGrayMode(checked)
    },
    changeColor(color) {
      if (this.primaryColor !== color) {
        updateTheme(color)
      }
    }
  },
  render() {
    const {
      primaryColor,
      changeColor,
      weakMode,
      darkMode,
      grayMode,
      visible,
      onWeakMode,
      onDarkMode,
      onGrayMode,
      onClose,
      toggle
    } = this
    return (
      <med-drawer
        class="med-theme-wrapper"
        style="position: absolute"
        width="300"
        placement="right"
        onClose={onClose}
        closable={false}
        visible={visible}
        drawer-style={{ position: 'absolute' }}
      >
        <div class="setting-drawer-index-content">
          <div style={{ marginBottom: '24px' }}>
            <h3 class="setting-drawer-index-title">主题色</h3>

            <div style="height: 20px">
              {colorList.map(item => {
                return (
                  <med-tooltip class="setting-drawer-theme-color-colorBlock">
                    <template slot="title">{item.key}</template>
                    <med-tag
                      color={item.color}
                      onClick={() => changeColor(item.color)}
                    >
                      {item.color === primaryColor ? (
                        <med-icon type="check" />
                      ) : (
                        ''
                      )}
                    </med-tag>
                  </med-tooltip>
                )
              })}
            </div>
          </div>
          <med-divider />
          <div style={{ marginBottom: '24px' }}>
            <h3 class="setting-drawer-index-title">其他设置</h3>
            <div>
              <med-list split={false}>
                <med-list-item>
                  <med-switch
                    slot="actions"
                    size="small"
                    defaultChecked={weakMode}
                    checked={weakMode}
                    onChange={onWeakMode}
                  />
                  <med-list-item-meta>
                    <div slot="title">色弱模式</div>
                  </med-list-item-meta>
                </med-list-item>
                <med-list-item>
                  <med-switch
                    slot="actions"
                    size="small"
                    defaultChecked={darkMode}
                    checked={darkMode}
                    onChange={onDarkMode}
                  />
                  <med-list-item-meta>
                    <div slot="title">黑暗模式</div>
                  </med-list-item-meta>
                </med-list-item>
                <med-list-item>
                  <med-switch
                    slot="actions"
                    size="small"
                    defaultChecked={grayMode}
                    checked={grayMode}
                    onChange={onGrayMode}
                  />
                  <med-list-item-meta>
                    <div slot="title">哀悼模式</div>
                  </med-list-item-meta>
                </med-list-item>
              </med-list>
            </div>
          </div>
          <med-divider />
        </div>
        <div class="setting-drawer-index-handle" onClick={toggle} slot="handle">
          {!visible ? <a-icon type="setting" /> : <med-icon type="close" />}
        </div>
      </med-drawer>
    )
  }
}
