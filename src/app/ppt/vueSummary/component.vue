<template>
  <div class="vux2x-document" ref="aji">
    <h2>组件</h2>
    <blockquote>
      扩展HTML元素、封装可重用代码、自定义元素
    </blockquote>

    <h4>一个完整的 component :</h4>
    <div class="para">
      <pre><code class="javascript">
        Vue.component('my-comp', {
          template: '< div>< /div>',
          props: ['msg'],
          data () {
            return {}
          },
          created () {
            // do ...
          },
          methods: {
            foo () {
            }
          }
        }
      </code></pre>
      <pre><code class="javascript">
        < my-comp > < /my-comp>
      </code></pre>
    </div>

    <h4>生命周期</h4>
    <div class="para">
      <img src="https://cn.vuejs.org/images/lifecycle.png" style="width: 500px" alt="">
    </div>

    <h2>常见选项：</h2>

    <h4>data</h4>
    <div class="para">
      <blockquote>
        为 component 传入 data。注意，为每个 component 传入的 data 需是函数，而不是简单的对象，这样子是为了
        满足响应式数据的特性。<br>
        通常来讲，包含的 data 里面在属性，vue都会将其转换为 getter/setter，从而实现数据的响应变化<br>

      </blockquote>
      <pre><code class="javascript">
        {
          data: function () {
            return {
              foo: 'foo',
              bar: 'bar'
            }
          }
        }
        // 组件实例代理了所有 data 的属性，且可以通过 vue.$data 来访问整个 data 对象，因此：
        this.$data.foo === this.foo
      </code></pre>
    </div>

    <h4>computed</h4>
    <div class="para">
      <blockquote>
        计算属性，Vuex中的 getter 也是如此一个概念，可以认为是对data 中的数据进行2次加工（当然没有这么简单）<br>
        <b>计算属性是基于它们的依赖进行缓存的。</b>这意味着，比起使用 methods/watch 计算属性性能更佳<br>
        <b>计算属性用于，需要监听多个值改变而做出改变时，</b>而这比 watch 更加优雅。
        <b>计算属性同时支持  getter/setter</b>，这可能在一些业务上的处理会更加便利。
      </blockquote>
      <pre><code class="javascript">
        {
        computed: {
          orderListCount () {
            return this.orderList.length
          },
          orderListExpires: {
            get () {},    // 获取过期的订单
            set (val) {}  // 当添加一条过期的订单时，可将新的、过期的订单 push 到原来的 orderList，保证数据的健全
          }
        }
      }
      </code></pre>
    </div>

    <h4>methods</h4>
    <div class="para">
      <blockquote>方法</blockquote>
      <pre><code class="javascript">
        vue = {
          methods: {
            getCount () {
              // to do with this
            }
          }
        }
      </code></pre>
    </div>

    <h4>Props</h4>
    <div class="para">
      <blockquote>
        用来接收来自父组件的信息，有以下几种接受方法
      </blockquote>
      <pre><code class="javascript">
        Vue.component('myComp', {
          props: {             // 交互性传递数据，可为Array、Object
            proA: null,        // 任何类型
            proB: Number,      // String/Number/Boolean/Function/Object/Array
            proC: [String, Number],
            proD: {
              type: [String, Number],
              required: true,     // required 与 default 似乎是冲突的
              default: 100
            },
            proE: {               // 数组/对象的默认值应当由一个工厂函数返回
              type: Object,
              default: () => {
                return {msg: 'msg'}
              }
            },
            proF: {
              validator: (val) => { // 自带验证
                return val > 0
              }
            }
          }
        })
      </code></pre>
    </div>

    <h2>常见生命周期钩子：</h2>
    <h4>beforeCreate</h4>
    <div class="para">
      <blockquote>
        在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
        <b>实际上，此时不能获得data、methods 的具体对象</b>
      </blockquote>
    </div>

    <h4>created</h4>
    <div class="para">
      <blockquote>
        在实例创建完成后被立即调用。可以进行，数据观测 (data observer)，
        属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
        <b>能使用 data、调用methods，但 dom 仍未渲染</b>
      </blockquote>
    </div>

    <h4>beforeMount</h4>
    <div class="para">
      <blockquote>
        开始调用渲染 dom 函数
      </blockquote>
    </div>

    <h4>mounted</h4>
    <div class="para">
      <blockquote>
        渲染 dom 函数，此时 $el 初使化，同时使用 $refs 也已经挂载（不包括子组件）
      </blockquote>
    </div>
    <h4>beforeUpdate</h4>
    <div class="para">
      <blockquote>
        数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
      </blockquote>
    </div>
    <h4>updated</h4>
    <div class="para">
      <blockquote>
        由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
        <b>此钩子不能保证子组件也已经完成重绘，如想等待子组件重绘完，应使用 vm.$nextTick</b>
      </blockquote>
    </div>
    <h4>beforeDestroy</h4>
    <h4>destroyed</h4>

    <h4>注册</h4>
    <div class="para">
      <pre><code class="javascript">
        import Hello from '/app/hello.vue'
        // 全局注册
        Vue.component('hello-comp', Hello)

        // 局部注册
        components: {
          'hello-comp': Hello
        }
      </code></pre>
    </div>

    <h2 class="danger">特别的</h2>

    <h4>.sync 双向数据绑定</h4>
    <div class="para">
      组件强调单向数据流，这样的低耦合设定使得组件拥有极大的内聚性。Vue在 1.x 中曾使用此特性，但在 2.0中又干掉，如今在 2.3
      中重新加入此特性，但此时你需要这样用：
      <pre><code class="javascript">
        &lt;comp :foo.sync="bar">&lt;/comp>
        // 会被扩展成：
        &lt;comp :foo="bar" @update:foo="val => bar = val">&lt;/comp>
        // 当子组件需要更新时，需显式触发一个更新事件
        this.$emit('update:foo', newVal)
      </code></pre>

    </div>

    <h4>自定义事件的表单输入组件</h4>
    <div class="para">
      自定义事件创建自定义的表单输入组件，这段有点绕，反正只要记得，可以在表单组件中使用 <b>v-model</b>进行双向数据绑定！
      <div class="dev-log"> 需要注意的是 </div>
      <ul>
        <li> 接受一个 value prop </li>
        <li> 在有新的值时触发 input 事件并将新值作为参数 </li>
      </ul>
      <pre><code class="javascript">
        &lt;input v-model="value">
        &lt;my-input v-model='myValue'>
        Vue.component('my-input', {
          props: ['value'],             // 使用此特性时，需要在 props 中设置 value，但可以在引用此组件时，不传
          methods: {
            updateValue () {
              this.$emit('input', newVal)     // 当有值更新时，使用 emit input newVal 通知引用者，完成双向数据绑定
            }
          }
        })
      </code></pre>


    </div>

    <h4>非父子组件间的通信</h4>
    <div class="para">
      <pre><code class="javascript">
        var bus = new Vue()
        // 触发组件 A 中的事件
        bus.$emit('id-selected', 1)
        // 在组件 B 创建的钩子中监听事件
        bus.$on('id-selected', function (id) {
        })
      </code></pre>
    </div>

    <h2 class="warning">更多的</h2>
    <h4>slot 内容分发（插槽）</h4>
    <div class="para">
      实现下面的例子，混合父组件的内容与子组件的模板。
      <pre><code class="javascript">
        // * slot 必须至少存在一个，否则父组件内容将会被丢弃。
        &lt;div class="comp-a">
          订单列表
          &lt;slot>订单为空&lt;/slot>
        &lt;/div>

        &lt;com-a>
          &lt;ul>&lt;li>....&lt;/li>&lt;/ul>
        &lt;/com-a>
      </code></pre>
      <b>slot插槽可以定义特殊属性 name，来分发内容，如：</b>
      <pre><code class="javascript">
        &lt;div class="com-b">
          订单列表
          已付款
          &lt;slot name="hasPay">&lt;/slot>
          过期订单
          &lt;slot name="expires">&lt;/slot>
        &lt;/div>

        &lt;com-b>
          &lt;ul slot="hasPay">li...&lt;/ul>
          &lt;ul slot="expires">li...&lt;/ul>
        &lt;/com-b>
      </code></pre>
    </div>

    <h4>动态组件，keep-alive，异步组件，递归/循环组件</h4>
    <div class="para">
      <ul>
        <li><b>动态组件：</b>使用 is 决定组件类型。</li>
        <li><b>keep-alive：</b>组件缓存。</li>
        <li><b>异步组件：</b>从服务器上获取组件内容，下载并渲染。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import comA from './example/comA.vue'
  import comB from './example/comB.vue'

  export default {
    components: {
      comA, comB
    },
    data () {
      return {
        n: 1
      }
    },
    methods: {
      doIncrement () {
        this.n += 1
      }
    },
    watch: {
      'n': function (nV, oldV) {
      }
    },
    beforeCreate () {
    },
    created () {
    },
    beforeMount () {
    },
    mounted () {
    }
  }
</script>
