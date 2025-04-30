// import React from 'react'
// import Day10_Context_3 from './Day10_Context_3'

// const Day10_Context_2 = ({value}) => {
//     return (
//         <>
//             <h1>{value}</h1>
//             <Day10_Context_3 value={value} />
//         </>
//     )
// }

// export default Day10_Context_2

import React, { useContext } from 'react'
import { myContext } from './Day10_Context_1'

const Day10_Context_2 = () => {

    const value  = useContext(myContext)

    return (
        <>
            <h1>{value}</h1>
        </>
    )
}

export default Day10_Context_2