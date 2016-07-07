$(function(){
	
	$('.pro-btns a').click(function(){

		var $this = $(this);
		var index = $this.index();
		$this.addClass('pro-tabCur').siblings('a').removeClass('pro-tabCur');
		$('.help-lists').eq(index).addClass('show').siblings('.help-lists').removeClass('show');

	});


$('.menu-list').hover(function(){
		$(this).addClass('head-hover').siblings('.menu-list').removeClass('head-hover');
	},function(){
		$(this).removeClass('head-hover');
	});


});