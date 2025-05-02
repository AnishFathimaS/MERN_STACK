import React, { createContext, useState } from 'react'

export const myContext = createContext()

const CalculatorContext = ({children}) => {

    var [ input, setInput ] = useState("")

    const display = (e) => {
        setInput(input + e.target.value);
    }

    const sum = () => {
        try{
            setInput(eval(input))
        }
        catch{
            alert('Invalid Expression')
            setInput('')
        }
    }

    const allClear = () => {
        setInput('')
    }

    const deleteNum = () => {
        setInput(input.slice(0, -1))
    }

    const myContextValue = {
        input, 
        display, 
        sum, 
        allClear,
        deleteNum
    }

    return (
        <CalculatorContext value={myContextValue}>
            {children}
        </CalculatorContext>
    )
}

export default CalculatorContext