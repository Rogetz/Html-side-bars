$(document).ready(function(){
    // the hover method takes two callbacks, one for the mouse enter, the other for the mouse-leave
   $(".menu-item").hover(function(){
        $(this).addClass("active");
   },
   function(){
    $(this).removeClass("active");
   }
   ); 

   // this is for toggling the menu, its nice
   // I'll just confirm how to ensure that its clickable
   $(".close-btn").click(function(){
        $(".sidebar").addClass("shrinked-side-bar");
        $(".image-group").addClass("hide-elements");
        $(".toggle-icons.open-menu").removeClass("toggleActive");
        $(".toggle-icons.close-menu").addClass("toggleActive");
   });
   $(".open-btn").click(function(){
     $(".sidebar").removeClass("shrinked-side-bar");
     $(".image-group").removeClass("hide-elements");
     $(".toggle-icons.close-menu").removeClass("toggleActive");
     $(".toggle-icons.open-menu").addClass("toggleActive");    
   });

   // for the close and open buttons
});