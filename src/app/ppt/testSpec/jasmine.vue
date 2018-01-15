<template>
  <div class="vux2x-document">
    <h2>jasmine</h2>

    <h4>Intro</h4>
    <div class="para">
      <ul>
        <li>Jasmine是面向行为驱动开发<code>(BDD Behavior Driven Development)</code>的JavaScript单元测试框架。</li>
        <li>与<code>TDD</code>测试驱动开发不同，它更趋向于需求。</li>
        <li>不依赖其他框架，可运行在浏览器与 <code>node.js </code>环境</li>
        <li>目前版本2.8.0 </li>
        <li>官网：<a href="https://github.com/jasmine/jasmine">https://github.com/jasmine/jasmine</a></li>
        <li>文档：<a href="https://jasmine.github.io/">https://jasmine.github.io/</a></li>
      </ul>
    </div>

    <h4>Install</h4>
    <div class="para">
      <ul>
        <li><b>本地安装</b></li>
        <li><a href="https://github.com/jasmine/jasmine/releases">https://github.com/jasmine/jasmine/releases</a></li>
        <li>当前包内包含了所有 jasmine 的库文件，以及一个小型的例子</li>
        <li></li>
        <li><b> Node 安装</b></li>
        <pre><code class="shell">
         npm i jasmine --save-dev
         npm i jasmine -g
        </code></pre>
      </ul>
    </div>

    <h4>Usage</h4>
    <div class="para">
      <pre><code class="shell">
        jasmine init             ## 初使化项目（并生成一个 json conf 文件）
        jasmine examples         ## 初使化项目（生成 json conf，并生成 example文件）

        jasmine                  ## 运行 jasmine 测试，自动运行该目录下 spec 目录下的测试文件
        jasmine spec/appSpec.js  ## 运行某个 测试
      </code></pre>
    </div>

    <h4>suites套件、case 用例、expect 断言</h4>
    <div class="para">
      <blockquote>
        查看例子 JasmineTest-3
      </blockquote>
      <pre><code class="javascript">
        // 测试套件 suites
        describe("A describe: ", function() {
          // 测试用例
          it("The string must be 'string': ", function() {
            // 这就是一个断言
            var str = 'Hello'
            expect(str).toEqual('Hello'); // 只返回 true/false

            /*
            expect(a).toBe(true)
            expect(b).not.toBe(true)
            expect(c).toEqual('???')  // 可以是对象，数组，等
            expect(d).toMatch(/bar/)  // 正则匹配
            ... 判断对象、大小、正则、类型
             */
          });
        })

      </code></pre>
    </div>

    <h4>Disabled & Pending 挂起一个测试套件/用例</h4>
    <div class="para">
      <blockquote>
        查看 JasmineTest-3
      </blockquote>
      <pre><code class="javascript">
        // 使用 xit/xdescribe 挂起一个 套件 或 用例
        xit('case', function () {
          expect(a).toBe(true)
        })

        // 使用 pending 挂起
        it("case", function() {
          expect(a).toBe(true)
          pending('I am pending');    // 该函数会将此用例佳起
        });
      </code></pre>
    </div>

    <h4>使用 Spy 特性监听函数调用痕迹</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li> 通过使用两个特殊的 Matcher: toHaveBeenCalled/toHaveBeenCalledWith 来监测 function, params被调用过的痕迹<br> </li>
          <li> 链式调用：and.callThrough/and.stub 真实调用及回归最终状态 </li>
          <li> 查看 JasmineTest-3 </li>
        </ul>
      </blockquote>
      <pre><code class="javascript">
          describe("FzsDate Suite : Spy 监测任何 function 的调用和方法参数的调用痕迹", function() {
            var fzsOrder
            var orderA = {a: 'a'}
            var orderB = {b: 'b'}

            beforeEach(function() {
              fzsOrder = new FzsOrder();
              spyOn(fzsOrder, 'goBackIndex')
              spyOn(fzsOrder, 'cancelOneOrder')
            });

            it("当取消订单时，页面将回到首页, goBackIndex 将会被调用到，使用 toHaveBeenCalled ", function() {
              fzsOrder.cancel()
              expect(fzsOrder.goBackIndex).toHaveBeenCalled()
            });

            it("当取消一个特定订单时，该订单将会被调用到,  orderA 将会被作用参数使用到，使用 toHaveBeenCalledWith ", function() {
              fzsOrder.cancelOneOrder(orderA)
              expect(fzsOrder.cancelOneOrder).toHaveBeenCalledWith(orderA)
            });
          });

      </code></pre>
    </div>

    <h4>使用 jasmine 全局谓词做相关类型的匹配</h4>
    <div class="para">
      <blockquote>
        查看 JasmineTest-3
      </blockquote>
      <pre><code class="javascript">
            it("jasmine.any : 获取到的订单须定为数组", function() {
              expect(orderList).toEqual(jasmine.any(Array))
            });

            it("jasmine.objectContaining : 获取到的订单，必须包含 key-word: success: true", function() {
              expect(result).toEqual(jasmine.objectContaining({
                success: true
              }))
            });
          })
      </code></pre>
    </div>

    <h4 class="tip"> Asynchronous Support 异步支持 </h4>
    <div class="para">
      <blockquote>
        <ul>
          <li> 可以在 `beforeEach`,`it`,`afterEach` 添加可选参数 `done` 来表示异步操作的调用成功 </li>
          <li> 查看 JasmineTest-3 </li>
        </ul>
      </blockquote>
      <pre><code class="javascript">
          describe("FzsOrderAsyn 异步测试套件：done ()", function() {
            var fzsOrder
            var result

            beforeEach(function(done) {
              fzsOrder = new FzsOrder();
              fzsOrder.asynHttpResult(function (res) {
                result = res
                done()
              })
            });

            it("使用 done() 通知用例已经完成异步数据的获取，现在观察 result.success 应为 true", function() {
              expect(result.success).toEqual(true)
            });
            it("使用 done() 通知用例已经完成异步数据的获取，现在观察 result.data 长度须大于0", function() {
              console.log(result.data.length)
              expect(result.data.length).toBeGreaterThan(0)
            });
          });
      </code></pre>

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
