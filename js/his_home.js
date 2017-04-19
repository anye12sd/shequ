/**
 * Created by 55454 on 2017/4/18.
 */
$(function(){
    $.ajax({
        type: "post",
        url: "",
        data:{},
        dataType: 'json',
        success: function (data) {
            if (data.code==200) {
                $(".header-sculpture").attr("src","");
                var jsonTip = $(".jsonTip");
                var strHtml = "";//存储数据的变量
                jsonTip.empty();//清空内容
                var username = "Allen",
                    content = "",
                    title = "",
                    userID = 1111111,
                urlHref ="./his_home.html?"+ userID,
                    imgHref = "../img/201505181012986.jpg";
                // console.log(currentPage,totalPage)
                strHtml += "<a href="+urlHref+">" + "<div class='content'>" + "<ul>"+"<li class='content-img'>";
                strHtml += "<img src="+imgHref+" />" + "</li>";
                strHtml += "<li class='content-span'>" + "<h4 class='content-span-title'>" + title +"</h4>" +"<p class='content-span-content'>"+ content +"</p>"+"</li>";
                strHtml += "<li class='content-button'>"+"</li>"+"</ul>"+"</div>" + "</a>";
            }
            jsonTip.html(strHtml);//显示处理后的数据
        }
    });
});