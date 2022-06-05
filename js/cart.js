const cartItems = JSON.parse(localStorage.getItem("shoppingList"));
console.log(cartItems);




// remove btn(still not working)
const removeButton = document.querySelector(".remove-btn")

for (i = 0; i < removeButton.lenght; i++) {
    const button = removeButton[i];
    button.eventlistener("click", myFunction);
    function myFunction() {
        console.log("function");
    }

}
