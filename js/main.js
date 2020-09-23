/*
==================================================
|	|	Navigation
==================================================
*/
$(function () {
	$('#feature').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky');
		}
		else{
			$('nav').removeClass('sticky');
		}
	},{
		offset: '100px'	
	});
});
/*
==================================================
|	|	Mobile Navigation
==================================================
*/
$(function () {
	$('.js--nav').click(function(){
		 var nav = $('.js--main--nav');
		 //var icon = $('.js--nav ion-icon');
		
		nav.slideToggle(200);
		
		//if(icon.hasClass('menu-outline')){
		//	icon.addClass('close-outline');
		//	icon.removeClass('menu-outline');
		//}
		//else
		//{
		//	icon.addClass('menu-outline');
		//	icon.removeClass('close-outline');
		//}
	});
});
	
	
