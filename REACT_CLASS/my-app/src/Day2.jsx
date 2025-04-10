// import React from 'react'

// const Day2 = () => {
//     var a = 'Hello';
//     var b = 'World';
//     return (
//         <>
//             <h1>{a} {b}</h1>
//         </>
//     )
// }

// export default Day2

// import React from 'react'

// const Day2 = () => {
//     var a = 10;
//     var b = 20;
//     return (
//         <>
//             <h1>{a} + {b} = {a+b}</h1>
//         </>
//     )
// }

// export default Day2

// ARRAY

// import React from 'react'

// const Day2 = () => {
//     var arr = ['html', 'css', 'bootstrap']
//     return (
//         <>
//             <h1>{arr[0]}</h1>
//             <h1>{arr[1]}</h1>
//             <h1>{arr[2]}</h1>
//         </>
//     )
// }

// export default Day2

// ARRAY USING MAP

// import React from 'react'

// const Day2 = () => {
//     var arr = ['html', 'css', 'bootstrap', 'javascript']
//     return (
//         <>
//             {arr.map((value, index) => {
//                 return(
//                     <h1 key={index}>{value}</h1>
//                 )
//             })}
//         </>
//     )
// }

// export default 

// import React from 'react'

// const Day2 = () => {
    // var obj = {
    //     name : 'Abinaya', 
    //     age :18,
    //     place : 'Trichy'
    // }

//     var obj = {
//         name : 'Abinaya', 
//         age :18,
//         place : {
//             street : 'abc street',
//             doorno : 8,
//             city :'trichy',
//         },
//     }

//     return (
//         <>
//             <h1>{obj.age}</h1>
//             <h1>{obj.place.city}</h1>
//         </>
//     )
// }

// export default Day2

// import React from 'react'

// const Day2 = () => {

//     var json_obj = [ 
//         {
//             name :'Abinaya',
//             age : 10
//         },
//         {
//             name : 'Anu',
//             age : 15
//         },
//         {
//             name : 'Hari',
//             age : 20
//         }
//     ]

//     return (
        <>
            {/* <h1>{json_obj[0].name}</h1> */}
            {/* <h1>{json_obj[1].name}</h1> */}
            {/* <h1>{json_obj[2].name}</h1> */}
            {/* {json_obj.map((value, index) => {
                return(
                    <h1>{value.name}</h1>
                )
            })} */}
        </>
//     )
// }

// export default Day2

// import React from 'react'

// const Day2 = () => {
//     var a = 30;
//     var b = 20;
//     return (
//         <> 
//            <h1> {(a>b) ? 'True' : 'False'}</h1>
//         </>
//     )
// }

// export default Day2

// import React from 'react'

// const Day2 = () => {
//     async function fun(){
//         var url = await fetch('https://jsonplaceholder.typicode.com/users');
//         var data = await url.json()
//         {data.map((value) => {
//             return(
//                 console.log(value.name)
//             )
//         })}
//     }
//     fun()
// }

// export default Day2

// import React from 'react'

// const Day2 = () => {
//     return (
//         <>
//             <h1 style={{'color' : 'red', 'background-color' : 'black'}}>Hello</h1>
//             <h1 style={{color : 'red', backgroundColor : 'black'}}>Hello</h1>
//         </>
//     )
// }

// export default Day2

// import React from 'react'

// const Day2 = () => {
//     var obj = {
//         color : 'red',
//         backgroundColor : 'blue'
//     }
//     return (
//         <>
//             <h1 style={obj}>Hellooo</h1>
//         </>
//     )
// }

// export default Day2

import React from 'react'

const Day2 = () => {
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Day2