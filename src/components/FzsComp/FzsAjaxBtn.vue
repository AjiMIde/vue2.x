<template>
  <div class="fzs-ajax-btn">
    <button @click="click()" :disabled="c_disabled">
      <slot></slot>
    </button>
    <div class="fzs-ajax-btn-loading" v-show="c_loading">
      <span></span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      disabled: { // 可用状态
        type: Boolean,
        default: false,
        required: true
      },
      loading: { // 按钮显示 loading 状态
        type: String,
        default: false,
        required: true
      }
    },

    data () {
      return {
        c_disabled: this.disabled,
        c_loading: this.loading
      }
    },

    created () {
    },

    methods: {
      click () {
        this.c_loading = true
        this.c_disabled = true

        this.$emit('onClick')
      }
    },
    watch: {
      disabled (newV, oldV) { // 注意，这里如果写成 () => 会使得程序不正确，因为，写成 () {} 和 () => 的this 指针不一样
        if (this.c_loading === true) {
          this.c_disabled = true
        } else {
          this.c_disabled = newV
        }
      },
      loading (newV, oldV) { // 注意，这里如果写成 () => 会使得程序不正确，因为，写成 () {} 和 () => 的this 指针不一样
        this.c_loading = false
        this.c_disabled = this.disabled
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

  .fzs-ajax-btn {
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
    .fzs-ajax-btn-loading {
      @w: .2rem;
      border-radius: 50%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      background-color: #cecece;
      span {
        margin-top: .05rem;
        display: inline-block;
        width: @w;
        height: @w;
        background-size: 100% 100%;
        animation: rotate linear 1s infinite;
        background-image: url(../../assets/FzsComp/loading.png);
      }
    }
  }

</style>

