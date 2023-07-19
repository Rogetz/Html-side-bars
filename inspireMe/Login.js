
/*The validation part.*/
let firstName = document.querySelectorAll(".full-name");
let labelFirst  = document.querySelectorAll(".label-full-name");
let initialLabelText = []
labelFirst.forEach(function(value,index){
    initialLabelText[index] = value.innerHTML
})
firstName.forEach(function(fname,index){
    // funny thing the change event is only working after we click elsewhere and not as the text changes
    fname.addEventListener("keyup",function(e){
    labelFirst.forEach(function(value,lindex){
        // since the label and the input will be using same indexes differentiate them with their indexes.
        if(lindex == index){
            let result = e.target.value
            //let result = e.target.value.match(/^\w+$/);
            if(result != ""){
                value.innerHTML = initialLabelText[lindex]
                value.classList.remove("label-invalid")
                value.classList.add("label-valid")
                fname.value = e.target.value;
            }
            else if(result == ""){
                value.classList.remove("label-valid")
                value.classList.add("label-invalid")
                value.innerHTML = "Input a value for the fullname please";
                fname.value = "";
            }
            else{
                value.classList.remove("label-valid")
                value.classList.add("label-invalid")
                value.innerHTML = "Input a valid value please";
            }
        }
    })
})})
let username = document.querySelectorAll(".username");
let labelUsername  = document.querySelectorAll(".label-username");
let initialULabelText = []
labelFirst.forEach(function(value,index){
    initialULabelText[index] = value.innerHTML
})
username.forEach( function(fname,index){
    // funny thing the change event is only working after we click elsewhere and not as the text changes
    fname.addEventListener("keyup",function(e){
    labelUsername.forEach(function(value,lindex){
        // since the label and the input will be using same indexes differentiate them with their indexes.
        if(lindex == index){
            let result = e.target.value
            //let result = e.target.value.match(/^\w+$/);
            if(result != ""){
                value.innerHTML = initialULabelText[lindex]
                value.classList.remove("label-invalid")
                value.classList.add("label-valid")
                fname.value = e.target.value;
            }
            else if(result == ""){
                value.classList.remove("label-valid")
                value.classList.add("label-invalid")
                value.innerHTML = "Input a value for the username please";
                fname.value = "";
            }
            else{
                value.classList.remove("label-valid")
                value.classList.add("label-invalid")
                value.innerHTML = "Input a valid value please";
            }
        }
    })
})})


let emailClasses= document.querySelectorAll(".email");
let labelEmails = document.querySelectorAll(".label-email")
let initialELabelText = []
labelEmails.forEach(function(value,index){
    initialELabelText[index] = value.innerHTML
})
emailClasses.forEach(function(evalue,emailIndex){
    evalue.addEventListener("keyup",function(e){
        labelEmails.forEach(function(lvalue,lindex){
            if(lindex == emailIndex){
    
                /*Note that this is my email validation
                man my own creation.
                Its good to have your own validation criteria*/
                let result = e.target.value.match(/^\w+(\.\*&\d\w)*@\w+(\.)*(\.+\w{2,3}){1,2}/);
                if(result != null){
                    lvalue.innerHTML = initialELabelText[lindex]
                    lvalue.classList.remove("label-invalid")
                    lvalue.classList.add("label-valid")
                    evalue.value = e.target.value;
                }
                else if(e.target.value == ""){
                    lvalue.classList.remove("label-valid")
                    lvalue.classList.add("label-invalid") 
                    lvalue.innerHTML = "Input a value for the email please";
                }
                else{
                    lvalue.classList.remove("label-valid")
                    lvalue.classList.add("label-invalid") 
                    lvalue.innerHTML = "input a valid email please";
                }
            }
        })
    })
})

let labelPasswords = document.querySelectorAll(".label-password")
let password = document.querySelectorAll(".password")
let initialPLabel = []
labelPasswords.forEach(function(lpValue,index){
    initialPLabel[index] = lpValue.innerHTML
})
password.forEach(function(pElement,pIndex){
    pElement.addEventListener("keyup",function(e){
        labelPasswords.forEach(function(lvalue,lindex){
            if(lindex == pIndex){
                let errorDiv = document.querySelector(".error-div")
                let error = []   
                if((/[a-z]/).test(e.target.value) == false){
                    error.push("key in a lower case letter")
                }
                if((/[A-Z]/).test(e.target.value) == false){
                    error.push("key in an uppercase letter")
                }
                if((/\d/).test(e.target.value) == false){
                    error.push("key in a digit please")
                }
                if((/\s/).test(e.target.value) == true){
                    error.push("remove any whitespace please")
                }
                if((/[\w\d\W\S]{8}/).test(e.target.value) == false){
                    error.push("password needs a minimum of 8 characters")
                } 
                // empty it first in each instance
                errorDiv.innerHTML = ""
                if(error.length > 0){
                    errorDiv.innerHTML += ("<p>${0}</p>",error[0])
                    /*error.forEach(function(item,index){
                        errorDiv.innerHTML += ("<p>${0}</p>",item)
                    })*/
                }
                // used the lookahead regex pattern (?=.*{regexTocheck}) to be able  to  test for the presence of a particular trend.
                // password should check for the presence of small letters, uppercase,digits,no spaces,any special character and should have a minimum of 8 characters meaning it allows for more than that.
                 // use an error array to push results on what is required of the password.
                //let result = e.target.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\S])(?=.*\d)(?=.*\d)[\w\d\W\S]{8}/)
                //note that you can also used the regex inbuilt method called test for testing, still works the same.
                // However for the test method use the true or false to test the result. while for the match you use the null to test for the result.
                let result = (/(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\S])(?=.*\d)(?=.*\d)[\w\d\W\S]{8}/).test(e.target.value)
                if(result == true){
                    lvalue.innerHTML = initialPLabel[lindex]
                    lvalue.classList.remove("label-invalid")
                    lvalue.classList.add("label-valid")
                    pElement.value = e.target.value;
                }
                else if(e.target.value == ""){
                    lvalue.classList.remove("label-valid")
                    lvalue.classList.add("label-invalid")
                    lvalue.innerHTML = "Input a password please";
                }
                else{
                    lvalue.classList.remove("label-valid")
                    lvalue.classList.add("label-invalid") 
                    lvalue.innerHTML = "input a valid password please";
                }
            }
        })
    })
})

let lockIcon = document.querySelector(".lock-icon")
let passwordToChange = document.querySelector(".password")
lockIcon.addEventListener("click",function(e){
    let eyePassword = document.querySelector(".fa-eye")
    // I've used if else cause I realized that it was actually executiing twice hence no change.
    if(eyePassword != null){
        e.target.classList.remove("fa-eye")
        e.target.classList.add("fa-eye-slash")
        passwordToChange.setAttribute("type","text")
    }
    else{
        e.target.classList.remove("fa-eye-slash")
        e.target.classList.add("fa-eye")
        passwordToChange.setAttribute("type","password")          
    }
})


