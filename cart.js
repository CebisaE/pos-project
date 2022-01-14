let cart = JSON.parse(localStorage.getItem("cart"))
? JSON.parse(localStorage.getItem("cart")) :[];

console.log(cart)

// readcart//

function readCart(cart){
    document.querySelector("#cart").innerHTML ="";

    cart.forEach((product,i)=>{
        document.querySelector("#cart").innerHTML += `
        <div class="card mb-3" >
    <div class="row g-0">
    <div class="col-md-4">
        <img src="${product.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">price: R${product.price}</p>
        <input type="number" min=1 value=${product.QTY} id="updateCartQTY${i}" onchange="updateCart(${i})"/>
        <p>R${parseInt(product.QTY) * parseFloat(product.price)}</p>
        <button class="btn btn-danger" onclick="deleteCart(${i})">remove</button>
    </div>
    </div>
    </div>
</div>
        `;
    });

    document.querySelector("#cart").innerHTML += `
    <h1 class="total">your total is R${calculateTotal()}</h1>
    `
}
readCart(cart)

// delete from cart //

function deleteCart(i){
    cart.splice(i,1)
    localStorage.setItem("cart",JSON.stringify(cart));
    readCart(cart);
}

// update from cart //

function updateCart(i){
 let QTY =document.querySelector(`#updateCartQTY${i}`).value;

 cart[i] = {...cart[i],QTY}
 localStorage.setItem("cart",JSON.stringify(cart));
 readCart(cart);
}

// calculate the total //

function calculateTotal(){
    let total = 0;
    cart.forEach(product => {
        total =  total + product.price * product.QTY
    })
    return total.toFixed(2);
}

