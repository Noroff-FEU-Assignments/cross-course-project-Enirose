const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const container = document.querySelector(".details");

const url = "https://rainydays-api.enirosehellum.com/wp-json/wc/store/products/" +id;

// console.log(url);

async function callApi(){

  const response = await fetch(url);
  const json = await response.json();

//     container.innerHTML ="";

    container.innerHTML += 
      `<div class = "details">
        <img src= "${json.images[0].thumbnail}"</img>
        <div><h1> ${json.name}</h1></div>
        <div><h2> ${json.price_html}</h2></div>
        <a href="cart.html"><button class="buy-btn">Add to Cart</button></a>
        <h2> Product Details </h2>
        <div><p> ${json.short_description}</p></div>
      </div>`

}

callApi();