## Fzs UI

#### 摘要
* 讲解 Css 样式重置、管理、工具集、less/sass 提及，做样式开发指导
* 讲解 Flexible 前生今世的使用 
* Svg / Font-family 引入字体使用
* Fzs-UI 库
* 额外：FzsApi 包含的库
  * Analysis
  * Storage/Session
  * ClientService
  * FzsConfigParse
  * LanOrDev
  * UploadFile
  



## cgc ------------------------------

## Svg / Icon-font 

#### 概念、功能、使用
* base64、雪碧图都是上个世纪的东西了
* 拥抱新时间 Svg / Icon-Font 成为新潮流
* 解决了 Retina 屏的高清显示
* 解决了 图标体积问题、http 请求问题、图标管理问题
* 解决图标多颜色问题
* **优缺**
* Svg 渲染性能较差（需开启硬件加速）
* 开发成本、学习成本较高（这都不是事）
* 不兼容 Android 3.0 及以下（这都不是事），不同设备的渲染效果可能有差（趋同之）
* 体积可能小，也有可能大（复杂的，多边形、渐变类不适用）
* Icon-Font 兼容 pc/移动端，
* **使用**
* 内联使用 inlineSvg（管理困难，阅读性、复用性差）
* img/object 标签（避免不了请求过多的问题）
* dataUrl/Base64 加载（性能差，代码量多）
* SVG Sprites (通过 id 或 background-position设定)
* Svg Sprites +Png Sprites + Image-set(Svg 转字体方案)
* **参考**
* https://nucleoapp.com/
* https://icomoon.io/
* http://www.iconfont.cn
* http://fontawesome.dashgame.com/



## Fzs-UI

> [https://npm.taobao.org/package/fzs-ui](https://npm.taobao.org/package/fzs-ui)
#### 当前组件
> 包含了 7个分类 19 个组件

* ad
  * `FzsAdSwiper`
  * `FzsNoticeBar`
* diagram
  * `FzsRatio`
* dialog 
  * `Alert`
  * `Confirm `
  * `InputConfirm`
  * `Loading`
  * `PasswordConfirm`
  * `Toast`
* form  
  * `FzsAjaxBtn`
  * `FzsCheckbox `
  * `FzsCountDownBtn`
  * `FzsInput`
  * `FzsRadio`
  * `FzsSelect`
* icon
  * `FzsIcon`
* list 
  * `FzsList`
* nav  
  * `FzsNavHeader/FzsNavHeaderItem`
  * `FzsTabBtn`
  

#### UI
* `icon`
* `button`

## 公共API

#### Api详情
* `Analysis.js`广告统计接口
* `lib-flexible.js`手淘弹性布局
* `Storage.js`Session/Storage 存储 Api
* `ClientService`客户端操作：`pay/getUserInfo/getClientInfo/jumpToLogin`
* `FzsConfigParse.js`模板化文件`window.config`解码 
* `LanOrDev` 判断当前网络环境
* `UploadFile`上传文件（图片）接口



## 拥抱未来

* 提取公共、彼此交流、提高效率
* 技术储备，时刻应对，备战未知
* JQ~Ng~Vue，Gulp~Grunt~Webpack


## 其他参考 

* https://mp.weixin.qq.com/s?__biz=MzAwNDY1ODY2OQ==&mid=207863967&idx=1&sn=3d7b07d528f38e9f812e8df7df1e3322&scene=4#wechat_redirect
* https://blog.csdn.net/thingir/article/details/54630647
* https://www.w3cplus.com/svg/how-to-create-an-icon-system-using-svg-symbols.html
