var password = document.getElementById("password");
var visibilityDiv = document.querySelector(".visibility-toggler");
var eyeOpen = document.querySelector(".fa-eye");
var eyeClosed = document.querySelector(".fa-eye-slash");

eyeOpen.addEventListener("click",function(){
    password.type = "text";  
});
eyeClosed.addEventListener("click",function(){
    password.type = "password";
});

visibilityDiv.addEventListener("click",function(){
    visibilityDiv.childNodes.forEach(function(node,index){
            node.classList.toggle("active");
        }
    );
});