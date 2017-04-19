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
                var jsonTip = $(".jsonTip");
                var strHtml = "";//存储数据的变量
                jsonTip.empty();//清空内容
                var username = "Allen",
                    userID = 1111111,
                urlHref ="./his_home.html?"+ userID,
                    imgHref = "../img/201505181012986.jpg";
                // console.log(currentPage,totalPage)
                    strHtml += "<a href="+urlHref+">" + "<div class='list'>" + "<div class='list-img'>";
                    strHtml += "<img src="+imgHref+" />" + "</div>";
                    strHtml += "<div class='list-name'>" + "<span>" + username +"</span>"+"</div>";
                    strHtml += "</div>" + "</a>";
                }
                jsonTip.html(strHtml);//显示处理后的数据
        }
    });
});