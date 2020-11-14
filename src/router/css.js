export default [
  {
    path: '/css',
    name: 'css',
    component: r => require.ensure([], () => r(require('@/app/css/css.vue')), ''),
    children: [{
      path: 'head-fixed-layout',
      component: r => require.ensure([], () => r(require('@/app/css/headFixedLayout.vue')), '')
    }, {
      path: 'adaptive-bottom-info-tag',
      component: r => require.ensure([], () => r(require('@/app/css/adaptiveBottomInfoTag.vue')), '')
    }]
  }]
