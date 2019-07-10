;
! function () {
    //渲染
    function goodslist(id, count) {
        $.ajax({
            url: 'http://10.31.158.34/moguproject/php/piclist.php', //获取所有的接口数据
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
                    $clonebox.css('display', 'block');
                    $('.normalShopTag').append($clonebox);
                    //price(); //计算总价
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
    empty();

    function empty() {
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
    //   function price() {
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

    //全选按钮 
    //console.log($('#s_all_h'));
    $('#s_all_h').on('change', function () {
        //console.log($('.cart_mitem:visible'));
        $('.cart_mitem:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
        $('#s_all_h').prop('checked', $(this).prop('checked'));
        //price();//取消选项，重算总和。
    });
    //判断上方是否全选
    var $check = $('.cart_mitem:visible').find(':checkbox');
    $('.cart_mitem').on('change', $check, function () {
        if ($('.cart_mitem:visible').find('input:checkbox').length == $('.cart_mitem:visible').find('input:checked').length) {
            $('#s_all_h').prop('checked', true);
        } else {
            $('#s_all_h').prop('checked', false);
        }

    });
    //判断下方全选按钮 是否全选 计算总价和商品个数 
    $('#s_all_f').on('change', function () {
        $('.cart_mitem:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
        $('#s_all_f').prop('checked', $(this).prop('checked'));
    })
    //判断是否取消全选
    var $check = $('.cart_mitem:visible').find(':checkbox');
    $('.cart_mitem').on('change', $check, function () {
        if ($('.cart_mitem:visible').find('input:checkbox').length == $('.cart_mitem:visible').find('input:checked').length) {
            $('#s_all_f').prop('checked', true);
            //并将选中的商品数量和总价计算出来
            //price();
        } else {
            $('#s_all_f').prop('checked', false);
            // if($('.cart_mitem:visible').find('input:checkbox').prop('checked')){
            // }
        }
    });

    function addcookie(key, value, day) {
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
    }
    //可进行数量的改变++ 并存入cookie
    $('.cart_num_add').on('click', function () {
        var $num = $(this).parents('.cart_mitem').find('.cart_num input').val();
        $num++;
        if ($num >= 99) {
            $num = 99;
        }
        $(this).parents('.cart_mitem').find('.cart_num input').val($num);
        //$(this).parents('.cart_mitem').find('#cartPaybar').find('.cart_deep_red').html();
        //price();
        setcookie($(this));
    });
    //也可进行数量的改变-- 并存入cookie
    $('.cart_num_reduce').css('cursor','pointer');
    $('.cart_num_reduce').on('click', function () {
        var $num = $(this).parents('.cart_mitem').find('.cart_num input').val();
        $num--;
        if ($num<=1) {
            $num = 1;
        }
        $(this).parents('.cart_mitem').find('.cart_num input').val($num);
	    $(this).parents('.cart-mitem').find('.total').find('p').html(singleprice($(this)));//改变后的价格
        //price();
        setcookie($(this));
    });
    //直接输入改变数量
    $('.cart_num input').on('input', function() {
	    var $reg = /^\d+$/g; 
	    var $value = parseInt($(this).val());
	    if ($reg.test($value)) {//限定范围
	        if ($value >= 99) {
	            $(this).val(99);
	        } else if ($value <= 0) {
	            $(this).val(1);
	        } else {
	            $(this).val($value);
	        }
	    } else {
	        $(this).val(1);
	    }
	    $(this).parents('.cart-mitem').find('.total').find('p').html(singleprice($(this)));//改变后的价格
	    //price();
	    setcookie($(this));
    });
    function singleprice(obj) { 
	    var $sprice = parseFloat(obj.parents('.cart_mitem').find('.price').find('.cart_bold').html());//单价
	    var $goodsnum = parseInt(obj.parents('.cart_mitem').find('.cart_num input').val());//数量
	    return ($sprice * $goodsnum).toFixed(2);//结果
	}
    //将改变的数量重新添加到cookie
    var arrsid = [];
    var arrnum = [];
    //先取出当前的cookie值
    function cookietoarray() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            arrsid = getcookie('cookiesid').split(',');
            arrnum = getcookie('cookienum').split(','); //cookie商品的num
        }
    }
    function setcookie(obj) {
        cookietoarray();
        var $index = obj.parents('.cart_mitem').find('img').attr('sid'); //通过图片的sid对应cookie的arrsid
        arrnum[$.inArray($index, arrsid)] = obj.parents('.cart_mitem').find('.cart_num input').val();
        addcookie('cookienum', arrnum.toString(), 7);
    }
    function dellist(sid, arrsid) {
	    var $index = -1;
	    $.each(arrsid,function(index,value){
	    	if(sid==value){
	    		$index=index;
	    	}
	    });
	    arrsid.splice($index, 1);
	    arrnum.splice($index, 1);//删除数组对应的值
	    addcookie('cookiesid', arrsid.toString(), 7);
	    addcookie('cookienum', arrnum.toString(), 7);//添加cookie
	}
    //删除单个商品
    $('.cart_mitem').on('click', '.edit a', function(ev) {
		cookietoarray();
	    if(confirm('你确定要删除吗？')){
	     	$(this).parents('.cart_mitem').remove();//通过当前点击的元素找到整个一行列表，删除
        }
        console.log(1);
	    dellist($(this).parents('.cart_mitem').find('.desc').find('img').attr('sid'), arrsid);
	    //price();
    });
    //删除全部商品
    $('.cart_paybar_vmbox a:first').on('click', function() {
		cookietoarray();//得到数组,上面的删除cookie需要。
		if(confirm('你确定要全部删除吗？')){
		    $('.cart_mitem:visible').each(function() {
		        if ($(this).find('input:checkbox').is(':checked')) {//复选框一定是选中的
		            $(this).remove();
		            dellist($(this).find('.desc').find('img').attr('sid'), arrsid);
		        }
		    });
		   // price();
		}
	});

}();