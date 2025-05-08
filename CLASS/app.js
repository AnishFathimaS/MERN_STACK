// var arr = [ 'html', 'css', 'bootstrap']
// console.log(arr.push('javascript'));
// console.log(arr);

// var arr = [ 'html', 'css', 'bootstrap']
// console.log(arr.pop());
// console.log(arr);

// var arr = [ 'html', 'css', 'bootstrap']
// console.log(arr.shift());
// console.log(arr);

// var arr = [ 'html', 'css', 'bootstrap']
// console.log(arr.unshift('abc'));
// console.log(arr);

// JOIN

// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.join());
// console.log(arr.join(''));
// console.log(arr.join('--'));
// console.log(arr.join('*'));

// REVERSE

// var arr = ['html', 'css', 'bootstrap', 'javascript']
// console.log(arr);
// console.log(arr.reverse());

// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.reverse());

// SORT

// var arr = ['html', 'css', 'bootstrap', 'javascript']
// console.log(arr);
// console.log(arr.sort());

// var num = [ 100, 20, 30 ];
// console.log(num);
// console.log(num.sort()); // 100, 20, 30

// // 20, 30, 100

// console.log(num.sort((a,b) => a-b)); // 20, 30, 100

// a, b => a - b

// positive number => Swap
// negative number => no swap

// a = 100, b = 30 , 100 - 30 => 70 [ 30, 100, 20 ]
// a = 30, b = 100, 30 - 100 => -70 [ 30, 100, 20 ]
// a = 100, b = 20, 100 - 20 => 80 [ 30, 20, 100 ]
// a = 30, b = 20, 30 - 20 => 10 [ 20, 30, 100 ]

// console.log(num.sort((a, b) => b-a)); 

// 100, 20, 30

// a = 100, b = 20 , 20 - 100 => -80 [ 100, 20, 30 ];
// a = 20, b = 30, 30 - 20 => 10 [ 100, 30, 20 ]

// SPLICE ( startPosition, length, new Items )

// REMOVE

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);

// REMOVE

// console.log(arr.splice(0, 2));
// console.log(arr.splice(1, 3));
// console.log(arr);

// REMOVE & INSERT

// console.log(arr.splice(1, 3, 'abc', 'hello'));
// console.log(arr);

// INSERT

// console.log(arr.splice(2, 0, 'abc'));
// console.log(arr);
