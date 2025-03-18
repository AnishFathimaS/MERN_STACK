const all_products = [
    {
        id : 1,
        name : 'Product 1',
        price : 400,
        img : 'img.jpg',
    },
    {
        id : 2,
        name : 'Product 2',
        price : 500,
        img : 'img.jpg',
    },
    {
        id : 3,
        name : 'Product 3',
        price : 600,
        img : 'img.jpg',
    },
    {
        id : 4,
        name : 'Product 4',
        price : 700,
        img : 'img.jpg',
    }
]

const searchProducts = () => {
    var searchList = document.getElementById('searchInput').value.toUpperCase();

    if(searchList.length === 0){
        document.getElementById('searchProducts').innerHTML= ''
    }
    else{
        var filterData = all_products.filter((product) => product.name.toUpperCase().includes(searchList) || product.price.toString().includes(searchList)); 

        var searchProducts = '';
        filterData.map((product) => {
            searchProducts += 
            `
                <div class='col-lg-3 col-md-6'>
                    <div class='card'>
                        <img src='${product.img}'>
                        <div class='card-body'>
                            <h3>${product.name}</h3>
                            <h3>${product.price}</h3>
                        </div>
                    </div>
                </div>
            `
        })
        document.getElementById('searchProducts').innerHTML = searchProducts || `<p class='text-center text-danger'>No Products Found</p>`;
    }
}
 
const display_products = () => {
    var product_list = '';

    all_products.map((product) => {
        product_list +=
        `
            <div class='col-lg-3 col-md-6'>
                <div class="card">
                    <div class='img-parent'>
                        <img src="${product.img}" alt=""  id='product_img' >
                    </div>
                    <div class="card-body">
                        <h4>${product.name}</h4>
                        <p>${product.price}</p>
                        <button class='btn btn-primary' onclick='add_to_cart(${product.id})'>Add to Cart</button>
                    </div>
                </div>
            </div>
        `
    })
    document.getElementById('cardRow').innerHTML = product_list;
}
display_products()

var cart = [];

var cartCount = 0;

const cartCountFun = () => {
    document.getElementById('cartCount').innerHTML = cartCount;
    document.getElementById('cartCount').style.display = (cartCount > 0) ? 'inline' : 'none'
}

const add_to_cart = (productID) => {
    var products = all_products.find((a) => a.id === productID);
    var existing_product = cart.find((a) => a.id === productID);
    if(existing_product){
        existing_product.quantity++;
    }
    else{
        products.quantity = 1;
        cart.push(products)
    }
    cartCount++;
    cartCountFun();
    display_cart(cart)
}

const display_cart = (products) => {
    var cart_list = ''
    products.map((value) => {
        cart_list += `
            <tr>
                <td>${value.name}</td>
                <td>${value.price}</td>
                <td>${value.quantity}</td>
                <td>${value.price * value.quantity}</td>
                <td><button class='btn btn-danger' onclick='remove_cart(${value.id})'>Remove</button></td>
            </tr>
        `
    })    
    document.getElementById('cartRow').innerHTML = cart_list
}
display_cart(cart)

const remove_cart = (productID) => {
    var products = all_products.find((a) => a.id === productID);
    if(products.quantity > 1){
        products.quantity--;
    }
    else{
        cart = cart.filter((a) => a.id !== productID);
    }
    cartCount--;
    cartCountFun()
    display_cart(cart)
}

