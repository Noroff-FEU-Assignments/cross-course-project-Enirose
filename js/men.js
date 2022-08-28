const baseUrl = "https://rainydays-api.enirosehellum.com/wp-json/wc/store/products/"
const productContainer = document.querySelector(".row")

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    
    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class="product"><h2>${product.name}</h2>
        <div class="product-image"style=background-image:url(${product.images[0].src})
        </div>`
    })
}

getProducts(baseUrl);
