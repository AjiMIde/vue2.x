<template>
  <div class="test-http vux2x-document">
    <h4>检查Http后台接口可用性</h4>

    <div class="para">
    </div>
    <div class="list">
      <button @click="filterKeys()">全部</button>
      <button @click="filterKeys('function')">只要函数</button>
      <button @click="filterKeys('boolean-string-number')">只要参数</button>
      <button @click="allSend()">全部发送</button>
    </div>
    <div class="result">
      <table>
        <tr>
          <th>属性</th>
          <th>类型</th>
          <th>参数</th>
          <th>操作</th>
          <th>结果</th>
        </tr>
        <tr v-for="(item, $index) in interfacePropertyAry">
          <td>{{item.value}}</td>
          <td>{{item.type | keysName(item.value)}}</td>
          <td>
            <textarea v-if="item.param.length > 3 && item.type === 'function'" rows="8" cols="30"
                      v-model="item.param"></textarea>
            <input v-else rows="8" cols="30" v-model="item.param"></input>
          </td>
          <td>
            <button v-if="item.type === 'function'" @click="send(item, $index)">发送</button>
            <button v-else @click="submitParam(item)">确定</button>
          </td>
          <td :class="{'status-200': item.result == 'SUCCESS', 'status-0': item.result == 'ERROR'}">
            <div v-html="item.status">{{item.status}}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import serviceTest from '../../api/service.test'
  import Service from '../../api/service'
  export default {
    name: 'testHttp',
    data () {
      return {
        interfacePropertyAry: [],
        interfaceFunAry: [],
        resultAry: {},
        info: ''
      }
    },
    filters: {
      keysName (val, val2) {
        switch (val) {
          case 'function':
            if (val2.substr(0, 1) === '_') {
              return '函数(私有)'
            } else {
              return '函数'
            }
          case 'boolean':
            return '布尔型'
          case 'string':
            return '字符集'
          case 'number':
            return '数值'
          default:
            return val
        }
      }
    },
    methods: {
      /**
       * 获取一个函数的接口，采用正则取，效果差
       */
      _getFuncParams (func) {
        if (func.length > 0) {
          let str = func.toString()
          let match = str.match(/function.*\((.*)\)/)
          let ary = match[1].replace(/\s/g, '').split(',')
          let obj = '{\n'
          ary.forEach(item => {
            obj += '"' + item + '": ' + '"",\n'
          })
          obj = obj.substr(0, obj.length - 2) + '\n'
          obj += '}'
          return obj
        } else {
          return ''
        }
      },

      /**
       * 获取接口所有的属性
       * @param inter Object 接口对象，使用 import 导入一个接口（都行）
       * @param filter String 接口过滤，可用范围：string/object/function/number
       * @returns {Array}[{type: filter, value: 属性名, ..params: {函数参数}..}, *]
       */
      _getInterfaceKeys (inter, filter = '') {
        //
        let ary = []
        let keys = Object.keys(inter)
        //
        keys.forEach(key => {
          let type = typeof inter[key]
          let param = ''
          if (type === 'function') {
            param = this._getFuncParams(inter[key])
          } else {
            param = inter[key] + ''
          }
          // 当有过滤的时候
          if (filter) {
            console.log(type)
            console.log(filter)
            if (filter.indexOf(type) >= 0) {
              ary.push({type: type, value: key, param: param, status: ''})
            }
          } else {
            ary.push({type: type, value: key, param: param, status: ''})
          }
        })
        return ary
      },

      filterKeys (kind) {
        this.interfacePropertyAry = []
        this.interfacePropertyAry = this._getInterfaceKeys(Service, kind)
      },

      submitParam (item) {
        if (item.type === 'boolean') {
          Service[item.value] = (item.param === 'true')
        } else {
          Service[item.value] = item.param
        }
        item.status = 'ok'
        this.$set(this.interfacePropertyAry, item.value, item)
      },

      send (item, index) {
        let param = item.param.replace(/\n/g, '')
        param = !!param === false ? '' : window.JSON.parse(param)

        try {
          Service[item.value](...Object.values(param)).then(res => {
            item.status = res.url + '<br><b>' + res.status + '</b><br>' + res.bodyText
            item.result = res.data.result
            this.$set(this.interfacePropertyAry, index, item)
          }, error => {
            item.status = error.url + '<br><b>' + error.status + '</b><br>' + error.bodyText
            this.$set(this.interfacePropertyAry, index, item)
          })
        } catch (e) {
          item.status = '<div>Error: MayBe no a http -</div>' + e.message
          this.$set(this.interfacePropertyAry, index, item)
        }
      },

      allSend () {
        let temp = this.interfacePropertyAry
        let i = 0
        let index = 0
        temp.forEach(item => {
          if (item.type === 'function') {
            setTimeout(() => {
              this.send(item, index)
            }, i)
            i += 500
          }
          index += 1
        })
      }
    },
    mounted () {
      this.interfacePropertyAry = this._getInterfaceKeys(Service)

      this.interfaceFunAry = serviceTest.getInterfaceFunc()
      this.interfaceFunAry.push({type: 'all', value: '*All*'})
      this.sv = Service
      console.log(window.m = this)
    }
  }
</script>

<style lang="less">
  .nice-scroll {
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: #F5F5F5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      background-color: #F5F5F5;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      background-color: #979797;
    }
  }

  .test-http {
    button {
      border: none;
      background-color: #1d95ff;
      color: #fff;
      padding: 3px 8px;
      border-radius: 2px;
    }
    .list {
      ul {
        li {
          display: inline-block;
          margin: 6px 6px;
          background: #2cc2f0;
          color: #fff;
          padding: 2px 8px;
          cursor: pointer;
        }
      }
    }
    .result {
      overflow: hidden;
    }
    table {
      .nice-scroll;
      table-layout: fixed;
      input, textarea {
        border-radius: 4px;
        padding: 2px 6px;
        font-family: consolas, serif;
        border: 1px solid #eaeaea;
        width: 100%;
      }

      td {
        text-align: left;
        overflow: auto;
        max-height: 150px;
        &:nth-child(2), &:nth-child(4) {
          text-align: center;
        }
        &:nth-child(1), &:nth-child(3), &:nth-child(5), pre {
          font-family: consolas, serif;
        }
      }
      th {
        &:nth-child(1) {
          width: 150px;
        }
        &:nth-child(2) {
          width: 90px;
          text-align: center;
        }
        &:nth-child(3) {
          width: 220px;
        }
        &:nth-child(4) {
          width: 80px;
        }
      }
      .status-200 {
        color: #51bb3e;
      }
      .status-0 {
        color: #fc5143;
      }
    }
  }
</style>
