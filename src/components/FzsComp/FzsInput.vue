<template>
  <div class="fzs-ui-input">
    <div class="input-input">
      <input v-if="c_type ==='password'" ref="theInput" @keydown="onKeydown" :placeholder='c_placeholder'
             type='password' @input="onInput"
             v-model="c_value" :maxlength="c_maxLength" @blur="onBlur()"/>
      <input v-else ref="theInput" @keydown="onKeydown" :placeholder='c_placeholder' type='text' @input="onInput"
             v-model="c_value" :maxlength="c_maxLength" @blur="onBlur()"/>
      <div class="input-close" v-show="c_closeShow" @click="emptyText()"></div>
      <div class="captcha-code" v-if="type === 'captcha'">
        <img :src="captchaUrl" alt="" @click="captchaClick()">
      </div>
    </div>
    <div class="input-error" v-show="c_showError && c_dirty">{{c_errorTip}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text',  // support: text, mobile,email, bank, idNo(身份证), captcha（图形验证码）
        required: false
      },
      value: {
        type: String,
        default: '',      // 根据 vue 2.5 版本，使用时设置  v-model 即可
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      },
      maxLength: {
        default: 0
      },
      minLength: {
        default: 0
      },
      length: {
        default: 0
      },
      errorTip: {
        type: String,
        default: ''
      },
      captchaUrl: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        c_placeholder: '',
        c_showError: false,
        c_errorTip: '请输入正确的值',
        c_dirty: false,
        //
        c_closeShow: false,
        c_value: this._formatCValue(this.value || ''),
        //
        c_length: parseInt(this.length) || 0, // 达到某个长度，值才是合法的
        c_maxLength: parseInt(this.length) || parseInt(this.maxLength) || 10 * 10,
        c_minLength: parseInt(this.minLength) || 0,
        //
        c_type: 'text',                           // 类型，一般为 text，此次为了支付 password
        tipArray: {},
        regexAry: {}
      }
    },

    watch: {
      value (val) {
        this.c_value = this._formatCValue(val)
      },
      captchaUrl (newV, oldV) {
        this.c_value = '' // 清空
      }
    },

    created () {
      this.tipArray.mobile = ['请输入手机号码', '请输入正确的手机号码', 11 + 2]
      this.tipArray.bank = ['请输入银行账号', '请输入正确的银行号码', 19 + 4]
      this.tipArray.email = ['请输入邮箱', '请输入正确的邮箱', 99]
      this.tipArray.idNo = ['请输入身份证号码', '请输入正确的身份证号码', 18]
      this.tipArray.captcha = ['请输入图形验证码', '请输入正确的图形验证码', 6]

      this.regexAry.mobile = /^1[34578][0-9]{9}$/
      this.regexAry.bank = /^(\d{16}|\d{19})$/
      this.regexAry.email = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
      this.regexAry.idNo = /^(\d{15}$)|(\d{17}([0-9]|X))$/
      this.regexAry.captcha = /^[a-zA-z0-9]{4,6}$/
    },

    mounted () {
      console.log(window.comp = this)
      this._setPlaceholderAndErrorTip()
      if (this.type.indexOf('password') >= 0) {
        this.c_type = 'password'
      } else {
        this.c_type = 'text'
      }
    },

    methods: {
      _formatCValue (val) {
        if (!!val === false) return this.c_value || ''

        switch (this.type) {
          case 'mobile': {
            val = val.replace(/[^0-9]/g, '')
            val = val.substr(0, 3) + ' ' + val.substr(3, 4) + ' ' + val.substr(7, 4)
            break
          }
          case 'bank': {
            val = val.replace(/[^0-9]/g, '')
            val = val.substr(0, 4) + ' ' + val.substr(4, 4) + ' ' + val.substr(8, 4) + ' ' + val.substr(12, 4) + ' ' + val.substr(16, 4)
            break
          }
          case 'idNo': {
            val = val.replace(/[^0-9X]/g, '')
            break
          }
          default: {
            // other
          }
        }

        return val.replace(/(^\s*)|(\s*$)/g, '') // 去前后空格
      },

      _setPlaceholderAndErrorTip () {
        let item = this.tipArray[this.type]
        // 既有类型
        if (item) {
          this.c_placeholder = item[0]
          this.c_errorTip = item[1]
          this.c_maxLength = item[2]
        }
        // 强制使用
        if (this.placeholder !== '') {
          this.c_placeholder = this.placeholder
        }
        if (this.errorTip !== '') {
          this.c_errorTip = this.errorTip
        }
        if (this.type === 'password') {
          this.c_placeholder = this.placeholder || '请输入密码'
        }
      },

      _checkValueValid (val) {
        // 正则判断
        if (this.regexAry[this.type]) {
          return this.regexAry[this.type].test(val)
        }

        // 长度判断（刚好是某一个长度）
        if (this.c_length > 0) {
          return val.length === this.c_length
        }

        // 最小长度判断
        if (this.c_minLength > 0) {
          return val.length >= this.c_minLength
        }
        // 其他情况
        return true
      },

      // 输入时，响应
      onInput ($evt) {
        // if ($evt.inputType === 'deleteContentBackward') {
        // }

        this.c_value = this._formatCValue(this.c_value)

        // 显示清空按钮
        this.c_closeShow = !!(this.c_value)

        // 检查脏值 及 检验
        let value = ''
        switch (this.type) {
          case 'mobile': {
            value = this.c_value && this.c_value.replace(/[^0-9]/g, '') // 去掉除数字外的多余字符
            this.c_dirty = (this.c_dirty === false && value.length === 11)
            break
          }
          case 'bank': {
            value = this.c_value && this.c_value.replace(/[^0-9]/g, '') // 去掉除数字外的多余字符
            this.c_dirty = (this.c_dirty === false && (value.length === 16 || value.length === 19))
            break
          }
          case 'email': {
            value = this.c_value
            if (this.c_dirty === false && value.length > 10) {
//              this.c_dirty = true 邮箱不做当长度够了就显示 dirty，因为邮箱很长
            }
            break
          }
          case 'idNo': {
            value = this.c_value
            this.c_dirty = (this.c_dirty === false && value.length > 15)  // 身份证最短15位
            break
          }
          case 'captcha': {
            value = this.c_value
            this.c_dirty = (this.c_dirty === false && value.length > 4) // 验证码最短4位
            break
          }

          default: {
            value = this.c_value
          }
        }

        let isValid = this._checkValueValid(value)

        // 处理
        if (isValid) {
          this.c_showError = false
          this.$emit('input', value)
        } else {
          this.c_showError = true
          this.$emit('input', '')
        }
      },

      onKeydown () {
      },

      emptyText () {
        this.c_value = ''
        this.onInput({})
      },

      onBlur () {
        this.c_dirty = !!(this.c_value)
      },

      captchaClick () {
        this.c_value = ''
        this.$emit('onCaptchaRefresh')
      }
    }
  }
</script>

<style lang="less">
  @fontZ: 16px;
  .fzs-ui-input {
    font-size: @fontZ;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    .input-input {
      position: relative;
      input {
        display: block;
        padding: 0.06rem;
        outline: none;
        border: 1px solid #eaeaea;
        width: 100% !important;
        background: transparent !important;
      }

      .input-close {
        @inp-close-width: .14rem;
        position: absolute;
        width: @inp-close-width;
        height: @inp-close-width;
        //line-height: @inp-close-width - .01rem;
        right: .04rem;
        top: 50%;
        margin-top: -@inp-close-width / 2;
        background-image: url(../../assets/FzsComp/close.png);
        background-size: 100% 100%;
      }

      .captcha-code {
        position: absolute;
        width: .72rem;
        height: 100%;
        bottom: .01rem;
        right: 0rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .input-error {
      font-size: 12px;
      text-align: left;
      color: red;
      padding: 0 0.06rem;
      &:before {
        content: '*';
      }
    }
  }
</style>

