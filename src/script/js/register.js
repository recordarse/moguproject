;
! function ($) {
    //表单验证 正则
    //用户名
    var $userflag = true;
    var $telflag = true;
    var $passflag = true;
    var $checkflag = true;
    $('#username').focus(function () {
        if ($(this).val() == '') {
            $('#username-p').find('span').html('请输入用户名，不能超过6个汉字或12个字符').css({
                color: 'red',
            });
            $userflag = false;
        }
    });
    //uesrname 失去焦点 正则判断
    $('#username').blur(function () {
        //console.log($(this).val().length);
        if ($(this).val() != '') {
            //console.log($(this).val().length);
            var $reg = /^[\u4e00-\u9fa5]+|[a-zA-Z]+$/;
            if ($reg.test($(this).val())) { //匹配成功
                var $len = $(this).val().replace(/[\u4e00-\u9fa5]/g, 'bb').length;
                if ($len <= 12) {
                    $.ajax({
                        type: 'post',
                        //async: true,
                        url: 'http://10.31.158.34/moguproject/php/reg.php',
                        data: {
                            name: $('#username').val(),
                        }
                    }).done(function (d) {
                        if (!d) {
                            $('#username-p').find('span').html('√').css({
                                color: 'green',
                            });
                            $userflag = true;
                        } else {
                            $('#username-p').find('span').html('该用户名已存在').css({
                                color: 'red',
                            });
                            $userflag = false;
                        }
                    });
                } else {
                    $('#username-p').find('span').html('请重新输入用户名').css({
                        color: 'red',
                    });
                    $userflag = false;
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
            $telflag = false;
        }
    });
    //Tel 失去焦点 正则判断
    $('#tel').blur(function () {
        if ($(this).val() != '') {
            var $reg = /^1[3|5|7|8]\d{9}$/;
            if ($reg.test($(this).val())) {
                $('#tel-p').find('span').html('√').css('color', 'green');
                $telflag = true;
            } else {
                $('#tel-p').find('span').html('请输入正确的手机号').css('color', 'red');
                $telflag = false;
            }
        }
    });
    //密码
    $('#password').focus(function () {
        if ($(this).val() == '') {
            $('#password-p').find('span').html('请输入密码,密码长度为6-12位').css({
                color: 'red',
            });
            $passflag = false;
        }
    });
    //失去焦点 判断密码强度
    $('#password').blur(function () {
        if ($(this).val() == '') {
            $('#password-p').find('span').html('请输入密码').css({
                color: 'red',
            });
            $passflag = false;
        }
        //判断密码强度
        $('#password').on('input', function () {
            //console.log($('#password').val().length);
            if ($('#password').val().length >= 6 && $('#password').val().length <= 12) {
                var $count = 0;
                var $regnum = /\d+/;
                var $reglower = /[a-z]+/;
                var $regupper = /[A-Z]+/;
                var $other = /[\W\_]+/;
                if ($regnum.test($('#password').val())) {
                    $count++;
                }
                if ($reglower.test($('#password').val())) {
                    $count++;
                }
                if ($regupper.test($('#password').val())) {
                    $count++;
                }
                if ($other.test($('#password').val())) {
                    $count++;
                }
                switch ($count) {
                    case 1:
                        $('#password-p').find('span').html('弱 请重新输入').css({
                            color: 'red',
                        });
                        $passflag = false;
                        break;
                    case 2:
                    case 3:
                        $('#password-p').find('span').html('中').css({
                            color: 'yellow',
                        });
                        $passflag = true;
                        break;
                    case 4:
                        $('#password-p').find('span').html('强').css({
                            color: 'green',
                        });
                        $passflag = true;
                        break;
                }
            } else {
                $('#password-p').find('span').html('密码长度有误').css({
                    color: 'red',
                });
                $passflag = false;
            }
        })
    })
    //确认密码 
    $('#checkpass').focus(function () {
        if ($(this).val() == '') {
            $('#checkpass-p').find('span').html('请确认密码').css({
                color: 'red',
            });
            $checkflag = false;
        }
    });
    $('#checkpass').blur(function () {
        if ($('#checkpass').val() == $('#password').val()) {
            $('#checkpass-p').find('span').html('密码正确').css({
                color: 'green',
            });
            $checkflag = true;
        } else {
            $('#checkpass-p').find('span').html('请重新输入').css({
                color: 'red',
            });
            $checkflag = false;
        }
    })
    //input submit 提交
    // $('form').submit(function () {
    //     if ($('#username').val() == '') {
    //         $('#username-p').find('span').html('用户名不能为空').css({
    //             color: 'red',
    //         });
    //         $userflag = false;
    //     }
    //     if ($('#tel').val() == '') {
    //         $('#tel-p').find('span').html('请输入手机号').css({
    //             color: 'red',
    //         });
    //         $telflag = false;
    //     }
    //     if ($('#password').val() == '') {
    //         $('#password-p').find('span').html('请输入密码,密码长度为6-12位').css({
    //             color: 'red',
    //         });
    //         $passflag = false;
    //     }
    //     if ($("#checkpass").val() == '') {
    //         $('#checkpass-p').find('span').html('请确认密码').css({
    //             color: 'red',
    //         });
    //         $checkflag = false;
    //     }

    //     if (!$checkflag || !$passflag || !$userflag || !$telflag) {
    //         return false;
    //     }
    // })

    //用户名 手机号 密码正确的写入数据库 判断用户名是否存在




    $('.pass-button-submit').on('click', function () {
        if ($('#username').val() == '') {
            $('#username-p').find('span').html('用户名不能为空').css({
                color: 'red',
            });
            $userflag = false;
        }
        if ($('#tel').val() == '') {
            $('#tel-p').find('span').html('请输入手机号').css({
                color: 'red',
            });
            $telflag = false;
        }
        if ($('#password').val() == '') {
            $('#password-p').find('span').html('请输入密码,密码长度为6-12位').css({
                color: 'red',
            });
            $passflag = false;
        }
        if ($("#checkpass").val() == '') {
            $('#checkpass-p').find('span').html('请确认密码').css({
                color: 'red',
            });
            $checkflag = false;
        }

        if (!$checkflag || !$passflag || !$userflag || !$telflag) {
            return false;
        }
    })


}(jQuery);