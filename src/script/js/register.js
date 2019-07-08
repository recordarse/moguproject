;
! function ($) {
    //表单验证 正则
    //用户名
    $('#username').focus(function () {
        if ($(this).val() == '') {
            $('#username-p').find('span').html('请输入用户名，不能超过6个汉字或12个字符').css({
                color: 'red',
            });
        }
    });
    //uesrname 失去焦点 正则判断
    $('#username').blur(function () {
        if ($(this).val() != '') {
            //console.log($(this).val());
            var $reg = /^[\u4e00-\u9fa5]+|[a-zA-Z]+$/;
            if ($reg.test($(this).val())) { //匹配成功
                var $len = $(this).val().replace(/[\u4e00-\u9fa5]/g, 'bb').length;
                if ($len <= 12) {
                    $('#username-p').find('span').html('√').css({
                        color: 'green',
                    });
                } else {
                    $('#username-p').find('span').html('请重新输入用户名').css({
                        color: 'red',
                    });
                }
            }
        }
    });
    //手机号
    $('#tel').focus(function () {
        if ($(this).val() == '') {
            $('#tel-p').find('span').html('请输入手机号').css({
                color: 'red',
            });
        }
    });
    //Tel 失去焦点 正则判断
    $('#tel').blur(function () {
        if ($(this).val() != '') {
            var $reg = /^1[3|5|7|8]\d{9}$/;
            if ($reg.test($(this).val())) {
                $('#tel-p').find('span').html('√').css('color', 'green');
            } else {
                $('#tel-p').find('span').html('请输入正确的手机号').css('color', 'red');
            }
        }
    });
    //密码
    $('#password').focus(function(){
        if ($(this).val() == '') {
            $('#password-p').find('span').html('请输入密码').css({
                color: 'red',
            });
        }
    });
    //失去焦点 判断密码强度
    $('#password').blur(function(){
        if ($(this).val() == '') {
            $('#password-p').find('span').html('请输入密码').css({
                color: 'red',
            });
        }
        //判断密码强度
        // $('#password').oninput=function(){
        //     console.log(1);
        // }
    })
}(jQuery);