<template>
  <div>
    <div>----------------ComA</div>
    <div @click="click()">Click me set store state</div>
    <div>---------------------</div>
  </div>
</template>
<script>
  import Store from './fluxExpStore'
  export default {
    methods: {
      click () {
        this.$store.commit('increment')
        Store.commit('setState')
      }
    },
    mounted () {
      console.log(window.aa = Store)
    }
  }
</script>
