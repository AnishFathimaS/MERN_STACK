// USE STATE

// import React from 'react'

// const Day4_State_1 = () => {
    
//     var a = 1;

//     const increase = () => {
//         a = a + 1;
//         console.log(a)
//     }

//     return (
//         <>
//             <h1>{a}</h1>
//             <button onClick={increase}>Click</button>
//         </>
//     )
// }

// export default Day4_State_1 

// variable_type [ defaultVariable, changeVariable ] = useState()

// import React, { useState } from 'react'

// const Day4_State_1 = () => {

//     var [ a, setA ] = useState(10)

//     return (
//         <>
//             <h1>{a}</h1>
//             <button onClick = {() => {setA(a+1)}}>Add</button>
//             <button onClick = {() => {setA(a-1)}}>Remove</button>
//         </>
//     )
// }

// export default Day4_State_1

// import React, { useState } from 'react'

// const Day4_State_1 = () => {

//     var [ num, setNum ] = useState(0)

//     const incFun = () => {
//         if(num < 10 ){
//             setNum(num + 1)
//         }
//     }

//     const decFun = () => {
//         if(num > 0){
//             setNum(num - 1)
//         }
//     }


//     return (
//         <>
//             <h1>{num}</h1>
//             <button onClick = {incFun}>Add</button>
//             <button onClick = {decFun}>Remove</button>
//         </>
//     )
// }

// export default Day4_State_1

// import React, { useState } from 'react'

// const Day4_State_1 = () => {

//     var [ show, setShow ] = useState(true);

//     const toggle = () => {
//         setShow(!show)
//     }

//     return (
//         <>
//             <button onClick={toggle}>Click</button>
//             <h2>{show && 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem aliquam repellendus voluptas facere voluptatem sunt atque ut expedita delectus harum exercitationem, temporibus distinctio iure pariatur aut reiciendis rerum debitis nesciunt provident obcaecati? Vero impedit adipisci culpa possimus debitis ab reiciendis rem fuga autem in. Delectus architecto aliquid quasi non unde.'}</h2>
//         </>
//     )
// }

// export default Day4_State_1

// import React, {useState} from 'react'

// const Day4_State_1 = () => {

//     var [ show, setShow ] = useState(false)

//     const toggle = () => {
//         setShow(!show)
//     }

//     return (
//         <>
//             <input type={show ? 'text' : 'password'} />
//             <span onClick={toggle}>{show ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</span>
            
            
//         </>
//     )
// }

// export default Day4_State_1

// import React from 'react'

// const Day4_State_1 = () => {
//   return (
//     <>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque dolorem eum temporibus laudantium dolorum aliquam, molestiae ratione velit possimus ad perspiciatis molestias culpa sequi a adipisci, eos animi? Nobis numquam ut dolorem facilis quisquam distinctio dignissimos voluptatibus mollitia error ipsam ex molestiae similique inventore sed, quaerat ipsa. Exercitationem, natus.</p>
//         <button>Click</button>
//     </>
//   )
// }

// export default Day4_State_1