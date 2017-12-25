<template>
  <div class="vux2x-document">
    <h2>Vuex</h2>

    <h4>资源</h4>
    <div class="para">
      <ul>
        <li><a href="https://github.com/vuejs/vuexhttps://github.com/vuejs/vuex" target="_blank">Vuex Api</a></li>
        <li><a href="https://github.com/vuejs/vuex" target="_blank">GitHub vuex</a></li>
      </ul>
    </div>

    <h4>简介</h4>
    <div class="para">
      专为 Vue.js 开发的状态管理模式、集中式存储管理应用中所有组件的状态。<br>
      <b>什么时候用到</b>
      <ul>
        <li>多组件<b>共享状态</b>时；</li>
        <li>多视图依赖<b>同一状态；</b></li>
        <li>不同视图的行为需要变更同一状态。</li>
      </ul>
      <b>以前的解决方案</b>
      <ul>
        <li>传参；</li>
        <li>父组件、子组件事件变更；</li>
        <li>全局参数。</li>
      </ul>
    </div>

    <h4>状态管理模式</h4>
    <div class="para">
      <ul>
        <li>state，驱动应用的数据源；</li>
        <li>view，以声明方式将 state 映射到视图；</li>
        <li>actions，响应在 view 上的用户输入导致的状态变化。</li>
      </ul>
      <img src="./assets/flow.png" alt=""><br>
      <img src="./assets/vuex.png" alt="">
    </div>
    <div class="example">
      <flux-exp-a></flux-exp-a>
      <flux-exp-b></flux-exp-b>
    </div>

    <h4>使用</h4>
    <div class="para">
      <ul>
        <li>Vuex的核心就是 store 仓库，也就是一个窗口，包含着应用中的大部分状态 state</li>
        <li>Vuex 与单纯的全局对象（如 window）相似，但有不同</li>
        <li>Vuex的状态是响应式的，当 store 中的状态发生变化时，相应的组件也会得到高效更新</li>
        <li>不能直接改变 store 中的状态，而是通过提交 mutation（变化）来使状态改变。</li>
      </ul>
    </div>

    <h4>安装</h4>
    <div class="para">
      <ul>
        <li>CDN 引用: <a href="https://unpkg.com/vuex">https://unpkg.com/vuex</a></li>
        <li>npm 安装并引用</li>
        <pre><code class="javascript">
          // shell
          npm install vuex --save
          // javascript
          import Vue from 'vue'
          import Vuex from 'vuex'
          Vue.use(Vuex)
        </code></pre>
        <li>list</li>
      </ul>
      <pre><code class="javascript">
        let name = 'name'
      </code></pre>
    </div>

    <h4>State</h4>
    <div class="para">
      <blockquote>
        Vuex 使用单一状态树，一个对象包含所有的应用层级状态。故它是作为一个：唯一<b>数据源</b>、每一个应用仅包含一个 store 实例
        <b>(单状态树和模块化并不冲突)</b>
      </blockquote>
      <pre><code class="javascript">
        // 定义
        const store = new Vuex.Store({
          state: {
            count: 0
          }
        }
        // 组件读取
        const Counter = {
          computed: {
            count () {
              return store.state.count
          }
        }
      </code></pre>
      <b>Vuex 可以使用创建一个全局变量--状态的单例来使用，但这样并不高效，一般使用以下方法</b>
      <pre><code class="javascript">
        // 定义
        import Vuex from 'vuex'
        Vue.use(Vuex)
        const app = new Vue({
          el: '#app',
          store       // 注入到每一个组件
        })
        // 使用
        this.$store ...
      </code></pre>
      <b>当组件取多个状态时，频繁的使用计算属性会有些冗长，使用 <u>mapState</u> 可以帮助生成计算属性，来看下面的例子</b>
      <pre><code class="javascript">
        // 不使用 mapState
        const com = {
          computed: {
            count () {
              return this.$store.state.count
            },
            status () {
              return this.$store.state.status
            },
            expires () {
              return this.$store.state.expires
            }
          }
        }
        // 使用 mapState
        // 在单独构建的版本中辅助函数为 Vuex.mapState
        import { mapState } from 'vuex'
        const com = {
          computed: mapState({
            count: (state) => {
              return state.count
            },
            count: state => state.count,

            countAlias: 'count', // 别名
          })
        }

        const com = {
          computed: mapState([
            'count'     // 相当于 count: state => state.count
          ])
        }
      </code></pre>
      <b>使用 <u>对象展开运算符</u>，与局部计算属性混合使用</b>
      <pre><code class="javascript">
        const com = {
          computed: {
            count () {
              return this.$store.state.count
            },
           ...mapState({
            count: (state) => {
              return state.count
            },
          })
        }
      </code></pre>
    </div>

    <h4>Getter</h4>
    <div class="para">
      <b>概念、定义、使用</b>
      <blockquote>
        Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的
        依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
        <b>简单来讲，就是使用 state 中原有数据，产生出更多其他的数据，如一个订单原数据，可生产出此订单数据的数量、过期数、未付款等信息</b>
      </blockquote>
      <pre><code class="javascript">
          // 定义与使用
            const store = new Vuex.Store({
              state: {
                orderList: []
              },
              getters: {
                orderListCount: state => {
                  return state.orderList.length
                },
                orderListUnPay: state => {
                  return state.orderList.filter(item => item.state === 'un pay')
                },
                orderListOutExpires: (state, getters) => {   // 支持返回函数
                  return (date) => {
                    return state.orderList.filter(item => item.date > date)
                  }
                }
              }
            })

            const com = {
              computed: {
                unPayOrderList () {
                  this.state.getters.orderListUnPay
                }
              }
            }


        </code></pre>

      <b>mapGetters 辅助函数</b>
      <pre><code class="javascript">
        import { mapGetters } from 'vuex'
        export default {
          computed: {
            ...mapGetters([
              'orderListCount',
              'orderListUnPay'
            ])
          }
        }
      </code></pre>
    </div>

    <h4>Mutation</h4>
    <div class="para">
      <blockquote>
        更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
        这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：<br>
        <b>简单地说：获取数据可以用 state，获取加工数据可以用 getters，而更改数据只能用 mutation</b>
      </blockquote>
      <pre><code class="javascript">
        // 定义
        const store = new Vuex.Store({
          mutations: {
            increment (state) {   // 注意 state 作为第一个参数进入
              state.count++
            },
            incrementMore (state, n) {    // 使用 payload 传入额外的参数
              state.count += n
            },
            incrementWithObj (state, obj) { // 传入对象，这种方法更适合于多个参数的环境下
              state.count += obj.n
            }
          }
        })
        // 使用
        store.commit('increment')
        store.commit('incrementMore', 10)
        store.commit('incrementWithObj', {n: 10})
        store.commit({  // 使用包含 type 的对象提交 mutation
          type: 'incrementWithObj',
          n: '10'
        })
      </code></pre>
      <b>由于 store 与 Vue的响应式特性，故向 store 中增加值时，需要遵行以下规则</b>
      <ul>
        <li>提前在 store 中初始化好所有所需属性。</li>
        <li>当需要在对象上添加新属性时，你应该</li>
        <li>使用 Vue.set(obj, 'newProp', 123), 或者</li>
        <li>以新对象替换老对象。例如，利用 stage-3 的对象展开运算符我们可以这样写： state.obj = { ...state.obj, newProp: 123 }</li>
      </ul>

      <b>再唠叨几句</b>
      <ul>
        <li>mutation 不能是异步函数，只能是同步</li>
      </ul>

      <b>使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 。</b>
      <pre><code class="javascript">
        import { mapMutations } from 'vuex'
        export default {
          // ...
          methods: {
            ...mapMutations([
              'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
              // `mapMutations` 也支持载荷：
              'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
            ]),
            ...mapMutations({
              add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
            })
          }
        }
      </code></pre>

    </div>

    <h4>Action</h4>
    <div class="para">
      <blockquote>
        类似于 mutation，不同在于：
        <ul>
          <li>Action 提交的是 mutation，而不是直接变更状态。</li>
          <li>Action 可以包含任意异步操作。</li>
        </ul>
      </blockquote>
    </div>
    <pre><code class="javascript">
      const store = new Vuex.Store({
        actions: {
          increment (context) {             // context 指向的是 store，但 context 本身不等于 store
            context.commit('increment')     // 提交一个 mutation
          },
          reduce ({commit, state}) {        // 分别代表 store.commit/ store.state
            commit('increment')             // 使用参数解构可以简化代码
          },
          incrementAsync ({commit}) {       // 与 mutation 不同的是，action支持异步操作
            vue.$http.post().then(() => {
              commit('increment')
            })
          }
        }
      })
      // 使用
      this.$store.dispatch('increment')
      this.$store.dispatch('increment', {     // 传参：payload 与 mutation 无异，具体可参考 mutation
        n: 10
      })
    </code></pre>
    <b>使用mapActions 辅助函数，可以快速地在组件中使用 Action，详情可参考 mutation</b>

    <h4>module</h4>
    <div class="para">
      <blockquote>
        Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
        ...
      </blockquote>
    </div>

    <h4>插件</h4>
    <h4>热加载</h4>
    <h4>API</h4>

  </div>
</template>

<script>
  import fluxExpA from './example/fluxExpA.vue'
  import fluxExpB from './example/fluxExpB.vue'

  export default {
    components: {
      fluxExpA,
      fluxExpB
    },
    mounted () {
      console.log(window.m = this)
    }
  }
</script>
