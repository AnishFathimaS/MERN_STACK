// import React, { useReducer } from 'react'

// const Day8_Reducer = () => {

//     const obj = {
//         add : 'add',
//         sub : 'sub',
//         mulitple : 'multiple'
//     }

//     const reducerFun = (state, action) => { 
//         switch(action.type){
//             case obj.add : 
//                 return { count : state.count + 1 }
//             case obj.sub : 
//                 return { count : state.count - 1 }
//             case obj.mulitple :
//                 return { count : state.count * 2 }
//         }
//     }

//     var  [ state, dispatch ] = useReducer(reducerFun, { count : 1 })

//     const addFun = () => {
//         dispatch({type : obj.add})
//     }

//     const subFun = () => {
//         dispatch({type : obj.sub})
//     }

//     const multipleFun = () => {
//         dispatch({type : obj.mulitple})
//     }

//     return (
//         <>
//             <button onClick={addFun}>Add</button>
//             <button onClick={subFun}>Sub</button>
//             <button onClick={multipleFun}>Multiple</button>
//             <h1>{state.count}</h1>
//         </>
//     )
// }

// export default Day8_Reducer





// import React, { useState } from 'react';

//     const Day4_State_1 = () => {
//       const [isVisible, setIsVisible] = useState(true); 
    
//       const toggleVisibility = () => {
//         setIsVisible(!isVisible); 
//       };
    
//       return (
//         <div>
//           <button onClick={toggleVisibility}>
//             {isVisible ? 'Hide' : 'Show'} Text
//           </button>
//            <h1>{isVisible && 'This is some text that can be shown or hidden.'}</h1>
//         </div>
//       );
//     };
    
//     export default Day4_State_1;