// TO FIXED 

// var num = 10.456;
// console.log(num);
// console.log(num.toFixed())

// var num = 10.578;
// console.log(num);
// console.log(num.toFixed())

// TO STRING ( number to string )

// var a = 8;
// console.log(typeof(a));

// var convert_a = a.toString();
// console.log(typeof(convert_a));

// Number() ( string to number )

// var a = 'abc';
// console.log(typeof(a));

// var convert_a = Number(a);
// console.log(typeof(convert_a));

// var a = '123'
// console.log(typeof(a));

// var convert_a = Number(a);
// console.log(typeof(convert_a));

// isNaN() -> is Not a Number  ( string - true, number - false )

// var a = 'abc';
// console.log(isNaN(a));

// var b = 12;
// console.log(isNaN(b));

// isFinite() ( string - false, number - true )

// var a = 'abc';
// console.log(isFinite(a));

// var b = 678;
// console.log(isFinite(b));

// var c = 'abc123';
// console.log(isFinite(c));

// parseInt

// string remove 
// point value remove 
// datatype change

// var a = '123.456abc';
// console.log(a); // 123.456abc
// console.log(typeof(a)); // string

// var convert_a = parseInt(a);
// console.log(convert_a); // 123
// console.log(typeof(convert_a)); // number

// parseFloat

// string remove
// datatype change

// var b = '123.456abc'
// console.log(b);
// console.log(typeof(b));

// var convert_b = parseFloat(b);
// console.log(convert_b);
// console.log(typeof(convert_b));

// Math.sqrt

// var a = 81;
// console.log(a);
// console.log(Math.sqrt(a));

// var b = 36;
// console.log(b);
// console.log(Math.sqrt(b));

// Math.ceil

// var num = 6.45;
// console.log(num.toFixed()); // 1 to 4 ( 6 ) above 5 ( 7 )

// var a = 134.734;
// console.log(a);
// console.log(a.toFixed()); // 135
// console.log(Math.ceil(a)); // 135

// Math.floor 

// var a = 12.45;
// var a = 12.9345675;
// console.log(a);
// console.log(Math.floor(a));

// Math.random

// var a = Math.floor(Math.random() * 100); // ( 0 to 99 )
// console.log(a);

// function fun(){
//     var randomNum = Math.floor(Math.random() * 100)
//     // console.log(randomNum);
//     document.getElementById("value").innerHTML = randomNum
// }