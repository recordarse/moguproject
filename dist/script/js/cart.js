"use strict";!function(){function i(i){for(var t=decodeURI(document.cookie).split("; "),c=0;c<t.length;c++){var e=t[c].split("=");if(e[0]===i)return e[1]}}if(i("cookiesid")&&i("cookienum")){var c=i("cookiesid").split(","),e=i("cookienum").split(",");$.each(c,function(i,t){!function(e,n){$.ajax({url:"http://10.31.158.34/moguproject/php/piclist.php",dataType:"json"}).done(function(i){$.each(i,function(i,t){if(e==t.picid){var c=$(".cart_mitem:hidden").clone(!0,!0);c.find(".desc").find("img").attr("src",t.url),c.find(".desc").find("img").attr("sid",t.picid),c.find(".desc").find(".cart_hoverline").html(t.title),c.find(".vm").find(".cart_thcheck").attr("checked","checked"),$("#s_all_f").attr("checked","checked"),c.find(".price").find(".cart_data_sprice").html(t.price),c.find(".num").find(".cart_num_input").val(n),c.find(".total").find("p").text((t.price*n).toFixed(2)),c.css("display","block"),$(".normalShopTag").append(c)}}),a()})}(c[i],e[i])})}function t(){i("cookiesid")&&i("cookienum")?($(".cart_empty").hide(),$("#cartPage").show()):$(".cart_empty").show()}t(),$("#s_all_h").on("change",function(){$(".cart_mitem:visible").find(":checkbox").prop("checked",$(this).prop("checked")),$("#s_all_h").prop("checked",$(this).prop("checked"))});var n=$(".cart_mitem:visible").find(":checkbox");function a(){var i=0;$(".normalShopTag").find(".cart_mitem:visible").each(function(){$(this).find(".cart_thcheck").is(":checked")&&(i+=parseFloat($(this).find(".item_sum").html()),console.log($(this).find(".item_sum").html()))}),$(".goodsSum").html("￥"+i)}$(".cart_mitem").on("change",n,function(){$(".cart_mitem:visible").find("input:checkbox").length==$(".cart_mitem:visible").find("input:checked").length?$("#s_all_h").prop("checked",!0):$("#s_all_h").prop("checked",!1)}),a(),$("#s_all_f").on("change",function(){$(".cart_mitem:visible").find(":checkbox").prop("checked",$(this).prop("checked")),$("#s_all_f").prop("checked",$(this).prop("checked")),a()});n=$(".cart_mitem:visible").find(":checkbox");function r(i,t,c){var e=new Date;e.setDate(e.getDate()+c),document.cookie=i+"="+encodeURI(t)+";expires="+e}$(".cart_mitem").on("change",n,function(){$(".cart_mitem:visible").find("input:checkbox").length==$(".cart_mitem:visible").find("input:checked").length?$("#s_all_f").prop("checked",!0):$("#s_all_f").prop("checked",!1),a()}),$(".cart_num_add").on("click",function(){var i=$(this).parents(".cart_mitem").find(".cart_num input").val();99<=++i&&(i=99),$(this).parents(".cart_mitem").find(".cart_num input").val(i);var t=$(this).parents(".cart_mitem").find(".price").find(".cart_bold").html();$(this).parents(".cart_mitem").find(".total p").html((i*t).toFixed(2)),m($(this)),a()}),$(".cart_num_reduce").css("cursor","pointer"),$(".cart_num_reduce").on("click",function(){var i=$(this).parents(".cart_mitem").find(".cart_num input").val();--i<=1&&(i=1),$(this).parents(".cart_mitem").find(".cart_num input").val(i);var t=$(this).parents(".cart_mitem").find(".price").find(".cart_bold").html();$(this).parents(".cart_mitem").find(".total p").html((i*t).toFixed(2)),m($(this)),a()}),$(".cart_num input").on("input",function(){var i=parseInt($(this).val());/^\d+$/g.test(i)?99<=i?$(this).val(99):i<=0?$(this).val(1):$(this).val(i):$(this).val(1),m($(this)),a()});var o=[],s=[];function d(){i("cookiesid")&&i("cookienum")&&(o=i("cookiesid").split(","),s=i("cookienum").split(","))}function m(i){d();var t=i.parents(".cart_mitem").find("img").attr("sid");s[$.inArray(t,o)]=i.parents(".cart_mitem").find(".cart_num input").val(),r("cookienum",s.toString(),7)}function h(c,i){var e=-1;$.each(i,function(i,t){c==t&&(e=i)}),i.splice(e,1),s.splice(e,1),r("cookiesid",i.toString(),7),r("cookienum",s.toString(),7)}$(".cart_mitem").on("click",".edit a",function(i){d(),confirm("你确定要删除吗？")&&$(this).parents(".cart_mitem").remove(),console.log(1),h($(this).parents(".cart_mitem").find(".desc").find("img").attr("sid"),o)}),$(".cart_paybar_vmbox a:first").on("click",function(){d(),confirm("你确定要全部删除吗？")&&($(".cart_mitem:visible").each(function(){$(this).find("input:checkbox").is(":checked")&&($(this).remove(),h($(this).find(".desc").find("img").attr("sid"),o))}),t())})}();