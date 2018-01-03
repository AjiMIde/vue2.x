<template>
  <div class="vux2x-document">
    <h2>影视会员（模板化）</h2>

    <h4>涉及到 App 调用底层接口:</h4>
    <div class="para">
      <ul>
        <li>获取用户信息 <code>phoneNum/token/userBirthday/userNickName/userSex/shareMode/userID</code></li>
        <li>
          获取客户端 App 信息 <code>clientVersionId/clientVersionNo/packageName/versionName/versionNum/API_SERVICE_VERSION/BRAND_CODE</code>
        </li>
        <li>控制跳转 App 内原生登录</li>
        <li>微信支付与支付宝支付（需与后台交互，使用payMethod/payStr(一串md5类型的字符串)</li>
      </ul>
    </div>

    <h4>友盟统计接口</h4>
    <div class="para">
      <ul>
        <li><code>umAnalysisInit</code> 友盟统计初使化，即 web 页面访问统计</li>
        <li><code>umEventPush</code> 友盟统计事件，更细致的统计工作</li>
      </ul>
    </div>

    <h4>新订单系统接口</h4>
    <div class="para">
      <ul>
        <li>包括如下单、订单查询等新订单系统新接口</li>
      </ul>
    </div>

    <h4>文档</h4>
    <div class="para">
      <ul @click="markSelect($event)">
        <li><code>F:\580\Project\影视会员\蜂云电话(iOS)JS交互统一接口文档.pdf</code></li>
        <li><code>F:\580\Project\影视会员\FZSSJ-Android\10-技术方案\蜂助手（Android)JS交互统一接口文档 .pdf</code></li>
      </ul>
    </div>

    <h4>项目</h4>
    <div class="para">
      <ul @click="markSelect($event)">
        <li><code>F:\580\前端开发\project\branches\life-service\template\video-v1.0</code></li>
        <li><code>https://10.20.1.30/svn/前端开发/project/branches/life-service/template/video-v1</code></li>
      </ul>
    </div>

  </div>
</template>
