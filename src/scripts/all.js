$(document).ready(function() {
    open = new Boolean(false);

    $('.wrapper a[href^=#]').click(function() {
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 20;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
    });

    if(location.pathname != "/") {
        $('.global-nav .nav-item a[href^="./' + location.pathname.split("/")[1] + '"]').addClass('active');
    };

    $('.menu-btn').click(function() {
        if(open == true) {
            $('.menu').animate({
                height: '60px'
            }, 300);
            $('.nav-item').animate({
                display: 'none'
            },{
                'duration': 300,
                'complete': function() {
                    $('.nav-item').css('display', 'none');
                    $('.nav-item:first-child').css('display', 'block');
                }
            });
            open = false;
        } else {
            $('.menu').animate({
                height: '430px'
            }, 300);
            $('.nav-item').css('display', 'block');
            open = true;
        };
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".backtotop").fadeIn();
        } else {
            $(".backtotop").fadeOut();
        }
    });
    $(".backtotop #backToTopBtn").click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
    $(".backtotop #notice-callingcard").hover(function () {
        $('.notice-baloon').addClass("animhop").toggle();
        return false;
    });
    $(".backtotop #notice-callingcard").click(function () {
        if(location.href == "http://kosenconf.me/") {
            target = $("#about");
            $("body, html").animate({scrollTop: target.offset().top}, 500);
        } else {
            location.href = "http://kosenconf.me/#about";
        }
        return false;
    });

    // twitter
    var url = encodeURIComponent(document.URL);
    var title = encodeURIComponent(document.title + " #kosenconf\n");
    var shareLink = "http://twitter.com/share?url=" + url + "&text=" + title;
    $('#twitter')[0].href = shareLink;
});

// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68509620-3', 'auto');
ga('send', 'pageview');
