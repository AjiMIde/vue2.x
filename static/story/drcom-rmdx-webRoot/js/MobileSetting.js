$(function(){
	/******************************ҵ����******************************/
	//��ʼ������
	function initData(){
		queryUserInfo();//��ѯ�˻���Ϣ
		queryUserDevice();//��ѯ�û��豸
	}
	
	//��ѯ�˻���Ϣ
	function queryUserInfo(){
		$.ajax({
			type: 'get',
			url: 'get_user_info.php',
			dataType: 'json',
			error : function(json) {
				alert('��ѯ�˻���Ϣ�쳣�������²�ѯ��');
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
					$('.header').find("div").eq(0).html("<p class='h_1'>����������</p><p class='h_2'>Connected</p>");
					initUserInfo(json.user_account, json.data);
				}
			}
		});
	}
	
	// ��ʼ���˻���Ϣ
	function initUserInfo(user_account, user_data){
		var billing_begin = user_data.start_time;//�Ʒ�������ʼ
		var billing_end = user_data.end_time;//�Ʒ����ڽ���
		var user_balance = parseFloat(user_data.user_balance);//�ʽ����
		var use_bytes = parseFloat(user_data.use_bytes);//��������������
		var remain_bytes = parseFloat(user_data.remain_bytes);//��ǰʣ������

		//����ת��
		var use_flux = fflux(use_bytes);
		var remain_flux = fflux(remain_bytes);

		//�Ʒ�����
		$('#billing_date').html('<span class="up">'+billing_begin+'</span><br/><span class="down">~'+billing_end+'</span>');
		//��������
		$('#use_flux').html('<span class="dw">'+use_flux+'</span>');
		//����ʣ��
		$('#remain_flux').html('<span class="dw">'+remain_flux+'</span>');
		//�ʽ�ʣ��
		$('#user_balance').html('<span class="dw">'+user_balance+'Ԫ</span>');
	}
	
	//��ѯ�û��豸
	function queryUserDevice(){
		$.ajax({
			type: 'get',
			url: 'get_user_device.php',
			dataType: 'json',
			error : function(json) {
				alert('��ѯ�û��豸�쳣�������²�ѯ��');
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
	
	// ��ʼ���û��豸
	function initUserDevice(device_data){
		// ����html
		var html_data = '';
		for(var i=0; i<device_data.length; i++){
			// ����IP������ʱ�䡢����session��Ϊ�մ����豸������
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
				html_data += '<a class="btn_r l1 btn_show" href="javascript:;" index="'+i+'" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><img src="images/b-l1.png" alt="����" title="����"></a>';
				html_data += '<a class="btn_r l3 btn_show" href="javascript:;" index="'+i+'" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><img src="images/b-l3.png" alt="����" title="����"></a>';
				html_data += '<a class="btn_r l4 btn_hide" href="javascript:;" index="'+i+'" ><img src="images/b-l4.png" alt="ȷ��" title="ȷ��"></a>';
				html_data += '<a class="btn_r l5 btn_hide" href="javascript:;" index="'+i+'" ><img src="images/b-l5.png" alt="ȡ��" title="ȡ��"></a>';
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
				html_data += '<a class="btn_r l2 btn_show" href="javascript:;" index="'+i+'" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><img src="images/b-l2.png" alt="ɾ��" title="ɾ��"></a>';
				html_data += '<a class="btn_r l3 btn_show" href="javascript:;" index="'+i+'" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><img src="images/b-l3.png" alt="����" title="����"></a>';
				html_data += '<a class="btn_r l4 btn_hide" href="javascript:;" index="'+i+'" ><img src="images/b-l4.png" alt="ȷ��" title="ȷ��"></a>';
				html_data += '<a class="btn_r l5 btn_hide" href="javascript:;" index="'+i+'"><img src="images/b-l5.png" alt="ȡ��" title="ȡ��"></a>';
				html_data += '</div>';
				html_data += '</div>';
			}
		}
		$('.ebitems').html(html_data);

		// �󶨸��豸�Ĳ����¼�
		for(var i=0; i<$(".ebitems > div").length; i++){
			for(var j=0; j<$(".ebitems > div").eq(i).find("a").length; j++){
				if(j==0){
					// �豸��������״̬�������������
					$(".ebitems > div").eq(i).find("a").eq(j).on('click',function(){
						if($(this).attr("online_session") != null && $(this).attr("online_session") != ""){//�����¼�
							offlineDevice($(this).attr("device_alias"), $(this).attr("online_session"));
						}
						else{//ɾ���¼�
							deleteDevice($(this).attr("mac"), $(this).attr("user_agent"), $(this).attr("device_alias"));
						}
					});
				}
				else if(j==1){//�����¼�
					$(".ebitems > div").eq(i).find("a").eq(j).on('click',function(){
						showEditDevice($(this).attr("index"));
					});
				}
				else if(j==2){//�༭ȷ��
					$(".ebitems > div").eq(i).find("a").eq(j).on('click',function(){
						renameDevice($(this).attr("index"));
					});
				}
				else{//ȡ���༭
					$(".ebitems > div").eq(i).find("a").eq(j).on('click',function(){
						hideEditDevice($(this).attr("index"));
					});
				}
			}
		}
	}
	
	//�����豸
	function offlineDevice(device_alias, online_session){
		if (confirm('��ȷ��Ҫ�����豸['+device_alias+']������')){
			$.ajax({
				type:'POST',
				url: 'offline_device.php',
				data : 'online_session='+online_session,
				dataType: 'json',
				error : function(json) {
					alert('�����豸�쳣�������²�����');
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
						//��ѯ�û��豸
						queryUserDevice();
					}
				}
			});
		}
	}
	
	//��ʾ����
	function showEditDevice(index){
		var item = $(".ebitems > div").eq(index).find("input").eq(0).closest(".item");
		item.toggleClass('edit');
		item.data('old-value', item.find(".title-text").val());
	}
	
	//��������
	function hideEditDevice(index){
		var item = $(".ebitems > div").eq(index).find("input").eq(0).closest(".item");
		item.find(".title-text").val(item.data('old-value'));
		item.removeClass('edit');
	}
	
	//�豸����
	function renameDevice(index, mac, user_agent, device_alias){
		var item = $(".ebitems > div").eq(index).find("input").eq(0).closest(".item");
		var new_alias = item.find(".title-text").val();
		var mac = $(".ebitems > div").eq(index).find("a").eq(1).attr("mac");
		var user_agent = $(".ebitems > div").eq(index).find("a").eq(1).attr("user_agent");
		var device_alias = $(".ebitems > div").eq(index).find("a").eq(1).attr("device_alias");
		if (new_alias.length == 0){
			alert('�����޸ĵ��豸���Ʋ���Ϊ��');
			return false;
		}
		$.ajax({
			type:'POST',
			url: 'rename_device.php',
			data : 'mac='+mac+'&user_agent='+user_agent+'&device_alias='+new_alias,
			dataType: 'json',
			error : function(json) {
				alert('�豸�����쳣�������²�����');
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
					//��ѯ�û��豸
					queryUserDevice();
				}
			}
		});
	}
	
	//ɾ���豸
	function deleteDevice(mac, user_agent, device_alias){
		if (confirm('��ȷ��Ҫɾ�����豸['+device_alias+']����Ϣ��')){
			$.ajax({
				type:'POST',
				url: 'delete_device.php',
				data : 'mac='+mac+'&user_agent='+user_agent+'&device_alias='+device_alias,
				dataType: 'json',
				error : function(json) {
					alert('ɾ���豸�쳣�������²�����');
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
						//��ѯ�û��豸
						queryUserDevice();
					}
				}
			});
		}
	}
	
/******************************��ť�¼�******************************/
	//��ֵ/������
	$("#cz_btn").click(function(){
		var that = this;
		$("#panel1").hide();
		$("#panel2").show();
		$(".panel_move").removeClass("panel_move_down").addClass("panel_move_up");
		$("#cck").trigger('click');
	});
	
	//һ��ͨ
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

	//��ֵ��
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
	
	//������
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
	
	//��ֵ�ύ
	$("#submit_btn").click(function(){
		var card_type = $(".centerbox").data("card-type");
		if (card_type == 'ykt'){
			//һ��ͨ
			var card_money = $('#moneycount').text();
			$.ajax({
				type:'POST',
				url: 'change_user_balance.php',
				data : 'card_money='+card_money,
				dataType: 'json',
				error : function(json) {
					alert('һ��ͨת���쳣�������²�����');
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
						queryUserInfo();//��ѯ�˻���Ϣ
						//�˳���ֵ����
						$("#panel1").show();
						$("#panel2").hide();
						$(".panel_move").removeClass("panel_move_up").addClass("panel_move_down");
					}
				}
			});
		}
		else if (card_type == 'cck'){
			//��ֵ��
			var ka_card_num = $(".cardinput .lg").val();
			var ka_passwd = $(".cardinput .sm").val();
			if(ka_card_num == '' || ka_card_num  == $(".cardinput .lg").attr("placeholder")){
				alert('�������ֵ����');
				return false;
			}
			if(ka_passwd == '' || ka_passwd  == $(".cardinput .lg").attr("placeholder")){
				alert('�������ֵ������');
				return false;
			}
			$.ajax({
				type:'POST',
				url: 'recharge_user_balance.php',
				data : 'ka_card_num='+ka_card_num+'&ka_passwd='+ka_passwd,
				dataType: 'json',
				error : function(json) {
					alert('��ֵ����ֵ�쳣�������²�����');
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
						queryUserInfo();//��ѯ�˻���Ϣ
						//�˳���ֵ����
						$("#panel1").show();
						$("#panel2").hide();
						$(".panel_move").removeClass("panel_move_up").addClass("panel_move_down");
					}
				}
			});
		}
		else if (card_type == 'llk'){
			//������
			var ka_card_num = $(".cardinput .lg").val();
			var ka_passwd = $(".cardinput .sm").val();
			if(ka_card_num == '' || ka_card_num  == $(".cardinput .lg").attr("placeholder")){
				alert('��������������');
				return false;
			}
			if(ka_passwd == '' || ka_passwd  == $(".cardinput .lg").attr("placeholder")){
				alert('����������������');
				return false;
			}
			$.ajax({
				type:'POST',
				url: 'recharge_user_bytes.php',
				data : 'ka_card_num='+ka_card_num+'&ka_passwd='+ka_passwd,
				dataType: 'json',
				error : function(json) {
					alert('��������ֵ�쳣�������²�����');
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
						queryUserInfo();//��ѯ�˻���Ϣ
						//�˳���ֵ����
						$("#panel1").show();
						$("#panel2").hide();
						$(".panel_move").removeClass("panel_move_up").addClass("panel_move_down");
					}
				}
			});
		}
	});

	//��ֵȡ��
	$("#cancel_btn").click(function(){
		//�˳���ֵ����
		$("#panel1").show();
		$("#panel2").hide();
		$(".panel_move").removeClass("panel_move_up").addClass("panel_move_down");
	});
	
/******************************���ú���******************************/
	//������λ����(��1024MBΪ1G����,ȡС�������λ)
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
	
	//�ж�������Ƿ�֧�� placeholder����
	function isPlaceholder() {
		var input = document.createElement('input');
		return 'placeholder' in input;
	}

	//����placeholder��ǰ��ɫ
	function changeToOriginalColor(self) {
		var index = $(self).index();
		var color = originalColor[$(self).index()];
		$(self).css('color', color);
	}

	//�滻text���͵�placeholder
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