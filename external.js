const all_products = [
    {
        id : 1,
        name : 'Product 1',
        price : 400,
        img : 'image.jpg',
        desc : 'lkjhgfdsasdfghj'
    },
    {
        id : 2,
        name : 'Product 2',
        price : 500,
    },
    {
        id : 3,
        name : 'Product 3',
        price : 600,
    },
    {
        id : 4,
        name : 'Product 4',
        price : 700,
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
