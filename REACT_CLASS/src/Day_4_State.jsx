// import React from 'react'

// const Day_4_State = () => {

//     var num = 1;

//     function fun(){
//         num = num + 1;
//         console.log(num)
//     }

//     return (
//         <>
//             <h1>{num}</h1>
//             <button onClick={fun}>Click</button>
//         </>
//     )
// }

// export default Day_4_State


// import React, { useState } from 'react'

// const Day_4_State = () => {

//     var [ num, setNum ] = useState(1)

//     const fun = () => {
//         setNum(num + 1)
//     }

//     return (
//         <>
//             <h1>{num}</h1>
//             <button onClick={fun}>Click</button>
//         </>
//     )
// }

// export default Day_4_State

// import React, { useState } from 'react'

// const Day_4_State = () => {

//     var [ toggle, setToggle ] = useState(true)
 
//     const toggleFun = () => {
//         setToggle(!toggle)
//     }

//     return (
//         <>
//             <button onClick={toggleFun}>
//                 {toggle ? 'Hide' : 'Show'}
//             </button>

//             <p>{ toggle && 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam doloribus quaerat eveniet pariatur laborum, obcaecati ab. Quae enim repellat cupiditate facilis consectetur, repudiandae aperiam qui delectus nulla ipsam eaque quia cumque commodi nesciunt minima fugit, aspernatur officiis possimus totam molestias ab modi. Fugit repellendus veritatis eveniet odio necessitatibus id!' }</p>
//         </>
//     )
// }

// export default Day_4_State

// import React, { useState } from 'react'

// const Day_4_State = () => {

//     var [ toggle, setToggle ] = useState(false)

//     const toggleFun = () => {
//         setToggle(!toggle) // false
//     }

//     return (
//         <>
//             <input type={ toggle ? 'text' : 'password' } />
//             <button onClick={toggleFun}>
//                 {toggle ? 'Hide' : 'Show'}
//             </button>
//         </>
//     )
// }

// export default Day_4_State