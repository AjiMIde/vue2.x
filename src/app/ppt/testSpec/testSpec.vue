<template>
  <div class="vux2x-document">
    <h1>Web/JavaScript 测试</h1>
    <div class="para">
      <h4>日期</h4>
      <div class="para">
        <li> 2017-12-10 ~ 2018-01-03</li>
        <li> 2017-01-12</li>
        <li><b>前端部：Garvey, LiFei, Aji</b></li>
      </div>

      <h4>内容</h4>
      <div class="para">
        <li>基础概念分解、入门、测试概念讲解;</li>
        <li>Jasmine/Mocha/Chai/Karma 等框架的入门与使用</li>
        <li>Vue 结合 karma-webpack/mocha 进行单元测试</li>
        <li>分析前端自动化测试脚本的优劣、适用范围</li>
        <li>分析项目结构，判断使用哪种测试方式</li>
        <li>当前技术研讨过程、踩过的坑、注意事项、心得</li>
      </div>

      <h4>资源</h4>
      <div class="para">
        <li><a href="https://jasmine.github.io/2.0/introduction.html" target="_blank">Jasmine</a></li>
        <li><a href="https://mochajs.org/" target="_blank">Mocha</a></li>
        <li><a href="http://chaijs.com/" target="_blank">Chai</a></li>
        <li><a href="https://karma-runner.github.io/2.0/index.html" target="_blank">Karma 2.0</a></li>
      </div>
    </div>

    <h2>
      <router-link to="basic-concept">Basic Concept</router-link>
    </h2>
    <h2>
      <router-link to="jasmine">Jasmine</router-link>
    </h2>
    <h2>
      <router-link to="mocha">mocha</router-link>
    </h2>
    <h2>
      <router-link to="karma">karma</router-link>
    </h2>
    <h2>
      <router-link to="karma-vue">karma-vue结合业务实例</router-link>
    </h2>
    <h2>
      <router-link to="unit-test-demo">vue-unit-test实例</router-link>
    </h2>
    <h2 class="tip">
      <router-link to="notice-point">注意事项</router-link>
    </h2>
    <h2 class="tip">
      <router-link to="summary">总结经验</router-link>
    </h2>
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
