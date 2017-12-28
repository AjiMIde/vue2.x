<template>
  <div class="reg-launch-win-exe">
    <div class="vux2x-document">
      <div class="para">

        <h4>概念</h4>
        <ul>
          <li>使用 reg 到注册表里注册某一个应用程序的协议</li>
          <li>使用 a 标签 在页面上唤起应用程序</li>
          <li><b>下面举一个 Tim 例子，注意指定 protocal name 跟应用程序的路径</b></li>
          <pre><code class="shell">
            Windows Registry Editor Version 5.00

            [HKEY_CLASSES_ROOT\ajiprotocoltim]
            @="ajiprotocoltim Protocol"
            "URL Protocol"=""

            [HKEY_CLASSES_ROOT\ajiprotocoltim\DefaultIcon]
            @="D:\\Program\\TIM\\Bin\\QQScLauncher.exe"

            [HKEY_CLASSES_ROOT\ajiprotocoltim\shell]
            @=""

            [HKEY_CLASSES_ROOT\ajiprotocoltim\shell\open]
            @=""

            [HKEY_CLASSES_ROOT\ajiprotocoltim\shell\open\command]
            @="\"D:\\Program\\TIM\\Bin\\QQScLauncher.exe\" "
          </code></pre>
          <li>将上面代码保存到 .reg 文件中，并运行，将信息写到注册表内</li>
          <li>写一个 a 标签，指定 <code>href</code>协议，如下：</li>
          <pre><code class="html">
            &lt;a id='protocolTim' href="ajiprotocoltim://"> Tim &lt;/a>
          </code></pre>
          <li>下面指定了几个程序，可进行一些测试</li>
          <div class="reg-exe">
            <a id='protocolTim' href="ajiprotocoltim://"> Tim </a>
            <a id='protocolWechat' href="ajiprotocalwechat://"> Wechat </a>
            <a id='protocolFoxmail' href="ajiprotocalFoxmail://"> Foxmail </a>
            <a id='protocol360' href="ajiprotocal360://"> 360 </a>
          </div>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {},
    mounted () {}
  }
</script>

<style lang="less">
  .reg-launch-win-exe {
    .reg-exe {
      a {
        display: inline-block;
        padding: 2px 8px;
      }
    }
  }

</style>
