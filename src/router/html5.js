export default [
  {
    path: '/html5',
    name: 'html5',
    component: r => require.ensure([], () => r(require('@/app/html5/html5.vue')), ''),
    children: [{
      path: 'notification',
      component: r => require.ensure([], () => r(require('@/app/html5/notification.vue')), '')
    }, {
      path: 'reg-launch-win-exe',
      component: r => require.ensure([], () => r(require('@/app/html5/regLaunchWinExe.vue')), '')
    }]
  }
]
