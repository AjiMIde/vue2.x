let index = [{
  path: '/tools',
  name: 'tools',
  component: r => require.ensure([], () => r(require('@/app/tools/tools.vue')), ''),
  // children: [{
    // path: 'eslint',
    // component: r => require.ensure([], () => r(require('@/app/ppt/tools/eslint.vue')), '')
  // }]
}, {
  path: '/tools/:param',
  name: 'tools',
  component: r => require.ensure([], () => r(require('@/app/tools/tools.vue')), ''),
}]

export default index.concat([])
