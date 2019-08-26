const shallowClone = obj => {
  const result = {}

  for (let i in obj) {
    result[i] = obj[i]
  }
  return result
}

const deepClone = parent => {
  const parents = []
  const children = []

  const getType = obj => {
    return Object.prototype.toString
      .call(obj)
      .replace(/^\[object\s(\w+)\]$/, '$1')
      .toLowerCase()
  }
  const getRegExp = reg => ''
  const _clone = parent => {
    if (parent === null) {
      return null
    }

    if (typeof parent !== 'object') {
      return parent
    }

    let child = null
    let proto = null
    let type = getType(parent)

    switch (type) {
      case 'array':
        child = []
        break
      case 'regexp':
        child = new RegExp(parent.source, getRegExp(parent))
        break
      case 'date':
        child = new Date(parent.getTime())
        break
      default:
        proto = Object.getPrototypeOf(parent)
        child = Object.create(proto)
        break
    }

    const index = parents.indexOf(parent)

    if (~index) {
      return children[index]
    }

    parents.push(parent)
    children.push(child)

    for (let i in parent) {
      child[i] = _clone(parent[i])
    }

    return child
  }

  return _clone(parent)
}
