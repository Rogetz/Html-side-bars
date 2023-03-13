let menuIcon = document.querySelector(".fa-bars");
let closeIcon = document.querySelector(".fa-close");
let dropDownContent = document.querySelector(".l-section");

// an e object returned to the callback.
menuIcon.addEventListener("click",function(){
    dropDownContent.classList.add("active");
    closeIcon.classList.add("active");
})
closeIcon.addEventListener("click",function(){
    dropDownContent.classList.remove("active");
    closeIcon.classList.remove("active");
})