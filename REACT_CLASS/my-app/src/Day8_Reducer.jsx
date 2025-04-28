// USE REDUCER

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