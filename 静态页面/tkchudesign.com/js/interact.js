var contentPath = $("#topNavCon").attr("value");

$(function(){
	// 获取 品牌故事
	getQaList();
	getCooperationTitleInter()
	getInteractivity()
});


function getQaList(){

	$.ajax({  
        url:"getQaList.do",  
        type:"POST",  
        data:{
        	"other":0
        },
        success:function(data){
        	data=eval("("+data+")"); 
        	var qaList=data.qaList;
			if(qaList.length > 0 ){
				var html = "";
				for(var i=0; i<qaList.length; i++){
					html += '<a class="question-list" href="'+contentPath+"/phone/designShareDetailP/view.do?id="+qaList[i].articleId+'">';
					html += '<h6 class="question-title">'+qaList[i].title+'</h6>';
					html += '<p class="questioner-info"><span>'+qaList[i].listBrife+'</span></p>';
					html += '</a>';
				}
				$("#qaList").html(html);
			}
        },   
	});
}
/**
 * 合作预约的标题图片
 */
function getInteractivity(){
	$.ajax({  
        url:"getInteractivity.do",  
        type:"POST",  
        data:{},
        success:function(data){
        	data=eval("("+data+")"); 
        	var interactivity=data.interactivity;
        	$("#ititle").html(interactivity.qaTitle)
        	$("#recruitTitle").html(interactivity.togetherTitle)
        	$("#iimg").attr("src",interactivity.qaPic)
        	$("#recruitImg").attr("src",interactivity.togetherPic)
        },   
	});
}

/**
 * 合作预约的标题
 */
function getCooperationTitleInter(){
	$.ajax({  
        url:contentPath+"/pc/aboutUs/getCooperationTitle.do",  
        type:"POST",  
        data:{formTitleId:1},
        success:function(data){
        	data=eval("("+data+")"); 
        	var formTitle=data.formTitle;
        	$("#interId").text(formTitle.title);
        },   
	});
}

/**
 * 合作预约 表单
 */
function cooperationBtnInter(){
	var team = $("#team").val();
	var name = $("#name").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var job = $("#job").val();
	var city = $("#city").val();
	var projectType = $("#projectType").val();
	var content = $("#content").val();
	
	if(null==team || ""==team){
		alert("请填写完整");
	}else if(null==name || ""==name){
		alert("请填写完整");
	}else if(null==phone || ""==phone){
		alert("请填写完整");
	}else if(null==email || ""==email){
		alert("请填写完整");
	}else if(null==job || ""==job){
		alert("请填写完整");
	}else if(null==city || ""==city){
		alert("请填写完整");
	}else if(null==projectType || ""==projectType){
		alert("请填写完整");
	}else{
		$.ajax({  
	        url:contentPath+"/pc/aboutUs/cooperationForm.do",  
	        type:"POST",  
	        data:{
	        	"formTitleId":1,
	        	"team":team,
	        	"name":name,
	        	"phone":phone,
	        	"email":email,
	        	"job":job,
	        	"city":city,
	        	"projectType":projectType,
	        	"content":content
	        },
	        success:function(data){
	        	data=eval("("+data+")"); 
	        	var Msg=data.Msg;
				if(data.Msg == "Ok"){
					alert("提交成功!");
				}
	        },   
		});
	}
}


