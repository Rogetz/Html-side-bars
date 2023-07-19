
// select all the elements you want to work on.
let hiddenElements = document.querySelectorAll(".hidden")


let intersectionObserver = new IntersectionObserver(function(entries){
    // the entries are an array
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            // If you only want it to animate only once then you only live it out at this section, but for a looping one head over to the else block for removing them once more.
            entry.target.classList.add("show")
        }
        else{
            // remove it once more  so that it will be animating each time its reached
            entry.target.classList.remove("show")
        }
    })
})

// it works after initializing the intersection observer class.
hiddenElements.forEach(function(element,index){
    intersectionObserver.observe(element)
})

// am trying to see if there's a way of selecting the inner children of the elements to add the various css styles using javascript.
hiddenElements.forEach(function(el){
    if(el.hasChildNodes){
        //alert("an el has child nodes")
        el.childNodes.forEach(function(innerKid,index){
            innerKid.addEventListener("click",function(){
                //alert("an inner child clicked.")
            })
            innerKid.style.transitionDelay = "${index + 1}"
        })    
    }
})