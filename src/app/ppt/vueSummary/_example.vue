<template>
  <div class="vux2x-document example">
    <div class="title" style="font-size: 20px;text-align: center;">{{title}}</div>

    <div>
      <label for="input">QQ号码</label>
      <input type="text" id="input" v-model="QQVal">
    </div>

    <div>
      <lable>你输入的QQ号码为：</lable> {{QQVal | threeFour}}
    </div>

    <div class="list">
      <ul>
        <li v-for="item in list" @click="setPrice(item)" :class="{'checked': checked == item.value}">
          <div>{{item.title}}</div>
          <div>{{item.value}}</div>
        </li>
      </ul>
    </div>

    <div style="text-align: center;">
      <!--<button @click="submit()">提交</button>-->
      <button @click="submit()" :disabled="disabled == true">提交</button>
    </div>

  </div>
</template>

<script>
//  import XX from 'ad.vue'
  export default {
    filters: {
      threeFour (val) {
        if (!val) val = ''
        return val.substr(0, 3) + '-' + val.substr(3, 4) + '-' + val.substr(7, 4)
      }
    },
    data () {
      return {
        title: '',
        QQVal: '',
        list: [],
        checked: ''
      }
    },
    computed: {
      disabled () {
        return this.QQVal.length <= 0
      }
    },
    watch: {
      QQVal (newV, oldV) {
        if (newV.length > 10) {
          window.alert('请输入正确的QQ号码')
        }
      }
    },
    methods: {
      setPrice (item) {
        this.checked = item.value
      },
      submit () {
        window.alert(this.QQVal + '--' + this.checked)
      }
    },
    created () {
      console.log(window.m = this)
      this.title = 'QQ充值'
      this.list = [
        {title: '1Q币', value: 1},
        {title: '10Q币', value: 10},
        {title: '20Q币', value: 20},
        {title: '30Q币', value: 30},
        {title: '40Q币', value: 40}
      ]
    },
    mounted () {
      this.getData()
      console.log(window.m = this)
    }
  }
</script>

<style lang="less">
  .example {
    .list {
      ul {
        li {
          border: 1px solid #eee;
          margin: 10px;
          text-align: center;
          width: 50px;
          display: inline-block;
        }
        li.checked {
          border-color: red;
        }
      }
    }
    button[disabled] {
      color: grey;
    }
  }
</style>


