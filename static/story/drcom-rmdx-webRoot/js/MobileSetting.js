$(function(){
	/******************************业务函数******************************/
	//初始化数据
	function initData(){
		queryUserInfo();//查询账户信息
		queryUserDevice();//查询用户设备
	}
	
	//查询账户信息
	function queryUserInfo(){
		$.ajax({
			type: 'get',
			url: 'get_user_info.php',
			dataType: 'json',
			error : function(json) {
				alert('查询账户信息异常，请重新查询！');
			},
			success: function (json) {
				if(json.result == 'error'){
					alert(json.msg);
					setTimeout(function(){
						window.location = json.reback_url;
					}, 2000);
				}
				else if(json.result == 'fail'){
					$('.header').find("div").eq(0).html("<p class='h_1'>"+json.msg+"</p>");
				}
				else if(json.result == 'ok'){
					$('.header').find("div").eq(0).html("<p class='h_1'>网络已连接</p><p class='h_2'>Connected</p>");
					initUserInfo(json.user_account, json.data);
				}
			}
		});
	}
	
	// 初始化账户信息
	function initUserInfo(user_account, user_data){
		var billing_begin = user_data.start_time;//计费周期起始
		var billing_end = user_data.end_time;//计费周期结束
		var user_balance = parseFloat(user_data.user_balance);//资金余额
		var use_bytes = parseFloat(user_data.use_bytes);//本周期已用流量
		var remain_bytes = parseFloat(user_data.remain_bytes);//当前剩余流量

		//流量转换
		var use_flux = fflux(use_bytes);
		var remain_flux = fflux(remain_bytes);

		//计费周期
		$('#billing_date').html('<span class="up">'+billing_begin+'</span><br/><span class="down">~'+billing_end+'</span>');
		//本月用量
		$('#use_flux').html('<span class="dw">'+use_flux+'</span>');
		//流量剩余
		$('#remain_flux').html('<span class="dw">'+remain_flux+'</span>');
		//资金剩余
		$('#user_balance').html('<span class="dw">'+user_balance+'元</span>');
	}
	
	//查询用户设备
	function queryUserDevice(){
		$.ajax({
			type: 'get',
			url: 'get_user_device.php',
			dataType: 'json',
			error : function(json) {
				alert('查询用户设备异常，请重新查询！');
			},
			success: function (json) {
				if(json.result == 'error'){
					alert(json.msg);
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
		var html_data = '';
		for(var i=0; i<device_data.length; i++){
			// 在线IP、上线时间、在线session均为空代表设备已离线
			if("" != device_data[i].online_session){
				html_data += '<div class="item online" >';
				html_data += '<div class="left">';
				html_data += '<span class="tb">';
				html_data += '<img class="on" src="images/r-suc.png" alt="">';
				html_data += '<img class="off" src="images/r-off.png" alt="">';
				html_data += '</span>';
				html_data += '<span class="title">'+device_data[i].device_alias+'</span>';
				html_data += '<input class="title-text" type="text" value="'+device_data[i].device_alias+'" />';
				html_data += '</div>';
				html_data += '<div class="right">';
				html_data += '<a class="btn_r l1 btn_show" href="javascript:;" index="'+i+'" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><img src="images/b-l1.png" alt="下线" title="下线"></a>';
				html_data += '<a class="btn_r l3 btn_show" href="javascript:;" index="'+i+'" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><img src="images/b-l3.png" alt="改名" title="改名"></a>';
				html_data += '<a class="btn_r l4 btn_hide" href="javascript:;" index="'+i+'" ><img src="images/b-l4.png" alt="确认" title="确认"></a>';
				html_data += '<a class="btn_r l5 btn_hide" href="javascript:;" index="'+i+'" ><img src="images/b-l5.png" alt="取消" title="取消"></a>';
				html_data += '</div>';
				html_data += '</div>';
			}
			else{
				html_data += '<div class="item offline" >';
				html_data += '<div class="left">';
				html_data += '<span class="tb">';
				html_data += '<img class="on" src="images/r-suc.png" alt="">';
				html_data += '<img class="off" src="images/r-off.png" alt="">';
				html_data += '</span>';
				html_data += '<span class="title">'+device_data[i].device_alias+'</span>';
				html_data += '<input class="title-text" type="text" value="'+device_data[i].device_alias+'" />';
				html_data += '</div>';
				html_data += '<div class="right">';
				html_data += '<a class="btn_r l2 btn_show" href="javascript:;" index="'+i+'" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><img src="images/b-l2.png" alt="删除" title="删除"></a>';
				html_data += '<a class="btn_r l3 btn_show" href="javascript:;" index="'+i+'" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><img src="images/b-l3.png" alt="改名" title="改名"></a>';
				html_data += '<a class="btn_r l4 btn_hide" href="javascript:;" index="'+i+'" ><img src="images/b-l4.png" alt="确认" title="确认"></a>';
				html_data += '<a class="btn_r l5 btn_hide" href="javascript:;" index="'+i+'"><img src="images/b-l5.png" alt="取消" title="取消"></a>';
				html_data += '</div>';
				html_data += '</div>';
			}
		}
		$('.ebitems').html(html_data);

		// 绑定各设备的操作事件
		for(var i=0; i<$(".ebitems > div").length; i++){
			for(var j=0; j<$(".ebitems > div").eq(i).find("a").length; j++){
				if(j==0){
					// 设备处于在线状态才允许操作下线
					$(".ebitems > div").eq(i).find("a").eq(j).on('click',function(){
						if($(this).attr("online_session") != null && $(this).attr("online_session") != ""){//下线事件
							offlineDevice($(this).attr("device_alias"), $(this).attr("online_session"));
						}
						else{//删除事件
							deleteDevice($(this).attr("mac"), $(this).attr("user_agent"), $(this).attr("device_alias"));
						}
					});
				}
				else if(j==1){//改名事件
					$(".ebitems > div").eq(i).find("a").eq(j).on('click',function(){
						showEditDevice($(this).attr("index"));
					});
				}
				else if(j==2){//编辑确认
					$(".ebitems > div").eq(i).find("a").eq(j).on('click',function(){
						renameDevice($(this).attr("index"));
					});
				}
				else{//取消编辑
					$(".ebitems > div").eq(i).find("a").eq(j).on('click',function(){
						hideEditDevice($(this).attr("index"));
					});
				}
			}
		}
	}
	
	//下线设备
	function offlineDevice(device_alias, online_session){
		if (confirm('您确认要将此设备['+device_alias+']下线吗？')){
			$.ajax({
				type:'POST',
				url: 'offline_device.php',
				data : 'online_session='+online_session,
				dataType: 'json',
				error : function(json) {
					alert('下线设备异常，请重新操作！');
				},
				success : function(json) {
					if(json.result == 'error'){
						alert(json.msg);
						setTimeout(function(){
							window.location = json.reback_url;
						}, 2000);
					}
					else if(json.result == 'fail'){
						alert(json.msg);
					}
					else if(json.result == 'ok'){
						alert(json.msg);
						//查询用户设备
						queryUserDevice();
					}
				}
			});
		}
	}
	
	//显示命名
	function showEditDevice(index){
		var item = $(".ebitems > div").eq(index).find("input").eq(0).closest(".item");
		item.toggleClass('edit');
		item.data('old-value', item.find(".title-text").val());
	}
	
	//隐藏命名
	function hideEditDevice(index){
		var item = $(".ebitems > div").eq(index).find("input").eq(0).closest(".item");
		item.find(".title-text").val(item.data('old-value'));
		item.removeClass('edit');
	}
	
	//设备命名
	function renameDevice(index, mac, user_agent, device_alias){
		var item = $(".ebitems > div").eq(index).find("input").eq(0).closest(".item");
		var new_alias = item.find(".title-text").val();
		var mac = $(".ebitems > div").eq(index).find("a").eq(1).attr("mac");
		var user_agent = $(".ebitems > div").eq(index).find("a").eq(1).attr("user_agent");
		var device_alias = $(".ebitems > div").eq(index).find("a").eq(1).attr("device_alias");
		if (new_alias.length == 0){
			alert('您需修改的设备名称不可为空');
			return false;
		}
		$.ajax({
			type:'POST',
			url: 'rename_device.php',
			data : 'mac='+mac+'&user_agent='+user_agent+'&device_alias='+new_alias,
			dataType: 'json',
			error : function(json) {
				alert('设备命名异常，请重新操作！');
			},
			success : function(json) {
				if(json.result == 'error'){
					alert(json.msg);
					setTimeout(function(){
						window.location = json.reback_url;
					}, 2000);
				}
				else if(json.result == 'fail'){
					alert(json.msg);
				}
				else if(json.result == 'ok'){
					alert(json.msg);
					//查询用户设备
					queryUserDevice();
				}
			}
		});
	}
	
	//删除设备
	function deleteDevice(mac, user_agent, device_alias){
		if (confirm('您确认要删除此设备['+device_alias+']的信息吗？')){
			$.ajax({
				type:'POST',
				url: 'delete_device.php',
				data : 'mac='+mac+'&user_agent='+user_agent+'&device_alias='+device_alias,
				dataType: 'json',
				error : function(json) {
					alert('删除设备异常，请重新操作！');
				},
				success : function(json) {
					if(json.result == 'error'){
						alert(json.msg);
						setTimeout(function(){
							window.location = json.reback_url;
						}, 2000);
					}
					else if(json.result == 'fail'){
						alert(json.msg);
					}
					else if(json.result == 'ok'){
						alert(json.msg);
						//查询用户设备
						queryUserDevice();
					}
				}
			});
		}
	}
	
/******************************按钮事件******************************/
	//充值/充流量
	$("#cz_btn").click(function(){
		var that = this;
		$("#panel1").hide();
		$("#panel2").show();
		$(".panel_move").removeClass("panel_move_down").addClass("panel_move_up");
		$("#cck").trigger('click');
	});
	
	//一卡通
	$("#ykt").click(function(){
		$("#panel_ykt").show();
		$("#panel_cls").hide();
		$(".centerbox").data("card-type", 'ykt');
		$(".radios p").addClass('off');
		$(this).parent().removeClass("off");
		$(".cord_bg").removeClass("llk_bg");
		$(".cord_bg").addClass("ykt_bg");
		$('#moneycount').text("0");
		$("#money_slide").slider({
			animate : true,
			range: "min",
			value: 0,
			min: 0,
			max: 100,
			stop: function(event, ui){
				$('#moneycount').text(ui.value);
			}
		});
	});

	//充值卡
	$("#cck").click(function(){
		$("#panel_ykt").hide();
		$("#panel_cls").show();
		$(".centerbox").data("card-type", 'cck');
		$(".radios p").addClass('off');
		$(this).parent().removeClass("off");
		$(".cord_bg").removeClass("ykt_bg");
		$(".lg").val("");
		$(".sm").val("");
	});
	
	//流量卡
	$("#llk").click(function(){
		$("#panel_ykt").hide();
		$("#panel_cls").show();
		$(".centerbox").data("card-type", 'llk');
		$(".radios p").addClass('off');
		$(this).parent().removeClass("off");
		$(".cord_bg").removeClass("ykt_bg");
		$(".cord_bg").addClass("llk_bg");
		$(".lg").val("");
		$(".sm").val("");
	});
	
	//充值提交
	$("#submit_btn").click(function(){
		var card_type = $(".centerbox").data("card-type");
		if (card_type == 'ykt'){
			//一卡通
			var card_money = $('#moneycount').text();
			$.ajax({
				type:'POST',
				url: 'change_user_balance.php',
				data : 'card_money='+card_money,
				dataType: 'json',
				error : function(json) {
					alert('一卡通转账异常，请重新操作！');
				},
				success : function(json) {
					if(json.result == 'error'){
						alert(json.msg);
						setTimeout(function(){
							window.location = json.reback_url;
						}, 2000);
					}
					else if(json.result == 'fail'){
						alert(json.msg);
					}
					else if(json.result == 'ok'){
						alert(json.msg);
						queryUserInfo();//查询账户信息
						//退出充值界面
						$("#panel1").show();
						$("#panel2").hide();
						$(".panel_move").removeClass("panel_move_up").addClass("panel_move_down");
					}
				}
			});
		}
		else if (card_type == 'cck'){
			//充值卡
			var ka_card_num = $(".cardinput .lg").val();
			var ka_passwd = $(".cardinput .sm").val();
			if(ka_card_num == '' || ka_card_num  == $(".cardinput .lg").attr("placeholder")){
				alert('请输入充值卡号');
				return false;
			}
			if(ka_passwd == '' || ka_passwd  == $(".cardinput .lg").attr("placeholder")){
				alert('请输入充值卡密码');
				return false;
			}
			$.ajax({
				type:'POST',
				url: 'recharge_user_balance.php',
				data : 'ka_card_num='+ka_card_num+'&ka_passwd='+ka_passwd,
				dataType: 'json',
				error : function(json) {
					alert('充值卡充值异常，请重新操作！');
				},
				success : function(json) {
					if(json.result == 'error'){
						alert(json.msg);
						setTimeout(function(){
							window.location = json.reback_url;
						}, 2000);
					}
					else if(json.result == 'fail'){
						alert(json.msg);
					}
					else if(json.result == 'ok'){
						alert(json.msg);
						queryUserInfo();//查询账户信息
						//退出充值界面
						$("#panel1").show();
						$("#panel2").hide();
						$(".panel_move").removeClass("panel_move_up").addClass("panel_move_down");
					}
				}
			});
		}
		else if (card_type == 'llk'){
			//流量卡
			var ka_card_num = $(".cardinput .lg").val();
			var ka_passwd = $(".cardinput .sm").val();
			if(ka_card_num == '' || ka_card_num  == $(".cardinput .lg").attr("placeholder")){
				alert('请输入流量卡号');
				return false;
			}
			if(ka_passwd == '' || ka_passwd  == $(".cardinput .lg").attr("placeholder")){
				alert('请输入流量卡密码');
				return false;
			}
			$.ajax({
				type:'POST',
				url: 'recharge_user_bytes.php',
				data : 'ka_card_num='+ka_card_num+'&ka_passwd='+ka_passwd,
				dataType: 'json',
				error : function(json) {
					alert('流量卡充值异常，请重新操作！');
				},
				success : function(json) {
					if(json.result == 'error'){
						alert(json.msg);
						setTimeout(function(){
							window.location = json.reback_url;
						}, 2000);
					}
					else if(json.result == 'fail'){
						alert(json.msg);
					}
					else if(json.result == 'ok'){
						alert(json.msg);
						queryUserInfo();//查询账户信息
						//退出充值界面
						$("#panel1").show();
						$("#panel2").hide();
						$(".panel_move").removeClass("panel_move_up").addClass("panel_move_down");
					}
				}
			});
		}
	});

	//充值取消
	$("#cancel_btn").click(function(){
		//退出充值界面
		$("#panel1").show();
		$("#panel2").hide();
		$(".panel_move").removeClass("panel_move_up").addClass("panel_move_down");
	});
	
/******************************公用函数******************************/
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
	
	//判断浏览器是否支持 placeholder属性
	function isPlaceholder() {
		var input = document.createElement('input');
		return 'placeholder' in input;
	}

	//设置placeholder当前颜色
	function changeToOriginalColor(self) {
		var index = $(self).index();
		var color = originalColor[$(self).index()];
		$(self).css('color', color);
	}

	//替换text类型的placeholder
	function replacePlaceholder(){
		if(!isPlaceholder()) {
			var texts = $(':text');
			var len = texts.length;
			var originalColor = [];
			for(var i = 0; i < len; i++) {
				var self = texts[i];
				var placeholder = $(self).attr('placeholder');
				if($(self).val() == "" && placeholder != null) {
					$(self).val(placeholder);
					originalColor[i] = $(self).css('color');
					$(self).css('color', '#A9A9A9');
					$(self).css('line-height', '25px');
				}
			}
			texts.focus(function() {
				if($(this).attr('placeholder') != null && $(this).val() == $(this).attr('placeholder')) {
					$(this).val('');
					//changeToOriginalColor(this);
				}
			}).blur(function() {
				if($(this).attr('placeholder') != null && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
					$(this).val($(this).attr('placeholder'));
					$(this).css('color', '#A9A9A9');
					$(this).css('line-height', '25px');
				}
			});
		}
	}
	
	initData();
});