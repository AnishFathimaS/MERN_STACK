// var obj = {
//     name : 'abinaya',
//     age : 20,
//     place : {
//         city : 'trichy'
//     }
// }
// console.log(obj.place.city)

// var obj = {
//     name : 'abinaya',
//     age : 20,
//     fun : function(){
//         // console.log(`Hello ${obj.name}`)
//         console.log(`Hello ${this.name}`)
//     }
// }
// obj.fun()

// SET, GET, DELETE, CLEAR, HAS

// SET

// var obj = {
//     name : 'abinaya',
//     age : 20,
//     place : {
//         city : 'trichy'
//     }
// }

// SYNTAX

// object_name.set(key, value)

// var value = new Map();
// value.set('name', 'abinaya');
// value.set('age', 20);
// console.log(value);

// var obj = new Map();
// obj.set('place', {'city' : 'trichy'})
// console.log(obj)

// GET

// var obj = new Map();
// obj.set('name', 'abinaya');
// obj.set('age', 20);

// console.log(obj);
// console.log(obj.get('name'))
// console.log(obj.get('age'))

// DELETE 

// var obj = new Map();
// obj.set('name', 'abinaya');
// obj.set('age', 20);
// console.log(obj.delete('age'));
// console.log(obj);

// CLEAR

// var obj = new Map();
// obj.set('name', 'abinaya');
// obj.set('age', 20);
// console.log(obj);
// console.log(obj.clear());
// console.log(obj);

// HAS

// var obj = new Map();
// obj.set('name', 'abinaya');
// obj.set('age', 20);
// console.log(obj.has('age')); // true
// console.log(obj.has('ages')); // false

// DOM - Document Object Modal

// createElement

// var h1tag = document.createElement('h1');
// h1tag.innerHTML = 'Hello from Dom'
// document.body.appendChild(h1tag)

// var ptag = document.createElement('p');
// ptag.innerHTML = 'P Tag';
// document.body.appendChild(ptag);

// var atag = document.createElement('a');
// atag.innerHTML = 'YouTube';
// atag.href = 'https://www.youtube.com';
// atag.target = '_blank'
// document.body.appendChild(atag)

// var imgTag = document.createElement('img');
// imgTag.src = 'img1.jpg';
// imgTag.height = '400';
// imgTag.width = '600';
// document.body.appendChild(imgTag);

// var centerTag = document.createElement('center');

// var h1Tag = document.createElement('h1');
// h1Tag.innerHTML = 'Hello World';

// document.body.appendChild(centerTag)
// centerTag.appendChild(h1Tag)

// var h1tag = document.createElement('h1');
// h1tag.innerHTML = 'Hello';
// h1tag.setAttribute('id', 'h1')
// document.body.appendChild(h1tag);
// document.getElementById('h1').style.color = 'red'
// document.getElementById('h1').style.backgroundColor = 'black'

// var h1tag = document.createElement('h1');
// h1tag.innerHTML = 'Hello';
// h1tag.setAttribute('class', 'cls');
// document.body.appendChild(h1tag);

// document.getElementsByClassName('cls')[0].style.color = 'blue'

// var ptag = document.createElement('p');
// ptag.innerHTML = 'P tag'
// ptag.setAttribute('class', 'cls')
// document.body.appendChild(ptag);

// document.getElementsByClassName('cls')[1].style.color = 'red'