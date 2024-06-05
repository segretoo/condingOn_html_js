jQuery(document).ready(function(){
	$('.gnb li').on('mouseenter',function(){
		$('.gnb ul').stop(true, true).slideDown();
		$(this).children('a').addClass('on');
		$('.bg_sub').stop(true, true).slideDown();
	})
	
	$('.gnb li').on('mouseleave',function(){
		$(this).children('a').removeClass('on');
	})

	$('.gnb').on('mouseleave',function(){
		$('.gnb ul').stop(true, true).slideUp();
		$(this).children('a').removeClass('on');
		$('.bg_sub').stop(true, true).slideUp();
	})

})


