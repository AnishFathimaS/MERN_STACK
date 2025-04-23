// var arr = ['html', 'css', 'bootstrap', 'javascript']
// console.log(arr.push('abc'))
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// var arr = ['html', 'css', 'bootstrap', 'javascript']
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.unshift('abc'));
// console.log(arr);

// var arr = ['html', 'css', 'bootstrap', 'javascript']
// console.log(arr);
// console.log(arr.join());
// console.log(arr.join(''));
// console.log(arr.join('--'));
// console.log(arr.join('**'));

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr);
// console.log(arr.reverse());

// var arr = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(arr.sort());

// var num = [30, 20, 100]
// console.log(num.sort());

// var num = [30, 20, 100]
// console.log(num.sort((a, b) => a - b));

// positive - swap , negative - no swap 

// a = 30, b = 20 => 30 - 20 = 10 [ 20, 30, 100 ]
// a = 30, b = 100 => 30 - 100 = -70 [ 20, 30, 100 ]

// var num = [30, 20, 100]
// console.log(num.sort((a, b) => b - a));

// a = 30, b = 20 => 20 - 30 = -10 [ 30, 20, 100 ]
// a = 20, b = 100 => 100 - 20 = 80 [ 30, 100, 20 ]
// a = 30, b = 100 => 100 - 30 = 70 [ 100, 30, 20 ]

// splice( position, delete-count, new-items )

// var a = ['html', 'css', 'bootstrap', 'javascript'];

// delete

// console.log(a.splice(2, 2));
// console.log(a);

// delete & insert 

// console.log(a.splice(1, 1, 'abc'))
// console.log(a)

// insert

// console.log(a.splice(4, 0, 'abc'))
// console.log(a)

// slice ( position, length )

// var a = ['html', 'css', 'bootstrap', 'javascript'];
// console.log(a.slice(0, 2));
// console.log(a.slice(2));
// console.log(a.slice(0, 3));
// console.log(a.slice(0, -2));

// some

// var a = [1, 2, 3, 5, 7];
// console.log(a);
// console.log(a.some((a) => a % 2 == 0));

// var a = [1, 4, 6, 22, 7];
// console.log(a)
// console.log(a.some((a) => a < 0 ))

// var obj = [
//     {
//         name : 'abinaya',
//         age : 20
//     },
//     {
//         name : 'anu',
//         age : 35
//     },
//     {
//         name : 'priya',
//         age : 10
//     },
//     {
//         name : 'hari',
//         age : 27
//     }
// ]

// console.log(obj);
// console.log(obj.some((obj) => obj.age <= 18));

// every 

// var a = [ 2, 4, 6, 8]
// console.log(a.every((a) => a % 2 == 0))

// var b = [ 100, 260, 350, 500 ];
// console.log(b.every((b) => b <= 500))

// var c = ['html', 'css', 'boostrap', 'javascript'];
// console.log(c.every((c) => c.length > 3));
