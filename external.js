const all_products = [
    {
        id : 1,
        name : 'Product 1',
        price : 400,
        img : 'champs2.jpg',
    },
    {
        id : 2,
        name : 'Product 2',
        price : 500,
        img : 'champs2.jpg',
    },
    {
        id : 3,
        name : 'Product 3',
        price : 600,
        img : 'champs2.jpg',
    },
    {
        id : 4,
        name : 'Product 4',
        price : 700,
        img : 'champs2.jpg',
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
                <div class='col-lg-4 col-md-6'>
                    <div class='card'>
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
                    <img src="${product.img}" alt="">
                    <div class="card-body">
                        <h4>${product.name}</h4>
                        <p>${product.price}</p>
                        <button class='btn btn-primary' onclick='display_cart(${product.id})'>Add to Cart</button>
                    </div>
                </div>
            </div>
        `
    })
    document.getElementById('cardRow').innerHTML = product_list;
}
display_products()

var cart = [];

const display_cart = (productID) => {
    var products = all_products.find((a) => a.id === productID);
    var existing_product = cart.find((a) => a.id === productID);
    if(existing_product){
        existing_product.quantity++;
    }
    else{
        products.quantity = 1;
        cart.push(products)
    }
    cart_products(cart)
}

const cart_products = (products) => {
    var cart_list = ''
    products.map((value) => 
        cart_list += `
        <tr>
            <td>${value.name}</td>
            <td>${value.price}</td>
            <td>${value.quantity}</td>
            <td>${value.price * value.quantity}</td>
            <td><button class='btn btn-danger'>Remove</button></td>
        </tr>
        `
    )
    document.getElementById('cartRow').innerHTML = cart_list;
}

