<template>
  <div class="vux2x-document">
    <h2>Http Request</h2>

    <h4>Vue-Resource</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li><a href="https://github.com/pagekit/vue-resource" target="_blank">Github Vue Resource</a></li>
          <li>支持 Promise Api / URI 模板</li>
          <li>支持 request/response 拦截处理</li>
          <li>支持 ie9 + </li>
          <li>支持 V1.0/V2.0</li>
          <li>体积小 14kb</li>
        </ul>
      </blockquote>


      <b>例子</b>
      <pre><code class="javascript">
        this.$http.get('/url').then(res => {
        } err => {
        });
      </code></pre>

      <b>配置</b>
      <pre><code class="javascript">
        // 全局配置
        Vue.http.options.param = ''
        Vue.http.headers = {}

        // 组件中配置
        Vue.component('', {
          http: {
            root: '',
            headers: {
              auth: ''
            }
          }
        })

        // 发送中配置
        Vue.$http.get(url, params).then()
      </code></pre>

      <b>方法</b>
      <pre><code class="javascript">
        t.$http.get()
        t.$http.post()
        t.$http.jsonp()
        t.$http.head()
        t.$http.put()
        t.$http.patch()
      </code></pre>

      <b>拦截器</b>
      <pre><code class="javascript">
      Vue.http.interceptors.push((request, next) => {
         // do with request
         Vue.showLoading

         next((response) => {
           if (response.status !== 200)
         })
      })
      </code></pre>

    </div>

    <h4>axios</h4>
    <div class="para">
      <blockquote>
        <ul>
          <li>同时支持node.js/browser</li>
          <li>IE8+</li>
          <li>支持 Promise Api</li>
          <li>...</li>
        </ul>
      </blockquote>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: '',
        picked: '',
        checked: false,
        checkedNames: []
      }
    },
    mounted () {
      console.log(window.m = this)
    },
    methods: {
      onDivClick () {
        window.alert('i am div')
      },
      onBtnClick () {
        window.alert('i am btn')
      }
    }
  }

</script>
