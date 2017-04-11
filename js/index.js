// 定义全局函数query用于获取dom元素
if (typeof APP.query !== "function") {
    APP.query = function (name) {
        return document.querySelector(name);
    };
}

// 创建APP.page对象，用于在上面创建方法
if (typeof APP.page !== "object") {
    APP.page = {};
}

APP.page.onload = (function () {

    // ajax获取数据
    APP.page.xhrFun = function(input) {
        var xhr = null;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        var url = APP.cfg.url + "&info=" + input;

        xhr.open("get", url, true);
        xhr.onreadystatechange = changeHandler;
        xhr.send(null);

        function changeHandler() {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300 )||xhr.status === 304) {
                     APP.page.answer = JSON.parse(xhr.response).text;
                     APP.query(".answer").innerHTML = APP.page.answer;
                } else {
                    alert("网络有问题了~");
                }
            }
        }   
    };
    
    var handleData = (function(){

        var button = APP.query(".button"),
            content = APP.query(".answer");

        button.addEventListener("click", handleClick, false);
        document.addEventListener("keydown",handleKeyDownClick,false);

        function handleKeyDownClick(event) {
            var e = event||window.event||arguments.callee.caller.arguments[0];
            if (e&&e.keyCode == 13) {
                handleClick();
            }
        }
        function handleClick() {
            var question = APP.query(".question-input").value;
            APP.page.xhrFun(question);
            APP.query(".question-input").value = '';
        }
    }());


}());





