var searchDiv = document.querySelector(".search-div");

var searchIcon = document.querySelector(".search-icon .fa-magnifying-glass");
var cancelIcon = document.querySelector(".cancel-icon");

searchIcon.addEventListener("click",function(){
    searchDiv.classList.remove("hidden");
    searchIcon.classList.add("hidden");
});
cancelIcon.addEventListener("click",function(){
    searchDiv.classList.add("hidden");
    searchIcon.classList.remove("hidden");
});