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
	// right nav 
	$(window).on('scroll',function(){
		if($(window).scrollTop()>=$(window).height()){
			$( '.mgj-back2top').css({
				display:'block',
			})
		}else{
			$( '.mgj-back2top').css({
				display:'none',
			})
		}
	});
	$('.mgj-back2top').on('click',function(){
		$('body,html').animate({
			scrollTop:0
		});
	});
	// ajax渲染ul
	$.ajax({
		url:'http://localhost/moguproject/php/piclist.php',
		dataType:'json',
		async:'true',
		//  crossDomain:true,
	}).done(function(data){
	   //console.log(data);
	   var $html='<ul>';
	   //console.log(data);
	   $.each(data,function(index,value){
		   $html+=`
			   <li>
				   <a href="details.html?sid=${value.picid}" target="_blank">
					   <img _src="${value.url}" style="width:200px;height:290px;" />
					   <h4 style="font-size:8px;width:200px;height:20px;overflow:hidden;font-style:normal">${value.title}</h4>
					   <p style="height:20px; line-height:10px;font-style:bold">${value.price}</p>
				   </a>
			   </li>
		   `;
	   });
	   $html+='</ul>';
	   $('.goodslist').html($html);
	});
	// 懒加载
	$(window).on('scroll', function () {
		//console.log($('.goodslist').offset().top);2567
		let $imgtop=$('.goodslist').offset().top;
		let $scrolltop=$(window).scrollTop();
		let $clientheight=$(window).height();
		//console.log($clientheight);//407
		if($imgtop<$scrolltop+$clientheight){
		for(let $i=0;$i<20;$i++){
		$('.goodslist').find('img').eq($i).attr('src',$('.goodslist').find('img').eq($i).attr('_src')) ;
		}				 
		}
	});
}(jQuery);