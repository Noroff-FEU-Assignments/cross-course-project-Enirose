const productContainer = document.querySelector(".container");
const cart = document.querySelector(".shopping-cart");


const buttons = document.querySelectorAll(".buy-btn");
buttons.forEach(function (button) {
    button.onclick = function (event) {
        console.log(event.target);
    }
})