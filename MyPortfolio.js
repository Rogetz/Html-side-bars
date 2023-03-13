let introDiv = document.querySelector(".intro")
let greetings = document.querySelector(".greetings")
let pronoun = document.querySelector(".pronoun")
let myNames = document.querySelectorAll(".intro .my-name span")
let arrowButton = document.querySelector(".intro .arrow-container")
let profession = document.querySelector(".intro .profession")
let actionButton = document.querySelector(".intro .arrow-container .action-button")
let arrowRight = document.querySelector(".intro .fa-long-arrow-right")
let side = document.querySelector(".side")


window.addEventListener("load",function(){
    setTimeout(function(){
        side.classList.add("fade-in")
        /*for the ttitle*/
        setTimeout(function(){
            greetings.classList.add("slide-right")
            setTimeout(function(){
                pronoun.classList.add("active")
                setTimeout(function(){
                    myNames.forEach(function(element,index){
                        setTimeout(function(){
                            element.classList.add("active")
                        },index*100)
                    })
                    setTimeout(function(){
                        profession.classList.add("active")
                        setTimeout(function(){
                            arrowButton.classList.add("active")
                        },1000)
                    },1000)                 
                },1000)
            },1000)
        },1000)
    },1000)
    actionButton.addEventListener("mouseover",function(){
        arrowRight.style.animationPlayState = "paused"
    })
    actionButton.addEventListener("mouseout",function(){
        arrowRight.style.animationPlayState = "running"
    })
})
