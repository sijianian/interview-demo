const shallowClone = obj => {
  const result = {}

  for (let i in obj) {
    result[i] = obj[i]
  }
  return result
}

const deepClone = parent => {
  const getType = obj => {
    return Object.prototype.toString
      .call(obj)
      .replace(/^\[object\s(\w+)\]$/, '$1')
      .toLowerCase()
  }

  const _clone = (parent, hash = new WeakMap()) => {
    if (parent === null) {
      return null
    }

    if (typeof parent !== 'object') {
      return parent
    }

    let child
    let Constructor = parent.constructor

    switch (getType(parent)) {
      case 'array':
        child = []
        break
      case 'regexp':
        child = new Constructor(parent)
        break
      case 'date':
        child = new Date(parent.getTime())
        break
      default:
        if (hash.has(parent)) {
          return hash.get(parent)
        }
        child = new Constructor()
        hash.set(parent, child)
        break
    }

    for (let key in parent) {
      child[key] = _clone(parent[key], hash)
    }

    return child
  }

  return _clone(parent)
}
