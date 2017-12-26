let parseDate = function (date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/**
 * 有关时间的操作都在这里
 *
 * get  获取时间，与原生不同提，此接口支持参数并返回格式化
 *
 */
export default {
  /**
   * get  获取时间，与原生不同提，此接口支持参数并返回格式化
   * @param 格式化，如： yyyy-MM-dd hh:mm:ss
   * @returns string
   */
  get (fmt = 'yyyy-MM-dd hh:mm:ss') {
    let date = new Date()
    return parseDate(date, fmt)
  },
  parse (date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    return parseDate(date, fmt)
  }
}
