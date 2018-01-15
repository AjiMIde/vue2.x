<template>
  <div class="vux2x-document">
    <h2>Mocha</h2>

    <h4>Intro</h4>
    <div class="para">
      <ul>
        <li>多功能 js 测试框架，多环境运行上运行（node/browser）</li>
        <li>支持异步测试(promise)</li>
        <li>输出精确的报告</li>
        <li>支持覆盖率测试</li>
        <li>高亮显示</li>
        <li>全局变量泄露检测</li>
        <li>可选的正则检测</li>
        <li> 支持使用配置文件</li>
        <li>支持使用任何断言库</li>
        <li>支持异步的单元测试</li>
        <li>官网：<a href="http://mochajs.org/">http://mochajs.org/</a></li>
        <li>阮一峰：<a href="http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html">http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html</a></li>
        <li>cnblog：<a href="https://www.cnblogs.com/Leo_wl/p/5734889.html">https://www.cnblogs.com/Leo_wl/p/5734889.html</a></li>
      </ul>
    </div>

    <h4>Install</h4>
    <div class="para">
      <ul>
        <li><b> Node 安装</b></li>
        <pre><code class="shell">
          * npm install -g mocha
          * npm install mocha --save-dev
          * npm install chai --save-dev
        </code></pre>
      </ul>
    </div>

    <h4>Usage</h4>
    <div class="para">
      <pre><code class="shell">
          #### 普通命令行
          ```shell
          * mocha a.test.js
          > 运行一个测试文件

          * mocha a.test.js b.test.js c.test.js
          > 运行多个测试

          * mocha
          > 运行这个目录下的test目录

          * mocha test/unit/*.js
          > 使用通配符拥抱更多可能性

          ```

          #### 命令行参数
          ```shell
          * mocha --recursive
          > 运行这个目录下的test下面，所有的测试文件（递归）

          * mocha --reporter/-R spec
          > 指定格式输出，spec是默认格式，此外还有：doc/nyan/list/tap 等

          * mocha --watch/-w
          > 持续监听测试

          * mocha -R doc > html.html
          > 将测试文件 生成 规格 文件，即，将测试代码生成 markdown/html 等其他可视性强的文件
          ```

          #### 初使化一个 浏览器测试实例
          ```shell
          * mocha init example-name
          ```
      </code></pre>
    </div>

    <h4>suites套件、case 用例、expect 断言(chai)</h4>
    <div class="para">
      <blockquote>
        查看例子 mocha-test-1
      </blockquote>
      <pre><code class="javascript">
          describe('test suite title', () => {

            // 测试用例 (test case)，测试的最小单位
            it('test case title', function () {

              // 断言库，这里用到的是 chai
              expect('').to.be.equal('')
            })
          })

      </code></pre>
      <pre><code class="javascript">
          it('', function () {

            expect('').to.be.equal('')

            // 不等
            expect(1 + 1).to.be.not.equal(3)

            // 深度匹配
            expect(foo).to.be.deep.equal({bar: 'baz'})

            // boolean
            expect('?').to.be.ok

            // typeof
            expect('test').to.be.a('string');
            expect({foo: 'bar'}).to.be.an('object');
            expect(foo).to.be.an.instanceof(Foo);

            // include
            expect([1, 2, 3]).to.include(2);
            expect('foobar').to.contain('foo');
            expect({foo: 'bar', hello: 'universe'}).to.include.keys('foo');

            // empty
            expect([]).to.be.empty;
            expect('').to.be.empty;
            expect({}).to.be.empty;

            // match
            expect('foobar').to.match(/^foo/)
          })
      </code></pre>
    </div>

    <h4>Only & Skip 只运行/挂起 一个测试套件/用例</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>使用 only 可快速只运行一个用例</li>
          <li>注意 only 在同一套件或同一用例中，只能使用一次</li>
          <li>Skip 可以跳过（挂起）一个用例 </li>
          <li>推荐使用 skip 暂时挂起一些用例（而非注释），并且，可以使用 this.skip 来根据一些既有条件挂起一些用例</li>
        </ul>
      </blockquote>
      <pre><code class="javascript">
        describe.only('', () => {
          it.only('', function () {
            expect('').to.be.equal('')
          })
        })
      </code></pre>
      <pre><code class="javascript">
        describe.skip('', () => {
          it.skip('', function () {
          })
          it('', function () {
            if (true) {
              // expect
            } else {
              this.skip()
            }
          })
        })
      </code></pre>
    </div>

    <h4 class="tip"> done/timeout Asynchronous Support 异步支持 </h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>使用 done() 来控制（通知）异步调用</li>
          <li>可以在 `beforeEach`,`it`,`afterEach` 添加可选参数 `done` 来表示异步操作的调用成功</li>
          <li>用例集执行超时，mocha 会对一些用例的时间进行 timeout 限制（2000ms），可以通过 this.timeout()来控制 timeout 时间（或去掉 timeout 限制）</li>
        </ul>
      </blockquote>
      <pre><code class="javascript">
        describe.only('', () => {
          it.only('', function (done) {
            var HttRequest = {}
            HttRequest.getData(function() {
              // do
              done()
            })
          })
        })
      </code></pre>
      <pre><code class="javascript">
        describe('', () => {
          it('', function (done) {
            this.timeout(5000)    // 控制在 5000ms 内
            this.timeout(0)       // 不做 timeout 限制
            var HttRequest = {}
            HttRequest.getData(function() {
              // do
              done()
            })
          })
        })
      </code></pre>

    </div>

    <h4>Use ES6</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>当测试脚本是 ES6 语法编写的话，使用 babel 转码来支持测试</li>
        </ul>
      </blockquote>
      <pre><code class="javascript">
        # 安装 babel
        npm install babel-core babel-preset-es2015 --save-dev

        # 如运行失败，尝试全局安装
        npm install babel-core babel-preset-es2015 -g

        # 在项目目录新建一个 .bablerc 配置文件，并配置：
        {
            "presets": [ "es2015" ]
        }

        # 运行（compilers 已被官方移除，请查看其他使用方法）
        mocha --compilers js:babel-core/register

        # Babel默认不会对Iterator、Generator、Promise、Map、Set等全局对象，以及一些全局对象的方法（比如Object.assign）转码。如果你想要对这些对象转码，就要安装babel-polyfill。
        # 一般会提醒错误如下： Promise undefined variable 等
        npm install babel-polyfill --save-dev

        # 在测试脚本头部加入
        import 'babel-polyfill'
      </code></pre>
    </div>

    <h4>Use Auto run in webstorm</h4>
    <div class="para">
      <blockquote>
        厌倦了在命令行重复地执行测试命令了吗？还记得 PHPStorm是怎么执行 Debug 命令的？WebStorm 一样可以，解决双手，自动化跑用例
      </blockquote>
      <b>使用 WebStorm 执行 mocha run/debug</b>
      <ul>
        <li>打开 <code>Run > Edit configurations</code> (或在 WebStorm 右上角一排工具按钮上选择)</li>
        <li>点击 <code>+ 号</code>，选择 mocha，新建一套 configuration</li>
        <li>指定 <code>Name</code>, <code>Extra Mocha options</code>, <code>Test directory</code>, <code>Working directory</code>, 等重要参数</li>
        <li><code>Node interpreter</code>, <code>Node options</code>, <code>Environment variables</code>, <code>Mocha package</code>, <code>User interface</code> 等其他参数看需求添加修改</li>
        <li>保存 configuration，并运行即可</li>
        <li><b>注意</b> 可使用 <code>Extra Mocha options</code> 等参数指定自动运行、超时时间、输入格式等，如使用 <code>'-w'</code> 则会建立监听服务器，监听文件变化并自动运行用例</li>
      </ul>
    </div>

    <h4>Advanced</h4>
    <div class="para">
      <ul>
        <li>mochawesome</li>
        <li>mocha.opts</li>
        <li>shell 命令进阶</li>
        <li>Run in browser 在浏览器上运行 mocha</li>
      </ul>
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
