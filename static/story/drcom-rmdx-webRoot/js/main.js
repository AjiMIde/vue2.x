$(function(){
	//转账
	$("#cz_btn").click(function(){
		var that = this;
		$("#panel1").hide();
		$("#panel2").show();
		$(".panel_move").removeClass("panel_move_down").addClass("panel_move_up");
		$("#cck").trigger('click');
	});
	
	//三个按钮
	$(".btn_r").click(function(){
		//设备id
		var item = $(this).closest(".item");
		var id = item.data("id");
		var is_ok = 0;
		var indenty_ip = $("input[name='indenty_ip']").val();
		//注销按钮
		if ($(this).hasClass('l1')){
			var mac_ip = $(this).data('mac-ip');
			if (confirm('您确认要将此设备(IP地址：'+mac_ip+')下线吗？')){
				//下线代码				
				
				$.ajax({  
					type: "get",  
					url: indenty_ip+"/unonline_user.php?action=unonline_user_mac&mac_ip="+mac_ip+'&type=1&is_ok='+is_ok,  
					dataType: "jsonp",  
					success: function (val) {
						var data = val.code;
						if(data >0){
							alert("操作成功！");
							if(is_ok == 0){//不取消自动登录跳转到logout.html
								return_url = indenty_ip+"/logout.html?go=1";
							}else {
								return_url = indenty_ip+"/mobile5.html";
							}
							window.location.href=return_url;
						}else{
							alert("下线失败");
							return;
						}
					}
				});
			}
		}
		//删除按钮
		if ($(this).hasClass('l2')){
			if (confirm('您确认要删除此设备的信息吗？')){
				//删除代码
				var mac_id = $(this).data('mac-id');
				$.post('change_user_balance.php','user_mac_id='+mac_id+'&action=delete_user_mac',function(info){
					if(info == 101){
						alert("参数不合法");
						return false;
					}else if(info == 102){
						alert("修改失败，请重试！");
						return false;
					}else{
						//操作提示
						alert("操作成功！");
						location.reload();
					}
				});
			}
		}
		//编辑按钮
		if ($(this).hasClass('l3')){
			var item = $('.ebitems').find("div").eq(0).find("input").eq(0).closest(".item");
			item.toggleClass('edit');
			item.data('old-value', item.find(".title-text").val());
		}
		//编辑确认按钮
		if ($(this).hasClass('l4')){
			var text = item.find(".title-text").val();
			if (text.length == 0){
				alert("请输入设备名称");
				return;
			}else{
				
				var sbid = $(this).data('id');
				var mac_id = $(this).data('mac-id');
				$.post('change_user_balance.php','user_mac_id='+mac_id+'&action=update_class_name&class_name='+text,function(info){
					if(info == 101){
						alert("参数不合法");
						return false;
					}else if(info == 102){
						alert("修改失败，请重试！");
						return false;
					}else{
						//操作提示
						//确认编辑后端代码
						alert("操作成功！");
						item.removeClass('edit');
						item.find(".title").text(text);
						item.data('old-value', text);
						//location.reload();
					}
				});
			}
		}
		//取消编辑按钮
		if ($(this).hasClass('l5')){
			item.find(".title-text").val(item.data('old-value'));
			item.removeClass('edit');
		}
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
	
	
	//充值卡提交
	$("#submit_btn").click(function(){
		var type = $(".centerbox").data("card-type");
		var card1 = $(".cardinput .lg").val();
		var card2 = $(".cardinput .sm").val();
		var indenty_ip = $("input[name='indenty_ip']").val();
		var card_type = 0;

		if (card1 && card2){}
		else {
			alert("请填写完整卡号和密码");
			return;
		}
		
		if (type == 'cck'){
			//充值卡
			var card_type = 1;
		}else if (type == 'llk'){
			//流量卡
			var card_type = 2;
		}
		if(card_type > 0)
		{
			var uname=$("input[name='user_login_name']").val();
			var show_info_type = $("input[name='show_info_type']").val();
			var current_user_ip= $("input[name='current_user_ip']").val();
			$.post('change_user_balance.php','ka_card_num='+card1+'&action=recharge_user_balance&user_login_name='+uname+'&card_type='+card_type+'&ka_passwd='+card2,function(info){
				if(info == 102){
					alert("充值卡不存在");
					return false;
				}else if(info == 103){
					alert("充值卡已使用");
					return false;
				}else if(info == 104){
					alert("充值卡已过期");
					return false;
				}else if(info == 105){
					alert("无计费组存在");
					return false;
				}else if(info == 101){
					alert("充值失败，请重试！");
					return false;
				}else if(info == 106){
					alert('充值卡密码错误');
					return false;
				}else{
					if(card_type == 1){
						alert("充值成功");
						location.reload();
					}else{
						if(show_info_type == 2){//在线用户下线
						$.post('change_user_balance.php','mac_ip='+current_user_ip+'&action=unonline_user_mac',function(info){
							if(info == 101){
								alert("下线失败");
								return false;
							}else{
								//操作提示
								alert("已成功充入流量，需再次认证才可生效");
								window.location.href=indenty_ip+'/mobile5.html';
							}
						});
						} else{						
							alert("已成功充入流量");
							location.reload();
						}
					}
					$(".cardinput .lg").val('');
					$(".cardinput .sm").val('');
				}
			});
		}
	});

	//取消
	$("#cancel_btn").click(function(){
		$("#panel1").show();
		$("#panel2").hide();
		$(".panel_move").removeClass("panel_move_up").addClass("panel_move_down");
	});
	
});
//当前访问的服务器ip
function getHost(url){
	var host = "null";
	if (typeof url == "undefined" || null == url) 
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if (typeof match != "undefined" && null != match) 
		host = match[1];
	return host;
}