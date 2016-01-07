
$(document).ready(function(){

  var univese = {
    contentOpen: false
  }
  //头部标题
  $('.description h1').mouseenter(function(){
    $('.head-content').slideDown();
  })
  $('.description h1').mouseleave(function(){
    $('.head-content').slideUp();
  })

  //图片（照片）和文字鼠标响应
  $('.img').mouseenter(function(){
    $(this).addClass("active");
    $(this).find(".imgcontent").addClass("active");
  })
  $('.img').mouseleave(function(){
    $(this).removeClass("active");
    $(this).find(".imgcontent").removeClass("active");
  })

  $('.img p').mouseenter(function(e){
    e.stopPropagation();
  })



  $('body').click(function(){
    hideBigStar();
    uneclipse();
    univese.contentOpen = false;
    //console.log(2);
  })

  $('.big-content-bg').click(function(e){
    e.stopPropagation();
  })
  $('.big-content').click(function(e){
    e.stopPropagation();
  })

  // $('.sun').click(function(){

  //   if (univese.contentOpen == false) {
  //     hideBigStar();
  //     eclipse();
  //     $(this).addClass("active");
  //     $('#sun_content').addClass("active");
  //     $('.solar-syst').addClass("active");
  //     $('.sun-bg').addClass("active");
  //     stateUpdate();
  //     event.stopPropagation();
  //   }else{
  //     hideBigStar();
  //     uneclipse();
  //     stateUpdate();
  //   }
  //   console.log(univese.contentOpen);
    
  // })
  // $('.mercury').click(function(){
  //   if (univese.contentOpen == false) {
  //     hideBigStar();
  //     eclipse();
  //     $(this).addClass("active");
  //     $('#mercury_content').addClass("active");
  //     $('.solar-syst').addClass("active");
  //     $('.mercury-bg').addClass("active");
  //     stateUpdate();
  //     event.stopPropagation();
  //   }else{
  //     stateUpdate();
  //     hideBigStar();
  //     uneclipse();
  //   }
  // })
  // $('.venus').click(function(){
  //   if (univese.contentOpen == false) {
  //     hideBigStar();
  //     eclipse();
  //     $(this).addClass("active");
  //     $('#venus_content').addClass("active");
  //     $('.solar-syst').addClass("active");
  //     $('.venus-bg').addClass("active");
  //      stateUpdate();
  //     event.stopPropagation();
  //   }
  //   else{
  //     stateUpdate();
  //     hideBigStar();
  //     uneclipse();
  //   }
  // })
  // $('.earth').click(function(){
  //   if (univese.contentOpen == false) {
  //     hideBigStar();
  //     eclipse();
  //     $(this).addClass("active");
  //     $('#earth_content').addClass("active");
  //     $('.solar-syst').addClass("active");
  //     $('.earth-bg').addClass("active");
  //      stateUpdate();
  //     event.stopPropagation();
  //   }
  //   else{
  //     stateUpdate();
  //     hideBigStar();
  //     uneclipse();
  //   }
  // })
  // $('.mars').click(function(){
  //   if (univese.contentOpen == false) {
  //     hideBigStar();
  //     eclipse();
  //     $(this).addClass("active");
  //     $('#mars_content').addClass("active");
  //     $('.solar-syst').addClass("active");
  //     $('.mars-bg').addClass("active");
  //      stateUpdate();
  //     event.stopPropagation();
  //   }
  //   else{
  //     stateUpdate();
  //     hideBigStar();
  //     uneclipse();
  //   }
  // })
  // $('.jupiter').click(function(){
  //   if (univese.contentOpen == false) {
  //     hideBigStar();
  //     eclipse();
  //     $(this).addClass("active");
  //     $('#jupiter_content').addClass("active");
  //     $('.solar-syst').addClass("active");
  //     $('.jupiter-bg').addClass("active");
  //      stateUpdate();
  //     event.stopPropagation();
  //   }else{
  //     stateUpdate();
  //     hideBigStar();
  //     uneclipse();
  //   }
  // })
  // $('.saturn').click(function(){
  //   if (univese.contentOpen == false) {
  //     hideBigStar();
  //     eclipse();
  //     $(this).addClass("active");
  //     $('#saturn_content').addClass("active");
  //     $('.solar-syst').addClass("active");
  //     $('.saturn-bg').addClass("active");
  //      stateUpdate();
  //     event.stopPropagation();
  //   }else{
  //     stateUpdate();
  //     hideBigStar();
  //     uneclipse();
  //   }
  // })
  // $('.uranus').click(function(){
  //   if (univese.contentOpen == false) {
  //     hideBigStar();
  //     eclipse();
  //     $(this).addClass("active");
  //     $('#uranus_content').addClass("active");
  //     $('.solar-syst').addClass("active");
  //     $('.uranus-bg').addClass("active");
  //      stateUpdate();
  //     event.stopPropagation();
  //   }else{
  //     stateUpdate();
  //     hideBigStar();
  //     uneclipse();
  //   }
  // })
  // $('.neptune').click(function(){
  //   if (univese.contentOpen == false) {
  //     hideBigStar();
  //     eclipse();
  //     $(this).addClass("active");
  //     $('#neptune_content').addClass("active");
  //     $('.solar-syst').addClass("active");
  //     $('.neptune-bg').addClass("active");
  //      stateUpdate();
  //     event.stopPropagation();
  //   }else{
  //     stateUpdate();
  //     hideBigStar();
  //     uneclipse();
  //   }
  // })
  //内容和背景的隐藏，恢复原状
  function hideBigStar($element){
    //active 控制了内容 left
    $('.big-content').removeClass("active");
    //active 控制了星球背景left
    $('.big-content-bg').removeClass("active");
    //active太阳系向左移动
    $('.solar-syst').removeClass("active");
    //active 星球变大
    $('.solar-syst').children().removeClass("active");
  }

  function eclipse(){
    $('.star-img').addClass("eclipse");
    $("#sun_content").niceScroll({cursorcolor:"#000",cursoropacitymax:1,cursoropacitymin:0, autohidemode:true,boxzoom:false,touchbehavior:true});
  }

  function stateUpdate(){
    if (univese.contentOpen == true) {
      univese.contentOpen = false;
    }else{
       univese.contentOpen = true;
    }
  }

  function uneclipse(){
    $('.star-img').removeClass("eclipse");
  }
  // function hideBgColor(){
  //   $('.big-content-bg').removeClass("sun-bg mercury-bg venus-bg earth-bg mars-bg jupiter-bg saturn-bg uranus-bg neptune-bg");
  // }

  //scroll
  function timeUpdate(frqc){
    //frqc为更新时间的频率，以 1000ms 为 base
    var cnt = 0;
    var trans_time,year,day;
    setInterval(function(){
      cnt = cnt + frqc/1000;
      trans_time = cnt*365/30;//将 秒 转换为 “天”
      if (trans_time>365) {
        year = Math.floor(trans_time/365);
        day = trans_time%365;
        res = year + " 年 " + Math.floor(day) + " 天"
      }else{
        res = Math.floor(trans_time) + " 天";
      }
      $('#time').text(res);
    }, frqc)
  }

  //timeUpdate(200);

  function timeUpdateByHour(frqc){
    //frqc为更新时间的频率，以 1ms 为 base
    var cnt = 0;
    var trans_time,year,day,hour;
    setInterval(function(){
      cnt = cnt + frqc/1000;
      trans_time = cnt * 365 * 24 / 30; //将 秒 转换为 “小时”
      if (trans_time > 24 ) {
        day = Math.floor(trans_time/24);
        hour = Math.floor(trans_time%24);
        if (trans_time > 365 * 24) {
            year  = Math.floor(trans_time/(365*24));
            day = Math.floor(trans_time/24 - year * 365 );
            hour = Math.floor(trans_time%24);

            res = year + "y " + day + "d " + hour +"h ";
          }else{
            res = "0y " + day + "d " + hour +"h ";
          }
      }else{
         res = "0y " + day + "0d " + hour +"h ";
      }
      $('#time').text(res);
    }, frqc)
  }

  timeUpdateByHour(30);

  $('.description .iconfont').click(function(){
    var darkbg = $('.darkbg');
    darkbg.show();
    setTimeout(function(){
      darkbg.css("opacity","1");
    }, 100);
  });

  $('.darkbg .close').click(function(){
    var darkbg = $('.darkbg');
    darkbg.css("opacity","0");
    setTimeout(function(){
      darkbg.hide();
    }, 500);
  });

})