(function(window, document, undefined){
    // validate all the form inputs
    let inputs = document.querySelectorAll("input");
    // convert node array to array
    let inputsList = Array.from(inputs);

    inputsList.forEach(function(elem) {
        elem.addEventListener("change keyup", function(event){
            // validate
            let formInput = this;
        })
    })

    const signUpForm = document.querySelector("#sign-up-form");
    signUpForm.addEventListener("submit", function(event){
        let form = this;
        if (!form.checkValidity()){
            return event.preventDefault() || event.stopPropagation();
        }
    })
})();