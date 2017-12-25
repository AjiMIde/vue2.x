<template>
  <div class="vux2x-document">
    <h2>响应式原理</h2>
    <div class="para">
      <ul>
        <li><b>Object.defineProperty</b></li>
        <li>不支持低版本浏览器</li>
        <li>Getter/Setter</li>
        <li>C# <a href="https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/set">Get/Set</a></li>
        <li><a href="https://jsfiddle.net/AjiMIde/5eekL86m/3/" target="_blank">jsFiddle ES6 Object.defineProperty</a></li>
        <li><a
          href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"
          target="_blank">Mozilla API</a></li>
      </ul>
      <pre><code class="javascript">
        function clg(text){
          document.getElementById('clg').innerHTML += text
        }

        var order = {}
        Object.defineProperty(order,"amount",{
          value:100,
          configurable: false, //  可配置总开关，为false，则不能再设置其他的（value，writable，configurable），即不能再次使用 defineProperty
          writable: false, // 能否被重写
          enumerable: false, // 可枚举性，是否被遍历.为 false 时，Object.keys/for..in 等不起作用
        })

        clg(order.amount)
        order.amount = 456
        clg(order.amount)

        var order2 = {}
        Object.defineProperty(order2,"amount",{
          // value: 110,
          _val: 0,
          set (newV){ // setter/getter
            clg('use order2 setter')
            this._val = newV
          },
          get () {
            clg('use order2 getter')
            return this._val
          }
        })
        clg(order2.amount)
        order2.amount = 120
        clg(order2.amount)


      </code></pre>
    </div>

    <h4>要点与注意事项：</h4>
    <div class="para">
      <ul>
        <li>getter/setter 使得 Vue 在内部的组件（或Dom）之间建立联系的依赖。</li>
        <li>当 setter 被调用时，Vue 监听所有使用该属性的组件（或Dom）进行渲染计算。</li>
        <li>通常会表现为：<b>setter</b> --> <b>Watcher</b> --> <b>Component Render</b> --> <b>V-Dom</b> --> <b>Truly Display</b></li>
        <li>Vue，使用 Data 绑定响应式数据</li>
        <pre><code class="javascript">
        var vm = new Vue({
          data:{
            a:1
          }
        })
        </code></pre>
      </ul>
      <div class="danger">
        <ul>
          <li>注意，一直强调，需要被响应的数据应该在第一时间定义到 data 里面。</li>
          <li>注意，像这样的方法一定是错的： <u>this.$data.count = 10</u></li>
        </ul>
      </div>
    </div>

    <h4>异步更新队列</h4>
    <div class="para">
      <ul>
        <li>Vue 对 dom 的更新是异步的。</li>
        <li>这是因为，Vue 在多层的响应式、watcher监听者的操作下面，大概率情况下都会对同一块Dom进行更新。</li>
        <li>这同时也是虚拟Dom存在的意义，去重、计算最终结果，最后更新到 Dom 树上。</li>
        <li><b>原理：Promise.then()/MessageChannel/window.setTimeout(fn, 0)</b></li>
        <li>如何在数据变化后地查看刷新的 Dom 元素？</li>
      </ul>
      <pre><code class="javascript">
          Vue.nextTick(function () {
            vm.$el.textContent === 'new message' // true
          })
          this.msg = 'btn is be clicked'
          window.alert(document.getElementById('msg').innerText)
          this.$nextTick(() => {
            window.alert(document.getElementById('msg').innerText)
          })
      </code></pre>
      <div class="example">
        <div id="msg">{{msg}}</div>
        <button @click="btnClick()">click me</button>
      </div>
    </div>

    <h2>服务器端渲染</h2>
    <h4>特点、优点</h4>
    <div class="para">
      <ul>
        <li><b>Vue如何地输出项目</b>？</li>
        <li>发起请求--app.js--按需要加截其他js--写入基础的css样式及业务功能--输出组件--生成Dom/响应Dom事件。</li>

        <li><b>服务器端渲染</b>？：</li>
        <li>直接输出 Dom/响应Dom事件。</li>

        <li><b>为什么使用服务器端渲染？</b></li>
        <li><a href="https://cn.wordpress.org/" target="_blank">https://cn.wordpress.org/</a></li>
        <li>* 直接渲染页面，无需过多 js 执行，提高加载速度。</li>
        <li>* 使用 cache，实现缓存</li>
        <li>* SEO友好。</li>

        <li><b>缺点</b></li>
        <li>* 服务器消耗</li>
        <li>* 有一定难度</li>

        <li><b>实现原理</b></li>
        <li>Webpack插件内置</li>
        <li>node.js-Streaming/Bigpipe</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 100,
        msg: 'I am msg'
      }
    },
    methods: {
      btnClick () {
        this.msg = 'btn is be clicked'
        window.alert(document.getElementById('msg').innerText)
        this.$nextTick(() => {
          window.alert(document.getElementById('msg').innerText)
        })
      }
    },
    mounted () {
      console.log(window.m = this)
    }
  }

</script>

