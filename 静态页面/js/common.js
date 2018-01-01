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
