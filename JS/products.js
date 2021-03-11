// Get data from URL
const params = new URLSearchParams(window.location.search);

let products = [];
let productList = document.getElementById('products')

fetch('http://127.0.0.1:5000/show-records/')
.then(response => response.json())
.then(data => {
    products = data[1];
    let category = params.get('category');
    if (params.has("category")){
        let filteredProducts = products.filter(product => {
            return product.category == category;
        })
        filteredProducts.forEach(product => {
            let item = createProduct(product);
            productList.innerHTML += item
        })
    } else {
        products.forEach(product => {
            let item = createProduct(product);
            productList.innerHTML += item
        })
    }
})

function createProduct(product){
    return `
    <a class="card" href="./product.html?productID=${ product.id }">
        <img src=${ product.image } />
        <h4>${ product.name }</h4>
        <h5>Price: ${ product.price }</h5>
    </a>
    `;
}

