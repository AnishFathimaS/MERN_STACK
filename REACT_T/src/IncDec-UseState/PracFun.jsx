import React from 'react'

const PracFun = ({value}) => {
  return (
    <>
        {value.map((val,ind) =>{
            return <h1 key={ind}>{val}</h1>
        })}
    </>
  )
}

export default PracFun