$(".close,.h-head").click(function(){
	$(".navlist").removeClass('showNav');
	$(".menubox").fadeIn();
})

$(".menus").click(function(){
	$(".navlist").addClass('showNav');
	$(".menubox").fadeOut();
})