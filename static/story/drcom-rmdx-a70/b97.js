(function($) {
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
				//���������ı�������placeholderģ���¼�
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
				//�����������������placeholderģ���¼�
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
	replacePlaceholder();
})(jQuery);