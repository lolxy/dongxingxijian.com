var contentPath = $("#contextPathA").attr("value");
var id=GetQueryString("id")
$(function(){
	$.ajax({  
        url:"findArticleBypkid.do",  
        type:"POST",  
        data:{articleId:id},
        success:function(data){
        	data=eval("("+data+")"); 
        	var article=data.article;
        	if(article!=null){
        		$("#title").html(article.title)
        		$("#brife").html(article.brife)
        		var labels=	""
        		if(article.labels!=null){
        			labels=	article.labels.replace(/,/g, "  ");
        		}
        		$("#labels").html(article.labels)
        		$("#content").html(article.content)
        		otherCase()
        	}
        },   
	});

});


function otherCase(){//其他作品
	var articleId = GetQueryString("id");
	var article_label = $("#labels").text();
	
	$.ajax({  
        url:contentPath+"/pc/caseDetail/getOtherCase.do",  
        type:"POST",  
        data:{
        	"articleId":articleId,
        	"labels":article_label
        },
        success:function(data){
        	data=eval("("+data+")"); 
        	var returnList = data.returnList;
			if(returnList != null){
				var html = "";
				for(var i=0; i<returnList.length;i++){
					if(returnList[i].articleId != articleId){
						html += "<a class='swiper-slide common-swiper-list' href='"+contentPath+"/phone/designDetails/view.do?id="+returnList[i].articleId+"'>";
						html += '<div class="img-contain">';
						html += '<img src="'+returnList[i].picUrl+'" alt="图片丢失"/>';
						html += '</div>';
						html += '<div class="text-contain">';
						html += '<h5>'+returnList[i].title+'</h5>';
						html += '</div>';
						html += '</a>';
					}
				}
				$("#otherList").html(html);
				
			}
        },   
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
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}



