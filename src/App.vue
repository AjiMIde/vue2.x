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
      },
      setH4Click () {
        let dh = document.getElementsByTagName('h4')
        let setClickEvent = function (item) {
          item.onclick = function () {
            var dis = item.nextElementSibling.style.display
            if (dis === 'none') {
              item.nextElementSibling.style.display = 'block'
              item.classList.remove('para-plus')
              item.classList.add('para-minus')
              // console.log(window.aji = item.nextElementSibling)
            } else {
              item.nextElementSibling.style.display = 'none'
              item.classList.add('para-plus')
              item.classList.remove('para-minus')
            }
          }
          let iWantItNow = false
          if (iWantItNow) {
            item.nextElementSibling.style.display = 'none'
            item.classList.add('para-plus')
            item.classList.remove('para-minus')
          } else {
            item.nextElementSibling.style.display = 'block'
            item.classList.add('para-minus')
            item.classList.remove('para-plus')
          }
        }

        for (let i = 0; i < dh.length; i++) {
          setClickEvent(dh[i])
        }
      }
    },
    watch: {
      '$route': (a, b, c) => {
        window.scrollTo(0, 0)
        window.setTimeout(() => {
          if (window.hljs) {
            let pres = window.document.getElementsByTagName('pre')
            for (let pre of pres) {
              window.hljs.highlightBlock(pre)
            }
          }
          // this.a.methods.setH4Click()
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
