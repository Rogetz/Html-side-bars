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
        $(".menu-item.title").addClass("no-display");
        $(this).removeClass("toggleActive");
        $(".toggle-icons.open-btn").addClass("toggleActive");
   });
   $(".open-btn").click(function(){
     $(".sidebar").removeClass("shrinked-side-bar");
     $(".image-group").removeClass("hide-elements");
     $(".menu-item.title").removeClass("no-display");
     $(this).removeClass("toggleActive");
     $(".toggle-icons.close-btn").addClass("toggleActive");    
   });

   // for the close and open buttons
});