// import React from 'react'

// function Day2_JS() {
//     var a = 'Hello'
//     var b = 'World'
//     return (
//         <>
//             <h1>{a} {b}</h1>
//         </>
//     )
// }

// export default Day2_JS

// import React from 'react'

// const Day2_JS = () => {
//     var a = 10;
//     var b = 20;
//     return (
//         <>
//             <h1>{a} + {b} = {a + b} </h1>
//         </>
//     )
// }

// export default Day2_JS

// import React from 'react'

// const Day2_JS = () => {
//     var arr = ['html', 'css', 'bootstrap', 'javascript']
//     return (
//         <>
//             <h1>{arr[0]}</h1>
//             <h1>{arr[1]}</h1>
//             <h1>{arr[2]}</h1>
//             <h1>{arr[3]}</h1>
//         </>
//     )
// }

// export default Day2_JS

// import React from 'react'

// const Day2_JS = () => {
//     var arr = ['html', 'css', 'bootstrap', 'javascript', 'html']
//     return (
//         <>
//             {arr.map((value, index)=>{
//                 return(
//                     <h1 key={index}>{value}</h1>
//                 )
//             })}
//         </>
//     )
// }

// export default Day2_JS

// import React from 'react'

// const Day2_JS = () => {
//     var obj = {
//         name : 'anu',
//         age : 20,
//         place : 'trichy'
//     }
//     return (
//         <>
//             <h1>{obj.place}</h1>
//         </>
//     )
// }

// export default Day2_JS

// import React from 'react'

// const Day2_JS = () => {
//     var nested_obj = {
//         name : 'anu',
//         age : 25,
//         place : {
//             doorno : 8,
//             street : 'abc street',
//             city : {
//                 state : 'tamilnadu'
//             }
//         }
//     }
//     return (
//         <>
//             <h1>{nested_obj.place.city.state}</h1>
//         </>
//     )
// }

// export default Day2_JS

// import React from 'react'

// const Day2_JS = () => {
//     var json_obj = [
//         {
//             name : 'anu',
//             age : 20,
//             place : 'trichy'
//         },
//         {
//             name : 'abi',
//             age : 25,
//             place : 'madurai'
//         },
//         {
//             name : 'hari',
//             age : 22,
//             place : 'chennai'
//         },
//     ]
//     return (
//         <>
//             <h1>{json_obj[0].name}</h1>
//             <h1>{json_obj[1].name}</h1>
//             <h1>{json_obj[2].name}</h1>
//         </>
//     )
// }

// export default Day2_JS

// import React from 'react'

// const Day2_JS = () => {
//     var json_obj = [
//         {
//             name : 'anu',
//             age : 20,
//             place : 'trichy'
//         },
//         {
//             name : 'abi',
//             age : 25,
//             place : 'madurai'
//         },
//         {
//             name : 'hari',
//             age : 22,
//             place : 'chennai'
//         },
//     ]
//     return (
//         <>
//             {json_obj.map((value, index) => {
//                 return(
//                     <h1 key={index}>{value.name}</h1>
//                 )
//             })}
//         </>
//     )
// }

// export default Day2_JS

// import React from 'react'

// const Day2_JS = () => {
    
//     function fun(){
//         var a = 10;
//         var b = 20;
//         return(
//             <h1>{(a>b) ? 'true' : 'false'}</h1>
//         )
//     }

//     return(
//         fun()
//     )

// }

// export default Day2_JS

// import React from 'react'

// const Day2_JS = () => {
  
//     async function fun(){
//         var my_url = await fetch('https://jsonplaceholder.typicode.com/users');
//         var my_data = await my_url.json();
//         {my_data.map((value, index) => {
//             return(
//                 console.log(value.phone)
//             )
//         })}        
//     }
//     fun()

// }

// export default Day2_JS