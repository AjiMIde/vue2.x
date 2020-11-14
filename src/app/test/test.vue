<template>
  <div class="test vux2x-document">
    <div id="content" v-html='content'></div>
  </div>
</template>
<script>
  import marked from 'marked/lib/marked'
  import md from './test.md'

  export default {
    components: {},
    data () {
      return {
        content: ''
      }
    },
    methods: {},
    watch: {},
    computed: {},
    created () {
      console.log(window.content = md)
      this.content = marked(md)
      console.log(document.getElementById('content'))
    },
    mounted () {
      // console.log(window.ts = this)
      // console.log(window.mk = marked)
      // let md = 'aaa'
      this.$nextTick(() => {
        // document.getElementById('content').innerHTML = marked(md)
        // let content = document.getElementById('content')
        // let imgs = content.getElementsByTagName('img')
        // let img = imgs[0]
        // let src = img.attributes.src.value
        // let temp = require(src)
        // this.temp = temp
        // console.log('=====' + temp)
        // console.log(window.cc = content)
      })
    }
  }
</script>
<style lang="less">
  .test {
  }
</style>
