import React, { useRef, useState } from 'react'

const Day9_Ref = () => {

    var [ input, setInput ] = useState('')

    const inputRef = useRef()

    console.log("Page Rendering")

    return (
        <>
            <input type="text" onChange={(e) => {setInput(e.target.value)}} />
            <button onCl>Click</button>
        </>
    )
}


export default Day9_Ref