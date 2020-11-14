<template>
  <div class="eslint">
    <h2>ESLint</h2>

    <h4>ESLint 在 Vue中的配置</h4>
    <div class="para">
      <pre><code class="javascript">
        {
          // ...
          'rules': {
            'spaced-comment': 0,    // 在注释后的空格
            'comma-dangle': 0,      // 在数组、对象、function等中，最后一个子后面是否需要逗号： ,
            'no-eval': 0,           // 是否使用 eval 函数（这是危险的，慎重 ）
            'arrow-parens': 0,      // 允许省略只一个参数时的箭头
            'generator-star-spacing': 0,            // 使用 generator 函数时，后面的星号 * 必须要有一个空格
            'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0      // 调试模式的切换
          }
        }
      </code></pre>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'ppt',
    data () {
      return {
        list: [
          {title: 'ESLint', url: '/tools/eslint', date: '2016-08-08'},
          {title: 'Vue 总结', url: 'vue-summary', date: ''},
          {title: 'Vue 总结', url: 'vue-summary', date: ''}
        ]
      }
    },
    mounted () {
      this.content = marked(md)
    }
  }
</script>

<style lang="less">
</style>
