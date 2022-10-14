const container = document.querySelector(".row");
const url = `https://rainydays-api.enirosehellum.com/wp-json/wc/store/products?category=16`;
const loader = document.querySelector(".loader");

async function callApi(){
    const res = await fetch(url);
    const json = await res.json();

    container.innerHTML="";

    loader.classList.remove("loader");

    for(let i=0; i<json.length; i++){

        container.innerHTML +=
                        `<div class="product">
                            <a href="shop.html?id=${json[i].id}"><img src= "${json[i].images[0].thumbnail}"></a>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h2 class="p-name">${json[i].name}</h2>
                            <h3 class="p-price"> Price: ${json[i].price_html}<h3>
                            <a href="shop.html?id=${json[i].id}"><button class="buy-btn">Buy Now</button></a>
                        </div>`;
                
    };
}

callApi();