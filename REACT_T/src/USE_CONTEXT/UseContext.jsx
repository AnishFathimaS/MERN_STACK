import React , { createContext, useState } from 'react'

const MyContext = createContext()

const UseContext = ({children}) => {

    const [a, setA] = useState('Anis')

    // let a = 8

    return (
        <MyContext.Provider value={a}>
            {children}
        </MyContext.Provider>
    )
}

export default UseContext
