import classnames from 'classnames'

const getClass = ele => {
  let data = {}
  if (ele.$vnode && ele.$vnode.data) {
    data = ele.$vnode.data
  }
  const tempCls = data.class || {}
  const staticClass = data.staticClass
  let cls = {}
  staticClass &&
    staticClass.split(' ').forEach(c => {
      cls[c.trim()] = true
    })
  if (typeof tempCls == 'string') {
    tempCls.split(' ').forEach(c => {
      cls[c.trim()] = true
    })
  } else if (Array.isArray(tempCls)) {
    classnames(tempCls)
      .split(' ')
      .forEach(c => {
        cls[c.trim()] = true
      })
  } else {
    cls = { ...cls, ...tempCls }
  }
  return cls
}

const getStyle = ele => {
  let data = {}
  if (ele.$vnode && ele.$vnode.data) {
    data = ele.$vnode.data
  }
  let style = data.style || data.staticStyle
  if (Array.isArray(style)) {
    let res = {}
    style.map(s => {
      res = { ...s, ...res }
    })
    return res
  }
  return style
}

const initDefaultProps = (propTypes, defaultProps = {}) => {
  Object.keys(defaultProps).forEach(k => {
    if (propTypes[k]) {
      propTypes[k].def && (propTypes[k] = propTypes[k].def(defaultProps[k]))
    } else {
      throw new Error(`没有该 ${k} 属性！`)
    }
  })
  return propTypes
}

const getListeners = (context, pull = []) => {
  let res = {}
  const listeners =
    (context.$vnode
      ? context.$vnode.componentOptions.listeners
      : context.$listeners) || {}
  if (Array.isArray(pull) && pull.length > 0) {
    Object.keys(listeners).forEach(k => {
      if (!pull.includes(k)) {
        res[k] = listeners[k]
      }
    })
  } else {
    res = listeners
  }
  return res
}

const getOptionProps = instance => {
  const { $props = {}, $options = {} } = instance
  return filterProps($props, $options.propsData)
}

const filterProps = (props, propsData = {}) => {
  const res = {}
  Object.keys(props).forEach(k => {
    if (k in propsData || props[k] !== undefined) {
      res[k] = props[k]
    }
  })
  return res
}

const getAntVComponentProps = (antVProps, optionProps, pull = []) => {
  let res = {}
  Object.keys(optionProps).forEach(k => {
    if (k in antVProps && !pull.includes(k)) {
      res[k] = optionProps[k]
    }
  })
  return res
}

const getComponentFromProp = (instance, prop, options = instance) => {
  const h = instance.$createElement
  const temp = instance[prop]
  if (temp !== undefined) {
    return typeof temp === 'function' ? temp(h, options) : temp
  }
  return (
    (instance.$scopedSlots[prop] && instance.$scopedSlots[prop](options)) ||
    instance.$scopedSlots[prop] ||
    instance.$slots[prop] ||
    undefined
  )
}

export {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps,
  getAntVComponentProps,
  getComponentFromProp
}
