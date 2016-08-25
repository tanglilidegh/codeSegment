/**
 * Created by tanglili on 16/8/25.
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