import React, { useContext } from 'react'
import { MyContext } from '../CreateContext1'

function One() {
  const{obj_data}=useContext(MyContext);
  return (
    <div>{obj_data[0].title}</div>
  )
}

export default One
