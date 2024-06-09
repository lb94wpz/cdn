var originTitile = document.title;
var st;
document.addEventListener("visibilitychange", function () {
    document.hidden ? (document.title = "(๑•́ ₃ •̀๑) 哎呀走丢啦！", clearTimeout(st)) : (document.title =
        "o(≧v≦)o 嘻又回来啦！", st = setTimeout(function () {
            document.title = originTitile
        }, 4e3))
})
