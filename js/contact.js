const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#mesage");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
try {
    function validate() {
        event.preventDefault();
        if (checkLength(name.value, 0) === true) {
            nameError.style.display = "none";
        }
        else {
            nameError.style.display = "block";
        }
        if (validateEmail(email.value) === true) {
            emailError.style.display = "none";
        }
        else {
            emailError.style.display = "block";
        }
        if (checkLength(message.value, 24) === true) {
            messageError.style.display = "none";
        }
        else {
            messageError.style.display = "block";
        }
    }

    form.addEventListener("submit", validate);
    function checkLength(value, len) {
        if (value.trim().length > len) {
            return true;
        } else {
            return false;
        }
    }

    function validateEmail(email) {
        const regEx = /\S+@\S+\.\S+/;
        const patternMatches = regEx.test(email);
        return patternMatches;
    }
}
catch (error) {
    alert("error found");
}