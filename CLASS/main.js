// TRY CATCH

// SYNTAX 

// function function_name(){
//     try{
//         // statement
//     }
//     catch(error){
//         // statement
//     }
// }

// function fun(){
//     try{
//         var a = 'hello';
//         console.log(a.toUpperCase())
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// fun()

// function fun(){
//     try{
//         var a = 345;
//         console.log(a.toUpperCase())
//     }
//     catch(error){
//         console.log(error)
//         console.log(error.name)
//         console.log(error.message)
//     }
// }
// fun() 

// try catch finally


// function fun(){
//     try{
//         var text = 345;
//         console.log(text.toUpperCase())
//     }
//     catch(error){
//         console.log(error)
//     }
//     finally{
//         console.log('Hellooo')
//     }
// }
// fun()

// function fun2(){
//     try{
//         var text = 'hello'
//         console.log(text.toUpperCase())
//     }
//     catch(error){
//         console.log(error)
//     }
//     finally{
//         console.log('helloooo')
//     }
// }
// fun2() 

// function fun(a, b){
//     try{
//         var result = a + c;
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//         console.log(error.name)
//         console.log(error.message)
//     }
//     finally{
//         console.log('Function is Working')
//     }
// }
// fun(3, 4)

// PROMISE

// SYNTAX

// function function_name(){
//     return new Promise((resolve, reject) => {
//         if{

//         }
//         else{

//         }
//     })
// }
// function_name().then(() =>  statement).catch(() => statement) 

// resolve => then 
// reject => catch 

// function fun(a){
//     return new Promise((resolve, reject) => {
//         if(a < 5){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }
// fun(8).then(() => console.log('True')).catch(() => console.log('False')) 

// function fun(){
//     return new Promise((resolve, reject) => {
//         var arr = [ 1, 2, 3, 4, 5 ]
//         if(arr.includes(8)){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }
// fun()
// .then(() => console.log('True'))
// .catch(() => console.log('False'))

// function fun(){
//     return ' Helloooo'
// }
// console.log(fun()) 


// function addEvent(){
//     alert('hi');
// }

// document.getElementById('add_btn').addEventListener('click', addEvent)

// function removeEvent(){
//     document.getElementById('add_btn').removeEventListener('click', addEvent)
// }

// document.getElementById('remove_btn').addEventListener('click', removeEvent)


function addFun(){
    document.body.style.backgroundColor = document.body.style.backgroundColor == 'white' ? 'lightblue' : 'white';
}

document.getElementById('add_btn').addEventListener('click', addFun)

function removeFun(){
    document.getElementById('add_btn').removeEventListener('click', addFun)
}


document.getElementById('remove_btn').addEventListener('click', removeFun)