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

  </div>
</template>
