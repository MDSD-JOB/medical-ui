<template>
  <a-card
    class="med-pin-wrapper"
    :class="{
      layoutLeft: layout === 'left',
      layoutBottom: layout === 'bottom',
      layoutBlank: layout === 'blank'
    }"
    :style="{ width, borderColor: checked ? titleBg : '' }"
    :headStyle="{ color: titleColor, backgroundColor: checked ? titleBg : '' }"
    :bodyStyle="{
      color: bodyColor,
      fontSize: bodyFontSize
    }"
    :title="layout === 'blank' ? null : title"
    :bordered="bordered"
    :loading="loading"
    :hoverable="hoverable"
  >
    <div v-if="layout === 'blank'">
      <a-statistic :value="num" suffix="分" style="margin-right: 50px">
      </a-statistic>
      <p href="javascript:;">床评分</p>
      <div
        class="badge"
        :style="{ color: titleColor, backgroundColor: titleBg }"
      >
        一级
      </div>
    </div>
    <div v-else>{{ num }}</div>
    <span v-if="layout === 'top'" slot="extra">{{ unit }}</span>
    <slot />
  </a-card>
</template>
<script>
export default {
  name: 'MedPin',
  props: {
    layout: {
      type: String,
      required: false,
      default: 'top'
    },
    width: {
      type: String,
      required: false,
      default: null
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    unit: {
      type: String,
      required: false,
      default: null
    },
    num: {
      type: String,
      required: false,
      default: null
    },
    bodyFontSize: {
      type: String,
      required: false,
      default: '28px'
    },
    bodyColor: {
      type: String,
      required: false,
      default: null
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    bordered: {
      type: Boolean,
      required: false,
      default: true
    },
    titleColor: {
      type: String,
      required: false,
      default: null
    },
    titleBg: {
      type: String,
      required: false,
      default: null
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    hoverable: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.med-pin-wrapper {
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  min-width: 100px;
  &.layoutLeft {
    display: inline-flex;
    /deep/ .ant-card-head {
      vertical-align: top;
      padding: 16px 4px;
      writing-mode: vertical-lr;
      .ant-card-head-title {
        text-align: center;
        letter-spacing: 4px;
      }
    }
  }
  &.layoutBottom {
    position: relative;
    /deep/ .ant-card-head {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #f3f3f3;
      .ant-card-head-title {
        color: inherit;
        text-align: center;
      }
    }
    /deep/ .ant-card-body {
      margin-bottom: 32px;
    }
  }
  &.layoutBlank {
    /deep/ .ant-card-body {
      position: relative;
      padding: 6px 80px 12px 20px;
      p {
        margin: 0;
        padding: 0;
        text-align: left;
        font-size: 14px;
        color: #1a7fc8;
      }
      .badge {
        position: absolute;
        right: -1px;
        top: 0;
        font-size: 12px;
        background: red;
        padding: 3px 12px;
        z-index: 1;
      }
    }
  }
  /deep/ .ant-card-head {
    min-height: 32px;
    background: #eaf7ff;
    .ant-card-head-title {
      padding: 4px 0;
      color: #1a7fc8;
      font-size: 14px;
      word-break: break-all;
    }
    .ant-card-extra {
      padding: 4px 0;
      color: #1a7fc8;
      font-size: 14px;
      word-break: break-all;
    }
  }
  /deep/ .ant-card-body {
    text-align: center;
    padding: 0 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      display: inline-block;
      word-break: break-all;
    }
  }
}
</style>
