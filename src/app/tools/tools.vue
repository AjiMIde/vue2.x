<template>
  <div class="vux2x-document tools">
    <h1>Tools</h1>
    <div class="src-list">
      <ul>
        <li v-for="item in list" @click="toggle(item)">
          <router-link :to="'' + item.url + ''">
            {{item.title}}
            <span>
              {{item.date}}
            </span>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="" id="content" v-html="content"></div>

  </div>
</template>

<script>
  import marked from 'marked/lib/marked'
  import mdEslintVue from './eslint-vue.md'
  import mdRawLoader from './raw-loader.md'
  import mdMarked from './marked.md'

  export default {
    name: 'ppt',
    data () {
      return {
        md_ary: {},
        content: '',
        list: [
          {title: 'ESLint', url: '/tools/eslint', date: '2016-08-08', content: mdEslintVue},
          {title: 'Raw-loader', url: '/tools/raw-loader', date: '2017-07-06', content: mdRawLoader},
          {title: 'Marked', url: '/tools/marked', date: '2017-09-09', content: mdMarked}
        ]
      }
    },
    methods: {
      toggle (item) {
        this.content = marked(item.content)
        this.$nextTick(() => {
          if (window.hljs) {
            let pres = window.document.getElementById('content').getElementsByTagName('pre')
            for (let pre of pres) {
              window.hljs.highlightBlock(pre)
            }
          }
        })
      }
    },
    created () {
    },
    mounted () {
    }
  }
</script>

<style lang="less">
  .tools {
    .src-list {
      width: auto;
      ul {
        text-align: left;
        li {
          display: inline-block;
          padding: 4px 6px;
          margin: 0px 10px;
          cursor: pointer;
          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
