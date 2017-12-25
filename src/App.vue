<template>
  <div id="app">
    <router-view></router-view>
    <div class="circle-dot" @click="back()"></div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    mounted () {
      console.log(window.app = this)
      window.setTimeout(() => {
//      $0.nextSibling.nextSibling.style.display = 'none'
      }, 1000)
    },
    methods: {
      back () {
        this.$router.back()
      }
    },
    watch: {
      '$route': (a, b, c) => {
        window.setTimeout(() => {
          if (window.hljs) {
            let pres = window.document.getElementsByTagName('pre')
            for (let pre of pres) {
              window.hljs.highlightBlock(pre)
            }
          }
        }, 500)
      }
    }
  }
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~normalize.css/normalize.css';
  @import "./assets/common/Key-Reset.less";
  @import "./assets/common/Key-More.less";
  @import "./assets/app/index.less";
</style>
