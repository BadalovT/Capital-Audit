;(function($) {
    "use strict";
    
    
    var navbar=$('.header_menu, .middle_menu_area, .header_white_menu');
    var nav_offset_top = $('.header_menu, .middle_menu_area, .header_white_menu').offset().top;
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	navbar.affix({
	  offset: {
	    top: nav_offset_top,
	  }
	});


	// navbar.on('affix.bs.affix', function() {
	// 	if (!navbar.hasClass('affix')){
	// 		navbar.addClass('animated slideInDown');
	// 	}
	// });

	// navbar.on('affixed-top.bs.affix', function() {
	//   	navbar.removeClass('animated slideInDown');
	  	
	// });
    
    
    
    // $('.navbar-toggle').on('click',function(){
    //     var a = $('.navbar-collapse')
    //     if(!a.hasClass('in')){
    //     $('html,body').attr('id', 'overhidden');
    
    //     }else{
    //         $('html,body').removeAttr('id');
         
        
    //     }
    // })
   

        
 
    
 



})(jQuery)