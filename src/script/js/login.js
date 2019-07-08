!function($){
    //登录页面实现tab切换
      $('.normal').on('click',function(){
          $('.login_input').show();
          $('.tab_on').css({
            color:'#fe617a',
            borderBottom: '2px solid #ff4066'
        });
          $('.login_password').hide();
          $('.eb_mod').css({
            color:'#3C3C3C',
            borderBottom:  '1px solid #ccc'
        });
      });
      $('.nopassword').on('click',function(){
        $('.login_password').show();
        $('.eb_mod').css({
            color:'#fe617a',
            borderBottom: '2px solid #ff4066'
        });
        $('.login_input').hide();
        $('.tab_on').css({
            color:'#3C3C3C',
            borderBottom:  '1px solid #ccc'
        });
    })
}(jQuery);