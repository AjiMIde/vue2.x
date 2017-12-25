<template>
  <div class="key-matter vux2x-document">
    <h4>测试 chrome  h5 桌面提醒</h4>
    <code> {{ifChromeNotify ? '当前支持 notification' : '当前不支持 notification'}}</code>

    <h4>2秒后弹出 notification window</h4>
    <code>测试成功</code>

    <h4>每整点弹出喝水提醒，每半点弹出查看信息提醒</h4>
    <code>我猜是行的</code>

    <!--<a href="myprotocol://D:\cmt-static\myprotocol.reg">-->
      <!--执行可执行文件-->
    <!--</a>-->
    <!--<a href="myprotocol://C:\Users\asus\Desktop\xx.reg">-->
      <!--执行可执行文件-->
    <!--</a>-->
    <div>
      <a href="ajiprotocoltim://C:\Users\asus\Desktop\xxxx.reg">
        tim
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ifChromeNotify: !!window.Notification,
        timer: 0,
        date: 0,
        tip: {}
      }
    },
    methods: {
      //
      setNotification (type) {
        // 半点
        let title = 'look qq'
        let body = 'look qq and tim'
        // 整点
        if (type === 1) {
          title = 'drink water'
          body = 'drink some water'
        }
        // 底窗
        this.tip = new window.Notification(title, {
          body: body,
          icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514213572260&di=61d5ad8f615ea7e444a92f700408a0ac&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D08430ecfdf39b60059c307f481395f5f%2F3bf33a87e950352adbd128245943fbf2b2118b6d.jpg',
          tag: 1
        })
        // 弹窗
        window.alert(title + body)
      },
      //
      setTip () {
        if (this.timer) {
          window.clearInterval(this.timer)
        }
        this.timer = window.setInterval(() => {
          this.date = new Date()
          if (this.date.getMinutes() === 30) {
            if (this.date.getSeconds() === 0) {
              this.setNotification()
            }
          } else if (this.date.getMinutes() === 0) {
            if (this.date.getSeconds() === 0) {
              this.setNotification(1)
            }
          }
        }, 1000)
      },
      //
      testNotification () {
        window.setTimeout(() => {
          this.tip = new window.Notification('圣诞快乐 title', {
            body: '圣诞快乐 body',
            icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514213572260&di=61d5ad8f615ea7e444a92f700408a0ac&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D08430ecfdf39b60059c307f481395f5f%2F3bf33a87e950352adbd128245943fbf2b2118b6d.jpg',
            tag: 1
          })
        }, 2000)
      }
    },
    mounted () {
//      this.testNotification()
      this.setTip()
    }
  }
</script>

<style lang="less">
</style>
