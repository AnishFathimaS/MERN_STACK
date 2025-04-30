// import React from 'react'
// import Day10_Context_2 from './Day10_Context_2.jsx';

// const Day10_Context_1 = () => {

//     var value = 10;

//     return (
//         <>
//             <Day10_Context_2 value={value} />
//         </>
//     )
// }

// export default Day10_Context_1  


import React, { createContext } from 'react'
import Day10_Context_2 from './Day10_Context_2';

export const myContext = createContext()

const Day10_Context_1 = () => {

    var value = 10;

    return (
        <>
            <myContext.Provider value={value}>
                <Day10_Context_2 />
            </myContext.Provider>

        </>
    )
}


export default Day10_Context_1