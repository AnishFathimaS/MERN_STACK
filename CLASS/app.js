// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr);

// html
// css
// bootstrap
// javascript

// MAP

// array_name.map((value, index, array) => {
//     console.log(value);
// })

// arr.map((a, b, c) => {
//     console.log(b)
// })

var json_obj = [
    {
        name : 'anu',
        age : 23,
        image : 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp'
    },
    {
        name : 'abi',
        age : 25,
        image : 'https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk='
    },
    {
        name : 'siva',
        age : 22,
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s'
    }
]

json_obj.map((value) => {
    document.getElementById('cont').innerHTML +=
    `<h1>${value.name}</h1>
    <p>${value.age}</p>
    <img src='${value.image}' alt='' height='300' width='400'/>
    `
})