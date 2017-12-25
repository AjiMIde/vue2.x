<template>
  <div class="fzs-captcha-btn">
    <button @click="click()" :disabled="c_disabled">{{c_text}}</button>
    <div class="fzs-captcha-btn-loading" v-show="c_isLoading">
      <span></span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      text: { // button text
        type: String,
        default: '获取验证码'
      },
      count: { // 倒数的秒数
        type: Number,
        default: 60
      },
      disabled: { // 可用状态
        type: Boolean,
        default: false,
        required: true
      }
    },

    data () {
      return {
        c_text: this.text,
        c_temp_text: '',
        c_disabled: this.disabled,
        c_isLoading: false,
        c_count: this.count || 60,
        c_interval: '',
        c_counting: false
      }
    },

    created () {
    },

    methods: {
      click () {
        this.c_isLoading = true
        this.c_disabled = true
        this.c_temp_text = this.c_text
        this.c_text = ''

        this.sendSms()
      },
      sendSms () {
        // private -s
        window.setTimeout(() => {
          let t = parseInt(Math.random() * 10)
          if (t % 2 === 0) { // 成功
            this.doSendSuccess()
          } else { // 失败
            this.doSendFail()
          }
        }, 3000)
        // private -e
      },
      doSendSuccess () {
        this.countDown()
        this.c_isLoading = false
        this.$emit('onSendSuccess')
      },
      doSendFail () {
        this.c_disabled = this.disabled
        this.c_isLoading = false
        this.c_text = this.c_temp_text
        this.$emit('onSendFail')
      },
      countDown () {
        let count = parseInt(this.c_count)
        this.c_text = count + 's'
        this.c_counting = true

        this.c_interval = setInterval(() => {
          count--
          this.c_text = count + 's'
          if (count <= 0) {
            window.clearInterval(this.c_interval)
            this.c_counting = false
            this.c_text = this.c_temp_text
            this.c_disabled = this.disabled
          }
        }, 1000)
      }
    },
    watch: {
      disabled (newV, oldV) { // 注意，这里如果写成 () => 会使得程序不正确，因为，写成 () {} 和 () => 的this 指针不一样
        if (this.c_isLoading === true || this.c_counting === true) {
          this.c_disabled = true
        } else {
          this.c_disabled = newV
        }
      }
    }
  }
</script>

<style lang="less">
  @fontZ: 16px;
  @bgColor: #01a781;
  @fontColor: #fff;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .fzs-captcha-btn {
    display: inline-block;
    /*width: 2rem;*/
    /*height: 1rem;*/
    /*height: .3rem;*/
    /*line-height:.3rem;*/
    position: relative;
    vertical-align: top;
    button {
      padding: 0 .1rem;
      min-width: .8rem;
      height: .3rem;
      line-height: .3rem;
      background: #01a781;
      border-radius: .6rem;
      color: #fff;
      /*background: transparent;*/
      border: none;
    }
    button[disabled] {
      background-color: #cecece;
      color: #4f4f4f;
    }
    .fzs-captcha-btn-loading {
      @w: .2rem;
      border-radius: 50%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      text-align: center;
      span {
        width: @w;
        height: @w;
        margin-top: .05rem;
        display: inline-block;
        animation: rotate linear 1s infinite;
        background-size: 100% 100%;
        background-image: url(../../assets/FzsComp/loading.png);
      }
    }
  }

</style>

