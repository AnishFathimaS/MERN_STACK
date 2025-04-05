import React, { useReducer } from 'react'

function UseRed() {

    function reducerFun(state, action){
        if(action.type === 'add'){
            return { count : state.count + 1}
        }
        if(action.type === 'sub'){
            return { count : state.count - 1}
        }
    }

    const [state, dispatch] = useReducer(reducerFun, {count : 0})
    return (
        <>
            <button onClick={()=>{dispatch({type:'sub'})}}>-</button>
            <span>{state.count}</span>
            <button onClick={()=>{dispatch({type:'add'})}}>+</button>
        </>
    )

}

export default UseRed