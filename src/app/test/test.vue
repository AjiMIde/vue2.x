<template>
  <div class="test">
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
  import test from '../../api/service.test'

  export default {
    components: {},
    data () {
      return {
        list: [
          {title: 'Chrome Notification', url: 'key-matter-tip', date: '2017-12-20'},
          {title: 'Vue 总结', url: 'vue-summary'},
          {title: 'Vue 总结', url: 'vue-summary'}
        ]
      }
    },
    methods: {
      setTip () {
        window.setTimeout(() => {
          let tip = new window.Notification('双十二，买买买', {
            body: '双十二马上来了，你准备好剁手了吗？千万好货来袭',
            icon: 'http://localhost/images/notification.png',
            tag: 1
          })
          console.log(tip)
        }, 5000)
      }
    },
    watch: {},
    computed: {},
    mounted () {
      this.tt = test
      window.Notification.requestPermission((permission) => {
        if (permission === 'granted') {
          this.setTip()
        }
      })
    }
  }
</script>
<style lang="less"></style>
