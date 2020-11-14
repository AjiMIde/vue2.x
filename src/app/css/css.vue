<template>
  <div class="css vux2x-document">
    <div class="src-list">
      <ul>
        <li v-for="item in list">
          <router-link :to="'' + item.url + '/'">
            {{item.title}}
          </router-link>
          <span>
            {{item.date}}
          </span>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ppt',
    data () {
      return {
        list: [
          {title: '头部固定，视图固定的布局', url: '/css/head-fixed-layout', date: '2017-12-21'},
          {title: '底部固定自适应标志布局', url: '/css/adaptive-bottom-info-tag', date: '2017-12-21'},
          {title: 'Vue 总结', url: 'vue-summary'},
          {title: 'Vue 总结', url: 'vue-summary'}
        ]
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less">
</style>
