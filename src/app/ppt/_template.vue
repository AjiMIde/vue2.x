<template>
  <div class="vux2x-document">
    <h1>Title</h1>
    <h2>subTitle</h2>
    <h4>sub sub title</h4>
    <div class="para">
      para, <code>code</code>,
      <p class="warning"> warning </p>
      <p class="danger"> danger </p>
      <p class="tip"> tip </p>
      <ul>
        <li><b>list 1</b></li>
        <li><u>list 1</u></li>
        <li>list 1</li>
      </ul>
    </div>
    <div class="para">
      <blockquote>
        block quote
        <ul>
          <li>list 1</li>
          <li>list 1</li>
          <li>list 1</li>
        </ul>
      </blockquote>
    </div>
    <div class="para">
      <pre><code class="javascript">
        // code highlight
        var js = {}
      </code></pre>
      <div class="example">
        example
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ppt',
  data () {
    return {
      list: [
        {title: 'Vue 总结', url: 'vue-summary'},
        {title: 'Vue 总结', url: 'vue-summary'},
        {title: 'Vue 总结', url: 'vue-summary'}
      ]
    }
  }
}
</script>

<style lang="less">
</style>
