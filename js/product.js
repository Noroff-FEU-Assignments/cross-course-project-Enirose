const container = document.querySelector(".container");
const url = "https://rainydays-api.enirosehellum.com/wp-json/wc/store/products/";

async function callApi(){
    const res = await fetch(url);
    const json = await res.json();

    container.innerHTML="";

       for(let i=0; i<json.length; i++){

        container.innerHTML +=`<a href="shop.html?id=${json.eventId}">
            <div class="contain">
            <img src= "${json[i].images[0].thumbnail}" alt="Image"</img>
            <div><h2>${json[i].name}</h2></div>
            <div><h3> Price: ${json[i].prices.price}<h3> </div> 
            <button class="view"> View More </button>
            </div>
        </a>`
                
        }
}

callApi();