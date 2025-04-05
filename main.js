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
// console.log(arr[3]);

// let arr = ['abinaya', 20, 'trichy']
// console.log(arr[0], arr[1])

// index, position => starts with 0

// FUNCTION

// function funciton_name(){
// code statement
// }

// function fun(){
// console.log('Hello')
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
// console.log(todayDate.get)

// STRING CONCATENATION

// const abc = 'Hello';
// const text = 'World';
// console.log(abc ); //hello
// console.log(text); //world

// console.log(text , abc);
// console.log(text + " " + abc);

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
// console.log(`${arr[2]} ${arr[0]} ${arr[1]} Abinaya `)

// STRING METHODS

// length, position, indexof, charAt, substr, includes, lowercase, uppercase, push, pop, shift, unshift, trim, replace

// LENGTH - starts with 1

// var text = 'Hello'
// console.log(text)
// console.log(text.length)

// var arr = ['html', 'css', 'bootstrap', 'Javssciprt']
// console.log(arr)
// console.log(arr[0])

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

// charAt

// var text = 'Hello';
// console.log(text);
// console.log(text[0]);
// console.log(text.charAt(0));
// console.log(text.charAt(1));
// console.log(text.charAt(2));
// console.log(text.charAt(3));
// console.log(text.charAt(4));

// substr ( start, length )

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
// console.log(arr.push('react'));
// console.log(arr);

// POP

// var arr = ['html', 'css', 'bootstrap','javascript']
// console.log(arr.pop()) //javs
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
// console.log(arr.unshift('abc'))
// console.log(arr)

// TRIM 

// var text = '        hello           world        ';
// console.log(text)
// console.log(text.trim());

// REPLACE 

// SYNTAX 

// text.replace('currentData', 'replaceData')

// var text = 'Hello World'
// console.log(text);
// console.log(text.replace('World', 'Javascript')) 

// document.getElementById('h1tag').innerHTML='Hi'

// document.getElementById('btn').innerHTML='Clicked'

// function fun(){
//     document.getElementById('h1tag').innerHTML = 'Hi'
// }

// function hide(){
//     document.getElementById('h1tag').innerHTML = ''
// }

// function show(){
//     document.getElementById('h1tag').innerHTML = 'Hello'
// }

// function hide(){
//     document.getElementById('imgTag').src = ''
// }

// function show(){
//     document.getElementById('imgTag').src = 'img1.jpg'
// }

// NUMBER METHODS

// toFixed(), Number(), toString(), isNaN(), isFinite(), parseInt(), parseFloat(), Math.sqrt(), Math.ceil(), Math.floor(), Math.random()

// toFixed() 

// var num = 10.567;
// console.log(num);
// console.log(num.toFixed())

// var num = 6.967;
// console.log(num);
// console.log(num.toFixed())

// Number 

// var num = 'abc';
// console.log(typeof(num));

// var convert_num = Number(num);
// console.log(typeof(convert_num));

// toString()

// var num = 10;
// console.log(typeof(num))

// var convert_num = num.toString();
// console.log(typeof(convert_num));