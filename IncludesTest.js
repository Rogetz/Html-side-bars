// This method  query selectors actually works very well also with the tags
var header = document.querySelector("header")


// Love using the function body contains something other than doing one action
// so even if its an arrow function and its returning or doing more than one thing always ensure that you add the body's curly braces.
fetch("/header.html").then(res => res.text()).then(data => {
    header.innerHTML = data
    // for the internal js part to work.
    // yet to see how the external js and css can be extracted.
    // It doesn't work using only one line.
    let domParser = new DOMParser()
    let doc = domParser.parseFromString(data,'text/html')
    // don't forget the textContent
    let javascriptSelected = doc.querySelector("script").textContent
    eval(javascriptSelected)

})
// This fetch method worked perfectly well am glad.

/*header.addEventListener("click",function(){
    alert("header clicked")
})


xmlObject.onreadystatechange = function (){
    /*always use the this keyword here. */
    /*if(this.readyState == 4 && this.status == 200){
        header.innerHTML += xmlObject.responseText;
    }
    else{
        /*Place this else statement outside the onreadystatechange
        property because the onreadystate change
        reexecutes its self four times from the readyState
        1 to state 4*/
        /*outputClass.innerHTML += xmlObject.statusText;*/
    /*}
};
if(!xmlObject.status == 200){
    header.innerHTML += xmlObject.statusText +" It got no valid response";
}

xmlObject.open("GET","Header.html",true);
xmlObject.send();*/