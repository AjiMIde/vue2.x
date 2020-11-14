import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import testHttp from '@/app/test/http.vue'

import ppt from './ppt.js'
import play from './play.js'
import html5 from './html5.js'
import css from './css.js'
import test from './test.js'
import tools from './tools.js'
import story from './story.js'

Vue.use(Router)

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
    path: '/hello',
    component: Hello
  }, {
    path: '/fzs-comp',
    name: 'fzsComp',
    component: r => require.ensure([], () => r(require('@/app/fzsComponents.vue')), '')
  }]

export default new Router({
  routes: (defaults).concat(ppt).concat(play).concat(html5).concat(test).concat(css).concat(tools).concat(story),
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
  // base: '/app/'
})
