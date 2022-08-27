const productContainer = document.querySelector(".container");
// console.log(productContainer);

const shoppingList = document.querySelector(".s-row");
const productdetails = document.querySelector(".p-details");

localStorage.setItem("s.row", JSON.stringify(shoppingList));


const buttons = document.querySelectorAll(".buy-btn");
buttons.forEach(function (button) {
    button.onclick = function (event) {
        console.log(event.target);
    }
})