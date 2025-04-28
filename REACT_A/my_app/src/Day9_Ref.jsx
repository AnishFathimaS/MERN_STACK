import React, { useState, useRef } from 'react'

const Day9_Ref = () => {

    var  [ input, setInput ] = useState('')

    var inputRef = useRef()

    console.log('Page Rendering');

    const fun = () => {
        console.log(inputRef.current.value)
    }

    return (
        <>
            {/* <input type="text" ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} /> */}
            {/* <input type="text" ref={inputRef} /> */}
            {/* <h1>Value is {input}</h1> */}
            {/* <button onClick={fun}>Click</button> */}
        </>
    )
}

export default Day9_Ref 