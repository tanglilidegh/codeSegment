/**
 * Created by tanglili on 16/8/25.
 */

/*
 * 阻止冒泡 js方法
 */
var stopPropagation = function (e) {
    e = e || window.event;
    if(e.stopPropagation){ // W3C阻止冒泡方法
        e.stopPropagation();
    } else {
        e.cancelBubble = true; // IE阻止冒泡方法
    }
};
document.getElementById('need_hide').onclick = function (e) {
    stopPropagation(e);
};

/*
 * 阻止冒泡 jQuery方法
 */

$('.btn').click(function () {
    return false; // 直接在方法里 return false 即可
});

/*
 * 检测是否是微信浏览器
 */

function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == "micromessenger"){
        return true;
    } else {
        return false;
    }
}
$(function () {
    // alert(is_weixin());
});

/*
 * js判断是否移动端及浏览器内核
 */

var browser = {
    versions: function () {
        var u = navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, // IE内核
            presto: u.indexOf('Presto') > -1, // opera 内核
            webKit: u.indexOf('AppleWebKit') > -1, // 苹果,谷歌 内核
            gecko: u.indexOf('Firefox') > -1,  // 火狐内核Gecko
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Max OS X/), //ios
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // Android
            iPhone: u.indexOf('iPhone') > -1, // iPhone
            iPad: u.indexOf('iPad') > -1, // iPad
            webApp: u.indexOf('Safari') > -1 // Safari
        };
    }()
};
$(function () {
    if(browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad){
        // alert('移动端');
    }
});

/*
 * 原生JavaScript设置cookie值
 */

function setCookie(name, value, Hours) {
    var d = new Date();
    var offset = 8;
    // getTimezoneOffset() 返回 本地时间与 GMT 时间之间的时间差，以分钟为单位。
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = utc + (3600000 * offset);
    var exp = new Date(nd);
    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
    document.cookie = name + '=' + escape(value) + ';path=/;expires=' + exp.toGMTString() + ';domain=360doc.com;';
}


/*
 * 原生JavaScript获取cookie值
 */
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null
}

/*
 * 原生JavaScript实现checkbox全选与全不选
 */

function checkAll() {
    var selectall = document.getElementById("selectall");
    var allbox = document.getElementsByName("allbox");
    if (selectall.checked) {
        for (var i = 0; i < allbox.length; i++) {
            allbox[i].checked = true;
        }
    } else {
        for (var i = 0; i < allbox.length; i++) {
            allbox[i].checked = false;
        }
    }
}

/*
 * 原生JavaScript时间日期格式转换
 */

Date.prototype.Format = function(formatStr) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));
    str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, (this.getMonth() + 1));
    str = str.replace(/w|W/g, Week[this.getDay()]);
    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());
    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());
    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());
    return str
};


/**
 * 字符串反序输出
 * @return {string}
 */
function IsReverse(text) {
    return text.split('').reverse().join('');
}
var oldText = $('#oldText').text();
$('#newText').text(IsReverse(oldText));

/*
*  获取js所在路径
*/

function getJsDir(src) {
    var script = null;
    if(src){
        script = [].filter.call(document.scripts,function (v) {
            return v.src.indexOf(src) != -1;
        })[0];
    } else {
        script = document.scripts[document.scripts.length - 1];
    }
    return script ? script.src.substr(0, script.src.lastIndexOf('/')) : script;
}




