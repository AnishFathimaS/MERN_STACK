// USE EFFECT 

// useEffect(() => {

// }, [])


// Page Render, Count Change, Code Update => Hello

// import React, { useState } from 'react'

// const Day6_Effect_1 = () => {

//     var [ count, setCount ] = useState(1)

//     const countFun = () => {
//         setCount(++count)
//     }

//     console.log('Hello')

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={countFun}>Click</button>
//             fasdfsdfads
//         </>
//     )
// }

// export default Day6_Effect_1

// Use Effect = 3 Types 

// With Dependency 
// Without Dependency 
// Empty Dependency

// 1. With Dependency => Page Render, Count Change, Code Update

// import React, { useEffect, useState } from 'react'

// const Day6_Effect_1 = () => {

//     var [ count, setCount ] = useState(1)

//     const countFun = () => {
//         setCount(++count)
//     }

//     useEffect(() => {
//         console.log('Number Changed');
//     }, [count])

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={countFun}>Click</button>
//         </>
//     )
// }

// export default Day6_Effect_1

// 2. Without Dependency => Page Render, Count Change, Code Update

// import React, { useEffect, useState } from 'react'

// const Day6_Effect_1 = () => {

//     var [ count, setCount ] = useState(1)

//     const countFun = () => {
//         setCount(++count)
//     }

//     useEffect(() => {
//         console.log('Number Changed');
//     })

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={countFun}>Click</button>
//         </>
//     )
// }

// export default Day6_Effect_1

// 3. Empty Dependency => Page Render, Code Update

// import React, { useEffect, useState } from 'react'

// const Day6_Effect_1 = () => {

//     var [ count, setCount ] = useState(1)

//     const countFun = () => {
//         setCount(++count)
//     }

//     useEffect(() => {
//         console.log('Number Changed');
//     }, [])

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={countFun}>Click</button>
//         </>
//     )
// }

// export default Day6_Effect_1

// Example - 1 

// import React, { useState, useEffect } from 'react'

// const Day6_Effect_1 = () => {
//     const [name, setName] = useState("");

//     useEffect(() => {
//         console.log("Name updated:", name);
//     }, [name]);

//     return (
//         <>
//             <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
//         </>
//     );
// }

// export default Day6_Effect_1

// import React, { useState, useEffect } from 'react'

// const Day6_Effect_1 = () => {

//     var [ bgColor, setBgColor ] = useState('white')

//     useEffect(() => {
//         document.body.style.backgroundColor = bgColor;
//         alert('Color Changed');
//     }, [bgColor])

//     return (
//         <>
//             <button onClick={() => {setBgColor('blue')}}>Blue</button>
//             <button onClick={() => {setBgColor('red')}}>Red</button>
//         </>
//     )
// }

// export default Day6_Effect_1

// import React, { useState, useEffect } from 'react'
// import { Container, Card } from 'react-bootstrap'

// const Day6_Effect_1 = () => {

//     var [ data, setData ] = useState([])

//     useEffect(() => {
//         const fun = async () => {
//             var url = await fetch('https://jsonplaceholder.typicode.com/users');
//             var data = await url.json();
//             setData(data)
//         }
//         fun()
//     })

//     return (
//         <>
//             <h1>User Name</h1>
//             {data.map((value, index) => {
//                 return(
//                     <Container key={index}>
//                         <Card>
//                             <Card.Body>
//                                 <h3>{value.name}</h3>
//                                 <h3>{value.email}</h3>
//                                 <h3>{value.username}</h3>
//                             </Card.Body>
//                         </Card>
//                     </Container>
//                 )
//             })}
//         </>
//     )
// }

// export default Day6_Effect_1