<template>
  <div class="css vux2x-document">
    <h4>头部固定、视图固定的布局</h4>
    <div class="para">
      <div class="title">主要代码：</div>
      <blockquote>
        缺点是：需要提前判断到，底部 div 的大致高度 <br>
        还有其他各种实现方式：
      </blockquote>
      <pre><code class="css">
        .a {
          padding:  0 0 50px 0;
        }
        .b {
          margin-top: -50px;
        }
      </code></pre>
      <div class="css-phone">
        <div class="phone-a">
          <ul>
            <li v-for="i in 3">{{i}}</li>
          </ul>
        </div>
        <div class="phone-b">
          订单信息
        </div>
      </div>
      <div class="css-phone">
        <div class="phone-a">
          <ul>
            <li v-for="i in 30">{{i}}</li>
          </ul>
        </div>
        <div class="phone-b">
          订单信息
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ppt',
    data () {
      return {}
    },
    mounted () {
    }
  }
</script>

<style lang="less">
  .css {
    .css-phone {
      width: 300px;
      height: 500px;
      border: 16px solid #333;
      border-radius: 16px;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      position: relative;
      display: inline-block;
      overflow: scroll;
      .phone-a {
        min-height: 100%;
        padding-bottom: 60px;
      }
      .phone-b {
        margin-top: -50px;
      }
    }
  }
</style>
