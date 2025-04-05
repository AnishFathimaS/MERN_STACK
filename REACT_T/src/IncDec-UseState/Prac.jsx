import React, { useState } from 'react'
import PracFun from './PracFun';

const Prac = () => {
    const [value, setValue] = useState([]);
    return (
        <>
           <PracFun value = {value} />
           <button onClick={() => setValue((e)=>[...e, "Hello"])}>Click</button>
        </>
    )
}

export default Prac