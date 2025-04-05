import React, { useState, useCallback, useEffect } from 'react'

function Callback() {

    const [num, setNum] = useState(0);
    const [theme, setTheme] = useState(false);
    const [res, setRes] = useState([]);

    const getFun = useCallback(()=>{
        console.log('Changed')
        return [num-1, num, num+1];
    },[num])

    useEffect(()=>{
        setRes(getFun())
    },[getFun])

    const styleObj = {
        background : theme ? 'black' : 'white',
        color : theme ? 'white' : 'black'
    }

    return (
        <div style={styleObj}>
            <h1>{res}</h1>
            <button onClick={()=>setNum(num + 1)}>Increase</button>
            <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        </div>
    )

}

export default Callback