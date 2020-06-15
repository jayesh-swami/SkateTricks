$(document).ready(function(){
    $(window).scroll(function(){
        let scroll_height = $(window).scrollTop();
        let img_height = $('#nav-image').height();
        let opacity = scroll_height/img_height + 0.25;
        $("#nav-background").css('opacity',opacity);
    });
});