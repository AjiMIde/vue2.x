<template>
  <div class="play">
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
  </div>
</template>

<script>
  export default {
    name: 'ppt',
    data () {
      return {
        list: [
          {title: 'Key Matter', url: 'key-matter', date: '2017-12-21'},
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
