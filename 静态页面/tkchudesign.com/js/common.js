var contentPath = $("#topNavCon").attr("value");

$(function(){
	getCooperationTitle();
	getNav();
	// 导航 active
	showActive();
	getFoot();
});

/**
 * 搜索
 */
function goSearch() {
	var searchInput = $("#searchInput").val();
	
	window.location.href = contentPath+"/pc/searchListPc/view.do?keyword="+searchInput; 
}



function ReplaceAll(str, sptr, sptr1){
                    while (str.indexOf(sptr) >= 0){
                       str = str.replace(sptr, sptr1);
                    }
                    return str;
             }

function showActive(){
	var thisU2 = window.location.href;
	if(thisU2.indexOf("index") >= 0){
		$("#nav_home").addClass("active");
	}else if(thisU2.indexOf("caseVilla") >= 0){ // 设计
		$("#nav_Design").addClass("active");
		$("#nav_Villa").addClass("active");
	}else if(thisU2.indexOf("caseApartment") >= 0){
		$("#nav_Design").addClass("active");
		$("#nav_Flat").addClass("active");
	}else if(thisU2.indexOf("casePublic") >= 0){
		$("#nav_Design").addClass("active");
		$("#nav_Public").addClass("active");
	}else if(thisU2.indexOf("caseSelfDesgin") >= 0){
		$("#nav_Design").addClass("active");
		$("#nav_Self").addClass("active");
	}else if(thisU2.indexOf("planeqiuList") >= 0){
		$("#nav_Design").addClass("active");
		$("#nav_GAT").addClass("active");
	}else if(thisU2.indexOf("noneZoomList") >= 0){
		$("#nav_Design").addClass("active");
		$("#nav_space").addClass("active");
	}else if(thisU2.indexOf("desginShareList") >= 0){ // 咨询
		$("#nav_TK").addClass("active");
		$("#nav_Idea").addClass("active");
	}else if(thisU2.indexOf("newsList") >= 0){
		$("#nav_TK").addClass("active");
		$("#nav_News").addClass("active");
	}else if(thisU2.indexOf("meetingList") >= 0){
		$("#nav_TK").addClass("active");
		$("#nav_Parlour").addClass("active");
	}else if(thisU2.indexOf("societyList") >= 0){
		$("#nav_TK").addClass("active");
		$("#nav_Responsibility").addClass("active");
	}else if(thisU2.indexOf("aboutUs") >= 0){// 关于我们
		$("#nav_About").addClass("active");
	}else if(thisU2.indexOf("interact") >= 0){
		$("#nav_Interact").addClass("active");
	}else if(thisU2.indexOf("jobs") >= 0){
		$("#nav_Interact").addClass("active");
		$("#nav_jobs").addClass("active");
	}
}

/**
 * 获取导航
 */
function getNav(){
	$.ajax({  
        url:contentPath+"/pc/index/getNav.do",  
        type:"POST",  
        data:{},
        success:function(data){
        	data=eval("("+data+")"); 
        	var firstNavList=data.firstNavList;
        	var secondNavList = data.secondNavList;
        	for(var i=0; i<firstNavList.length; i++){
        		var html = '<span>'+firstNavList[i].title+'</span><span>'+firstNavList[i].enTitle+'</span>';
        		$("#first_"+(i+1)).html(html);
        		for(var j=0; j<secondNavList.length; j++){
        			if(secondNavList[j].firstPlateId == firstNavList[i].firstPlateId){
        				var html1 = '<span>'+secondNavList[j].title+'</span><span>'+secondNavList[j].enTitle+'</span>';
                		$("#first_"+(i+1)+"_"+(j+1)).html(html1);
        			}
            	}
        	}
        	
        },   
	});
}


/**
 * 合作预约的标题
 */
function getCooperationTitle(){
	$.ajax({  
        url:contentPath+"/pc/aboutUs/getCooperationTitle.do",  
        type:"POST",  
        data:{formTitleId:2},
        success:function(data){
        	data=eval("("+data+")"); 
        	var formTitle=data.formTitle;
        	$("#cooperationId").text(formTitle.title);
        },   
	});
}

/**
 * 合作预约 表单
 */
function cooperationBtn(){
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
	        	"formTitleId":2,
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

/**
 * 添加也叫
 */
function getFoot(){
	$.ajax({  
        url:contentPath+"/pc/index/getFoot.do",  
        type:"POST",  
        data:{
        },
        success:function(data){
        	data=eval("("+data+")"); 
        	var footList=data.footList;
			if(footList.length > 0){
				var foot = footList[0];
				$("#introa1").text(foot.introa1);
				$("#introa2").text(foot.introa2);
				$("#picurl1").attr("src",foot.picurl1);
				$("#picurl2").attr("src",foot.picurl2);
				$("#copyright").text(foot.copyright);
			}
        },   
	});
}



