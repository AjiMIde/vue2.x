<template>
  <div class="ppt">
    <div class="src-list">
      <ul>
        <li v-for="item in list">
          <router-link :to="'/ppt/' + item.url + '/'">
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
        {title: 'Vue 总结', url: 'vue-summary', date: '2017-12-01'},
        {title: 'Web/JavaScript测试', url: 'test-spec', date: '2017-12-30'},
        {title: 'Vue 总结', url: 'vue-summary'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
