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

import React, { useEffect } from 'react'

const Day6_Effect_1 = () => {
    useEffect(() => {
        console.log('Component mounted!');
    }, []);
    
    return (
        <div>
          <h1>Hello, useEffect!</h1>
        </div>
    );
}

export default Day6_Effect_1