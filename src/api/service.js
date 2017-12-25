/**
 * Created by aji on 2017/10/24.
 * 公共后台接口
 * 此接口中，所有的函数使用参考以下格式:
 * service.getAds(有参传参，没参置空).then(res => {do http success}, err => {do http wrong})    return Vue.http.post(this.api, params)
 */
import Vue from 'vue'

let isDev = /(localhost:)|(127.0.0.1)|(test.)|(10.20.10.97)|(10.20.11.86)/.test(window.location.origin)
let isLan = /(localhost:)|(127.0.0.1)|(10.20.10.97)|(10.20.11.86)/.test(window.location.origin)

export default {
  isDev: isDev,
  isLan: isLan,
  smsApi: isDev ? 'http://test.login.phone580.com:8000' : 'https://login.phone580.com',        // 67  或  生产（window.location.origin）
  fzsUserApi: isDev ? 'http://test.login.phone580.com:8000' : 'https://login.phone580.com',
  tokenApi: isDev ? 'http://10.20.100.97:8093' : 'https://openapi.phone580.com',
  api: isDev ? 'http://test.pay.phone580.com:8002/p3/admin/FZS_P3_WXPUB/wxpubpayservice' : window.location.origin + '/p3/admin/wxcashier/api', // https://pay.phone580.com/p3/admin/wxcashier/api
  // api: isDev ? 'http://10.20.100.147:9070/FZS_P3_WXPUB/wxpubpayservice' : window.location.origin,

  smsKey: '', // 获取图形验证码的 key，除了用了获取，还用来验证

  templateId: isDev ? 27 : 50,           // 短信模版ID
  modelId: isDev ? 13 : 17,              // 模块ID

  serverVersion: '1.0',                // 服务器版本，固定值：1.0
  clientVersionId: '1.0',              // 客户端版本

  /**
   * 创建发出请求的参数
   * @private
   * @param subCode string 子功能编码 - 如 010
   * @param desc string 描述 - 如 店主/法人绑定
   * @param params object 发出的其他参数 {}
   * @param custId string 门店或商户id，通常用于指定订单所属的门店
   * @private
   */
  _createParams (subCode, desc, params, custId) {
    let time = '2017-11-11 11:11:11'
    let authToken = '6b11950ef5c99a3340eb46ab6d24446d'
    let param = {
      req_id: new Date().getTime() + '',  // n 标识本次请求
      machine_id: '',           // n 设备ID-填微信 OPEN_ID
      appid: 'WXPUBPAY',        // n 应用ID-填：WXPUBPAY AF2EB11B0A4DEDEA4EBFF303D8C351B1
      code: '300',              // y 功能编码
      subcode: subCode,         // y 子功能编码
      version: '1.0',           // n 服务器版本，固定值：1.0
      desc: desc,               // y 功能描述
      time: time,               // y 时间描述
      client_ver: this.clientVersionId,       // y 客户端版本
      auth_token: authToken,             // y 授权token
      params: params
    }
    if (custId) {
      param.cust_id = custId
    }
    return param
  },

  /**
   * 010 店主、法人账号绑定
   *
   * @param idNo string [y] 身份证号
   * @param phone string [y] 电话
   * @param msgNotify string [n] 是否接收消息：Y=接收 N=否默认不接收
   * @param custId string [Y] 商户ID（字符串），多个以逗号分隔
   */
  bindLegalPerson (idNo, phone, msgNotify = false, custID) {
    let params = this._createParams('010', '店主/法人绑定', {
      ID_NO: idNo,
      PHONE: phone,
      MSG_NOTIFY: msgNotify,
      CUST_ID: custID
    })
    return Vue.http.post(this.api, params)
  },

  /**
   * 011 提供用户自已设置“是否接收消息通知”的功能，法人、管理员、收银员均有权限设置自己是否接收消息通知
   * @param msgNotify boolean 是否接收消息
   */
  changeNotifyMsg (msgNotify) {
    let params = this._createParams('011', '消息通知修改', {
      msg_notify: msgNotify ? 'Y' : 'N'       // Y=接收 N=否默认不接收
    })
    return Vue.http.post(this.api, params)
  },

  /**
   * 020 用于设置绑定信息时查询相关的商户或门店信息，供前端展示配置用
   * @param queryType string [y] LEGAL_BIND =法人绑定查询 LEGAL_ADD_BIND = 法人增加绑定商户查询 ALL=查出当前用户可绑定的所有商户、门店 USER=查出当前用户已绑定的所有商户、门店 CASHIER=查出当前用户可收银的门店
   * @param legalIdNo string [n] 法人身份证号，当 queryType 参数为 LEGAL_BIND 时必填
   * @param userMobile string [n] 法人手机号，当 queryType 参数为 LEGAL_BIND 时必填
   * @param userId string [n] 修改用户信息时，该用户的ID，当 queryType 参数为 USER 时必填
   * @returns data: [customerId 商户ID, CUSTOMER_NAME    商户名称]
   */
  getStoreList (queryType, legalIdNo = '', userMobile = '', userId = '') {
    if (queryType === 'LEGAL_BIND' && (!!legalIdNo === false || !!userMobile === false)) {
      console.error('参数错误，请检查')
    }
    if (queryType === 'USER' && !!userId === false) {
      console.error('参数错误，' + '缺少参数')
    }

    let params = this._createParams('020', '商户/门店列表', {
      query_type: queryType,
      legal_id_no: legalIdNo,
      user_mobile: userMobile,
      user_id: userId
    })
    return Vue.http.post(this.api, params)
  },

  /**
   * 021-增加商户绑定  用于法人增加商户绑定。调用此接口前需要用 020-商户/门店列表（query_type=LEGAL_ADD_BIND）查询可增加绑定的商户列表
   *
   * @param loginPsw string 当前用户登录密码
   * @param merchantList array 商户id，JSONARRAY [{row1},{row2}]
   */
  addMoreMerchantBind (loginPsw, merchantList) {
    let params = this._createParams('021', '增加商户绑定', {
      login_password: loginPsw,
      merchant_list: merchantList
    })
    return Vue.http.post(this.api, params)
  },

  /**
   * 032-用户信息查询
   * 查询登录的用户账户信息，判断当前用户是否绑定了收银账户，没有则需要先调用010-店主/法人绑定 或者 由管理员操作 031-保存用户。
   */
  checkUserInfo () {
    let params = this._createParams('032', '用户信息查询', {})
    return Vue.http.post(this.api, params)
  },

  /**
   *  030 用于查询当前账号新增的管理员、收银员列表。
   *  @returns data: [USER_ID    用户ID USER_LOGIN_NAME    登录账号 USER_NAME    用户名 USER_MOBILE    手机 USER_ROLE    角色]
   */
  getManagerAndCashier () {
    let params = this._createParams('030', '用户列表', {})
    return Vue.http.post(this.api, params)
  },

  /**
   * 031-保存用户用于增加或修改管理员或收银员
   *
   * @param userId string N 用户id 当添加时，userId为空，否则为修改的用户的 id
   * @param loginPassword  string Y 当前管理员的 password
   * @param newMobile string Y 添加的用户的 手机
   * @param newName string N 用户名称
   * @param newPass string Y/N 新增时必填，维护时不填
   * @param unBindKey string Y/N 新增、维护收银员时，如果要解绑该用户之前绑定的商户。需要传递此MD5值。计算规则:md5（user_mobile+‘-’+user_name+‘-’+role_name+‘-’+商户cust_id）
   * @param newRoleName string Y ADMIN/CASHIER
   * @param newStatus string N ON/OFF 启用状态，默认ON
   * @param merchantList array N [{cust_id},{}]
   * @param shopList array N [{cust_id},{}]
   */
  saveUser (userId, loginPassword, newMobile, newName, newPass, unBindKey, newRoleName, newStatus, merchantList, shopList) {
    let params = this._createParams('031', '保存用户', {
      id: userId,                           // N 当前管理员的 id
      login_password: loginPassword,
      user_mobile: newMobile,
      user_name: newName || '',
      password: newPass,
      unbind_key: unBindKey || '',
      role_name: newRoleName,
      status: newStatus || 'ON',
      merchant_list: merchantList || [],
      shop_list: shopList || []
    })
    return Vue.http.post(this.api, params)
  },

  /**
   * 用于去除用户与商户之间的绑定关系，主要用于人员离职。
   * @param idNo string
   * @param phone string
   * @param captcha string
   */
  delUser (idNo, phone, captcha) {
    let params = this._createParams('032xxxx', '删除用户', {
      idNo: idNo,
      PHONE: phone,
      CAPTCHA: captcha
    })
    return Vue.http.post(this.api, params)
  },

  /**
   * 用于去除用户与商户之间的绑定关系，主要用于人员离职，可自我解绑，也可用于加入其它商户时，使用短信验证码解绑。
   * @param password string
   * @param userIdList array 批量解绑的用户user_id JSONARRAY [{row1},{row2}]
   */
  unBind (password, userIdList) {
    let params = this._createParams('033', '解绑', {
      login_password: password,
      user_id_list: userIdList
    })
    return Vue.http.post(this.api, params)
  },

  /**
   * 支付宝分期查询
   * @param {String} amount Y 金额 单位 元 最多两位小数 转为String
   * @param {String} merchantFee Y 商家承担手续费比例 0或100，应该是后台配置的
   */
  queryAlipayStaging (amount, merchantFee, custId) {
    let params = this._createParams('111', '分期查询', {
      total_amount: amount + '',
      amount_unit: '元',
      merchant_fee: merchantFee || ''
    }, custId)
    console.log(JSON.stringify(params))
    return Vue.http.post(this.api, params)
  },

  /**
   * @param qrcode        Y 付款码扫描结果
   * @param payType       Y 支付类型： WXPAY=微信 ALIPAY=支付宝 UMPAY=银联
   * @param amount        Y 金额，单位：元，最多小数点后2位
   * @param {Object} otherInfo N 其它字段信息
   * @returns
   */
  businessScanQR (qrcode, payType, amount, otherInfo, custId) {
    let datas = {
      user_qr_code: qrcode,
      pay_type: payType,
      total_amount: '' + amount,
      amount_unit: '元'    // Y 金额单位：固定值：元
    }
    if (otherInfo) {
      datas.other_info = otherInfo
    }
    let params = this._createParams('100', '商户扫码收银', datas, custId)
    return Vue.http.post(this.api, params)
  },

  // 108 【正扫】客户扫码收银
  consumerScanQR () {
  },

  /**
   * 108 预下单接口（一码付、水牌、H5、银联、建行）
   * @param {*} amount Y 金额，单位：元，最多小数点后2位
   * @param {*} payType  N 支付方式，当不在微信、支付宝中打开时必填
   H5-WXPAY：微信H5支付(默认)
   H5-ALIPAY：支付宝H5支付
   UMPAY：银联（POS机预下单）
   H5-CCB：建行APP内置H5支付
   H5-WEBANK：微众银行H5支付
   ALI-CREDIT-INSTALLMENT=花呗分期
   * @param {Object} otherInfo N 其它字段信息
   */
  preOrder (amount, payType, otherInfo, custId) {
    let url = window.location.origin + window.location.pathname
    let datas = {
      paymethod: payType,
      total_amount: '' + amount,
      // return_url: url + 'return.html',
      error_url: url + 'error.html',
      amount_unit: '元'    // Y 金额单位：固定值：元
    }
    if (otherInfo) {
      datas.other_info = otherInfo
    }
    let params = this._createParams('108', '预下单一码付', datas, custId)
    console.log(JSON.stringify(params))
    return Vue.http.post(this.api, params)
  },

  /**
   * 102 获取订单详情（结果）
   * 返回结果：outparams--pay_result:
   *
   * USER_PAYOK=成功 USER_PAYERR=失败
   * USER_PAYING=正在支付(此种状态，需提示操作员，程序自动或由操作员发起查询订单结果)
   * USER_CANCLED=当日订单已经撤销，需有对应的撤销单，且撤销成功。
   * PRE-AUTH=预授权
   * PRE-AUTH-OK=预授权完成
   * PRE-AUTH-CANCEL=预授权撤销
   * PRE-AUTH-OK-CANCEL=预授权完成撤销
   *
   * @param orderNo         Y 订单号
   * @param orderDate       N 订单日期 银联订单为保证唯一，建议传此字段，否则可能会有错误
   * @param payOrderId      N 订单ID 银联订单为保证唯一，建议传此字段，否则可能会有错误
   */
  getOrderDetail (orderNo, orderDate = '', payOrderId = '', custId) {
    let params = this._createParams('102', '订单详情', {
      order_no: orderNo,         // y 订单号(String(32))
      order_date: orderDate,     // n 订单日期(2017-03-04)与订单号一起使用
      pay_order_id: payOrderId   // n 支付订单ID
    }, custId)
    return Vue.http.post(this.api, params, {
      params: {
        noLoading: true
      }
    })
  },

  /**
   * 200 获取订单列表
   * 返回：
   * total_row_count  总记录数
   * total_amount     收款总金额
   * total_refund     退款总金额
   * data             订单列表
   *
   * @param type        N string 不填则默认全部，可多选，用逗号分隔，['WXPAY', 'ALIPAY', 'UMPAY',]
   * @param result      N string 不填表示全部，可多选，用逗号分隔，[USER_PAYOK, USER_PAYERR, USER_PAYING, SETTLE_CONFIRMED, USER_CANCLED, PRE-AUTH, PRE-AUTH-OK, PRE-AUTH-CANCEL, PRE-AUTH-OK-CANCEL]
   * @param mode        N string 不填表示全部，可多选，用逗号分隔，[FZS_PUBLIC_MS_ZHENG 民生微信扫码支付--“商家扫”，FZS_PUBLIC_MS_BEI 民生微信刷卡支付--“客户扫”]
   * @param dateStart        N 开始时间，['YYYY-MM-DD']
   * @param dateEnd        N 结束时间，['YYYY-MM-DD']
   * @param no          N 页码，默认第一页 1,2,3,...
   * @param size        N 页记录数据：默认50
   * @param custId        N 门店id
   * @returns {*}
   */
  getOrderList (type, result, mode, dateStart, dateEnd, no, size, custId) {
    let params = this._createParams('040', '订单列表', {
      pay_type: type,
      pay_result: result,
      pay_mode: mode,
      pay_date_start: dateStart,
      pay_date_end: dateEnd,
      page_no: no,
      page_size: size,
      cust_id: custId || ''
    })
    console.log(JSON.stringify(params))
    return Vue.http.post(this.api, params, {
      params: {
        noLoading: true
      }
    })
  },

  /**
   * 103 退款操作
   *
   * result SUCCESS/ERROR
   * result_desc
   * result_error_code
   * refund_state 退款结果：
   * --REFUND_PROCESSING退款处理中
   * --REFUND_ERROR退款失败
   * --REFUND_SUCCESS退款成功
   * --refund_state_desc 退款结果说明:详细列明进度及说明，特别是退款中的详细进度
   *
   * @param orderNo
   * @param orderDate
   * @param totalAmount
   * @param pwd
   * @param custId
   * @returns {*} $http
   */
  refundOrder (orderNo, orderDate, totalAmount, pwd, custId) {
    let params = this._createParams('103', '退款申请', {
      refund_pwd: pwd || '',     // n 退款密码（ 外放收款密码规范 ）
      pay_order_id: '',          // n 支付订单ID
      order_no: orderNo,         // y 订单号(String(32))
      order_date: orderDate,     // y 订单日期(2017-03-04)与订单号一起使用
      order_title: '',   // y 订单标题/内容
      total_amount: totalAmount, // y 订单金额，单位：元，最多小数点后2位
      refund_amount: totalAmount, // Y 退款金额，单位：元，最多小数点后2位 可部分退款，当全额退款时=total_amount
      amount_unit: '元',         // y 金额单位：固定值：元。
      notify_url: '',     // y 异步通知地址String(256)
      return_url: '',            // n 调用成功页面地址String(256)
      error_url: ''              // n 未支付页面地址String(256)
    }, custId)
    return Vue.http.post(this.api, params)
  },

  // 110 退款结果查询
  tkcx () {
  },

  /**
   * 额外，获取一个图形验证码
   * @returns url 返回 url:string 图形验证码
   */
  getCaptcha () {
    this.smsKey = '2011-11-11' + Math.round(Math.random() * 1000000000000000000)
    return this.smsApi + '/fzscaptchaapi/captcah/captcah.jpg?key=' + this.smsKey
  },

  /**
   * 额外：验证 图形验证码，并发送手机短信验证码
   * @param phone
   * @param code 图形验证码数值
   * @param type string   'submit' 下单，'check' 查询，默认 check
   * @returns {*|string|V}
   */
  getSMSCode (phone, code, type = 'check') {
    let url = this.smsApi + '/fzscommapi/sms/smsverify'

    let params = {
      phonenum: phone,
      key: this.smsKey,                // 图形验证码标志
      valiCode: code,                  // 图形验证码
      templateid: this.templateId,     // 短信模版ID
      modelid: this.modelId            // 模块ID
    }
    // return Vue.http.post(url, params)
    return Vue.http.get(url, {params: params})
  },

  /**
   * 12 对现有的蜂助手用户，绑定微信的用户ID，反馈页面authtoken
   * @param wxUid Y string 微信系统的Uid
   * @param wxCode Y string 微信用户系统校验的code
   * @param staffCode Y string 账号
   * @param password Y string
   * @param changeBind N 是否切换该账号与微信号的绑定，用于，当一个账号已经绑定了一个微信号时，此时变更 账号--微信号 的绑定，取值  1/0
   * @result: {success: bool, message: string, code: string/number, valueObject{authToken: 'string', fOperUserId: 'string 蜂助手的用户ID', wxUid: string, mobile}}
   * @returns vue http
   */
  wxUserLogin (wxUid, wxCode, staffCode, password, changeBind = '0') {
    let url = this.fzsUserApi + '/fzsuserapi/wxuser/login'
    let params = {
      wxUid: wxUid,
      wxCode: wxCode,
      staffCode: staffCode,
      password: password,
      changeBind: '' + changeBind
    }
    // return Vue.http.get(url, {params: params})
    return Vue.http.post(url, params)
  },

  /**
   * 13 新注册一个蜂助手用户，并绑定上微信用户ID。。。该接口需要和短信验证码接口一起使用
   * @param wxUid Y string 微信系统的Uid
   * @param wxCode Y string 微信用户系统校验的code
   * @param staffCode Y string 账号
   * @param password Y string
   * @param smsToken Y string 短信验证码formData string
   * @param registerFrom Y string 注册来源f
   * @param clientVersionId Y string 客户端版本IDformData string
   * @param channelId N string 渠道id
   * @result: {success: bool, message: string, code: string/number, valueObject{authToken: 'string', fOperUserId: 'string 蜂助手的用户ID', wxUid: string, mobile}}
   * @returns {*}
   */
  wxUserRegister (wxUid, wxCode, staffCode, password, smsToken, registerFrom = 'WXPUBPAY_SYSTEM', clientVersionId = 'V1.0', channelId = 'FZS_WXPAY') {
    let url = this.fzsUserApi + '/fzsuserapi/wxuser/register'
    let params = {
      wxUid: wxUid,
      wxCode: wxCode,
      staffCode: staffCode,
      password: password,
      smsToken: smsToken,
      registerFrom: registerFrom,
      clientVersionId: clientVersionId,
      modelid: this.modelId,
      templateid: this.templateId,
      channelId: channelId
    }
    return Vue.http.post(url, params)
  },

  /**
   * 14 在微信公众号里面，找回密码时候，完成登陆和绑定微信用户ID操作。。。该接口需要和短信验证码接口一起使用
   * @param wxUid Y string 微信系统的Uid
   * @param wxCode Y string 微信用户系统校验的code
   * @param staffCode Y string 账号
   * @param password Y string
   * @param smsToken Y string 短信验证码formData string
   * @param clientVersionId Y string 客户端版本IDformData string
   * @result: {success: bool, message: string, code: string/number, valueObject{authToken: 'string', fOperUserId: 'string 蜂助手的用户ID', wxUid: string, mobile}}
   * @returns {*}
   */
  changePswBySms (wxUid, wxCode, staffCode, password, smsToken, clientVersionId) {
    let url = this.fzsUserApi + '/fzsuserapi/wxuser/changepswbysms'
    let params = {
      wxUid: wxUid,
      wxCode: wxCode,
      staffCode: staffCode,
      password: password,
      smsToken: smsToken,
      clientVersionId: clientVersionId,
      modelid: this.modelId,
      templateid: this.templateId
    }
    return Vue.http.post(url, params)
  },

  /**
   * 额外 - 17-11-29 新增，根据一个有时效的、只能用一次的 code 获取用户的 token/mobile/unionId 等信息
   * @param code string Y wx code
   * @param unionId string Y union id
   * @param authTokenTicket string Y 有时效的，只能用一次的 ticket，在跳转地址上 url 上获取
   * @returns vHttp
   */
  getWxUserInfoWithCode (code, unionId, authTokenTicket) {
    let url = this.tokenApi + '/wechat/openapi/getAuthTokenByTicket'
    let params = {
      code: code,
      unionId: unionId,
      authTokenTicket: authTokenTicket
    }
    return Vue.http.post(url, params)
  },
  test () {
    // this.bindLegalPerson(444444444444, 132222222222, 2222, 'Y').then()
    // this.changeNotifyMsg('Y').then()
    // this.getStoreList('1111111')
    this.temp = 'aji'
  }
}
