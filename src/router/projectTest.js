export default [
  {
    path: '/http',
    name: 'testHttp',
    component: r => require.ensure([], () => r(require('@/app/test/http.vue')), '')
  }, {
    path: '/ppt/vue-summary',
    name: 'pptVueSummary',
    component: r => require.ensure([], () => r(require('@/app/ppt/vueSummary/_index.vue')), '')
  }, {
    path: '/ppt/vue-summary/basic',
    component: r => require.ensure([], () => r(require('@/app/ppt/vueSummary/basic.vue')), '')
  }, {
    path: '/ppt/vue-summary/install',
    component: r => require.ensure([], () => r(require('@/app/ppt/vueSummary/install.vue')), '')
  }, {
    path: '/ppt/vue-summary/advanced',
    component: r => require.ensure([], () => r(require('@/app/ppt/vueSummary/advanced.vue')), '')
  }, {
    path: '/ppt/vue-summary/router',
    component: r => require.ensure([], () => r(require('@/app/ppt/vueSummary/router.vue')), '')
  }, {
    path: '/ppt/vue-summary/component',
    component: r => require.ensure([], () => r(require('@/app/ppt/vueSummary/component.vue')), '')
  }, {
    path: '/ppt/vue-summary/vuex',
    component: r => require.ensure([], () => r(require('@/app/ppt/vueSummary/vuex.vue')), '')
  }, {
    path: '/ppt/vue-summary/more',
    component: r => require.ensure([], () => r(require('@/app/ppt/vueSummary/more.vue')), '')
  }, {
    path: '/ppt/vue-summary/http',
    component: r => require.ensure([], () => r(require('@/app/ppt/vueSummary/http.vue')), '')
  }, {
    path: '/ppt/vue-summary/example',
    component: r => require.ensure([], () => r(require('@/app/ppt/vueSummary/_example.vue')), '')
  }, {
    path: '/ppt/template',
    component: r => require.ensure([], () => r(require('@/app/ppt/_template.vue')), '')
  }
]
