<template>
  <div class="test-fzs-comp">
    <div>当前值：{{mobile}}</div>

    <fzs-input v-model="mobile" placeholder="测试111111" error-tip="错误提示1"></fzs-input>

  </div>
</template>
<script>
  import FzsInput from '../../components/FzsComp/FzsInput'

  export default {
    components: {
      FzsInput
    },
    data () {
      return {
        mobile: ''
      }
    },
    methods: {},
    watch: {},
    computed: {},
    mounted () {
      console.log(window.ts = this)
    }
  }
</script>
<style lang="less">
  .test-fzs-comp {

  }
</style>
