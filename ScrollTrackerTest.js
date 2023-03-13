//console.log("some data returned,  trying to reveal the data from the console without the live server to see if it can indeed be revealed.")

let paragraphDiv = document.querySelector("div p");
let testDiv = document.querySelector(".test-div")
let spaceOccupier = document.querySelector(".space-occupier")
let spaceOccupier2 = document.querySelector(".space-occupier2")

/* variables concerned with the height*/
let bodyHeight = document.body.offsetHeight
let textContainer = document.querySelectorAll(".text-container")
let leastHeight = window.innerHeight // doesn't change so don't place it in the event listener.


document.addEventListener("scroll",function(){
    let scrollY = window.scrollY
    // whenever this is less than the windowInner height then the item is currently in view.
    // also note that uf the element is larger than the window inner height then this property includes negative values.
    let spaceOccupier2posY = spaceOccupier2.getBoundingClientRect().y

    // top is same as y property.
    let spaceOccupierposY = spaceOccupier.getBoundingClientRect().y
    alert(spaceOccupierposY)
    if(spaceOccupierposY <= leastHeight){
        spaceOccupier.classList.add("scroll-right")
    }
    else{
        spaceOccupier.classList.remove("scroll-right")
    }

    textContainer.forEach(function(element,index){
        element.innerHTML = window.outerHeight.toString()+","+spaceOccupier2posY.toString()+","+leastHeight.toString()+","+scrollY.toString()+","+bodyHeight.toString()
    })

    /*added the part for the revealing*/
    if(spaceOccupier2posY <= leastHeight){
        // js is intelligent to only add the class once and not each time the condition is met.
        spaceOccupier2.classList.add("scroll-left")
    }
    else{
        spaceOccupier2.classList.remove("scroll-left")
    }
})



/*testDiv.addEventListener("scroll",function(){

})*/
/*
alert("type of the boundingClient is an "+typeof(testDiv.getBoundingClientRect()))

// note that this stringify method converts the object to a string as well as making it be visible in json format.
alert(JSON.stringify(testDiv.getBoundingClientRect()))

let dimensionsObject = testDiv.getBoundingClientRect()

alert(dimensionsObject.top)

paragraphDiv.addEventListener("click",function(){
    alert("The paragragh has been clicked.")}
)
alert(paragraphDiv.compareDocumentPosition(testDiv).toString())
paragraphDiv.onfullscreenchange(function(){
    alert("full screen change warning")
})
paragraphDiv.addEventListener("mousewheel",function(){
    alert("mouse wheel detected")
})
window.addEventListener("scroll",function(){
    alert("the window clicked.")
})
window.onscroll = function(){
    alert("hello there the window has been scrolled")
}
spaceOccupier.addEventListener("scroll",function(){
    alert("space occupier scrolled.")
})
*/

let 
