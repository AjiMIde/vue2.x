import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import testHttp from '@/app/test/http.vue'

import ppt from './ppt.js'
import play from './play.js'
import html5 from './html5.js'

Vue.use(Router)

let project = [{
  path: '/project-summary',
  name: 'project-summary',
  component: r => require.ensure([], () => r(require('@/app/projectSummary/projectSummary.vue')), '')
}]

let defaults = [
  {
    path: '/',
    component: r => require.ensure([], () => r(require('@/app/index/index.vue')), '')
  }, {
    path: '/index',
    name: 'index',
    component: r => require.ensure([], () => r(require('@/app/index/index.vue')), '')
  }, {
    path: '/test/http',
    name: 'testHttp',
    component: testHttp
  }, {
    path: '/read-me',
    name: 'readMe',
    component: r => require.ensure([], () => r(require('@/app/readMe/readMe.vue')), '')
  }, {
    path: '/hello',
    component: Hello
  }, {
    path: '/fzs-comp',
    name: 'fzsComp',
    component: r => require.ensure([], () => r(require('@/app/fzsComponents.vue')), '')
  }]

export default new Router({
  routes: project.concat(defaults).concat(ppt).concat(play).concat(html5)
  // base: '/app/'
})
