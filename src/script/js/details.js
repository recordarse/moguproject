! function($) {
	//获取picid
	var picid = location.search.substring(1).split('=')[1];
	//console.log(picid);
	//将当前的id传给后端获取对应的数据
	$.ajax({
		url: 'http://localhost/moguproject/php/details.php',
		data: {
			sid: picid
		},
		dataType: 'json'
	}).done(function(data) {
		 //console.log(data);
		$('.big-img #J_BigImg ').attr('src', data.url);
		 $('.goods-title .title').html(data.title);
		 $('#J_NowPrice').html(data.price);
		var arr = data.imgurls.split(',');
		// console.log(arr);
	      var str = '';
		$.each(arr, function(index, value) {
			str += '<li><img src="' + value + '"/></li>';
		});
		$('.list ul').html(str);		
	});
	!function(){

	
	//点击下列小图显示对应大图
	$('.carousel').on('click','li',function(){//表示被委托的元素
		var $imgurl=$(this).find('img').attr('src');
		console.log( ($imgurl).substring(0,87)+'_468x468.jpg');
		$('#smallpic').attr('src',$imgurl);
		console.log($(this).index());
		if($(this).index()==0||$(this).index()%2==0){
			$('#J_BigImg').attr('src',($imgurl).substring(0,87)+'468x468.jpg');
		}else{
		$('#J_BigImg').attr('src',($imgurl).substring(0,87)+'_468x468.jpg');
		}
	});
	// 点击箭头实现切换
	var $num=5;
	$('.right-btn').on('click',function(){
		//console.log(1);
		  var $list=$('.list ul li');//6
		  if($list.length>$num){
			  $num++;
			  $('.left-btn').css('display','block');
               if($list.length==$num){
				$('.right-btn').css('display','none');
			   }
			   $('.list ul').animate({
				left:-($num-5)*$list.eq(0).innerWidth(),
				});
		  }
	});
		
	// $('.left-btn').on('click',function(){
	// 	console.log(1);
	// 	var $list=$('.list ul li');//6
	// 	if($num>5){
	// 		$num--;
	// 		$('.right-btn').css('display','block');
	// 		if($num<=5){
	// 			$('.left-btn').css('display','none');
	// 		}
	// 		$('.list ul').animate({
	// 			left:-($num-5)*$list.eq(0).innerWidth();
	// 		})
	// 	}
	// });
}();
}(jQuery);