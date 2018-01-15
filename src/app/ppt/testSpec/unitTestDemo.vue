<template>
  <div class="vux2x-document">
    <h2>unit-test实例</h2>
    <h4>配置和工具</h4>
    <div class="para">
      <ul>
        <li>任何兼容基于模块的构建系统都可以正常使用，但如果你需要一个具体的建议，可以使用<code>Karma</code>进行自动化测试</li>
        <li><code>vue-devtools</code>初期辅助神器</li>
      </ul>
    </div>
    <h4>断言</h4>
    <div class="para">
      <ul>
        <li><b>常见的断言方法</b> -> <a href="http://chaijs.com/">chaijs断言库</a></li>
        <pre>
          <code class="shell">
            expect(foo).to.be.a('string') // typeOf
            expect(foo).to.equal('bar') // 俩边相等
            expect(foo).to.have.lengthOf(3) // foo = [1, 2, 3]
            expect(tea).to.have.property('foo').with.lengthOf(3) // tea = { foo = [1, 2, 3] }
          </code>
        </pre>
      </ul>
    </div>
    <!--  -->
    <h4>实例-栗子</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li> 查看例子 1 + 1</li>
          <li>source code --- Product.spec.js</li>
        </ul>
      </blockquote>
      <pre>
        <code class="javascript">
          describe('test', () => {
            it('1+1', () => {
              equal(1+1, 2) // expect(param1).to.equal(param2)
            })
          })
        </code>
      </pre>
    </div>
    <!--  -->
    <h4>实例-梨子</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>查看例子 数组排序</li>
          <li>source code --- Test.spec.js</li>
        </ul>
      </blockquote>
      <pre>
        <code class="javascript">
          html

          arrMethods (arr) {
            let obj = {}
            let newArr = []
            for (let i = 0; i < arr.length; i++) {
              let idx = arr[i]
              if (!obj[idx]) {
                obj[idx] = []
                obj[idx].push(idx)
                newArr.push(idx)
              }
            }
            return newArr.sort()
          }
          -----------------------------------------
          test

          it('arrSort', () => {
            let arr = [1, 5, 2, 4, 5, 3, 7, 5, 7, 6]
            let equalArr = [ 1, 2, 3, 4, 5, 6, 7]
            let newArr = test.arrMethods(arr)
            equal(newArr[2], equalArr[2])
          })
        </code>
      </pre>
    </div>
    <!--  -->
    <h4>实例-实例1</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>查看例子 常见的Vue组件测试1（import 挂载）</li>
          <li>source code --- Test.spec.js</li>
        </ul>
      </blockquote>
      <pre>
        <code class="javascript">
          import Vue from 'vue'
          import Test from '../../../src/components/test/phone'

          describe('test组件状态', () => {
            const Constructor = Vue.extend(Test) // 创建构造器
            let test = new Constructor({}).$mount() // 创建实例并挂载
            console.log(test)
          }
        </code>
      </pre>
    </div>
    <!--  -->
    <h4>实例-实例2</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>查看例子 常见的Vue组件测试2（propsData）</li>
          <li>source code --- Toast.spec.js</li>
        </ul>
      </blockquote>
      <pre>
        <code class="javascript">
          import Vue from 'vue'
          import Toast from '../../../src/components/toast/toast'

          describe('吐司组件', () => {
            let _this = initApp(Toast, {
              toastState: {
                state: true,
                text: '。。。'
              }
            })
            console.log(_this.toastState) // { state: true, text: '。。。' }
          }

          function initApp (component, propsData) {
            const Constructor = Vue.extend(component)
            let obj = {}
            if (propsData) {
              obj.propsData = propsData
            }
            let vm = new Constructor(obj).$mount()
            return vm
          }
        </code>
      </pre>
    </div>
    <!-- 实例3 -->
    <h4>实例-实例3</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>查看例子 常见的Vue组件测试3（nextTick）</li>
          <li>source code --- Test.spec.js</li>
        </ul>
      </blockquote>
      <pre>
        <code class="javascript">
          import Vue from 'vue'
          import Test from '../../../src/components/test/phone'
          import { querySelectors,equal } from '../common/common'

          describe('test组件状态', () => {
            const Constructor = Vue.extend(Test) // 创建构造器
            let test = new Constructor({}).$mount() // 创建实例并挂载
            console.log(test)
            it('axios', async () => {
              await test.getAd()
              Vue.nextTick(() => { // 也可以使用test.$nextTick()
                let dom = querySelectors(test, 'phone-changeText')[0]
                // (test.$el).getElementsByClassName('phone-changeText')
                equal(dom.innerHTML, 'change...')
              })
            })
          }
        </code>
      </pre>
    </div>
    <!-- 实例4 -->
    <h4>实例-实例4</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>查看例子 常见的Vue组件测试4（Async）</li>
          <li>source code --- Ad.spec.js</li>
          <li>Mocha中的异步测试, 需要给it()内函数的参数中添加一个done, 并在异步执行完后必须调用done(), 如果不调用done(), 那么Mocha会在2000ms后报错且本次单元测试测试失败(mocha默认的异步测试超时上线为2000ms)</li>
        </ul>
      </blockquote>
      <pre>
        <code class="javascript">
          import AD from '../../../src/components/AdComponent/ad'
          import * as common from '../common/common'

          describe('AD广告组件状态', () => {
            let ad = common.initApp(AD) // 公共初始化方法
            ad.getAd()
            it('axios请求', function (done) {
              this.timeout(0)
              setTimeout(() => {
                done()
              }, 3000)
            })
          }

          ========================================================
          /* it('axios1', function (done) {
            this.timeout(0)
            test.anyscMethod()
            setTimeout(() => {
              done()
            }, 1500)
          }) */

          it('axios1', async () => {
            test.anyscMethod()
            await console.log('....async function')
          })
        </code>
      </pre>
    </div>
    <!-- 实例5 -->
    <h4>实例-实例5</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>查看例子 常见的Vue组件测试5（为Vue组组件测试提供上下文环境）</li>
          <li>source code --- Ad.spec.js</li>
        </ul>
      </blockquote>
      <pre>
        <code class="javascript">
          import Product from '../../../src/components/productComponent/product'
          import * as common from '../common/common'
          import datas from '../common/datas'
          import {equal} from '../common/common'

          describe('product组件', () => {
            let _this = common.initApp(Product, {
              'navInfo': datas.navInfo,
              'tagsInfo': datas.tagsInfo,
              'phones': datas.phones,
              'products': datas.sendToProducts
            })
            console.log(_this)
            // _this.
          }
        </code>
      </pre>
    </div>
    <!-- 实例6 -->
    <h4>实例-实例6</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>查看例子 常见的Vue组件测试6（计算属性、watch）</li>
          <li>source code --- Ad.spec.js</li>
        </ul>
      </blockquote>
      <pre>
        <code class="javascript">
         【computed】

          it('axios', async () => {
            await test.getAd()
            Vue.nextTick(() => {
              let dom = querySelectors(test, 'phone-changeText')[0]
              equal(dom.innerHTML, 'change...')
              equal(test.calcString, 'change...') // computed 计算属性 直接调用
            })
          })

          -------------------------------------------------------------------
         【watch】

          it('axios', async () => {
            await test.getAd()
            Vue.nextTick(() => {
              let dom = querySelectors(test, 'phone-changeText')[0]
              equal(dom.innerHTML, 'change...')
              equal(test.calcString, 'change...') // computed
              equal(test.stringWatch, 'watch...') // watch
            })
          })
        </code>
      </pre>
    </div>
    <!--  -->
    <h4>使用工具</h4>
    <div class="para">
      <ul>
        <li><code>vue-devtools</code>的使用</li>
        <li>浏览器<code>9876捕获 和 Debug</code></li>
        <li><code>coverage</code></li>
      </ul>
    </div>
    <!-- -->
    <h4>参考资料</h4>
    <div class="para">
      <ul>
        <li v-for="item in urlList">
          {{item.name}}  <a :href="item.url" target="_blank">{{item.url}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        urlList: [{
          name: 'vue单元测试官方实例',
          url: 'https://cn.vuejs.org/v2/guide/unit-testing.html'
        }, {
          name: 'vue-test-utils',
          url: 'https://vue-test-utils.vuejs.org/zh-cn/'
        }, {
          name: 'vue-test-demo',
          url: 'https://alexjoverm.github.io/series/Unit-Testing-Vue-js-Components-with-the-Official-Vue-Testing-Tools-and-Jest/'
        }, {
          name: 'mochajs',
          url: 'https://mochajs.org/'
        }, {
          name: 'karma',
          url: 'https://karma-runner.github.io/2.0/index.html'
        }, {
          name: 'chaijs',
          url: 'http://chaijs.com/'
        }, {
          name: 'jasmine',
          url: 'https://jasmine.github.io/2.0/introduction.html'
        }]
      }
    }
  }
</script>

<style>

</style>
