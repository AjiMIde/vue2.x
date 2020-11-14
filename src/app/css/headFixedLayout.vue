<template>
  <div class="css vux2x-document">
    <h4>头部固定、视图固定的布局</h4>
    <div class="para">
      <div class="title">主要代码：</div>
      <pre><code class="css">
        .css {
          position: absolute; // 也可以尝试使用 fixed
          top: 0px;           // 调整不同数值达到目标
          left: 0px;
          right: 0px;
          bottom: 0px;
          //
          height: 100px;      // 可以设置不同值
          width: 100px;       // 可以设置不同的数值
          overflow: scroll;   // 非必须
        }
      </code></pre>
      <div class="css-phone">
        <div class="phone-a">
          header
        </div>
        <div class="phone-b">
          <div class="phone-b-left">
            <ul>
              <li v-for="i in 30">{{i}}</li>
            </ul>
          </div>
          <div class="phone-b-right">
            <ul>
              <li v-for="i in 30">{{i + 10}}</li>
            </ul>
          </div>
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
      line-height: 36px;
      text-align: center;
      position: relative;
      .phone-a {
        height: 80px;
        background-color: #fc5143;
        width: 100%;
        //
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
      }
      .phone-b {
        background-color: #00caca;
        width: 100%;
        //
        position: absolute;
        top: 90px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        .phone-b-left {
          border: 1px solid #3c763d;
          position: absolute;
          width: 80px;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          overflow: scroll;
        }
        .phone-b-right {
          border: 1px solid #da4939;
          position: absolute;
          top: 0px;
          left: 80px;
          right: 0px;
          bottom: 0px;
          overflow: scroll;
        }
      }
    }
  }
</style>
