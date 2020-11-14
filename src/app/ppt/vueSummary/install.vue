<template>
  <div class="vux2x-document">

    <h2>安装</h2>
    <h4>直接引入 <span class="warning">不这么用</span></h4>
    <div class="para">
      <ul>
        <li><a href="https://cdn.jsdelivr.net/npm/vue/ ">https://cdn.jsdelivr.net/npm/vue</a></li>
      </ul>
      <b>使用（适用于单页面、业务面积小、只作一些普通特性的操作）</b>
      <pre><code class="javascript">
        // 根实例
        var app = new Vue({
          el: '#app',
          data: {
            msg: 'hello world'
          },
          methods: {
            foo() {
              this.msg = 'hello Vue'
            }
          }
        })
      </code></pre>
    </div>

    <h4>命令行工具 (CLI)</h4>
    <div class="para">
      <ul>
        <li>官方命令行工具。快速搭建大型单页应用，自带热重载、静态检查、构建生产。</li>
        <li>构建单页面组件，提供 IDE/Editor 语法高亮，CommonJs模板，html/js/css 分离体验</li>
        <li>借助 Webpack 工具，结合插件，能支持Pug(Jade)/Es6/Es5/TypeScript/Less/Sass/PostCss</li>
        <li><a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli GitHub</a></li>
        <li>基于模板 Webpack/webpack-simple/simple/browserify/browserify-simple/<b>pwa</b></li>
        <li>pwa：加载速度、离线使用、系统级API、推送功能。</li>
      </ul>
      <pre><code class="shell">
        # 全局安装 vue-cli
        npm install --global vue-cli
        vue init webpack vue-project
        # 项目名称、描述、作者、Lint工具、标准、测试工具.
        npm run dev
        npm run start
        npm run build
        npm run test
      </code></pre>
      <div>
        <img src="./assets/filestructure.png" alt="">
      </div>
    </div>

    <h4>从头构建一个基于 vue-webpack 模块的 Vue 项目</h4>
    <div class="para">
      <li>Use `vue` command to init a project</li>
      <pre><code class="shell">
        # make sure the project name, description, author, vue-router(if need), ESLint(if need), unit tests(if need), e2e test(if need), npm or yarn(if need)
        vue init webpack project-name

      </code></pre>

      <li>Config JavaScript Version</li>
      <pre><code class="shell">
        * `ctrl + shift + s` open the WebStorm setting
        * choose `Languages and Frameworks`
        * choose `JavaScript`
        * choose `JavaScript languages version` to Es6
      </code></pre>

      <li>Config jade (optional)</li>
      <pre><code class="javascript">
        yarn add jade jade-loader --dev
        // open build/webpack.base.conf.js and add the code above
        {
          test: /\.jade$/,
          loader: 'jade-loader'
        }
      </code></pre>

      <li>Config less</li>
      <pre><code class="shell">
        yarn add less less-loader --dev
      </code></pre>

      <li>Config vux (optional)</li>
      <pre><code class="javascript">
        yarn add vux vux-loader --dev

        // open build/webpack.base.conf.js
        const vuxLoader = require('vux-loader')
        const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig

        module.exports = vuxLoader.merge(webpackConfig, {
          plugins: ['vux-ui']
        })
      </code></pre>

      <li>Rest css(optional)</li>
      <pre><code class="html">
        yarn add normalize.css
        //
        // open `app.vue` and add code above
        &lt;style lang="less">
          @import '~vux/src/styles/reset.less';
          @import '~normalize.css/normalize.css';
          @import "./assets/key.less";
        &lt;/style>
      </code></pre>

      <li>Config vue-resource</li>
      <pre><code class="javascript">
        yarn add vue-resource
        //
        // open main.js and add code above
        import VueResource from 'vue-resource'
        Vue.use(VueResource)
      </code></pre>

      <li>Config vuex (optional)</li>
      <pre><code class="javascript">
        yarn add vuex
        //
        // open main.js and add code above
        import Vuex from 'vuex'
        Vue.use(Vuex)
      </code></pre>

      <h4>下面的配置是针对于 mobile 端的</h4>
      <li>Add viewport</li>
      <pre><code class="html">
        &lt;meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
      </code></pre>

      <li>Using rem</li>
      <pre><code class="javascript">
        var t = window.document.documentElement.clientWidth / 3.2;
        t = 156.25 >= t ? t : 156.25,
        document.documentElement.style.fontSize = t + "px",
        window.onresize = function() {
          var t = window.document.documentElement.clientWidth / 3.2;
          t = 156.25 >= t ? t : 156.25,
          document.documentElement.style.fontSize = t + "px"
        }
      </code></pre>

      <li>Using less</li>
      <pre><code class="css">
        @media screen and (min-width:100px) and (max-width:359px) {
        .fz12{font-size:12px}.fz14{font-size:14px}
        }
        @media screen and (min-width:360px) and (max-width:413px) {
          .fz12{font-size:12px}.fz14{font-size:14px}
        }
        @media screen and (min-width:414px) {
          .fz12{font-size:14px}.fz14{font-size:16px}
        }
        html{font-size:100px}
        #app{max-width:500px;margin:0 auto}
      </code></pre>

    </div>

  </div>
</template>
