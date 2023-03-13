let titleSectionh1 = document.querySelector(".title-section h1")
let myName = ["Ronny","Ogeta"]

myName.forEach(function(item,index){
    let spanElement = document.createElement("span")
    spanElement.innerHTML = item + "  ";
    titleSectionh1.append(spanElement)
    setTimeout(function(){
        spanElement.classList.add("activated")    
    },1000*(index + 1))
})


