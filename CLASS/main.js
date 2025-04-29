var myData = [];

const fetchData = async () => {
    var url = await fetch('https://jsonplaceholder.typicode.com/users');
    myData = await url.json()
    cardFun(myData)
}
fetchData()

const cardFun = (a) => {
    var myContent = '';
    a.map((value) => {
        myContent += 
        `
        <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <h3>Name: ${value.name} </h3>
                        <h3>Email: ${value.email} </h3>
                    </div>
                </div>
            </div>
        `
    })
    document.getElementById('card_row').innerHTML = myContent
}

const submitFun = (event) => {
    event.preventDefault()  
    var search = document.getElementById('userInput').value.toUpperCase(); 
    var filter = myData.filter((a) => a.name.toUpperCase().includes(search))
    cardFun(filter)
}