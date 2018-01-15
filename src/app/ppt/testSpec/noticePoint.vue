<template>
  <div class="vux2x-document">

    <h2>注意事项（踩过的坑）</h2>

    <h4>9876浏览器捕获 和 Deug</h4>
    <div class="para">
      <ul>
        <li>karma如果捕获不到 chrome 启动的话，可以直接用 chrome 打开 localhost:9876 运行</li>
        <li>当然，正确的方法是 npm 安装 chromedirver </li>
        <li><code>npm i chromedirver --save-dev</code></li>
        <li>打开 debug.html 可以。</li>
      </ul>
    </div>

    <h4 class="tip"> Asyn （done、promise）</h4>
    <div class="para">
      <ul>
        <li>Mocha 默认很好地支持 <code>promise</code> 来执行异步操作，这是一个重要的点</li>
        <li>更多情况下我们会使用 <code>done()</code> 完成</li>
        <li>it 传入的函数 return一个Promise时，不需要且不应定义done入参，因为二者不能同时使用</li>
        <li>async/await 以及 done 后面都得跟上异步 不然必定进不去then/catch </li>
      </ul>
    </div>

    <h4>autoWatch/singleRun 参数</h4>
    <div class="para">
      <ul>
        <li>Vue 脚手架在配置 karma 时，npm 命令行是带有 <code>--single-run</code> 参数的，这会导致测试用例跑一次就自动停止了</li>
        <li>当然这是节省资源的配置（看起来），如果想要创建服务器，并时刻监听，可以把 <code>--single-run</code>去掉</li>
        <li>你也可以添加 <code>--auto-watch</code>参数进行服务器监听，并实时更新</li>
      </ul>
    </div>

    <h4> ()=> 箭头函数与 this 指向</h4>
    <div class="para">
      <ul>
        <li>不建议在测试代码里面写箭头函数，这样会使 this 的指向不明，导致一些如 this.timeout(0) 使用报错</li>
      </ul>
    </div>

    <h4>钩子函数 Hook</h4>
    <div class="para">
      <ul>
        <li>不建议将变量定义和业务、上下文写在 it 中间，所有被写在 it 中间的代码执行顺序不明!</li>
        <li>变量和业务、上下文应写在钩子函数里面</li>
      </ul>
    </div>

    <h4 class="tip">webSecurity参数</h4>
    <div class="para">
      <ul>
        <li>在 Karma 中调用异步测试跨域了？没有问题，使用下面的配置解决跨域问题</li>
        <li>你甚至可以在解决 <span class="error">跨域问题、上下文问题</span>之后，做一个一整套的后台接口测试！</li>
        <pre><code class="javascript">
              phantomjsLauncher: {
                options: {
                  settings: {
                    webSecurityEnabled: false
                  }
                }
              }
        </code></pre>
      </ul>
    </div>

    <h4 class="tip">babel-polyfill</h4>
    <div class="para">
      <ul>
        <li> Babel默认不会对Iterator、Generator、Promise、Map、Set等全局对象，以及一些全局对象的方法（比如Object.assign）转码。如果你想要对这些对象转码，就要安装babel-polyfill。 </li>
        <li> 一般会提醒错误如下：<span class="danger"> Promise undefined variable </span> </li>
        <li> <code>npm install babel-polyfill --save-dev</code> </li>
        <li>然后在测试文件上引入以下</li>
        <li> <code> import 'babel-polyfill' </code> </li>
      </ul>
    </div>

    <h4> InitApp </h4>
    <div class="para">
      <ul>
        <li>Vue组件会有大量的外部依赖，比如（父组件传入的参数、vuex传递的值、全局方法、根组件方法等） 都需要 自行模拟上下文环境</li>
        <li>并且 Vue 需要通过一些条件的注入，才能进行 $mount 挂载，才能进行测试</li>
      </ul>
      <pre><code class="javascript">
        import Vue from 'vue'
        import app from '@/App.vue'
        import router from '@/router/index'
        import VueResource from 'vue-resource'
        import 'babel-polyfill'

        // import filter from '..'
        // import Utils from '..'
        // import resource from '..'

        export default function (component, propsData) {
          Vue.use(VueResource)
          // Vue.prototype.$resource = resource
          // Vue.prototype.$utils = Utils
          // Vue.mixin({
          //   methods: xx
          // })
          // Object.keys(filter).forEach(key => {
          //   Vue.filter(key, filter[key])
          // })
          const Constructor = Vue.extend(component)
          const RootConstructor = Vue.extend(app)
          // 构造 props
          let obj = {
            router: router
          }
          // 当有额外的 props 数据时，注意填充进来
          if (propsData) {
            obj.propsData = propsData
          }
          // 挂载  root
          let root = new RootConstructor(obj)
          root.$mount()
          // 返回挂载的实例
          let vm = new Constructor(obj)

          vm.$root = root

          return vm
        }

      </code></pre>
    </div>

    <h4> 去掉被测试的文件 </h4>
    <div class="para">
      <pre><code class="javascript">
        const srcContext = require.context('../../src', true, /^\.\/(?!(main|api\/.*|readMe\/.*|app\/static\/.*)(\.js)?$)/)
      </code></pre>
    </div>

    <h4> Timeout 提示</h4>
    <div class="para">
      <li>Mocha中的异步测试, 需要给it()内函数的参数中添加一个done, 并在异步执行完后必须调用done(),</li>
      <li>如果不调用done(), 那么Mocha会在2000ms后报错且本次单元测试测试失败(mocha默认的异步测试超时上线为2000ms), 错误信息如下:</li>
      <li class="danger">Timeout of 2000ms exceeded.For async tests and hooks, ensure "done()"</li>
      <li>如果异步的时间特别长的时候，使用以下代码解决问题</li>
      <li><code>this.timeout(5000); this.timeout(0)</code></li>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'ppt',
    data () {
      return {
        list: [
          {title: 'Vue 总结', url: 'vue-summary'},
          {title: 'Vue 总结', url: 'vue-summary'},
          {title: 'Vue 总结', url: 'vue-summary'}
        ]
      }
    }
  }
</script>

<style lang="less">
</style>
