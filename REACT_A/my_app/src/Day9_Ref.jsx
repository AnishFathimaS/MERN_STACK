// import React, { useState, useRef, useEffect } from 'react'

// const Day9_Ref = () => {

//     const [ input, setInput ] = useState('')

//     console.log('Rerender');

//     const refer = useRef();

//     const display = () => {
//         console.log(refer.current)
//     }

//     useEffect(() => {
//         refer.current = input
//     }, [input])

//     return (
//         <>
//             <input 
//                 type="text" 
//                 ref={refer}
//                 value={input} 
//                 onChange={(e) => setInput(e.target.value)} 
//             />
//             <h1>{input}</h1>
//             <button onClick={display}>Click</button>
//             <h1>{refer.current}</h1>
//         </>
//     )
// }

// export default Day9_Ref

// import React, { useState, useRef, useEffect } from 'react'

// const Day9_Ref = () => {

//     var  [ input, setInput ] = useState('')

//     console.log('fghjk');
    
//     var refer = useRef()

//     function fun(){
//         console.log(refer.current.value)
//     }

//     useEffect(() => {
//         refer.current = input
//     }, [input])

//     return (
//         <>
//             <input 
//             type="text" 
//             ref={refer}
//                 onChange={(e) => setInput(e.target.value)} 
//             />
//             <h1>{input}</h1>
//             <button onClick={fun}>Click</button>
//             <h1>{refer.current}</h1>

//         </>
//     )
// }

// export default Day9_Ref

import React, { useRef } from 'react'

const Day9_Ref = () => {

    var refer  =  useRef()

    useEffect(() => {
        refer.current.focus()
    }, [])

  return (
    <>
        <input type="text" ref={refer} />
    </>
  )
}

export default Day9_Ref