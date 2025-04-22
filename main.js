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

// function addFun(){
//     var num1 = Number(document.getElementById('num1').value);
//     var num2 = Number(document.getElementById('num2').value);
//     document.getElementById('result').innerHTML = `Result = ${num1 + num2}`;
// }

// RELATIONAL OPERATOR <, >, <=, >=

// var a = 10;
// var b = 5;

// console.log(a<=b); // 10 < 5

// var a = 20;
// var b = 10;
// console.log(a<b); // false

// var a = 5;
// var b = 3;
// console.log(a>b); // true

// var a = 8;
// var b = 5;
// console.log(a>=b); // true

// var a = 10;
// var b = 20;
// console.log(a<=b); // true

// var a = 42;
// var b = 42;
// console.log(a<=b); // true

// LOGICAL OPERATOR &&, ||, !

// AND &&

// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// console.log( 4<6 && 8>=8 ) // true && true = true
// console.log( 6>3 && 7<3 ); // true && false = false
// console.log( 9<4 && 5>3 ); // false && true = false
// console.log( 8>20 && 10<6 ); // false && false = false

// console.log(5<8 && 4>10 && 3>5); // true && false && false
// console.log(8>5 && 5<10 && 8==8); // true && true && true

// OR ||

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// console.log(10>6 || 6<8); // true || true => true
// console.log(9>4 || 6>10); // true || false => true
// console.log(7>8 || 6<10); // false || true => true
// console.log(7<5 || 8>10); // false || false => false

// console.log(5>3 || 6<10 || 7>10); // true || true || false
// console.log(9<5 || 6!=6 || 8<5); // false || false || false

// ! NOT 

// console.log(!true) // false
// console.log(!false) // true

// console.log(!(8>5)); // false
// console.log(!(5>10)); // true

// console.log(!(8==='8' && 6<10)); // false && true => false

// UNARY OPERATOR [ POST INCREMENT, PRE INCREMENT, POST DECREMENT, PRE DECREMENT ]

// INCREMENT

// POST

// var a = 5;
// console.log(a++); // a = a + 1
// console.log(a);

// var a = 10;
// console.log(a++); // 10
// console.log(a++); // 11
// console.log(a); // 12

// var a = 123;
// console.log(a++); // 123
// console.log(a); // 124
// console.log(a++); // 124
// console.log(a); // 125

// PRE

// var a = 5;
// console.log(++a); // a = a + 1 //6
// console.log(a); // 6

// var a = 6;
// console.log(++a); // 7
// console.log(++a); // 8
// console.log(a); // 8
// console.log(a++); // 8
// console.log(a); // 9

// DECREMENT 

// POST 

// var a = 5;
// console.log(a--); // a = a - 1 // 5
// console.log(a); // 4

// console.log(a--); // 5
// console.log(a); // 4
// console.log(a); // 4
// console.log(a--); // 4
// console.log(a); // 3

// PRE

// var a = 4;
// console.log(--a); // 3
// console.log(a); // 3

// var a = 10;
// console.log(--a); // 9
// console.log(a--); // 9 ( 8 )
// console.log(a); // 8
// console.log(a--); // 8 ( 7 )
// console.log(--a); // 7 - 1  = 6
// console.log(a); // 6