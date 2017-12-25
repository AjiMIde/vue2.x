<template>
  <div class="vux2x-document">
    <h2>路由</h2>

    <h4>资源</h4>
    <div class="para">
      <ul>
        <li><a href="https://router.vuejs.org/zh-cn/" target="_blank">官网API</a></li>
        <li><a href="https://github.com/vuejs/vue-router" target="_blank">Github Vue-Router</a></li>
        <li><a href="https://github.com/pillarjs/path-to-regexp" target="_blank">Path-to-RegExp正则书写匹配</a></li>
        <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History_API"
               target="_blank">Window History API</a></li>
      </ul>
    </div>

    <h4>多方库</h4>
    <div class="para">
      <b>Page.js, Director, Ui-router, React-Router</b><b></b>
    </div>

    <h4>安装</h4>
    <div class="para">
      <div>直接安装(CDN)</div>
      <div>脚手架集成（npm install vue-router）</div>
    </div>

    <h4>使用</h4>
    <div class="para">
      <p>路由的使用</p>
      <pre>
        <code class="javascript">
          import VueRouter from 'vue-router'
          Vue.use(VueRouter)

          const Home = { template: '< p>home page< /p>' }
          import Hello from '@/components/Hello'

          export default new Router({
            routes: [{
              path: '/home',      // 路由路径
              name: 'home',       // 命名视图
              component: Home,    // 组件
            }, {
              path: '/hello',
              component: Hello,
            }, {
              path: '/world',
              component: r => require.ensure([], () => r(require('@/app/world.vue')), '')
            }, {
              path: '/dynamicPara/:id',
              component: r => require.ensure([], () => r(require('@/app/dynamicPara.vue')), '')   // 懒加载
            }, {
              path: '/dynamicPara/:id',
              component: () => import('@/app/dynamicPara')  // 懒加载
            }, {
              path: '*',
              redirect: '/home'     // 重定向，也可以使用 redirect: {name: routeName}
            }, {
              path: '*',
              redirect: to => { // 使用方法进行路由分析参数，// 返回 string/Object 完成路由重定向}
            }, {
              path: '/a',
              component: A,
              alias: '/b'   // 别名，当访问 /b 时，路由不会发生变化，但访问的组件依然为 A
            }]
          })
        </code>
      </pre>
    </div>

    <h4>导航</h4>
    <div class="para">
      <b>使用 html 标签导航</b>
      推荐使用 router-link。原因：
      <ul>
        <li> 可定义 router-link-active等样式 </li>
        <li> 可无疑切换 H5 history模式/hash模式 </li>
        <li> h5 history 模式下，不会重载页面</li>
        <li> 属性 to 可支持 string/object({name: 'routerName', path: 'routerPath', params: {}, query: {}})</li>
        <li> 支持 router的 push/replace 等模式</li>
        <li> 支持 定义 tag html </li>
        <li> 支持 定义 active-class </li>
      </ul>
      <pre><code class="html">
        < router-link to="/home">Home< /router-link>
        < router-link to="{name: 'routerName', params: {}}">Home< /router-link>
        < router-link to="/home" replace>Home< /router-link>
        < router-link to="/home" append>Home< /router-link> // 路径追加，如： /a => /a/home
        < router-link to="/home" tag='li'>Home< /router-link>

        < a href="#/home">Home< /a>
      </code></pre>
    </div>

    <h4>嵌套路由</h4>
    <div class="para">
      <pre><code class="javascript">
        routes: [
          {
            path: '/wx', component: wx,
            children: [{
              path: 'login',
              component: wxLogin
            }]
        }]
      </code></pre>
    </div>

    <h4>过渡效果</h4>
    <div class="para">
      <a href="https://s.phone580.com/pay/recycle/yizun/index.html#/index" target="_blank">手机回收2.0过渡效果</a>
    </div>

    <h4 class="tip">特别</h4>
    <div class="para">
      <ul>
        <li>使用 Vue.use(router) 会在每个 Vue组件 注入 router 方法和属性;</li>
        <li><b>this.$router: router 实例</b> 经常代表的是方法，如 .push/.replace</li>
        <li><b>this.$route: route 路由信息对象，只读的属性</b> 如 .name/.params.param</li>
        <li>导航守卫， <b>监听事件</b></li>
        <pre>
          <code class="javascript">
            // 全局守卫
            const router = new VueRouter({ ... })
            router.beforeEach((to, from, next) => {
            })
            router.afterEach((to, from, next) => {
            })

            // 组件内守卫
            watch: {
              '$route' (to, from) { // 对路由变化作出响应...
            }
            beforeRouteUpdate (to, from, next) { // 2.2+
            }
            beforeRouteEnter (to, from, next) { // 无法访问当前 this ，此时还没有创建，可通过 next(vm => {}) 获取 this
            }
            beforeRouteLeave (to, from, next) {
            }
          </code>
        </pre>
        <li><b>next()必须要被执行，且有以下几种结果</b></li>
        <li>next() 正常跳转</li>
        <li>next('/') next({path: '/'})  跳转到另外地址</li>
        <li>next(false) 终止跳转</li>

        <li><b>滚动行为</b>，在切换新路由时，让页面进行滚动，只在 HTML5 history 模式下可用，该方法可模块【滚动到锚点】的功能</li>
        <pre><code class="javascript">
          const router = new VueRouter({
            routes: [...],
            scrollBehavior (to, from, savedPosition) {
              // return 期望滚动到哪个的位置
              return {x: number, y: number}
              return {selector: string, offset? : { x: number, y: number }}
              return false/{}
            }
          })
        </code></pre>

        <li><b>多视图同时展示：需要在同一个页面里面展示多个视图，这里用法还是比较少见</b></li>
        <pre><code class="javascript">
          < router-view class="view one">< /router-view>
          < router-view class="view two" name="a">< /router-view>
          < router-view class="view three" name="b">< /router-view>

          {
            path: '/',
            components: {
              default: Foo,
              a: Bar,
              b: Baz
            }
          }
        </code></pre>

      </ul>
    </div>

    <h4 class="tip">方法与属性</h4>
    <div class="para">
      <b>方法</b>
      <pre><code class="javascript">
        router.push(location, onComplete?, onAbort?)
        router.replace(location, onComplete?, onAbort?)
        router.go(Number)
        router.back()
        router.forward()
        router.push({name: 'route', params: {id: 123}})
        router.push({name: 'route', query: {id: 123}})
        // 不常用：
        router.resolve()
        router.addRoutes
        router.onReady()
        router.onError()
      </code></pre>
      <b>属性</b>
      <pre><code class="javascript">
        route.query/route.param/route.hash/route.path/route.fullPath
        <b>router.app 获取 Vue 的根实例</b>
      </code></pre>
    </div>

  </div>
</template>
