// LOOPS

// FOR LOOP

// SYNTAX

// for(initailization; condition; increment/decrement;){
    // statement
// }

// for(var i = 1; i <= 5; i++){
//     console.log(i)
// }   

// i = 1, 1 <= 5 => 1
// i = 2, 2 <= 5 => 2
// i = 3, 3 <= 5 => 3
// i = 4, 4 <= 5 => 4
// i = 5, 5 <= 5 => 5
// i = 6, 6 <= 5 

// for(var i = 1; i <= 10; i++){
    // console.log(i);

    // if(i % 2 == 0){
    //     console.log(i);
    // }

    // if(i % 2 !== 0){
    //     console.log(i);
    // }
// }

// var num = Math.floor(Math.random() * 10000); 
// 0 to 9999 [ 2, 45, 567, 5677 ]
// console.log(num);

// var otp = '';

// for(var i = 1; i <= 4; i++){
//     otp += Math.floor(Math.random() * 10) // 0 to 9
// }
// console.log(otp);

// i = 1, 1 <= 4 => 4
// i = 2, 2 <= 4 => 3
// i = 3, 3 <= 4 => 8
// i = 4, 4 <= 4 => 1
// i = 5, 5 <= 4 ( false )

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ];
// console.log(arr);

// for(var i = 0; i < arr.length; i++){
    // console.log(arr[i]);
// }

// i = 0, 0 <= 3 => arr[0] => html
// i = 1, 1 <= 3 => arr[1] => css
// i = 2, 2 <= 3 => arr[2] => bootstrap
// i = 3, 3 <= 3 => arr[3] => javascript

// DECREMENT

// for(var i = 10; i >= 1; i--){
//     console.log(i);
// }

// i = 10, 10 >= 1 => 10
// i = 9, 9 >= 1 => 9 
// i = 8, 8 >= 1 => 8
// ...
// i = 1, 1 >= 1 => 1
// i = 0, 0 >= 1

// var arr = [ 'html', 'css', 'bootstrap', 'javascript', 'abc', 'xyz' ];

// position - 5
// length - 6 - 1 => 5

// for(var i = arr.length-1; i >= 0; i--){
    // console.log(arr[i]); 
// }

// arr[5]
// i = 3, 3 >= 0 => arr[3] javascript
// i = 2, 2 >= 0 => arr[2] bootstrap
// i = 1, 1 >= 0 => arr[1] css
// i = 0, 0 >= 0 => arr[0] html

// var text = 'hello' // olleh
// var reverse = ''

// for(var i = text.length-1; i >= 0; i--){
//     reverse += text[i];
// }
// console.log(reverse);

// i = 4, 4 >= 0 => text[4] => reverse = o
// i = 3, 3 >= 0 => text[3] => reverse += ol
// i = 2, 2 >= 0 => text[2] => reverse += oll
// i = 1, 1 >= 0 => text[1] => reverse += olle
// i = 0, 0 >= 0 => text[0] => reverse += olleh

// NESTED FOR LOOP

// for( var i = 1; i <= 5; i++){
//     for( var j = 1; j <= 5; j++ ) {
//         console.log(`${j} X ${i} = ${i * j}`);
//     }
// }

// i = tableCount
// j = end Count

// i = 1, 1 <= 5 
// j = 1, 1 <= 5 => 1, 1
// j = 2, 2 <= 5 => 1, 2
// j = 3, 3 <= 5 => 1, 3
// j = 4, 4 <= 5 => 1, 4
// j = 5, 5 <= 5 => 1, 5
// j = 6, 6 <= 5 ( false )

// i = 2, 2 <= 5
// j = 1, 1 <= 5 => 2, 1