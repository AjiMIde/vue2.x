<template>
  <div class="vux2x-document fzs-ui">
    <div v-html="fzsUI" class="markdown-html-view"></div>
  </div>
</template>

<script>
import fzsUI from './fzsUI.md'
export default {
  name: 'ppt',
  data () {
    return {
      fzsUI,
      list: [
        {title: 'Vue 总结', url: 'vue-summary'},
        {title: 'Vue 总结', url: 'vue-summary'},
        {title: 'Vue 总结', url: 'vue-summary'}
      ]
    }
  }
}
</script>

<style lang="less"></style>
