var all_products = [
    { 
        id: 1, 
        img : 'img1.jpg', 
        name: "Product 1", 
        price: 100,
    },
    { 
        id: 2, 
        img : 'img1.jpg', 
        name: "Product 2", 
        price: 200 
    },
    { 
        id: 3, 
        img : 'img1.jpg', 
        name: "Product 3", 
        price: 300 
    },
    { 
        id: 4, 
        img : 'img1.jpg', 
        name: "Product 4", 
        price: 400 
    },
    { 
        id: 5, 
        img : 'img1.jpg', 
        name: "Product 5", 
        price: 500 
    },
    { 
        id: 6, 
        img : 'img1.jpg', 
        name: "Product 6", 
        price: 600 
    },
    { 
        id: 7, 
        img : 'img1.jpg', 
        name: "Product 7", 
        price: 700 
    },
    { 
        id: 8, 
        img : 'img1.jpg', 
        name: "Product 8", 
        price: 800 
    }
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
                    <button class='btn btn-primary' onclick='addToCart(${product.id})'>Add to Cart</button>
                    <br>
                    <button class='mt-3 btn btn-primary'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    `
    })
    document.getElementById('cardRow').innerHTML = product_list;
}
display_data();

var cart = [];
var totalAmt = 0;
var cartCount = 0;

const addToCart = (productID) => {
    var products = all_products.find((a) => a.id === productID);

    var existing_product = cart.find((a) => a.id === productID);

    if(existing_product){
        products.quantity++;
    }
    else{
        products.quantity = 1
        cart.push(products);
    }

    display_cart(cart)

    totalAmt = totalAmt + products.price;
    document.getElementById('totalAmt').innerHTML = ` Price : ${totalAmt}`

}

const display_cart = (cart_products) => {
    var cart_list = '';
    cart_products.map((value) => {
        cart_list += 
        `
            <tr>
                <td>${value.name}</td>
                <td>${value.price}</td>
                <td>${value.quantity}</td>
                <td>${value.price * value.quantity}</td>
                <td><button class='btn btn-danger' onclick='removeFromCart(${value.id})'>Remove</button></td>
            </tr>
        `
    })
    document.getElementById('cartRow').innerHTML = cart_list
}

const removeFromCart = (productID) => {

    var products = cart.find((a) => a.id === productID);

    if(products.quantity > 1){
        products.quantity--;
        totalAmt = totalAmt - products.price;
    }
    else{
        totalAmt = totalAmt - products.price * products.quantity
        cart = cart.filter((a) => a.id !== productID)
    }

    document.getElementById('totalAmt').innerHTML = `Total : ${totalAmt}`;
    display_cart(cart)
    
} 