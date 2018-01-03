export default [
  {
    path: '/project-summary',
    name: 'projectSummary',
    component: r => require.ensure([], () => r(require('@/app/projectSummary/projectSummary.vue')), ''),
  }, {
    path: '/project-summary/video-v1',
    component: r => require.ensure([], () => r(require('@/app/projectSummary/projects/videoV1.vue')), ''),
  }, {
    path: '/project-summary/ups-vue',
    component: r => require.ensure([], () => r(require('@/app/projectSummary/projects/upsVue.vue')), ''),
  }, {
    path: '/project-summary/mifi',
    component: r => require.ensure([], () => r(require('@/app/projectSummary/projects/mifi.vue')), ''),
  }, {
    path: '/project-summary/flow-h5',
    component: r => require.ensure([], () => r(require('@/app/projectSummary/projects/flow-h5.vue')), ''),
  }, {
    path: '/project-summary/pos',
    component: r => require.ensure([], () => r(require('@/app/projectSummary/projects/pos.vue')), ''),
  }, {
    path: '/project-summary/life-charge',
    component: r => require.ensure([], () => r(require('@/app/projectSummary/projects/life-charge.vue')), ''),
  }, {
    path: '/project-summary/wechat-pay',
    component: r => require.ensure([], () => r(require('@/app/projectSummary/projects/wechat-pay.vue')), ''),
  }
]
