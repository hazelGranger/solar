var x,y,z,o;
for(var i=0;i<=200;i++){
  x=Math.random();
  y=Math.random();
  z=Math.random();
  z=z.toFixed(2);
  x=x*490-245;
  if(x*x>160*160){
    y=y*Math.sqrt(245*245-x*x);
  }else{
    y=y*(Math.sqrt(245*245-x*x)-Math.sqrt(160*160-x*x))+Math.sqrt(160*160-x*x);
  }
  x=Math.floor(x);
  y=Math.floor(y);
  o=o+x+"px "+y+"px "+"0 -149px rgba(255,255,255,"+z+"),";
  o=o+x+"px -"+y+"px "+"0 -149px rgba(255,255,255,"+z+"),";
}

// console.log(o);
// $(document).ready(function(){
//   $(".earth").mouseenter(function(){
//     $(this).children().addClass("active");
//   });
//   $(".earth").mouseleave(function(){
//     $(this).children().removeClass("active");
//   });
//   $(".content").mouseenter(function(){
//     $(this).removeClass("active");
//   });
//   console.log(1);
// });
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
    $(this).addClass("active")
    $(this).next().addClass("active")
  })
  $('.img').mouseleave(function(){
    $(this).removeClass("active")
    $(this).next().removeClass("active")
  })

  //底部作者信息鼠标的响应
  $('#author').mouseenter(function(){
    $('.footer-content').slideDown()
  })
  $('#author').mouseleave(function(){
    $('.footer-content').slideUp()
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

  $('.sun').click(function(){

    if (univese.contentOpen == false) {
      hideBigStar();
      eclipse();
      $(this).addClass("active");
      $('#sun_content').addClass("active");
      $('.solar-syst').addClass("active");
      $('.sun-bg').addClass("active");
      stateUpdate();
      event.stopPropagation();
    }else{
      hideBigStar();
      uneclipse();
      stateUpdate();
    }
    console.log(univese.contentOpen);
    
  })
  $('.mercury').click(function(){
    if (univese.contentOpen == false) {
      hideBigStar();
      eclipse();
      $(this).addClass("active");
      $('#mercury_content').addClass("active");
      $('.solar-syst').addClass("active");
      $('.mercury-bg').addClass("active");
      stateUpdate();
      event.stopPropagation();
    }else{
      stateUpdate();
      hideBigStar();
      uneclipse();
    }
  })
  $('.venus').click(function(){
    if (univese.contentOpen == false) {
      hideBigStar();
      eclipse();
      $(this).addClass("active");
      $('#venus_content').addClass("active");
      $('.solar-syst').addClass("active");
      $('.venus-bg').addClass("active");
       stateUpdate();
      event.stopPropagation();
    }
    else{
      stateUpdate();
      hideBigStar();
      uneclipse();
    }
  })
  $('.earth').click(function(){
    if (univese.contentOpen == false) {
      hideBigStar();
      eclipse();
      $(this).addClass("active");
      $('#earth_content').addClass("active");
      $('.solar-syst').addClass("active");
      $('.earth-bg').addClass("active");
       stateUpdate();
      event.stopPropagation();
    }
    else{
      stateUpdate();
      hideBigStar();
      uneclipse();
    }
  })
  $('.mars').click(function(){
    if (univese.contentOpen == false) {
      hideBigStar();
      eclipse();
      $(this).addClass("active");
      $('#mars_content').addClass("active");
      $('.solar-syst').addClass("active");
      $('.mars-bg').addClass("active");
       stateUpdate();
      event.stopPropagation();
    }
    else{
      stateUpdate();
      hideBigStar();
      uneclipse();
    }
  })
  $('.jupiter').click(function(){
    if (univese.contentOpen == false) {
      hideBigStar();
      eclipse();
      $(this).addClass("active");
      $('#jupiter_content').addClass("active");
      $('.solar-syst').addClass("active");
      $('.jupiter-bg').addClass("active");
       stateUpdate();
      event.stopPropagation();
    }else{
      stateUpdate();
      hideBigStar();
      uneclipse();
    }
  })
  $('.saturn').click(function(){
    if (univese.contentOpen == false) {
      hideBigStar();
      eclipse();
      $(this).addClass("active");
      $('#saturn_content').addClass("active");
      $('.solar-syst').addClass("active");
      $('.saturn-bg').addClass("active");
       stateUpdate();
      event.stopPropagation();
    }else{
      stateUpdate();
      hideBigStar();
      uneclipse();
    }
  })
  $('.uranus').click(function(){
    if (univese.contentOpen == false) {
      hideBigStar();
      eclipse();
      $(this).addClass("active");
      $('#uranus_content').addClass("active");
      $('.solar-syst').addClass("active");
      $('.uranus-bg').addClass("active");
       stateUpdate();
      event.stopPropagation();
    }else{
      stateUpdate();
      hideBigStar();
      uneclipse();
    }
  })
  $('.neptune').click(function(){
    if (univese.contentOpen == false) {
      hideBigStar();
      eclipse();
      $(this).addClass("active");
      $('#neptune_content').addClass("active");
      $('.solar-syst').addClass("active");
      $('.neptune-bg').addClass("active");
       stateUpdate();
      event.stopPropagation();
    }else{
      stateUpdate();
      hideBigStar();
      uneclipse();
    }
  })
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
  

})