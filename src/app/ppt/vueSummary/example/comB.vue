<template>
  <div>
    <div>------------comB</div>
    <div>Information from ComA is : {{msg}}</div>
    <div>------------</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '...'
      }
    },
    mounted () {
      let me = this
      window.Vue2x.$on('comAEmitClick', (data) => {
        me.msg = data
      })
    }
  }
</script>

<style>
  h1 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
