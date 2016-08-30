/**
 * Created by tanglili on 16/8/25.
 */

/*
 * 字符串超出长度后截取,显示...
 */
var intercept = function () {
    var before = document.querySelector('.before');
    var after = document.querySelector('.after');

    function cutstr(str, len) {
        var temp;
        var icount = 0;
        var patrn = /[^\x00-\xff]/;
        var strre = "";
        for (var i = 0; i < str.length; i++) {
            if (icount < len - 1) {
                temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                    icount = icount + 1;
                } else {
                    icount = icount + 2;
                }
                strre += temp
            } else {
                break;
            }
        }
        return strre + "...";
    }

    after.innerText = cutstr(before.innerText, 10);
};
intercept();

/*
 * 另一种截取字符的方式...
 */
var getByteVal = function (val, max) {
    var returnValue = '';
    var byteValLen = 0;
    for (var i = 0; i < val.length; i++) {
        if (val[i].match(/[^\x00-\xff]/ig) != null)
            byteValLen += 2;
        else
            byteValLen += 1;
        if (byteValLen > max)
            break;
        returnValue += val[i];
    }
    return returnValue;
};

$('#txt').bind('keyup', function () {
    var val = this.value;
    if (val.replace(/[^\x00-\xff]/g, "**").length > 14) {
        this.value = getByteVal(val, 20);
    }
});

/*
 * 获取域名主机
 */
var getHostName = function () {
    function getHost(url) {
        var host = "null";
        if (typeof url == "undefined" || null == url) {
            url = window.location.href;
        }
        var regex = /^\w+\:\/\/([^\/]*).*/;
        var match = url.match(regex);
        if (typeof match != "undefined" && null != match) {
            host = match[1];
        }
        return host;
    }

    var host = document.querySelector('.host');
    host.innerText = getHost();
};
getHostName();

/*
 * 返回顶部的通用方法
 */

function backTop(btnId) {
    var btn = document.getElementById(btnId);
    var d = document.documentElement;
    var b = document.body;
    window.onscroll = set;
    btn.style.display = "none";
    btn.onclick = function () {
        btn.style.display = "none";
        window.onscroll = null;
        this.timer = setInterval(function () {
            d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
        }, 10);
    };
    function set() {
        btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block' : 'none';
    }
}
backTop('gotop-btn');

/*
 * js获取验证码倒计时效果
 */
var wait = 60;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value = "获取验证码";
        wait = 60;
    } else {
        o.setAttribute("disabled", true);
        o.value = "重新发送(" + wait + ")";
        wait--;
        setTimeout(function () {
                time(o)
            },
            1000)
    }
}
document.querySelector(".codes-btn").onclick = function () {
    time(this);
};
