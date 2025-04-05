import React, { useState } from 'react'

function IncDec() {
  var [val,setval] = useState(0)
  var [err, setErr] = useState('')

  function Inc(){
    if(val<10){
      setval(val+1);
      setErr("")
    }
    else{
      setErr("This is the Maximum Limit")
    }
  }

  function Dec(){
    if(val>0){
      setval(val-1);
      setErr("");
    }
    else{
      setErr('This is the Minimum Limit')
    }
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex">
          <button className='btn btn-danger mr-4' onClick={Dec}>-</button>
          <h2>{val}</h2>
          <button className='btn btn-success ml-4' onClick={Inc}>+</button>
        </div>
        <h3 className='text-danger mt-3'>{err}</h3>
      </div>
    </div>
  )
}

export default IncDec