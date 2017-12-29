
$(document).ready(function() {
	activeNav();
});


function goSearch(){
	var searchInput = $("#searchInput").val();
	
	window.location.href = contentPath+"/phone/searchList/view.do?keyword="+searchInput; 
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

//  移动端导航添加active的类
function activeNav() {
    var a1 = $(".common-nav-container");
    a1.find("li").removeClass("active");
    var thisUrl = window.location.href;
    var ifTk = false,ifAb = false,ifDe = false,ifIn = false;
    var navAboutUs = ['aboutUsP','honorList'],
        navDesignPro = [
        'caseApartment','caseDetail','casePublic','caseSelfDesign','caseVilla','design',
        'noneRoomDetail','qiuPlaneDetail','designDetails','searchList'
    ],
        navInteract = [
        'applyForm','askQuestionForm','interact','jobs','questionDetail','questionList'
    ],
        navTKNow = [
        'designShareDetail','meetingDetail','newsDetail','newsList','societyDetail','tkNow'
    ];
    //  先判断当前链接有没有数组里的项，有的话，就判断该数组为当前链接所属分类。
    for(var i = 0; i < navTKNow.length; i++) {
        if(thisUrl.indexOf(navTKNow[i]) >= 0){
            ifTk = true;
        }
    }
    for(var j = 0; j < navAboutUs.length; j++) {
        if(thisUrl.indexOf(navAboutUs[j]) >= 0){
            ifAb = true;
        }
    }
    for(var k = 0; k < navInteract.length; k++) {
        if(thisUrl.indexOf(navInteract[k]) >= 0){
            ifIn = true;
        }
    }
    for(var l = 0; l < navDesignPro.length; l++) {
        if(thisUrl.indexOf(navDesignPro[l]) >= 0){
            ifDe = true;
        }
    }
    //  根据不同的数组类型给不同的导航加上高亮样式
    if(ifIn === true) {
        $(".nav-connect").addClass("active");
    }
    else if(ifAb === true) {
        $(".nav-us").addClass("active");
    }
    else if(ifTk === true) {
        $(".nav-tknow").addClass("active");
    }
    else if(ifDe === true) {
        $(".nav-design").addClass("active");
    }
}