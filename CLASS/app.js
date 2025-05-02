// var text = ['STUDENTS', 'STAFFS', 'DEPARTMENT', 'PROGRAM']
// var icon = ['fa-solid fa-users', 'fa-solid fa-chalkboard-user', 'fa-solid fa-computer', 'fa-solid fa-user']

// document.write(`
//     <div class='container text-center bg-color mt-5 p-5'>
//         <div class='row'>
//             <div class='col-lg-3 col-md-6 col-12'>
//                 <i class='${icon[0]} fa-2x'></i>
//                 <h4 id='count1'></h4>
//                 <h4>${text[0]}</h4>
//             </div>
//             <div class='col-lg-3 col-md-6 col-12'>
//                 <i class='${icon[1]} fa-2x'></i>
//                 <h4 id='count2'></h4>
//                 <h4>${text[1]}</h4>
//             </div>
//             <div class='col-lg-3 col-md-6 col-12'>
//                 <i class='${icon[2]} fa-2x'></i>
//                 <h4>${text[2]}</h4>
//             </div>
//             <div class='col-lg-3 col-md-6 col-12'>
//                 <i class='${icon[3]} fa-2x'></i>
//                 <h4>${text[3]}</h4>
//             </div>
//         </div>
//     </div>
// `)

// var count1 = 0;

// setInterval(() => {
//     if(count1 < 1100){ //  < 1100
//         ++count1;
//         document.getElementById('count1').innerHTML = count1
//     }
// }, 1)

// var count2 = 0;

// setInterval(() => {
//     if(count2 < 200){
//         ++count2;
//         document.getElementById('count2').innerHTML = count2
//     }
// }, 10)

// LOOPS 

// FOR

// for(i=1; i<=10; i++){
//     console.log(i)
// }

// for(i=1; i<=10; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// for(i=1; i<=10; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// var otp = '';

// for( i = 1; i <=4; i++){
//     otp += Math.floor(Math.random() * 10)
// }

// console.log(otp)

// var arr = [ 'html', 'css', 'javascript', 'bootstrap'];

// for(i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// decrement

// for(i=5; i>=1; i--){
//     console.log(i)
// }

// var arr = [ 'html', 'css', 'javascript', 'bootstrap'];

// for( i = arr.length - 1; i>=0; i-- ){
//     console.log(arr[i]);
// }

// var text = 'abc'; // cba
// var reverse = ''

// for(i = text.length - 1; i >= 0; i--){
//     reverse += text[i]
// }
// console.log(reverse)

// for(i=1; i<=10; i++){
//     for(j=1; j<=10; j++){
//         // console.log(i, j)
//         console.log(`${j} + ${i} = ${i + j}`)
//     }
// }