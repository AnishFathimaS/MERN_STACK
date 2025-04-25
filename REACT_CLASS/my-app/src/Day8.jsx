// import React ,{useReducer} from 'react'

// const Day8 = () => {

//     var ACTION = {
//         Increase : "inc" , 
//         Decrease : "dec"
//     }

//     const reducerFun = (state, action) => {
//         // console.log("Hello")
//         // console.log(action)
//         switch(action.type){
//             case ACTION.Increase : 
//                 return {count : state.count + 1}
//             case ACTION.Decrease : 
//                 return {count : state.count - 1}
//             default :
//                 return {state}
//         }
//     }

//     const [state , dispatch] = useReducer(reducerFun , {count : 1})

//     // console.log(state)

//     const AddFun = () =>{
//         dispatch({type : ACTION.Increase})
//     }

//     const RemoveFun = () => {
//         dispatch({type : ACTION.Decrease})
//     }

//   return (
//     <>
//         <button onClick={AddFun}>Add</button>
//         <button onClick={RemoveFun}>Remove</button>
//         <h1>{state.count}</h1>
//     </>
//   )
// }

// export default Day8

// USE REDUCER

// import React, { useState } from 'react'

// const Day8 = () => {

//     var [ count, setCount ] =  useState(1)

//     const decFun = () => {
//         setCount(count - 1)
//     }

//     const incFun = () => {
//         setCount(count + 1)
//     }

//     return (
//         <>
//             <button onClick={decFun}>-</button>
//             <h1>{count}</h1>
//             <button onClick={incFun}>+</button>
//         </>
//     )
// }

// export default Day8

// var [ state, dispatch ] = useReducer(reducer_Function_Name, { key : value })

// import React, { useReducer } from 'react'

// const Day8 = () => {

//     const reducerFun = (count, action) => {
//         // console.log(action.type);
//         switch(action.type){
//             case 'add' :
//                 return { count : count.count + 1 }
//             case 'dec' :
//                 return { count : count.count - 1 }  
//             default :
//                 return 'Error'              
//         }
//     }

//     var [ count, setCount ] = useReducer(reducerFun, { count : 1 })

//     // console.log(state); // { count : 1 }
//     // console.log(state.count); // 1
    
//     const incFun = () => {
//         setCount({type : 'add'})
//     }

//     const decFun = () => {
//         setCount({type : 'dec'})
//     }
    

//     return (
//         <>
//             <button onClick={incFun}>Add</button>
//             <button onClick={decFun}>Remove</button>
//             <h1>{count.count}</h1>
//         </>
//     )
// }

// export default Day8