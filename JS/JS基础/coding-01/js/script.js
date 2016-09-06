/**
 * Created by tanglili on 16/8/25.
 */
/*
 * 图片轮播
 */
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    loop: true,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    autoplay: 3000,
    effect: 'fade'
});

/*
 *  同时禁用多个按钮
 */

$(function () {
    $('.pass, .deny').on('click',function () {
        $(".pass").attr("disabled", true);
        $(".deny").attr("disabled", true);
    });
});

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
 * 推荐:字符串超出长度后截取,显示...
 */
$(function () {
    jQuery.each(jQuery("[split]"), function (i) {
        var toLength = parseInt($(this).attr("split"));
        if (jQuery.trim(this.innerHTML).length > toLength) {
            this.title = this.innerHTML;
            this.innerHTML = jQuery.trim(this.innerHTML).substring(0, toLength) + "......";
        }
    });
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

/*
 * 获得URL中GET参数值
 */

// 用法：如果地址是 test.htm?t1=1&t2=2&t3=3, 那么能取得：GET["t1"], GET["t2"], GET["t3"]
function getUrlArg() {
    var queryStr = window.location.href.split('?');
    var GETs,GET,tmp_arr,key,i;
    if (queryStr[1]) {
        GETs = queryStr[1].split('&');
        GET = [];
        for (i = 0; i < GETs.length; i++) {
            tmp_arr = GETs.split('=');
            key = tmp_arr[0];
            GET[key] = tmp_arr[1];
        }
    }
    return queryStr[1];
}


/*
 * 获取当前路径
 */
function getCurrentPageUrl() {
    var currentPageUrl = '';
    if(typeof this.href === 'undefined'){
        currentPageUrl = document.location.toString().toLowerCase();
    } else {
        currentPageUrl = this.href.toString().toLowerCase();
    }
    return currentPageUrl;
}
$('#currentUrl').text(getCurrentPageUrl());






















