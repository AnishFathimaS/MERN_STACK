// DAY - 2

// VARIABLES, ARRAY, ARRAY USING MAP, OBJECT, JSON, JSON USING MAP, FUNCTION INSIDE ANOTHER FUNCTION, FETCHING DATA IN CONSOLE, CLASS COMPONENTES (3)

// VARIABLES

// import React from 'react'

// const App = () => {
//   var a = 'Hello';
//   var b = 'World'
//   return (
//     <>
//       <h1>{a} {b}</h1>
//     </>
//   )
// }

// export default App

// ARRAY 

// import React from 'react'

// const App = () => {

//   var arr = ['html', 'css','bootstrap', 'javascript']
//   var name = ['name', 'abi','my', 'is']
//   return (
//     <>
//       <h1>{arr[0]}</h1>
//       <h1>{arr[1]}</h1>
//       <h1>{arr[2]}</h1>
//       <h1>{arr[3]}</h1>

//       <p>{name[2]} {name[0]} {name[3]} {name[1]}</p>
//     </>
//   )
// }

// export default App

// ARRAY IN MAP

// import React from 'react'

// const App = () => {

//   var arr = ['html', 'css','bootstrap', 'javascript']
//   return (
//     <>
//       {arr.map((value, index) => {
//         return(
//           <h1 key={index}>{value}</h1>
//         )
//       })}
//     </>
//   )
// }

// export default App

// OBJECT 

// import React from 'react'

// const App = () => {

  // var obj = {
  //   name : 'abinaya',
  //   age : 20,
  //   place : 'Trichy',
  //   number : 1234567890
  // }

//   var obj = {
//     name : 'abinaya',
//     age : 20,
//     address : {
//       doorno : 8,
//       street : '3rd Street',
//       city : 'Trichy'
//     },
//     number : 1234567890
//   }

//   return (
//     <>
//       <h1>{obj.name}</h1>
//       <h1>{obj.age}</h1>
//       <h1>{obj.place}</h1>
//       <h1>{obj.number}</h1>

//       <h1>{obj.address.city}</h1>
//     </>
//   )
// }

// export default App

// JSON

// import React from 'react'

// const App = () => {

//   var json_obj = [
//     {
//       name : 'abinaya',
//       age : 20,
//       place : 'trichy'
//     },
//     {
//       name : 'anu',
//       age : 24,
//       place : 'chennai'
//     },
//     {
//       name : 'sree',
//       age : 26,
//       place : 'madurai'
//     }
//   ]

//   return (
//     <>
//       <h1>{json_obj[0].name}</h1>
//       <h1>{json_obj[1].age}</h1>
//     </>
//   )
// }

// export default 

// JSON IN MAP 

// import React from 'react'

// const App = () => {

//   var json_obj = [
//     {
//       name : 'abinaya',
//       age : 20,
//       place : 'trichy'
//     },
//     {
//       name : 'anu',
//       age : 24,
//       place : 'chennai'
//     },
//     {
//       name : 'sree',
//       age : 26,
//       place : 'madurai'
//     }
//   ]

//   return (
//     <>
//       {json_obj.map((value, index) => {
//         return(
//           <h1 key={index}>{value.name}</h1>
//         )
//       })}
//     </>
//   )
// }

// export default App

// Function using another function 

// import React from 'react'

// const App = () => {

//   var a = 10;
//   var b = 20;

//   const fun = () => {
//     return(
//       <>
//         <h1>{a + b} </h1>
//       </>
//     )
//   }
//   return(a, b)

// }

// export default App

// import React from 'react'

// const App = () => {

//   var a = 10;
//   var b = 20;

//   const fun = () => {
//     return(
//       <>
//         <h1>{(a + b > 40 ) ? 'true' : 'false'}</h1>
//       </>
//     )
//   }
//   return fun()

// }

// export default App

// Fetching Data using API 

// import React from 'react'

// const App = () => {

//   async function fun(){
//     var url = await fetch('https://jsonplaceholder.typicode.com/users');
//     var data = await url.json();
//     data.map((value) => {
//       return(
//         console.log(value.name)
//       )
//     })
//   } 
//   fun()
// }

// export default 


// CLASS COMPONENTS 

// import React from 'react'

// class App extends React.Component{
//   render(){
//     return(
//       <>
//         <h1>Hello</h1>
//       </>
//     )
//   }
// }

// export default App

// import React from 'react'

// class App extends React.Component{
//   render(){
//     var a = 10, b = 20;
//     return(
//       <>
//         <h1>{a + b}</h1>
//       </>
//     )
//   }
// }

// export default App

// import React from 'react'

// class App extends React.Component{
//   render(){
//     var a = 10, b = 20;
//     return(
//       <>
//         <h1>{a + b > 10 ? 'true' : 'false'}</h1>
//       </>
//     )
//   }
// }

// export default App