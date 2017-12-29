var contentPath = $("#contextPathA").attr("value");
var id=GetQueryString("id")
var totalPageIndex=1;
$(function(){
	/**
	 * 获取数据
	 */
	$.ajax({  
        url:"findArticleListBySecondPlateID.do",  
        type:"POST",  
        data:{secondPlateId:id,
        	"pageSize":4,
       		"pageIndex":1},
        success:function(data){
        	data=eval("("+data+")"); 
        	var secondPlate= data.secondPlate
        	$("#title").html(secondPlate.title)
        	var articleList=data.articleList;
        	if(null!=articleList &&articleList.length>0){
        		showData(articleList)
        	}
        },   
	});
	scrollCaseEvent()
});



/**
 * 显示数据
 */
function showData(articleList){
	var html=""
	for(var i=0; i<articleList.length; i++){
		var article=articleList[i] 
		if(id == 20){ //QA结构不一样\
			
			html +="<a class='question-list border-b' href='"+contentPath+"/phone/designShareDetailP/view.do?id="+article.articleId+"'>";
			html +=" <h3 class='question-title''>"+article.title+"</h3>"
			var breifs = ReplaceAll(articleList[i].listBrife, "_&", "<br />");
			html +="<p class='questioner-info'> <span>"+breifs+"</span></p>" 
			html +=" </a>"
				
		}else{
			
			if(id == 20 || id == 12 ){ //QA,最新资讯  详情不显示其他作品
				html +="<a class='case-list' href='"+contentPath+"/phone/designShareDetailP/view.do?id="+article.articleId+"'>";
			}else{
				html +="<a class='case-list' href='"+contentPath+"/phone/designDetails/view.do?id="+article.articleId+"'>";
			}
			html +='<div class="case-img-contain">';
			html +="<img src='"+article.picUrl+"' alt='图片暂无'>";
			html +=' </div>';
			html +=' <div class="case-info-contain">';
			html +="<h4 class='info-title'>"+article.title+"</h4>";
			html +=' <div class="info-text">';
			html += '<p>';
	        var breifs = ReplaceAll(articleList[i].listBrife, "_&", "<br />");
	        html += breifs;
	        html += '</p>';
			html +=' </div>';
			html +=' </div>';
			html +=' </a>';
		}
		
	}
	if(id==20){
		$("#articleListA").css("display","block");
		$("#articleListA").append(html)
	}else{
		$("#articleList").append(html)
	}
	totalPageIndex++
}

/**
 * 自动加载数据
 */
function scrollCaseEvent() {
	  //自动加载数据
	  var page = 0;
	  var scrollTop;     //获取滚动条到顶部的距离
	  var scrollHeight;  //获取文档区域高度
	  var windowHeight;  //获取滚动条的高度
	  var flag = true;   //加载数据标志

	  $(window).scroll(function(){
	    scrollTop = $(this).scrollTop();
	    scrollHeight = $(document).height();
	    windowHeight = $(this).height();

	    /*scrollTop + windowHeight == scrollHeight && flag == true*/

	    if(scrollHeight - scrollTop - windowHeight < 100 && flag==true){
	    	var pageSize = 4;//每次加载4条
	    	$.ajax({
	          	type: "POST",
	           	url: "findArticleListBySecondPlateID.do",
	           	data: {
	           		secondPlateId:id,
	           		"pageSize":pageSize,
	           		"pageIndex":totalPageIndex
	           	},
	           	dataType: "json",
	           	beforeSend:function(){
	                flag = false;
	                $(".case-loading-gif").css("display","block");
	            },
	           	cache: false,
	           	success: function (data) {
	    			if(null!=data.articleList && data.articleList.length>0){
	    				showData(data.articleList);
	    				flag = true;
	    			}
	           	},
	           	error:function(XMLResponse){
	           		alert("网络连接失败");
	           	},
	        });
	    }
	  });
	}


/**
 * 获取url的参数
 * @param name
 * @returns
 */
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  /*   var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;*/
     var result = window.location.search.substr(1).match(reg);
     return result?decodeURIComponent(result[2]):null;
}


