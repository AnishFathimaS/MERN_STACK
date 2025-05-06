import React, { createContext, useState } from 'react'

export const myContext = createContext()

const Crud_Context = ({children}) => {

    const [ input, setInput ] = useState('')
    const [ list, setList ] = useState([])

    const [ showModal, setShowModal ] = useState(false)
    const [ viewText, setViewText ] = useState()

    const addFun = () => {
        if(input.length === 0){
            alert('Please Enter Any Task !')
        }
        else{
            setList(list.concat(input))
            setInput('')
        }
    }

    const deleteFun = (index) => {
        setList(list.filter((a, i) => i !== index))
    }

    const viewFun = (value) => {
        setShowModal(true)
        setViewText(value)
    }

    const myContextValue = {
        input, setInput, 
        addFun,
        list,
        viewFun, 
        deleteFun, 
        viewText, 
        showModal, setShowModal
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default Crud_Context