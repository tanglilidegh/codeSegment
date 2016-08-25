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
            if((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
        },10);
    };
    function set() {
        btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block' : 'none';
    }
}
backTop('gotop-btn');

