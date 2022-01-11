export function LoadScript(url, callback) {
  var urls = typeof url === 'string' ? [url] : url

  if (!Array.isArray(urls)) {
    throw 'argument type error'
  }
  if (urls.length <= 0) {
    callback()
    return
  }

  var head = document.head
  var script = document.createElement('script')

  script.src = urls[0]
  script.async = false
  script.type = 'text/javascript'
  script.charset = 'utf-8'

  head.appendChild(script)

  script.onload = script.onerror = function() {
    script.onload = script.onerror = null
    LoadScript(urls.slice(1), callback)
  }
}
