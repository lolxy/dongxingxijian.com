$(".search").click(function(){
  $(this).hide();
  $(".qvxiao").show();
  $(".search-wrap").addClass("active");
});

$(".qvxiao").on("click",function(){
  $(".search").fadeIn();
  $(this).hide();
  $(".search-wrap").removeClass("active");
});

// 侧边栏菜单切换
$(".menu").click(function(){
  if($(this).hasClass("open")){
    $(this).removeClass("open");
    $("#slide-menu").css({"right":"-45%"});
    $("#header").css({"right":"0"});
  }else{
    $(this).addClass("open");
    $("#slide-menu").css({"right":"0"});
    $("#header").css({"right":"45%"});
  }
});

$(document).click(function(){
  if($(".menu").hasClass("open")){
    $(".menu").removeClass("open");
    $("#slide-menu").css({"right":"-45%"});
    $("#header").css({"right":"0"});
  }
});

$("#slide-menu,.menu").click(function(e){
  e.stopPropagation();
});
