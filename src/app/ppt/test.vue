<template>
  <div class="fzs-comp vux2x-document">
    <fzs-input v-model="theValue" type="mobile"></fzs-input>
  </div>
</template>
<script>
  import FzsInput from '@/components/FzsComp/FzsInput'

  export default {
    components: {
      FzsInput
    },
    data () {
      return {
        theValue: '',
        thePassword: ''
      }
    },
    methods: {},
    watch: {},
    computed: {},
    mounted () {
    }
  }
</script>
<style lang="less"></style>
