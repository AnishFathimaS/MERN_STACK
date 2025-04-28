// EXAMPLE - 1

// import React, { useReducer } from 'react'

// const Day8_Reducer = () => {

//     var obj = {
//         add : 'add',
//         sub : 'sub',
//         multiple : 'multiple'
//     }

//     const reducerFun = (state, action) => {
//         switch(action.type){
//             case obj.add:
//                 return { count : state.count + 1 }
//             case obj.sub:
//                 return { count : state.count - 1 }
//             case obj.multiple:
//                 return { count : state.count * 2 }
//         }
//     }

//     var [ state, dispatch ] = useReducer(reducerFun, { count : 1 })

//     const addFun = () => {
//         dispatch({type : obj.add})
//     }

//     const subFun = () => {
//         dispatch({type : obj.sub})
//     }

//     const multipleFun = () => {
//         dispatch({type : obj.multiple})
//     }

//     return (
//         <>
//             <button onClick={addFun}>Add</button>
//             <button onClick={subFun}>Sub</button>
//             <button onClick={multipleFun}>Mulitple</button>
//             <h1>{state.count}</h1>
//         </>
//     )
// }

// export default Day8_Reducer

// EXAMPLE - 2 

// import React, { useReducer } from 'react';

// const reducerFun = (state, action) => {
//     switch (action.type) {
//         case 'TOGGLE':
//             return { obj: !state.obj };
//         default:
//             return state;
//     }
// };

// const Day8_Reducer = () => {

//     const [state, dispatch] = useReducer(reducerFun, { obj: true });

//     const fun = () => {
//         dispatch({ type: 'TOGGLE' });
//     };

//     return (
//         <>
//             <button onClick={fun}>Click</button>
//             <h1>{state.obj && 'Hello'}</h1>
//         </>
//     );
// };

// export default Day8_Reducer;

// EXAMPLE - 3

// import React, { useReducer } from 'react'

// const Day4_State_1 = () => {

//     const reducerFun = (state, action) => {
//         switch (action.type) {
//             case 'TOGGLE':
//                 return { show: !state.show };
//             default:
//                 return state;
//         }
//     };
    

//     const [state, dispatch] = useReducer(reducerFun, { show: false });

//     return (
//         <>
//             <input type={state.show ? 'text' : 'password'} />
//             <button onClick={() => dispatch({ type: 'TOGGLE' })}>Click</button>
//         </>
//     );
// };

// export default Day4_State_1