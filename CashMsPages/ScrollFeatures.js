let documentHeight = document.body.offsetHeight;
let innerHeight = window.innerHeight;
alert(documentHeight)
alert(innerHeight)

window.addEventListener("scroll",function(){
    console.log(window.scrollY.toString())
    console.log("hello there")
})