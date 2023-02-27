$(function(){

    /*
        웹 브라우저의 리사이즈 발생시

         @media screen and ()

        - 브라우저의 넓이가 (800px,1200px)이상 일 경우 - 데스크탑
        - 브라우저의 넓이가 (800px,1200px)이하 일 경우 - 태블릿, 모바일

        ★ 자바스크립 & 제이쿼리에서 반응형웹 코드를 제작하려면?
        1. 브라우저의 너비값을 확인할 수 있어야 합니다.
             $(window).width();

        2. 브라우저의 너비값은 사용자의 브라우저 리사이즈 상황에 따라 달라질 수 있습니다.
             $(window).resize(function(){
             });

    */

    var bw = $(window).width(); //1. 최초 브라우저 화면의 너비값을 기록
    $(window).resize(function(){ //2. 리사이즈 이벤트 설정

        bw = $(window).width();

        if( bw>=1200 ){
            $("nav").css({ marginLeft:0 });
        }else{
            $("nav").css({ marginLeft: "100%" });
        };
     

    });

    $(window).resize(function(){
        if(bw>=1200){
            $("#header").css({ height:140 });
        }else{
            $("#header").css({ height:100 });
            $("#sub_container").css({ marginTop: 80 });
   
        }
    });




    //1.(데스크탑) 전역메뉴- 하위메뉴 표시 애니메이션
    $(".gnb h2").mouseover(function(){
        if(bw>=1200){
            $("#header").stop().animate({height: 400});
        }
        
    });

    $("#header").mouseleave(function(){
        if(bw>=1200){
            $("#header").stop().animate({height: 140});
        }
    });

    

    //2.(태블릿,모바일) 전역메뉴- 네비게이션 좌우 애니메이션
    $(".nav_open_btn").click(function(){
        $("nav").stop().animate({marginLeft:0});
    });

    $(".nav_close_btn").click(function(){
        $("nav").stop().animate({marginLeft:"100%"});
    });


    /*
        faq 아코디언패널(자주 묻는 질문)

        <dl class="tour_faq">
            <dt></dt>
            <dd></dd>

            <dt></dt>
            <dd></dd>

            <dt></dt>
            <dd></dd>
        </dl>
    */

    /*★★★ 자주 묻는 질문 레코디언*/
    $(".tour_faq dd:not(:first)").hide();

    $(".tour_faq dt").click(function(){
        $(".tour_faq dd").stop().slideUp("fast");
        $(this).next().stop().slideDown("fast");
    });


});