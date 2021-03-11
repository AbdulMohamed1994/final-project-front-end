// Get data from URL
const params = new URLSearchParams(window.location.search);

// Get element to write data to
let contentBox = document.getElementById("product-content")

let selectedProduct = {}

// Fetch single item data from backend
fetch(`http://127.0.0.1:5000/show-records/${ params.get("productID") }/`)
.then(response => response.json())
.then(product => {
    // write data to content box
    console.log(product);
    selectedProduct = product
    contentBox.innerHTML = `
        
        <div class="single-product">
            <div class="pic"><img src=${ product.image } /></div>
                <div class="single-info">
                    <h2>${ product.name }</h2>
                    <p>${ product.description }</p>
                    <p>${ product.price }</p>
                    <button onclick="add(${ params.get("productID") })">Add to cart</button>
                </div>
        </div>
        <style> 
        button{
            color: #2C3034;
            border: none;
            background: white;
            font-size: 28px;
            border-radius: 6px;
            margin-top: 25px;
            padding: 10px;
        }
        
        .single-info button:hover{
            background: #03A9F4;
            border-radius: 5px;
        }
        </style>
        
    `
})


