$(function(){ //(1)


    var bw = $(window).width();
    $(window).resize(function(){
        bw = $(window).width();
        if(bw>1200){
          $("nav").css({ marginLeft:0 });
        }else{
          $("nav").css({ marginLeft:"100%" });
        }
        
    });

    $("header h2").mouseover(function(){   
        if(bw>1200){
          $("header").stop().animate({ height:400 });
        };      
    });
    $("header").mouseleave(function(){
        if(bw>1200){
          $("header").stop().animate({ height:100 });
        };  
    });

    $(".nav_open_btn").click(function(){
        if(bw<1200){
          $("nav").stop().animate({ marginLeft:0 });
          $("body").css({ overflow:"hidden"});
        };  
    });

    $(".nav_close_btn").click(function(){
        if(bw<1200){
          $("nav").stop().animate({ marginLeft:"100%" });
          $("body").css({ overflow:"auto"});
        };  
    });

    $(".lnb nav>ul>li>a").click(function(){   
    $(".lnb nav>ul").stop().animate({ height:122 },"fast");
        return false;
    });

    $(".lnb").mouseleave(function(){   
    $(".lnb nav>ul").stop().animate({ height:41 },"fast");
    });


     /*★★★ 자주 묻는 질문 레코디언*/

    $(".tour_faq dd:not(:first)").hide();

    $(".tour_faq dt").click(function(){
      $(".tour_faq dd").stop().slideUp("fast");
      $(this).next().stop().slideToggle("fast");
    });
    

}); //(1)