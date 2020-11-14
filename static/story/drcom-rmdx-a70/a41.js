/********************  公用配置参数  ********************/
var loginTitle = "";// 登录标题

var logoutTitle = "";// 注销标题

var thankWord = "";// 感谢词

var welcomeWord = "";// 欢迎词

var redirectLink = "";// 登录重定向

var accountSuffix = "";// 账号后缀

var companyInfo = "";// 公司信息

var companyLink = "";// 公司链接

var enPortal = 0;// 是否支持Portal协议，进行第三方AC认证(0-不支持；1-支持)

var enPerceive = 0;// 是否启用2166无感知(0-不启用；1-启用)

var enMd5 = 0;// 是否支持MD5(0-不支持；1-支持)

var enHttps = 0;// 是否需要Https(0-不需要；1-需要)

var regURL = "http://cloud.doctorcom.com:8081/CloudSelf/";// 短信自服务

var machineno = "";// 设备编号

var loginMatchMode = 0;// VLAN登录页匹配模式：0-默认；1-VLAN ID；2-IP(处理方式为0才生效)

var matchVlanArr = new Array(4);// VLAN ID匹配数组
matchVlanArr[0] = "11|11";
matchVlanArr[1] = "12|12";
matchVlanArr[2] = "13|13";
matchVlanArr[3] = "14|14";

var matchIPArr = new Array(4);// IP匹配数组
matchIPArr[0] = "192.168.31.10|192.168.31.10";
matchIPArr[1] = "192.168.31.17|192.168.31.20";
matchIPArr[2] = "192.168.31.11|192.168.31.12";
matchIPArr[3] = "|";

/********************  幻灯片参数  ********************/
var advertNum = 3;// 广告个数(最少1个，最大5个，默认3个)

var rvtPCImgArr = new Array(5);// 广告图片(PC)
rvtPCImgArr[0] = "a04.jpg";
rvtPCImgArr[1] = "a05.jpg";
rvtPCImgArr[2] = "a06.jpg";
rvtPCImgArr[3] = "";
rvtPCImgArr[4] = "";

var rvtMobileImgArr = new Array(5);// 广告图片(手机)
rvtMobileImgArr[0] = "a34.jpg";
rvtMobileImgArr[1] = "a35.jpg";
rvtMobileImgArr[2] = "a36.jpg";
rvtMobileImgArr[3] = "";
rvtMobileImgArr[4] = "";

var rvtTextArr = new Array(5);// 广告文字
rvtTextArr[0] = "广告测试图1";
rvtTextArr[1] = "广告测试图2";
rvtTextArr[2] = "广告测试图3";
rvtTextArr[3] = "";
rvtTextArr[4] = "";

var rvtLinkArr = new Array(5);// 广告链接
rvtLinkArr[0] = "http://plaza.wanda.cn";
rvtLinkArr[1] = "http://www.wanda.cn/group/zzcy/sydc/7360.shtml";
rvtLinkArr[2] = "http://e.weibo.com/27wanda";
rvtLinkArr[3] = "";
rvtLinkArr[4] = "";

/********************  VLAN广告参数  ********************/
var vlanTitleArr = new Array(4);// VLAN层说明
vlanTitleArr[0] = "F1";
vlanTitleArr[1] = "F2";
vlanTitleArr[2] = "F3";
vlanTitleArr[3] = "F4";

var matchAdvertNumArr = new Array(4);// VLAN层广告个数
matchAdvertNumArr[0] = 4;
matchAdvertNumArr[1] = 4;
matchAdvertNumArr[2] = 4;
matchAdvertNumArr[3] = 4;

var firstImgArr = new Array(4);// 首层图片
firstImgArr[0] = "a47.jpg";
firstImgArr[1] = "a48.jpg";
firstImgArr[2] = "a49.jpg";
firstImgArr[3] = "a50.jpg";

var firstTextArr = new Array(4);// 首层文字
firstTextArr[0] = "H&M";
firstTextArr[1] = "VIGOSS";
firstTextArr[2] = "Pull&Bear";
firstTextArr[3] = "ONLY";

var firstHrefArr = new Array(4);// 首层链接
firstHrefArr[0] = "http://www.hm.com";
firstHrefArr[1] = "http://e.weibo.com/27wanda";
firstHrefArr[2] = "http://www.pullandbear.com";
firstHrefArr[3] = "http://www.only.cn";

var secondImgArr = new Array(4);// 第2层图片
secondImgArr[0] = "a51.jpg";
secondImgArr[1] = "a52.jpg";
secondImgArr[2] = "a53.jpg";
secondImgArr[3] = "a54.jpg";

var secondTextArr = new Array(4);// 第2层文字
secondTextArr[0] = "星巴克";
secondTextArr[1] = "汉拿山";
secondTextArr[2] = "必胜客";
secondTextArr[3] = "和民居食屋";

var secondHrefArr = new Array(4);// 第2层链接
secondHrefArr[0] = "www.starbucks.cn";
secondHrefArr[1] = "www.hannashan.cn";
secondHrefArr[2] = "http://www.pizzahut.com.cn/";
secondHrefArr[3] = "http://e.weibo.com/27wanda";

var thirdImgArr = new Array(4);// 第3层图片
thirdImgArr[0] = "a55.jpg";
thirdImgArr[1] = "a56.jpg";
thirdImgArr[2] = "a57.jpg";
thirdImgArr[3] = "a58.jpg";

var thirdTextArr = new Array(4);// 第3层文字
thirdTextArr[0] = "GUESS";
thirdTextArr[1] = "LEVIS";
thirdTextArr[2] = "CK";
thirdTextArr[3] = "NOVO百货";

var thirdHrefArr = new Array(4);// 第3层链接
thirdHrefArr[0] = "http://www.guess.com";
thirdHrefArr[1] = "http://e.weibo.com/27wanda";
thirdHrefArr[2] = "http://www.calvinklein.com";
thirdHrefArr[3] = "http://www.novoconcept.com.cn";

var fourthImgArr = new Array(4);// 第4层图片
fourthImgArr[0] = "a59.jpg";
fourthImgArr[1] = "a60.jpg";
fourthImgArr[2] = "a61.jpg";
fourthImgArr[3] = "a62.jpg";

var fourthTextArr = new Array(4);// 第4层文字
fourthTextArr[0] = "EMU服饰";
fourthTextArr[1] = "HIM汉崇";
fourthTextArr[2] = "汉堡王";
fourthTextArr[3] = "华润万家";

var fourthHrefArr = new Array(4);// 第4层链接
fourthHrefArr[0] = "http://www.emuchina.com.cn";
fourthHrefArr[1] = "http://www.himuomo.com";
fourthHrefArr[2] = "http://www.bkchina.cn";
fourthHrefArr[3] = "http://www.crv.com.cn";

var matchImgArr = new Array(4);// 图片匹配数组
matchImgArr[0] = firstImgArr;
matchImgArr[1] = secondImgArr;
matchImgArr[2] = thirdImgArr;
matchImgArr[3] = fourthImgArr;

var matchTextArr = new Array(4);// 文字匹配数组
matchTextArr[0] = firstTextArr;
matchTextArr[1] = secondTextArr;
matchTextArr[2] = thirdTextArr;
matchTextArr[3] = fourthTextArr;

var matchHrefArr = new Array(4);// 链接匹配数组
matchHrefArr[0] = firstHrefArr;
matchHrefArr[1] = secondHrefArr;
matchHrefArr[2] = thirdHrefArr;
matchHrefArr[3] = fourthHrefArr;

/********************  公用函数  ********************/
ps = 1; pid = '1'; calg = '12345678';
function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xFFFF)
}
function rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}
function cmn(q, a, b, x, s, t) {
    return safe_add(rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
}
function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
}
function coreMD5(x) {
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = ff(a, b, c, d, x[i + 0], 7, -680876936)
        d = ff(d, a, b, c, x[i + 1], 12, -389564586)
        c = ff(c, d, a, b, x[i + 2], 17, 606105819)
        b = ff(b, c, d, a, x[i + 3], 22, -1044525330)
        a = ff(a, b, c, d, x[i + 4], 7, -176418897)
        d = ff(d, a, b, c, x[i + 5], 12, 1200080426)
        c = ff(c, d, a, b, x[i + 6], 17, -1473231341)
        b = ff(b, c, d, a, x[i + 7], 22, -45705983)
        a = ff(a, b, c, d, x[i + 8], 7, 1770035416)
        d = ff(d, a, b, c, x[i + 9], 12, -1958414417)
        c = ff(c, d, a, b, x[i + 10], 17, -42063)
        b = ff(b, c, d, a, x[i + 11], 22, -1990404162)
        a = ff(a, b, c, d, x[i + 12], 7, 1804603682)
        d = ff(d, a, b, c, x[i + 13], 12, -40341101)
        c = ff(c, d, a, b, x[i + 14], 17, -1502002290)
        b = ff(b, c, d, a, x[i + 15], 22, 1236535329)
        a = gg(a, b, c, d, x[i + 1], 5, -165796510)
        d = gg(d, a, b, c, x[i + 6], 9, -1069501632)
        c = gg(c, d, a, b, x[i + 11], 14, 643717713)
        b = gg(b, c, d, a, x[i + 0], 20, -373897302)
        a = gg(a, b, c, d, x[i + 5], 5, -701558691)
        d = gg(d, a, b, c, x[i + 10], 9, 38016083)
        c = gg(c, d, a, b, x[i + 15], 14, -660478335)
        b = gg(b, c, d, a, x[i + 4], 20, -405537848)
        a = gg(a, b, c, d, x[i + 9], 5, 568446438)
        d = gg(d, a, b, c, x[i + 14], 9, -1019803690)
        c = gg(c, d, a, b, x[i + 3], 14, -187363961)
        b = gg(b, c, d, a, x[i + 8], 20, 1163531501)
        a = gg(a, b, c, d, x[i + 13], 5, -1444681467)
        d = gg(d, a, b, c, x[i + 2], 9, -51403784)
        c = gg(c, d, a, b, x[i + 7], 14, 1735328473)
        b = gg(b, c, d, a, x[i + 12], 20, -1926607734)
        a = hh(a, b, c, d, x[i + 5], 4, -378558)
        d = hh(d, a, b, c, x[i + 8], 11, -2022574463)
        c = hh(c, d, a, b, x[i + 11], 16, 1839030562)
        b = hh(b, c, d, a, x[i + 14], 23, -35309556)
        a = hh(a, b, c, d, x[i + 1], 4, -1530992060)
        d = hh(d, a, b, c, x[i + 4], 11, 1272893353)
        c = hh(c, d, a, b, x[i + 7], 16, -155497632)
        b = hh(b, c, d, a, x[i + 10], 23, -1094730640)
        a = hh(a, b, c, d, x[i + 13], 4, 681279174)
        d = hh(d, a, b, c, x[i + 0], 11, -358537222)
        c = hh(c, d, a, b, x[i + 3], 16, -722521979)
        b = hh(b, c, d, a, x[i + 6], 23, 76029189)
        a = hh(a, b, c, d, x[i + 9], 4, -640364487)
        d = hh(d, a, b, c, x[i + 12], 11, -421815835)
        c = hh(c, d, a, b, x[i + 15], 16, 530742520)
        b = hh(b, c, d, a, x[i + 2], 23, -995338651)
        a = ii(a, b, c, d, x[i + 0], 6, -198630844)
        d = ii(d, a, b, c, x[i + 7], 10, 1126891415)
        c = ii(c, d, a, b, x[i + 14], 15, -1416354905)
        b = ii(b, c, d, a, x[i + 5], 21, -57434055)
        a = ii(a, b, c, d, x[i + 12], 6, 1700485571)
        d = ii(d, a, b, c, x[i + 3], 10, -1894986606)
        c = ii(c, d, a, b, x[i + 10], 15, -1051523)
        b = ii(b, c, d, a, x[i + 1], 21, -2054922799)
        a = ii(a, b, c, d, x[i + 8], 6, 1873313359)
        d = ii(d, a, b, c, x[i + 15], 10, -30611744)
        c = ii(c, d, a, b, x[i + 6], 15, -1560198380)
        b = ii(b, c, d, a, x[i + 13], 21, 1309151649)
        a = ii(a, b, c, d, x[i + 4], 6, -145523070)
        d = ii(d, a, b, c, x[i + 11], 10, -1120210379)
        c = ii(c, d, a, b, x[i + 2], 15, 718787259)
        b = ii(b, c, d, a, x[i + 9], 21, -343485551)
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
    }
    return [a, b, c, d];
}
function binl2hex(binarray) {
    var hex_tab = "0123456789abcdef"
    var str = ""
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
		hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF)
    }
    return str;
}
function binl2b64(binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    var str = "";
    for (var i = 0; i < binarray.length * 32; i += 6) {
        str += tab.charAt(((binarray[i >> 5] << (i % 32)) & 0x3F) | ((binarray[i >> 5 + 1] >> (32 - i % 32)) & 0x3F))
    }
    return str;
}
function str2binl(str) {
    var nblk = ((str.length + 8) >> 6) + 1 // number of 16-word blocks
    var blks = new Array(nblk * 16)
    for (var i = 0; i < nblk * 16; i++)
        blks[i] = 0
    for (var i = 0; i < str.length; i++)
        blks[i >> 2] |= (str.charCodeAt(i) & 0xFF) << ((i % 4) * 8)
    blks[i >> 2] |= 0x80 << ((i % 4) * 8)
    blks[nblk * 16 - 2] = str.length * 8
    return blks;
}
function strw2binl(str) {
    var nblk = ((str.length + 4) >> 5) + 1 // number of 16-word blocks
    var blks = new Array(nblk * 16)
    for (var i = 0; i < nblk * 16; i++) blks[i] = 0
    for (var i = 0; i < str.length; i++)
        blks[i >> 1] |= str.charCodeAt(i) << ((i % 2) * 16)
    blks[i >> 1] |= 0x80 << ((i % 2) * 16)
    blks[nblk * 16 - 2] = str.length * 16
    return blks;
}
function hexMD5(str) {
    return binl2hex(coreMD5(str2binl(str)));
}
function hexMD5w(str) {
    return binl2hex(coreMD5(strw2binl(str)));
}
function b64MD5(str) {
    return binl2b64(coreMD5(str2binl(str)));
}
function b64MD5w(str) {
    return binl2b64(coreMD5(strw2binl(str)));
}
function calcMD5(str) {
    return binl2hex(coreMD5(str2binl(str)));
}
function xproc1(str) {
    var EChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out, i, len, c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += EChars.charAt(c1 >> 2);
            out += EChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += EChars.charAt(c1 >> 2);
            out += EChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += EChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += EChars.charAt(c1 >> 2);
        out += EChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += EChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += EChars.charAt(c3 & 0x3F);
    }
    return out;
}
function cc(ss) {
    f0.R1.value = ss;
}

// 注销
function wc() {
    if (window.confirm("确定注销? Logout Confirmed?")) {
        if (enPortal == 1) {
            var iTermType = getTermType();
            document.f1.action = window.location.protocol + "//" + window.location.hostname + ":801/eportal/?c=ACSetting&a=Logout&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname') + "&port=" + location.port + "&iTermType=" + iTermType;
            //			alert("document.f1.action:"+document.f1.action);
            document.f1.submit();
            return false;
        }
        s2 = 1;
        window.location = 'F.htm';
    }
}

// 登录
function ee() {
    document.getElementById("login").disabled = true;

    if (f1.DDDDD.value == "") {
        alert("请输入账号! Please enter your account number!");
        document.getElementById("login").disabled = false;
        return false;
    }

    //write cookies
    if (document.getElementsByName("save_me")[0].checked) {
        var uname = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        setCookie("md5_login", uname + "|" + pass);
    } else {
        delCookie("md5_login");
    }
    //--end write

    if (enPortal == 1) {
        var iTermType = getTermType();
        document.f1.action = window.location.protocol + "//" + window.location.hostname + ":801/eportal/?c=ACSetting&a=Login&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname') + "&port=" + location.port + "&iTermType=" + iTermType;
        //		alert("document.f1.action:"+document.f1.action);
        document.getElementById("login").disabled = false;
        document.f1.submit();
        return false;
    }

    f0.DDDDD.value = f1.DDDDD.value;
    if (ps == 0) {
        f0.upass.value = xproc1(f1.upass.value);
    }
    else {
        tmpchar = pid + f1.upass.value + calg;
        f0.upass.value = calcMD5(tmpchar) + calg + pid;
        f0.R2.value = 1;
    }

    document.getElementById("login").disabled = false;
    document.f0.submit();
    return false;
}


//重定向到成功页 3.htm，为注册成功所提供 
function zhucheRedrect() {
    //window.location = location.protocol + "//" + location.hostname + "/3.htm";
    var postForm = document.getElementsByName('uidPostForm')[0];
    postForm.action = window.location.protocol + "//" + window.location.hostname + ":801/eportal/Bootstrap/WebRoot/index.php";
    /*
    // 访问设备:0-其他；1-PC；2-手机；3-平板
    var iTermType = getTermType();
    if (iTermType == 2) {
        window.location = location.protocol + "//" + location.hostname + "/a33.htm";
    } else {
        postForm.submit();
    }
    */
	postForm.submit();
}

function getLoginInfo(uname, upass) {
    /*
	var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/controller/Rucedu.php";
	var data="&uname="+uname+"&upass="+upass+"&turl="+turl+"&wlanuserip="+wlanuserip+"&wlanacip="+wlanacip+"&wlanacname="+wlanacname+"&port="+port+"&iTermType="+iTermType+"&enPortal="+enPortal;
	createGlobalXMLHttpRequest();
	Global_XMLHttpReq.open("POST", url, true);
	Global_XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	Global_XMLHttpReq.onreadystatechange=function(){
		if(Global_XMLHttpReq.readyState==4){
			if(Global_XMLHttpReq.status==200){
				var responseText = Global_XMLHttpReq.responseText;
				var json =eval("(" +responseText +")");
				if(json.result == 'ok'){	
					document.getElementById("errormsg").innerHTML='登录成功，正在跳转...';
					window.location.href=json.msg;
				}
				else{					
					document.getElementById("errormsg").innerHTML=json.msg;
					document.getElementById("errormsg").style.display= "block";
				}				
			}
		}		
	}
	Global_XMLHttpReq.send(data);
	*/

    // 访问设备:0-其他；1-PC；2-手机；3-平板
    var R6=0;
    var iTermType = getTermType();
    if (iTermType == 2) {
        R6 = 1;
    }

    var url = window.location.hostname;
    //alert(url);
    var data = "DDDDD=" + uname + "&upass=" + upass + "&0MKKey=123456&R6="+R6;

    //alert(data);
    createGlobalXMLHttpRequest();
    Global_XMLHttpReq.open("POST", url, true);
    Global_XMLHttpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Global_XMLHttpReq.onreadystatechange = function () {
        if (Global_XMLHttpReq.readyState == 4) {
            if (Global_XMLHttpReq.status == 200) {
                var responseText = Global_XMLHttpReq.responseText;

                //alert(responseText);

                var regMsg = /Msg=\d{1,2};/;
                var regMsga = /msga='.*';/;
                var msg;
                var msga;
                var aryResult = regMsg.exec(responseText);
                if (!!aryResult) {
                    var tempStr = aryResult[0];
                    tempStr = tempStr.substr(0, tempStr.length - 1);
                    tempStr = tempStr.substr(4, tempStr.length - 1);
                    msg = parseInt(tempStr);
                    //console.log('msg:' + msg);
                } else {
                    //console.log('cant find msg,check!');
                }

                aryResult = regMsga.exec(responseText);
                if (!!aryResult) {
                    tempStr = aryResult[0];
                    tempStr = tempStr.substr(0, tempStr.length - 2);
                    tempStr = tempStr.substr(6, tempStr.length - 1);
                    msga = tempStr;
                    //console.log('msga:' + msga);
                } else {
                   //console.log('cant find msga,check!');
                }
                //console.log('msg:' + msg + '|msga:' + msga);
				document.getElementById("errormsg").style.display = "block";
                if (responseText.indexOf('Dr.COMWebLoginID_3.htm') > 0) {
                    document.getElementById("errormsg").innerHTML = '登录成功，正在跳转...';
                    document.getElementById("errormsg").style.display = "block";
                     //保持登录状态
                    if(typeof(document.getElementsByName("save_me")[0]) == "object"){
                        if(document.getElementsByName("save_me")[0].checked){
                            setCookie("md5_login",uname+"|"+upass);
                        }
                        else {
                            delCookie("md5_login");
                        }
                    } 

                    //登陆成功，给下面的 Form 赋值，以便 post 该 Form 出去
                    document.getElementsByName('uidPostForm')[0].UID.value = uname;

                    setTimeout(zhucheRedrect, 1000);
                    //                    window.location.hostname = 'url' + '/a09.htm';
                } else if (msg == 0 || msg == 1) {
                    document.getElementById("errormsg").style.display = "block";
                    if (msga == null || msga == '') {
                        if (enPortal == 1) {
                            document.getElementById("errormsg").innerHTML = "AC认证失败<br>AC authentication failure";
                        }
                        else {
                            document.getElementById("errormsg").innerHTML = "账号或密码不对，请重新输入<br>Ivalid account or password, please login again";
                        }
                    }
                    else if (msga == 'error0') {
                        document.getElementById("errormsg").innerHTML = "本IP不允许Web方式登录<br>The IP does not allow Web-log";
                    }
                    else if (msga == 'error1') {
                        document.getElementById("errormsg").innerHTML = "本账号不允许Web方式登录<br>The account does not allow Web-log";
                    }
                    else if (msga == 'error2') {
                        document.getElementById("errormsg").innerHTML = "本账号不允许修改密码<br>This account does not allow change password";
                    }
                    else if (enPortal == 1) {
                        document.getElementById("errormsg").innerHTML = "注销成功 Logout successfully"
                    }
                    else {
                        document.getElementById("errormsg").innerHTML = msga;
                    }
                } else if (msg == 2) {
					document.getElementById("errormsg").innerHTML = "该账号正在使用中，请您与网管联系<br>This account is tie up, please contact network adminstration";
                }
                else if (msg == 3) {
					document.getElementById("errormsg").innerHTML = "本账号只能在指定地址使用<br>This account can be used on the appointed address only.";
                }
                else if (msg == 4) {
                    document.getElementById("errormsg").innerHTML = "本账号费用超支或时长流量超过限制<br>This account overspent or over time limit";
					document.getElementsByName('uidPostForm')[0].UID.value = uname;
                    document.getElementsByName('uidPostForm')[0].password.value = upass;
                    document.getElementsByName('uidPostForm')[0].is_lack.value = '1';
                    setTimeout(zhucheRedrect, 1000);
                     //保持登录状态
                    if(typeof(document.getElementsByName("save_me")[0]) == "object"){
                        if(document.getElementsByName("save_me")[0].checked){
                            setCookie("md5_login",uname+"|"+upass);
                        }
                        else {
                            delCookie("md5_login");
                        }
                    }                     
                }
                else if (msg == 5) {
                    document.getElementById("errormsg").innerHTML = "本账号暂停使用<br>This account has been suspended";
                }
                else if (msg == 6) {
                    document.getElementById("errormsg").innerHTML = "系统缓存太满<br>System buffer full";
                }
                else if (msg == 7) {
                    if (enPortal == 1) {
                        document.getElementById("errormsg").innerHTML ="登录错误！请与网管联系<br>System buffer full";
                    }
                    else {
                        document.getElementById("errormsg").innerHTML ="登录错误！请与网管联系<br>System buffer full";
                    }
                }
                else if (msg == 8) {
                    document.getElementById("errormsg").innerHTML = "本账号正在使用,不能修改<br>This account is in use. Unable to change";
                }
                else if (msg == 9) {
                    document.getElementById("errormsg").innerHTML = "新密码与确认新密码不匹配,不能修改<br>New password and confirmation do not match. Unable to change";

                }
                else if (msg == 10) {
                    document.getElementById("errormsg").innerHTML = "密码修改成功<br>Password Changed Successfully";

                }
                else if (msg == 11) {
					document.getElementById("errormsg").innerHTML = "本账号只能在指定地址使用<br>This account can be used on the appointed address only :";
                }
                else if (msg == 14) {
                    if (enPortal == 1) {
						document.getElementById("errormsg").innerHTML = "注销成功 Logout successfully";
                    }
                    else {
                        document.getElementById("errormsg").innerHTML = "注销成功 Logout successfully" ;
                    }
                }
                else if (msg == 15) {
                    if (enPortal == 1) {
                        document.getElementById("errormsg").innerHTML = "登录成功 Login successfully";
                    }
                    else {
                        document.getElementById("errormsg").innerHTML = "登录成功 Login successfully";
                    }
                }
            }
        }
    }
    Global_XMLHttpReq.send(data);
}


function initerce(sid) {

    var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/controller/InitData.php";
    var data = '&currentURL=' + location.href;
    alert('initerce , data: ' + data);
    createGlobalXMLHttpRequest();
    Global_XMLHttpReq.open("POST", url, true);
    Global_XMLHttpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Global_XMLHttpReq.onreadystatechange = function () {
        if (Global_XMLHttpReq.readyState == 4) {
            if (Global_XMLHttpReq.status == 200) {
                var responseText = Global_XMLHttpReq.responseText;
                alert(responseText);
                var json = eval("(" + responseText + ")");
                if (json.result == 'ok') {
                    alert('成功');
                    document.getElementById("billingCycle_begin_date").innerHTML = json.msg.billingCycle_begin_date;
                    document.getElementById("billingCycle_end_date").innerHTML = json.msg.billingCycle_end_date;
                    document.getElementById("flux_info").innerHTML = json.msg.left_flow;
                    document.getElementById("balance_info").innerHTML = json.msg.balance;
                }
                else {
                    alert('登录失败');
                    window.location.href = json.msg;
                }

            }
        }
    }
    Global_XMLHttpReq.send(data);
}



// 获取访问设备
function getTermType() {
    // 访问设备:0-其他；1-PC；2-手机；3-平板
    var iTermType = 0;
    //alert("navigator.userAgent:"+navigator.userAgent);
    if (navigator.userAgent.indexOf('Android') > 0) {// 安卓
        if (navigator.userAgent.indexOf('PAD for Mobile') > 0) {
            iTermType = 3;
        }
        else {
            iTermType = 2;
        }
    }
    else if (navigator.userAgent.indexOf('BlackBerry') > 0) {// 蓝莓
        if (navigator.userAgent.indexOf('RIM Table OS') > 0) {
            iTermType = 3;
        }
        else {
            iTermType = 2;
        }
    }
    else if (navigator.userAgent.indexOf('Mac OS') > 0) {// 苹果
        if (navigator.userAgent.indexOf('iPad') > 0) {
            iTermType = 3;
        }
        else if (navigator.userAgent.indexOf('iPhone') > 0) {
            iTermType = 2;
        }
        else {
            iTermType = 1;
        }
    }
    else if (navigator.userAgent.indexOf('X11') > 0) {// Linux
        iTermType = 1;
    }
    else if (navigator.userAgent.indexOf('SymbOS') > 0) {// 塞班
        iTermType = 2;
    }
    else if (navigator.userAgent.indexOf('Windows') > 0) {// Windows
        if (navigator.userAgent.indexOf('Windows RT') > 0) {
            iTermType = 3;
        }
        else if (navigator.userAgent.indexOf('Windows Phone') > 0) {
            iTermType = 2;
        }
        else {
            iTermType = 1;
        }
    }
    else {
        iTermType = 2;
    }
    return iTermType;
}

function goto_services() {
    document.f1.action = "do_services.php";
    document.f1.target = "_blank";
    document.f1.submit();
    //document.location.reload();
}

function post() {
    if ((f1.DDDDD.value == "") || (f1.upass.value == "")) {
        window.location.href = 'http://202.113.13.126:8080/Self/'
    }
    else {
        //write cookies
        if (document.getElementsByName("save_me")[0].checked) {
            var uname = document.getElementById("username").value;
            var pass = document.getElementById("password").value;
            setCookie("md5_login", uname + "|" + pass);
        } else {
            delCookie("md5_login");
        }
        //--end write
        var tmpchar = pid + f1.upass.value + calg;
        f1.upass.value = calcMD5(tmpchar) + calg + pid;
        document.f1.action = "http://202.113.13.126:8080/Self/LoginFromGatewayAction";

        document.f1.submit();
        return false;
    }
}

function setFormFocus() {
    if ((navigator.userAgent.indexOf('MSIE') > 0) || (navigator.userAgent.indexOf('Firefox') > 0)) return;
    document.f1.DDDDD.focus();
    document.f1.DDDDD.select();
}

function setCookie(name, value) {
    var Days = 360;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}


function get_Cookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return "";
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

//获取Html传递的参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

//判断手机号码
function IsValidMobile(value) {
    var str = new String(value);
    if (str == "") {
        return false;
    }
    if (str.length != 11) {
        return false;
    }
    var NUM = new String("0123456789");
    for (var I = 0; I < str.length; I++) {
        if (NUM.indexOf(str.charAt(I)) < 0)
            return false;
    }
    return true;
}

var Global_XMLHttpReq = false;
// 创建Global_XMLHttpReq对象；
function createGlobalXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        Global_XMLHttpReq = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        try {
            Global_XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                Global_XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) { }
        }
    }
}

var iWaitSMSTime = 60;// 下发短信倒数60秒
/*
// 服务器响应本页面并从服务器带回xmlHttp.responseText
function DoResponse(){
	if(Global_XMLHttpReq.readyState==4){
		if(Global_XMLHttpReq.status==200){
			var responseText = Global_XMLHttpReq.responseText;
			var json =eval("(" +responseText +")");
			if(json.result == 'ok'){
				var iCount = 0;// 计数器	
				var applyTime = setInterval(function(){//等待秒响应
					if(iCount++ >= iWaitSMSTime){
						document.getElementById("applyBtn").disabled=false;
						document.getElementById("applyBtn").value = "获取验证码 (SMS)";
					}
					else{
						document.getElementById("applyBtn").disabled=true;
						document.getElementById("applyBtn").value = "短信发送中 ("+(iWaitSMSTime-iCount)+")";	
					}
				}, 1000);
				alert("验证码已下发，请注意查收！");
			}
			else{
				document.getElementById("applyBtn").disabled=false;	
				alert(json.msg);
			}
		}
	}
}
*/

// 跳转至自服务
function gotoCreate(pagename, vlanid, ip, mac) {
    var url = regURL + "?machineno=" + machineno + "&mac="
			+ mac + "&vlanid=" + vlanid + "&ip=" + ip;

    var port = window.location.port;
    if (port == null || port == '') port = 80;

    var href = window.location.protocol + "//" + window.location.hostname + ":" + port + "/" + pagename;

    window.location.href = url + "&href=" + href;

    /*		
        var telephone = document.getElementById("username").value;
        if(telephone==null || telephone.length==0 ){
            alert("手机号不能为空！");   
            document.getElementById("username").focus();
            return false;
        }	
        if(!IsValidMobile(telephone)){
            alert("请输入正确的手机号！");
            document.getElementById("username").focus();
            return false;			
        }
                
        var reg=/http:\/\/([^']*):/g;
        var reg2=/http:\/\/([^']*)\//g;
        var temp="";
        if((temp=reg.exec(regURL))  != null){// 带端口
            regURL = temp[1];
        }
        else if((temp=reg2.exec(regURL)) != null){// 不带端口
            regURL = temp[1].split("\/")[0];
        }	
        else{
            alert("自服务地址无法获取");
            return false;
        }	
        
        document.getElementById("applyBtn").disabled=true;	
        
        createGlobalXMLHttpRequest();
        
        // GET方式请求的代码	
    //	var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/controller/Action.php?telephone="+ telephone +"&machine="+ machineno +"&mac="+ mac+"&regURL="+regURL;
    //	Global_XMLHttpReq.open("GET", url, true);
    //	Global_XMLHttpReq.onreadystatechange=DoResponse;//DoResponse是个回调函数
    //	Global_XMLHttpReq.send(null);
        
        // POST方式请求的代码	
        var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/controller/Action.php";
        Global_XMLHttpReq.open("POST", url, true);	
        // POST方式需要自己设置http的请求头
        Global_XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        // POST方式发送数据(如果包含中文的值，需要escape进行编码)
        var data="telephone="+ telephone +"&machine="+ machineno +"&mac="+ mac +"&regURL="+regURL;
        Global_XMLHttpReq.onreadystatechange=DoResponse;//DoResponse是个回调函数
        Global_XMLHttpReq.send(data);
    */
}

// 设置VLAN页面
function setVLANPage(iTermType) {
    if (iTermType == 2) {// 手机
        if (loginMatchMode == 1) {
            if (matchVlanArr[0] != "" && matchVlanArr[0] != "0|0" && isMatchVlan(vlanid, matchVlanArr[0])) {
                location.href = "a42.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchVlanArr[1] != "" && matchVlanArr[1] != "0|0" && isMatchVlan(vlanid, matchVlanArr[1])) {
                location.href = "a43.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchVlanArr[2] != "" && matchVlanArr[2] != "0|0" && isMatchVlan(vlanid, matchVlanArr[2])) {
                location.href = "a44.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchVlanArr[3] != "" && matchVlanArr[3] != "0|0" && isMatchVlan(vlanid, matchVlanArr[3])) {
                location.href = "a45.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else {
                //				location.href="a30.htm";
                document.getElementById("loading").style.display = "block";
                document.getElementById("loading2").style.display = "none";
            }
        }
        else if (loginMatchMode == 2) {
            if (matchIPArr[0] != "" && matchIPArr[0] != "|" && isMatchIP(ss5, matchIPArr[0])) {
                location.href = "a42.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchIPArr[1] != "" && matchIPArr[1] != "|" && isMatchIP(ss5, matchIPArr[1])) {
                location.href = "a43.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchIPArr[2] != "" && matchIPArr[2] != "|" && isMatchIP(ss5, matchIPArr[2])) {
                location.href = "a44.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchIPArr[3] != "" && matchIPArr[3] != "|" && isMatchIP(ss5, matchIPArr[3])) {
                location.href = "a45.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else {
                //				location.href="a30.htm";
                document.getElementById("loading").style.display = "block";
                document.getElementById("loading2").style.display = "none";
            }
        }
        else {
            //			location.href="a30.htm";
            document.getElementById("loading").style.display = "block";
            document.getElementById("loading2").style.display = "none";
        }
    }
    else {// 其他设备
        if (loginMatchMode == 1) {
            if (matchVlanArr[0] != "" && matchVlanArr[0] != "0|0" && isMatchVlan(vlanid, matchVlanArr[0])) {
                location.href = "a37.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchVlanArr[1] != "" && matchVlanArr[1] != "0|0" && isMatchVlan(vlanid, matchVlanArr[1])) {
                location.href = "a38.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchVlanArr[2] != "" && matchVlanArr[2] != "0|0" && isMatchVlan(vlanid, matchVlanArr[2])) {
                location.href = "a39.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchVlanArr[3] != "" && matchVlanArr[3] != "0|0" && isMatchVlan(vlanid, matchVlanArr[3])) {
                location.href = "a40.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else {
                //				location.href="a70.htm";
                document.getElementById("loading").style.display = "block";
                document.getElementById("loading2").style.display = "none";
            }
        }
        else if (loginMatchMode == 2) {
            if (matchIPArr[0] != "" && matchIPArr[0] != "|" && isMatchIP(ss5, matchIPArr[0])) {
                location.href = "a37.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchIPArr[1] != "" && matchIPArr[1] != "|" && isMatchIP(ss5, matchIPArr[1])) {
                location.href = "a38.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchIPArr[2] != "" && matchIPArr[2] != "|" && isMatchIP(ss5, matchIPArr[2])) {
                location.href = "a39.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else if (matchIPArr[3] != "" && matchIPArr[3] != "|" && isMatchIP(ss5, matchIPArr[3])) {
                location.href = "a40.htm?vlanid=" + vlanid + "&ip=" + ss5 + "&mac=" + ss4 + "&wlanuserip=" + getQueryString('wlanuserip') + "&wlanacip=" + getQueryString('wlanacip') + "&wlanacname=" + getQueryString('wlanacname');
            }
            else {
                //				location.href="a70.htm";
                document.getElementById("loading").style.display = "block";
                document.getElementById("loading2").style.display = "none";
            }
        }
        else {
            //			location.href="a70.htm";
            document.getElementById("loading").style.display = "block";
            document.getElementById("loading2").style.display = "none";
        }
    }
}

// 设置VLAN图片
function setVlanImg(vlanid) {
    for (var i = 0; i < matchVlanArr.length; i++) {
        if (matchVlanArr[i] != "" && matchVlanArr[i] != "0|0" && isMatchVlan(vlanid, matchVlanArr[i])) {
            var tempImgArr = matchImgArr[i];
            var tempTextArr = matchTextArr[i];
            var tempHrefArr = matchHrefArr[i];
            for (var j = 0; j < tempImgArr.length; j++) {
                if (j < parseInt(matchAdvertNumArr[i])) {
                    var imgHtml = "<a href='" + tempHrefArr[j] + "' target='_blank'>" + "<img src='" + tempImgArr[j] + "' style='CURSOR: hand' title='" + tempTextArr[j] + "' width='130' height='173'>" + "</a>";
                    var textHtml = "<h1><a href='" + tempHrefArr[j] + "' target='_blank'>" + tempTextArr[j] + "</a></h1>";
                    document.getElementById("vlanAdvert" + j).innerHTML = imgHtml + textHtml;
                }
                else {
                    document.getElementById("vlanAdvert" + j).innerHTML = "";
                }
            }
            document.getElementById("vlanLayer").innerHTML = vlanTitleArr[i];
            break;
        }
    }
}

// 匹配VLAN ID
function isMatchVlan(val, val2) {
    var minVlan = val2.split("|")[0];
    var maxVlan = val2.split("|")[1];
    if (parseInt(val) >= parseInt(minVlan) && parseInt(val) <= parseInt(maxVlan)) {
        return true;
    }
    return false;
}

// 匹配IP
function isMatchIP(val, val2) {
    var startIP = val2.split("|")[0];
    var endIP = val2.split("|")[1];
    if (compareIP(val, startIP) == -1 || compareIP(val, endIP) == 1) {
        return false;
    }
    return true;
}

// 比较两个ip的大小,如果大于，返回1，等于返回0，小于返回-1
function compareIP(ipBegin, ipEnd) {
    if (ipBegin == '' && ipEnd == '') return 0;
    var temp1;
    var temp2;
    temp1 = ipBegin.split(".");
    temp2 = ipEnd.split(".");
    for (var i = 0; i < 4; i++) {
        if (parseInt(temp1[i]) > parseInt(temp2[i])) {
            return 1;
        }
        else if (parseInt(temp1[i]) < parseInt(temp2[i])) {
            return -1;
        }
    }
    return 0;
}

// 启动广告
function startAdvert(type) {
    var isIE = (document.all) ? true : false;

    var $ = function (id) {
        return "string" == typeof id ? document.getElementById(id) : id;
    };

    var Class = {
        create: function () {
            return function () { this.initialize.apply(this, arguments); }
        }
    }

    var Extend = function (destination, source) {
        for (var property in source) {
            destination[property] = source[property];
        }
    }

    var Bind = function (object, fun) {
        return function () {
            return fun.apply(object, arguments);
        }
    }

    var Each = function (list, fun) {
        for (var i = 0, len = list.length; i < len; i++) { fun(list[i], i); }
    };

    //ie only
    var RevealTrans = Class.create();
    RevealTrans.prototype = {
        initialize: function (container, options) {
            this._img = document.createElement("img");
            this._a = document.createElement("a");

            this._timer = null;//计时器
            this.Index = 0;//显示索引
            this._onIndex = -1;//当前索引

            this.SetOptions(options);

            this.Auto = !!this.options.Auto;
            this.Pause = Math.abs(this.options.Pause);
            this.Duration = Math.abs(this.options.Duration);
            this.Transition = parseInt(this.options.Transition);
            this.List = this.options.List;
            this.onShow = this.options.onShow;

            //初始化显示区域
            this._img.style.visibility = "hidden";//第一次变换时不显示红x图
            this._img.style.width = this._img.style.height = "100%"; this._img.style.border = 0;
            this._img.onmouseover = Bind(this, this.Stop);
            this._img.onmouseout = Bind(this, this.Start);
            isIE && (this._img.style.filter = "revealTrans()");

            this._a.target = "_blank";

            $(container).appendChild(this._a).appendChild(this._img);
        },
        //设置默认属性
        SetOptions: function (options) {
            this.options = {//默认值
                Auto: true,//是否自动切换
                Pause: 5000,//停顿时间(微妙)
                Duration: 2,//变换持续时间(秒)
                Transition: 23,//变换效果(23为随机)
                List: [],//数据集合,如果这里不设置可以用Add方法添加
                onShow: function () { }//变换时执行
            };
            Extend(this.options, options || {});
        },
        Start: function () {
            clearTimeout(this._timer);
            //如果没有数据就返回
            if (!this.List.length) return;
            //修正Index
            if (this.Index < 0 || this.Index >= this.List.length) { this.Index = 0; }
            //如果当前索引不是显示索引就设置显示
            if (this._onIndex != this.Index) { this._onIndex = this.Index; this.Show(this.List[this.Index]); }
            //如果要自动切换
            if (this.Auto) {
                this._timer = setTimeout(Bind(this, function () { this.Index++; this.Start(); }), this.Duration * 1000 + this.Pause);
            }
        },
        //显示
        Show: function (list) {
            if (isIE) {
                //设置变换参数
                with (this._img.filters.revealTrans) {
                    Transition = this.Transition; Duration = this.Duration;
                    apply();
                    play();
                }
            }
            this._img.style.visibility = "";
            //设置图片属性
            this._img.src = list.img; this._img.alt = list.text;
            //设置链接
            !!list["url"] ? (this._a.href = list["url"]) : this._a.removeAttribute("href");
            //附加函数
            this.onShow();
        },
        //添加变换对象
        Add: function (sIimg, sText, sUrl) {
            this.List.push({ img: sIimg, text: sText, url: sUrl });
        },
        //停止
        Stop: function () {
            clearTimeout(this._timer);
        }
    };

    var rvt = new RevealTrans("idPicShow");
    //添加变换对象
    if (type == 1) { // 手机
        for (var i = 0; i < advertNum; i++) {
            rvt.Add(rvtMobileImgArr[i], rvtTextArr[i], rvtLinkArr[i]);
        }
    }
    else {
        for (var i = 0; i < advertNum; i++) {
            rvt.Add(rvtPCImgArr[i], rvtTextArr[i], rvtLinkArr[i]);
        }
    }
    var oList = $("idPicList"), oText = $("idPicText"), arrImg = [];
    var oNum = $("idNum"), arrNum = [];
    //设置图片列表
    Each(rvt.List, function (list, i) {
        //按钮式
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        arrNum[i] = li;
        oNum.appendChild(li);
        //事件设置
        rvt.onmouseover = li.onmouseover = function () { rvt.Auto = false; rvt.Index = i; rvt.Start(); };
        rvt.onmouseout = li.onmouseout = function () { rvt.Auto = true; rvt.Start(); };
    });

    //设置图片列表样式 文本显示区域
    rvt.onShow = function () {
        var i = this.Index, list = this.List[i];
        Each(arrNum, function (o) {
            o.className = "";
        });
        arrNum[i].className = "on";
    }
    rvt.Start();
}

var timeID;
//页面的定时刷新
function timingRefresh() {
    if (timeID != null) window.clearInterval(timeID);//每次调用该方法前先将原先那个定时器取消
    timeID = window.setInterval("startKeepAlive()", 60000);//每60秒自动刷新一次
}

var disconnectCount = 0;
// 获取保活状态
function startKeepAlive() {
    var url = window.location.protocol + "//" + window.location.hostname + ":9002";

    createGlobalXMLHttpRequest();
    Global_XMLHttpReq.open("GET", url, true);
    Global_XMLHttpReq.onreadystatechange = function () {
        if (Global_XMLHttpReq.readyState == 4) {
            //			alert("Global_XMLHttpReq.status:"+Global_XMLHttpReq.status);
            if (Global_XMLHttpReq.status == 0) {
                disconnectCount++;
                if (disconnectCount > 3) {// 断连次数超过3次,则中断定时器
                    document.getElementById("message").innerHTML = "该账号已离线或已被断开网络连接。<br>The account has been offline or disconnected from the network.<br>如需继续，请重新登录。<br>To continue, please login again.";
                    window.clearInterval(timeID);
                }
            }
            else if (Global_XMLHttpReq.status == 200) {
                //				alert("length:"+Global_XMLHttpReq.responseText.length);
            }
        }
    }
    Global_XMLHttpReq.send(null);

    /*
        $.ajax({
            type: "GET",
            url: url,
            cache: false,
            dataType:"html",
            error:function(json){
                alert("disconnectCount:"+disconnectCount);
                disconnectCount++;
                if(disconnectCount >= 3){
                    document.getElementById("message").innerHTML="该账号已离线或已被断开网络连接。<br>The account has been offline or disconnected from the network.<br>如需继续，请重新登录。<br>To continue, please login again.";
                    window.clearInterval(timeID);
                }
            },
            success:function(json){
                alert("length:"+json.length);
            }
        });
    */
}

//===========================================================Aji rmdx get forget password

var fpTimeClock;
var fpTime = 61;

function $id(str) {
    return document.getElementById(str);
}

function btnGetForPass() {
    var telephone = $id('fp-telephone').value;
    var email = $id('fp-email').value;

    if (telephone == '请输入你的手机号') {//针对 ie8
        telephone = "";
    }
    if (email == '请输入你的邮箱') {
        email = "";
    }

    if ((telephone == null || telephone.length == 0) && (email == null || email.length == 0)) {
        alert("手机号和邮箱必须填一个！");
        $id('fp-telephone').focus();
        return false;
    }

    if (telephone != null && telephone.length != 0) {
        if (!IsValidMobile(telephone)) {
            alert("请输入正确的手机号！");
            $id('fp-telephone').focus();
            return false;
        }
    }

    if (email != null && email.length != 0) {
        var emailRex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (!emailRex.test(email)) {
            alert("请输入正确的邮箱地址！");
            $id('fp-email').focus();
            return false;
        }
    }

    var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/index.php?c=RucSetting&a=getForgetPwd";
    //    var url = "http://localhost:8082/eportal/index.php?c=RucSetting&a=selfRegister";

    createGlobalXMLHttpRequest();
    Global_XMLHttpReq.open("POST", url, true);
    Global_XMLHttpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "phone=" + telephone + "&mail=" + email;

    Global_XMLHttpReq.onreadystatechange = function () {
        if (Global_XMLHttpReq.readyState == 4) {
            if (Global_XMLHttpReq.status == 200) {
                var responseText = Global_XMLHttpReq.responseText;
                var json = eval("(" + responseText + ")");
                if (json.result == 'ok') {
                    $id('fp-message').style.display = 'block';

                    $id('btnGetForgetPassw').disabled = true;
                    fpTimeClock = setInterval('showFpTime()', 1000);
                }
                else {
                    alert(json.msg);
                }
            }
        }
    }

    Global_XMLHttpReq.send(data);
}


//------------------------------显示短信下发时间 ：专为找回密码而生
function showFpTime() {
    fpTime--;
    if (fpTime == -1) {
        window.clearInterval(fpTimeClock);

        fpTime = 61;

        //$id('fp-message').style.display='none';
        $id('btnGetForgetPassw').disabled = false;
        $id('btnGetForgetPassw').innerHTML = "发送";
    } else {
        $id('btnGetForgetPassw').innerHTML = "短信发送成功(" + fpTime + ")";
    }
}

