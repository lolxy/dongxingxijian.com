var contentPath = $("#contextPathA").attr("value");
var id=GetQueryString("id")
$(function(){
	// 获取 品牌故事
	getDetails();
});

function getDetails(){
	$.ajax({  
        url:contentPath+"/phone/designShareDetailP/getArticleById.do",  
        type:"POST",  
        data:{articleId:id},
        success:function(data){
        	data=eval("("+data+")"); 
        	var article=data.article;
			if(article!=null ){
				$("#title").html(article.title)
				$("#listBrife").html(article.listBrife)
				$("#contentA").html(article.content)
			}else{
				alert("网络错误，请重试");
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

