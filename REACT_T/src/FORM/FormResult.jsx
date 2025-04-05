import React from 'react'
import { useLocation } from 'react-router-dom'

const FormResult = () => {

    const data = useLocation();
    const {name, age, from} = data.state.MyData
    
    return (
        <>
            <h1>Name : {name}</h1>
            <h1>Age : {age}</h1>
            <h1>From : {from}</h1>
        </>
    )
}

export default FormResult