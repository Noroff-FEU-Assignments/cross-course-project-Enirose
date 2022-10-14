const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const container = document.querySelector(".s-row");

const url = "https://rainydays-api.enirosehellum.com/wp-json/wc/store/products/" +id;

// console.log(url);

async function callApi(){

  const response = await fetch(url);
  const json = await response.json();

//     container.innerHTML ="";

    container.innerHTML += 
      `<div class = "s-row">
        <div><img src= "${json.images[0].thumbnail}"</img></div>
        <div class = "p-details"><h1> ${json.name}</h1></div>
        <select>
          <option>Select size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
        <div><h2> ${json.price_html}</h2></div>
        <a href="cart.html"><button class="buy-btn">Add to Cart</button></a>
        <h4> Product Details </h4>
        <div><p> ${json.short_description}</p></div>
      </div>`

}

callApi();