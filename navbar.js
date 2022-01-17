let app = Vue.createApp( {
    template : `
    <nav class="navbar navbar-dark bg-dark">
    <li class="nav-item">
        <a class="btn btn-primary active" aria-current="page" href="./index.html">Home</a>
      </li>
      <li class="nav-item">
        <a
          class="btn btn-primary active position-relative"
          href=".//cart.html"
          >Cart
          
          <span
            id="badge"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          ></span
        ></a>
      </li>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        add a new product
      </button>
    
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">add a new product</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              TITLE <input type="text" id="update-title"/> <br>
              CATEGORY <select name="category" id="update-category"><br>
                <option value="select">-select one-</option><br>
            <option value="Laptops">laptops</option>
            <option value="Cellphone">cellphones</option>
            <option value="speakers">speakers</option>
            <option value="earpods">earpods</option>
          </select><br>
          PRICE<input type="text" id="update-price"/><br>
          IMG LINK<input type="text" id="update-img"/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onclick="createProducts()" data-bs-dismiss="modal" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  </nav>
    `
})

app.mount ("#navbar")
