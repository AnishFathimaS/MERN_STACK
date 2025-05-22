// LOOPS 

// For Loop, Nested For Loop, While Loop, Do While Loop 

// For Loop 

// for(initialization; condition; increment/decrement){
    // statement
// }

// for(var i = 1; i <= 5; i++){
//     console.log(i)
// }

// i = 1, 1 <= 5 => 1
// i = 2, 2 <= 5 => 2
// ...
// i = 5, 5 <= 5 => 5
// i = 6, 6 <= 5 =>

// var a = Math.floor(Math.random() * 10) // 0 to 9 
// console.log(a);

// var otp = '';

// for(var i = 1; i <= 4; i++){
//     otp += Math.floor(Math.random() * 10)
// }

// console.log(otp);

// i = 1, 1 <= 4 => 5
// i = 2, 2 <= 4 => 56

// var arr = [ 'html', 'css', 'bootstrap', 'javascript', 'abc', 'hello' ]

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// i = 0, 0 <= 4 => arr[0] => html
// i = 1, 1 <= 4 => arr[1] => css
// i = 2, 2 <= 4 => arr[2] => bootstrap
// i = 3, 3 <= 4 => arr[3] => js
// i = 4, 4 <= 4 => arr[4]

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// i = 10, 10 >= 1 , 10
// i = 9, 9 >= 1, 9

// var text = 'hellos' // olloh
// // 6 => 5
// var reverse_text = ''

// for(var i = text.length-1; i >= 0; i--){
//     reverse_text += text[i]
// }

// console.log(reverse_text)

// i = 3, 3 >= 0, text[3] => l
// i = 2, 2 >= 0, text[2] => ll
// i = 1, 1 >= 0, text[1] => lle
// i = 0, 0 >= 0, text[0] => lleh

// for(var i = 1; i <= 5; i++){
//     for(var j = 1; j <= 5; j++){
//         console.log(`${i} X ${j} = ${i * j}`);
//     }
// }

// i = 1, 1 <= 5, 
// j = 1, 1 <= 5 => 1, 1
// j = 2, 2 <= 5 => 1, 2
// j = 5, 5 <= 5 => 1, 5
// j = 6, 6 <= 5

// i = 2, 2 <= 5
// j = 1

function fun(event){
    event.preventDefault()
    console.log('dfghj');
}