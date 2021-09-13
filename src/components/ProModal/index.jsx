export default {
  name: "ProModal",
  model: {
    prop: "visible",
    event: "change"
  },
  props: {
    width: {
      type: [String, Number],
      default: "85%"
    },
    height: {
      type: [String, Number],
      default: "85%"
    },
    wrapClassName: {
      type: String,
      default: "promodal-wrapper"
    },
    visible: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: true
    },
    headerStyle: {
      type: [String, Object],
      default: ""
    },
    // 弹窗主体内容的样式
    mainStyle: {
      type: [String, Object],
      default: ""
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fullscreen: false,
      /** UI control logic */
      el: null,
      preX: 0,
      preY: 0,
      initX: 0,
      initY: 0,
      hash: ""
    };
  },
  computed: {
    modalTag() {
      return `promodal-${this.hash}`;
    },
    left() {
      const width =
        typeof this.width === "number" ? `${this.width}px` : this.width;

      // REVIEW: 多了个冒号设置失败
      // return `calc(50% - ${width} / 2);`;
      return `calc(50% - ${width} / 2)`;
    }
  },
  watch: {
    visible: {
      immediate: true,
      handler(val) {
        if (val) {
          this.hash = Date.now().toString();

          this.$nextTick(this.onShow);
        } else {
          this.onHide();
        }
      }
    }
  },
  beforeDestroy() {
    this.el = null;
  },
  methods: {
    onShow() {
      this.preX = 0;
      this.preY = 0;
      this.fullscreen = false;

      const modal = document.querySelector(`.${this.modalTag}`);

      if (this.draggable) modal.onmousedown = this.handleMousedown;

      this.el = modal;

      this.$nextTick();

      this.initX = this.el.style.left;
      this.initY = this.el.style.top;
    },
    onHide() {
      if (this.el) {
        // 等待退出动画结束
        setTimeout(() => {
          this.el.style.left = this.initX;
          this.el.style.top = this.initY;
        }, 200);
      }
    },
    handleFullscreen() {
      this.fullscreen = !this.fullscreen;

      if (this.fullscreen) {
        this.preX = this.el.style.left;
        this.preY = this.el.style.top;

        this.el.style.left = 0;
        this.el.style.top = 0;
      } else {
        this.el.style.left = this.preX;
        this.el.style.top = this.preY;
      }

      // TODO: 兼容性处理
      this.$nextTick(() => {
        window.dispatchEvent(new Event("resize"));
      });
      this.$emit("fullscreen", this.fullscreen);
    },
    handleMousedown(e) {
      if (!this.draggable) return;

      const disX = e.clientX - this.el.offsetLeft;
      const disY = e.clientY - this.el.offsetTop;

      document.onmousemove = e => {
        // 通过事件委托，计算移动的距离
        const l = e.clientX - disX;
        const t = e.clientY - disY;
        // 移动当前元素
        this.el.style.left = `${l}px`;
        this.el.style.top = `${t}px`;
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  },

  render() {
    return (
      <a-modal
        ref="modal"
        class={{
          promodal: true,
          [this.modalTag]: true,
          "promodal--fullscreen": this.fullscreen
        }}
        style={{ left: this.left, height: this.height }}
        {...{
          props: {
            ...this.$attrs,
            visible: this.visible,
            width: this.width,
            wrapClassName: this.wrapClassName,
            footer: null,
            destroyOnClose: this.destroyOnClose
          }
        }}
        onChange={e => this.$emit("change", e)}
      >
        <section class="promodal-header" style={this.headerStyle}>
          <section class="promodal-header__title">{this.$slots.title}</section>

          <a-icon
            class="promodal-header__zoom"
            type={this.fullscreen ? "fullscreen-exit" : "fullscreen"}
            onClick={this.handleFullscreen}
          />

          <a-icon
            class="promodal-header__close"
            type="close"
            onClick={() => this.$emit("change", false)}
          />
        </section>

        <a-spin
          class="promodal__result"
          style={this.mainStyle}
          spinning={this.loading}
          size="large"
          onMousedown={e => e.stopPropagation()}
        >
          {this.$slots.default}
        </a-spin>

        {this.$slots.footer}
      </a-modal>
    );
  }
};
