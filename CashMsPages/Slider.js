
let slidesSection = document.querySelector(".slides")
let slidesByClass = document.getElementsByClassName("slides")[0]

let slides = document.querySelectorAll(".slide")

let radiosClasses = document.querySelectorAll(".radio-class")

// using the get methods to access the dom elements so that I can apply the style attributes to them
let firstSlide = document.getElementsByClassName("first-slide")[0]
let lastSlide = document.getElementsByClassName("last-slide")[0]

firstSlide.addEventListener("click",function(){
    alert("first slide clicked")
})

let leftArrow = document.querySelector(".left-arrow")
let rightArrow = document.querySelector(".right-arrow")


//let scrollable = false;
/*worked perfectly well for the mocement with the mouse.
slidesSection.addEventListener("mousedown",function(e){
    scrollable = true;
})
slidesSection.addEventListener("mouseup",function(e){
    scrollable = false;
    slidesSection.classList.remove("scrolling")
})

slidesSection.addEventListener("mousemove",function(e){
    if(scrollable == true){
        slidesSection.scrollLeft -= e.movementX
        slidesSection.classList.add("scrolling")
    }
})*/


// adding a style for moving the images a mile
/*slidesSection.addEventListener("mousedown",function(e){
    scrollable = true;
})
slidesSection.addEventListener("mouseup",function(e){
    scrollable = false;
    slidesSection.classList.remove("scrolling")
})

slidesSection.addEventListener("mousemove",function(e){
    if(scrollable == true){
        if(e.movementX > 0){
        }
        // do note that the scrollLeft refers to the space remeaining for expansion to the left.
        firstSlide.classList.add("margin-left")
        /*if(e.movementX > 0){
            slidesSection.setAttribute("margin-right","60rem")
        }
        else if(e.movementX < 0){

        }*/
    /*}
})
slides.addEventListener("click",function(){
})
radiosClasses.addEventListener("click",function(){
})*/
let leftClickCount = 1
let rightClickCount = -1

leftArrow.addEventListener("click",function(){
    //alert("left arrow clicked")
    //alert(slidesByClass.scrollLeft) // the scrollLeft property is always 0 so I can't use it to test fro the limit of the properties
    // note that there's nothing like scrollRight, am leraning that today hahaha.
    //alert(slidesByClass.scrollRight)
    //if(slidesByClass.scrollLeft >= 0){
    // these are for the single slide, for the larger slide you have to divide
    if((leftClickCount * 100) > (slides.length * 100)){
        firstSlide.style.marginLeft = 0
        leftClickCount = 1
        rightClickCount = -1
    }
    // add a test for when the right clisk count is greater than the actual space available 
    //if(rightClickCount )
    let movementCalc = leftClickCount * -100
    let finalMovement = movementCalc.toString() + "%" 
    //alert(finalMovement)
    // made the final string a string
    firstSlide.style.marginLeft = finalMovement
    leftClickCount += 1
    rightClickCount += 1
        // For the whole slide worked very poorly
        /*let division = 100 / slides.length
        let movementCalc = leftClickCount * -division
        let finalMovement = movementCalc.toString() + "%"
        slidesByClass.style.marginLeft = finalMovement
        leftClickCount += 1 */   
    //}
    // this is the right style of setting the styles and it works only that it doesn't increment how I want
    //firstSlide.classList.add("margin-left")
})
rightArrow.addEventListener('click',function(){
    //alert("right arrow clicked")
    let movementCalc = rightClickCount * -100
    // make the item a string to alow it to work well with the styles margin property
    let finalMovement = movementCalc.toString() + "%"
    //alert(finalMovement)
    firstSlide.style.marginLeft = finalMovement;
    //firstSlide.classList.add("margin-right")

    /*if(((slides.length * 100) == (leftClickCount * 100)) && leftClickCount == 1){
        rightClickCount = -1
    }*/
})