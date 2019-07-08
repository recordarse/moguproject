;
! function () {
    //渲染


    function goodslist(id, count) {
        $.ajax({
            url: 'http://localhost/moguproject/php/piclist.php', //获取所有的接口数据
            dataType: 'json'
        }).done(function (data) {
            //console.log(data);
            $.each(data, function (index, value) {
                if (id == value.picid) {
                    //$('.cart_mitem').eq(0).empty();
                    var $clonebox = $('.cart_mitem:hidden').clone(true, true);
                    $clonebox.find('.desc').find('img').attr('src', value.url);
                    $clonebox.find('.desc').find('img').attr('sid', value.picid);
                    $clonebox.find('.desc').find('.cart_hoverline').html(value.title);
                    $clonebox.find('.price').find('.cart_data_sprice').html(value.price);
                    $clonebox.find('.num').find('.cart_num_input').val(count);
                    //计算每个商品的价格。
                    // console.log($clonebox.find('.total').find('p'));
                    // console.log(value.price*count);
                    $clonebox.find('.total').find('p').text((value.price * count).toFixed(2));
                    $clonebox.css('display','block');
                    $('.normalShopTag').append($clonebox);
                    //priceall(); //计算总价
                }
            });
        })
    }

    function getcookie(key) {
        let arr = decodeURI(document.cookie).split('; ');
        for (let i = 0; i < arr.length; i++) {
            let newarr = arr[i].split('=');
            if (newarr[0] === key) {
                return newarr[1];
            }
        }
    }
    if (getcookie('cookiesid') && getcookie('cookienum')) {
        var s = getcookie('cookiesid').split(','); //数组sid
        var n = getcookie('cookienum').split(','); //数组num
        $.each(s, function (i, value) {
            goodslist(s[i], n[i]);
            // console.log(n[i]);
        });
    }
    kong();

    function kong() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            $('.cart_empty').hide(); //cookie存在，购物车有商品，隐藏盒子。
            $('#cartPage').show();
        } else {
            $('.cart_empty').show();
        }
    }
//    console.log ($('.cart_mitem:visible').find('.total').find('p').val());
//    console.log( $('.cart_mitem:visible').find('.cart_num').find('input').html());
    //计算总价
    //   function priceall() {
    //      var $sum = 0;
    //      var $count = 0;
    //      $('.cart_mitem:visible').each(function (index, element) {
    //            //console.log($('.cart_mitem:visible'));

    //          if ($(element).find('ul .vm input').prop('checked')) {
    //               //console.log(1);
    //               $sum += parseInt($(element).find('div').find('.total').find('p').val());
    //               $count += parseFloat($(element).find('div').find('.cart_num').find('input').html());
    //          }
    //       });       
    //       $('.cart_paybar_info').find('span').html($count);
    //      $('.cart_deep_red').html('￥' + $sum.toFixed(2));
    //  }


}();