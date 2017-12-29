var contentPath = $("#contextPathA").attr("value");

$(function(){
	// 获取 品牌故事
	getStory();
});

function getStory(){
	$.ajax({  
        url:contentPath+"/pc/aboutUs/getStory.do",  
        type:"POST",  
        data:{},
        success:function(data){
        	data=eval("("+data+")"); 
        	var story=data.story;
			if(story!=null ){
				// 标题
				$("#story_title").html(story.title);
				var content = story.content;
				content = ReplaceAll(content,"_&", "<br>");
				$("#story_content").html(content);
				
				// 视频链接
				$("#video_id").attr("src", story.videoUrl);
				
				// 品牌故事轮播图获取数据
				var turnsList = data.turnsList;
				var html1 = "";
				for(var i=0; i<turnsList.length; i++){
					html1 += '<img class="swiper-slide swiper-no-swiping" src="'+turnsList[i].picUrl+'" alt="图片丢失"/>';
				}
				$("#turnspic").html(html1);
				//  品牌故事轮播图设置
	            var storyCarSwiper = new Swiper('#storyCar', {
	                speed: 1000,
	                autoplay: 3000,
	                autoplayDisableOnInteraction : false,
	                updateOnImagesReady : true,
	                loop : true,
	                slidesPerView: 1.2,
	                spaceBetween : 10,
	                centeredSlides : true,
	            });
				storyCarSwiper.update();

				// 价值服务
				var html2 = "";
				var serviceTitleList = data.serviceTitleList;
				var serviceList = data.returnAllService;
				for(var i=0; i<serviceTitleList.length; i++){
					html2 += '<div class="service-list"><h5 class="service-title">'+serviceTitleList[i].title+'</h5>';
					html2 += '<div class="service-intro"><p>';
					// 价值服务 内容
					for(var j=0;j<serviceList.length; j++){
						if(serviceTitleList[i].serviceTitleId == serviceList[j].serviceTitleId){
							html2 += '·'+serviceList[j].content+'<br>';
						}
					}
					html2 += '</p></div></div>'
				}
				$("#service-contain").html(html2);
				
				// 合作伙伴
				var html3 = "";// 图片
				var html4 = "";// 文字
				var partnerList = data.partnerList;
				for(var i=0; i<partnerList.length; i++){
					if(i==0){
						html3 += '<div class="swiper-slide logo-list active-nav">';
					}else{
						html3 += '<div class="swiper-slide logo-list">';
					}
					html3 += '<img src="'+partnerList[i].picUrl+'" alt="图片丢失"/>';
					html3 += '<i class="line"></i><i class="triangle"></i></div>';
					html4 += '<div class="swiper-slide intro-list"><div class="intro-content"><p>'+partnerList[i].content+'</p></div></div>';
				}
				$("#partner_pic").html(html3);
				$("#partner_content").html(html4);
				//  合作伙伴LOGO滚动
			    var cooLogoListSwiper = new Swiper('.company-logo-contain',{
			        watchSlidesProgress : true,
			        watchSlidesVisibility : true,
			        slidesPerView : 3,
			        onTap: function(){
			            cooIntroListSwiper.slideTo( cooLogoListSwiper.clickedIndex)
			        }
			    });
			    //  合作伙伴文字说明滚动
			    var cooIntroListSwiper = new Swiper('.company-intro-contain',{
			        onSlideChangeStart: function(){
			            updateNavPosition()
			        }
			    });
				//  合作伙伴LOGO和文字联动
				function updateNavPosition(){
				    $('.company-logo-contain').find(".active-nav").removeClass('active-nav');
				    var activeNav = $('.company-logo-contain').find(".logo-list").eq(cooIntroListSwiper.activeIndex).addClass('active-nav');
				    if (!activeNav.hasClass('swiper-slide-visible')) {
				        if (activeNav.index()>cooLogoListSwiper.activeIndex) {
				            var thumbsPerNav = Math.floor(cooLogoListSwiper.width/activeNav.width())-1;
				            cooLogoListSwiper.slideTo(activeNav.index()-thumbsPerNav)
				        }
				        else {
				            cooLogoListSwiper.slideTo(activeNav.index())
				        }
				    }
				}
				//	合作伙伴滑动更新
				cooLogoListSwiper.update();
				cooIntroListSwiper.update();
				
				// 荣誉
				var html5 = "";
				var honorList = data.honorList;
				for(var i=0; i<honorList.length; i++){
					html5 += '<div class="swiper-slide honor-list">';
					html5 += '<div class="img-contain">';
					html5 += '<img src="'+honorList[i].picUrl+'" alt="">';
					html5 += '</div>';
					html5 += '<div class="text-contain">';
					html5 += '<h5>'+honorList[i].title+'</h5>';
					html5 += '<p>'+honorList[i].createTimeStr+'</p>';
					html5 += '</div></div>';
				}
				$("#honor_list").html(html5);
				//  荣誉滑动
	            var honorListSwiper = new Swiper('.honor-swiper', {
	                slidesPerView: 1.8,
	                spaceBetween : 10,
	                updateOnImagesReady : true,
	                freeMode: true,
	            });
				//	荣誉滑动更新
				honorListSwiper.update();
				
				// 坐标
				var html6 = "";
				var localList = data.localList;
				for(var i=0; i<localList.length; i++){
					html6 += '<div class="swiper-slide location-list">';
					html6 += '<h5 class="location-name">'+localList[i].title+'</h5>';
					html6 += '<div class="contact-method"><p>'+localList[i].content;
					html6 += '</p></div></div>';
				}
				$("#local").html(html6);
				//  地址位置
	            var locationListSwiper = new Swiper('.location-swiper', {
	                slidesPerView: 1,
	                spaceBetween : 10,
	                pagination: '.location-pagination',
	            });
	            locationListSwiper.update();
				
			}
			else{
				alert("网络错误，请重试");
			}
        },   
	});
}


