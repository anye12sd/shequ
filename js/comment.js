/**
 * Created by 55454 on 2017/4/18.
 */
$(function () {
        Reply();
        ReplyToReply();
});

// 回复楼主
function Reply(){
    var reply = $(".reply");
    reply.each(function (i, dom) {
        dom.addEventListener("click",function(){
            $(".shadow").css("display","block");
            $(".bottom-button").css("display","block");
            $(".reply-button").on("click",function(){
                $(".reply-input").css("display","block").focus();
                $(".reply-input").keydown(function (event) {
                    event.preventDefault();
                    if (event.which === 13) {
                        // 提交表单
                        alert(1)
                    }
                });
                // $(".reply-input").focus();
                $(".shadow").css("display","none");
                $(".bottom-button").css("display","none");
                var text = $(".reply-name").eq(i).text();//获取楼主的名字
                var innerHtml = "<div class='reply-to-reply'>" +
                    "<span class='reply-to-reply-name'>" + "<span>" + "Allen"+"</span>" + "<span>" + "&nbsp;回复&nbsp;" + "</span>"+"<span>"+text+"</span>"+"</span>"+
                    "<span class='reply-to-reply-time'>"+"8小时前"+"</span>"+
                    "<p>"+"简介你mmp1"+"</p>"+
                    "</div>";
                $(".reply").eq(i).append(innerHtml);//向reply元素里插入
                // window.location.reload();
            });
            $(".cancel-button").on("click",function(){
                $(".shadow").css("display","none");
                $(".bottom-button").css("display","none");
            })
        },false)
    });
}

// 楼中回复
function ReplyToReply(){
    var replyToReply = $(".reply-to-reply");
    var length = replyToReply.length;
    replyToReply.each(function (i, dom) {
        dom.addEventListener("click",function(e){
            $(".shadow").css("display","block");
            $(".bottom-button").css("display","block");
            e.stopPropagation();//防止冒泡
            var text = $(".user-name").eq(i).text();// 获取层主名字
            var innerHtml = "<div class='reply-to-reply'>" +
                "<span class='reply-to-reply-name'>" + "<span>" + "Allen"+"</span>" + "<span>" + "&nbsp;回复&nbsp;" + "</span>"+"<span class='user-name'>"+text+"</span>"+"</span>"+
                "<span class='reply-to-reply-time'>"+"8小时前"+"</span>"+
                "<p>"+"什么什么东西啊"+"</p>"+
                "</div>";
            $(".reply-to-reply").eq(length-1).after(innerHtml);//向元素后插入
            window.location.reload();
        },false)
    });
}
