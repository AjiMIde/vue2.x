<template>
  <div class="vux2x-document">
    <h2>Karma</h2>

    <h4>Intro</h4>
    <div class="para">
      <ul>
        <li>使测试驱动开发简单、快速</li>
        <li><code>模拟在真实的浏览器上测试</code>。甚至不同的环境、os等</li>
        <li>集成工作流，避免了在：编辑器--浏览器--页面间来回切换（效率低下）的流程。一个命令进行控制</li>
        <li>集成到 IDE 里面(WebStorm)</li>
        <li>自动化完成单元测试</li>
        <li>提升测试效率，能在多个环境(桌面、手机、平板)下执行测试代码.</li>
        <li>基于 Node.js 的 JavaScript 测试执行过程管理工具</li>
        <li><code>karma 不是一个测试框架，也没有断言库，只是运行了一个 http 服务</code>，并生成一个测试入口 HTML 文件 Test Runner</li>
        <li>它需要和其他库一起结合使用： Jasmine/Mocha/QUnit </li>
        <li>默认与 Jasmine 一起使用</li>

      </ul>
    </div>

    <h4>Install</h4>
    <div class="para">
      <ul>
        <li><b> Node 安装</b></li>
        <pre><code class="shell">
          npm i karma --save-dev
          npm i karma -g
          npm i karma-cli -ga
          npm i karma-jasmine karma-chrome-launcher --save-dev
        </code></pre>
      </ul>
    </div>

    <h4>Usage</h4>
    <div class="para">
      <pre><code class="shell">
        karma init  初使化配置文件
        karma start  启动(默认启动 karma.conf.js)
        karma start  [name].conf.js 启动某一个 karma 配置文件
        karma start --help 查看帮助
        karma
      </code></pre>
    </div>

    <h4>karma 配置</h4>
    <div class="para">
      <pre><code class="javascript">
          // Karma configuration
          module.exports = function(config) {
            config.set({
              // frameworks:     frameworks to use: available frameworks: https://npmjs.org/browse/keyword/karma-adapter
              // reporters:      test results reporter to use
              //                 possible values: 'dots', 'progress'(default): available reporters: https://npmjs.org/browse/keyword/karma-reporter
              // logLevel:       level of logging: possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
              frameworks: ['jasmine'],
              reporters: ['kjhtml'],
              logLevel: config.LOG_INFO,

              // basePath:    base path that will be used to resolve all patterns (eg. files, exclude)
              // files:       list of files / patterns to load in the browser
              // exclude:     list of files to exclude
              basePath: '../JasmineTest/JasmineTest-3/',
              files: [ 'src/**/*.js', 'spec/**/*.js'],
              exclude: [],

              // port:          web server port
              // colors:        enable / disable colors in the output (reporters and logs)
              // autoWatch      enable / disable watching file and executing tests whenever any file changes
              // browsers:      start these browsers, available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
              port: 9876,
              colors: true,
              autoWatch: true,
              browsers: ['Chrome'],

              // preprocess matching files before serving them to the browser
              // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
              preprocessors: {
              },

              // Continuous Integration mode
              // if true, Karma captures browsers, runs the tests and exits
              singleRun: false,

              // Concurrency level
              // how many browser should be started simultaneous
              concurrency: Infinity
            })
          }

      </code></pre>
    </div>

    <h4>karma 配置 Mocha/Jasmine</h4>
    <div class="para">
      <pre><code class="javascript">
          ## karma

          #### karma with Jasmine/html
          * 直接运行 init 命令，选择 karma 框架，因为 karma 默认就是以 jasmine 为框架的

          #### Karma with Jasmine/Node
          * Karma 在配置  jasmine node 环境时，需要注意到以下几点：<br>
          * Karma 是无法运行 node 测试的，需要安装预处理器 <br>
          * https://stackoverflow.com/questions/19117092/jasmine-tests-in-karma-uncaught-referenceerror-require-is-not-defined
          ```shell
          npm install --save-dev karma-browserify browserify watchify
          ```
          * 在配置文件里面配置如下：

          module.exports = function (config) {
            config.set({
              frameworks: ['jasmine', 'browserify'],
              preprocessors: {
                'src/**/*.js': ['browserify'],
                'spec/**/*.js': ['browserify']
              }
            })
          }

          #### Karma with mocha/html
          * Karma 配置 mocha 只需要在 init karma.conf.js 时选择 mocha framework 即可
          * 要注意的是安装：karma-mocha
          ```shell
          npm install karma-mocha mocha --save-dev
          ```

          #### karma with mocha/node
          * 参考 "karma with mocha/html 再参考 karma with jasmine/node"
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
        <li>点击 <code>+ 号</code>，选择 karma，新建一套 configuration</li>
        <li>指定 <code>Name</code>, <code>Extra Mocha options</code>, <code>Test directory</code>, <code>Working directory</code>, 等重要参数</li>
        <li><code>Node interpreter</code>, <code>Node options</code>, <code>Environment variables</code>, <code>Mocha package</code>, <code>User interface</code> 等其他参数看需求添加修改</li>
        <li>保存 configuration，并运行即可</li>
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
