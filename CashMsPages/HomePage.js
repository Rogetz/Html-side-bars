/*use this js to optimize the toggling of the visibility of the two bars 
when one is active the other should be invisible and ofcourse I have the visibility hidden class
that can be addded, toggled or removed altogether*/

/*The code in jquery*/
/*$(document).ready(function(){
    alert("Jquery functioning");
    /*test this functionality later seems like jquery has some issues. */
    /*$(".menu-titles").click(function(){
        alert("clicked the list-container");
        $(this).children(".drop-down-group").addClass("active-drop-down-group");
        $(this).siblings(".menu-titles").children(".drop-down-group").removeClass("active-drop-down-group");
    });
    $(".search-div").click(function(){
        alert("clicked the search div");
    });
    $(".right").click(function(){
        alert("the drop-down button was clicked");
    })
});*/
/*----End----*/

/*Code in vanilla javascript*/
/*I dont know where the problem is. the code seems just fine.
I'll probably run it somewhere else and see if it works*/
var listContainer = document.querySelectorAll("list-container");
var searchForm = document.querySelector(".search-form");
var rightBar = document.querySelector(".right");
var menuTitles = document.querySelectorAll(".menu-titles");
var dropDown = document.querySelectorAll(".drop-down-group");
var headingThree = document.querySelectorAll(".menu-titles h3");

window.addEventListener("load",function(){
    /*listContainer.forEach(function(listItem,index){
        listItem.addEventListener("click",function(){
            window.alert("menu-Item clicked, index "+index+" clicked");
        });
    });*/
    /*This javascript function works well except for selecting the childNodes
    so I am trying it with jquery but the foreach loop and
    event listener work really well.*/
    /*menuTitles.forEach(function(menuTitle,index){
        menuTitle.addEventListener("click",function(){
            menuTitle.childNodes[0].classList.add("active");
        });
    });*/
    /*And well JQuery just worked perfectly.*/
    /*$(".menu-titles").click(function(){
        $(".menu-titles").children(".drop-down-group").removeClass("active");
        $(this).children(".drop-down-group").toggleClass("active");
        /*not tested the rotate feature, taste it later though.*/
        /*$(this).next(".fa-circle-chevron-down").css("rotate : -90deg");
    });*/
    

    // I need to add a way to remove the other active classes in the non active classes.
    headingThree.forEach(function(e,key1){
        // tried removing the rest of the active classes.
        e.addEventListener("click",function(){
            dropDown.forEach(function(e,key2){
                if( dropDown[key2] != dropDown[key1]){
                    dropDown[key2].classList.remove("active");                    
                }
            })
            // toggle wasn't working efficiently because each time the class is in the non-active state.
            // I used the dropDown for each loop to isolate the elements that weren.t the exacct dropdown thet needed to be toggled.
            dropDown[key1].classList.toggle("active");
        })
    });
    /*headingThree[i].addEventListener("click",function(e){
        alert("Heading Three has been clicked");
        dropDown[0].classList.toggle("active")
    });*        var wrapper = document.querySelector(".wrapper");
        
        /* Use this criteris to ensure that for each value in the list a paragraph is created
        list.forEach(function(){
        });
        */
        var searchResults = document.querySelector(".search-results");
        var integerArray = [1,2,3,4,5];
        // I'll also use this one here in the real project.
        // paragragh.innerHTML += searchValue
        for(var i = 0; i <= integerArray.length; i++){
            var paragragh = document.createElement("p");
            paragragh.innerHTML = "test value";
            searchResults.appendChild(paragragh);
        }

});