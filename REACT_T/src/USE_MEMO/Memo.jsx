import React, { useMemo, useState } from 'react'

function Memo() {
    const [num, setNum] = useState(0);
    const [theme, setTheme] = useState(false);
    const myValue = useMemo(()=>{
        return slowDown(num)
    },[num])


    const themeColor = {
        background : theme ? 'black' : 'white',
        color : theme ? 'white' : 'black'
    }
    return (
        <div style={themeColor}>
            <h1>{myValue}</h1>
            <button onClick={()=>{setNum(num+1)}}>Click</button>
            <button onClick={()=>{setTheme(!theme)}}>Theme Color</button>
        </div>
    )
}

function slowDown(num){
    console.log('Changed');
    for(let i = 0; i < 1000000000; i++){}
    return num
}

export default Memo
