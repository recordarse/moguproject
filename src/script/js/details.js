! function ($) {
	//获取picid
	var picid = location.search.substring(1).split('=')[1];
	//console.log(picid);
	//将当前的id传给后端获取对应的数据
	$.ajax({
		url: 'http://10.31.158.34/moguproject/php/details.php',
		data: {
			sid: picid
		},
		dataType: 'json'
	}).done(function (data) {
		//console.log(data);
		$('.big-img #J_BigImg ').attr('src', data.url);
		$('.goods-title .title').html(data.title);
		$('#J_NowPrice').html(data.price);
		var arr = data.imgurls.split(',');
		// console.log(arr);
		var str = '';
		$.each(arr, function (index, value) {
			str += '<li><img src="' + value + '"/></li>';
		});
		$('.list ul').html(str);
	});


}(jQuery);

//左侧图片结构
! function ($) {
	//点击下列小图显示对应大图
	$('.carousel').on('click', 'li', function () { //表示被委托的元素
		var $imgurl = $(this).find('img').attr('src');
		//console.log( ($imgurl).substring(0,87)+'_468x468.jpg');
		$('#smallpic').attr('src', $imgurl);
		//console.log($(this).index());
		if ($(this).index() == 0 || $(this).index() % 2 == 0) {
			$('#J_BigImg').attr('src', ($imgurl).substring(0, 87) + '468x468.jpg');
		} else {
			$('#J_BigImg').attr('src', ($imgurl).substring(0, 87) + '_468x468.jpg');
		}
	});
	// 点击箭头实现切换
	var $num = 5;
	//var $flag=true;
	$('.right-btn').on('click', function () {
		//console.log(1);
		var $list = $('.list ul li'); //6
		if ($list.length > $num) {
			$num++;
			$('.left-btn').css('display', 'block');
			if ($list.length == $num) {
				$('.right-btn').css('display', 'none');
			}
			$('.list ul').animate({
				left: -($num - 5) * $list.eq(0).innerWidth(),
			});
		}
	});

	$('.left-btn').on('click', function () {
		//console.log(1);
		var $list = $('.list ul li'); //6
		if ($num > 5) {
			$num--;
			$('.right-btn').css('display', 'block');
			if ($num <= 5) {
				$('.left-btn').css('display', 'none');
			}
			$('.list ul').animate({
				left: -($num - 5) * $list.eq(0).innerWidth(),
			});
		}
	});
}(jQuery);

! function () {
	//选择添加购物车的数量
	$('.num-add').on('click', function () {
		var $num = $('.num-input').val();
		$num++;
		if ($num > 99) {
			$num = 99;
		}
		$('.num-input').val($num);
	});
	$('.num-reduce').on('click', function () {
		var $num = $('.num-input').val();
		$num--;
		if ($num < 1) {
			$num = 1;
		}
		$('.num-input').val($num);
	});
	//
	function getcookie(key) {
		let arr = decodeURI(document.cookie).split('; ');
		for (let i = 0; i < arr.length; i++) {
			let newarr = arr[i].split('=');
			if (newarr[0] === key) {
				return newarr[1];
			}
		}
	}
	function addcookie(key, value, day) {
		let date = new Date();
		date.setDate(date.getDate() + day);
		document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
	}
	//存入cookie
	var arrsid = [];
	var arrnum = [];
 
	function cookietoarray() {
		if (getcookie('cookiesid') && getcookie('cookienum')) {
			arrsid = getcookie('cookiesid').split(',');
			arrnum = getcookie('cookienum').split(',');
		}
	}
	$('#J_BuyCart').on('click', function () {
		var $sid = location.search.substring(1).split('=')[1];
		//console.log($sid);
		cookietoarray();
		if ($.inArray($sid, arrsid) != -1) { //商品存在，数量叠加 
			var num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('.num-input').val());
			arrnum[$.inArray($sid, arrsid)] = num;
			addcookie('cookienum', arrnum.toString(), 10);
		} else { //不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
			arrsid.push($sid); //
			addcookie('cookiesid', arrsid.toString(), 10);
			arrnum.push($('.num-input').val());
			addcookie('cookienum', arrnum.toString(), 10);
		}
	})



	
}(jQuery);