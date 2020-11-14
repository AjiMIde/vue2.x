$(function(){
	/******************************��ť�¼�******************************/
	// ��ѯ�¼�
	$('#querytime').click(function(){
		var begintime = $(".begintime").val();
		var endtime = $(".endtime").val();
		var date1 = new Date(begintime);
		var date2 = new Date(endtime);
		if (Date.parse(date1) > Date.parse(date2)){
			Boxy.tip('����ʱ�䲻�ܴ�����ʼʱ��',function(){},{iserror: true});
			return;
		}
		
		$("input[name='start_time']").val(begintime);
		$("input[name='end_time']").val(endtime);
		
		setSelectDeviceTab("������ϸ");//�����豸����Tabѡ����
		queryTotalConsume("");//��ѯ�����豸��������ϸ����
		queryConsumeList("", 0, 1);//��ѯ�����豸��������ϸ��1ҳ
	});
	
	/*
	//ת���¼�
	$("#btn_box_charge_ll").click(function(){
		Boxy.tip('�˹�����δ��ͨ',function(){},{iserror: true});
	});
	*/
	
	//֧�����¼�
	$("#btn_box_zfb").click(function(){
		Boxy.tip('�˹�����δ��ͨ',function(){},{iserror: true});
	});

	//����������ֵ��һ��ͨת��
	$('.box_btn_bind').click(function(){
		var box = Boxy.ask($("#changesuc").html(), ['ȷ��', 'ȡ��'], function(r){	
			if (r == 'ȷ��'){
				change_user_balance();
			}else{
			}
		},{
			titleicon: 'icon-icon_currency',
			title: '������',
			modal: true,
			closeable: true,
			bottom: [{
				id: 'zhuanzhang_radio',
				title: 'һ��ͨת��'
			},{
				id: 'chongzhi_radio',
				title: '��ֵ��'
			},{
				id: 'chongll_radio',
				title: '������'
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
						Boxy.tip('һ��ͨת���쳣�������²�����',function(){},{iserror: true});
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
							initTime();//��ʼ����ѯʱ��
							queryUserInfo();//��ѯ�˻���Ϣ
							setSelectDeviceTab("��ֵ��ϸ");//�����豸����Tabѡ����
							queryTotalBilling();//��ѯ�����豸�ĳ�ֵ��ϸ����
							queryBillingList(0, 1);//��ѯ�����豸�ĳ�ֵ��ϸ��1ҳ
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
					Boxy.tip('�������ֵ����',function(){},{iserror: true});
					return false;
				}
				if(ka_passwd == '' || ka_passwd  == box.getContent().find("input.cardinput").attr("placeholder")){
					Boxy.tip('�������ֵ������',function(){},{iserror: true});
					return false;
				}
				$.ajax({
					type:'POST',
					url: 'recharge_user_balance.php',
					data : 'ka_card_num='+ka_card_num+'&ka_passwd='+ka_passwd,
					dataType: 'json',
					error : function(json) {
						Boxy.tip('��ֵ����ֵ�쳣�������²�����',function(){},{iserror: true});
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
							initTime();//��ʼ����ѯʱ��
							queryUserInfo();//��ѯ�˻���Ϣ
							setSelectDeviceTab("��ֵ��ϸ");//�����豸����Tabѡ����
							queryTotalBilling();//��ѯ�����豸�ĳ�ֵ��ϸ����
							queryBillingList(0, 1);//��ѯ�����豸�ĳ�ֵ��ϸ��1ҳ
						}
					}
				});
			}
			else if('type-llk' == that.attr('data-type')){
				var ka_card_num = box.getContent().find('input.chonginput').val();
				var ka_passwd = box.getContent().find('input.cardinput').val();
				if(ka_card_num == '' || ka_card_num  == box.getContent().find("input.chonginput").attr("placeholder")){
					Boxy.tip('��������������',function(){},{iserror: true});
					return false;
				}
				if(ka_passwd == '' || ka_passwd  == box.getContent().find("input.cardinput").attr("placeholder")){
					Boxy.tip('����������������',function(){},{iserror: true});
					return false;
				}
				$.ajax({
					type:'POST',
					url: 'recharge_user_bytes.php',
					data : 'ka_card_num='+ka_card_num+'&ka_passwd='+ka_passwd,
					dataType: 'json',
					error : function(json) {
						Boxy.tip('��������ֵ�쳣�������²�����',function(){},{iserror: true});
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
							initTime();//��ʼ����ѯʱ��
							queryUserInfo();//��ѯ�˻���Ϣ
							setSelectDeviceTab("��ֵ��ϸ");//�����豸����Tabѡ����
							queryTotalBilling();//��ѯ�����豸�ĳ�ֵ��ϸ����
							queryBillingList(0, 1);//��ѯ�����豸�ĳ�ֵ��ϸ��1ҳ
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
			box.setTitle('������');
			box.getContent().find(".chonginput").attr('placeholder', '��������������').attr("data-type", 'chongll');
			box.getContent().find(".cord_bg").removeClass("d");
			$(".boxy_title_i").addClass('icon-droplet').removeClass('icon-icon_creditcard').removeClass('icon-icon_currency');
			
			if(!isPlaceholder()) {
				box.getContent().find(".chonginput").val('��������������');
				//box.getContent().find(".chonginput").css('color', '#A9A9A9');
				//box.getContent().find(".chonginput").css('line-height', '25px');
			}
		});

		$("#chongzhi_radio").on('click', function(){
			$("#panel_ykt", that).hide();
			$("#panel_cls", that).show();
			that.attr('data-type', 'type-czk');
			box.setTitle('��ֵ��');
			box.getContent().find(".chonginput").attr('placeholder', '�������ֵ����').attr("data-type", 'chongzhi');
			$(".boxy_title_i").removeClass('icon-droplet').removeClass('icon-icon_creditcard').addClass('icon-icon_currency');
			box.getContent().find(".cord_bg").addClass("d");
		
			if(!isPlaceholder()) {
				box.getContent().find(".chonginput").val('�������ֵ����');
				//box.getContent().find(".chonginput").css('color', '#A9A9A9');
				//box.getContent().find(".chonginput").css('line-height', '25px');
			}
		});
		
		$("#zhuanzhang_radio").on('click', function(){
			$("#panel_ykt", that).show();
			$("#panel_cls", that).hide();
			that.attr('data-type', 'type-ykt');
			box.setTitle('һ��ͨת��');
			$(".boxy_title_i").addClass('icon-icon_creditcard').removeClass('icon-droplet').removeClass('icon-icon_currency');
		});
		
		box.getContent().find("#money_slide").slider({
			animate: true,//�Ƿ����϶�����ʱִ�ж���Ч��
			range: "min",
			value: 0,//�������ĵ�ǰֵ
			min: 0,//����������Сֵ
			max: 100,//�����������ֵ
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
	
	//���ѱ����¼�
	$('#btn_box_protect_ll').click(function(){
		var box = Boxy.ask($("#llprotect").html(), ['ȷ��', 'ȡ��'], function(r){
			var protect_money = box.getContent().find("#liuliang_slide").slider('value');
			var is_open_iext2_obj = $("#sfqy_llbh");
			var protect_flag = 1;
			
			if(!is_open_iext2_obj.is(':checked')){
				protect_flag = 0;
			}
			//alert("protect_flag:"+protect_flag);
			if (r == 'ȷ��') {
				$.ajax({
					type:'POST',
					url: 'consume_protect.php',
					data : 'protect_flag='+protect_flag+'&protect_money='+protect_money,
					dataType: 'json',
					error : function(json) {
						Boxy.tip('�޸����ѱ����쳣�������²�����',function(){},{iserror: true});
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
							queryUserInfo();//��ѯ�˻���Ϣ
						}
					}
				});
			}else{
			}
		},{
			titleicon: 'icon-icon_lock_alt',
			title: '���ѱ���',
			modal: true,
			closeable: true
		});
		
		box.getContent().find("#liuliang_slide").slider({
			range: "min",
			value: protect_value,
			min:0,
			max: balance_value,
			slide: function(event, ui){
				box.getContent().find('#liuliangcount').text(ui.value+'Ԫ');
			}
		});
		
		//�Ƿ�����
		var bt = box.getContent().find(".answers");
	
		bt.prepend("<p class='pull-left x_foot_left'><input style='margin-top:-2px' type='checkbox' checked='checked' id='sfqy_llbh'>����</p>");
		box.getContent().find('#liuliangcount').text(box.getContent().find("#liuliang_slide").slider('value')+'Ԫ');
		if(curr_protect_flag == 1){
			$("#sfqy_llbh").attr("checked", true);	
		}
		else{
			$("#sfqy_llbh").attr("checked", false);	
		}
	});

//	//ע���¼�
//	$("#yclose").click(function(){
//		alert("ע����ť����5��");
//		$(this).removeAttr("onclick");//ȥ��a��ǩ�е�onclick�¼�
//		setTimeout(function(){
//			alert("ע����ť��");
//			$("#yclose").attr("onclick","getOnlineList();");
//		},3000)
//	});
	
	//���䵥���¼�¼�
	$("#singleSignOn").click(function(){
		$.ajax({
			type: 'get',
			url: 'single_sign_on.php',
			dataType: 'json',
			error : function(json) {
				Boxy.tip('���䵥���¼�쳣�������²�����',function(){},{iserror: true});
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
	
	/******************************��������******************************/
	$.fn.datetimepicker.dates['en'] = {
			days: ["������", "����һ", "���ڶ�", "������", "������", "������", "������", "������"],
			daysShort: ["����", "��һ", "�ܶ�", "����", "����", "����", "����", "����"],
			daysMin:  ["��", "һ", "��", "��", "��", "��", "��", "��"],
			months: ["һ��", "����", "����", "����", "����", "����", "����", "����", "����", "ʮ��", "ʮһ��", "ʮ����"],
			monthsShort: ["һ��", "����", "����", "����", "����", "����", "����", "����", "����", "ʮ��", "ʮһ��", "ʮ����"],
			today: "����",
			suffix: [],
			meridiem: ["����", "����"]
	};

	$(".begintime").datetimepicker({
		format: 'yyyy-mm-dd hh:ii'
	});

	$(".endtime").datetimepicker({
		format: 'yyyy-mm-dd hh:ii'
	});
	
	initData();
});

/******************************��ʱҵ������******************************/
var balance_value = 100;//���ѱ���ʱ���������ʹ��ֵ

var protect_value = 0;//���ѱ���ʱ��������ǰʹ��ֵ

var curr_protect_flag = 1;//��ǰ���ѱ�����־

var page_size = 5;//��ҳ��ʾ��¼��

var max_select_page = 5;//�����ʾ��ҳ��

var page_index = 1;//��ǰ��ҳ

var total_record_num = 0;//��¼����

/******************************ҵ����******************************/
//����Ĭ�ϲ�ѯʱ��(��ʼʱ��Ϊ����1�ţ�����ʱ��Ϊ��ǰʱ��)
function initTime(){
	var datenow = new Date();
	var nowYear = datenow.getYear(); //��ǰ��
	nowYear += (nowYear < 2000) ? 1900 : 0; //
	var nowMonth = datenow.getMonth(); //��ǰ��
	var nowDay = datenow.getDate(); //��ǰ��
	var start_time = getCurentTime(new Date(nowYear, nowMonth, 1));
	//start_time = "2014-12-01 00:00";
	var end_time = getCurentTime(datenow);
	$('.begintime').val(start_time);
	$('.endtime').val(end_time);
	
	$("input[name='start_time']").val(start_time);
	$("input[name='end_time']").val(end_time);
}

//��ʼ������
function initData(){
	initTime();//��ʼ����ѯʱ��
	
	queryUserInfo();//��ѯ�˻���Ϣ
	queryUserDevice();//��ѯ�û��豸
	
	queryUnreadMail();//��ѯδ���ʼ�����
	
	queryConsumeDevice();//��ѯ�����豸����
	
	setSelectDeviceTab("������ϸ");
	queryOnlineList();//��ѯ�˺����е������ն��б�
//	setSelectDeviceTab("������ϸ");
//	queryTotalConsume("");//��ѯ�����豸��������ϸ����
//	queryConsumeList("", 0, 1);//��ѯ�����豸��������ϸ��1ҳ
}

//��ѯ�˻���Ϣ
function queryUserInfo(){
	$.ajax({
		type: 'get',
		url: 'get_user_info.php',
		dataType: 'json',
		error : function(json) {
			Boxy.tip('��ѯ�˻���Ϣ�쳣�������²�ѯ��',function(){},{iserror: true});
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
				$('.c-h2-box').html("<h2>����������</h2><p>Connected</p>");
				initUserInfo(json.user_account, json.data);
			}
		}
	});
}

// ��ʼ���˻���Ϣ
function initUserInfo(user_account, user_data){
	$("#view_account").text(user_account);
	
	var billing_begin = user_data.start_time;//�Ʒ�������ʼ
	var billing_end = user_data.end_time;//�Ʒ����ڽ���
	var group_desc = user_data.group_desc;//�ײ�����
	var user_balance = parseFloat(user_data.user_balance);//�ʽ����
	var use_bytes = parseFloat(user_data.use_bytes);//��������������
	var remain_bytes = parseFloat(user_data.remain_bytes);//��ǰʣ������
	var balance_bytes = parseFloat(user_data.balance_bytes);//�ʽ����ʹ������
	var unprotect_bytes = parseFloat(user_data.unprotect_bytes);//���ѱ�������ʹ������
	var protect_flag = parseInt(user_data.protect_flag);//���ѱ�����־
	var protect_money = parseFloat(user_data.protect_money);//���ѱ�����ʹ�ý��

	//balance_value = user_balance;//���ѱ���ʱ���������ʹ��ֵ
	protect_value = protect_money;//���ѱ���ʱ��������ǰʹ��ֵ
	curr_protect_flag = protect_flag;//��ǰ���ѱ�����־

	// ���ѱ�������ʹ�ý��
	var unprotect_money = user_balance - protect_money;
	
	//������
	var sum_bytes = use_bytes + remain_bytes + balance_bytes + unprotect_bytes;

	//���ʽ�����
	var total_fee_bytes = balance_bytes + unprotect_bytes;
	
	//��������
	var free_bytes = use_bytes + remain_bytes + balance_bytes;
	
	//������css��ȱ���
	var css_sum_flux_width = 100;
	
	//ʹ������css���
	var css_use_flux_width = (css_sum_flux_width * use_bytes / sum_bytes).toFixed(2);
	
	//���ʽ�����css���
	var css_total_fee_width = (css_sum_flux_width * total_fee_bytes / sum_bytes).toFixed(2);
	
	//�Ǳ�������css���
	css_unprotect_flux_width = (css_sum_flux_width * unprotect_bytes / sum_bytes).toFixed(2);
	
	//��������css���
	css_free_flux_width = (css_sum_flux_width * free_bytes / sum_bytes).toFixed(2);
	
	//ʣ������css���
	css_remain_flux_width = (css_sum_flux_width * remain_bytes / (use_bytes + remain_bytes)).toFixed(2);
	
	//����ת��
	var use_flux = fflux(use_bytes);
	var unprotect_flux = fflux(unprotect_bytes);
	var free_flux = fflux(free_bytes);
	var remain_flux = fflux(remain_bytes);

	//��ʾ����
	$(".y_zhouqi").html('���ʣ�'+group_desc+'<span class="fl">'+billing_begin+'  ��  '+billing_end+'</span>');
	//��ʾʹ������
	$(".progress-bar-danger").attr('style','width:'+css_use_flux_width+'%;');
	$(".progress-bar-danger").attr('aria-valuenow','width:'+css_use_flux_width+'%;');
	//��ʾ���ʽ�����
	$(".progress-bar-danger-low").attr('style','width:'+css_total_fee_width+'%;');
	$(".progress-bar-danger-low").attr('aria-valuenow','width:'+css_total_fee_width+'%;');
	//��ʾ�Ǳ�������
	$('.process-protect').attr('style','width:'+css_unprotect_flux_width+'%;');
	$('.process-protect').find("img").attr('title',unprotect_flux);
	$('.process-protect').find("alt").attr('title',unprotect_flux);
	//��ʾ��ʹ������
	$('.yl_step2').attr('style','left:'+css_use_flux_width+'%;');
	$('.yl_step2').text(use_flux);
	//��ʾ��������
	$('.yl_step1').attr('style','left:'+css_free_flux_width+'%;');
	$('.yl_step1').text(free_flux);
	
	//��ʾ�����˻�(ʣ��)
	$('#flux_info').text(remain_flux);
	//��ʾ�ʽ��˻�(ʣ��)
	$('#balance_info').text(user_balance);
	//��ʾ�����˻�����
	$('.yl_line').attr('style','width:'+css_remain_flux_width+'%;');
	//��ʾ�ʽ��˻�����
	$('.yl_line2').attr('style','width:'+user_balance+'%;');
}

//��ѯ�û��豸
function queryUserDevice(){
	$.ajax({
		type: 'get',
		url: 'get_user_device.php',
		dataType: 'json',
		error : function(json) {
			Boxy.tip('��ѯ�û��豸�쳣�������²�ѯ��',function(){},{iserror: true});
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

// ��ʼ���û��豸
function initUserDevice(device_data){
	// ����html
	var html_data = '<div class="panel-heading y_heading"><img class="zf_img" src="images/set.png" /><span class="visible-lg y_name">�豸����</span></div>';
	for(var i=0; i<device_data.length; i++){
		var is_coll = ""; if(i == 0) is_coll = "in"; //��1��չ���������۵�
		// ����IP������ʱ�䡢����session��Ϊ�մ����豸������
		if("" != device_data[i].online_session){
			html_data +='<div data-target="#ul'+(i+1)+'" data-toggle="collapse" data-parent="#accordion" class="panel-heading y_heading_two"><img class="zf_img" src="images/r-suc.png" title="'+device_data[i].device_alias+'" alit="'+device_data[i].device_alias+'"/><span class="visible-lg y_name">'+device_data[i].device_alias+'</span></div>';
			html_data +='<ul id="ul'+(i+1)+'" class="collapse list-group y_sid_list '+is_coll+'">';
			html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">����</span><span class="visible-lg y_name">����</span></a></li>';
			html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">����</span><span class="visible-lg y_name">�豸����</span></a></li>';
			/*����״̬����ɾ���豸*/
			//html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">ɾ��</span><span class="visible-lg y_name">ɾ���豸</span></a></li>';
			html_data +='</ul>';
		}
		else{
			html_data +='<div data-target="#ul'+(i+1)+'" data-toggle="collapse" data-parent="#accordion" class="panel-heading y_heading_two"><img class="zf_img" src="images/r-off.png" title="'+device_data[i].device_alias+'" alit="'+device_data[i].device_alias+'"/><span class="visible-lg y_name">'+device_data[i].device_alias+'</span></div>';
			html_data +='<ul id="ul'+(i+1)+'" class="collapse list-group y_sid_list '+is_coll+'">';
			html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">������</span><span class="visible-lg y_name">������</span></a></li>';
			html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">����</span><span class="visible-lg y_name">�豸����</span></a></li>';
			html_data +='<li class="list-group-item" mac="'+device_data[i].mac+'" user_agent="'+device_data[i].user_agent+'" device_alias="'+device_data[i].device_alias+'" online_session="'+device_data[i].online_session+'"><a href="#" ><span class="hidden-lg ico24_txt">ɾ��</span><span class="visible-lg y_name">ɾ���豸</span></a></li>';
			html_data +='</ul>';
		}
		if(device_data.is_curr_device == "1"){// ��ǰ�豸����ע����ť����online_session
			$("#yclose").attr("online_session", device_data[i].online_session);
		}
	}
	$('.panel-default').html(html_data);

	// �󶨸��豸�Ĳ����¼�
	for(var i=0; i<$('.panel-default').find("ul").length; i++){
		for(var j=0; j<$('.panel-default').find("ul").eq(i).find("li").length; j++){
			if(j==0){
				//alert("device_data[i].online_session:"+device_data[i].online_session);
				// �豸��������״̬�������������
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

//�����豸
function offlineDevice(device_alias, online_session){
	var box = Boxy.ask(device_alias, ['ȷ��', 'ȡ��'], function(r){
		if (r == 'ȷ��'){
			$.ajax({
				type:'POST',
				url: 'offline_device.php',
				data : 'online_session='+online_session,
				dataType: 'json',
				error : function(json) {
					Boxy.tip('�����豸�쳣�������²�����',function(){},{iserror: true});
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
						initTime();//��ʼ����ѯʱ��
						queryUserDevice();//��ѯ�û��豸
						queryConsumeDevice();//��ѯ�����豸����
						setSelectDeviceTab("������ϸ");
						queryOnlineList();//��ѯ�˺������ն��б�
//						setSelectDeviceTab("������ϸ");
//						queryTotalConsume("");//��ѯ�����豸��������ϸ����
//						queryConsumeList("", 0, 1);//��ѯ�����豸��������ϸ��1ҳ
					}
				}
			});
		}
	},{
		titleicon: 'icon-circle-arrow-down',
		title: "�����豸",
		modal: true,
		closeable: true
	});
}

//�豸����
function renameDevice(mac, user_agent, device_alias){
	var box = Boxy.ask('<p style="padding-top:30px"><input class="form-control" type="" placeholder="�޸������豸����" value='+device_alias+' /></p>', ['ȷ��', 'ȡ��'], function(r){
		if (r == 'ȷ��'){
			var new_alias = box.getContent().find("input").val();
			if(new_alias == '' || new_alias  == box.getContent().find("input").attr("placeholder")){
				Boxy.tip('�����޸ĵ��豸���Ʋ���Ϊ��',function(){},{iserror: true});
				return false;
			}
			//alert("new_alias:"+new_alias);
			$.ajax({
				type:'POST',
				url: 'rename_device.php',
				data : 'mac='+mac+'&user_agent='+user_agent+'&device_alias='+new_alias,
				dataType: 'json',
				error : function(json) {
					Boxy.tip('�豸�����쳣�������²�����',function(){},{iserror: true});
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
						initTime();//��ʼ����ѯʱ��
						queryUserDevice();//��ѯ�û��豸
						queryConsumeDevice();//��ѯ�����豸����
						setSelectDeviceTab("������ϸ");
						queryOnlineList();//��ѯ�˺������ն��б�
//						setSelectDeviceTab("������ϸ");
//						queryTotalConsume("");//��ѯ�����豸��������ϸ����
//						queryConsumeList("", 0, 1);//��ѯ�����豸��������ϸ��1ҳ
					}
				}
			});
		}
	},{
		titleicon: 'icon-icon_info_alt',
		title: '�豸����',
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

//ɾ���豸
function deleteDevice(mac, user_agent, device_alias){
	var box = Boxy.ask(device_alias, ['ȷ��', 'ȡ��'], function(r){
		if (r == 'ȷ��'){
			$.ajax({
				type:'POST',
				url: 'delete_device.php',
				data : 'mac='+mac+'&user_agent='+user_agent+'&device_alias='+device_alias,
				dataType: 'json',
				error : function(json) {
					Boxy.tip('ɾ���豸�쳣�������²�����',function(){},{iserror: true});
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
						initTime();//��ʼ����ѯʱ��
						queryUserDevice();//��ѯ�û��豸
						queryConsumeDevice();//��ѯ�����豸����
						setSelectDeviceTab("������ϸ");
						queryOnlineList();//��ѯ�˺������ն��б�
//						setSelectDeviceTab("������ϸ");
//						queryTotalConsume("");//��ѯ�����豸��������ϸ����
//						queryConsumeList("", 0, 1);//��ѯ�����豸��������ϸ��1ҳ
					}
				}
			});
		}else{
		}
	},{
		titleicon: 'icon-icon_info_alt',
		title: "ɾ���豸",
		modal: true,
		closeable: true
	});
}

// ��ѯδ���ʼ�
function queryUnreadMail(){
	$.ajax({
		type: 'get',
		url: 'get_unread_mail.php',
		dataType: 'json',
		error : function(json) {
			Boxy.tip('��ѯδ���ʼ��쳣�������²�ѯ��',function(){},{iserror: true});
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

//��ѯ�����豸����
function queryConsumeDevice(){
	var start_time=$("input[name='start_time']").val();
	var end_time=$("input[name='end_time']").val();
	$.ajax({
		type: 'get',
		url: 'get_consume_device.php?start_time='+start_time+'&end_time='+end_time,
		dataType: 'json',
		error : function(json) {
			Boxy.tip('��ѯ�����豸�����쳣�������²�ѯ��',function(){},{iserror: true});
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
				//��ѯ�����豸����ʧ�ܴ���
			}
			else if(json.result == 'ok'){
				//��ʼ���豸����Tab
				initSelectDeviceTab(json.data);
			}
		}
	});
}

//��ʼ���豸����Tab
function initSelectDeviceTab(consume_device_data){
	//����豸����Tab(����������ϸ�ͳ�ֵ��ϸ)
	for(var i=$(".nav-tabs").find("li").length-1; i>2; i--){
		$(".nav-tabs").find("li").eq(i).remove();
	}
	//�����豸����Tab
	for(var i=0; i<consume_device_data.length; i++){
		$(".nav-tabs").find("li").eq(i+2).after('<li ><a href="#">'+consume_device_data[i].device_alias+'</a></li>');
	}

	//���°��豸����Tabѡ���¼�
	for(var i=0; i<$(".nav-tabs").find("li").length; i++){
		$(".nav-tabs").find("li").eq(i).on('click',function(){
			setSelectDeviceTab($(this).text());//�����豸����Tabѡ����
			if($(this).text() == "������ϸ"){
				queryOnlineList();//��ѯ�˺������ն��б�
			}
			else if($(this).text() == "������ϸ"){
				queryTotalConsume("");//��ѯ�����豸��������ϸ����
				queryConsumeList("", 0, 1);//��ѯ�����豸��������ϸ��1ҳ
			}
			else if($(this).text() == "��ֵ��ϸ"){
				queryTotalBilling();//��ѯ�����豸�ĳ�ֵ��ϸ����
				queryBillingList(0, 1);//��ѯ�����豸�ĳ�ֵ��ϸ��1ҳ
			}
			else{
				queryTotalConsume($(this).text());//��ѯָ���豸��������ϸ����
				queryConsumeList($(this).text(), 0, 1);//��ѯָ���豸��������ϸ��1ҳ
			}
		});
	}
}

//�����豸����Tabѡ����
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
	if(device_alias == "������ϸ"){
		html_data += "<th>#</th>";
		html_data += "<th>����ʱ��</th>";
		html_data += "<th>����ʱ��</th>";
		html_data += "<th>��������</th>";
		html_data += "<th>��¼IP</th>";
	}
	else if(device_alias == "��ֵ��ϸ"){
		html_data += "<th>#</th>";
		html_data += "<th>��ֵʱ��</th>";
		html_data += "<th>��ֵǰ</th>";
		html_data += "<th>��ֵ��</th>";
		html_data += "<th>��ֵ���</th>";
		html_data += "<th>��ע</th>";
	}
	else{
		html_data += "<th>#</th>";
		html_data += "<th>����ʱ��</th>";
		html_data += "<th>����ʱ��</th>";
		html_data += "<th>ʹ������</th>";
		html_data += "<th>�Ʒѽ��</th>";
		html_data += "<th>��¼IP</th>";
		html_data += "<th>��ע</th>";
	}
	$(".table").find("thead").find("tr").html(html_data);
}

//���÷�ҳѡ��Tab
function initSelectPageTab(total_record_num, page_index){
	if(total_record_num <= page_size){
		$(".pagination").html("");
	}
	else{
		var total_page = 0;
		if(total_record_num % page_size == 0){//��ҳ��
			total_page = parseInt(total_record_num / page_size);
		}else{
			total_page = parseInt(total_record_num / page_size) + 1;
		}

		var html_data = '';
		if(total_page > max_select_page){
			// ��ʾ��ҳѡ��
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
			
			// ��ʾ��ҳѡ��
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

	//���°󶨷�ҳѡ��Tabѡ���¼�(��¼�����������¼�)
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
			initSelectPageTab(total_record_num, select_page);//�������÷�ҳѡ��Tab

			if(device_alias == "������ϸ"){
				queryConsumeList("", total_record_num, select_page);//��ѯ�����豸��������ϸ��ҳ
			}
			else if(device_alias == "��ֵ��ϸ"){
				queryBillingList(total_record_num, select_page);//��ѯ�����豸�ĳ�ֵ��ϸ��ҳ
			}
			else{
				queryConsumeList(device_alias, total_record_num, select_page);//��ѯָ���豸��������ϸ��ҳ
			}
		});
	}
}

//��ѯ������ϸ����
function queryTotalConsume(device_alias){
	var start_time=$("input[name='start_time']").val();
	var end_time=$("input[name='end_time']").val();
	$.ajax({
		type: 'get',
		url: 'get_total_consume.php?start_time='+start_time+'&end_time='+end_time+'&device_alias='+device_alias,
		dataType: 'json',
		error : function(json) {
			Boxy.tip('��ѯ������ϸ�����쳣�������²�ѯ��',function(){},{iserror: true});
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
				//��ѯ������ϸ����ʧ�ܴ���
				$(".pagination").html(json.msg);
			}
			else if(json.result == 'ok'){
				initSelectPageTab(parseInt(json.count), 1);
			}
		}
	});
}

//��ѯ������ϸ��ҳ
function queryConsumeList(device_alias, total_record_num, page_index){
	var start_time = $("input[name='start_time']").val();
	var end_time = $("input[name='end_time']").val();
	var min_num = (page_index - 1) * page_size +1;
	var max_num = page_index * page_size;
	if(page_index > 1 && max_num > total_record_num) max_num = total_record_num;//�ǵ�1ҳ���ҽ����кŴ��ڼ�¼������������к�����Ϊ��¼����

	$.ajax({
		type: 'get',
		url: 'get_consume_list.php?start_time='+start_time+'&end_time='+end_time+'&min_num='+min_num+'&max_num='+max_num+'&device_alias='+device_alias,
		dataType: 'json',
		error : function(json) {
			Boxy.tip('��ѯ������ϸ��ҳ�쳣�������²�ѯ��',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'fail'){
				//��ѯ������ϸ��ҳʧ�ܴ���
				$(".table").find("tbody").html(json.msg);
			}
			else if(json.result == 'ok'){
				//��ʼ��������ϸ��ҳ����
				initConsumeList(json.data);
			}
		}
	});
}

//��ʼ��������ϸ��ҳ����
function initConsumeList(consume_list_data){
	var html_data = "";
	for(var i = 0; i < consume_list_data.length; i++){
		html_data += "<tr>";
		html_data += "<td>"+ consume_list_data[i].rn +"</td>";
		html_data += "<td>"+ consume_list_data[i].device_alias +"("+ consume_list_data[i].online_time +")</td>";
		html_data += "<td>"+ formatMintiue(consume_list_data[i].time_long) +"</td>";
		html_data += "<td>"+ fflux(consume_list_data[i].user_in_bytes) +"</td>";
		html_data += "<td>"+ consume_list_data[i].money +"Ԫ</td>";
		html_data += "<td>"+ consume_list_data[i].online_ip +"</td>";
		html_data += "<td>"+ consume_list_data[i].mark +"</td>";
		html_data += "</tr>";
	}
	$(".table").find("tbody").html(html_data);
}

//��ѯ��ֵ��ϸ����
function queryTotalBilling(){
	var start_time=$("input[name='start_time']").val();
	var end_time=$("input[name='end_time']").val();
	$.ajax({
		type: 'get',
		url: 'get_total_billing.php?start_time='+start_time+'&end_time='+end_time,
		dataType: 'json',
		error : function(json) {
			Boxy.tip('��ѯ��ֵ��ϸ�����쳣�������²�ѯ��',function(){},{iserror: true});
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
				//��ѯ��ֵ��ϸ����ʧ�ܴ���
				$(".pagination").html(json.msg);
			}
			else if(json.result == 'ok'){
				initSelectPageTab(parseInt(json.count), 1);
			}
		}
	});
}

//��ѯ��ֵ��ϸ��ҳ
function queryBillingList(total_record_num, page_inde){
	var start_time = $("input[name='start_time']").val();
	var end_time = $("input[name='end_time']").val();
	var min_num = (page_index - 1) * page_size +1;
	var max_num = page_index * page_size;
	if(page_index > 1 && max_num > total_record_num) max_num = total_record_num;//�ǵ�1ҳ���ҽ����кŴ��ڼ�¼������������к�����Ϊ��¼����
	
	$.ajax({
		type: 'get',
		url: 'get_billing_list.php?start_time='+start_time+'&end_time='+end_time+'&min_num='+min_num+'&max_num='+max_num,
		dataType: 'json',
		error : function(json) {
			Boxy.tip('��ѯ��ֵ��ϸ��ҳ�쳣�������²�ѯ��',function(){},{iserror: true});
		},
		success: function (json) {
			if(json.result == 'error'){
				Boxy.tip(json.msg,function(){},{iserror: true});
				setTimeout(function(){
					window.location = json.reback_url;
				}, 2000);
			}
			else if(json.result == 'fail'){
				//��ѯ��ֵ��ϸ��ҳʧ�ܴ���
				$(".table").find("tbody").html(json.msg);
			}
			else if(json.result == 'ok'){
				//��ʼ����ֵ��ϸ��ҳ����
				initBillingList(json.data);
			}
		}
	});
	
}

//��ʼ����ֵ��ϸ��ҳ
function initBillingList(billing_list_data){
	var html_data = "";
	for(var i = 0; i < billing_list_data.length; i++){
		html_data += "<tr>";
		html_data += "<td>"+ billing_list_data[i].rn +"</td>";
		html_data += "<td>"+ billing_list_data[i].billing_name + "("+ billing_list_data[i].billing_time +")" +"</td>";
		if(billing_list_data[i].billing_type == 3){//������
			html_data += "<td>"+fflux(billing_list_data[i].user_back_balance)+"</td>";
			html_data += "<td>"+fflux(billing_list_data[i].user_cur_balance)+"</td>";
			html_data += "<td>"+fflux(billing_list_data[i].money)+"</td>";
		}
		else{
			html_data += "<td>"+billing_list_data[i].user_back_balance+"Ԫ</td>";
			html_data += "<td>"+billing_list_data[i].user_cur_balance+"Ԫ</td>";
			html_data += "<td>"+billing_list_data[i].money+"Ԫ</td>";
		}
		html_data += "<td>"+ billing_list_data[i].mark +"</td>";
		html_data += "</tr>";
	}
	$(".table").find("tbody").html(html_data);
}

//��ѯ�˺������ն��б�
function queryOnlineList(){
	$.ajax({
		type: 'get',
		url: 'get_online_list.php',
		dataType: 'json',
		error : function(json) {
			Boxy.tip('��ѯ�����ն��б��쳣�������²�ѯ��',function(){},{iserror: true});
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

//�����˺������ն��б�
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

//��ѯ��ע��������IP�б�
function getOnlineList(){
	$("#yclose").removeAttr("onclick");
	$.ajax({
		type: 'get',
		url: 'get_online_list.php',
		dataType: 'json',
		error : function(json) {
			Boxy.tip('��ѯ�����ն��б��쳣�������²�ѯ��',function(){},{iserror: true});
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

//���ô�ע��������IP�б�
function setOnlineList(online_list_data){
	var html_data = "";
	for(var i=0;i<online_list_data.length;i++){
		html_data += '<li style="padding-left:0">';
		html_data += '<input type="checkbox" is_owner_ip="'+ online_list_data[i].is_owner_ip +'" data_online_ip="'+ online_list_data[i].online_ip +'" data_online_session="'+ online_list_data[i].online_session +'" name="id" style="margin-right:15px;" checked="checked">';
		html_data += '�ҵĵ���' + online_list_data[i].online_ip;
		if(online_list_data[i].is_owner_ip == "1") html_data += '(����)';
		html_data += '</li>';
	}
	//alert("html_data:"+ html_data);
	$('#downbox').find("ul").eq(0).html(html_data);
	
	var box = Boxy.ask($('#downbox').html(), ['ȷ��', 'ȡ��'], function(r){
		if (r == 'ȷ��'){
			if(box.getContent().find("input[type=checkbox]:checked").length == 0){
				Boxy.tip("��ѡ��Ҫ���ߵ�IP",function(){},{iserror: true});
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
					Boxy.tip('ע�������쳣,�����²�����',function(){},{iserror: true});
				},
				success: function(json) {
					//Session��ʱ������Ƿ����ض�������½ҳ
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
						//ע�������豸���ض�����F.htm
						if(had_owner){
							Boxy.tip(json.msg);
							window.location = json.reback_url;
						}
						//ע���Ǳ����豸��ر�ע���б�ҳ����ʱˢ���豸�б�
						else{
							//��ʱ��ѯ�û��豸
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
		title: 'ע��',
		modal: true,
		closeable: true,
		bottom: [{
			id: 'quxiaozidonglogin',
			title: 'ȡ���Զ���¼'
		}]
	});
	if(getCookie("md5_login") == null){
		document.getElementById("quxiaozidonglogin").checked = true;
	}
}

/******************************���ú���******************************/
// ��ʽ����ǰʱ��
function getCurentTime(datenow){
	var year = datenow.getFullYear();//��
	var month = datenow.getMonth() + 1;//��
	var day = datenow.getDate();//��
	
	var hh = datenow.getHours();//ʱ
	var mm = datenow.getMinutes();//��
	
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

//����������ʱ�����ʽ
function formatSeconds(value) {
	var theTime = parseInt(value);// ��
	var theTime1 = 0;// ��
	var theTime2 = 0;// Сʱ
	if(theTime > 60) {
		theTime1 = parseInt(theTime/60);
		theTime = parseInt(theTime%60);
		if(theTime1 > 60) {
			theTime2 = parseInt(theTime1/60);
			theTime1 = parseInt(theTime1%60);
		}
	}
	var result = ""+parseInt(theTime)+"��";
	if(theTime1 > 0) {
		result = ""+parseInt(theTime1)+"��"+result;
	}
	if(theTime2 > 0) {
		result = ""+parseInt(theTime2)+"Сʱ"+result;
	}
	return result;
}

//ʱ�䵥λ����(�����������ʱ��)
function formatMintiue(value) {
	var theTime = parseInt(value);// ��λ������
	var theTime2 = 0;// Сʱ
	var theTime3 = 0;// ��
	
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
		result = ""+parseInt(theTime)+"����"+result;
	}
	if(theTime2 > 0) {
		result = ""+parseInt(theTime2)+"Сʱ"+result;
	}
	if(theTime3 > 0) {
		result = ""+parseInt(theTime3)+"��"+result;
	}
	return result;
}
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
//�ж��Ƿ�֧��placeholder
function isPlaceholder() {
	var input = document.createElement('input');
	return "placeholder" in input;
}

//��֧�ֵĴ���
function replacePlaceholder(){
	if (!isPlaceholder()) {
		$(function() { 
			var form = $(this); 
			//���������ı������placeholderģ���¼�
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
			//����������������placeholderģ���¼�
			var elementsPass = form.find("input[type='password'][placeholder]");
			elementsPass.each(function(i) {
				var s = $(this);
				var pValue = s.attr("placeholder");
				var sValue = s.val();
				if (pValue) {
					if (sValue == '') {
						//DOM��֧��type���޸ģ���Ҫ������������ԣ������µ�DOM
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

//��ȡcookie
function getCookie(name) {
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null)
		return unescape(arr[2]);
	return null;
}

//ɾ��cookie
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

//����cookie
function setCookie(name, value) {
	var Days = 360;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=logout;domain=" + location.hostname + ";expires=" + exp.toGMTString()+";path=/";
}