
$(function() {
    setTimeout(function(){
        //  底部点击微信弹出二维码弹窗
        wechatPop();
        //  顶部搜索框出现动画
        searchPop();
        //  页面进来之后渐变动画
        getInPage();
        //  单选项样式
        radioStyle();
    },300);
});

//  页面进来之后动画
function getInPage() {
    $("body").removeClass("body-hide");
}

//  顶部搜索框出现动画
function searchPop() {
    $("#searchPopBtn").click(function() {
       $(".head-logo-contain").addClass("hide");
       $(".search-contain").addClass("show");
    });
    $("#searchCancelBtn").click(function() {
        $(".head-logo-contain").removeClass("hide");
        $(".search-contain").removeClass("show");
    });
}

//  底部点击微信弹出二维码弹窗
function wechatPop() {
    $("#QRCodeBtn").click(function () {
       $("#blackMaskCon").addClass("show");
       $("#QRCodeCon").addClass("show");
    });
    $("#blackMaskCon").click(function () {
        $("#blackMaskCon").removeClass("show");
        $("#QRCodeCon").removeClass("show");
    })
}

//  底部二维码swiper切换
function swiper_QRCode() {
    var QRCodeSwiper = new Swiper('.QR-code-contain', {
        slidesPerView: 1,
        observer:true,
        pagination: '.QRCode-swiper-pagination',
    });
}

//  单选项样式
function radioStyle() {
    $("form").delegate(
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

