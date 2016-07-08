$(function(){
	
	$('.pro-btns a').attr('btn',0);
	$('.pro-btns a').click(function(){

		var $this = $(this);
		var index = $this.index();
		var btn = $(this).attr('btn');
		if( btn == '0' ){
			$this.attr('btn',1);

			$this.addClass('pro-tabCur').siblings('a').removeClass('pro-tabCur');
			$('.help-lists').eq(index).addClass('show').siblings('.help-lists').removeClass('show');
		}else{
			$('.help-lists').removeClass('show');
			$('.pro-btns a').removeClass('pro-tabCur');
			$('.pro-btns a').attr('btn',0);
		}
		
	});


$('.menu-list').hover(function(){
		$(this).addClass('head-hover').siblings('.menu-list').removeClass('head-hover');
	},function(){
		$(this).removeClass('head-hover');
	});

 $('.menu-info').hover(function(){
 	var $this = $(this);
 	$this.addClass('menu-infoHover');
 },function(){
 	var $this = $(this);
 	$this.removeClass('menu-infoHover');
 });


});