const formatDate = (value, locale, options) => {
  let date = value
  if (date) {
    if (!(date instanceof Date)) {
      date = new Date(date)
    }
    return date.toLocaleDateString(locale, options)
  }
}

const truncate = (text, length, clamp) => {
  clamp = clamp || '...'
  const node = document.createElement('div')
  node.innerHTML = text
  const content = node.textContent
  return content.length > length ? content.slice(0, length) + clamp : content
}

export {
  formatDate,
  truncate
}
