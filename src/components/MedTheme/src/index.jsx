import './index.less'
import MedDrawer from './../../MedDrawer'
import MedTooltip from './../../MedTooltip'
import MedDivider from './../../MedDivider'
import MedSwitch from './../../MedSwitch'
import { MedTag } from './../../MedTag'
import MedIcon from './../../MedIcon'
import { MedList, MedListItem, MedListItemMeta } from './../../MedList'

import config from './defaultSettings'
import { updateTheme, updateColorWeak, colorList } from './settingConfig'
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
      colorList
    }
  },
  mounted() {
    // updateTheme(this.primaryColor)
    if (this.colorWeak !== config.colorWeak) {
      updateColorWeak(this.colorWeak)
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
    onColorWeak(checked) {
      updateColorWeak(checked)
    },
    handleMenuTheme(theme) {
      console.log(theme)
    },
    changeColor(color) {
      if (this.primaryColor !== color) {
        updateTheme(color)
      }
    }
  },
  render() {
    const {
      navTheme,
      handleMenuTheme,
      primaryColor,
      changeColor,
      colorWeak,
      visible,
      onColorWeak,
      onClose,
      toggle
    } = this
    return (
      <div class="setting-drawer">
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
              <h3 class="setting-drawer-index-title">整体风格设置</h3>

              <div class="setting-drawer-index-blockChecbox">
                <med-tooltip>
                  <template slot="title">暗色菜单风格</template>
                  <div
                    class="setting-drawer-index-item"
                    onClick={() => handleMenuTheme('dark')}
                  >
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg"
                      alt="dark"
                    />
                    {navTheme === 'dark' ? (
                      <div class="setting-drawer-index-selectIcon">
                        <med-icon type="check" />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </med-tooltip>

                <med-tooltip>
                  <template slot="title">亮色菜单风格</template>
                  <div
                    class="setting-drawer-index-item"
                    onClick={() => handleMenuTheme('light')}
                  >
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg"
                      alt="light"
                    />
                    {navTheme !== 'dark' ? (
                      <div class="setting-drawer-index-selectIcon">
                        <med-icon type="check" />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </med-tooltip>
              </div>
            </div>
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
                      defaultChecked={colorWeak}
                      onChange={onColorWeak}
                    />
                    <med-list-item-meta>
                      <div slot="title">色弱模式</div>
                    </med-list-item-meta>
                  </med-list-item>
                </med-list>
              </div>
            </div>
            <med-divider />
          </div>
          <div
            class="setting-drawer-index-handle"
            onClick={toggle}
            slot="handle"
          >
            {!visible ? <a-icon type="setting" /> : <med-icon type="close" />}
          </div>
        </med-drawer>
      </div>
    )
  }
}
