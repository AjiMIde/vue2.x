export default [
  {
    path: '/test',
    name: 'test',
    component: r => require.ensure([], () => r(require('@/app/test/test.vue')), '')
  },
  {
    path: '/test/test-fzs-comp',
    name: 'testFzsComp',
    component: r => require.ensure([], () => r(require('@/app/test/testFzsComp.vue')), '')
  }
]
