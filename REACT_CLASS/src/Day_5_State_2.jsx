// import React, { useState } from 'react'

// const Day_5_State_2 = () => {

//     var [ time, setTime ] = useState(new Date().toLocaleTimeString())

//     const timeFun = () => {
//         setTime(new Date().toLocaleTimeString())
//     }

//     setInterval(timeFun, 1000)

//     return (
//         <>
//             <h1>{time}</h1>
//         </>
//     )
// }

// export default Day_5_State_2

    
// import React, { useState } from 'react'

// const Day_5_State_2 = () => {

//     var [ text, setText ] = useState('')

//     var [ qr, setQr ] = useState('')

//     const inputText = (e) => {
//         setText(e.target.value)
//     }

//     const generateQR = () => {
//         setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
//         setText('')
//     }

//     return (
//         <>
//             <input type="text" value={text} onChange={inputText} />
//             <button onClick={generateQR}>Generate</button>
//             <br />
//             { qr ?  <img src={qr} alt="" /> : ''}
//         </>
//     )
// }

// export default Day_5_State_2