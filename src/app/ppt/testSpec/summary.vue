<template>
  <div class="vux2x-document">
    <h2>总结</h2>

    <h4>学习过程</h4>
    <div class="para">
      <ul>
        <li>坑多</li>
        <li>百度，例子过于简单，幸好有 google/github/stackoverflow</li>
        <li>吃螃蟹，扎手</li>
        <li>前期迷茫，形成概念期，后积薄发</li>
        <li>前期无用论，后期发现闪光点</li>
        <li>书读三遍，其意自现</li>
        <li>总想一口吃成一个大胖子</li>
      </ul>
    </div>

    <h4>适用范围与宏观开发</h4>
    <div class="para">
      <ul>
        <li>随着业务的不断增加，大可能需要对测试代码维护、初使化、上下文也会增加</li>
        <li>多种依赖会使依赖前置条件增多，如缓存、url参数注入，路由注入</li>
        <li>非常适合组件类开发的测试，如 公众号收银：keyboard/wechatInfo</li>
        <li>业务上，有些操作需要大量获取 Element 进行测试，代码量较大</li>
        <li>涉及到页面的跳转，非常难控制。</li>
        <li>单元测试，单元！决定了将模块拆分及接口测试</li>
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
