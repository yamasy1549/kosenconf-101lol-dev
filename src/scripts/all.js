$(document).ready(function() {
    open = new Boolean(false);

    $(function(){
        $('a[href^=#]').click(function() {
            var speed = 400;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top - 20;
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            $('.menu').animate({
                height: '60px'
            }, 500);
            $('.nav-item').animate({
                display: 'none'
            },{
                'duration': 500,
                'complete': function() {
                    $('.nav-item').css('display', 'none');
                    $('.nav-item:first-child').css('display', 'block');
                }
            });
        });
    });

    $('.menu-btn').click(function() {
        if(open == true) {
            $('.menu').animate({
                height: '60px'
            }, 500);
            $('.nav-item').animate({
                display: 'none'
            },{
                'duration': 500,
                'complete': function() {
                    $('.nav-item').css('display', 'none');
                    $('.nav-item:first-child').css('display', 'block');
                }
            });
            open = false;
        } else {
            $('.menu').animate({
                height: '370px'
            }, 500);
            $('.nav-item').css('display', 'block');
            open = true;
        };
    });
});
