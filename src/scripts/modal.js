$(document).ready(function() {
    $('.btns').click(function(){
        console.log("hoge");
        wn = '.' + $(this).data('tgt');
        var mW = $(wn).find('.modalBody').innerWidth() / 2;
        var mH = $(wn).find('.modalBody').innerHeight() / 2;
        // $(wn).find('.modalBody').css({'margin-left':-mW,'margin-top':-mH});
        $(wn).fadeIn(300);
    });
    $('.close,.modalBK').click(function(){
        $(wn).fadeOut(300);
    });
});
