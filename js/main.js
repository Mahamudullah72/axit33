(function($){
	'use strict';

// main menu

$('.axit-nave-menu-icon i.fa-bars').on('click',function(){
	$('.axit-nave-menu').slideToggle();
	
})

$(window).resize(function(){
	var screenSize = $(window).width();
	if(screenSize > 767){
		$('.axit-nave-menu').removeAttr('style');
	}
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})




}) (jQuery);