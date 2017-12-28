export default [
  {
    path: '/test',
    name: 'test',
    component: r => require.ensure([], () => r(require('@/app/test/test.vue')), '')
  }, {
    path: '/test/notification',
    name: 'notification',
    component: r => require.ensure([], () => r(require('@/app/test/notificaion.vue')), '')
  }
]
