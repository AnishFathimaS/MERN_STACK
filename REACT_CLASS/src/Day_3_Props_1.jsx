// import React from 'react'
// import Day_3_Props_2 from './Day_3_Props_2';

// const Day_3_Props_1 = () => {

//     var a = 10;

//     return (
//         <>
//             <Day_3_Props_2 values={a} />
//         </>
//     )
// }

// export default Day_3_Props_1


// import React from 'react'
// import Day_3_Props_2 from './Day_3_Props_2'

// const Day_3_Props_1 = () => {

//     var name  = 'Abinaya'
//     var age = 20

//     return (
//         <>
//             <Day_3_Props_2 user_name={name} user_age={age} />
//         </>
//     )
// }

// export default Day_3_Props_1


// import React from 'react'
// import Day_3_Props_2 from './Day_3_Props_2'

// const Day_3_Props_1 = () => {

//     var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]

//     return (
//         <>
//             <Day_3_Props_2 value={arr} />
//         </>
//     )
// }

// export default Day_3_Props_1

// import React from 'react'
// import Day_3_Props_2 from './Day_3_Props_2'

// const Day_3_Props_1 = () => {

//     var obj = {
//         name : 'Siva',
//         age : 25,
//         place : 'trichy'
//     }

//     return (
//         <>
//             <Day_3_Props_2 value={obj} />
//         </>
//     )
// }

// export default Day_3_Props_1

import React from 'react'
import Day_3_Props_2 from './Day_3_Props_2'

const Day_3_Props_1 = () => {

    var details = [
        {
            name  : 'abinaya',
            age : 24,
            place : 'trichy'
        },
        {
            name : 'anu',
            age : 20,
            place : 'chennai'
        },
        {
            name : 'siva',
            age : 24,
            place : 'Madurai'
        }
    ]


    return (
        <>
            <Day_3_Props_2  data={details}/>
        </>
    )
}

export default Day_3_Props_1