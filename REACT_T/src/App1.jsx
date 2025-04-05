import React from 'react'

// function App1(props) {
//   return (
//     <div>
//         <h1>{props.a}</h1>
//     </div>
//   )
// }

// function App1({obj}){
//     const {name, age} = obj;
//     return(
//         <>
//             <h1>{name}</h1>
//             <h1>{age}</h1>
//         </>
//     )
// }

// function App1(props){
//     return(
//         <>
//             <h1>{props.obj.name}</h1>
//             <h1>{props.obj.age}</h1>
//         </>
//     )
// }

// 29 - 10 - 2024

function App1(props) {

    return (
        <div>
            <h1 style={{ color: props.content[0], backgroundColor: props.content[1] }}> 
                {props.content[0]}
            </h1>
        </div>
    )
}

export default App1