var all_products = [
    { id: 1, img : '../../img.jpg', name: "Product 1", price: 100 },
    { id: 2, img : '../../img.jpg', name: "Product 2", price: 200 },
    { id: 3, img : '../../img.jpg', name: "Product 3", price: 300 },
    { id: 4, img : '../../img.jpg', name: "Product 4", price: 400 }
];

const searchProducts = () => {
    var searchInput = document.getElementById('searchInput').value.toUpperCase();

    if(searchInput.length === 0){
        document.getElementById('searchProducts').innerHTML = ''
    }
    else{
        var filterData = all_products.filter((data) => data.name.toUpperCase().includes(searchInput));
        var searchList = '';
        filterData.map((product) => {
        searchList += 
        `
            <div class='col-lg-3 col-md-6'>
                <div class='card mb-5'>
                    <img src='${product.img}' />
                    <div class='card-body'>
                        <h3>${product.name}</h3>
                        <h3>${product.price}</h3>
                    </div>
                </div>
            </div>
        `
        })

        document.getElementById('searchProducts').innerHTML = searchList || `<p class='text-center text-danger'> No Products Found <p>`
    }
}

const display_data = () => {
    var product_list = '';
    all_products.map((product) => {
    product_list += 
    `
        <div class="col-lg-3 col-md-6">
            <div class="card mb-5">
                <img src=${product.img} alt='' />
                <div class="card-body">
                    <h3>${product.name}</h3>
                    <h3>${product.price}</h3>
                    <button class='btn btn-primary' onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `
    })
    document.getElementById('cardRow').innerHTML = product_list;
}
display_data();

var cart = [];
var cartCount = 0;
var totalAmt = 0;

const cartCountFun = () => {
    document.getElementById('cartCount').innerHTML = cartCount;
    document.getElementById('cartCount').style.display = cartCount > 0 ? 'inline-block' : 'none';
};


const addToCart = (productID) => {
    var products = all_products.find((a) => a.id === productID);
    var existing_product = cart.find((a) => a.id === productID);
    if(existing_product){
        existing_product.quantity++;
    }
    else{
        products.quantity = 1;
        cart.push(products)
    }
    display_cart(cart);
    cartCount++;
    cartCountFun();
    totalAmt = totalAmt + products.price;
    document.getElementById('totalamt').innerHTML = `Total : ${totalAmt}`
}

const display_cart = (products) => {
    let cart_list = '';

    if (products.length === 0) {
        cart_list = `
            <tr>
                <td colspan="5" class="text-center text-danger">Cart Empty</td>
            </tr>
        `;
    } else {
        products.map((product) => {
            cart_list += `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.quantity}</td>
                    <td>${product.price * product.quantity}</td>
                    <td>
                        <button class='btn btn-danger' onclick='removeFromCart(${product.id})'>Remove</button>
                    </td>
                </tr>
                
            `;
        });
    }

    document.getElementById('cartRow').innerHTML = cart_list;
};
display_cart(cart);

const removeFromCart = (productID) => {
    var product = all_products.find(a => a.id === productID)      
    if(product.quantity > 1){
        product.quantity--;
    }
    else{
        cart = cart.filter(product => product.id !== productID)
    }
    display_cart(cart)
    cartCount--;
    cartCountFun()
}

