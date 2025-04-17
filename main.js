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

// STRING METHODS 

// length, position, charAt, indexOf, lowercase, uppercase, substr, includes, trim, replace, push, pop, shift, unshift

// length - starts with 1

// var a = 'hello';
// console.log(a);
// console.log(a.length);

// var array = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(array);
// console.log(array.length);

// position - starts with 0

// var a = 'hello';
// console.log(a[0]);
// console.log(a[4]);

// var text = 'javascript';
// console.log(text[4]);

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ];
// console.log(arr[1]);

// charAt

// var a = 'hello';
// console.log(a);
// console.log(a.charAt(4)); // o

// indexOf

// var a = 'hello';
// console.log(a);
// console.log(a.indexOf('e'));

// lowercase

// var text = 'HELLO';
// console.log(text);
// console.log(text.toLowerCase());

// uppercase

// var text = 'hello';
// console.log(text);
// console.log(text.toUpperCase());

// substr(position, length)

// var text = 'helloworld';
// console.log(text);
// console.log(text.substr(0, 5));
// console.log(text.substr(5, 5));

// var text = 'javascript';
// console.log(text);
// console.log(text.substr(0, 4));
// console.log(text.substr(4, 6));

// includes

// var a = 'hello'
// console.log(a.includes('h')); // true
// console.log(a.includes('a')); // false

// trim

// var a = '      Hello      '
// console.log(a);
// console.log(a.trim());

// var a = '     Hello      World      '
// console.log(a);
// console.log(a.trim());

// replace (currentData, newData)

// var a = 'hello world';
// console.log(a);
// console.log(a.replace('world', 'javascript'));

// push

// var arr = ['html', 'css', 'bootstrap'];
// console.log(arr);
// console.log(arr.push('javascript'));
// console.log(arr);

// pop

// var arr = ['html', 'css', 'bootstrap', 'javascript']
// console.log(arr); // 4
// console.log(arr.pop()); // javascript
// console.log(arr);  // 3

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr.push('abc')); // html, css, bootstrap, javascript, abc
// console.log(arr.pop()); // html, css, bootstrap, javascript,
// console.log(arr.pop()); // html, css, bootstrap
// console.log(arr.push('xyz')); // html, css, bootstrap, xyz
// console.log(arr.push('abc')); // html, css, bootstrap, xyz, abc
// console.log(arr); // html css bootstrap xyz abc

// shift

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// unshift

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);
// console.log(arr.unshift('abc'));
// console.log(arr);

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr.unshift('hello')); // 'hello', 'html', 'css', 'bootstrap', 'javascript'
// console.log(arr.unshift('abc')); // 'abc', 'hello', 'html', 'css', 'bootstrap', 'javascript'
// console.log(arr.shift()); // 'hello', 'html', 'css', 'bootstrap', 'javascript'
// console.log(arr.shift()); // 'html', 'css', 'bootstrap', 'javascript'
// console.log(arr.unshift('hello')); // 'hello', 'html', 'css', 'bootstrap', 'javascript'
// console.log(arr.shift()); // 'html', 'css', 'bootstrap', 'javascript'
// console.log(arr);

// var arr = ['html', 'css', 'bootstrap']
// console.log(arr.push('java'));
// console.log(arr.push('abc'));
// console.log(arr.unshift('xyz'));
// console.log(arr.pop());
// console.log(arr.unshift('hello'));
// console.log(arr.shift());
// console.log(arr.push('hi'));
// console.log(arr.shift());
// console.log(arr.pop());
// console.log(arr); // html, css, bootstrap, java