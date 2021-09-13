// eslint-disable-next-line no-unused-vars
import {
  refreshByDeconstruct,
  isPrimitive,
  getKeyLen,
  renameKeyInObj
} from "./util";

export default {
  name: "JsonEditor",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: [Object, Array, String, Boolean, Number],
      default: ""
    },
    jsonKey: {
      type: [String, Number],
      default: null
    },
    // 初始折叠状态
    defaultCollapsed: {
      type: Boolean,
      default: false
    },
    // 判断是否为最后一个键
    isLast: {
      type: Boolean,
      default: true
    },
    // 起始行号
    startLineNo: {
      type: Number,
      default: 1
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      collapsed: this.defaultCollapsed,
      labelEditing: false,
      valueEditable: false,
      valueEditing: false,
      tmpLabel: "",
      tmpValue: "",
      prompt: null
    };
  },
  computed: {
    // 获取六种类型
    type() {
      if (Array.isArray(this.value)) return "array";

      if (this.value === null) return "null";

      return typeof this.value;
    },
    isPrimitive() {
      return isPrimitive(this.value);
    },
    isArray() {
      return this.type === "array";
    },
    isEmpty() {
      if (this.isPrimitive) return true;

      return Object.keys(this.value).length === 0;
    },
    parens() {
      if (this.isPrimitive) return [];

      if (this.isArray) return ["[", "]"];

      return ["{", "}"];
    }
  },
  methods: {
    resetPrompt() {
      this.prompt = null;
    },

    setPrompt(type, msg) {
      this.prompt = {
        type,
        msg
      };
    },

    toggleCollapsed() {
      this.collapsed = !this.collapsed;

      // 开 --> 闭
      if (this.collapsed) {
        this.valueEditing = false;
        this.labelEditing = false;
        this.$forceUpdate();
      }
    },

    prepareValueEdit() {
      if (this.readOnly) return;

      this.setPrompt("info", "Enter 确定; ESC 退出编辑;");

      this.valueEditing = true;

      this.tmpValue = JSON.stringify(this.value, null, 4);

      this.$nextTick(() => {
        this.$refs.ValueEditor.$el.focus();
      });
    },

    prepareLabelEdit() {
      if (this.readOnly) return;

      this.labelEditing = true;
      this.tmpLabel = this.jsonKey;

      this.$nextTick(() => {
        this.$refs.LabelEditor.$el.focus();
        // this.$refs.LabelEditor.$el.children[0].focus();
      });
    },

    handleDelete() {
      this.$emit("update:jsonKey", "");
    },

    handleValueChange() {
      // https://www.quora.com/How-can-I-parse-unquoted-JSON-with-JavaScript
      // const data = eval('(' + this.tmpValue + ')');

      try {
        const data = JSON.parse(this.tmpValue);

        this.valueEditing = false;

        if (JSON.stringify(data) === JSON.stringify(this.value)) {
          return;
        }

        this.$emit("change", data);
      } catch (e) {
        // eslint-disable-next-line no-console
        this.setPrompt("error", "请输入有效的数据格式");
      }
    },

    renderLabel() {
      if (this.labelEditing) {
        return (
          <a-textarea
            ref="LabelEditor"
            class={["json-item-label", "json-item-label--editable"]}
            vModel={this.tmpLabel}
            autoSize={{ minRows: 1, maxRows: 5 }}
            onBlur={() => {
              this.labelEditing = false;

              this.tmpLabel != this.jsonKey &&
                this.$emit("update:jsonKey", this.tmpLabel);
            }}
          />
        );
      }

      let ExpandIcon = "";

      if (!this.isEmpty) {
        ExpandIcon = this.collapsed ? (
          <a-icon
            class="json-item-label__icon"
            type="caret-right"
            onClick={this.toggleCollapsed}
          />
        ) : (
          <a-icon
            class="json-item-label__icon"
            type="caret-down"
            onClick={this.toggleCollapsed}
          />
        );
      }
      const ToolIcon = (
        <a-dropdown>
          <a-icon
            class="json-item-label__tool"
            type="unordered-list"
            hidden={!this.valueEditable || this.valueEditing || this.readOnly}
          />
          <a-menu slot="overlay">
            {this.jsonKey && !this.$parent.isArray ? (
              <a-menu-item>
                <a href="javascript:;" onClick={this.prepareLabelEdit}>
                  编辑 key
                </a>
              </a-menu-item>
            ) : null}

            <a-menu-item>
              <a href="javascript:;" onClick={this.prepareValueEdit}>
                编辑 value
              </a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;" onClick={this.handleDelete}>
                删除
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      );

      let jsonKey = this.jsonKey;

      // 数组子项不展示 jsonKey
      this.$parent.isArray && (jsonKey = null);

      return (
        <span class="json-item-label">
          {ExpandIcon}
          <span style="position: relative;  display: inline-block; width: 0.01px;">
            &nbsp;
            {ToolIcon}
          </span>
          {jsonKey != undefined ? (
            <span>
              <span
                class="json-item-label__str"
                onClick={this.prepareLabelEdit}
              >
                {jsonKey}
              </span>
              <span class="json-item-label__colon">:</span>
            </span>
          ) : null
          // <span style="width: 1px; display: inline-block;">&nbsp;</span>
          }

          {!this.isEmpty && !this.isPrimitive ? (
            <span class="json-item-label__paren">{this.parens[0]}</span>
          ) : null}

          <span class="json-item-label__no"> {this.startLineNo} </span>
        </span>
      );
    },

    renderValue() {
      if (this.valueEditing) {
        return (
          <section class={["json-item-value", "json-item-value--editable"]}>
            <a-textarea
              ref="ValueEditor"
              vModel={this.tmpValue}
              autoSize={{ minRows: 1, maxRows: 5 }}
              onKeydown={e => {
                if (e.code === "Enter") {
                  this.handleValueChange();
                  e.preventDefault();
                  return;
                }
              }}
            />

            <span
              class="json-item-value__cancel"
              onClick={() => {
                this.valueEditing = false;
              }}
            >
              ×
            </span>

            {this.prompt ? (
              <section
                class={[
                  "json-item-value__prompt",
                  `json-item-value__prompt--${this.prompt.type}`
                ]}
              >
                {this.prompt.msg}
              </section>
            ) : null}
          </section>
        );
      }

      const classes = [
        "json-item-value",
        `json-item-value--${this.type}`,
        this.isPrimitive || this.isEmpty || this.collapsed
          ? "json-item-value--inline"
          : "json-item-value--block"
      ];

      // 处理原始值
      if (this.isPrimitive) {
        const data =
          typeof this.value === "string"
            ? `"${this.value}"`
            : this.value?.toString() || this.type;

        return (
          <span class={classes} onClick={this.prepareValueEdit}>
            {data}
          </span>
        );
      }

      // 处理空索引值
      if (this.isEmpty)
        return (
          <span class={classes} onClick={this.prepareValueEdit}>
            {this.parens.join("")}
          </span>
        );

      const arr = Object.keys(this.value);

      let pre = 1;

      return (
        <section class={classes}>
          {this.collapsed ? (
            <a-icon
              class="json-item-value__ellipsis"
              type="small-dash"
              onClick={this.toggleCollapsed}
            />
          ) : (
            arr.map((key, index) => {
              const subData = this.value[key];

              const startLineNo = this.startLineNo + index + pre;

              // primitive 返回 0
              pre += getKeyLen(subData);

              return (
                <JsonEditor
                  value={subData}
                  key={key}
                  jsonKey={key}
                  isLast={index === arr.length - 1}
                  startLineNo={startLineNo}
                  readOnly={this.readOnly}
                  {...{
                    on: {
                      change: value => {
                        this.value[key] = value;

                        this.$emit("change", refreshByDeconstruct(this.value));
                      },
                      // 仅处理对象
                      "update:jsonKey": newKey => {
                        this.$emit(
                          "change",
                          renameKeyInObj(this.value, key, newKey)
                        );
                      }
                    }
                  }}
                />
              );
            })
          )}
        </section>
      );
    },

    renderLastLine() {
      return (
        <section
          class={[
            "json-item-last",
            this.isEmpty || this.isPrimitive || this.collapsed
              ? "json-item-last--inline"
              : ""
          ]}
        >
          {!this.isEmpty && !this.isPrimitive && !this.valueEditing ? (
            <span class="json-item-last__no">
              {this.startLineNo + getKeyLen(this.value)}
            </span>
          ) : null}

          <span class="json-item-last__paren">
            {!this.isEmpty && !this.isPrimitive ? this.parens[1] : null}
          </span>

          {this.isLast ? null : <span>,</span>}
          {/* <a-icon
            class="json-item-last__icon"
            type="edit"
            hidden={!this.valueEditable}
            onClick={this.prepareValueEdit}
          /> */}
        </section>
      );
    }
  },
  created() {
    const listener = document.addEventListener("keydown", e => {
      e.stopPropagation();

      if (e.code === "Escape") {
        this.valueEditing = false;
        this.labelEditing = false;
        e.preventDefault();
        return;
      }
    });

    this.$on("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", listener);
    });
  },
  render() {
    const listeners = {
      mouseenter: e => {
        e.stopPropagation();
        this.valueEditable = true;
      },
      mouseleave: e => {
        e.stopPropagation();
        this.valueEditable = false;
      }
    };

    return (
      <section
        class={[
          this.jsonKey ? "" : "json-editor-container",
          "json-item",
          `json-item--${this.collapsed ? "collapsed" : "open"}`,
          this.valueEditing ? "json-item--value-editing" : "",
          this.isEmpty || this.isPrimitive || this.collapsed
            ? "json-item--inline"
            : "json-item--block"
        ]}
        {...{ on: listeners }}
      >
        {this.renderLabel()}
        {this.renderValue()}
        {this.renderLastLine()}
      </section>
    );
  }
};
