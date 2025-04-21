// ARITHMETIC OPERATOR +, -, *, **, /, %

// var a = 10;
// var b = 5;

// console.log(a+b);

// console.log(`${a} + ${b} = ${a+b}`);
// console.log(`${a} - ${b} = ${a-b}`);
// console.log(`${a} * ${b} = ${a*b}`);
// console.log(`${a} / ${b} = ${a/b}`);
// console.log(`${a} % ${b} = ${a%b}`);
// console.log(`${a} ** ${b} = ${a**b}`);

// ASSIGNMENT OPERATOR +=, -=, *=, /=

// var a = 2;
// var b = 4;

// console.log(`a = ${a}, b = ${b}, a+=b = ${a+=b}`);
// console.log(`a = ${a}, b = ${b}, a-=b = ${a-=b}`);
// console.log(`a = ${a}, b = ${b}, a*=b = ${a*=b}`);
// console.log(`a = ${a}, b=${b}, a/=b =${a/=b}`);

// COMPARISON OPERATOR ==, !=, ===, !==

// ==, data type not check, value check

// var a = '8';
// var b = 8;

// console.log(a==b); // false

// var a = 8;
// var b = 8;

// console.log(a==b); // true

// var a = '4'
// var b = 4

// console.log(a==b);


// !=

// var a = '5';
// var b = 6;

// console.log(a!=b);

// === 

// value, data type 

// var a = '5';
// var b = '5';

// console.log(a === b);

// var a = '5';
// var b = 7;

// value, data type 

// console.log(a !== b);




function addFun(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = `Result = ${num1 + num2}`;
}