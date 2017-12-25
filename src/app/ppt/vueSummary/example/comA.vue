<template>
  <div>
    <div>------------comA</div>
    <div @click="onClick()">Click Me To emit Date</div>
    <div>------------</div>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick () {
        window.Vue2x.$emit('comAEmitClick', new Date())
      }
    },
    mounted () {
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
