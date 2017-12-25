<template>
  <div class="vux2x-document">
    <h1>Vue</h1>
    <div class="para">
      <p class="title">日期</p>
      <ul>
        <li> 2017-11-22 ~ 2017-12-03 </li>
      </ul>
      <p class="title">内容</p>
      <ul>
        <li>Vue 基础知识、操作、安装、生产；</li>
        <li>常见属性及方法、适用范围；</li>
        <li>Vue 组件、路由、Vuex状态管理、网络请求工具集成；</li>
      </ul>
      <p class="title">资源</p>
      <ul>
        <li><a href="https://cn.vuejs.org" target="_blank">Vue Org</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">Awesome Vue</a></li>
      </ul>
    </div>
    <h2>
      <router-link to="install">安装</router-link>
    </h2>
    <h2>
      <router-link to="basic">基础</router-link>
    </h2>
    <h2>
      <router-link to="advanced">进阶</router-link>
    </h2>
    <h2>
      <router-link to="component">组件</router-link>
    </h2>
    <h2>
      <router-link to="router">路由</router-link>
    </h2>
    <h2>
      <router-link to="http">网络请求</router-link>
    </h2>
    <h2>
      <router-link to="vuex">Vuex状态管理器</router-link>
    </h2>
    <h2>
      <router-link to="more">更多</router-link>
    </h2>

    <div class="para">
      <ul>
        <li><a href="http://element-cn.eleme.io/#/zh-CN" target="_blank">Element UI</a></li>
        <li><a href="http://mint-ui.github.io/#!/zh-cn" target="_blank">mint-ui</a></li>
        <li><a href="https://vux.li/#/" target="_blank">Vux.li</a></li>
        <li><a href="https://github.com/kazupon/vue-i18n" target="_blank">Vue-i18n</a></li>
        <li><a href="https://weex.incubator.apache.org/cn/" target="_blank">Weex</a></li>
        <!--<li><a href="" target="_blank"></a></li>-->
        <!--<li><a href="" target="_blank"></a></li>-->
        <!--<li><a href="" target="_blank"></a></li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import router from './router.vue'

  export default {
    components: {
      router
    },
    name: 'testHttp',
    data () {
      return {
        obj: {
        },
        info: ''
      }
    },
    mounted () {
      console.log(window.pi = this)
      window.setInterval(() => {
        this.info = (new Date()).toLocaleTimeString()
//        this.$set(this.obj, 'info', 'aji')
      }, 3000)
    },
    updated () {
      console.log('has updated')
    }
  }
</script>

<style>
  h1 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
