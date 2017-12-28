<template>
  <div class="notification">
    <div class="vux2x-document">
      <div class="para">
        <h4>概念</h4>
        <ul>
          <li>Notification 需要用户确认；</li>
          <li>只要页面存在，Notification 就能正常工作；</li>
          <li>Notification 显示在右下角，更像是 C/S 程序</li>
        </ul>

        <h4>检测当前浏览器是否支持 Notification</h4>
        <pre class="javascript">
          <code>
            !!window.Notification === true // 当前 Notification 是一个对象，也可以用判断对象类型来判断
          </code>
        </pre>

        <h4>使用 <code>permission</code> 判断当前页面是否允许通知</h4>
        <h4>使用 <code>requestPermission</code> 请求用户允许此页面显示通知</h4>
        <pre class="javascript"><code>
          if (Notification.permission === 'default') { // 状态有3种 default/granted/denied
            window.Notification.requestPermission((permission) => {
              console.log(permission)
            })
          }
        </code></pre>
        <div class="example">
          <button @click="requestPermission()">点击请求用户允许通知</button>
        </div>

        <h4>使用 New Notification 创建通知</h4>
        <pre class="javascript"><code>
         var n = new Notification("title", {
                body: "body",
                icon: 'http://www.baidu.com/img/baidu_jgylogo3.gif',
                tag:1   // 特别注意的是 tag ，tag 用来标志一个 弹窗的身份，多个不同 tag 的弹窗会堆叠，同个 tag 的弹窜会被替换
            });
        </code></pre>
        <div class="example">
          <button @click="alertNotification()">点击弹出通知框</button>
        </div>

        <h4>使用 close() 关闭通知</h4>
        <pre><code class="javascript">
          n.close()
        </code></pre>
        <div class="example">
          <button @click="closeNotification()">关闭上面的通知</button>
        </div>

        <h4>Notification 事件 <code>onshow</code><code>onclick</code><code>onclose</code><code>onerror</code></h4>
        <pre><code class="javascript">
          window.n.onshow = () => {
          }
        </code></pre>
        <div class="example">
          <div class="tip">{{info}}</div>
          <button @click="setEvent()">设置事件</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        info: ''
      }
    },
    methods: {
      //
      requestPermission () {
        if (window.Notification.permission === 'default') {
          console.log('当前页面未设置通知，开始请求用户设置通知')

          window.Notification.requestPermission((permission) => {
            console.log(permission)
          })
        } else if (window.Notification.permission === 'granted') {
          console.log('当前页面已设置通知，无需重复设置')
        } else if (window.Notification.permission === 'denied') {
          console.log('当前页面已被禁止通知')
        } else {
          console.log('未知状态')
        }
      },
      //
      alertNotification () {
        window.n = new Notification('title', {
          body: 'body',
          icon: 'http://www.baidu.com/img/baidu_jgylogo3.gif',
          tag: 1   // 特别注意的是 tag ，tag 用来标志一个 弹窗的身份，多个不同 tag 的弹窗会堆叠，同个 tag 的弹窜会被替换
        })
      },
      //
      closeNotification () {
        window.n.close()
      },
      //
      setEvent () {
        this.info = '设置成功'
        window.n.onclick = () => {
          this.info = 'Notification click'
        }
        window.n.onclose = () => {
          this.info = 'Notification close'
        }
        window.n.onshow = () => {
          this.info = 'Notification show'
        }
      }
    },
    mounted () {
      console.log(window.m = this)
    }
  }
</script>

<style lang="less"></style>
