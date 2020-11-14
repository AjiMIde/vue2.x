export default [{
  path: '/story',
  name: 'story',
  component: r => require.ensure([], () => r(require('@/app/story/story.vue')), '')
}]
