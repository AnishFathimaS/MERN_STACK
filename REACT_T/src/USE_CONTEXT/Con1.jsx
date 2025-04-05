import React, { useContext } from 'react'
import { MyContext } from './UseContext'

const Con1 = () => {

    const a = useContext(MyContext)
    
    return (
        <>
            <h1>{a}</h1>
        </>
    )   

}

export default Con1

