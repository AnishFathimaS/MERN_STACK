// // Use Ref ( Reference )

// import React, { useState, useRef, useEffect } from 'react'

// const Day9_Ref = () => {

//     var [ input, setInput ] = useState('')

//     var reference = useRef();

//     console.log('hello');

//     const fun = () => {
//         console.log(reference.current.value)
//     }

//     useEffect(()=> {
//         reference.current = input
//     }, [input])

//     // a => a ( useState )

//     // a => [] ( useRef )
//     // ab => []a

//     return (
//         <>
//             <input 
//             type="text" 
//             ref={reference}
//             onChange={(e) => setInput(e.target.value)}
//             />
//             <h1>{input}</h1> 
//             {/* input => useState  */}

//             <button onClick={fun}>Click</button>
//             <h1>{reference.current}</h1>

//             {/* reference.current => useRef */}

//         </>
//     )
// }

// export default Day9_Ref


// import React, { useState, useRef, useEffect } from 'react'

// const Day9_Ref = () => {

//     var [ input, setInput ] = useState('')

//     console.log('hello');

//     var refer = useRef()

//     const fun = () => {
//         console.log(refer.current.value)
//     }

//     useEffect(() => {
//         refer.current = input;
//     }, [input])

//     return (
//         <>
//             <input 
//             type="text" 
//             ref={refer}
//             onChange={e => setInput(e.target.value)}
//             />
//             <h1>{input}</h1>

//             <button onClick={fun}>Click</button>

//             <h1>{refer.current}</h1>

//         </>
//     )
// }

// export default Day9_Ref

// import React, { useRef, useEffect } from 'react'

// const Day9_Ref = () => {

//     var reference = useRef()

//     useEffect(() => {
//         reference.current.focus();
//     }, [])

//     return (
//         <>
//             <input type="text" />
//             <input type="text" ref={reference} />
//         </>
//     )
// }

// export default Day9_Ref