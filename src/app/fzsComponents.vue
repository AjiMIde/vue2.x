<template>
  <div class="fzs-comp vux2x-document">
    <h2>表单 Form</h2>

    <h4>FzsInput</h4>
    <div class="para">
      <blockquote>
        <ul class="dev-log">
          <li><b>V1.1 新增：</b></li>
          <li> 去掉无用的调试</li>
          <li> 添加对 length 的支持</li>
          <li> 添加对 password 的支持</li>
          <li><b>V1.2 新加：</b></li>
          <li>添加 minLength 支持</li>
          <li>添加 errorTip 错误提示设置</li>
        </ul>
      </blockquote>
      <ul>
        <li>使用 <code>fzs-input </code>快速搭建可自动检验的 <code>from input</code> 类型</li>
        <li>目前已支持几个常用类型的校验：<code>mobile/bank/email/idNo/captcha</code>(图形验证码)</li>
      </ul>
      <table border='8'>
        <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Need?</th>
          <th>Desc</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>v-model</td>
          <td><code>String</code></td>
          <td>Y</td>
          <td>使用时传递v-model，校验成功时，v-model 有值，校验错误时，v-model 无值</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code></td>
          <td>N</td>
          <td>
            可取：<code>[mobile/bank/email/idNo/password/'']</code>当为空时，默认使用普通 text 无校验
            <span class="tip">注意，当使用了 type 之后 ，length/maxLength/minLength 都会失效</span>
          </td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td>N</td>
          <td>当 type 有值时，会使用 默认 placeholder</td>
        </tr>
        <tr>
          <td>length</td>
          <td><code>String/Number</code></td>
          <td>N</td>
          <td>当为普通的 type=text 类型时，使用 length 值时，限制当值为固定长时才合法，注意，此设置与 maxLength 冲突</td>
        </tr>
        <tr>
          <td>max-length</td>
          <td><code>String/Number</code></td>
          <td>N</td>
          <td>当 type 有值时，使用校验所设定的 maxLength，故设置了 type 值之后，<b class="danger"> 与 length 冲突</b></td>
        </tr>
        <tr>
          <td>min-length</td>
          <td><code>String/Number</code></td>
          <td>N</td>
          <td>当达到最小长度时，值才可用，多用于密码框。<b class="danger">同样的，与 length 冲突</b></td>
        </tr>
        <tr>
          <td>error-tip</td>
          <td><code>String</code></td>
          <td>N</td>
          <td>错误提示框</td>
        </tr>
        <tr>
          <td>captcha-url</td>
          <td><code>String</code></td>
          <td>Y/N</td>
          <td>，当 type == captcha 有效，该值需为不断变化的值，以达成验证码效果</td>
        </tr>
        <tr>
          <td>@onCaptchaRefresh</td>
          <td><code>String</code></td>
          <td>Y/N</td>
          <td>方法响应，当 type == captcha 有效，当点击图形验证码时，刷新图形验证码</td>
        </tr>
        </tbody>
      </table>
      <pre><code class="javascript">
        &lt;fzs-input type='mobile' v-model='theMobile'&gt;
        &lt;fzs-input  v-model='theValue' placeholder='请点击输入' maxLength=66&gt;
        &lt;fzs-input type='captcha' v-model='captcha.code' :captcha-url='captcha.url' @onCaptchaRefresh='getCaptcha'&gt;
      </code></pre>
      <div class="example">
        <div class="example-block">
          <p>基础使用：mobile 手机值为：{{mobile}}</p>
          <fzs-input type="mobile" v-model="mobile"></fzs-input>
        </div>

        <div class="example-block">
          <p>使用自定义错误 + 自定义placeholder. 手机值为：{{mobile}}</p>
          <fzs-input type="mobile" v-model="mobile" error-tip="您输入了错误的手机号" placeholder="请您输入正确的手机号"></fzs-input>
        </div>

        <div class="example-block">
          <p>定长 length 的文本框，一定是刚好是那个长度的文本框才是可用的：{{value}}</p>
          <fzs-input v-model="value" placeholder="普通类型，可限定字符长度刚好是6" length=6></fzs-input>
        </div>

        <div class="example-block">
          <p> 限定最小的长度与最长的长度，如 6 到 10 位的密码{{value}}</p>
          <fzs-input v-model="value" type="password" placeholder="密码类型，6到10位的密码" minLength=6 maxLength=10></fzs-input>
        </div>

        <div class="example-block">
          <p>captcha.code 图形验证码为：{{captcha.code}}</p>
          <fzs-input type="captcha" v-model="captcha.code" :captcha-url="captcha.url"
                     @onCaptchaRefresh="getCaptcha()"></fzs-input>
        </div>
      </div>
    </div>

    <h4>FzsCaptchaBtn</h4>
    <div class="para">
      <ul>
        <li>使用 fzs-captcha-btn 快速搭建可自动倒数的发送验证码短信的 btn</li>
        <li>目前使用范围比较窄，有一定局限性，因为：<b class="warning">需要在组件里面设定发送短信的接口</b></li>
      </ul>
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Need?</th>
          <th>Desc</th>
        </tr>
        <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td>Y</td>
          <td>作为一个按钮，一定要有条件使其可按，这里必传一个条件</td>
        </tr>
        <tr>
          <td>count</td>
          <td><code>Number</code></td>
          <td>N</td>
          <td>倒数秒数，默认 60s</td>
        </tr>
        <tr>
          <td>@onSendFail</td>
          <td><code>Function</code></td>
          <td>N</td>
          <td>发送失败事件</td>
        </tr>
        <tr>
          <td>@onSendSuccess</td>
          <td><code>Function</code></td>
          <td>N</td>
          <td>事件，发送成功事件</td>
        </tr>
      </table>
      <pre><code class="javascript">
        &lt;fzs-captcha-btn :disabled='btnDisabled' :count=3 @onSendFail="onSendFail()" @onSendSuccess="onSendSuccess()"&gt;
      </code></pre>
      <div class="example">
        <div class="example-block">
          <div>请求结果：{{msg}}</div>
          <fzs-input type="mobile" v-model="theMobile2"></fzs-input>
          <fzs-captcha-btn :disabled='btnDisabled' :count=3 @onSendFail="onSendFail()"
                           @onSendSuccess="onSendSuccess()"></fzs-captcha-btn>
        </div>
      </div>
    </div>

    <h4>FzsAjaxBtn</h4>
    <div class="para">
      <ul>
        <li>使用 fzs-ajax-btn 搭建可显示 loading 的发送网络请求的 btn</li>
      </ul>

      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Need?</th>
          <th>Desc</th>
        </tr>
        <tr>
          <td>:disabled</td>
          <td><code>Boolean</code></td>
          <td>Y</td>
          <td>必填，作为一个按钮，一定要有条件使其可使用，这里必传一个条件</td>
        </tr>
        <tr>
          <td>:loading</td>
          <td><code>String</code></td>
          <td>Y</td>
          <td>由于 ajax 提交的特殊性，当点击提交后，按钮显示 loading 样式，此时如想终止loading，传递一个随机字符给子组件即可</td>
        </tr>
        <tr>
          <td>@onClick</td>
          <td><code>Function</code></td>
          <td>N</td>
          <td>事件，点击事件触发</td>
        </tr>
      </table>

      <pre><code class="javascript">
        &lt;fzs-ajax-btn :disabled="ajaxBtn.disabled" :loading="ajaxBtn.loading" @onClick="ajaBtnClick()" >提交&lt;/fzs-ajax-btn>
      </code></pre>

      <div class="example">
        <div class="example-block">
          <fzs-input type="mobile" v-model="ajaxBtn.mobile"></fzs-input>
        </div>
        <div class="block">
          <fzs-ajax-btn :disabled="ajaxBtn.disabled" :loading="ajaxBtn.loading" @onClick="ajaBtnClick()">提交
          </fzs-ajax-btn>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import FzsInput from '@/components/FzsComp/FzsInput'
  import FzsCaptchaBtn from '@/components/FzsComp/FzsCaptchaBtn'
  import FzsAjaxBtn from '@/components/FzsComp/FzsAjaxBtn'

  export default {
    components: {
      FzsInput,
      FzsCaptchaBtn,
      FzsAjaxBtn
    },
    data () {
      return {
        mobile: '',
        value: '',
        captcha: {
          code: '',
          url: ''
        },
        //
        msg: '',
        theMobile2: '',
        btnDisabled: true,

        ajaxBtn: {
          msg: '',
          mobile: '',
          loading: '',
          disabled: true
        },

        setLengthVal: ''
      }
    },
    methods: {
      getCaptcha () {
        this.captcha.url = 'https://www.phone580.com/fzsCaptchaApi/captcah/captcah.jpg?key=' + Math.random() * 10000000000000000
      },
      onSendSuccess () {
        this.msg = '发送成功'
      },
      onSendFail () {
        this.msg = '发送失败'
      },
      sendSmsCode () {
        // 模拟一个发送短信
      },

      ajaBtnClick () {
        window.setTimeout(() => {
          this.ajaxBtn.loading = Math.random() + ''
        }, 3000)
      }
    },
    watch: {
      theMobile2 (newV, oldV) {
        if (newV) {
          this.btnDisabled = false
        } else {
          this.btnDisabled = true
        }
      },
      'ajaxBtn.mobile': function (newV, oldV) {
        if (newV) {
          this.ajaxBtn.disabled = false
        } else {
          this.ajaxBtn.disabled = true
        }
      }
    },
    computed: {},
    mounted () {
      console.log(window.fc = this)
      this.getCaptcha()
    }
  }
</script>
<style lang="less">
  html {
    font-size: 100px !important;
  }

  .fzs-comp {
    margin: 0 auto;
    table {
      th {
        font-family: Consolas, Liberation Mono, Menlo, Courier, monospace, "Microsoft YaHei UI";
      }
      tr {
        > td:last-child {
          text-align: left;
        }
        td:nth-child(1), td:nth-child(2), td:nth-child(3) {
          font-family: Consolas, Liberation Mono, Menlo, Courier, monospace, "Microsoft YaHei UI";
        }
      }
    }
  }


</style>
