<template>
  <div class="key-matter vux2x-document">
    <div class="para">
      <h2>整点提醒喝水，半点提醒信息查看</h2>
      <div>
        <code>{{matterTip.hours + ':' + matterTip.minutes + ':' + matterTip.seconds}}</code>
      </div>
      <div>
        <code>离整点还有 {{(60 - matterTip.minutes - 1) + ' 分 '}}</code>
      </div>
      <div>
        <code>离半点还有 {{((90 - matterTip.minutes - 1) % 60) + ' 分'}}</code>
      </div>

      <h2>开机分段启动应用程序</h2>
      <ul>
        <li>测试 <a id='protocoltim' href="ajiprotocoltim://"> Tim </a></li>
        <li>测试 <a id='protocolwechat' href="ajiprotocalwechat://"> Wechat </a></li>
        <li>测试 <a id='protocolfoxmail' href="ajiprotocalFoxmail://"> Foxmail </a></li>
        <li>测试 <a id='protocol360' href="ajiprotocal360://"> 360 </a></li>
        <li>测试 <a id='protocolworktile' href="http://my.worktile.com/dashboard" target="_blank"> Worktile </a></li>
        <li>通过定时程序，并使用 click 事件自动响应 a 标签，打开应用程序</li>
      </ul>

      <ul>
        <li v-for="item in launchExeInfo">
          <span v-show="item.status === 'launched'">{{item.type}} 已启动</span>
          <span v-show="item.status === 'cancel'">{{item.type}} 已取消</span>
          <span v-show="item.status === 'launching'">正在启动 {{item.type}} </span>
          <span v-show="item.status === 'noLaunch'">{{item.type}} 等待启动中...</span>
        </li>
      </ul>

      <h2>开机启动以上服务</h2>
      <ul>
        <li>打包程序，并编写 node 服务</li>
        <li>启动一个 bat 命令程序，该程序启动一个 node 服务，并打开 127.0.0.1:port/index.html/#/param....</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import FzsLocalStorage from '../../../libs/FzsStorage'
  import FzDate from '../../../libs/FzsDate'

  export default {
    data () {
      return {
        clogStyle: 'font-size: 14px; color: blue;font-family: Microsoft YaHei;',
        ifChromeNotify: !!window.Notification,
        // 事项提醒
        matterTip: {
          notification: '',
          hours: 0,       // 这三个代表时间而已
          minutes: 0,
          seconds: 0,
          timer: 0,
          iKnown: false
        },
        // 运行程序
        launchExe: {
          timer: '',
          delay: 5,       // 延迟多少秒启动程序
          seconds: 0,
          minutes: 0
        },
        launchExeInfo: []
      }
    },
    methods: {
      // console.log 简写
      log (args) {
        console.log('%c' + args, this.clogStyle)
      },

      // 生产上，有些问题，靠这种，破方法解决
      getStyle () {
        if (window.location.port === '8888') {
          let style = document.getElementsByTagName('link')[0]
          let styleLink = style.attributes.href.value
          let link = window.location.protocol + '//' + window.location.host + styleLink.slice(1, styleLink.length)

          this.$http.get(link).then(function (res) {
            let style = document.createElement('style')
            style.innerText = res.data
            let h = document.getElementsByTagName('head')[0]
            h.appendChild(style)
          })
        }
      },

      /**
       * chrome notification 弹窗
       * @param title
       * @param body
       * @param iconUrl
       */
      setNotify (title = 'title', body = 'body', iconUrl) {
        let icon = iconUrl || 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514213572260&di=61d5ad8f615ea7e444a92f700408a0ac&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D08430ecfdf39b60059c307f481395f5f%2F3bf33a87e950352adbd128245943fbf2b2118b6d.jpg'
        this.matterTip.notification = new window.Notification(title, {
          body: body,
          tag: 1,
          icon: icon
        })
        this.setNotifyOnClick()
        this.log('Notify: ' + title + ' ' + body, this.clogStyle)
      },

      /**
       * chrome window.alert
       * @param context
       */
      setAlert (context = 'Warning!!') {
        window.alert(context)
      },

      // 开启整点、半点提醒
      startWholePointTip () {
        if (this.matterTip.timer) {
          window.clearInterval(this.timer)
        }
        this.matterTip.timer = window.setInterval(() => {
          let date = new Date()
          this.matterTip.hours = date.getHours()
          let m = this.matterTip.minutes = date.getMinutes()
          let s = this.matterTip.seconds = date.getSeconds()

          if (m === 30) {
            if (s === 0) {
              this.matterTip.iKnown = false
              this.setNotify('起来', '走走', 'https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=26cecb5ef06f0df52538150bf837f0d5&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fcc11728b4710b91286e2ba48c2fdfc0392452260.jpg')
              this.log('Notify: m-' + m + ' s-' + s)
            }
            if (s === 10 && this.matterTip.iKnown === false) {
              this.matterTip.iKnown = true
              this.setAlert('起来' + '走走')
              this.log('Notify: m-' + m + ' s-' + s)
            }
          } else if (m === 0) {
            if (s === 0) {
              this.matterTip.iKnown = false
              this.setNotify('起来', '喝水', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514267498934&di=73c9d37418472085ac3b9ef09e4d85e9&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2F3%2F2c%2Fb1%2F117160463412cb12c3o.jpg')
              this.log('Notify: m-' + m + ' s-' + s)
            }
            if (s === 10 && this.matterTip.iKnown === false) {
              this.matterTip.iKnown = true
              this.setAlert('起来' + '喝水')
              this.log('Notify: m-' + m + ' s-' + s)
            }
          }
        }, 1000)
      },

      // 倒数启动应用程序
      inverseAndOpenExe () {
        let date = 'keyMatter' + FzDate.get('yyyy-MM-dd')
        this.launchExeInfo = FzsLocalStorage.get(date)

        if (this.launchExeInfo.length === 0) {   // 如果今天还没有运行过
          this.launchExeInfo = []

          this.launchExeInfo.push({type: 'worktile', status: 'noLaunch'})
          this.launchExeInfo.push({type: 'tim', status: 'noLaunch'}) // noLaunch/launched/launching/cancel
          this.launchExeInfo.push({type: 'wechat', status: 'noLaunch'})
          this.launchExeInfo.push({type: 'foxmail', status: 'noLaunch'})
          this.launchExeInfo.push({type: '360', status: 'cancel'})

          FzsLocalStorage.set(date, this.launchExeInfo)
        }
        //开始 timer
        if (this.launchExe.timer) {
          window.clearInterval(this.launchExe.timer)
        }

        let minM = this.launchExe.delay      // 最小时间，在此时间后开始启动应用程序
        this.launchExe.timer = window.setInterval(() => {
          // 计算时间
          let s = this.launchExe.seconds++
          let m = this.launchExe.minutes = parseInt(s / 60)

          if (m === minM) {
            minM++
            for (let i = 0; i < this.launchExeInfo.length; i++) {
              let exe = this.launchExeInfo[i]
              if (exe.status === 'noLaunch') {
                exe.status = 'launching'
                this.$set(this.launchExeInfo, i, exe)
                this.log('Exe: prepare launch ' + exe.type)

                window.setTimeout(() => {
                  exe.status = 'launched'
                  document.getElementById('protocol' + exe.type).click()
                  this.log('Exe: launching ' + exe.type)
                  this.$set(this.launchExeInfo, i, exe)
                  FzsLocalStorage.set(date, this.launchExeInfo)
                }, 3000)

                if ((i + 1) === this.launchExeInfo.length) {
                  console.log('Exe: Clear Interval')
                  window.clearInterval(this.launchExe.timer)
                } else {
                  break
                }
              }

              if ((i + 1) === this.launchExeInfo.length) {
                console.log('Exe: Clear Interval')
                window.clearInterval(this.launchExe.timer)
              }
            }
          }
        }, 1000)
      },

      // 当 notification 被点击时，触发 iKnown = true
      setNotifyOnClick () {
        let n = this.matterTip.notification
        n.onclick = () => {
          this.matterTip.notification.close()
          this.matterTip.iKnown = true
          this.log('Notify: Be clicked, now iKnown is ' + this.matterTip.iKnown)
        }
      }
    },
    filters: {
      inverse (count) {
        console.log(count)
        let temp = count * 60 - this.launchExe.seconds
        return (temp > 0 ? temp : 0)
      }
    },
    mounted () {
      console.log(window.m = this)
      this.setNotify('你好', '开始工作了')
      this.startWholePointTip()
      this.inverseAndOpenExe()
      this.getStyle()
    }
  }
</script>

<style lang="less">
</style>
