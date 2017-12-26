<template>
  <div class="key-matter vux2x-document">
    <div class="para">
      <h2>测试 window.Notification</h2>
      <div class="title">测试 chrome  h5 桌面提醒</div>
      <code> {{ifChromeNotify ? '当前支持 notification' : '当前不支持 notification'}}</code>

      <div class="title">点击弹出 notification window </div>
      <button @click="setNotify()">点击测试</button>

      <h2>整点提醒喝水，半点提醒信息查看</h2>
      <div>
        <code>离整点还有 {{(60 - matterTip.minutes) + ' 分'}}</code>
      </div>
      <div>
        <code>离半点还有 {{((90 - matterTip.minutes) % 60) + ' 分'}}</code>
      </div>

      <h2>开机分段启动应用程序</h2>
      <ul>
        <li>注册表执行注册协议，并关联应用程序</li>
        <li><code>打开 src/app/play/keyMatter/reg/ </code></li>
        <li>执行注册</li>
        <li><code>当前已注册：tim/wechat/foxmail</code></li>
        <li>通过 a 标签关联协议，通过点击 a 标签，打开协议，打开应用程序</li>
        <li>测试 <a id='protocolTim' href="ajiprotocoltim://"> Tim </a></li>
        <li>测试 <a id='protocolWechat' href="ajiprotocalwechat://"> Wechat </a></li>
        <li>测试 <a id='protocolFoxmail' href="ajiprotocalFoxmail://"> Foxmail </a></li>
        <li>通过定时程序，并使用 click 事件自动响应 a 标签，打开应用程序</li>
      </ul>

      <ul v-if="launchExe.allLaunched">
        <li>所有程序已启动</li>
      </ul>
      <ul v-else>
        <li>{{(launchExe.timeTim - launchExe.minutes) > 0 ? (launchExe.timeTim - launchExe.minutes) + ' 分后启动 Tim' : '已启动 Tim '}}</li>
        <li>{{(launchExe.timeWechat - launchExe.minutes) > 0 ? (launchExe.timeWechat - launchExe.minutes) + ' 分后启动 Wechat' : '已启动 Wechat '}}</li>
        <li>{{(launchExe.timeFoxmail - launchExe.minutes) > 0 ? (launchExe.timeFoxmail - launchExe.minutes) + ' 分后启动 Foxmail' : '已启动 Foxmail '}}</li>
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
        ifChromeNotify: !!window.Notification,
        // 事项提醒
        matterTip: {
          notification: '',
          minutes: 0,
          seconds: 0,
          timer: 0,
          iKnown: false
        },
        // 运行程序
        launchExe: {
          allLaunched: false,
          timer: '',
          seconds: 0,
          minutes: 0,
          timeTim: 5,
          timeWechat: 6,
          timeFoxmail: 7,
          timeEnd: 8
        }
      }
    },
    methods: {
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
      },

      /**
       * chrome window.alert
       * @param context
       */
      setAlert (context = 'Warning!!') {
        window.alert(context)
      },

      // 当 notification 被点击时，触发 iKnown = true
      setNotifyOnClick () {
        this.matterTip.notification.onclick = () => {
          console.log('xxx')
          this.matterTip.notification.close()
          this.matterTip.iKnown = true
        }
      },

      // 开启整点、半点提醒
      startWholePointTip () {
        if (this.matterTip.timer) {
          window.clearInterval(this.timer)
        }
        this.matterTip.timer = window.setInterval(() => {
          let date = new Date()
          let m = this.matterTip.minutes = date.getMinutes()
          let s = this.matterTip.seconds = date.getSeconds()

          if (m === 30) {
            if (s === 0) {
              this.setNotify('起来', '走走', 'https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=26cecb5ef06f0df52538150bf837f0d5&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fcc11728b4710b91286e2ba48c2fdfc0392452260.jpg')
              this.iKnown = false
            }
            if (s === 10 && this.iKnown === false) {
              this.setAlert('起来' + '走走')
              this.iKnown = true
            }
          } else if (m === 0) {
            if (s === 0) {
              this.setNotify('起来', '喝水', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514267498934&di=73c9d37418472085ac3b9ef09e4d85e9&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2F3%2F2c%2Fb1%2F117160463412cb12c3o.jpg')
            }
            if (s === 10 && this.iKnown === false) {
              this.setAlert('起来' + '喝水')
              this.iKnown = true
            }
          }
        }, 1000)
      },

      // 倒数启动应用程序
      inverseAndOpenExe () {
        let date = 'keyMatter' + FzDate.get('yyyy-MM-dd')

        if (FzsLocalStorage.get(date) === '') { // 今天还没有启动过
          if (this.launchExe.timer) {
            window.clearInterval(this.launchExe.timer)
          }
          this.launchExe.timer = window.setInterval(() => {
            this.launchExe.seconds++
            this.launchExe.minutes = parseInt(this.launchExe.seconds / 60)
            // 到点终止
            if (this.launchExe.seconds / 60 === this.launchExe.timeEnd) {
              window.clearInterval(this.launchExe.timer)
              FzsLocalStorage.set(date, 'true')
              this.launchExe.allLaunched = true
            }
            // 打开 Tim
            if (this.launchExe.seconds / 60 === this.launchExe.timeTim) {
              let a = document.getElementById('protocolTim')
              a.click()
              console.log('--' + 'launching tim')
            }
            // 打开 wechat
            if (this.launchExe.seconds / 60 === this.launchExe.timeWechat) {
              let a = document.getElementById('protocolWechat')
              a.click()
              console.log('--' + 'launching wechat')
            }
            // 打开 foxmail
            if (this.launchExe.seconds / 60 === this.launchExe.timeFoxmail) {
              let a = document.getElementById('protocolFoxmail')
              a.click()
              console.log('--' + 'launching foxmail')
            }
          }, 1000)
        } else {
          this.launchExe.allLaunched = true
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
    }
  }
</script>

<style lang="less">
</style>
