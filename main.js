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

// var abc = [
//     {
//         name : 'Abinaya',
//         age : 20,
//         place : 'Trichy'
//     },
//     {
//         name : 'Anu',
//         age : 23,
//         place : 'Chennai'
//     },
//     {
//         name : 'Hari',
//         age : 25,
//         place : 'Madurai'
//     },
// ]

// console.log(abc[2].place)




// async function fun(){
//     var url = await fetch('https://jsonplaceholder.typicode.com/users')
//     var data = await url.json()
//     console.log(data)
// }
// fun()


// async function fun(){
//     var url = await fetch('https://jsonplaceholder.typicode.com/posts')
//     var data = await url.json();
//     console.log(data[5].title);
// }
// fun()


// var count = document.getElementById('num').innerHTML;

// function addFun(){
//     if(count < 10){
//         count = Number(count + 1);
//         document.getElementById('num').innerHTML= count
//         document.getElementById('name').innerHTML = 
//     }
//     else{
//         document.getElementById('name').innerHTML = 'You Reached your maximum Limit'
//     }
// }

// function removeFun(){
//     if(count > 0){
//         count = Number(count - 1);
//         document.getElementById('num').innerHTML= count;
//         document.getElementById('name').innerHTML = ''
//     }
//     else{
//         document.getElementById('name').innerHTML = 'You Reached your minimum Limit'
//     }
// }



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

// let a = 20;

// console.log(a)

// function fun(){
//     console.log(a)
// }
// fun()

// console.log(a)

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

// if(8<6){
//     console.log('True')
// }











// if(8<3){
//     console.log('True')
// }

// if(8>4 && 4<3){ // true && false
//     console.log('True')
// }
// else{
//     console.log('False')
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

// if(8>5){
//     console.log('True')
// }
// else{
//     console.log('False')
// }

// var age = 12;

// if(age >= 18){ //  12 >= 18
//     console.log('Eligible to Vote')
// }
// else{
//     console.log('Not Eligible to vote')
// }

// console.log((age >= 18) ? 'Eligible to vote' : 'Not Eligible to Vote')

// var age = prompt('Enter your age');


// function fun(){
//     // var age = document.getElementById('num1').value;

//     var age = document.myform.num1.value;
//     if(age >= 18){
//         document.getElementById('eligible').innerHTML = 'Eligible to vote'
//     }
//     else{
//         document.getElementById('eligible').innerHTML = 'Not Eligible to vote'
//     }
// }


// var num = 4;

// if(num % 2 == 0){ // 4 % 2 == 0 
//     console.log('Even')
// }
// else{
//     console.log('Odd')
// }

// var num  =  prompt('Enter a Number');

// if(num % 2 == 0){
//     console.log('Even Number')
// }
// else{
//     console.log('Odd Number')
// }

// var count = document.getElementById('num').innerHTML

// count = 0

// function addFun(){
//     // var count  = 1;
//     if(count < 10){
//         count = Number(count + 1) // 0 + 1 = 1
//         document.getElementById('num').innerHTML = count
//     }

// }


// function removeFun(){
//     if(count > 0){
//         count = Number(count - 1)
//         document.getElementById('num').innerHTML = count
//     }
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

// IF
// IF ELSE
// ELSE IF 
// NESTED IF

// SYNTAX 

// if(condition){
//     // statement
// }
// else if(condition){
//     // statement
// }
// else if(condition){
//     // statement
// }
// else if(condition){
//     // statement
// }
// else{
//     // statement
// }

// var mark = 30;

// if(mark >= 90){ // 70 > 90
//     console.log('Grade A')
// }
// else if(mark >= 70){ // 70 > 70
//     console.log('Grade B')
// }
// else if(mark >= 50){ // 70 > 50
//     console.log('Grade C')
// }
// else if(mark >= 30){ // 35 > 30
//     console.log('Grade D')
// }
// else{
//     console.log('Fail')
// }

// age = below 18 => child, greater than 18 => adult, greater than 30 => men, greater than 45 => senior 

// var age = 15;

// if(age >= 45 ){
//     console.log('Senior')
// }
// else if(age >= 30){
//     console.log('Men');
// }
// else if(age >= 18){
//     console.log('Adult')
// }
// else{
//     console.log('Child')
// }

// var num = 'abc';

// if(num % 2 == 0){
//     console.log('Even')
// }
// else{
//     console.log('Odd')
// }

// var num = 5;

// if(isNaN(num)){
//     console.log('Please Enter a Number')
// }
// else{
//     if(num % 2 == 0){
//         console.log('Even');
//     }
//     else{
//         console.log('Odd');
//     }
// }

// ELSE IF 

// if(condition){
//     // statement
// }
// else if(condition){
//     // statement
// }
// else if(condition){
//     // statement
// }
// else if(condition){
//     // statement
// }
// else{
//     // statement
// }

// var mark = 80;

// if(mark >= 90){
//     console.log('Grade A')
// }
// else if(mark >=70){
//     console.log('Grade B')
// }
// else if(mark >= 50){
//     console.log('Grade C')
// }
// else if(mark >= 30){
//     console.log('Grade D');
// }
// else{
//     console.log('Fail')
// }

// function fun(){
//    var num = document.getElementById('inputBox').value;

//     if(num % 2 == 0){
//        document.getElementById('value').innerHTML= `${num} is Even`
//     }
//     else{
//         document.getElementById('value').innerHTML= `${num} is Odd`
//     }
// }

// age = greater than 45 => senior 
// greater than 30 => men
// greater than 18 => adult 
// below => child 

// var age = 20;

// if(age >= 45){
//     console.log('Senior')
// }
// else if(age >= 30){
//     console.log('Men')
// }
// else if(age >= 18){
//     console.log('Adult')
// }
// else{
//     console.log('Child')
// }

// var a = 'abc';

// if(a % 2 == 0){
//     console.log('Even')
// }
// else{
//     console.log('Odd')
// }

// var a = 'abc';

// if(isNaN(a)){
//     console.log('Please Enter a Number')
// }
// else{
//     if(a % 2 == 0){
//         console.log('Even')
//     }
//     else{
//         console.log('Odd')
//     }
// }

// var a = 'abc';

// if(!isNaN(a)){
//     if(a % 2 == 0){
//         console.log('Even')
//     }
//     else{
//         console.log('Odd')
//     }
// }
// else{
//     console.log('Please Enter a Number')
// }

// var a = 8;

// if(isFinite(a)){
//     if(a % 2 == 0){
//         console.log('Even')
//     }
//     else{
//         console.log('Odd')
//     }
// }
// else{
//     console.log('Please Enter a Number')
// }

// var mark = 'abc';

// if(isNaN(mark)){
//     console.log('Please Enter Your Mark')
// }
// else{
//     if(mark >= 90){
//         console.log('Grade A')
//     }
//     else if(mark >= 70){
//         console.log('Grade B')
//     }
//     else if(mark >= 50){
//         console.log('Grade C')
//     }
//     else if(mark >= 30){
//         console.log('Grade D')
//     }
//     else{
//         console.log('Fail')
//     }
// }