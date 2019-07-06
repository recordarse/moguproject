;! function () {
	//关于我们显示下拉菜单
	$('.J-header-about-us').hover(function () {
		$('.header-about-us-detail').css({
			display: 'block',
		})
	}, function () {
		$('.header-about-us-detail').css({
			display: 'none',
		})
	});
	// 目录显示下拉菜单
	$('.J_header_category').hover(function () {
		$('.header-content-category').css({
			display: 'block',
		})
	}, function () {
		$('.header-content-category').css({
			display: 'none',
		})
	});;
	//下载APP显示二维码
	$(' .J_show_app_code ').hover(function () {
		$('.download-app-code').css({
			display: 'block',
		})
	}, function () {
		$('.download-app-code').css({
			display: 'none',
		})
	});
	//显示右侧列表
	$(' .nav_list_row_first ').hover(function () {
		$('.nav_more_content ').css({
			display: 'block',
		})
	}, function () {
		$('.nav_more_content ').css({
			display: 'none',
		})
	});
	// 滚动条到今日必抢上方出现头部悬浮
	$(window).on('scroll',function(){
		//console.log($(window).scrollTop());
		if($(window).scrollTop() >=600){
			$('#J_sticky_container').addClass(' lets-rock');
			$('#J_sticky_container').css({
				display:'block'
			});
		}else{
			$('#J_sticky_container').removeClass(' lets-rock');
			$('#J_sticky_container').css({
				display:'none'
			});
		}
	});
	//倒计时
	setInterval(function(){
		let time=new Date();
		//console.log( time.toString().split(' ')[4].split(':'));
		let arr= time.toString().split(' ')[4].split(':');
		$('.brandCountdown_hour').html(arr[0]);
		$('.brandCountdown_minute').html(arr[1]);
		$('.brandCountdown_second').html(arr[2]);
	},1000);
	// ajax渲染ul
	$.ajax({
		type:'get',
		url:'http://10.31.158.34/moguproject/php/piclist.php',
		dataType:'jsonp',
		async:'true',
		success:function(data){
           console.log(JSON_parse(data));
		}
	})
}(jQuery);