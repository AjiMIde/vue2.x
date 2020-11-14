$(function(){
	/******************************按钮事件******************************/
	// 查询事件
	$('#querytime').click(function(){
		var begintime = $(".begintime").val();
		var endtime = $(".endtime").val();
		var date1 = new Date(begintime);
		var date2 = new Date(endtime);
		if (Date.parse(date1) > Date.parse(date2)){
			Boxy.tip('结束时间不能大于起始时间',function(){},{iserror: true});
			return;
		}
		
		$("input[name='start_time']").val(begintime);
		$("input[name='end_time']").val(endtime);
		
		setSelectDeviceTab("消费明细");//设置设备分类Tab选中项
		queryTotalConsume("");//查询所有设备的消费明细总数
		queryConsumeList("", 0, 1);//查询所有设备的消费明细第1页
	});
	
	/*
	//转账事件
	$("#btn_box_charge_ll").click(function(){
		Boxy.tip('此功能尚未开通',function(){},{iserror: true});
	});
	*/
	
	//支付宝事件
	$("#btn_box_zfb").click(function(){
		Boxy.tip('此功能尚未开通',function(){},{iserror: true});
	});

	//冲流量、充值、一卡通转账
	$('.box_btn_bind').click(function(){
		var box = Boxy.ask($("#changesuc").html(), ['确认', '取消'], function(r){	
			if (r == '确认'){
				change_user_balance();
			}else{
			}
		},{
			titleicon: 'icon-icon_currency',
			title: '流量卡',
			modal: true,
			closeable: true,
			bottom: [{
				id: 'zhuanzhang_radio',
				title: '一卡通转账'
			},{
				id: 'chongzhi_radio',
				title: '充值卡'
			},{
				id: 'chongll_radio',
				title: '流量卡'
			}]
		});
		
		function change_user_balance(){
			if ('type-ykt' == that.attr('data-type')){
				var card_money = box.getContent().find("#money_slide").slider('value');
				$.ajax({
					type:'POST',
					url: 'change_user_balance.php',
					data : 'card_money='+card_money,
					dataType: 'json',
					error : function(json) {
						Boxy.tip('一卡通转账异常，请重新操作！',function(){},{iserror: true});
					},
					success : function(json) {
						if(json.result == 'error'){
							Boxy.tip(json.msg,function(){},{iserror: true});
							setTimeout(function(){
								window.location = json.reback_url;
							}, 2000);
						}
						else if(json.result == 'fail'){
							Boxy.tip(json.msg,function(){},{iserror: true});
						}
						else if('ok' == json.result){
							Boxy.tip(json.msg);
							initTime();//初始化查询时间
							queryUserInfo();//查询账户信息
							setSelectDeviceTab("充值明细");//设置设备分类Tab选中项
							queryTotalBilling();//查询所有设备的充值明细总数
							queryBillingList(0, 1);//查询所有设备的充值明细第1页
						}
					}
				});
			}
			else if('type-czk' == that.attr('data-type')){
				var ka_card_num = box.getContent().find('input.chonginput').val();
				//alert("ka_card_num:"+ka_card_num);
				var ka_passwd = box.getContent().find('input.cardinput').val();
				//alert("ka_passwd:"+ka_passwd);
				if(ka_card_num == '' || ka_card_num  == box.getContent().find("input.chonginput").attr("placeholder")){
					Boxy.tip('请输入充值卡号',function(){},{iserror: true});
					return false;
				}
				if(ka_passwd == '' || ka_passwd  == box.getContent().find("input.cardinput").attr("placeholder")){
					Boxy.tip('请输入充值卡密码',function(){},{iserror: true});
					return false;
				}
				$.ajax({
					type:'POST',
					url: 'recharge_user_balance.php',
					data : 'ka_card_num='+ka_card_num+'&ka_passwd='+ka_passwd,
					dataType: 'json',
					error : function(json) {
						Boxy.tip('充值卡充值异常，请重新操作！',function(){},{iserror: true});
					},
					success : function(json) {
						if(json.result == 'error'){
							Boxy.tip(json.msg,function(){},{iserror: true});
							setTimeout(function(){
								window.location = json.reback_url;
							}, 2000);
						}
						else if(json.result == 'fail'){
							Boxy.tip(json.msg,function(){},{iserror: true});
						}
						else if(json.result == 'ok'){
							Boxy.tip(json.msg);
							initTime();//初始化查询时间
							queryUserInfo();//查询账户信息
							setSelectDeviceTab("充值明细");//设置设备分类Tab选中项
							queryTotalBilling();//查询所有设备的充值明细总数
							queryBillingList(0, 1);//查询所有设备的充值明细第1页
						}
					}
				});
			}
			else if('type-llk' == that.attr('data-type')){
				var ka_card_num = box.getContent().find('input.chonginput').val();
				var ka_passwd = box.getContent().find('input.cardinput').val();
				if(ka_card_num == '' || ka_card_num  == box.getContent().find("input.chonginput").attr("placeholder")){
					Boxy.tip('请输入流量卡号',function(){},{iserror: true});
					return false;
				}
				if(ka_passwd == '' || ka_passwd  == box.getContent().find("input.cardinput").attr("placeholder")){
					Boxy.tip('请输入流量卡密码',function(){},{iserror: true});
					return false;
				}
				$.ajax({
					type:'POST',
					url: 'recharge_user_bytes.php',
					data : 'ka_card_num='+ka_card_num+'&ka_passwd='+ka_passwd,
					dataType: 'json',
					error : function(json) {
						Boxy.tip('流量卡充值异常，请重新操作！',function(){},{iserror: true});
					},
					success : function(json) {
						if(json.result == 'error'){
							Boxy.tip(json.msg,function(){},{iserror: true});
							setTimeout(function(){
								window.location = json.reback_url;
							}, 2000);
						}
						else if(json.result == 'fail'){
							Boxy.tip(json.msg,function(){},{iserror: true});
						}
						else if(json.result == 'ok'){
							Boxy.tip(json.msg);
							initTime();//初始化查询时间
							queryUserInfo();//查询账户信息
							setSelectDeviceTab("充值明细");//设置设备分类Tab选中项
							queryTotalBilling();//查询所有设备的充值明细总数
							queryBillingList(0, 1);//查询所有设备的充值明细第1页
						}
					}
				});
			}
		}
		
		var that = box.getContent();
		$("#chongll_radio").on('click', function(){
			$("#panel_ykt", that).hide();
			$("#panel_cls", that).show();
			that.attr('data-type', 'type-llk');
			box.setTitle('流量卡');
			box.getContent().find(".chonginput").attr('placeholder', '请输入流量卡号').attr("data-type", 'chongll');
			box.getContent().find(".cord_bg").removeClass("d");
			$(".boxy_title_i").addClass('icon-droplet').removeClass('icon-icon_creditcard').removeClass('icon-icon_currency');
			
			if(!isPlaceholder()) {
				box.getContent().find(".chonginput").val('请输入流量卡号');
				//box.getContent().find(".chonginput").css('color', '#A9A9A9');
				//box.getContent().find(".chonginput").css('line-height', '25px');
			}
		});

		$("#chongzhi_radio").on('click', function(){
			$("#panel_ykt", that).hide();
			$("#panel_cls", that).show();
			that.attr('data-type', 'type-czk');
			box.setTitle('充值卡');
			box.getContent().find(".chonginput").attr('placeholder', '请输入充值卡号').attr("data-type", 'chongzhi');
			$(".boxy_title_i").removeClass('icon-droplet').removeClass('icon-icon_creditcard').addClass('icon-icon_currency');
			box.getContent().find(".cord_bg").addClass("d");
		
			if(!isPlaceholder()) {
				box.getContent().find(".chonginput").val('请输入充值卡号');
				//box.getContent().find(".chonginput").css('color', '#A9A9A9');
				//box.getContent().find(".chonginput").css('line-height', '25px');
			}
		});
		
		$("#zhuanzhang_radio").on('click', function(){
			$("#panel_ykt", that).show();
			$("#panel_cls", that).hide();
			that.attr('data-type', 'type-ykt');
			box.setTitle('一卡通转账');
			$(".boxy_title_i").addClass('icon-icon_creditcard').removeClass('icon-droplet').removeClass('icon-icon_currency');
		});
		
		box.getContent().find("#money_slide").slider({
			animate: true,//是否在拖动滑块时执行动画效果
			range: "min",
			value: 0,//滑动条的当前值
			min: 0,//滑动条的最小值
			max: 100,//滑动条的最大值
			stop: function(event, ui){
				box.getContent().find('#moneycount').text(ui.value);
			}
		});

		box.getContent().find('#moneycount').text(box.getContent().find("#money_slide").slider('value'));
		var btnid = $(this).attr('id');
		if (btnid == 'btn_box_llk')
			$("#chongll_radio").trigger('click');
		else if (btnid == 'btn_box_czk')
			$("#chongzhi_radio").trigger('click');
		else
			$("#zhuanzhang_radio").trigger('click');
		
		replacePlaceholder();
	});
	
	//消费保护事件
	$('#btn_box_protect_ll').click(function(){
		var box = Boxy.ask($("#llprotect").html(), ['确认', '取消'], function(r){
			var protect_money = box.getContent().find("#liuliang_slide").slider('value');
			var is_open_iext2_obj = $("#sfqy_llbh");
			var protect_flag = 1;
			
			if(!is_open_iext2_obj.is(':checked')){
				protect_flag = 0;
			}
			//alert("protect_flag:"+protect_flag);
			if (r == '确认') {
				$.ajax({
					type:'POST',
					url: 'consume_protect.php',
					data : 'protect_flag='+protect_flag+'&protect_money='+protect_money,
					dataType: 'json',
					error : function(json) {
						Boxy.tip('修改消费保护异常，请重新操作！',function(){},{iserror: true});
					},
					success : function(json) {
						if(json.result == 'error'){
							Boxy.tip(json.msg,function(){},{iserror: true});
							setTimeout(function(){
								window.location = json.reback_url;
							}, 2000);
						}
						else if(json.result == 'fail'){
							Boxy.tip(json.msg,function(){},{iserror: true});
						}
						else if(json.result == 'ok'){
							Boxy.tip(json.msg);
							queryUserInfo();//查询账户信息
						}
					}
				});
			}else{
			}
		},{
			titleicon: 'icon-icon_lock_alt',
			title: '消费保护',
			modal: true,
			closeable: true
		});
		
		box.getContent().find("#liuliang_slide").slider({
			range: "min",
			value: protect_value,
			min:0,
			max: balance_value,
			slide: function(event, ui){
				box.getContent().find('#liuliangcount').text(ui.value+'元');
			}
		});
		
		//是否启用
		var bt = box.getContent().find(".answers");
	
		bt.prepend("<p class='pull-left x_foot_left'><input style='margin-top:-2px' type='checkbox' checked='checked' id='sfqy_llbh'>启用</p>");
		box.getContent().find('#liuliangcount').text(box.getContent().find("#liuliang_slide").slider('value')+'元');
		if(curr_protect_flag == 1){
			$("#sfqy_llbh").attr("checked", true);	
		}
		else{
			$("#sfqy_llbh").attr("checked", false);	
		}
	});

//	//注销事件
//	$("#yclose").click(function(){
//		alert("注销按钮禁闭5秒");
//		$(this).removeAttr("onclick");//去掉a标签中的onclick事件
//		setTimeout(function(){
//			alert("注销按钮打开");
//			$("#yclose").attr("onclick","getOnlineList();");
//		},3000)
//	});
	
	//邮箱单点登录事件
	$("#singleSignOn").click(function(){
		$.ajax({
			type: 'get',
			url: 'single_sign_on.php',
			dataType: 'json',
			error : function(json) {
				Boxy.tip('邮箱单点登录异常，请重新操作！',function(){},{iserror: true});
			},
			success: function (json) {
				if(json.result == 'error'){
					Boxy.tip(json.msg,function(){},{iserror: true});
					setTimeout(function(){
						window.location = json.reback_url;
					}, 2000);
				}
				else if(json.result == 'fail'){
					Boxy.tip(json.msg,function(){},{iserror: true});
				}
				else if(json.result == 'ok'){
					//window.location = json.reback_url;
					window.open(json.reback_url,'_blank')
				}
			}
		});
	});
	
	/******************************日历函数******************************/
	$.fn.datetimepicker.dates['en'] = {
			days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
			daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
			daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
			months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			today: "今日",
			suffix: [],
			meridiem: ["上午", "下午"]
	};

	$(".begintime").datetimepicker({
		format: 'yyyy-mm-dd hh:ii'
	});

	$(".endtime").datetimepicker({
		format: 'yyyy-mm-dd hh:ii'
	});
	
	initData();
});

/******************************临时业务数据******************************/
var balance_value = 100;//消费保护时进度条最大使用值

var protect_value = 0;//消费保护时进度条当前使用值

var curr_protect_flag = 1;//当前消费保护标志

var page_size = 5;//分页显示记录数

var max_select_page = 5;//最大显示分页数

var page_index = 1;//当前分页

var total_record_num = 0;//记录总数

/******************************业务函数******************************/
//重置默认查询时间(起始时间为本月1号，结束时间为当前时间)
function initTime(){
	var datenow = new Date();
	var nowYear = datenow.getYear(); //当前年
	nowYear += (nowYear < 2000) ? 1900 : 0; //
	var nowMonth = datenow.getMonth(); //当前月
	var nowDay = datenow.getDate(); //当前日
	var start_time = getCurentTime(new Date(nowYear, nowMonth, 1));
	//start_time = "2014-12-01 00:00";
	var end_time = getCurentTime(datenow);
	$('.begintime').val(start_time);
	$('.endtime').val(end_time);
	
	$("input[name='start_time']").val(start_time);
	$("input[name='end_time']").val(end_time);
}

//初始化数据
function initData(){
	initTime();//初始化查询时间
	
	queryUserInfo();//查询账户信息
	queryUserDevice();//查询用户设备
	
	queryUnreadMail();//查询未读邮件数量
	
	queryConsumeDevice();//查询消费设备分类
	
	setSelectDeviceTab("在线明细");
	queryOnlineList();//查询账号所有的在线终端列表
//	setSelectDeviceTab("消费明细");
//	queryTotalConsume("");//查询所有设备的消费明细总数
//	queryConsumeList("", 0, 1);//查询所有设备的消费明细第1页
}

//查询账户信息
function queryUserInfo(){
	$.ajax({
		type: 'get',
		url: 'get_user_info.php',
		dataType: 'json',
		error : function(json) {
			Boxy.tip('查询账户信息异常，请重新查询！',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'fail'){
				$('.y_content').html("<h2>"+json.msg+"</h2>");
			}
			else if(json.result == 'ok'){
				$('.c-h2-box').html("<h2>网络已连接</h2><p>Connected</p>");
				initUserInfo(json.user_account, json.data);
			}
		}
	});
}

// 初始化账户信息
function initUserInfo(user_account, user_data){
	$("#view_account").text(user_account);
	
	var billing_begin = user_data.start_time;//计费周期起始
	var billing_end = user_data.end_time;//计费周期结束
	var group_desc = user_data.group_desc;//套餐描述
	var user_balance = parseFloat(user_data.user_balance);//资金余额
	var use_bytes = parseFloat(user_data.use_bytes);//本周期已用流量
	var remain_bytes = parseFloat(user_data.remain_bytes);//当前剩余流量
	var balance_bytes = parseFloat(user_data.balance_bytes);//资金换算可使用流量
	var unprotect_bytes = parseFloat(user_data.unprotect_bytes);//消费保护不可使用流量
	var protect_flag = parseInt(user_data.protect_flag);//消费保护标志
	var protect_money = parseFloat(user_data.protect_money);//消费保护可使用金额

	//balance_value = user_balance;//消费保护时进度条最大使用值
	protect_value = protect_money;//消费保护时进度条当前使用值
	curr_protect_flag = protect_flag;//当前消费保护标志

	// 消费保护不可使用金额
	var unprotect_money = user_balance - protect_money;
	
	//总流量
	var sum_bytes = use_bytes + remain_bytes + balance_bytes + unprotect_bytes;

	//总资金流量
	var total_fee_bytes = balance_bytes + unprotect_bytes;
	
	//可用流量
	var free_bytes = use_bytes + remain_bytes + balance_bytes;
	
	//总流量css宽度变量
	var css_sum_flux_width = 100;
	
	//使用流量css宽度
	var css_use_flux_width = (css_sum_flux_width * use_bytes / sum_bytes).toFixed(2);
	
	//总资金流量css宽度
	var css_total_fee_width = (css_sum_flux_width * total_fee_bytes / sum_bytes).toFixed(2);
	
	//非保护流量css宽度
	css_unprotect_flux_width = (css_sum_flux_width * unprotect_bytes / sum_bytes).toFixed(2);
	
	//可用流量css宽度
	css_free_flux_width = (css_sum_flux_width * free_bytes / sum_bytes).toFixed(2);
	
	//剩余流量css宽度
	css_remain_flux_width = (css_sum_flux_width * remain_bytes / (use_bytes + remain_bytes)).toFixed(2);
	
	//流量转换
	var use_flux = fflux(use_bytes);
	var unprotect_flux = fflux(unprotect_bytes);
	var free_flux = fflux(free_bytes);
	var remain_flux = fflux(remain_bytes);

	//显示费率
	$(".y_zhouqi").html('费率：'+group_desc+'<span class="fl">'+billing_begin+'  至  '+billing_end+'</span>');
	//显示使用流量
	$(".progress-bar-danger").attr('style','width:'+css_use_flux_width+'%;');
	$(".progress-bar-danger").attr('aria-valuenow','width:'+css_use_flux_width+'%;');
	//显示总资金流量
	$(".progress-bar-danger-low").attr('style','width:'+css_total_fee_width+'%;');
	$(".progress-bar-danger-low").attr('aria-valuenow','width:'+css_total_fee_width+'%;');
	//显示非保护流量
	$('.process-protect').attr('style','width:'+css_unprotect_flux_width+'%;');
	$('.process-protect').find("img").attr('title',unprotect_flux);
	$('.process-protect').find("alt").attr('title',unprotect_flux);
	//显示已使用流量
	$('.yl_step2').attr('style','left:'+css_use_flux_width+'%;');
	$('.yl_step2').text(use_flux);
	//显示可用流量
	$('.yl_step1').attr('style','left:'+css_free_flux_width+'%;');
	$('.yl_step1').text(free_flux);
	
	//显示流量账户(剩余)
	$('#flux_info').text(remain_flux);
	//显示资金账户(剩余)
	$('#balance_info').text(user_balance);
	//显示流量账户进度
	$('.yl_line').attr('style','width:'+css_remain_flux_width+'%;');
	//显示资金账户进度
	$('.yl_line2').attr('style','width:'+user_balance+'%;');
}

//查询用户设备
function queryUserDevice(){
	$.ajax({
		type: 'get',
		url: 'get_user_device.php',
		dataType: 'json',
		error : function(json) {
			Boxy.tip('查询用户设备异常，请重新查询！',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'ok'){
				initUserDevice(json.data);
			}
		}
	});
}

// 初始化用户设备
function initUserDevice(device_data){
	// 生成html
	var html_data = '<div class="panel-heading y_heading"><img class="zf_img" src="images/set.png" /><span class="visible-lg y_name">设备管理</span></div>';
	for(var i=0; i<device_data.length; i++){
		var is_coll = ""; if(i == 0) is_coll = "in"; //第1项展开，其余折叠
		// 在线IP、上线时间、在线session均为空代表设备已离线
		if("" != device_data[i].online_session){
			html_data +='<div data-target="#ul'+(i+1)+'" data-toggle="collapse" data-parent="#accordion" class="panel-heading y_heading_two"><img class="zf_img" src="images/r-suc.png" title="'+device_data[i].device_alias+'" alit="'+device_data[i].device_alias+'"/><span class="visible-lg y_name">'+device_data[i].device_alias+'</span></div>';
			html_data +='<ul id="ul'+(i+1)+'" class="collapse list-group y_sid_list '+is_coll+'">';
			html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">下线</span><span class="visible-lg y_name">下线</span></a></li>';
			html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">改名</span><span class="visible-lg y_name">设备改名</span></a></li>';
			/*在线状态不能删除设备*/
			//html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">删除</span><span class="visible-lg y_name">删除设备</span></a></li>';
			html_data +='</ul>';
		}
		else{
			html_data +='<div data-target="#ul'+(i+1)+'" data-toggle="collapse" data-parent="#accordion" class="panel-heading y_heading_two"><img class="zf_img" src="images/r-off.png" title="'+device_data[i].device_alias+'" alit="'+device_data[i].device_alias+'"/><span class="visible-lg y_name">'+device_data[i].device_alias+'</span></div>';
			html_data +='<ul id="ul'+(i+1)+'" class="collapse list-group y_sid_list '+is_coll+'">';
			html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">已离线</span><span class="visible-lg y_name">已离线</span></a></li>';
			html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">改名</span><span class="visible-lg y_name">设备改名</span></a></li>';
			html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">删除</span><span class="visible-lg y_name">删除设备</span></a></li>';
			html_data +='</ul>';
		}
		if(device_data.is_curr_device == "1"){// 当前设备则在注销按钮设置online_session
			$("#yclose").attr("online_session", device_data[i].online_session);
		}
	}
	$('.panel-default').html(html_data);

	// 绑定各设备的操作事件
	for(var i=0; i<$('.panel-default').find("ul").length; i++){
		for(var j=0; j<$('.panel-default').find("ul").eq(i).find("li").length; j++){
			if(j==0){
				//alert("device_data[i].online_session:"+device_data[i].online_session);
				// 设备处于在线状态才允许操作下线
				if("" != $('.panel-default').find("ul").eq(i).find("li").eq(j).attr("online_session")){
					$('.panel-default').find("ul").eq(i).find("li").eq(j).on('click',function(){
						offlineDevice($(this).attr("device_alias"), $(this).attr("online_session"));
					});
				}
			}
			else if(j==1){
				$('.panel-default').find("ul").eq(i).find("li").eq(j).on('click',function(){
					renameDevice($(this).attr("mac"), $(this).attr("user_agent"), $(this).attr("device_alias"));
				});
			}
			else{
				$('.panel-default').find("ul").eq(i).find("li").eq(j).on('click',function(){ 
					deleteDevice($(this).attr("mac"), $(this).attr("user_agent"), $(this).attr("device_alias"));
				});
			}
		}
	}		
}

//下线设备
function offlineDevice(device_alias, online_session){
	var box = Boxy.ask(device_alias, ['确认', '取消'], function(r){
		if (r == '确认'){
			$.ajax({
				type:'POST',
				url: 'offline_device.php',
				data : 'online_session='+online_session,
				dataType: 'json',
				error : function(json) {
					Boxy.tip('下线设备异常，请重新操作！',function(){},{iserror: true});
				},
				success : function(json) {
					if(json.result == 'error'){
						Boxy.tip(json.msg,function(){},{iserror: true});
						setTimeout(function(){
							window.location = json.reback_url;
						}, 2000);
					}
					else if(json.result == 'fail'){
						Boxy.tip(json.msg,function(){},{iserror: true});
					}
					else if(json.result == 'ok'){
						Boxy.tip(json.msg);
						initTime();//初始化查询时间
						queryUserDevice();//查询用户设备
						queryConsumeDevice();//查询消费设备分类
						setSelectDeviceTab("在线明细");
						queryOnlineList();//查询账号在线终端列表
//						setSelectDeviceTab("消费明细");
//						queryTotalConsume("");//查询所有设备的消费明细总数
//						queryConsumeList("", 0, 1);//查询所有设备的消费明细第1页
					}
				}
			});
		}
	},{
		titleicon: 'icon-circle-arrow-down',
		title: "下线设备",
		modal: true,
		closeable: true
	});
}

//设备命名
function renameDevice(mac, user_agent, device_alias){
	var box = Boxy.ask('<p style="padding-top:30px"><input class="form-control" type="" placeholder="修改您的设备名称" value='+device_alias+' /></p>', ['确认', '取消'], function(r){
		if (r == '确认'){
			var new_alias = box.getContent().find("input").val();
			if(new_alias == '' || new_alias  == box.getContent().find("input").attr("placeholder")){
				Boxy.tip('您需修改的设备名称不可为空',function(){},{iserror: true});
				return false;
			}
			//alert("new_alias:"+new_alias);
			$.ajax({
				type:'POST',
				url: 'rename_device.php',
				data : 'mac='+mac+'&user_agent='+user_agent+'&device_alias='+new_alias,
				dataType: 'json',
				error : function(json) {
					Boxy.tip('设备命名异常，请重新操作！',function(){},{iserror: true});
				},
				success : function(json) {
					if(json.result == 'error'){
						Boxy.tip(json.msg,function(){},{iserror: true});
						setTimeout(function(){
							window.location = json.reback_url;
						}, 2000);
					}
					else if(json.result == 'fail'){
						Boxy.tip(json.msg,function(){},{iserror: true});
					}
					else if(json.result == 'ok'){
						Boxy.tip(json.msg);
						initTime();//初始化查询时间
						queryUserDevice();//查询用户设备
						queryConsumeDevice();//查询消费设备分类
						setSelectDeviceTab("在线明细");
						queryOnlineList();//查询账号在线终端列表
//						setSelectDeviceTab("消费明细");
//						queryTotalConsume("");//查询所有设备的消费明细总数
//						queryConsumeList("", 0, 1);//查询所有设备的消费明细第1页
					}
				}
			});
		}
	},{
		titleicon: 'icon-icon_info_alt',
		title: '设备命名',
		modal: true,
		closeable: true
	});
	box.getContent().find("input").keyup(function(){
		if($(this).val() == ''){
			$(this).blur();
		}
	});
	replacePlaceholder();
}

//删除设备
function deleteDevice(mac, user_agent, device_alias){
	var box = Boxy.ask(device_alias, ['确认', '取消'], function(r){
		if (r == '确认'){
			$.ajax({
				type:'POST',
				url: 'delete_device.php',
				data : 'mac='+mac+'&user_agent='+user_agent+'&device_alias='+device_alias,
				dataType: 'json',
				error : function(json) {
					Boxy.tip('删除设备异常，请重新操作！',function(){},{iserror: true});
				},
				success : function(json) {
					if(json.result == 'error'){
						Boxy.tip(json.msg,function(){},{iserror: true});
						setTimeout(function(){
							window.location = json.reback_url;
						}, 2000);
					}
					else if(json.result == 'fail'){
						Boxy.tip(json.msg,function(){},{iserror: true});
					}
					else if(json.result == 'ok'){
						Boxy.tip(json.msg);
						initTime();//初始化查询时间
						queryUserDevice();//查询用户设备
						queryConsumeDevice();//查询消费设备分类
						setSelectDeviceTab("在线明细");
						queryOnlineList();//查询账号在线终端列表
//						setSelectDeviceTab("消费明细");
//						queryTotalConsume("");//查询所有设备的消费明细总数
//						queryConsumeList("", 0, 1);//查询所有设备的消费明细第1页
					}
				}
			});
		}else{
		}
	},{
		titleicon: 'icon-icon_info_alt',
		title: "删除设备",
		modal: true,
		closeable: true
	});
}

// 查询未读邮件
function queryUnreadMail(){
	$.ajax({
		type: 'get',
		url: 'get_unread_mail.php',
		dataType: 'json',
		error : function(json) {
			Boxy.tip('查询未读邮件异常，请重新查询！',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'fail'){
				Boxy.tip(json.msg,function(){},{iserror: true});
			}
			else if(json.result == 'ok'){
				$('.y_gd_list_num').text(json.count);
			}
		}
	});
}

//查询消费设备分类
function queryConsumeDevice(){
	var start_time=$("input[name='start_time']").val();
	var end_time=$("input[name='end_time']").val();
	$.ajax({
		type: 'get',
		url: 'get_consume_device.php?start_time='+start_time+'&end_time='+end_time,
		dataType: 'json',
		error : function(json) {
			Boxy.tip('查询消费设备分类异常，请重新查询！',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'fail'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				//查询消费设备分类失败处理
			}
			else if(json.result == 'ok'){
				//初始化设备分类Tab
				initSelectDeviceTab(json.data);
			}
		}
	});
}

//初始化设备分类Tab
function initSelectDeviceTab(consume_device_data){
	//清除设备分类Tab(保留消费明细和充值明细)
	for(var i=$(".nav-tabs").find("li").length-1; i>2; i--){
		$(".nav-tabs").find("li").eq(i).remove();
	}
	//重设设备分类Tab
	for(var i=0; i<consume_device_data.length; i++){
		$(".nav-tabs").find("li").eq(i+2).after('<li ><a href="#">'+consume_device_data[i].device_alias+'</a></li>');
	}

	//重新绑定设备分类Tab选中事件
	for(var i=0; i<$(".nav-tabs").find("li").length; i++){
		$(".nav-tabs").find("li").eq(i).on('click',function(){
			setSelectDeviceTab($(this).text());//设置设备分类Tab选中项
			if($(this).text() == "在线明细"){
				queryOnlineList();//查询账号在线终端列表
			}
			else if($(this).text() == "消费明细"){
				queryTotalConsume("");//查询所有设备的消费明细总数
				queryConsumeList("", 0, 1);//查询所有设备的消费明细第1页
			}
			else if($(this).text() == "充值明细"){
				queryTotalBilling();//查询所有设备的充值明细总数
				queryBillingList(0, 1);//查询所有设备的充值明细第1页
			}
			else{
				queryTotalConsume($(this).text());//查询指定设备的消费明细总数
				queryConsumeList($(this).text(), 0, 1);//查询指定设备的消费明细第1页
			}
		});
	}
}

//设置设备分类Tab选中项
function setSelectDeviceTab(device_alias){
	for(var i=0; i<$(".nav-tabs").find("li").length; i++){
		if($(".nav-tabs").find("li").eq(i).text() == device_alias){
			$(".nav-tabs").find("li").eq(i).attr("class", "active");
		}
		else{
			$(".nav-tabs").find("li").eq(i).attr("class", "");
		}
	}
	
	var html_data = "";
	if(device_alias == "在线明细"){
		html_data += "<th>#</th>";
		html_data += "<th>上线时间</th>";
		html_data += "<th>本次时长</th>";
		html_data += "<th>本次流量</th>";
		html_data += "<th>登录IP</th>";
	}
	else if(device_alias == "充值明细"){
		html_data += "<th>#</th>";
		html_data += "<th>充值时间</th>";
		html_data += "<th>充值前</th>";
		html_data += "<th>充值后</th>";
		html_data += "<th>充值额度</th>";
		html_data += "<th>备注</th>";
	}
	else{
		html_data += "<th>#</th>";
		html_data += "<th>上线时间</th>";
		html_data += "<th>上网时长</th>";
		html_data += "<th>使用流量</th>";
		html_data += "<th>计费金额</th>";
		html_data += "<th>登录IP</th>";
		html_data += "<th>备注</th>";
	}
	$(".table").find("thead").find("tr").html(html_data);
}

//设置分页选择Tab
function initSelectPageTab(total_record_num, page_index){
	if(total_record_num <= page_size){
		$(".pagination").html("");
	}
	else{
		var total_page = 0;
		if(total_record_num % page_size == 0){//总页数
			total_page = parseInt(total_record_num / page_size);
		}else{
			total_page = parseInt(total_record_num / page_size) + 1;
		}

		var html_data = '';
		if(total_page > max_select_page){
			// 显示上页选择
			if(page_index > 1){
				html_data += '<li><a href="#"><<</a></li>';
			}
			
			if(page_index <= max_select_page){
				for(var i = 1; i <= max_select_page; i++){
					if(i == page_index)
						html_data += '<li class="active"><a href="#">'+i+'</a></li>';
					else
						html_data += '<li><a href="#">'+i+'</a></li>';
				}
			}
			else{
				for(var i = page_index - max_select_page + 1; i <= page_index; i++){
					if(i == page_index)
						html_data += '<li class="active"><a href="#">'+i+'</a></li>';
					else
						html_data += '<li><a href="#">'+i+'</a></li>';
				}
			}
			
			// 显示下页选择
			if(page_index < total_page){
				html_data += '<li><a href="#">>></a></li>';
			}
		}
		else{
			for(var i=1; i<=total_page; i++){
				if(i == page_index)
					html_data += '<li class="active"><a href="#">'+i+'</a></li>';
				else
					html_data += '<li><a href="#">'+i+'</a></li>';
			}
		}
		$(".pagination").html(html_data);
	}

	//重新绑定分页选择Tab选中事件(记录总数不设置事件)
	for(var i=0; i<$(".pagination").find("li").length; i++){
		$(".pagination").find("li").eq(i).on('click',function(){
			var device_alias = "";
			for(var j=0; j<$(".nav-tabs").find("li").length; j++){
				if($(".nav-tabs").find("li").eq(j).attr("class") == "active"){
					device_alias = $(".nav-tabs").find("li").eq(j).text();
					break;
				}
			}

			var select_page = page_index;
			if($(this).text() == "<<"){
				select_page = page_index - 1;
			}
			else if($(this).text() == ">>"){
				select_page = page_index + 1;
			}
			else{
				select_page = parseInt($(this).text());
			}
			initSelectPageTab(total_record_num, select_page);//重新设置分页选择Tab

			if(device_alias == "消费明细"){
				queryConsumeList("", total_record_num, select_page);//查询所有设备的消费明细分页
			}
			else if(device_alias == "充值明细"){
				queryBillingList(total_record_num, select_page);//查询所有设备的充值明细分页
			}
			else{
				queryConsumeList(device_alias, total_record_num, select_page);//查询指定设备的消费明细分页
			}
		});
	}
}

//查询消费明细总数
function queryTotalConsume(device_alias){
	var start_time=$("input[name='start_time']").val();
	var end_time=$("input[name='end_time']").val();
	$.ajax({
		type: 'get',
		url: 'get_total_consume.php?start_time='+start_time+'&end_time='+end_time+'&device_alias='+device_alias,
		dataType: 'json',
		error : function(json) {
			Boxy.tip('查询消费明细总数异常，请重新查询！',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'fail'){
				//Boxy.tip(json.msg,function(){},{iserror: true});
				//查询消费明细总数失败处理
				$(".pagination").html(json.msg);
			}
			else if(json.result == 'ok'){
				initSelectPageTab(parseInt(json.count), 1);
			}
		}
	});
}

//查询消费明细分页
function queryConsumeList(device_alias, total_record_num, page_index){
	var start_time = $("input[name='start_time']").val();
	var end_time = $("input[name='end_time']").val();
	var min_num = (page_index - 1) * page_size +1;
	var max_num = page_index * page_size;
	if(page_index > 1 && max_num > total_record_num) max_num = total_record_num;//非第1页并且结束行号大于记录总数，则结束行号设置为记录总数

	$.ajax({
		type: 'get',
		url: 'get_consume_list.php?start_time='+start_time+'&end_time='+end_time+'&min_num='+min_num+'&max_num='+max_num+'&device_alias='+device_alias,
		dataType: 'json',
		error : function(json) {
			Boxy.tip('查询消费明细分页异常，请重新查询！',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'fail'){
				//查询消费明细分页失败处理
				$(".table").find("tbody").html(json.msg);
			}
			else if(json.result == 'ok'){
				//初始化消费明细分页数据
				initConsumeList(json.data);
			}
		}
	});
}

//初始化消费明细分页数据
function initConsumeList(consume_list_data){
	var html_data = "";
	for(var i = 0; i < consume_list_data.length; i++){
		html_data += "<tr>";
		html_data += "<td>"+ consume_list_data[i].rn +"</td>";
		html_data += "<td>"+ consume_list_data[i].device_alias +"("+ consume_list_data[i].online_time +")</td>";
		html_data += "<td>"+ formatMintiue(consume_list_data[i].time_long) +"</td>";
		html_data += "<td>"+ fflux(consume_list_data[i].user_in_bytes) +"</td>";
		html_data += "<td>"+ consume_list_data[i].money +"元</td>";
		html_data += "<td>"+ consume_list_data[i].online_ip +"</td>";
		html_data += "<td>"+ consume_list_data[i].mark +"</td>";
		html_data += "</tr>";
	}
	$(".table").find("tbody").html(html_data);
}

//查询充值明细总数
function queryTotalBilling(){
	var start_time=$("input[name='start_time']").val();
	var end_time=$("input[name='end_time']").val();
	$.ajax({
		type: 'get',
		url: 'get_total_billing.php?start_time='+start_time+'&end_time='+end_time,
		dataType: 'json',
		error : function(json) {
			Boxy.tip('查询充值明细总数异常，请重新查询！',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'fail'){
				//Boxy.tip(json.msg,function(){},{iserror: true});
				//查询充值明细总数失败处理
				$(".pagination").html(json.msg);
			}
			else if(json.result == 'ok'){
				initSelectPageTab(parseInt(json.count), 1);
			}
		}
	});
}

//查询充值明细分页
function queryBillingList(total_record_num, page_inde){
	var start_time = $("input[name='start_time']").val();
	var end_time = $("input[name='end_time']").val();
	var min_num = (page_index - 1) * page_size +1;
	var max_num = page_index * page_size;
	if(page_index > 1 && max_num > total_record_num) max_num = total_record_num;//非第1页并且结束行号大于记录总数，则结束行号设置为记录总数
	
	$.ajax({
		type: 'get',
		url: 'get_billing_list.php?start_time='+start_time+'&end_time='+end_time+'&min_num='+min_num+'&max_num='+max_num,
		dataType: 'json',
		error : function(json) {
			Boxy.tip('查询充值明细分页异常，请重新查询！',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'fail'){
				//查询充值明细分页失败处理
				$(".table").find("tbody").html(json.msg);
			}
			else if(json.result == 'ok'){
				//初始化充值明细分页数据
				initBillingList(json.data);
			}
		}
	});
	
}

//初始化充值明细分页
function initBillingList(billing_list_data){
	var html_data = "";
	for(var i = 0; i < billing_list_data.length; i++){
		html_data += "<tr>";
		html_data += "<td>"+ billing_list_data[i].rn +"</td>";
		html_data += "<td>"+ billing_list_data[i].billing_name + "("+ billing_list_data[i].billing_time +")" +"</td>";
		if(billing_list_data[i].billing_type == 3){//流量卡
			html_data += "<td>"+fflux(billing_list_data[i].user_back_balance)+"</td>";
			html_data += "<td>"+fflux(billing_list_data[i].user_cur_balance)+"</td>";
			html_data += "<td>"+fflux(billing_list_data[i].money)+"</td>";
		}
		else{
			html_data += "<td>"+billing_list_data[i].user_back_balance+"元</td>";
			html_data += "<td>"+billing_list_data[i].user_cur_balance+"元</td>";
			html_data += "<td>"+billing_list_data[i].money+"元</td>";
		}
		html_data += "<td>"+ billing_list_data[i].mark +"</td>";
		html_data += "</tr>";
	}
	$(".table").find("tbody").html(html_data);
}

//查询账号在线终端列表
function queryOnlineList(){
	$.ajax({
		type: 'get',
		url: 'get_online_list.php',
		dataType: 'json',
		error : function(json) {
			Boxy.tip('查询在线终端列表异常，请重新查询！',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'ok'){
				initOnlineList(json.data);
			}
		}
	});
}

//设置账号在线终端列表
function initOnlineList(online_list_data){
	$(".pagination").html("");
	var html_data = "";
	for(var i = 0; i < online_list_data.length; i++){
		html_data += "<tr>";
		html_data += "<td>"+ (i+1) +"</td>";
		html_data += "<td>"+ online_list_data[i].device_alias +"("+ online_list_data[i].online_time +")</td>";
		html_data += "<td>"+ formatSeconds(online_list_data[i].time_long) +"</td>";
		html_data += "<td>"+ fflux(online_list_data[i].use_bytes) +"</td>";
		html_data += "<td>"+ online_list_data[i].online_ip +"</td>";
		html_data += "</tr>";
	}
	$(".table").find("tbody").html(html_data);
}

//查询待注销的在线IP列表
function getOnlineList(){
	$("#yclose").removeAttr("onclick");
	$.ajax({
		type: 'get',
		url: 'get_online_list.php',
		dataType: 'json',
		error : function(json) {
			Boxy.tip('查询在线终端列表异常，请重新查询！',function(){},{iserror: true});
			$("#yclose").attr("onclick","getOnlineList();");
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'ok'){
				setOnlineList(json.data);
				$("#yclose").attr("onclick","getOnlineList();");
			}
		}
	});
}

//设置待注销的在线IP列表
function setOnlineList(online_list_data){
	var html_data = "";
	for(var i=0;i<online_list_data.length;i++){
		html_data += '<li style="padding-left:0">';
		html_data += '<input type="checkbox" is_owner_ip="'+ online_list_data[i].is_owner_ip +'" data_online_ip="'+ online_list_data[i].online_ip +'" data_online_session="'+ online_list_data[i].online_session +'" name="id" style="margin-right:15px;" checked="checked">';
		html_data += '我的电脑' + online_list_data[i].online_ip;
		if(online_list_data[i].is_owner_ip == "1") html_data += '(本机)';
		html_data += '</li>';
	}
	//alert("html_data:"+ html_data);
	$('#downbox').find("ul").eq(0).html(html_data);
	
	var box = Boxy.ask($('#downbox').html(), ['确认', '取消'], function(r){
		if (r == '确认'){
			if(box.getContent().find("input[type=checkbox]:checked").length == 0){
				Boxy.tip("请选择要下线的IP",function(){},{iserror: true});
				return false;
			}
			var selectedItems = new Array(); 
			var had_owner = 0;
			box.getContent().find("input[type=checkbox]:checked").each(function(){
				selectedItems.push($(this).attr('is_owner_ip') + "|" + $(this).attr('data_online_ip') + "|" + $(this).attr('data_online_session'));
				if($(this).attr('is_owner_ip')) had_owner = 1;
			});
			var is_ok = 0;
			if(document.getElementById("quxiaozidonglogin").checked){
				is_ok = 1;
			}
			//alert("data_offline_session:"+selectedItems.join('|'));

			$.ajax({
				type: 'POST',
				url: 'unonline_session.php',
				data: 'is_ok='+is_ok+'&offline_info='+selectedItems.join(';'),
				dataType: 'json',
				error: function(json) {
					Boxy.tip('注销操作异常,请重新操作！',function(){},{iserror: true});
				},
				success: function(json) {
					//Session超时或操作非法则重定向至登陆页
					if(json.result == 'error'){
						Boxy.tip(json.msg,function(){},{iserror: true});
						setTimeout(function(){
							window.location = json.reback_url;
						}, 2000);
					}
					else if(json.result == 'fail'){
						Boxy.tip(json.msg,function(){},{iserror: true});
					}
					else if(json.result == 'ok'){
						Boxy.tip(json.msg);
						//注销本机设备则重定向至F.htm
						if(had_owner){
							Boxy.tip(json.msg);
							window.location = json.reback_url;
						}
						//注销非本机设备则关闭注销列表页并延时刷新设备列表
						else{
							//延时查询用户设备
							setTimeout(function(){
								queryUserDevice();
							}, 2000);
						}
					}
				}
			});
			
		}
		else{
		}
	},{
		titleicon: 'icon-switch',
		title: '注销',
		modal: true,
		closeable: true,
		bottom: [{
			id: 'quxiaozidonglogin',
			title: '取消自动登录'
		}]
	});
	if(getCookie("md5_login") == null){
		document.getElementById("quxiaozidonglogin").checked = true;
	}
}

/******************************公用函数******************************/
// 格式化当前时间
function getCurentTime(datenow){
	var year = datenow.getFullYear();//年
	var month = datenow.getMonth() + 1;//月
	var day = datenow.getDate();//日
	
	var hh = datenow.getHours();//时
	var mm = datenow.getMinutes();//分
	
	var clock = year + "-";
	
	if(month < 10)
		clock += "0";
	
	clock += month + "-";
	
	if(day < 10)
		clock += "0";
	
	clock += day + " ";
	
	if(hh < 10)
		clock += "0";
	
	clock += hh + ":";
	if (mm < 10) clock += '0';
	clock += mm;
	return(clock);
}

//将秒数换成时分秒格式
function formatSeconds(value) {
	var theTime = parseInt(value);// 秒
	var theTime1 = 0;// 分
	var theTime2 = 0;// 小时
	if(theTime > 60) {
		theTime1 = parseInt(theTime/60);
		theTime = parseInt(theTime%60);
		if(theTime1 > 60) {
			theTime2 = parseInt(theTime1/60);
			theTime1 = parseInt(theTime1%60);
		}
	}
	var result = ""+parseInt(theTime)+"秒";
	if(theTime1 > 0) {
		result = ""+parseInt(theTime1)+"分"+result;
	}
	if(theTime2 > 0) {
		result = ""+parseInt(theTime2)+"小时"+result;
	}
	return result;
}

//时间单位换算(分钟数换算成时分)
function formatMintiue(value) {
	var theTime = parseInt(value);// 单位：分钟
	var theTime2 = 0;// 小时
	var theTime3 = 0;// 天
	
	if(theTime >= 60){
		theTime2 = parseInt(theTime/60);
		theTime = parseInt(theTime%60);
		if(theTime2 >= 24) {
			theTime3 = parseInt(theTime2/24);
			theTime2 = parseInt(theTime2%24);
		}
	}
	var result = "";
	if(theTime >= 0) {
		result = ""+parseInt(theTime)+"分钟"+result;
	}
	if(theTime2 > 0) {
		result = ""+parseInt(theTime2)+"小时"+result;
	}
	if(theTime3 > 0) {
		result = ""+parseInt(theTime3)+"天"+result;
	}
	return result;
}
//流量单位换算(以1024MB为1G换算,取小数点后两位)
function fflux(bytes){
	//var unit = 1024;
	var unit = 1000;

	if(parseFloat(bytes) >= parseFloat(unit)){
		return (parseFloat(bytes) / parseFloat(unit)).toFixed(2) + "G"; 
	}
	else if(parseFloat(bytes) <= parseFloat(1/(unit * unit))){
		return (parseFloat(bytes) * parseFloat(unit) * parseFloat(unit)).toFixed(2) + "B"; 
	}
	else if(parseFloat(bytes) <= parseFloat(1/unit)){
		return (parseFloat(bytes) * parseFloat(unit)).toFixed(2) + "K"; 
	}
	else{
		return bytes + "M";
	}
	
}

var placeholderfriend = {
	focus: function(s) {
		s = $(s).hide().prev().show().focus();
		var idValue = s.attr("id");
		if (idValue) {
			s.attr("id", idValue.replace("placeholderfriend", ""));
		}
		var clsValue = s.attr("class");
		if (clsValue) {
			s.attr("class", clsValue.replace("placeholderfriend", ""));
		}
	}
} 
//判断是否支持placeholder
function isPlaceholder() {
	var input = document.createElement('input');
	return "placeholder" in input;
}

//不支持的代码
function replacePlaceholder(){
	if (!isPlaceholder()) {
		$(function() { 
			var form = $(this); 
			//遍历所有文本框，添加placeholder模拟事件
			var elements = form.find("input[type='text'][placeholder]");
			elements.each(function() {
				var s = $(this);
				var pValue = s.attr("placeholder");
				var sValue = s.val();
				if (pValue) {
					if (sValue == '') {
						s.val(pValue);
					}
				}
			}); 
			elements.focus(function() {
				var s = $(this);
				var pValue = s.attr("placeholder");
				var sValue = s.val();
				if (sValue && pValue) {
					if (sValue == pValue) {
						s.val('');
					}
				}
			});
			elements.blur(function() {
				var s = $(this);
				var pValue = s.attr("placeholder");
				var sValue = s.val();
				if (!sValue) {
					s.val(pValue);
				}
			}); 
			//遍历所有密码框，添加placeholder模拟事件
			var elementsPass = form.find("input[type='password'][placeholder]");
			elementsPass.each(function(i) {
				var s = $(this);
				var pValue = s.attr("placeholder");
				var sValue = s.val();
				if (pValue) {
					if (sValue == '') {
						//DOM不支持type的修改，需要复制密码框属性，生成新的DOM
						var html = this.outerHTML || "";
						html = html.replace(/\s*type=(['"])?password\1/gi, " type=text placeholderfriend")
									.replace(/\s*(?:value|on[a-z]+|name)(=(['"])?\S*\1)?/gi, " ")
									.replace(/\s*placeholderfriend/, " placeholderfriend value='" + pValue
									+ "' " + "onfocus='placeholderfriendfocus(this);' ");
						var idValue = s.attr("id");
						if (idValue) {
							s.attr("id", idValue + "placeholderfriend");
						}
						/*
						var clsValue = s.attr("class");
						if (clsValue) {
							s.attr("class", clsValue + "placeholderfriend");
						}
						*/
						s.hide();
						s.after(html);
					}
				}
			});
			elementsPass.blur(function() {
				var s = $(this);
				var sValue = s.val();
				if (sValue == '') {
					var idValue = s.attr("id");
					if (idValue) {
						s.attr("id", idValue + "placeholderfriend");
					}
					/*
					var clsValue = s.attr("class");
					if (clsValue) {
						s.attr("class", clsValue + "placeholderfriend");
					}
					*/
					s.hide();
					s.next().show();
				}
			});
		});
	}
	window.placeholderfriendfocus = placeholderfriend.focus;
}	

//获取cookie
function getCookie(name) {
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null)
		return unescape(arr[2]);
	return null;
}

//删除cookie
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

//设置cookie
function setCookie(name, value) {
	var Days = 360;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=logout;domain=" + location.hostname + ";expires=" + exp.toGMTString()+";path=/";
}