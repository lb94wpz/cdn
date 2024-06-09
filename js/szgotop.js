$(function () {
    $(window).scroll(function () {
        /* 窗口高度 */
        var windowHeight = $(window).height() - 30;
        /* document 高度 */
        var documentHeight = $("body")[0].scrollHeight;
        /* 滚动高度 */
        var scrollTop = $(window).scrollTop();
        var top = scrollTop / (documentHeight - windowHeight) * windowHeight - 900 + 'px';
        $('.go-to-top').css('top', top);
        // if (scrollTop > 200) {
        //     $('.go-to-top').css('top', '-250px');
        // } else {
        //     $('.go-to-top').css('top', '-900px');
        // }
    })
    $('.go-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
    })
})
