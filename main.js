// PUSH, POP 

// var arr = ['html', 'css', 'bootstrap', 'javascript']
// console.log(arr);
// console.log(arr.push('abc'))
// console.log(arr); // 
// console.log(arr.pop()) // 
// console.log(arr);

// var arr = ['html', 'css', 'bootstrap', 'javascript']
// console.log(arr.push('hello')) // 'html', 'css', 'bootstrap', 'javascript', 'hello'
// console.log(arr.push('abc')) // 'html', 'css', 'bootstrap', 'javascript', 'hello', 'abc'
// console.log(arr.pop()) // 'html', 'css', 'bootstrap', 'javascript', 'hello',
// console.log(arr.push('abc')) // 'html', 'css', 'bootstrap', 'javascript', 'hello', 'abc'
// console.log(arr) 

// SHIFT, UNSHIFT

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);
// console.log(arr.shift());
// console.log(arr); 
// console.log(arr.unshift('hello')); 
// console.log(arr); 

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr.push('hello')); // 'html', 'css', 'bootstrap', 'javascript', 'hello
// console.log(arr.push('java')); // 'html', 'css', 'bootstrap', 'javascript', 'hello', 'java'
// console.log(arr.unshift('abc')); // abc, 'html', 'css', 'bootstrap', 'javascript', 'hello', 'java'
// console.log(arr.shift()); //'html', 'css', 'bootstrap', 'javascript', 'hello', 'java'
// console.log(arr.pop()); // 'html', 'css', 'bootstrap', 'javascript', 'hello', 
// console.log(arr);

// JOIN

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);
// console.log(arr.join());
// console.log(arr.join(''));
// console.log(arr.join('  '));
// console.log(arr.join('--'));
// console.log(arr.join('***'));

// REVERSE

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);
// console.log(arr.reverse());

// var num = [ 5, 4, 3, 2, 1 ];
// console.log(num);
// console.log(num.reverse());

// SORT

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);
// console.log(arr.sort());
// console.log(arr.sort().reverse());

// var num = [ 30, 20, 100 ];
// console.log(num);
// console.log(num.sort()); // 100, 20, 30 

// console.log(num.sort((a,b) => a - b )) // 20, 30, 100
// console.log(num.sort((a,b) => b - a )) // 100, 30, 20

// positive => swap
// negative => no swap

// [ 30, 20, 100 ]
// a = 30, b = 20, 30 - 20 = 10 [ 20, 30, 100 ]
// a = 30, b = 100, 30 - 100 = -70 [ 20, 30, 100 ]

// [ 30, 20, 100 ]
// a = 30, b = 20, 20 - 30 = -10 [ 30, 20, 100 ]
// a = 20, b = 100, 100 - 20 = 80 [ 30, 100, 20 ]
// a = 30, b = 100, 100 - 30 = 70 [ 100, 30, 20 ]

// SPLICE ( position, length, newitems )

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);

// remove

// console.log(arr.splice(0, 2));
// console.log(arr);
// console.log(arr.splice(2, 2));
// console.log(arr);

// remove & insert 

// console.log(arr.splice(1, 1, 'hello'))
// console.log(arr);

// console.log(arr.splice(2, 2, 'hello'))
// console.log(arr)

// insert

// console.log(arr.splice(2, 0, 'hello'));
// console.log(arr);

// console.log(arr.splice(4, 0, 'react'));
// console.log(arr);

// SLICE ( position, length )

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);

// console.log(arr.slice(0, 2)) // html, css
// console.log(arr); // html, css, bootstrap, javascript

// CONCAT
 
// var arr1 = ['html', 'css']
// var arr2 = ['bootstrap', 'javascript']

// console.log(arr1.concat(arr2));
// console.log(arr2.concat(arr1));

// var arr3 = ['hello', 'world']

// console.log(arr1.concat(arr2, arr3))

// console.log(arr1.concat('hello', 'world'))

// SOME

// var a = [ 1, 2, 3, 5, 7 ];
// console.log(a.some((a) => a % 2 == 0 ));

// var a = [ 1, 3, 5, -7, 4 ];
// console.log(a.some((a) => a < 0 ))

// EVERY

// var a = [ 4, 2, 5, 8, 12 ];
// console.log(a.every((a) => a % 2 == 0 ));

// var a = [
//     {
//         name : 'abi',
//         age : 13
//     },
//     {
//         name : 'anu',
//         age : 10
//     },
//     {
//         name : 'hari',
//         age : 18
//     },
// ]

// console.log(a.every((a) => a.age <= 18 ))