import React, { useEffect, useState } from 'react'
export const MyContext=React.createContext();
function CreateContext1({children}) {
const [obj_data,setObj]=useState({})
useEffect(()=>{
    async function MyFun(){
        const obj=await fetch('https://jsonplaceholder.typicode.com/posts');
        setObj(await obj.json())
    }
    MyFun()
},[])


  return (
    <>
        <MyContext.Provider value={{obj_data}}>
            {children}
        </MyContext.Provider>
    </>
  )
}

export default CreateContext1
