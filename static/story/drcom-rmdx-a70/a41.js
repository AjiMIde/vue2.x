/********************  �������ò���  ********************/
var loginTitle = "";// ��¼����

var logoutTitle = "";// ע������

var thankWord = "";// ��л��

var welcomeWord = "";// ��ӭ��

var redirectLink = "";// ��¼�ض���

var accountSuffix = "";// �˺ź�׺

var companyInfo = "";// ��˾��Ϣ

var companyLink = "";// ��˾����

var enPortal = 0;// �Ƿ�֧��PortalЭ�飬���е�����AC��֤(0-��֧�֣�1-֧��)

var enPerceive = 0;// �Ƿ�����2166�޸�֪(0-�����ã�1-����)

var enMd5 = 0;// �Ƿ�֧��MD5(0-��֧�֣�1-֧��)

var enHttps = 0;// �Ƿ���ҪHttps(0-����Ҫ��1-��Ҫ)

var regURL = "http://cloud.doctorcom.com:8081/CloudSelf/";// �����Է���

var machineno = "";// �豸���

var loginMatchMode = 0;// VLAN��¼ҳƥ��ģʽ��0-Ĭ�ϣ�1-VLAN ID��2-IP(����ʽΪ0����Ч)

var matchVlanArr = new Array(4);// VLAN IDƥ������
matchVlanArr[0] = "11|11";
matchVlanArr[1] = "12|12";
matchVlanArr[2] = "13|13";
matchVlanArr[3] = "14|14";

var matchIPArr = new Array(4);// IPƥ������
matchIPArr[0] = "192.168.31.10|192.168.31.10";
matchIPArr[1] = "192.168.31.17|192.168.31.20";
matchIPArr[2] = "192.168.31.11|192.168.31.12";
matchIPArr[3] = "|";

/********************  �õ�Ƭ����  ********************/
var advertNum = 3;// ������(����1�������5����Ĭ��3��)

var rvtPCImgArr = new Array(5);// ���ͼƬ(PC)
rvtPCImgArr[0] = "a04.jpg";
rvtPCImgArr[1] = "a05.jpg";
rvtPCImgArr[2] = "a06.jpg";
rvtPCImgArr[3] = "";
rvtPCImgArr[4] = "";

var rvtMobileImgArr = new Array(5);// ���ͼƬ(�ֻ�)
rvtMobileImgArr[0] = "a34.jpg";
rvtMobileImgArr[1] = "a35.jpg";
rvtMobileImgArr[2] = "a36.jpg";
rvtMobileImgArr[3] = "";
rvtMobileImgArr[4] = "";

var rvtTextArr = new Array(5);// �������
rvtTextArr[0] = "������ͼ1";
rvtTextArr[1] = "������ͼ2";
rvtTextArr[2] = "������ͼ3";
rvtTextArr[3] = "";
rvtTextArr[4] = "";

var rvtLinkArr = new Array(5);// �������
rvtLinkArr[0] = "http://plaza.wanda.cn";
rvtLinkArr[1] = "http://www.wanda.cn/group/zzcy/sydc/7360.shtml";
rvtLinkArr[2] = "http://e.weibo.com/27wanda";
rvtLinkArr[3] = "";
rvtLinkArr[4] = "";

/********************  VLAN������  ********************/
var vlanTitleArr = new Array(4);// VLAN��˵��
vlanTitleArr[0] = "F1";
vlanTitleArr[1] = "F2";
vlanTitleArr[2] = "F3";
vlanTitleArr[3] = "F4";

var matchAdvertNumArr = new Array(4);// VLAN�������
matchAdvertNumArr[0] = 4;
matchAdvertNumArr[1] = 4;
matchAdvertNumArr[2] = 4;
matchAdvertNumArr[3] = 4;

var firstImgArr = new Array(4);// �ײ�ͼƬ
firstImgArr[0] = "a47.jpg";
firstImgArr[1] = "a48.jpg";
firstImgArr[2] = "a49.jpg";
firstImgArr[3] = "a50.jpg";

var firstTextArr = new Array(4);// �ײ�����
firstTextArr[0] = "H&M";
firstTextArr[1] = "VIGOSS";
firstTextArr[2] = "Pull&Bear";
firstTextArr[3] = "ONLY";

var firstHrefArr = new Array(4);// �ײ�����
firstHrefArr[0] = "http://www.hm.com";
firstHrefArr[1] = "http://e.weibo.com/27wanda";
firstHrefArr[2] = "http://www.pullandbear.com";
firstHrefArr[3] = "http://www.only.cn";

var secondImgArr = new Array(4);// ��2��ͼƬ
secondImgArr[0] = "a51.jpg";
secondImgArr[1] = "a52.jpg";
secondImgArr[2] = "a53.jpg";
secondImgArr[3] = "a54.jpg";

var secondTextArr = new Array(4);// ��2������
secondTextArr[0] = "�ǰͿ�";
secondTextArr[1] = "����ɽ";
secondTextArr[2] = "��ʤ��";
secondTextArr[3] = "�����ʳ��";

var secondHrefArr = new Array(4);// ��2������
secondHrefArr[0] = "www.starbucks.cn";
secondHrefArr[1] = "www.hannashan.cn";
secondHrefArr[2] = "http://www.pizzahut.com.cn/";
secondHrefArr[3] = "http://e.weibo.com/27wanda";

var thirdImgArr = new Array(4);// ��3��ͼƬ
thirdImgArr[0] = "a55.jpg";
thirdImgArr[1] = "a56.jpg";
thirdImgArr[2] = "a57.jpg";
thirdImgArr[3] = "a58.jpg";

var thirdTextArr = new Array(4);// ��3������
thirdTextArr[0] = "GUESS";
thirdTextArr[1] = "LEVIS";
thirdTextArr[2] = "CK";
thirdTextArr[3] = "NOVO�ٻ�";

var thirdHrefArr = new Array(4);// ��3������
thirdHrefArr[0] = "http://www.guess.com";
thirdHrefArr[1] = "http://e.weibo.com/27wanda";
thirdHrefArr[2] = "http://www.calvinklein.com";
thirdHrefArr[3] = "http://www.novoconcept.com.cn";

var fourthImgArr = new Array(4);// ��4��ͼƬ
fourthImgArr[0] = "a59.jpg";
fourthImgArr[1] = "a60.jpg";
fourthImgArr[2] = "a61.jpg";
fourthImgArr[3] = "a62.jpg";

var fourthTextArr = new Array(4);// ��4������
fourthTextArr[0] = "EMU����";
fourthTextArr[1] = "HIM����";
fourthTextArr[2] = "������";
fourthTextArr[3] = "�������";

var fourthHrefArr = new Array(4);// ��4������
fourthHrefArr[0] = "http://www.emuchina.com.cn";
fourthHrefArr[1] = "http://www.himuomo.com";
fourthHrefArr[2] = "http://www.bkchina.cn";
fourthHrefArr[3] = "http://www.crv.com.cn";

var matchImgArr = new Array(4);// ͼƬƥ������
matchImgArr[0] = firstImgArr;
matchImgArr[1] = secondImgArr;
matchImgArr[2] = thirdImgArr;
matchImgArr[3] = fourthImgArr;

var matchTextArr = new Array(4);// ����ƥ������
matchTextArr[0] = firstTextArr;
matchTextArr[1] = secondTextArr;
matchTextArr[2] = thirdTextArr;
matchTextArr[3] = fourthTextArr;

var matchHrefArr = new Array(4);// ����ƥ������
matchHrefArr[0] = firstHrefArr;
matchHrefArr[1] = secondHrefArr;
matchHrefArr[2] = thirdHrefArr;
matchHrefArr[3] = fourthHrefArr;

/********************  ���ú���  ********************/
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

// ע��
function wc() {
    if (window.confirm("ȷ��ע��? Logout Confirmed?")) {
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

// ��¼
function ee() {
    document.getElementById("login").disabled = true;

    if (f1.DDDDD.value == "") {
        alert("�������˺�! Please enter your account number!");
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


//�ض��򵽳ɹ�ҳ 3.htm��Ϊע��ɹ����ṩ 
function zhucheRedrect() {
    //window.location = location.protocol + "//" + location.hostname + "/3.htm";
    var postForm = document.getElementsByName('uidPostForm')[0];
    postForm.action = window.location.protocol + "//" + window.location.hostname + ":801/eportal/Bootstrap/WebRoot/index.php";
    /*
    // �����豸:0-������1-PC��2-�ֻ���3-ƽ��
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
					document.getElementById("errormsg").innerHTML='��¼�ɹ���������ת...';
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

    // �����豸:0-������1-PC��2-�ֻ���3-ƽ��
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
                    document.getElementById("errormsg").innerHTML = '��¼�ɹ���������ת...';
                    document.getElementById("errormsg").style.display = "block";
                     //���ֵ�¼״̬
                    if(typeof(document.getElementsByName("save_me")[0]) == "object"){
                        if(document.getElementsByName("save_me")[0].checked){
                            setCookie("md5_login",uname+"|"+upass);
                        }
                        else {
                            delCookie("md5_login");
                        }
                    } 

                    //��½�ɹ���������� Form ��ֵ���Ա� post �� Form ��ȥ
                    document.getElementsByName('uidPostForm')[0].UID.value = uname;

                    setTimeout(zhucheRedrect, 1000);
                    //                    window.location.hostname = 'url' + '/a09.htm';
                } else if (msg == 0 || msg == 1) {
                    document.getElementById("errormsg").style.display = "block";
                    if (msga == null || msga == '') {
                        if (enPortal == 1) {
                            document.getElementById("errormsg").innerHTML = "AC��֤ʧ��<br>AC authentication failure";
                        }
                        else {
                            document.getElementById("errormsg").innerHTML = "�˺Ż����벻�ԣ�����������<br>Ivalid account or password, please login again";
                        }
                    }
                    else if (msga == 'error0') {
                        document.getElementById("errormsg").innerHTML = "��IP������Web��ʽ��¼<br>The IP does not allow Web-log";
                    }
                    else if (msga == 'error1') {
                        document.getElementById("errormsg").innerHTML = "���˺Ų�����Web��ʽ��¼<br>The account does not allow Web-log";
                    }
                    else if (msga == 'error2') {
                        document.getElementById("errormsg").innerHTML = "���˺Ų������޸�����<br>This account does not allow change password";
                    }
                    else if (enPortal == 1) {
                        document.getElementById("errormsg").innerHTML = "ע���ɹ� Logout successfully"
                    }
                    else {
                        document.getElementById("errormsg").innerHTML = msga;
                    }
                } else if (msg == 2) {
					document.getElementById("errormsg").innerHTML = "���˺�����ʹ���У�������������ϵ<br>This account is tie up, please contact network adminstration";
                }
                else if (msg == 3) {
					document.getElementById("errormsg").innerHTML = "���˺�ֻ����ָ����ַʹ��<br>This account can be used on the appointed address only.";
                }
                else if (msg == 4) {
                    document.getElementById("errormsg").innerHTML = "���˺ŷ��ó�֧��ʱ��������������<br>This account overspent or over time limit";
					document.getElementsByName('uidPostForm')[0].UID.value = uname;
                    document.getElementsByName('uidPostForm')[0].password.value = upass;
                    document.getElementsByName('uidPostForm')[0].is_lack.value = '1';
                    setTimeout(zhucheRedrect, 1000);
                     //���ֵ�¼״̬
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
                    document.getElementById("errormsg").innerHTML = "���˺���ͣʹ��<br>This account has been suspended";
                }
                else if (msg == 6) {
                    document.getElementById("errormsg").innerHTML = "ϵͳ����̫��<br>System buffer full";
                }
                else if (msg == 7) {
                    if (enPortal == 1) {
                        document.getElementById("errormsg").innerHTML ="��¼��������������ϵ<br>System buffer full";
                    }
                    else {
                        document.getElementById("errormsg").innerHTML ="��¼��������������ϵ<br>System buffer full";
                    }
                }
                else if (msg == 8) {
                    document.getElementById("errormsg").innerHTML = "���˺�����ʹ��,�����޸�<br>This account is in use. Unable to change";
                }
                else if (msg == 9) {
                    document.getElementById("errormsg").innerHTML = "��������ȷ�������벻ƥ��,�����޸�<br>New password and confirmation do not match. Unable to change";

                }
                else if (msg == 10) {
                    document.getElementById("errormsg").innerHTML = "�����޸ĳɹ�<br>Password Changed Successfully";

                }
                else if (msg == 11) {
					document.getElementById("errormsg").innerHTML = "���˺�ֻ����ָ����ַʹ��<br>This account can be used on the appointed address only :";
                }
                else if (msg == 14) {
                    if (enPortal == 1) {
						document.getElementById("errormsg").innerHTML = "ע���ɹ� Logout successfully";
                    }
                    else {
                        document.getElementById("errormsg").innerHTML = "ע���ɹ� Logout successfully" ;
                    }
                }
                else if (msg == 15) {
                    if (enPortal == 1) {
                        document.getElementById("errormsg").innerHTML = "��¼�ɹ� Login successfully";
                    }
                    else {
                        document.getElementById("errormsg").innerHTML = "��¼�ɹ� Login successfully";
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
                    alert('�ɹ�');
                    document.getElementById("billingCycle_begin_date").innerHTML = json.msg.billingCycle_begin_date;
                    document.getElementById("billingCycle_end_date").innerHTML = json.msg.billingCycle_end_date;
                    document.getElementById("flux_info").innerHTML = json.msg.left_flow;
                    document.getElementById("balance_info").innerHTML = json.msg.balance;
                }
                else {
                    alert('��¼ʧ��');
                    window.location.href = json.msg;
                }

            }
        }
    }
    Global_XMLHttpReq.send(data);
}



// ��ȡ�����豸
function getTermType() {
    // �����豸:0-������1-PC��2-�ֻ���3-ƽ��
    var iTermType = 0;
    //alert("navigator.userAgent:"+navigator.userAgent);
    if (navigator.userAgent.indexOf('Android') > 0) {// ��׿
        if (navigator.userAgent.indexOf('PAD for Mobile') > 0) {
            iTermType = 3;
        }
        else {
            iTermType = 2;
        }
    }
    else if (navigator.userAgent.indexOf('BlackBerry') > 0) {// ��ݮ
        if (navigator.userAgent.indexOf('RIM Table OS') > 0) {
            iTermType = 3;
        }
        else {
            iTermType = 2;
        }
    }
    else if (navigator.userAgent.indexOf('Mac OS') > 0) {// ƻ��
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
    else if (navigator.userAgent.indexOf('SymbOS') > 0) {// ����
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

//��ȡHtml���ݵĲ���
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

//�ж��ֻ�����
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
// ����Global_XMLHttpReq����
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

var iWaitSMSTime = 60;// �·����ŵ���60��
/*
// ��������Ӧ��ҳ�沢�ӷ���������xmlHttp.responseText
function DoResponse(){
	if(Global_XMLHttpReq.readyState==4){
		if(Global_XMLHttpReq.status==200){
			var responseText = Global_XMLHttpReq.responseText;
			var json =eval("(" +responseText +")");
			if(json.result == 'ok'){
				var iCount = 0;// ������	
				var applyTime = setInterval(function(){//�ȴ�����Ӧ
					if(iCount++ >= iWaitSMSTime){
						document.getElementById("applyBtn").disabled=false;
						document.getElementById("applyBtn").value = "��ȡ��֤�� (SMS)";
					}
					else{
						document.getElementById("applyBtn").disabled=true;
						document.getElementById("applyBtn").value = "���ŷ����� ("+(iWaitSMSTime-iCount)+")";	
					}
				}, 1000);
				alert("��֤�����·�����ע����գ�");
			}
			else{
				document.getElementById("applyBtn").disabled=false;	
				alert(json.msg);
			}
		}
	}
}
*/

// ��ת���Է���
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
            alert("�ֻ��Ų���Ϊ�գ�");   
            document.getElementById("username").focus();
            return false;
        }	
        if(!IsValidMobile(telephone)){
            alert("��������ȷ���ֻ��ţ�");
            document.getElementById("username").focus();
            return false;			
        }
                
        var reg=/http:\/\/([^']*):/g;
        var reg2=/http:\/\/([^']*)\//g;
        var temp="";
        if((temp=reg.exec(regURL))  != null){// ���˿�
            regURL = temp[1];
        }
        else if((temp=reg2.exec(regURL)) != null){// �����˿�
            regURL = temp[1].split("\/")[0];
        }	
        else{
            alert("�Է����ַ�޷���ȡ");
            return false;
        }	
        
        document.getElementById("applyBtn").disabled=true;	
        
        createGlobalXMLHttpRequest();
        
        // GET��ʽ����Ĵ���	
    //	var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/controller/Action.php?telephone="+ telephone +"&machine="+ machineno +"&mac="+ mac+"&regURL="+regURL;
    //	Global_XMLHttpReq.open("GET", url, true);
    //	Global_XMLHttpReq.onreadystatechange=DoResponse;//DoResponse�Ǹ��ص�����
    //	Global_XMLHttpReq.send(null);
        
        // POST��ʽ����Ĵ���	
        var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/controller/Action.php";
        Global_XMLHttpReq.open("POST", url, true);	
        // POST��ʽ��Ҫ�Լ�����http������ͷ
        Global_XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        // POST��ʽ��������(����������ĵ�ֵ����Ҫescape���б���)
        var data="telephone="+ telephone +"&machine="+ machineno +"&mac="+ mac +"&regURL="+regURL;
        Global_XMLHttpReq.onreadystatechange=DoResponse;//DoResponse�Ǹ��ص�����
        Global_XMLHttpReq.send(data);
    */
}

// ����VLANҳ��
function setVLANPage(iTermType) {
    if (iTermType == 2) {// �ֻ�
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
    else {// �����豸
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

// ����VLANͼƬ
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

// ƥ��VLAN ID
function isMatchVlan(val, val2) {
    var minVlan = val2.split("|")[0];
    var maxVlan = val2.split("|")[1];
    if (parseInt(val) >= parseInt(minVlan) && parseInt(val) <= parseInt(maxVlan)) {
        return true;
    }
    return false;
}

// ƥ��IP
function isMatchIP(val, val2) {
    var startIP = val2.split("|")[0];
    var endIP = val2.split("|")[1];
    if (compareIP(val, startIP) == -1 || compareIP(val, endIP) == 1) {
        return false;
    }
    return true;
}

// �Ƚ�����ip�Ĵ�С,������ڣ�����1�����ڷ���0��С�ڷ���-1
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

// �������
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

            this._timer = null;//��ʱ��
            this.Index = 0;//��ʾ����
            this._onIndex = -1;//��ǰ����

            this.SetOptions(options);

            this.Auto = !!this.options.Auto;
            this.Pause = Math.abs(this.options.Pause);
            this.Duration = Math.abs(this.options.Duration);
            this.Transition = parseInt(this.options.Transition);
            this.List = this.options.List;
            this.onShow = this.options.onShow;

            //��ʼ����ʾ����
            this._img.style.visibility = "hidden";//��һ�α任ʱ����ʾ��xͼ
            this._img.style.width = this._img.style.height = "100%"; this._img.style.border = 0;
            this._img.onmouseover = Bind(this, this.Stop);
            this._img.onmouseout = Bind(this, this.Start);
            isIE && (this._img.style.filter = "revealTrans()");

            this._a.target = "_blank";

            $(container).appendChild(this._a).appendChild(this._img);
        },
        //����Ĭ������
        SetOptions: function (options) {
            this.options = {//Ĭ��ֵ
                Auto: true,//�Ƿ��Զ��л�
                Pause: 5000,//ͣ��ʱ��(΢��)
                Duration: 2,//�任����ʱ��(��)
                Transition: 23,//�任Ч��(23Ϊ���)
                List: [],//���ݼ���,������ﲻ���ÿ�����Add�������
                onShow: function () { }//�任ʱִ��
            };
            Extend(this.options, options || {});
        },
        Start: function () {
            clearTimeout(this._timer);
            //���û�����ݾͷ���
            if (!this.List.length) return;
            //����Index
            if (this.Index < 0 || this.Index >= this.List.length) { this.Index = 0; }
            //�����ǰ����������ʾ������������ʾ
            if (this._onIndex != this.Index) { this._onIndex = this.Index; this.Show(this.List[this.Index]); }
            //���Ҫ�Զ��л�
            if (this.Auto) {
                this._timer = setTimeout(Bind(this, function () { this.Index++; this.Start(); }), this.Duration * 1000 + this.Pause);
            }
        },
        //��ʾ
        Show: function (list) {
            if (isIE) {
                //���ñ任����
                with (this._img.filters.revealTrans) {
                    Transition = this.Transition; Duration = this.Duration;
                    apply();
                    play();
                }
            }
            this._img.style.visibility = "";
            //����ͼƬ����
            this._img.src = list.img; this._img.alt = list.text;
            //��������
            !!list["url"] ? (this._a.href = list["url"]) : this._a.removeAttribute("href");
            //���Ӻ���
            this.onShow();
        },
        //��ӱ任����
        Add: function (sIimg, sText, sUrl) {
            this.List.push({ img: sIimg, text: sText, url: sUrl });
        },
        //ֹͣ
        Stop: function () {
            clearTimeout(this._timer);
        }
    };

    var rvt = new RevealTrans("idPicShow");
    //��ӱ任����
    if (type == 1) { // �ֻ�
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
    //����ͼƬ�б�
    Each(rvt.List, function (list, i) {
        //��ťʽ
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        arrNum[i] = li;
        oNum.appendChild(li);
        //�¼�����
        rvt.onmouseover = li.onmouseover = function () { rvt.Auto = false; rvt.Index = i; rvt.Start(); };
        rvt.onmouseout = li.onmouseout = function () { rvt.Auto = true; rvt.Start(); };
    });

    //����ͼƬ�б���ʽ �ı���ʾ����
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
//ҳ��Ķ�ʱˢ��
function timingRefresh() {
    if (timeID != null) window.clearInterval(timeID);//ÿ�ε��ø÷���ǰ�Ƚ�ԭ���Ǹ���ʱ��ȡ��
    timeID = window.setInterval("startKeepAlive()", 60000);//ÿ60���Զ�ˢ��һ��
}

var disconnectCount = 0;
// ��ȡ����״̬
function startKeepAlive() {
    var url = window.location.protocol + "//" + window.location.hostname + ":9002";

    createGlobalXMLHttpRequest();
    Global_XMLHttpReq.open("GET", url, true);
    Global_XMLHttpReq.onreadystatechange = function () {
        if (Global_XMLHttpReq.readyState == 4) {
            //			alert("Global_XMLHttpReq.status:"+Global_XMLHttpReq.status);
            if (Global_XMLHttpReq.status == 0) {
                disconnectCount++;
                if (disconnectCount > 3) {// ������������3��,���ж϶�ʱ��
                    document.getElementById("message").innerHTML = "���˺������߻��ѱ��Ͽ��������ӡ�<br>The account has been offline or disconnected from the network.<br>��������������µ�¼��<br>To continue, please login again.";
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
                    document.getElementById("message").innerHTML="���˺������߻��ѱ��Ͽ��������ӡ�<br>The account has been offline or disconnected from the network.<br>��������������µ�¼��<br>To continue, please login again.";
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

    if (telephone == '����������ֻ���') {//��� ie8
        telephone = "";
    }
    if (email == '�������������') {
        email = "";
    }

    if ((telephone == null || telephone.length == 0) && (email == null || email.length == 0)) {
        alert("�ֻ��ź����������һ����");
        $id('fp-telephone').focus();
        return false;
    }

    if (telephone != null && telephone.length != 0) {
        if (!IsValidMobile(telephone)) {
            alert("��������ȷ���ֻ��ţ�");
            $id('fp-telephone').focus();
            return false;
        }
    }

    if (email != null && email.length != 0) {
        var emailRex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (!emailRex.test(email)) {
            alert("��������ȷ�������ַ��");
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


//------------------------------��ʾ�����·�ʱ�� ��רΪ�һ��������
function showFpTime() {
    fpTime--;
    if (fpTime == -1) {
        window.clearInterval(fpTimeClock);

        fpTime = 61;

        //$id('fp-message').style.display='none';
        $id('btnGetForgetPassw').disabled = false;
        $id('btnGetForgetPassw').innerHTML = "����";
    } else {
        $id('btnGetForgetPassw').innerHTML = "���ŷ��ͳɹ�(" + fpTime + ")";
    }
}

