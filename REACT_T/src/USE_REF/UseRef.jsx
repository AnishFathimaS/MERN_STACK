// import React, {useEffect, useRef} from 'react'

// const UseRef = () => {

//     const reff1 = useRef(null);
//     const reff2 = useRef(null);
    
//     useEffect(()=>{
//         reff1.current.focus()
//     },[])

//     const fun = () => {
//         reff2.current.focus()
//     }

//     return (
//         <>
//             <input type="text" ref={reff1} />
//             <input type="text" ref={reff2} />
//             <input type="submit" onClick={fun} />
//         </>
//     )
// }

// export default UseRef

import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const [a, setA] = useState('');
    const reff = useRef(null);

    useEffect(()=>{
        reff.current = a;
    },[a])

    return (
        <>
            <input type="text" ref={reff} onChange={(e) => {setA(e.target.value)}} /><br/>
            <span>Current Word : {a}</span><br />
            <span>Previous Word : {reff.current}</span><br />
        </>
    )
}

export default UseRef

