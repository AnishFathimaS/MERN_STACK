// import React, { useState, useEffect } from 'react'

// const Day6_Effect_1 = () => {
//     const [state, setState] = useState({});

//     useEffect(() => {
        
//         (async function Myfun(){
//             const url = await fetch('https://jsonplaceholder.typicode.com/posts');
//             const data = (await url.json());
//             setState(data);
//         }())

//     },[]);

//     return(
//         <>
//             {(state.length !== undefined) ? state.map((e)=>{
//                 return <h1 key={e.id}>{e.title}</h1>
//             }) : 'Loading'}
            
//         </>
//     )
// }

// export default Day6_Effect_1


// import React, { useState, useEffect } from 'react';

// const UseEffect = () => {
  
//   const [num, setNum] = useState(0)

//   const Dec = () =>{
//     setNum(num - 1)
//   }

//   const Inc = () =>{
//     setNum(num + 1)
//   }

//   useEffect(() => {
//     console.log('Number changed:', num);
//   }, [num]); 

//   return (
//     <div>
//       <button onClick={Dec}>-</button>
//       <p>{num}</p>
//       <button onClick={Inc}>+</button>
//     </div>
//   );
// };

// export default UseEffect;


// import React, { useEffect, useState } from 'react';

// const NameChecker = () => {
//     const [name, setName] = useState('');
//     const [isLong, setIsLong] = useState(false);

//     useEffect(() => {
//         setIsLong(name.length > 5);
//     }, [name]);

//     return (
//         <>
//             <input type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
//             <p>{isLong ? 'Name is long enough' : 'Name is short'}</p>
//         </>
//     );
// };

// export default NameChecker;

// Use Effect

// No Dependency =>  Runs when component loads and also Run when changes on the component

// import React from 'react'
// import { useEffect } from 'react'

// const Day7_Effect = () => {

//   useEffect(() => {
//     console.log("Running")
//   })

//   return (
//     <>
//       fghjklfghjkfghj
//     </>
//   )
// }

// export default Day7_Effect


// Empty Dependency =>  Run only once when component loads.

// import React from 'react'
// import { useEffect } from 'react'

// const Day7_Effect = () => {

//   useEffect(() => {
//     console.log("Empty Dependency")
//   } , [])

//   return (
//     <>
//       <p>Hello</p>
//     </>
//   )
// }

// export default Day7_Effect


// With Dependency

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Day7_Effect = () => {

  const [count , setCount] = useState(0)

  const Fun = () => {
    setCount(count + 1)
  }

  // console.log("Count Increasing")

  useEffect(() => {
    console.log("Count Increasing")
  } , [count])

  return (
    <>
      <button onClick={Fun}>Add</button>
      <h1>{count}</h1>
    </>
  )
}

export default Day7_Effect