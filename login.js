(function(window, document, undefined){
    // validate all the form inputs
    let inputs = document.querySelectorAll("input");
    // convert node array to array
    let inputsList = Array.from(inputs);

    inputsList.forEach(function(elem) {
        elem.addEventListener("input", function(event){
            // validate
            let formInput = this;
            let password = document.getElementById("password");
            // reset
            formInput.style.borderColor = "";
            password.style.borderColor = ""
            let invalidFeedback = document.querySelectorAll(".invalid-feedback");
            invalidFeedback = Array.from(invalidFeedback);
            invalidFeedback.forEach(function(elem){
                elem.textContent = "";
            })
            // compare passwords
            if ("password-confirmation" === formInput.getAttribute("id")){
                setTimeout(function(){
                    if (formInput.value !== password.value){
                        let red = "#ff0000";
                        formInput.style.borderColor = red;
                        password.style.borderColor = red;

                        invalidFeedback.forEach(function(elem){
                            elem.textContent = "*Password do not match";
                        })
                    }
                }, 100);
            }
        })
    })

    const signUpForm = document.querySelector("#sign-up-form");
    signUpForm.addEventListener("submit", function(event){
        let form = this;
        if (!form.checkValidity()){
            return event.preventDefault() || event.stopPropagation();
        }
    })
})(window, document);