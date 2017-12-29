
var contentPath = $("#contextPathA").attr("value");


function radioStyle() {
    $("#form_div").delegate(
        ".radio-label","click",function() {
            var thisLabel = $(this);
            var thisInput = thisLabel.children("input[type='radio']");
            var thisInputName = thisInput.prop("name");
            console.log(thisInputName);
            $("input[name='"+thisInputName+"']").parents(".radio-label").removeClass("checked");
            thisLabel.addClass("checked");
        }
    )
}

/**
 * 申请表单的标题
 */
function getApplyTitle(){
	$.ajax({  
        url:contentPath+"/pc/aboutUs/getCooperationTitle.do",  
        type:"POST",  
        data:{formTitleId:2},
        success:function(data){
        	data=eval("("+data+")"); 
        	var formTitle=data.formTitle;
        	$("#apply_id").text(formTitle.title);
        },   
	});
}

/**
 * 申请表单 表单
 */
function applyBtn(){
	var name = $("#name").val();
	var city = $("#city").val();
	var job = $("#job").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var company = $("#company").val();
	var message = $("#message").val();
	var type = 0;
	if($("#project").hasClass("checked")){
		type = 1;
	}
	if(null==name || ""==name){
		alert("请填写完整");
	}else if(null==city || ""==city){
		alert("请填写完整");
	}else if(null==job || ""==job){
		alert("请填写完整");
	}else if(null==phone || ""==phone){
		alert("请填写完整");
	}else if(null==email || ""==email){
		alert("请填写完整");
	}else if(null==company || ""==company){
		alert("请填写完整");
	}else{
		$.ajax({  
	        url:contentPath+"/pc/aboutUs/applyForm.do",  
	        type:"POST",  
	        data:{
	        	"formTitleId":2,
	        	"name":name,
	        	"city":city,
	        	"job":job,
	        	"phone":phone,
	        	"email":email,
	        	"type":type,
	        	"company":company,
	        	"message":message
	        },
	        success:function(data){
	        	data=eval("("+data+")"); 
	        	var Msg=data.Msg;
				if(data.Msg == "Ok"){
					window.location.reload();
					alert("提交成功!");
				}
	        },   
		});
	}
}