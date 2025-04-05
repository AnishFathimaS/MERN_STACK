// import App1 from './App1';
// import './Main.css';
// import mod from './Main.module.css'

// import React, { useState } from 'react';

//23 - 10 - 2024

// Printing Hello using function 

  // function App(){
  //   return(
  //     <div>
  //       <h1>Hello React</h1>
  //     </div>
  //   )
  // }

//24 - 10 - 2024

// Getting array value Using Map in Function component 

  // function App(){
  //   let a = [100,200,300,400];
  //   return (
  //     <div>
  //       {a.map((val,index) =>
  //         <h1>{val}</h1>
  //       )}
  //     </div>
  //   )
  // }

// Getting object value in Function component 

  // function App(){
  //   const obj = {
  //     name : 'Anis',
  //     age : 20
  //   }
  //   return(
  //     <div>
  //       <h1>Name is {obj.name} and Age is {obj.age}</h1>
  //     </div>
  //   )
  // }

// Using function inside another function

  // function App(){
  //   const a = 10, b = 20;
  //   function Fun2(a=0, b=0){
  //     return(
  //       <h1>{(a + b > 20) ? 'Yes' : 'No' }</h1>
  //     )
  //   }
  //   return Fun2(a,b); 
  // }

// Fetching data in Console log using API

  // async function App(){
  //   const url = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await url.json();
  //   data.map((val)=>{
  //     console.log(val.name);
  //   })
  // }

// Fetching API data using function inside another function in Console log 

  // function App(){
  //   async function Fun(){
  //     const url = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await url.json();
  //     data.map((val)=>{
  //       console.log(val.name);
  //     })
  //   }
  //   Fun()
  // }

// Class Component

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Hello Class Component</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   render(){
//     const a=50, b=20;
//     return (
//       <div>
//         <h1>{a + b}</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   render(){
//     const a = 10;
//     return(
//       <>
//         <h1>{ (a > 10) ? 'Yes' : 'No'}</h1>
//       </>
//     )
//   }
// }

//25 - 10 - 2024

  //Exporting Numbers usings props

    // function App() {
    //   const a = 10, b = 20, c = 30, d = 40;
    //   return (
    //     <div>
    //       <App1 a = {a}/>
    //       <App1 a = {b}/>
    //       <App1 a = {c}/>
    //       <App1 a = {d}/>
    //     </div>
    //   )
    // }

  //Exporting Array using props

    // function App(){
    //   const a = [1,2,3,4];
    //   return(
    //     <>
    //       <App1 a = {a}/>
    //     </>
    //   )
    // }

  //Exporting Objects using props

    // function App(){
    //   const obj = {
    //     name : 'anas',
    //     age : 10
    //   }
    //   return(
    //     <>
    //       <App1 obj = {obj}/>
    //     </>
    //   )
    // }

  //Component Did Mount

  // class App extends React.Component{
  //   componentDidMount(){
  //     console.log("Hi");
      
  //   }
  //   render(){
  //     return(
  //       <>
  //         <h1>Hello</h1>
  //       </>
  //     )
  //   }
  // }

//28 - 10 - 2024

  // function App(){

  //   var [value , setValue] = useState({name : "Anis", age : 20, pwd : 8080});

  //   function func(){
  //     setValue({name : "Anas", age : 10, pwd : 2004})
  //   }

  //   var {name, age, pwd} = value;

  //   return(
  //     <>
  //       <h1>{name}</h1>
  //       <h2>{age}</h2>
  //       <h3>{pwd}</h3>
  //       <button onClick={func}>Change Text</button>
  //     </>
  //   )
  // }

//29 - 10 - 2024

// Event Handling using function component

  // function App() {

  //   function change(e){
  //     console.log(e.target.value);
  //   }
  //   return (
  //     <div>
  //       <input type="text" onChange={change} />
  //     </div>
  //   )
  // }


  //   function App() {
  //     function sub(e){
  //       e.preventDefault();
  //       console.log("Submitted");
  //     }
  //   return (
  //     <div>
  //       <form action="" onSubmit={sub}>
  //           <input type="submit"/>
  //       </form>
  //     </div>
  //   )
  // }

  // function App(){
  //   return(
  //     <>
  //       <form action="" onSubmit={(e)=>{e.preventDefault(); console.log("Submitted")}}>
  //         <input type="submit"/>
  //       </form>
  //     </>
  //   )
  // }

//Event Handling using class component

// class App extends React.Component{

  //   Change = (e) =>{
  //     console.log(e.target.value);
  //   }
  //   render(){
  //     return(
  //       <>
  //         <input type="text" onChange={this.Change}/>
  //       </>
  //     )
  //   }
  // }

  // class App extends React.Component{
  //   render(){
  //     return(
  //       <>
  //         <input type="text" onChange={ (e) => {console.log(e.target.value)}}/>
  //       </>
  //     )
  //   }
  // }

  // class App extends React.Component{
  //   render(){
  //     return(
  //       <>
  //         <form action="" onSubmit={(e) => {e.preventDefault(); console.log("Submitted")}}>
  //           <input type="submit"/>
  //         </form>
  //       </>
  //     )
  //   }
  // }

// Adding Inline CSS 

  // function App() {
  //   return(
  //     <>
  //       <h1 style={{color:"red",background:"black"}}>Hello</h1> 
  //     </>
  //   )
    
  // }

// Adding CSS in Object

  // function App(){
  //   const obj = {
  //     color : 'blue',
  //     background : 'black'
  //   }

  //   return(
  //     <>
  //       <h1 style={obj}>Hello</h1>
  //     </>
  //   )
  // }

//Module CSS

  // function App(){
  //   return(
  //     <>
  //       <h1 className={mod.h1}>Class Hello</h1>
  //       <h1 id={mod.h2}>Id Hello</h1>
  //       <h1>Tag Hello</h1>
  //     </>
  //   )
  // }

//

//   function App(){
//     const [color, setColor] = useState(["", ""]);

//     function fun(e){
//       e.preventDefault();
//       const col = e.target[0].value;
//       const bg = e.target[1].value;
    
//       setColor([col, bg]);
//     }

//     return(
//       <>
//         <form onSubmit={fun}>
//           <input type="text" placeholder='Enter Color'/>
//           <input type="text" placeholder='Enter Background Color'/>
//           <input type="submit"/>
//         </form>
//         <App1 content = {color}/>
//       </>
//     )
//   }

// export default App;



// USE CONTEXT 

// import React from 'react'
// import UseContext from './USE_CONTEXT/UseContext';
// import Con1 from './USE_CONTEXT/Con1';

// const App = () => {
//   return (
//     <UseContext>
//       <Con1 />
//     </UseContext>
//   )
// }

// export default App

import React from 'react'
import './App.css'
import Counter_Class from './COUNTER_CLASS/Counter_Class'
// import Form from './FORM/Form'
// import Routers from './FORM/Routers'
// import Modals from './BOOTSTRAP/Modals'
// import Counter from './BOOTSTRAP/Counter'
// import Route from './Router/Routers'
// import Prac from './UseState/Prac'
// import IncDec from './UseState/IncDec'
// import UseContexts from './USE_CONTEXT/UseContext.jsx';
// import Img from './ImgCarousel/Img';
// import Cards from './Card/Cards';
// import App from './App';
// import Card from './Card-CPS/Card';
// import Effect from './USE_EFFECT/Effect';
// import UseRef from './USE_REF/UseRef';
// import Memo from './USE_MEMO/Memo'
// import CreateContext1 from './CreateContext1'
// import One from './Child/One'
// import Two from './Child/Two'
// import UseRed from './USE_REDUCER/UseRed'
// import Callback from './USE_CALLBACK/Callback'
// import Calc from './USE_REDUCER/Calc'

const App = () => {
  return (
    <>
      {/* <Cards/> */}
      {/* <IncDec/> */}
      {/* <Img/> */}
      {/* <Card/> */}
      {/* <Effect/> */}
      {/* <UseRef/> */}
      {/* <UseContexts/> */}

      {/* <CreateContext1>
          <One/>
          <Two/>
      </CreateContext1> */}

      {/* <Memo/> */}
      {/* <UseRed/> */}
      {/* <Callback/> */}
      {/* <Calc/> */}
      {/* <Route/> */}
      {/* <Counter/> */}
      {/* <Modals/> */}
      {/* <Form /> */}
      {/* <Routers/> */}
      <Counter_Class/>
    </>
  )
}

export default App
