<template>
  <div>
    <div>------------comB</div>
    <div>the store's state' count is: {{storeState}}</div>
    <div>the store's state' count is: {{storeSs}}</div>
    <div>------------</div>
  </div>
</template>

<script>
  import Store from './fluxExpStore'
  export default {
    data () {
      return {}
    },
    computed: {
      storeState () {
        return this.$store.state.count
      },
      storeSs () {
        return Store.state.count
      }
    },
    methods: {},
    mounted () {
      console.log(window.bb = Store)
    }
  }
</script>
