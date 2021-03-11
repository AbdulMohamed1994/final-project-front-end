// Get data from localStorage
let cart = JSON.parse(localStorage.getItem("cart"))
cart ? cart : cart = [];

function updateCartLink(){
    document.getElementById('cart-link').innerHTML = `Cart(${ cart.length })`;
}
updateCartLink()

// Check if cart content is available

let cartContent = document.getElementById('cart-content');
console.log(cartContent);

function renderCart(){
    // Get data from localStorage
    let cart = JSON.parse(localStorage.getItem("cart"))
    cartContent.innerHTML='';
    if(cartContent){
        cartContent.innerHTML = `
            <h1 style="text-align:center;">Cart</h1>
            <table style="text-align: left">
                <thead style="background: #bebebe">
                    <tr class="test">
                        <th class=""imgcart">Image</th>
                        <th class="namecart">Name</th>
                        <th class="catcart">Category</th>
                        <th class="pricecart">Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${ renderCartItems() }
                </tbody>
            </table>
        `
    }
    console.log("Cart Rendered");
}

renderCart()

function renderCartItems(){
    console.log("Rendering Cart Items");
    let content = '';
    let total = 0;
    cart.forEach(item => {

        total += parseInt(item.price);
        content +=`
            <tr>
                <td><img src=${ item.image } alt=${ item.name }/></td>
                <td>${ item.name }</td>
                <td>${ item.category }</td>
                <td>${ item.price }</td>
                <td class="removeBtn"><button type="button" onclick="remove(${ item.id })"> Remove from cart </button></td>
            </tr>
            
        `
    });

    document.getElementById("total").innerHTML = `<h4 style="text-align: center; font-size:30px; padding-bottom: 30px; padding-top: 30px;">Your total is: R${total}</h4>`;
    // const reducer = (accumulator, currentValue) => accumulator + currentValue
    // let total = cart.reduce((a, b) => {a.price + b.price}, 0)
    console.log(total);
    return content;
}



function add(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart ? cart : cart = [];
    cart.push(selectedProduct);
    console.log(cart);
    document.getElementById("cart-link").innerHTML = `Cart(${ cart.length })`;
    localStorage.setItem("cart",JSON.stringify(cart));
}

function remove(id){
    let cart = JSON.parse(localStorage.getItem("cart"));
    // cart = JSON.parse(cartItem);
    console.log(cart);

    let cartMinusItem = cart.filter(item => {
        return item.id !== id
    })

    localStorage.setItem("cart", JSON.stringify(cartMinusItem));

    console.log("Removing item from cart");
    renderCart()
    window.location.href = "./cart.html"
}

function clearCart(){
    localStorage.removeItem("cart");//clear local storage data
}



function createCart(){
    let inCart;

    let cart = localStorage.getItem("cart");
    console.log("Whats in your cart?", JSON.parse(cart));
}

function showCart(){
    let added = document.getElementById("cartItem");
}

// function renderCart(){
//     let cart = JSON.parse(localStorage.getItem("cart"));

//     fetch("https://final-database.herokuapp.com/show-records/")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             console.log(cart);
//             let cartItem = [];

//             data.forEach((dataItem) => {
//                 cart.forEach((cartItem) =>{
//                     if (dataItem.id == cartItem) {
//                         cartItem.push(dataItem);
//                     }
//                 });
//             });

//             console.log(cartItem);
//             cartItem.forEach((item) => {
//                 let cartItem = createCartItem(item);
//                 document.getElementById("").innerHTML += cartItem;
//             })
//             console.log(cartItem);
//         });
