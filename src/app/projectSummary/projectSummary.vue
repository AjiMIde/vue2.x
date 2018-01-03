<template>
  <div class="vux2x-document">
    <ul>
      <li v-for="item in stuff">
        <h4>{{item.value}}</h4>
        <div class="para">
          <router-link :to="'' + item.name + ''">
            {{item.desc}}
          </router-link>
        </div>
      </li>
    </ul>
    <!--<video-v1></video-v1>-->
  </div>
</template>
<script>
  import videoV1 from './projects/videoV1.vue'

  export default {
    components: {
      videoV1
    },
    data () {
      return {
        stuff: []
      }
    },
    methods: {
      markSelect ($e) {
        let target = $e.target
        let selection = window.getSelection()
        selection.selectAllChildren(target)
      }
    },
    mounted () {
      this.stuff.push({name: 'wechat-pay', value: '微信公众号支付', desc: '微信公众号支付、支持微信、支付宝、花呗支付、微信接口调用、统一登录凭据获取、条形码、二维码扫描'})
      this.stuff.push({name: 'pos', value: 'POS机（支付项目，Vue/Vux）', desc: 'pos机内置页面。Vue集合项目，拥有多个工具插件，加密方式，App调用接口等'})
      this.stuff.push({name: 'video-v1', value: '影视会员（模板化）', desc: 'App底层调用接口、友盟统计接口、新订单系统接口'})
      this.stuff.push({name: 'ups-vue', value: '手机回收2.0（模板化）', desc: '模板化功能、手机发送验证码接口、页面固定布局、checkbox使用'})
      this.stuff.push({name: 'mifi', value: 'MIFI 上网卡（Angular1）', desc: 'Angular 1.x、新订单系统接口使用、支付方式使用'})
      this.stuff.push({name: 'flow-h5', value: '流量 H5 赠送（Angular1）', desc: '流量H5 赠送、洛菲克、宇杰等'})
      this.stuff.push({name: 'life-charge', value: '充值中心（游戏、礼品、加油卡、QQ、影视会员）', desc: 'Angular1 老项目'})
    }
  }
</script>
<style lang="less"></style>
