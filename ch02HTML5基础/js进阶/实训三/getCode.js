/*产生随机数函数，参数n代表需要生成的位数*/
function validateCode(n) {
    // 验证码中可能包含的字符
    var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var ret = "";  //保存生成的验证码
    /*利用循环，随机产生生验证码中的每个字符*/
    for (var i = 0; i < n; i++) {
        var index = Math.floor(Math.random() * 62); // 修正：对随机数取整，确保能正确作为索引
        ret += s.charAt(index);   //将随机产生的数字当作字符串的位置下标，在字符串s中取出该字符，并入ret中
    }
    return ret;   //返回产生的验证码
}

/*显示随机数函数*/
function show() {
    var code = validateCode(4); // 这里假设生成4位验证码，可根据需求调整参数
    var msg = document.getElementById("msg");
    if (msg) {
        msg.innerHTML = code; // 在id为msg的对象中显示验证码
    }
}

window.onload = show;   //页面加载时执行函数show