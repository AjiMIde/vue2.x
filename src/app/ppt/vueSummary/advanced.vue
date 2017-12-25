<template>
  <div class="vux2x-document vue-advanced">

    <h2>进阶</h2>

    <h4>额外的实例属性及方法</h4>
    <div class="para">
      Vue 实例暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来
      <ul>
        <h4>属性</h4>
        <li><code>vm.$data</code>数据，在实例中，data 选项中的属性会暴露给实例本身，如 <code>vm.$data.order === vm.order</code></li>
        <li><code>vm.$props</code>组件接收到的 pros 对象，同样属性也暴露给实例本身</li>
        <li><code>vm.$el</code>根 Dom 元素</li>
        <li><code>vm.$options</code>初使化时的选项</li>
        <li><code>vm.$parent/vm.$root/vm.$children</code>初使化时的选项</li>
        <li><code>vm.$slots</code>插槽发分内容，注意它是一个数组，当 slot 指定了 name 之后,可使用 vm.$slots.name 获取 slot </li>
        <li><b><code>vm.$refs</code></b>注册过 ref 的子组件，注意，$refs 只有当组件完成渲染之后才填充，应用遵循 vue 的数据驱动原则开发，避免使用 $refs</li>
        <pre><code class="html">
          &lt;div>
            &lt;fzs-input ref='fzsInput'>&lt;/fzs-input>
          &lt;/div>
        </code></pre>
        <pre><code class="javascript">
          this.$refs.fzsInput
        </code></pre>

        <h4>实例方法/数据</h4>
        <li><code><b>vm.$set/Vue.set</b></code>设置值，通常来讲，响应式的对象需要在初使化时就定义。通过普通的添加对象的属性是无法响应的。但通过 set 可完成预期期望：</li>
        <pre><code class="javascript">
          app = new Vue({
            data: {
              count: 1
            }
          })
          app.list = []                 // 无法响应化
          app.$set(data, 'list', [])    // 可以响应化
        </code></pre>

        <h4>实例方法/事件</h4>
        <li><code><b>vm.$emit</b></code>常在组件中使用，用来传给监听器回调事件 </li>

        <h4>实例方法/生命周期</h4>
        <li><code>vm.$nextTick</code>将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它
          <router-link to="more">点击查看'更多'中的例子</router-link>
        </li>
      </ul>
    </div>

    <h4>mixins 混合</h4>
    <div class="para">
      可以将一部分重用的、组件合成的模块独立化，重复使用的灵活方式，可包含任意组件选项。
      <ul>
        <li>混合时，同名选项将会合并，混合对象的钩子优先调用。<code>created/mounted/update</code></li>
        <li>混合时，值选项冲突时，优先取组件的键值对。<code>methods/computed</code></li>
        <li>全局混合，使用 <code>Vue.mixin() </code>进行混合，影响到每个被创建的 Vue 实例。</li>
        <li>参考<b>影视会员模板1.0</b></li>
      </ul>
      <pre><code class="javascript">
        // 定义一个混合对象
        var myMixin = {
          created: function () {
            this.hello()
          },
          methods: {
            hello () {}
          }
        }
        export default {
          mixins: [myMixin],
          mounted () {}
        }

      </code></pre>
    </div>

    <h4 class="tip">过滤器</h4>
    <div class="para">
      定义过滤器，完成一些常见的文本格式化。用于花括号插值、<code>v-bind</code>表达式
      <ul>
        <li>过滤器仅做文本的格式化，请不要用作其他操作，如watcher，计算等</li>
        <li>过滤器可串联使用 <code>{{msg | filterA | filterB <span>}}</span></code></li>
        <li>过滤器可接收参数 <code>{{msg | filterA(arg1, arg2.
        ..) <span>}}</span></code></li>
        <li>参考：<b>pos机1.0 minxins混合使用 filters</b></li>
        <li>参考：<b>pos机1.0 Vue.filter 全局定义 filters</b></li>
      </ul>
      <pre><code class="html">
        &lt;div>{{msg | reverse<span>}}</span> &lt;div>
      </code></pre>
      <pre><code class="javascript">
        // 组件局部过滤器：
        vue = {
          filters: {
            reverse (val) {
              return val.split('').reverse().join('')
            }
          }
        }
        // 全局定义过滤器
        Vue.filter('reverse', (val) => {
          // return (do with val...)
        })
      </code></pre>
    </div>

    <h4>插件</h4>
    <div class="para">
      <ul>
        <li><a href="https://cn.vuejs.org/" target="_blank">Vue 官网</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">Awesome Vue</a></li>
      </ul>
      <pre><code class="javascript">
        export default {
          install (Vue) {
            Vue.prototype.hello = function () {
              window.alert('hello world')
            }
          }
        }
        import plugin from './libs/plugin'
        Vue.use(plugin)
      </code></pre>
    </div>

    <h4>列表过渡</h4>
    <div class="para">
      实际上，这个单元就是在讲一些切换、显示、隐藏元素时所设计的一些过滤效果。此类效果只提高页面的体验性（当然是很有用的）
      直接看例子
      <pre><code class="html">
       &lt;transition name="fade">
         &lt;div v-if="show" class="list">
         &lt;/div>
       &lt;/transition>
      </code></pre>
      <pre><code class="css">
        .fade-enter, .fade-leave-to {
          background-color: yellow;
        }
        .fade-leave-active, .fade-enter-active {
          transition: all 3s;
        }
      </code></pre>

      <div class="example">
        <div id="demo">
          <button v-on:click="show = !show">
            Toggle
          </button>
          <transition name="fade">
            <div v-if="show" class="list">
              <ul>
                <li>HTML</li>
                <li>JS</li>
                <li>CSS</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <h4>Css 动画</h4>
    <div class="para">
      Css动画
      <pre><code class="css">
          bounce-enter-active {
            animation: bounce-in .5s;
          }
          .bounce-leave-active {
            animation: bounce-in .5s reverse;
          }
          @keyframes bounce-in {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1.5);
            }
            100% {
              transform: scale(1);
            }
          }
      </code></pre>
    </div>
    <div class="example">
      <div id="example-2">
        <button @click="show = !show">Toggle show</button>
        <transition name="bounce">
          <div v-if="show" class="list">
            <ul>
              <li>HTML</li>
              <li>JS</li>
              <li>CSS</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="example">
      <div id="example-3">
        <button @click="show = !show">Toggle show</button>
        <transition name="aji">
          <div v-if="show" class="list">
            <ul>
              <li>HTML</li>
              <li>JS</li>
              <li>CSS</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <br>
    <br>
    <br>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    },
    mounted () {
      console.log(window.m = this)
    }
  }

</script>

<style lang="less">

  .vue-advanced {
    .list {
      height: auto;
      background-color: #fff;
      box-shadow: 0px 2px 7px 1px #d7d7d7;
    }
  }

  .fade-enter, .fade-leave-to {
    height: 0;
    /*overflow: hidden !important;*/
    background-color: yellow !important;
    color: red;
    font-size: 18px;
    transform: scale3d(.1, .1, .1);
    transform-origin: top right;
  }

  .fade-leave-active, .fade-enter-active {
    transition: all 3s;
  }

 .bounce-enter-active {
    animation: bounce-in 0.5s;
    overflow: hidden;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
    overflow: hidden;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .list {
    transform-origin: top;
    ul {
      transform: none !important;
      li {
        transform: none !important;
      }
    }
  }
  .aji-enter-active {
    animation: aji-in 0.2s;
    overflow: hidden;
  }
  .aji-leave-active {
    animation: aji-in 0.2s reverse;
    overflow: hidden;
  }
  @keyframes aji-in {
    0% {
      /*transform: scale3d(1, 0, 1);*/
      height: 1px;
    }
    50% {
      /*transform: scale3d(1, 0.5, 1);*/
    }
    100% {
      /*transform: scale3d(1, 1, 1);*/
      height: 66px;
    }
  }


  /*.fade-enter-to, .fade-leave-to !* .fade-leave-active in below version 2.1.8 *! {*/
  /*opacity: 0;*/
  /*color: red;*/
  /*height: 1px;*/
  //  }
</style>
