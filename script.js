let products = JSON.parse(localStorage.getItem("products"))
? JSON.parse(localStorage.getItem("products"))
: [

{
    title:"Lenovo Legion Y740 i7 8750 16GB 1TB 256GB 2060 6GB Gaming Laptop",
    category:"Laptops",
    price:"30999",
    img:"https://i.postimg.cc/MHyqNJpd/laptop1.jpg",
},

{
    title:"Apple iPhone 13 Pro Max 256GB Sierra Blue",
    category:"Cellphone",
    price:"28499",
    img:"https://i.postimg.cc/ZRLBBmbg/product-2.jpg",
},

{
    title:"JBL PartyBox 1000 Bluetooth Speaker with Light Effects Black",
    category:"speakers",
    price:" 19499",
    img:"https://i.postimg.cc/8cg0Pqkj/58134694-1-zoom.jpg",
},

{
    title:"Samsung Galaxy Buds Live",
    category:"earpods",
    price:" 2999",
    img:"https://i.postimg.cc/63M89Nfh/486x486.webp",
}
]
let cart = JSON.parse(localStorage.getItem("cart"))
? JSON.parse(localStorage.getItem("cart")) :[];
//  read //

function readProducts(products) {
    document.querySelector("#products").innerHTML = "";
    products.forEach((product, i) => {
      document.querySelector("#products").innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="${product.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${ product.title }</h4>
    <h5>${product.category}</h5>
    <p class="card-text">${product.price}</p>
    <div>
    <label class="form-label">Quantity:</label>
    <input type="number" min=1 value=1 id="addQTY${i}"/>
    </div>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update-modal${i}" >update</button>
    <button class="btn btn-danger" onclick="deleteProducts(${i})" >delete</button>
    <button class="btn btn-danger" onclick="addToCart(${i})" >add to cart</button>
  </div>
</div>
    <div class="modal fade" id="update-modal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">update a product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
      TITLE<input type="text" id="update-title${i}"/> <br>
      CATEGORY<select name="category" id="update-category${i}"><br>
          <option value="select">-select one-</option><br>
      <option value="laptops">laptops</option>
      <option value="cellphones">cellphones</option>
      <option value="speakers">speakers</option>
      <option value="earpods">earpods</option>
    </select><br>
    PRICE<input type="text" id="update-price${i}" value=""/><br>
    IMG LINK<input type="text" id="update-img${i}" value=""/><br>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="updateProducts(${i})" data-bs-toggle="modal" data-bs-target="#update-modal${i}">Save changes</button>
        </div>
      </div>
    </div>
    
  </div>
    `;
    });
  };
  readProducts(products);

  //create//

function createProducts(){
    let title = document.querySelector(`#update-title`).value;
    let category = document.querySelector(`#update-category`).value;
    let price = document.querySelector(`#update-price`).value;
    let img = document.querySelector(`#update-img`).value;
    try {
      if (!title || !price ||!img) throw new Error("No product to add !!!");
      products.push({
          title,
          category,
          price,
          img,
      });
      localStorage.setItem("products", JSON.stringify(products));
      readProducts(products);
      document.querySelector("#products").value = "";
    } catch (err) {
      alert(err);
    }
  }

  //delete//

function deleteProducts(i) {
    products.splice(i, 1);
    localStorage.setItem("#products", JSON.stringify(products));
    readProducts(products);
  }
  
  //update//

function updateProducts(i) {
  let title = document.querySelector(`#update-title${i}`).value;
  let category = document.querySelector(`#update-category${i}`).value;
  let price = document.querySelector(`#update-price${i}`).value;
  let img = document.querySelector(`#update-img${i}`).value;
    try {
      if (!title || !price || !img) throw new Error("please enter all fields to update!!!");
      products[i] = {
        title,
        category,
        price,
        img,
      };
      localStorage.setItem("products", JSON.stringify(products));
      readProducts(products);
    } catch (err) {
      alert(err);
    }
  }
  //  add to cart //
  
  function addToCart(i){
    let QTY = document.querySelector(`#addQTY${i}`).value;
    let added = false;
    cart.forEach(product => {
      if(product.title == products[i].title){
        product.QTY = parseInt(product.QTY) + parseInt(QTY)
        added = true
        localStorage.setItem("cart",JSON.stringify(cart));
      }
    })
    if (!added){
      cart.push({...products[i] ,QTY});
      localStorage.setItem("cart",JSON.stringify(cart));
    }
    
  }
  //  sort by category //
   function categorysort(){
     let category =document.querySelector("#categorysort").value;
      
     if(category=="all"){
       readProducts(products);
       return;
     }

     let filteredproducts=products.filter(product => {
       return product.category == category
     })
     readProducts(filteredproducts);
   }


  //  sort by price //

  function pricesort(){
    let direction = document.querySelector("#pricesort").value
    
    let sortedProducts = products.sort((a,b)=>a.price - b.price);

    console.log(sortedProducts);
    
    if(direction == "descending") sortedProducts.reverse();
    readProducts(sortedProducts);
  }
  //  sort by name //

  function Sortname(){
    let direction = document.querySelector("#Sortname").value;

    let sortedProducts = products.sort((a,b)=> {
      if (a.title.toLowerCase()<b.title.toLowerCase()){
        return -1 ;
      }
      if (a.title.toLowerCase()> b.title.toLowerCase()){
        return 1 ;
      }
      return 0 ;
    });
    if (direction == "descending") sortedProducts.reverse();
    console.log(sortedProducts);
    readProducts(products);
    
  }