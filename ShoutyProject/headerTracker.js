
let allLinks = document.querySelectorAll("header a")
let sections = document.querySelectorAll("section")

window.addEventListener("scroll",function(){
    sections.forEach(function(section,index){
        let sectionId = section.getAttribute("id")
        let sectionTop = section.offsetTop
        let sectionHeight = section.offsetHeight
        let dividedHeight = sectionHeight / 3
        let totalHeight = sectionTop + sectionHeight
        let scrollY = window.scrollY
        
        if(scrollY >= sectionTop && (sectionTop + dividedHeight) > scrollY){
            allLinks.forEach(function(link,index){
                link.classList.remove("active")
            })
            // note the use of a * regex to ensure that it selects any link provide it has the sectinId
            // actually there's no other way of tracking the hrefs without that * regex
            // always use the * regex, never use the #Home style direcly, us ethe * regex to assume all the fits elements that might be at the front
            document.querySelector('header a[href*='+sectionId+']').classList.add("active")
        }
    })
})


