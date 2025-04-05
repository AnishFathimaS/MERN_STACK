import React, { useReducer, useState } from 'react'

const ADD="dfdfd";
const SUB="SUzdfdsfdsfBTRACTION";


function Calc() {
  const [box1,setBox1]=useState(0);
  const [box2,setBox2]=useState(0);
  function ReducerFn(state,action){
      if(action.type===ADD){
        return {a:eval(Number(action.num1)+action.operator+Number(action.num2))}
      }
  }  
  const [state,dispatch]=useReducer(ReducerFn,{a:0});
  return (
    <>
      <h1>{state.a}</h1>
      <input type="number" name='box1' value={box1} onChange={(e)=>{setBox1(e.target.value)}}/>
      <input type="number" name='box2'  value={box2}  onChange={(e)=>{setBox2(e.target.value)}}/>
      <button onClick={()=>{dispatch({type:ADD,num1:box1,num2:box2,operator:'+'});}}>+</button>
      <button onClick={()=>{dispatch({type:ADD,num1:box1,num2:box2,operator:'-'});}}>-</button>
      <button onClick={()=>{dispatch({type:ADD,num1:box1,num2:box2,operator:'*'});}}>*</button>
      <button onClick={()=>{dispatch({type:ADD,num1:box1,num2:box2,operator:'/'});}}>/</button>
    </>
  )
}

export default Calc