// VARIABLES

// var, let, const

// var -> redeclare, update
// let -> not redeclare, update
// const -> not redeclare, not update

// variable_type variable_name = data;

// 3456789
// 1
// 1hello
// hello-world
// hello world

// hello1
// dfghj
// a
// helloWorld
// hello_world

// var re declare

// var abc = 10; //declaration
// var abc = 20; // re declare
// var abc = 30; // re declare
// console.log(abc)

// var update

// var abc = 10; // declaration
// abc = 20; // update
// console.log(abc); // 20

// let redeclare

// let num = 5;
// let num = 10;
// console.log(num);

// let update

// let num = 5;
// num = 10;
// console.log(num);

// const redeclare

// const num = 5;
// const num= 10;
// console.log(num);

// const num = 5;
// num = 10;
// console.log(num);

// DATATYPES

// NUMBER *,
// STRING *,
// BOOLEAN,
// NULL,
// UNDEFINED,
// OBJECT *,
// ARRAY *,
// FUNCTION *,
// DATE,

// NUMBER

// var a = 10;
// console.log(a);
// console.log(typeof(a))

// STRING

// var text = "Hello456789";
// console.log(text)
// console.log(typeof(text))

// var abc =  hello;
// console.log(abc)
// console.log(typeof(abc))

// var a_b = '20'
// console.log(a_b)
// console.log(typeof(a_b))

// BOOLEAN - ( true, false )

// var a = true
// console.log(a)
// console.log(typeof(a))

// var a = false
// console.log(a) // false
// console.log(typeof(a)) // boolean

// NULL

// var a = null;
// console.log(a);
// console.log(typeof(a))

// UNDEFINED

// var a ;
// console.log(a);

// NOT DEFINED

// console.log(b);

// {} object
// [] array

// OBJECT

// SYNTAX

// variable_type object_name = {
//     key : value,
//     key : value,
//     key : value,
//     key : value
// }

// var obj = {
//     name : 'abinaya',
//     place : 'trichy',
//     number : 234567878
// }

// console.log(obj)
// console.log(obj.name)
// console.log(obj.place)
// console.log(obj.number)
// console.log(typeof(obj.name))

// var details = {
//     name : 'abi',
//     age : 20,
//     place : 'trichy'
// }

// console.log(details.place)
// console.log(details.age)
// console.log(details.name)
// console.log(details)

// ARRAY

// SYNTAX

// variable_type array_name = [ data, data ];

// let arr = [ 1, 2, 3, 'hello' ];
// console.log(arr[0])
// console.log(arr[3]);

// let arr = ['abinaya', 20, 'trichy']
// console.log(arr[0], arr[1])

// index, position => starts with 0

// FUNCTION

// function funciton_name(){
// code statement
// }

// function fun(){
//     console.log('Hello')
// }
// fun()

// DATE

// sun = 0,
// mon = 1,
// tues = 2,
// wed = 3

// jan = 0,
// feb = 1,
// mar = 2,
// april = 3

// var todayDate = new Date();
// console.log(todayDate);
// console.log(todayDate.getDate());
// console.log(todayDate.getDay());
// console.log(todayDate.getMonth());
// console.log(todayDate.getFullYear());
// console.log(todayDate.getTime());

// STRING CONCATENATION

// var abc = 'Hello';
// var text = 'World';
// console.log(abc); //hello
// console.log(text); //world

// console.log(abc,text)
// console.log(abc+text)
// console.log(abc+ ' ' +text)

// var text = 'Hello'
// console.log(text, 'World')
// console.log(text + ' World')
// console.log(text , 'Javascript')    
// console.log(text , 25, 'Javascript')

// var text1 = 'Hello'
// var text2 = 'World'
// console.log(`${text1} Javascript ${text2}`)
// Hello Javascript World

// var arr = [ 'name', 'is', 'my' ];
// console.log(`${arr[2]} ${arr[0]} ${arr[1]} Abinaya`)

// STRING METHODS

// length, position, indexof, charAt, substr, includes, lowercase, uppercase, push, pop, shift, unshift, trim, replace

// LENGTH - starts with 1

// var text = 'Hello'
// console.log(text)
// console.log(text.length)

// var arr = ['html', 'css', 'bootstrap', 'Javssciprt']
// console.log(arr.length)

// POSITION, INDEX - starts with 0

// var text = 'Hello'
// console.log(text);
// console.log(text[1])

// var abc = ['html', 'css']
// console.log(abc[1]);

// INDEX OF

// var text = 'Hello';
// console.log(text)
// console.log(text.indexOf('l'))
// console.log(text.indexOf('e'))

// charAt

// var text = 'Hello';
// console.log(text);
// console.log(text[0]);
// console.log(text.charAt(0));
// console.log(text.charAt(1));
// console.log(text.charAt(2));
// console.log(text.charAt(3));
// console.log(text.charAt(4));

// substr ( start (position 0), length )

// var text ='Hello World'
// console.log(text.substr(6, 5))

// var text = 'HelloWorldText';
// console.log(text.substr(10, 4));

// var text = 'Computer Science Social'
// console.log(text.substr(9, 7))

// INCLUDES

// var text = 'hello'
// console.log(text.includes('a'))
// console.log(text.includes('e'))

// var arr = ['html', 'css','boostrap']
// console.log(arr.includes('css'))
// console.log(arr.includes('csgfdhf'))

// LOWERCASE

// var text = 'HELLO'
// console.log(text);
// console.log(text.toLowerCase());

// UPPERCASE

// var text = 'hello'
// console.log(text);
// console.log(text.toUpperCase());

// PUSH

// var arr = ['html', 'css', 'boostrap'];
// console.log(arr);
// console.log(arr.push('javascript'));
// console.log(arr)
// console.log(arr.push('react'));
// console.log(arr);

// POP

// var arr = ['html', 'css', 'bootstrap','javascript']
// console.log(arr)
// console.log(arr.pop()) 
// console.log(arr)
// console.log(arr.pop()) //boot
// console.log(arr.pop()) //css
// console.log(arr.pop()) //html
// console.log(arr);

// SHIFT 

// var arr = [ 'html', 'css', 'bootstrap', 'javascript']
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)

// UNSHIFT

// var arr = ['css', 'boostrap', 'javascript'];
// console.log(arr);
// console.log(arr.unshift('html'))
// console.log(arr)
// console.log(arr.unshift('abc'))
// console.log(arr)

// TRIM 

// var text = '        hello         world      ';
// console.log(text)
// console.log(text.trim());

// REPLACE 

// SYNTAX 

// text.replace('currentData', 'replaceData')

// var text = 'Hello World'
// console.log(text);
// console.log(text.replace('Hello', 'Javascript')) 



// document.getElementById('h1tag').innerHTML = 'Hi'

// document.getElementById('btn').innerHTML = 'Clicked'

// function fun(){
//     document.getElementById('btn').innerHTML = 'Clicked'
// }

// function hideFun(){
//     document.getElementById('imgID').src = ''
// }

// function showFun(){
//     document.getElementById('imgID').src = 'img1.jpg'
// }

// NUMBER METHODS

// toFixed(), Number(), toString(), isNaN(), isFinite(), parseInt(), parseFloat(), Math.sqrt(), Math.ceil(), Math.floor(), Math.random()

// toFixed() 

// var num = 10.56;
// console.log(num);
// console.log(num.toFixed())

// var num = 10.49;
// console.log(num);
// console.log(num.toFixed())

// Number 

// var a = 'abc';
// console.log(typeof(a));

// var b = Number(a);
// console.log(typeof(b));

// var b = '8';
// console.log(typeof(b))

// var convert_b = Number(b);
// console.log(typeof(convert_b))

// toString()

// var num = 10;
// console.log(typeof(num))

// var convert_num = num.toString();
// console.log(typeof(convert_num));

// isNaN -> is Not an Number (true, false)
// Number -> false, String -> True

// var a = 2;
// console.log(isNaN(a))

// var a = 'abc';
// console.log(isNaN(a))

// isFinite()
// Number -> True, String -> False 

// var a = 2;
// console.log(isFinite(a)); // true

// var b = 'abc'
// console.log(isFinite(b)) // false

// parseInt()

// datatype change, integer (whole number)

// var a = '15abc';
// console.log(a);
// console.log(typeof(a));

// var b = parseInt(a); 
// console.log(b);
// console.log(typeof(b))

// var a = '15.978abc';
// console.log(a); //15.978abc
// console.log(typeof(a)); //string

// var b = parseInt(a);
// console.log(b);
// console.log(typeof(b));

// parseFloat()

// datatype change, float numbers 

// var a = '123abc';
// console.log(a)
// console.log(typeof(a));

// var b = parseFloat(a);
// console.log(b);
// console.log(typeof(b));

// var a = '123.456abc';
// console.log(a)
// console.log(typeof(a));

// var b = parseFloat(a);
// console.log(b);
// console.log(typeof(b));

// Math.sqrt()

// var a = 49;
// console.log(Math.sqrt(a));

// Math.ceil()

// var a = 10.10;
// console.log(Math.ceil(a))

// Math.floor();

// var a = 15.34;
// console.log(Math.floor(a));

// var b = 16.1;
// console.log(Math.floor(b));

// Math.random() 

// var a = Math.floor(Math.random() * 5);
// console.log(a);

// function fun(){
//     var randomNum = Math.floor(Math.random() * 10);
//     document.getElementById('h1tag').innerHTML = `Your otp is : ${randomNum}`
// }

// OPERATORS

// ARITHIEMTIC OPERATOR - [ +, -, *, **, /, % ] 
// ASSIGNMENT OPERATOR - [ +=, -=, *=, /=] 
// COMPARISON OPERATOR - [ ==, !=, ===, !== ] 
// RELATIONAL OPERATOR - [ <, >, <=, >= ] 
// LOGICAL OPERATOR - [ &&, ||, ! ]  
// UNARY OPERATOR - [ POST INCREMENT, PRE INCREMENT, POST DECREMENT, PRE DECREMENT ] 
// TERNARY OPERATOR - [ (condition) ? true : false ] 

// ARITHIMETIC OPERATOR - [ +, -, *, **, /, % ] 

// var num1 = 10;
// var num2 = 5;
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)
// console.log(num1 ** num2) //10**5 

// 10 + 5 = 15

// console.log(num1 + num2)

// console.log(`${num1} + ${num2} = ${num1 + num2}`)

// function addFun(){
//     var num1 = Number(document.myform.input1.value);
//     var num2 = Number(document.myform.input2.value);
//     document.getElementById('answer').innerHTML = `Answer : ${num1 + num2}`
// }

// function subFun(){
//     var num1 = Number(document.myform.input1.value);
//     var num2 = Number(document.myform.input2.value);
//     var total = num1 - num2;
//     document.getElementById('answer').innerHTML = `Answer : ${total}`
// }

// ASSIGNMENT OPERATOR [ +=, -=, *=, /= ]

// var a = 10;
// var b = 20;
// console.log(a+=b);  // ( a = a + b)
// console.log(a)

// var a = 20;
// var b = 40;
// console.log(b-=a); // ( b = b - a)
// console.log(b)

// var a = 10;
// var b = 5;
// console.log(b*=a); // ( b = b * a )
// console.log(b)

// var a = 10;
// var b = 5;
// console.log(a/=b); // ( a = a / b )
// console.log(a)

// COMPARISON OPERATOR [ ==, !=, ===, !== ]

// var a = 10;
// var b = 20;
// console.log(a==b); // false

// var a = 6;
// var b = 6;
// console.log(a==b); // true

// var a = '8';
// var b = 8;
// console.log(a==b) // true

// var a = 8;
// var b = 10;
// console.log(a!=b); // true

// var a = 30;
// var b = 30;
// console.log(a!=b); // false

// var a = 10;
// var b = '20';
// console.log(a!=b);

// var a = 20;
// var b = 20;
// console.log(a===b) // true

// var a = '20';
// var b = 20;
// console.log(a===b); // false

// var a = 123;
// var b = '123';
// console.log(a===b); // false

// var a = '123';
// var b = '321';
// console.log(a===b); // false

// var a = 20;
// var b = 40;
// console.log(a!==b); // true

// var a = 20;
// var b ='40';
// console.log(a!==b); // true

// var a = 20;
// var b = '20';
// console.log(a!==b) // true

// RELATIONAL OPERATOR [ <, >, <=, >= ]

// var a = 5;
// var b = 4;
// console.log(a<b); // false
// console.log(a>b); // true

// var a = 10;
// var b = 3;
// console.log(b>a); // false
// console.log(a<b); // false
// console.log(a>b); // true

// var a = 6;
// var b = 6;
// console.log(a<b)
// console.log(a>b)

// var a = 5;
// var b = 5;
// console.log(a<=b); // true // a less than or equal than b
// console.log(a>=b); // true

// var a = 50;
// var b = 30;
// console.log(b<=a); // true
// console.log(a>=b); // true

// LOGICAL OPERATOR [ &&, ||, ! ]

// console.log(true && true) // true
// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false

// console.log( 8<10 && 5>3 ) // true && true = true
// console.log(7<3 && 8>4 ) // false && true = false
// console.log(9<5 && 7<5 ) // false && false = false
// console.log(6>3 && 3>6) // true && false = false

// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(false || false) // false

// console.log(5>9 || 8<4) // false || false = false
// console.log(9>4 || 4<3) // true || false = true
// console.log(8<4 || 9>2) // false || true = true
// console.log(9>3 || 3>2) // true || true = true

// console.log(!(true))
// console.log(!(false))

// console.log(!(4>6)); // true
// console.log(!(8>4)); // false

// POST INCREMENT 

// var a = 8;
// console.log(a++);  // 8 ( a + 1 )
// console.log(a++); // 9
// console.log(a); // 10

// PRE INCREMENT 

// var a = 10;
// console.log(++a); // 11
// console.log(++a); // 12
// console.log(a); // 12

// var a = 10;
// console.log(a++) // 10 ( 11 )
// console.log(++a) // 12 
// console.log(++a) // 13
// console.log(a++) // 13 ( 14 )
// console.log(a) // 14

// var num = 123;
// console.log(++num); // 124
// console.log(num); // 124
// console.log(num++) // 124
// console.log(++num) // 126
// console.log(num) // 126

// POST DECREMENT 

// var a = 5;
// console.log(a--); // 5
// console.log(a); // 4
// console.log(a--); // 4
// console.log(a) // 3

// PRE DECREMENT 

// var a = 10;
// console.log(--a); // 9
// console.log(--a); // 8
// console.log(a); // 8

// var a = 56;
// console.log(--a); // 55
// console.log(--a); // 54
// console.log(a); // 54
// console.log(a--); // 54
// console.log(a--); // 53
// console.log(a); // 52

// var a = 24;
// console.log(a++); // 24 ( 25 )
// console.log(a--); // 25 ( 24 )
// console.log(--a); // 23
// console.log(a--); // 23
// console.log(a); // 22
// console.log(a++); // 22 ( 23 )
// console.log(++a); // 24
// console.log(a--); // 24 ( 23 )
// console.log(--a); // 22 
// console.log(a); // 22

// TERNARY OPERATOR 

// (condition) ? true : false 

// console.log(( 8>5 ) ? 'True' : 'False') // True
// console.log(( 8>5 ) ? 'False' : 'True') // False

// console.log( ( 8<5 && 9>5 ) ? 'true' : 'false')

// var a = 50;
// console.log((a>=50) ? 'False' : 'True')

// var age = 15;
// console.log((age >= 18) ? 'Eligible to Vote' : 'Not Eligible')

// Function Syntax, 
// Function with console.log,
// Function with return statment,
// Single Parameter ( console.log, return )
// Mulitple Parameter ( console.log, return )
// Default Parameter

// Arrow Function Syntax
// Arrow Function ( console.log, return )
// Parameter ( console.log, return )
// Concise arrow function 

// Async await Function

// LOCAL VARIABLE
// GLOBAL VARIABLE 

// function function_name(){
    // code
// }
// function_name()

// function fun(){
//     alert('Hello Function')
// }
// fun()

// function fun(){
//     return ('Hello Function')
// }
// console.log(fun())

// Parameter 

// function fun(name){
//     console.log(`My name is ${name}`)
// }
// fun('Abinaya')

// function fun(name){
//     return (`My name is ${name}`)
// }
// console.log(fun('anu'))

// function fun(age){
//     console.log(`My age is ${age}`)
// }
// fun(8)

// function fun(age){
//     return (`My age is ${age}`)
// }
// console.log(fun(7))

// function fun(name, age){
//     console.log(`My name is ${name}`)
//     console.log(`My age is ${age}`)
// }
// fun('anu', 8)

// function fun(name, age){
//     return (`My name is ${name}, ${age}`)
// }
// alert(fun('anu', 8))

// function fun(name = 'abinaya'){
//     console.log(`My name is ${name}`)
// }
// fun()

// function fun(name = 'abinaya', age ){
//     console.log(`My name is ${name}, ${age}`)
// }
// fun( 'abinaya', 8)

// ARROW Function 

// variable_type function_name = () => {
    // code
// }

// function fun1(){
//     console.log('Hellooo')
// }
// fun1()

// const fun2 = () => {
//     console.log('Hello2')
// }
// fun2()

// const fun = () => {
//     return ('Hello Arrow Function')
// }
// console.log(fun())

// const fun = (name = 'hari', age = 8) => {
//     console.log(`My name is ${name}, ${age}`)
// }
// fun('anu')

// const fun1 = () => {
//     console.log('Helloo')
// }
// fun1()

// const fun2 = () => console.log('Hello');
// fun2()

// var obj = {
//     name : 'Abinaya',
//     age : 30,
//     place : 'trichy'
// }
// console.log(obj.place)

// JSON - Javascript Object Notation 

// var json_obj = [
//     {
//         key : value,
//         key : value,
//         key : value
//     },
//     {
//         key : value,
//         key : value,
//         key : value
//     },
//     {
//         key : value,
//         key : value,
//         key : value
//     }
// ]

// var json_obj = [
//     {
//         name : 'abi',
//         age : 10,
//         place : 'trichy'
//     },
//     {
//         name : 'anu',
//         age : 20,
//         place : 'chennai'
//     },
//     {
//         name : 'hari',
//         age : 40,
//         plaace : 'madurai'
//     }
// ]

// console.log(json_obj)
// console.log(json_obj[0])
// console.log(json_obj[0].place)
// console.log(json_obj[1])
// console.log(json_obj[2])
// console.log(json_obj[2].age)

// async await function 

// async function fun(){
//     var url = await fetch('https://jsonplaceholder.typicode.com/users')
//     var data = await url.json()
//     console.log(data[0].name)
//     console.log(data[0].email)
// }
// fun()

// var func = async () => {
//     var url = await fetch('https://jsonplaceholder.typicode.com/posts')
//     var data = await url.json()
//     console.log(data[0].title)
//     console.log(data[6].title)
// }
// func()

// LOCAL VARIABLE

// function fun(){
//     var a = 10;
//     console.log(a) // 10
// }
// fun()

// console.log(a) // a is not defined

// GLOBAL VARIBALE 

// var a = 20;

// function fun(){
//     console.log(a) // 20
// }
// fun()

// console.log(a) // 20

// CONDTIONAL STATEMENT 

// IF 

// if(condition){
    // statement
// }

// if(8<3){
//     console.log('True')
// }

// if(8>4 && 4<3){ // true && false
//     console.log('True')
// }

// if(6>4 || 5<3){ // True || False
//     console.log('True')
// }

// IF ELSE 

// if(condition){
    // statement
// }
// else{
    // statement
// }

// if(8<5){
//     console.log('True')
//     console.log('True')
//     console.log('True')
//     console.log('True')
//     console.log('True')
// }
// else{
//     console.log('False')
// }

// var age = 18;

// if(age >= 18){
//     console.log('Eligible to Vote')
// }
// else{
//     console.log('Not Eligible to vote')
// }

// console.log((age >= 18) ? 'Eligible to vote' : 'Not Eligible to Vote')

// var age = prompt('Enter your age');

// if(age >= 18){
//     console.log('Eligible to vote')
// }
// else{
//     console.log('Not Eligible to vote')
// }

// var num  = prompt('Enter a Number');

// if(num % 2 == 0){
//     console.log('Even Number')
// }
// else{
//     console.log('Odd Number')
// }

// var count = document.getElementById('count').innerHTML

// function addFun(){
//     if(count < 10){
//         count = Number(count + 1)
//         document.getElementById('count').innerHTML = count
//     }
// }

// function removeFun(){
//     if(count > 0){
//         count = --count;
//         document.getElementById('count').innerHTML = count
//     }
// }