	var contextPath = $("#topNavCon").attr("value");
		$(function(){
			findArticle()
			findVisitor()
			findDuty()
			/**
			 * 最新动态
			 */
			$.ajax({  
		        url:"findArticleAllTop5.do",  
		        type:"POST",  
		        data:{},
		        success:function(data){
		        	data=eval("("+data+")"); 
		        	var html=""
		        	var articleList=data.articleList;
		        	for(var i=0; i<articleList.length; i++){
		        		var article=articleList[i]
		        		html +="<a class='list' href='"+contextPath+"/phone/designShareDetailP/view.do?id="+article.articleId+"'>";
		        		html +='<div class="img-contain">';
		        		html +="<img src="+article.picUrl+" alt='图片暂无'/>";
		        		html +=' </div>';
		        		html +='<div class="text-contain">';
		        		html +="<h4 class='title'>"+article.title+"</h4>";
		        		html +=' <div class="info">';
		        		html +="<p>"+article.listBrife+"</p>";
		        		html +=' </div>';
		        		html +=" <div class='badge'><span>"+article.labels+"</span></div>";
		        		html +=' </div>';
		        		html +=' </a>';
					}
		        	$("#news").html(html);
		        },   
			});
		})
		
		var thought=true
		var thoughtIndex=1
		/**
			 * 获取设计思想
			 */
		function findArticle(){
			$.ajax({  
		        url:"findArticleAll.do",  
		        type:"POST",  
		        data:{pageIndex:thoughtIndex,pageSize:4},
		        success:function(data){
		        	data=eval("("+data+")"); 
		        	var html="";
		        	var articleList=data.articleList;
		        	if(articleList!=null && articleList.length>0){
		        		for(var i=0; i<articleList.length; i++){
			        		var article=articleList[i];
			        		html +="<a class='swiper-slide common-swiper-list' href='"+contextPath+"/phone/designShareDetailP/view.do?id="+article.articleId+"'>";
			        		html +='<div class="img-contain">';
			        		html +="<img src='"+article.picUrl+"' alt='图片暂无'>";
			        		html +=' </div>';
			        		html +=' <div class="text-contain">';
			        		html +="<h5>"+article.title+"</h5>";
			        		html +="<p>"+article.listBrife+"</p>";
			        		html +=' </div>';
			        		html +=' </a>';
						}
			        	$("#thought").append(html);
		        	}else{
		        		thought=false
		        	}
		        	//  设计思享图文切换
		            var designShareListSwiper = new Swiper('#designShareList', {
		                slidesPerView: 1.2,
		                spaceBetween : 10,
		                updateOnImagesReady : true,
		                freeMode: true,
		                onReachEnd: function(swiper){
     			           if(thought && thoughtIndex!=1){
     			        	  findArticle()
     			           }
     			         }
		            });
		            designShareListSwiper.update();
		            thoughtIndex++
		        },   
			});
		}
		/**
		 * 会客厅
		 */
		var visitor=true
		var visitorIndex=1
		function findVisitor(){
			$.ajax({  
		        url:"findVisitor.do",  
		        type:"POST",  
		        data:{pageIndex:visitorIndex,pageSize:4},
		        success:function(data){
		        	data=eval("("+data+")"); 
		        	var html="";
		        	if(visitorIndex==1){
		        		if(data.bannerTitle!=null){
			        		$("#titleVisitor").html(data.bannerTitle.brief);
			        		var urls =data.bannerTitle.picUrl.split(",");
			        		var imgs="";
			        		for(var i=0; i<urls.length; i++){ //轮播图
				        		var url=urls[i];
				        		imgs+="<img class='swiper-slide swiper-no-swiping' src='"+url+"' alt='暂无图片'/>";
							}
			        		$("#imgVisitor").html(imgs);
			        	}
		        	}
		        	var articleList=data.articleList;
		        	if(articleList!=null && articleList.length>0){
			        	for(var i=0; i<articleList.length; i++){
			        		var article=articleList[i];
			        		html +=" <a class='swiper-slide common-swiper-list' href='"+contextPath+"/phone/designShareDetailP/view.do?id="+article.articleId+"'>";
			        		html +='<div class="img-contain">';
			        		html +="<img src="+article.picUrl+" alt='图片暂无'/>";
			        		html +=' </div>';
			        		html +='<div class="text-contain">';
			        		html +="<h5 >"+article.title+"</h5>";
			        		html +="<p >"+article.listBrife+"</p>";
			        		html +=" <p class='badge'>"+article.labels+"</p>";
			        		html +=' </div>';
			        		html +=' </a>';
						}
			        	$("#TKMeetListA").append(html);
			        }else{
			        	visitor=false;
			        }
		            //  邱德光会客厅轮播图切换
		            var TKMeetCarSwiper = new Swiper('#TKMeetCar', {
		                speed: 1000,
		                autoplay: 3000,
		                autoplayDisableOnInteraction : false,
		                updateOnImagesReady : true,
		                loop : true,
		                autoHeight: true,
		                setWrapperSize :true,
		            });
					TKMeetCarSwiper.update();

					//  邱德光会客厅图文切换
		            var TKMeetListSwiper = new Swiper('#TKMeetList', {
		                slidesPerView: 1.2,
		                spaceBetween : 10,
		                updateOnImagesReady : true,
		                freeMode: true,
		                onReachEnd: function(swiper){
     			           if(visitor && visitorIndex!=1){
     			        	  findVisitor()
     			           }
     			         }
		            });
		            TKMeetListSwiper.update();
		            visitorIndex++
	            },   
			});
		}
		/**
		 * 社会责任
		 */
		var duty=true
		var dutyIndex=1
		function findDuty(){
			$.ajax({  
		        url:"findDuty.do",  
		        type:"POST",  
		        data:{pageIndex:dutyIndex,pageSize:4},
		        success:function(data){
		        	data=eval("("+data+")"); 
		        	var html="";
		        	
		        	if(dutyIndex==1){
		        		if(data.bannerTitle!=null){
			        		$("#dutyTitle").html(data.bannerTitle.brief);
			        		var urls =data.bannerTitle.picUrl.split(",");
			        		var imgs="";
			        		for(var i=0; i<urls.length; i++){ //轮播图
				        		var url=urls[i];
				        		imgs+="<img class='swiper-slide swiper-no-swiping' src='"+url+"' alt='暂无图片'/>";
							}
			        		$("#dutyImg").html(imgs);
			        	}
		        	}
		        	
		        	var articleList=data.articleList;
		        	
		        	if(articleList!=null && articleList.length>0){
			        	for(var i=0; i<articleList.length; i++){
			        		var article=articleList[i];
			        		html +="<a class='swiper-slide common-swiper-list' href='"+contextPath+"/phone/designShareDetailP/view.do?id="+article.articleId+"'>";
			        		html +='<div class="img-contain">';
			        		html +="<img src="+article.picUrl+" alt='图片暂无'/>";
			        		html +=' </div>';
			        		html +='<div class="text-contain">';
			        		html +="<h5 >"+article.title+"</h5>";
			        		html +="<p >"+article.listBrife+"</p>";
			        		html +=" <p class='badge'>"+article.labels+"</p>";
			        		html +=' </div>';
			        		html +=' </a>';
						}
			        	$("#dutyList").append(html);
		        	}else{
		        		duty=false;
		        	}
		        	//  社会责任轮播图切换
		            var societyCarSwiper = new Swiper('#societyCar', {
		                speed: 1000,
		                autoplay: 3000,
		                autoplayDisableOnInteraction : false,
		                updateOnImagesReady : true,
		                loop : true,
		                autoHeight: true,
		                setWrapperSize :true,
		            });
		            societyCarSwiper.update();
		            //  社会责任图文切换
		            var societyListSwiper = new Swiper('#societyList', {
		                slidesPerView: 1.2,
		                spaceBetween : 10,
		                updateOnImagesReady : true,
		                freeMode: true, 
		                onReachEnd: function(swiper){
     			           if(duty && dutyIndex!=1){
     			        		findDuty()
      			           }
	      			    }
		            });
		            societyListSwiper.update();
		            dutyIndex++
		        },   
			});
		}
