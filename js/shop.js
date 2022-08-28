const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id)

const container = document.querySelector(".container");

const url = "https://rainydays-api.enirosehellum.com/wp-json/wc/store/products/" +id;



console.log(url);

async function callApi(){

  const response = await fetch(url);
  const json = await response.json();

  const loading = document.querySelector(".loader");

  async(function(){

    container.innerHTML ="";

  const html = `
      <div class = "container">
      
        <img src= "${json.images[0].thumbnail}" alt="Image"</img>
        <div><h1> ${json.name}</h1></div>
        <div><h1> ${json.prices.price}</h1></div>

        <div><h3> ${json.short_description}</h3></div>
      </div>`
        
        container.innerHTML += html;

  })
}

callApi();