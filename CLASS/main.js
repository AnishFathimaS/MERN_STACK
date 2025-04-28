// IF 

// SYNTAX

// if(condition){
    //statement
// }

// if(5<10){
//     console.log('True') // True
// }

// if(5>10){
//     console.log('True') // No Output
// }

// if(10==10){
//     console.log("True"); // True
// }

// if(8==='8'){
//     console.log('True'); // No Output
// }

// IF ELSE

// SYNTAX

// if(condition){
    // statement
// }
// else{
    // statement
// }

// if(5<10){
//     console.log('True'); // True
// }
// else{
//     console.log('False');
// }

// if(5>10){
//     console.log('True'); 
// }
// else{
//     console.log('False'); // False
// }

// var age = 12;

// if(age < 18){ // 12 < 18
//     console.log('Not Eligible');
// }
// else{
//     console.log('Eligible');
// }

// var num = 8;

// if(num % 2 == 0){ 
//     console.log('Even')
// }
// else{
//     console.log('Odd');
// }

// var num = 59;

// if(num >= 80){
//     console.log('Grade A');
// }
// else{
//     console.log('Just Pass')
// }

// var age = prompt('Enter your age');

// if(age >= 18){
//     console.log('You are eligible to vote');
// }
// else{
//     console.log('You are not eligible to vote');
// }

// greater than 10 => you are entered greater than 10
// less than => you are entered less than 10

// var num = prompt('Enter number within 10');

// if(num >= 10){
//     console.log('you are entered greater than 10');
// }
// else{
//     console.log('you are entered less than 10');
// }

// ELSE IF 

// SYNTAX

// if(condition){
//     // statement
// }
// else if(condition){
//     // statement
// }
// else if(condition){
//     // statement
// }
// else{
//     // statement
// }

    
// var mark = 80;
// var mark = prompt('Enter your mark');

// if(mark > 90){ 
//     console.log('GRADE A');
// }
// else if(mark > 70){
//     console.log('GRADE B');
// }
// else if(mark > 50){
//     console.log('GRADE C');
// }
// else{
//     console.log('JUST PASS');
// }

// age => below 18 ( Child ), 18 to 25 ( Teenage ),
// 25 to 35 ( Mens ) above ( elder )

// var age = 10;

// if(age >= 35){
//     console.log('Elder');
// }
// else if(age >= 25){
//     console.log('Mens');
// }
// else if(age >= 18){
//     console.log('Teenage');
// }
// else{
//     console.log('Child');
// }

// NESTED IF

// var num = 'fghj';

// You are enter a string

// if(num % 2 == 0){ 
//     console.log('Even')
// }
// else{
//     console.log('Odd');
// }

// var num = 8;

// if(isNaN(num)){
//     console.log('You are entered a string')
// }
// else{
//     if(num % 2 == 0){
//         console.log('Even');
//     }
//     else{
//         console.log('Odd')
//     }
// }

// var num = 8;

// if(!isNaN(num)){
//     if(num % 2 == 0){
//         console.log('Even');
//     }
//     else{
//         console.log('Odd')
//     }
// }
// else{
//     console.log('You are entered a string')
// }

// function submitFun(){
//     var mark = document.getElementById('mark_input').value;

//     if(mark > 0){
//         if(mark >= 80){
//             document.getElementById('result').innerHTML = 'Grade A'
//         }
//         else if(mark >= 60){
//             document.getElementById('result').innerHTML = 'Grade B'
//         }
//         else if(mark >= 40){
//             document.getElementById('result').innerHTML = 'Grade C'
//         }
//         else{
//             document.getElementById('result').innerHTML = 'Fail'
//         }
//     }
//     else{
//         document.getElementById('result').innerHTML = 'Invalid Input';
//     }
// }

// function addFun(){
//     var count = Number(document.getElementById('count').innerHTML)

//     if(count < 10){
//         count = count + 1;
//         document.getElementById('count').innerHTML = count
//     }
// }

// function removeFun(){
//     var count = Number(document.getElementById('count').innerHTML)
    
//     if(count > 0){
//         count = count - 1;
//         document.getElementById('count').innerHTML = count
//     }
// }