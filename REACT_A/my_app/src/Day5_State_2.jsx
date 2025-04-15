// DIGITAL CLOCK

    // import React, { useState } from 'react'
    
    // const Day5_State_2 = () => {

    //     var [time, setTime] = useState(new Date().toLocaleTimeString())

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
    
    // export default Day5_State_2


// QR CODE GENERATOR

    // import React, {useState} from 'react'
    
    // const Day5_State_2 = () => {

    //     var [ text, setText ] = useState('')
    //     var [ qr, setQr ] = useState('')

    //     const inputText = (event) => {
    //         setText(event.target.value)
    //     }

    //     const generateQR = () => {
    //         setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
    //     }

    //     return (
    //         <>
    //             <input type="text" onChange={inputText}/>
    //             <button onClick={generateQR}>Generate</button>
    //             <br />
    //             {qr && <img src={qr} alt="" />}
    //         </>
    //     )
    // }
    
    // export default Day5_State_2



// SIMPLE CALCULATOR 

    // import React, { useState } from 'react';

    // const Day5_State_2 = () => {

    //   const [value, setValue] = useState("")

    //   // To display the expression
    //   const display = (e) => {
    //     setValue(value + e.target.value)
    //   }

    //   // To delete last value in input box
    //   const delete_button = () => {
    //     setValue(value.toString().slice(0,-1))
    //   }
    
    //   // To clear all the values in input box
    //   const clear_button = () => {
    //     setValue("")
    //   }

    //   // To display the result of the expression  
    //   const sum = () => {
    //     try {
    //       setValue(eval(value));
    //     } catch (error) {
    //       alert("Invalid Expression");
    //       setValue(""); 
    //     }
    //   }
    
    //   return (
    //     <div className='container'>
    //       <div className='calculator'>
    //         <form>
    //           <div className='display'>
    //             <input type="text" value={value} readOnly />
    //           </div>
    //           <div>
    //             <input type="button" value='AC' onClick={clear_button} />
    //             <input type="button" value='DE' onClick={delete_button}/>
    //             <input type="button" value='.' onClick={display}/>
    //             <input type="button" value='/' onClick={display}/>
    //           </div>   
    //           <div>
    //             <input type="button" value='7' onClick={display}/>
    //             <input type="button" value='8' onClick={display}/>
    //             <input type="button" value='9' onClick={display}/>
    //             <input type="button" value='*' onClick={display}/>
    //           </div>  
    //           <div>
    //             <input type="button" value='4' onClick={display}/>
    //             <input type="button" value='5' onClick={display}/>
    //             <input type="button" value='6' onClick={display}/>
    //             <input type="button" value='-' onClick={display}/>
    //           </div> 
    //           <div>
    //             <input type="button" value='1' onClick={display}/>
    //             <input type="button" value='2' onClick={display}/>
    //             <input type="button" value='3' onClick={display}/>
    //             <input type="button" value='+' onClick={display}/>
    //           </div> 
    //           <div>
    //             <input type="button" value='00' onClick={display}/>
    //             <input type="button" value='0' onClick={display}/>
    //             <input type="button" value='=' onClick={sum} className='equal_button'/>
    //           </div> 
    //         </form>
    //       </div>
    //     </div>
    //   )
    // }

    // export default Day5_State_2;