/**
 * Created by tanglili on 16/8/25.
 */

//1、原生JavaScript实现字符串长度截取
function cutstr(str, len) {
    var temp;
    var icount = 0;
    var patrn = /[^\x00-\xff]/;
    var strre = "";
    for (var i = 0; i<str.length; i++){
        if(icount < len - 1){
            temp = str.substr(i, 1);
            if(patrn.exec(temp) == null){
                icount = icount + 1;
            } else {
                icount = icount + 2;
            }
            strre += temp
        } else {
            break;
        }
    }
    return strre + "..."
}