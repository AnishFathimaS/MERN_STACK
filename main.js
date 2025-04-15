// SWITCH CASE 

// SYNTAX 

// switch(condition){
//     case 1 :
//         // statement
//         break;
//     case 2 :
//         // statement
//         break;
//     case 3 :
//         // statement
//         break;
//     default : 
//         // statment
// }

// var num = 3;

// switch(num){
//     case 1 :
//         console.log('Hello 1')
//         break;
//     case 2 :
//         console.log('Hello 2')
//         break;
//     case 3 :
//         console.log('Hello 3')
//         break;
//     default : 
//         console.log('Invalid')
// }

// var num1 = document.getElementById('num1').value;
// var num2 = document.getElementById('num2').value;
// var operators =  document.getElementById('operator').value;

// var num1 = 10;
// var num2 = 5;
// var operator = '*'

// switch(operator){
//     case '+' :
//         var result = num1 + num2;
//         console.log(result)
//         break;
//     case '-' :
//         var result = num1 - num2;
//         console.log(result)
//         break;
//     case '*' :
//         var result = num1 * num2;
//         console.log(result)
//         break;
//     case '/' :
//         var result = num1 / num2;
//         console.log(result)
//         break;
//     default : 
//         var result = 'Invalid Operator'
//         console.log(result)
// }

// var icon_arr = ['fa-solid fa-users', 'fa-solid fa-chalkboard-user', 'fa-solid fa-computer', 'fa-solid fa-user']

// var num_arr = [1000, 500, 300, 100]

// var text_arr = [ 'STUDENTS', 'TEACHER', 'DEPARTMENT', 'PROGRAMS']

// document.write(`
//     <div class="container">
//         <div class="row">
//             <div class="col-lg-3 cls">
//                 <i class='${icon_arr[0]}'></i>
//                 <h4 id='count1'></h4>
//                 <p>${text_arr[0]}</p>
//             </div>
//             <div class="col-lg-3 cls">
//                 <i class='${icon_arr[1]}'></i>
//                 <h4 id=count2></h4>
//                 <p>${text_arr[1]}</p>
//             </div>
//             <div class="col-lg-3 cls">
//                 <i class='${icon_arr[2]}'></i>
//                 <h4></h4>
//                 <p>${text_arr[2]}</p>
//             </div>
//             <div class="col-lg-3 text-center">
//                 <i class='${icon_arr[3]}'></i>
//                 <h4></h4>
//                 <p>${text_arr[3]}</p>
//             </div>
//         </div>
//     </div>
// `)

// var count1 = 0;

// setInterval(() => {
//     if(count1 < 1100){
//         count1 = count1 + 1;
//         document.getElementById('count1').innerHTML = count1
//     }
// },10 )

// var count2 = 0;

// setInterval(() => {
//     if(count2 < 200){
//         count2 = count2 + 1;
//         document.getElementById('count2').innerHTML = count2
//     }
// }, 10)

// SET INTERVAL

// setInterval(function_name, duration)

// var count = 0

// function fun(){
//     count = count + 1;
//     document.getElementById('count').innerHTML = count
// }
// setInterval(fun, 100)

// const fun = () => {
    // count = count + 1;
    // document.getElementById('count').innerHTML = count;
// }

// setInterval(fun, 100)

// setInterval(() => {
//     count = count + 1;
//     document.getElementById('count').innerHTML = count;
// }, 100)

// var count = 100

// setInterval(() => {
//     if(count < 1100){
//         count = count + 1;
//         document.getElementById('count').innerHTML = count;
//     }
// }, 10)