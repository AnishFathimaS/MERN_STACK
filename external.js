// ARRAY METHODS

// SOME, EVERY, SPREAD OPERATOR, REST OPERATOR, JSON, MATH MIN, MATH MAX

// JSON - Javascript Object Notation

// var arr = [1,2, 3,4]

// var arr = [
//     {
//         key : value,
//         key : value,
//         key : value,
//     },
//     {
//         key : value,
//         key : value,
//         key : value,
//     }
// ]

// var arr = [
//     {
//         name : 'Abinaya',
//         age : 20,
//         address : 'Trichy'
//     },
//     {
//         name : 'Anu',
//         age : 18,
//         address : 'Chennai'
//     }
// ]

// console.log(arr);
// console.log(arr[0].address);
// console.log(arr[1]);
// console.log(arr[0].age);

// SOME 

// var arr = [1, 4, 3, 5, 7];
// console.log(arr);
// var even_num = arr.some((num) => num % 2 == 0)
// console.log(even_num);

// var arr = [10, -5, 7, -4]
// var neg_num = arr.some((num) => num < 0)
// console.log(neg_num);


// var arr = [
//     {
//         name : 'Anu',
//         age: 19
//     },
//     {
//         name : 'Abinaya',
//         age : 30
//     },
//     {
//         name : 'Hari',
//         age : 20
//     }
// ]

// var age = arr.some((num)=> num.age <= 18)
// console.log(age);


// var num = [ 8, 2, 6, 4 ];
// var even_num = num.every((num)=> num % 2 == 0)
// console.log(even_num);

// var price = [ 2000, 4000, 5400, 11000 ]
// var max_price = price.every((price) => price <= 10000 )
// console.log(max_price);

// var words = ['html', 'css', 'javascript']
// var words_length = words.every((words) => words.length >= 3 )
// console.log(words_length);

//SPREAD OPERATOR 

// var num = [1, 2, 3, 4, 5]
// console.log(...num);

// var text = 'HELLO';
// console.log(...text);

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [arr1]
// console.log(arr2);

// var arr1 = [1, 2, 3]
// var arr2 = [4, 5, 6]

// var array =  [...arr1, ...arr2]
// console.log(array);

// var arr1 = [1, 2, 3]
// var arr2 = [...arr1, 4, 5, 6]
// console.log(arr2);

// REST OPERATOR

// var num = [ 1, 2, 3, 4, 5];
// var [first, second, ...num] = num;
// console.log(first);
// console.log(second);
// console.log(num);

// var arr1 = [10, 20, 30, 40, 50]; // array structure
// var [ first, second, ...rest ] = arr1 // destructure
// var arr2 = [ first, second, ...rest ]
// console.log(arr2);

// var arr1 = ['html', 'css', 'javascript'];
// var [, ,...rest] = arr1
// console.log(rest);


// Math.min 

// console.log(Math.min(3, 6, 5, 1));

// var arr = [1, 2, 4, 6]
// console.log(Math.min(...arr));


// var arr = [1, 2, -4, 6]
// console.log(Math.min(...arr));

// var arr = [1, 2, 4,'hello', 6]
// console.log(Math.min(...arr));

// Math Max

// console.log(Math.max(1, 5, 88, 53));

// var num = [-4, 2, 'hjgkj',-66, 1]
// console.log(Math.max(...num));

