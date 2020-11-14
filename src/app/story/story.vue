<template>
  <div class="story">
    <div class="story-nav">
      <div class="story-nav-item" v-for="item in storyList">
        <a :href="prefixUrl + item.url + ''" target="_blank">
          <div class="story-nav-item-image">
            <img :src="item.image" alt="">
          </div>
          <div class="story-nav-item-title">{{item.title}}</div>
          <div class="story-nav-item-time">{{item.time}}</div>
          <div class="story-nav-item-desc">{{item.desc}}</div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'story',
  data () {
    return {
      storyList: [],
      prefixUrl: window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/'
    }
  },
  mounted () {
    this.storyList.push({
      image: require('./images/drcom-rmdx-webroot.png'),
      url: 'static/story/drcom-rmdx-webRoot/pc.html',
      title: '人民大学Drcom流量计费',
      time: '2014-08',
      desc: 'BootStrap/Jquery/JqueryUI等'
    })
    this.storyList.push({
      image: require('./images/drcom-rmdx-a70.png'),
      url: 'static/story/drcom-rmdx-a70/a70.htm',
      title: '人民大学Drcom流量计费登录页',
      time: '2014-09',
      desc: 'media query'
    })

  }
}
</script>

<style lang="less">
  .story {
    .story-nav {
      .story-nav-item {
        overflow: hidden;
        a {
          color: #333333;
        }
        .story-nav-item-image {
          width: 100px;
          height: 100px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .story-nav-item-title {

        }
        .story-nav-item-time {

        }
        .story-nav-item-desc {

        }
      }
    }
  }
</style>
