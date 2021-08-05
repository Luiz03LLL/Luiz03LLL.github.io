$(function(){
    var nav = $('.menu');

    $(window).scroll(function(){
        if($(this).scrollTop() > 10){
            nav.addClass("menu-fixo");
        }else{
            nav.removeClass("menu-fixo");
        }
    });
});