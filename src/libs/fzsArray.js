/**
 * 对于项目中出现的有关 Array 的操作如下：
 *
 * aryToString     将 array 排成一个字符串如： '1,2,3....'
 */
module.exports = {
// export default {
  /**
   * 将 array 排成一个字符串如： '1,2,3....'
   * @param ary  Y array 欲排序的数组
   * @returns String
   */
  aryToString (ary) {
    let str = ''
    if (ary.length === 0) {
      return str
    } else {
      for (let item of ary) {
        if (Array.isArray(item)) {
          str = str + this.aryToString(item) + ','
        } else if (typeof item === 'object') {
          str = str + JSON.stringify(item) + ','
        } else {
          str = str + item + ','
        }
      }
      return str.substr(0, str.length - 1)
    }
  }
}
