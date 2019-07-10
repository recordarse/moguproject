 window.onload=function(){
 
    //登录页面实现tab切换
    $('.normal').on('click', function () {
      $('.login_input').show();
      $('.tab_on').css({
        color: '#fe617a',
        borderBottom: '2px solid #ff4066'
      });
      $('.login_password').hide();
      $('.eb_mod').css({
        color: '#3C3C3C',
        borderBottom: '1px solid #ccc'
      });
    });
    $('.nopassword').on('click', function () {
      $('.login_password').show();
      $('.eb_mod').css({
        color: '#fe617a',
        borderBottom: '2px solid #ff4066'
      });
      $('.login_input').hide();
      $('.tab_on').css({
        color: '#3C3C3C',
        borderBottom: '1px solid #ccc'
      });
    })
 }

 

! function ($) {
  //console.log($('#submit:visible'));
  $('#submit').on('click', function () {
    //var $user=$('#username').val();
        $.ajax({
          type:'get',
           async:true,
          url:'http://10.31.158.34/moguproject/php/login.php',
          data:{
            name:$('#username').val(),
            pass:$('#password').val(),
            tel:$('#tel').val(),
          }
        }).done(function(d){    
            if(!d){
                alert('用户名密码或手机号错误');
            }else{
                location.href='mogu.html';
                // //登录成功，采用本地存储存储用户名。
     
                // $.cookie('username','zhansan',{expires:7});
              //获取
              //console.log($.cookie('username'));
          
              //删除
              //$.cookie('username', '', { expires: -1 }); // 删除    
                $.cookie('successname',$('#username').val(),{expires:7});
                // localStorage.setItem('successname',$('#username').val());
                //setcookie('successname',$('#username').val(),7);
                // Cookies.set('successname', $('#username').val(), { expires: 7 });
            }
        });
      
  })
}(jQuery);