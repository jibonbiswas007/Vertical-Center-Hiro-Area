(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        
        $(".mainmenu ul li a").on("click", function(){
            $(".mainmenu ul li a").removeClass("active");
            $(this).addClass("active");
        });
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));