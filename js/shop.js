// document.title = "Rainy Days";

const detailsContainer = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const eventId = params.get("id");
// console.log(eventId);

const url = "https://rainydays-api.enirosehellum.com/wp-json/wc/store/products/" + eventId;

async function fetchList() {
        const response = await fetch(url);
        const results = await response.json();
        // console.log(results);

        for(let i=0; i<json.length; i++){

            detailsContainer.innerHTML = `<div class="container">
                <img src= "${json[i].images[0].thumbnail}" alt="Image"</img>
                <div><h2>${json[i].name}</h2></div>
                <div><h3> Price: ${json[i].prices.price}<h3> </div> 
                <div><h2>${json[i].description}</h2></div>
                </div>`
        };
}

fetchList();

// const container = document.querySelector(".container");
// const url = "https://rainydays-api.enirosehellum.com/wp-json/wc/store/products/";

// async function callApi(){
//     const res = await fetch(url);
//     const json = await res.json();

//     container.innerHTML="";

//        for(let i=0; i<json.length; i++){

//         const html =`<div class="contain">
//             <img src= "${json[i].images[0].thumbnail}" alt="Image"</img>
//             <div><h2>${json[i].name}</h2></div>
//             <div><h3> Price: ${json[i].prices.price}<h3> </div> 
//             <button class="view"> View More </button>
//             </div>`
                
//             container.innerHTML += html;
//         }
// }

// callApi();
