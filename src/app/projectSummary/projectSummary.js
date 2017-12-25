export default {
  data () {
    return {
      stuff: []
    }
  },
  methods: {
    markSelect ($e) {
      let target = $e.target
      let selection = window.getSelection()
      selection.selectAllChildren(target)
    }

  },
  mounted () {
    this.stuff.push({name: 'all', value: '全部', show: true})
    this.stuff.push({name: 'videoV1', value: '影视会员（模板化）', show: true})
    this.stuff.push({name: 'ups-vue', value: '手机回收2.0（模板化）', show: true})
  }
}
