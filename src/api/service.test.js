import Service from './service'

export default {
  getInterfaceProperty () {
    let ary = []
    let keys = Object.keys(Service)
    keys.forEach(key => {
      let type = typeof Service[key]
      ary.push({type: type, value: key})
    })
    return ary
  },
  getInterfaceFunc () {
    let ary = []
    let keys = Object.keys(Service)
    keys.forEach(key => {
      let type = typeof Service[key]
      if (type === 'function') {
        ary.push({type: type, value: key})
      }
    })
    return ary
  }
}
