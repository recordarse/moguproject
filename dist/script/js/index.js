"use strict";jQuery,$(".J-header-about-us").hover(function(){$(".header-about-us-detail").css({display:"block"})},function(){$(".header-about-us-detail").css({display:"none"})}),$(".J_header_category").hover(function(){$(".header-content-category").css({display:"block"})},function(){$(".header-content-category").css({display:"none"})}),$(" .J_show_app_code ").hover(function(){$(".download-app-code").css({display:"block"})},function(){$(".download-app-code").css({display:"none"})}),$(" .nav_list_row").hover(function(){$(".nav_more_content ").css({display:"block"}),$(this).find(".nav_wrap").css({borderLeft:"2px solid #FF4466"}).siblings().css({borderLeft:"2px solid transparent"})},function(){$(".nav_more_content ").css({display:"none"}),$(this).find(".nav_wrap").css({borderLeft:"2px solid transparent"})}),$(window).on("scroll",function(){600<=$(window).scrollTop()?($("#J_sticky_container").addClass(" lets-rock"),$("#J_sticky_container").css({display:"block"})):($("#J_sticky_container").removeClass(" lets-rock"),$("#J_sticky_container").css({display:"none"}))}),setInterval(function(){var n=(new Date).toString().split(" ")[4].split(":");$(".brandCountdown_hour").html(n[0]),$(".brandCountdown_minute").html(n[1]),$(".brandCountdown_second").html(n[2])},1e3),$(window).on("scroll",function(){$(window).scrollTop()>=$(window).height()?$(".mgj-back2top").css({display:"block"}):$(".mgj-back2top").css({display:"none"})}),$(".mgj-back2top").on("click",function(){$("body,html").animate({scrollTop:0})}),$.ajax({url:"http://10.31.158.34/moguproject/php/piclist.php",dataType:"json",async:"true"}).done(function(n){var s="<ul>";$.each(n,function(n,t){s+='\n\t\t\t   <li>\n\t\t\t\t   <a href="details.html?sid='+t.picid+'" target="_blank">\n\t\t\t\t\t   <img _src="'+t.url+'" style="width:200px;height:290px;" />\n\t\t\t\t\t   <h4 style="font-size:8px;width:200px;height:20px;overflow:hidden;font-style:normal">'+t.title+'</h4>\n\t\t\t\t\t   <p style="height:20px; line-height:10px;font-style:bold">￥'+t.price+"</p>\n\t\t\t\t   </a>\n\t\t\t   </li>\n\t\t   "}),s+="</ul>",$(".goodslist").html(s)}),$(".goodslist").on("mouseover","li",function(){$(this).css({border:"1px solid #FF4466",transition:"all .5s"}).siblings().css({border:"1px solid #ccc"})}),$(".goodslist").on("mouseout","li",function(){$(this).css({border:"1px solid #ccc",transition:"all .4s"})}),$(window).on("scroll",function(){if($(".goodslist").offset().top<$(window).scrollTop()+$(window).height())for(var n=0;n<20;n++)$(".goodslist").find("img").eq(n).attr("src",$(".goodslist").find("img").eq(n).attr("_src"))}),function(){var n=["https://s10.mogucdn.com/mlcdn/c45406/180516_4cki65bidl5hbi40jg9529j2dkfb9_690x1665.jpg_750x9999.v1c7E.81.webp","https://s10.mogucdn.com/mlcdn/c45406/180516_2dj56ekc3gkb16566gdahb1d3i996_690x1665.jpg_750x9999.v1c7E.81.webp"];$("#shoesbanner").attr("src");var t=0;setInterval(function(){n.length-1<++t&&(t=0),$("#shoesbanner").attr("src",n[t])},4e3)}(jQuery),function(){var n=["https://s10.mogucdn.com/mlcdn/c45406/190507_0dkf3lb36d9k11h9ki2i6g63jhjji_690x1872.jpg_750x9999.v1c7E.81.webp","https://s10.mogucdn.com/mlcdn/c45406/180516_3i1dg5282hd9jgg99c3ajhl25kijb_690x1665.jpg_750x9999.v1c7E.81.webp"];$("#leftBannerImg").attr("src");var t=0;setInterval(function(){n.length-1<++t&&(t=0),$("#leftBannerImg").attr("src",n[t])},4e3)}(jQuery),function(){var t=null;function n(){var n=0;t=setInterval(function(){n++,$("#mslide-dot").find("a").eq(n).addClass("dot_show").siblings().removeClass("dot_show"),$("#mslide-content").find(".mslide_banner").eq(n).css({display:"block",left:0,zIndex:1}).siblings().css({display:"none",left:"-630px",zIndex:0}),4<n&&(n=-1)},4e3)}n(),$("#mslide-content").hover(function(){clearInterval(t)},function(){n()}),$("#mslide-dot").find("a").on("mouseover",function(){var n=$(this).index();$(this).addClass("dot_show").siblings().removeClass("dot_show"),$("#mslide-content").find(".mslide_banner").eq(n).css({display:"block",left:0,zIndex:1}).siblings().css({display:"none",left:"-630px",zIndex:0})})}(jQuery),jQuery,$("#top_nav_text").on("blur",function(){$(".top-nav-tip").css({display:"none"})}),$("#top_nav_text").on("input",function(){var n=$("#top_nav_text").val();$.ajax({url:"https://suggest.taobao.com/sug?code=utf-8&q="+n+"&_ksTS=1561171726361_422&&k=1&area=c2c&bucketid=7",data:{wd:n},dataType:"jsonp",success:function(n){for(var t=n.result,s="",o=0;o<t.length;o++)s+='<p style="width:492px;padding-left:20px;font-size:12px;height:20px;margin-bottom:10px">'+t[o][0]+"</p>";$(".word-box").html(s),$(".top-nav-tip").css({display:"block",zIndex:1}),$(".word-box").find("p").hover(function(){$(this).css({backgroundColor:"#ff4466"})},function(){$(this).css({backgroundColor:"#fff"})})}})}),function(t){var s=null;function n(){s=setInterval(function(){var n=t(".lunbos").children(":visible").index();8<=n&&(n=0),n++,t(".lunbos").children().eq(n).css({left:0,opacity:1,transition:"all 0.6s",display:"block"}).siblings().css({left:"-960px",opacity:0,display:"none"})},3e3)}t(".mslide_prev_btn").on("click",function(){clearInterval(s);var n=t(".lunbos").children(":visible").index();n--,t(".lunbos").children().eq(n).css({left:0,opacity:1,transition:"all 0.6s",display:"block"}).siblings().css({left:"-960px",opacity:0,display:"none"}),n<0&&(n=t(".lunbos").children().length-1)}),t(".mslide_next_btn").on("click",function(){clearInterval(s);var n=t(".lunbos").children(":visible").index();8<=n&&(n=0),n++,t(".lunbos").children().eq(n).css({left:0,opacity:1,transition:"all 0.6s",display:"block"}).siblings().css({left:"-960px",opacity:0,display:"none"})}),t(".Banner").on("mouseover",function(){clearInterval(s)}),t(".Banner").on("mouseout",function(){n()}),n()}(jQuery),function(t){var s=null;function n(){s=setInterval(function(){var n=t(".banners").children(":visible").index();4<=n&&(n=0),n++,t(".banners").children().eq(n).css({left:0,opacity:1,transition:"all 0.6s",display:"block"}).siblings().css({left:"-960px",opacity:0,display:"none"})},3e3)}t(".mslide_prev_btn").on("click",function(){clearInterval(s);var n=t(".banners").children(":visible").index();n<0&&(n=t(".banners").children().length-1),n--,t(".banners").children().eq(n).css({left:0,opacity:1,transition:"all 0.6s",display:"block"}).siblings().css({left:"-960px",opacity:0,display:"none"})}),t(".mslide_next_btn").on("click",function(){clearInterval(s);var n=t(".banners").children(":visible").index();4<=n&&(n=0),n++,t(".banners").children().eq(n).css({left:0,opacity:1,transition:"all 0.6s",display:"block"}).siblings().css({left:"-960px",opacity:0,display:"none"})}),t(".Banner").on("mouseover",function(){clearInterval(s)}),t(".Banner").on("mouseout",function(){n()}),n()}(jQuery),$.cookie("successname")&&$("#success").html($.cookie("successname")+"登录成功"),$("#exit").on("click",function(){confirm("你确定要退出吗？")&&($.cookie("successname","",{expires:-1}),console.log($.cookie("cookienum")),$.cookie("cookienum","",{expires:-1}),$.cookie("cookiesid","",{expires:-1}),$("#success").html("登录"))});