/**
 * Created by 55454 on 2017/4/18.
 */
    // 获取验证码
var stop;
var timeLeft;
$(function(){
    function a(){
        timeLeft --;
        stop = setTimeout(a,1000);
        // console.log(timeLeft);
        if(timeLeft <= 0){
            $(".get").removeAttr("disabled");
            $(".get").text("获取验证码");
            $(".get").css("background","#ef");
            clearTimeout(stop);
        }else{
            $(".get").attr("disabled","true");
            $(".get").css("background","#ef7c52");
            $(".get").text(timeLeft + "s后重新获取");
        }
    }
    $(".get").on("click",function(){
        timeLeft = 5;
        a();
    });

//提交表单,先本地验证表单再进行ajax提交
    $('.form_button').on('click',function(){
        // console.log($("#change_password").serializeArray());
        var telephone_num = $(".input").eq(0).val(),
            password_num = $(".input").eq(2).val(),
            // 匹配11位数字的手机号码
            reg_num = /^1[34578]\d{9}$/,
            // 匹配8-16位带数字和字母的密码
            reg_password = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,12}$/;

        // 判断帐号是否符合要求,再判断密码是否相同，再进行ajax传值
        if(reg_num.test(telephone_num)){

            if($(".input").eq(2).val() === $(".input").eq(3).val()){

                if(reg_password.test(password_num)){
                    // 前后密码相同执行ajax
                    $.ajax({
                        type: "post",
                        url: 'person/password/retrieve',
                        data:$("#change_password").serializeArray(),
                        dataType: 'json',
                        success: function (data) {
                            if (data.code==200) {
                                errHandler();
                                $(".alert_text").text("修改成功");
                                $(".alert_btn").on("click",function(){
                                    window.location.href = "my_list";
                                });
                            } else {
                                errHandler();
                                $(".alert_text").text(data.message);
                            }
                        }
                    });
                }else{
                    // 密码格式错误，清空input 提醒用户重新输入密码
                    $(".input").eq(2).val("");
                    $(".input").eq(3).val("");
                    errHandler();
                    $(".alert_text").text("密码格式错误，格式应为6-12位字符包含数字字母");                }
            }else{
                // 密码不相同，清空input 提醒用户重新输入密码
                $(".input").eq(2).val("");
                $(".input").eq(3).val("");
                errHandler();
                $(".alert_text").text("密码不相同，请重新输入");
            }
        }else{
            $(".input").eq(0).val("");
            errHandler();
            $(".alert_text").text("请输入正确的手机号码");
        }
    });

});

function errHandler(){
    $(".alert").css("display","block");
    $(".shadow").css("display","block");
    $(".alert_btn").on("click",function(){
        $(".alert").css("display","none");
        $(".shadow").css("display","none");
    })
}