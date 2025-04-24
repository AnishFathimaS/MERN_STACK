// import React, { useState, useReducer } from 'react'

// const Day8_Reducer = () => {

//     // var [ count, setCount ] = useState(1)

//     const reducerFun = (state, action) => {
//         // return 'Hello'
//         // return { count : state.count + 1 }
//         // console.log(action.type)
//         switch(action.type){
//             case 'add' : 
//                 return { count : state.count +  1 }
//             case 'remove' :
//                 return { count : state.count - 1 }
//             default :
//                 return 'Error'
//         }
//     }

//     var [ state, dispatch ] = useReducer(reducerFun, { count : 1 })

//     // console.log(state)
//     // console.log(state.count)

//     const addFun = () => {
//         // setCount(count + 1)
//         dispatch( { type : 'add' })
//     }

//     const removeFun = () => {
//         // setCount(count - 1)
//         dispatch( { type : 'remove' })
//     }

//     return (
//         <>
//             <button onClick={removeFun}>-</button>
//             <h1>{state.count}</h1>
//             <button onClick={addFun}>+</button>
//         </> 
//     )
// }

// export default Day8_Reducer



// import React, { useReducer } from 'react';

// const initialState = {
//   activeTab: 'home'
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'HOME':
//       return { activeTab: 'home' };
//     case 'ABOUT':
//       return { activeTab: 'about' };
//     case 'CONTACT':
//       return { activeTab: 'contact' };
//     default:
//       return state;
//   }
// }

// const TabSwitcher = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const renderContent = () => {
//     switch (state.activeTab) {
//       case 'home':
//         return <p>🏠 Welcome to the Home Page!</p>;
//       case 'about':
//         return <p>ℹ️ This is the About Page.</p>;
//       case 'contact':
//         return <p>📞 Contact us at: example@email.com</p>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h2>Tab Switcher (useReducer)</h2>
//       <div>
//         <button onClick={() => dispatch({ type: 'HOME' })}>Home</button>
//         <button onClick={() => dispatch({ type: 'ABOUT' })}>About</button>
//         <button onClick={() => dispatch({ type: 'CONTACT' })}>Contact</button>
//       </div>
//       <div style={{ marginTop: '20px' }}>{renderContent()}</div>
//     </div>
//   );
// };

// export default TabSwitcher;

// import React, { useState } from 'react'

// const Day8_Reducer = () => {

//     var [ count, setCount ] = useState(1)

//     const addFun = () => {
//         setCount(count + 1)
//     }

//     const subFun = () => {
//         setCount(count - 1)
//     }

//     return (
//         <>
//             <button onClick={subFun}>-</button>
//             <h1>{count}</h1>
//             <button onClick={addFun}>+</button>
//         </>
//     )
// }

// export default Day8_Reducer

// USE REDUCER 

// SYNTAX

// var [ state, dispatch ] = useReducer(function_name, object_value) 

import React, { useReducer } from 'react'

const Day8_Reducer = () => {

    // const reducerFun = (state, action) => {
    //     return 'hello'
    // }

    function reducerFun(){
        return 'hello'
    }

    var [ state, dispatch ] = useReducer(reducerFun, { count : 1 })
    console.log(dispatch());
    // console.log(state)
    // console.log(state.count)

    const addFun = () => {
        // console.log(dispatch);
        // dispatch( {  } )
    }

    const subFun = () => {

    }

    return (
        <>
            <button onClick={subFun}>-</button>
            <h1></h1>
            <button onClick={addFun}>+</button>
        </>
    )
}

export default Day8_Reducer