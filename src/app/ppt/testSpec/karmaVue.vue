<template>
  <div class="vux2x-document">
    <h2>Karma-Vue结合实例</h2>

    <h4>Intro</h4>
    <div class="para">
      <pre><code class="javascript">
        test
            --e2e nightwatch 端到端测试
            --unit 单元测试
              --spec 测试文件所在
              --common 公共文件入口（initApp/dispatchEvent）
              --.eslintrc
              --index.js Vue配置 webpack + vue-loader + karma + mocha
              --karma.conf.js
      </code></pre>
    </div>

    <h4>Karma.conf.js</h4>
    <div class="para">
        <pre><code class="javascript">
          //   http://karma-runner.github.io/0.13/config/configuration-file.html
          //   https://github.com/webpack/karma-webpack
          //    http://karma-runner.github.io/0.13/config/browsers.html
          var webpackConfig = require('../../build/webpack.test.conf')

          module.exports = function (config) {
            config.set({
              browsers: ['PhantomJS'],
              frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
              reporters: ['spec', 'coverage'],
              files: ['./index.js'],
              exclude: ['../../src/assets/highlight.pack.js'],
              preprocessors: {
                './index.js': ['webpack', 'sourcemap']
              },
              webpack: webpackConfig,
              webpackMiddleware: {
                noInfo: true
              },
              coverageReporter: {
                dir: './coverage',
                reporters: [
                  { type: 'lcov', subdir: '.' },
                  { type: 'text-summary' }
                ]
              }
            })
          }
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
