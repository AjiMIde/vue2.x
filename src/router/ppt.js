let vueSummary = [
  {
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
  }
]

let testSpec = [{
  path: '/ppt/test-spec',
  component: r => require.ensure([], () => r(require('@/app/ppt/testSpec/testSpec.vue')), '')
}, {
  path: '/ppt/test-spec/basic-concept',
  component: r => require.ensure([], () => r(require('@/app/ppt/testSpec/basicConcept.vue')), '')
}, {
  path: '/ppt/test-spec/jasmine',
  component: r => require.ensure([], () => r(require('@/app/ppt/testSpec/jasmine.vue')), '')
}, {
  path: '/ppt/test-spec/mocha',
  component: r => require.ensure([], () => r(require('@/app/ppt/testSpec/mocha.vue')), '')
}, {
  path: '/ppt/test-spec/karma',
  component: r => require.ensure([], () => r(require('@/app/ppt/testSpec/karma.vue')), '')
}, {
  path: '/ppt/test-spec/karma-vue',
  component: r => require.ensure([], () => r(require('@/app/ppt/testSpec/karmaVue.vue')), '')
}, {
  path: '/ppt/test-spec/notice-point',
  component: r => require.ensure([], () => r(require('@/app/ppt/testSpec/noticePoint.vue')), '')
}, {
  path: '/ppt/test-spec/unit-test-demo',
  component: r => require.ensure([], () => r(require('@/app/ppt/testSpec/unitTestDemo.vue')), '')
}, {
  path: '/ppt/test-spec/summary',
  component: r => require.ensure([], () => r(require('@/app/ppt/testSpec/summary.vue')), '')
}]

let fzsUI = [{
  path: '/ppt/fzs-ui',
  component: r => require.ensure([], () => r(require('@/app/ppt/fzsUI/fzsUI.vue')), '')
}]

let index = [{
  path: '/ppt',
  name: 'ppt',
  component: r => require.ensure([], () => r(require('@/app/ppt/ppt.vue')), '')
}, {
  path: '/ppt/template',
  component: r => require.ensure([], () => r(require('@/app/ppt/_template.vue')), '')
}]

export default index.concat(vueSummary).concat(testSpec).concat(fzsUI)
