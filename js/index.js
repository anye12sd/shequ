/**
 * Created by 55454 on 2017/4/18.
 */

$(function(){
    window.location.href="./view/comment.html";

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 1000,
        pagination: '.swiper-pagination'
    });

    // 加载超级链接
    $(".hot-content1-a").attr("href","./view/hot.html");
    $(".hot-content2-a").attr("href","./view/hot.html");
    $(".activity").attr("href","./view/hot.html");
    $(".all-text1").attr("href","./view/hot.html");
    $(".all-text2").attr("href","./view/hot.html");
    $(".all-text3").attr("href","./view/hot.html");

    $(".href-index").on("click",function(){
        window.location.href="#";
    });
    $(".href-msg").on("click",function(){
        window.location.href="./view/message_page.html";
    });
    $(".href-me").on("click",function(){
        window.location.href="./view/my_home.html";
    });
    $(".write").on("click",function(){
        window.location.href="./view/write.html"
    })
});