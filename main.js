// VARIABLES

// var -> redeclare, update
// let -> not redeclare, update
// const -> not declare, not update

// variable_type variable_name = data;

// var

// re declare

// var a = 10; // declaration
// var a = 20; // re declare
// console.log(a)

// update

// var a = 10; // declaration
// a = 20; // update
// console.log(a)

// let

// not re declare

// let a = 10;
// let a = 20;
// console.log(a) // already declared

// update

// let a = 10;
// a = 20;
// console.log(a)

// const 

// re declare

// const a = 10;
// const a = 20;
// console.log(a) // already declared

// update

// const a = 10;
// a = 20;
// console.log(a) // assignment to constant variable

// variable_name

// abc 
// abc123
// abc_def
// abc_123
// firstName -> camel case

// 123
// 123abc
// abc def
// abc-def

// DATA TYPES

// NUMBER, STRING, BOOLEAN, OBJECT [ NULL ], FUNCTION, ARRAY, DATE

// NUMBER

// var num = 10;
// console.log(num)
// console.log(typeof(num))

// STRING 

// var text = "Hellooo";
// console.log(text)
// console.log(typeof(text))

// var a = '10';
// console.log(a)
// console.log(typeof(a));

// var b = 'Hello123';
// console.log(b);
// console.log(typeof(b));

// BOOLEAN ( true, false )

// var a = true;
// console.log(a)
// console.log(typeof(a))

// var a = false;
// console.log(a)
// console.log(typeof(a))

// NULL

// var a = null;
// console.log(a);
// console.log(typeof(a))

// UNDEFINED

// var a;
// console.log(a) // undefined

// console.log(b) // not defined ( error )

// FUNCTION*, OBJECT*, ARRAY*, DATE

// FUNCTION

// SYNTAX

// function function_name(){
    // statement
// }
// function_name()

// function fun(){
//     alert('Hello Function')
// }

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
//     age : 20,
//     place : 'trichy'
// }

// console.log(obj)
// console.log(obj.age);

// var details = {
//     student_name : 'anu',
//     tamil_mark : 90,
//     english : 70,
//     maths : 50,
// }

// console.log(details.student_name);
// console.log(details.tamil_mark);

// ARRAY - index, position starts with 0

// SYNTAX

// variable_type array_name = [ data, data, data ]

// var arr = [ 'html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);

// DATE

// jan - 0
// feb - 1
// march - 2
// april - 3

// sun = 0
// mon = 1
// tues = 2
// wed = 3

// var todayDate = new Date();
// console.log(todayDate);
// console.log(todayDate.getDate());
// console.log(todayDate.getMonth());
// console.log(todayDate.getDay());
// console.log(todayDate.getFullYear());