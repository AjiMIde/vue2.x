<template>
  <div class="index">

    <div class="header">
      <div class="logo">
        <img src="../../assets/img/index/bee.png" alt="">
      </div>
      <div class="name">
        <span class="span1">蜂前端</span>
        <span class="span2">CrazyTeam</span>
      </div>
    </div>

    <div class="nav">
      <router-link v-for="item in navList" :to="'' + item.url + '/'" target="_blank">
        <div class="nav-name" :style="'background-color:' + item.color">{{item.name}}</div>
        <div class="nav-title">{{item.title}}</div>
        <div class="nav-desc">{{item.desc}}</div>
      </router-link>
    </div>

    <h4>
      下面是本项目常用的一样规范：
    </h4>
    <h4>
      嵌套一个 div.vu2x-document，然后使用以下规范
    </h4>
    <div class="vux2x-document">
      <h1>大标题 h1</h1>
      <h2>中标题 h2</h2>
      <h4>小标题 h4</h4>
      <div class="para">

        <div> 段落 .para </div>
        <div class="title">段落标题 .para .title</div>
        <div class="warning">警告 .waring</div>
        <div class="danger">危险 .danger</div>
        <div class="tip">提示 .tip</div>

        <ul>
          <li>列表 ul</li>
          <li>列表 li</li>
          <li>行内代码块 <code>code</code></li>
        </ul>

        <blockquote>
          <p>引用 blockquote</p>
          <ul>
            <li>引用中的 列表 ul</li>
            <li>引用中的 列表 li</li>
          </ul>
        </blockquote>

        <div class="example">
          举例 .example
          <div class="example-block">
            举例块 .example-block
          </div>
        </div>

        <div class="para">
          <pre>
            <code class="javascript">
              // 段落 para > 代码 pre > code
              var str = 'Hello World'
              alert(str)
            </code>
          </pre>
        </div>

        <div>
          <table>
            <tr><th>th</th><th>th</th><th>th</th></tr>
            <tr><td>table</td><td>table</td><td>table</td></tr>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: [],
        list: []
      }
    },
    methods: {},
    mounted () {
      this.navList.push({name: 'Summary', url: 'project-summary', title: '项目总结', desc: '手机回收2.0、POS机支付、公众号支付。', color: '#6f5499'})
      this.navList.push({name: 'Component', url: 'fzs-comp', title: '组件', desc: '包含有：FzsInput, FzsCaptchaBtn, FzsAjaxBtn等', color: '#2c8ebb'})
      this.navList.push({name: 'PPT', url: 'ppt', title: '部门培训', desc: 'Vue', color: '#654ff0'})
      this.navList.push({name: '测试', url: 'test', title: '测试', desc: '自动化测试、Key事项', color: '#cf4646'})
      this.navList.push({name: 'Play', url: 'play', title: '玩物', desc: 'key事项提醒KeyMatter', color: '#4caf50'})
      // #4ad5ff   #
    }
  }

</script>
<style lang="less" src="../../assets/app/index.less"></style>
