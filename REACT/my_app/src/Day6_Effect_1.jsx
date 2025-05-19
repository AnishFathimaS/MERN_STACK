// USE EFFECT 

// useEffect(() => {

// }, [])

// with dependency [ it runs when the count is change ]

// import React, { useState, useEffect } from 'react'

// const Day6_Effect_1 = () => {

//   var [ count, setCount ] = useState(1)

//   useEffect(() => {
//     console.log('Number Changed');
//   }, [count])

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => {setCount(++count)}}>Click</button>
//     </>
//   )
// }

// export default Day6_Effect_1


// Empty Dependency [ it runs only component is render ]

// import React, { useState, useEffect } from 'react'

// const Day6_Effect_1 = () => {

//   var [ count, setCount ] = useState(1)

//   useEffect(() => {
//     console.log('Number Changed');
//   }, [])

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => {setCount(++count)}}>Click</button>
//     </>
//   )
// }

// export default Day6_Effect_1


// No dependency [ it runs when the component is reload and when the code is change ]

// import React, { useState, useEffect } from 'react'

// const Day6_Effect_1 = () => {

//   var [ count, setCount ] = useState(1)

//   useEffect(() => {
//     console.log('Number Changed');
//   })

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => {setCount(++count)}}>Click</button>
//     </>
//   )
// }

// export default Day6_Effect_1


// import React, { useState, useEffect } from 'react'

// const Day6_Effect_1 = () => {
//   const [name, setName] = useState("");

//   useEffect(() => {
//     console.log("Name updated:", name);
//   }, [name]);

//   return (
//     <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
//   );
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
//             sdfghjkl;
//             dfghjkl
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
//                     <Container>
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