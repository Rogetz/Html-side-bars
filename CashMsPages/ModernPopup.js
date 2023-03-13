var popUp = document.querySelector(".pop-up");
var submitButton = document.querySelector(".submit-btn");
var okButton  = document.querySelector(".ok-button");

submitButton.addEventListener("click",function(){
    popUp.classList.add("pop-up-display");
});
okButton.addEventListener("click",function(){
    popUp.classList.remove("pop-up-display");
});
// thats the hover property for javascript. property for javascript.
popUp.addEventListener("mouseover",function(){
    var main = document.querySelector("main");
    main.classList.add("changed-Main");
})