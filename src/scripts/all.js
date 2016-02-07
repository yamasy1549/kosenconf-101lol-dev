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
                height: '370px'
            }, 300);
            $('.nav-item').css('display', 'block');
            open = true;
        };
    });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68509620-3', 'auto');
ga('send', 'pageview');
