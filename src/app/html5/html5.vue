<template>
  <div class="html5">
    <div class="src-list">
      <ul>
        <li v-for="item in list">
          <router-link :to="'' + item.url + ''">
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
          {title: 'H5 Notification', url: 'notification', date: '2017-12-21'},
          {title: 'Reg 注册表 & HTML唤起 Windows 应用程序', url: 'reg-launch-win-exe', date: '2017-12-23'},
          {title: 'Vue 总结', url: 'vue-summary'}
        ]
      }
    },
    mounted () {}
  }
</script>

<style lang="less">
  .html5 {
    .src-list {
      width:auto;
      ul {
        text-align: left;
        li {
          display: inline-block;
          padding: 4px 6px;
          margin: 0px 10px;
          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
