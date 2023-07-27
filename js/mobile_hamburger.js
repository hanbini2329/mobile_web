$(function () {

    //#gnb open
    $(".hamburger").on("click", function () {
        $("#gnb").stop().animate({
            marginLeft: "75%"
        }, "sloW")
    })

    $(".modal_back").click(function () {
        $("#gnb").stop().animate({
            marginLeft: 0
        }, "nomal");
    });


    //.menu1 시작
    $(".menu1>li>a").click(function () {
        if ($(this).next().is(":visible")) { //.is(":visible") 현재 상태에서 .sub가 열려있나 확인할때 사용
            $(this).next().stop().slideUp(500);
            $(this).children("img").attr("src","image/down.png");
        }else{
            $(".sub").stop().slideUp(500);
            $(".menu1>li>a").children("img").attr("src","image/down.png");
            $(this).next().stop().slideDown(500);
            $(this).children("img").attr("src","image/up.png");
        }

    });


});



/* $(".hamburger").click(function () {
    $("#gnb").show().animate({
        left: 0
    });
});

$("#back").click(function () {
    $("#gnb").animate({
        left: "-100%"
    });
});

$(".menu1>li>a").mouseenter(function () {
    $(".sub").css("display","none");
    $(this).siblings().stop().slideDown(500);
    $(this).find('.open').attr("src",'image/up.png');
    return false;
});

$(".sub").mouseleave(function () {
    $(this).siblings().stop().slideUp(500);
    $(this).find('.open').attr("src",'image/down.png');
    return false;
}); */