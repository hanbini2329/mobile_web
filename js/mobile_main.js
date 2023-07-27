$(function () {

    $("body,html").stop().animate({
        "scrollTop": 0
    }, 1500, "swing");

    //top아이콘 클릭시 부드럽게 이동

    $(".top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
        return false
    });


    //메인설정

    let bnnNum = 0;
    $(".prev").click(function () {
        if (bnnNum <= 0) return false;
        bnnNum--;
        mainimg_w = $("#main").width();
        $("#main ul").animate({
            left: -mainimg_w * bnnNum
        }, 500, function () {
            $("#roll a").removeClass("on")
            $("#roll a").eq(bnnNum).addClass("on")
        });


    });


    $(".next").click(function () {
        if (bnnNum >= 4) return false;
        bnnNum++;
        mainimg_w = $("#main").width();
        $("#main ul").animate({
            left: -mainimg_w * bnnNum
        }, 500, function () {
            $("#roll a").removeClass("on")
            $("#roll a").eq(bnnNum).addClass("on")
        });

    });

    $("#roll p a").click(function () {
        const strName = $(this).parent().attr("id")
        slideTarget(strName.substr(3, 1));
        return false
    });

    function slideTarget(n){
        const pos = Number(n) * -100+"%";
        $("#main ul").animate({
            left: pos
        },500,function(){
            $("#roll a").removeClass("on");
            $("#roll a").eq(n).addClass("on");
        });
    };

    let btnNum=0;
    setInterval(function(){
        btnNum++;
        if(btnNum>4) btnNum=0;
        $("#roll p a").eq(btnNum).trigger("click");
    },4000);


    //브랜드 소개 글
    $(".text2").waypoint(function(){
        $(".text2").addClass("animated fadeInLeft")
    },{
        offset: "75%"
    });


    //브랜드 홍보 글
    $(".text3").waypoint(function(){
        $(".text3").addClass("animated fadeInUp")
    },{
        offset: "75%"
    });


});