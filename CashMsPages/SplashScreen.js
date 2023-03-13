var splashText = document.querySelector(".splash-text");
var logo = document.querySelector(".logo");
var splashDiv = document.querySelector(".splash-div");
var splashLetter = document.querySelectorAll(".splash-letter");
let letterInitialTimeout = 0;

window.addEventListener("load", function(){
    logo.classList.add("active");
    splashText.classList.add("active");   
    splashLetter.forEach(function (letter, index){
        letterInitialTimeout += 200;
        this.setTimeout(function(){
            letter.classList.add("active");
        },letterInitialTimeout)
    });
    this.setTimeout(function(){
       splashDiv.classList.add("offline"); 
    },5000);
    // Mahn for sure one thing I love about javascript is its assynchronous ability.
});