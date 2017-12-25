export default [
  {
    path: '/play',
    name: 'play',
    component: r => require.ensure([], () => r(require('@/app/play/play.vue')), '')
  }, {
    path: '/play/key-matter',
    name: 'playKeyMatter',
    component: r => require.ensure([], () => r(require('@/app/play/keyMatter/keyMatter.vue')), '')
  }
]
