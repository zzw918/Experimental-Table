window.onload = function () {
    function query(name) {
        return document.querySelector(name);
    }
    function queryAll(name) {
        return document.querySelectorAll(name);
    }

    var choose = (function () {
        var ull = query("#liwrap");
        ull.addEventListener("click", function (e) {
            var nowIndex = e.target.id;
            for (var i = 1; i < 5; i++) {
                query("#module_" +　i).style.display = "none";
            }
            query("#module_"+nowIndex).style.display = "block";
        }, false);
    }());

    var assertainHeight = (function () {
       var clientHeight = document.documentElement.clientHeight,
           headerHeight = query(".header").offsetHeight,
           footerHeight = query(".footer").offsetHeight;
       query(".main").style.minHeight = (clientHeight - headerHeight - footerHeight) + "px";
    }());


    console.log("%c Made By John Zhu, mail: 1843021156@qq.com", "color: blue; text-shadow: 0 0 1px blue;");

}