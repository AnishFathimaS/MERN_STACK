// FUNCTION

// SYNTAX

// function function_name(){
    // statement
// }
// function_name()

// function fun(){
//     console.log('hello')
// }
// fun()

// function fun(){
//     return 'hello'
// }
// console.log(fun()) 

// function fun(){
//     return 'hello'
// }
// alert(fun())

// function fun(name){
//     console.log(`My name is ${name}`)
// }
// fun('abinaya')

// my name is abinaya
// my age is 20

// function fun(age){
//     alert(`My age is ${age}`)
// }
// fun(20)

// function fun(name){
//     return `my name is ${name}`
// }
// console.log(fun('abi'))

// function fun(name, age){
    // console.log(`My name is ${name}`);
    // console.log(`My age is ${age}`);

    // console.log(`My name is ${name}, My age is ${age}`);
// }
// fun('abinaya', 20)
// fun(20, 'abinaya')

// function fun(name, age){
//     return `My name is ${name} My age is ${age}`
// }
// console.log(fun('anu', 22));

// function fun(name = 'abinaya'){
//     console.log(name)
// }
// fun()

// function fun(name = 'abinaya', age = 20){
    // console.log(name, age)
// }
// fun('anu', 25)

// function fun(name = 'anu', age='25'){
//     return `${name} ${age}`
// }
// console.log(fun())

// ARROW FUNCTION

// SYNTAX

// variable_type function_name = () => {
    // statement
// }
// function_name()

// const fun = () => {
//     console.log('hello');
// }
// fun()

// var fun = () => {
//     return 'helloooooo'
// }
// console.log(fun());

// let fun = (name) => {
//     console.log(name)
// }
// fun('abi')

// const fun = (name, age) => {
//     console.log(name , age);
//     console.log(name + ' ' + age);
// }
// fun('abi', 20)

// const fun = (name, email) => {
//     return `My name is ${name}, My email is ${email}`
// }
// document.write(`<center><h1>${fun('abinaya', 'abinaya@email.com')}</h1></center>`)

// const fun = (name = 'anu', address='trichy') => {
//     console.log(name, address);
// }
// fun()


// JSON - javascript object notation

// SYNTAX

// var json = [
//     {
//         name : 'abi',
//         age : 20,
//         address : 'trichy'
//     },
//     {
//         name : 'anu',
//         age : 24,
//         address : 'chennai'
//     },
//     {
//         name : 'hari',
//         age : 26,
//         address : 'salem'
//     }
// ]

// console.log(json);
// console.log(json[0]);
// console.log(json[0].name);
// console.log(json[2].address);

// async await function 

// async function fun(){
//     var url = await fetch('https://jsonplaceholder.typicode.com/users')
//     var data = await url.json();
//     console.log(data[0].name);
// }
// fun()

// var a = 10;
// var a = 20;
// console.log(a);

let a = 30;
let a = "high" // redeclare
// a = 'high' // update
console.log(a);

