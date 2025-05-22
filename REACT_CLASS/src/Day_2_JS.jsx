// import React from 'react'

// const Day_2_JS = () => {

//     var a = 'React'
//     var b = 'Javascript'

//     return (
//         <>
//             {/* <h1>{a}</h1> */}
//             {/* <h1>{b}</h1> */}

//             {/* <h1>{a}, {b}</h1> */}
//         </>
//     )
// }

// export default Day_2_JS


// import React from 'react'

// const Day_2_JS = () => {

//     var a = 10;
//     var b = 20

//     return (
//         <>
//             <h1>{a} + {b} = {a+b}</h1>
//         </>
//     )
// }

// export default Day_2_JS

// import React from 'react'

// const Day_2_JS = () => {

//     var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]

//     return (
//         <>
//             <h1>{arr}</h1>
//             <h1>{arr[0]}</h1>
//             <h1>{arr[1]}</h1>
//             <h1>{arr[2]}</h1>
//             <h1>{arr[3]}</h1>
//             <h1>{arr.length}</h1>
//         </>
//     )
// }

// export default Day_2_JS

// import React from 'react'

// const Day_2_JS = () => {

//     var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]

//     return (
//         <>
//             {arr.map((value, index) => (
//                 <h1 key={index}>{value}</h1>
//             ))}        
//         </>
//     )
// }

// export default Day_2_JS

// import React from 'react'

// const Day_2_JS = () => {

//     var obj = {
//         name : 'abinaya',
//         age : 25,
//         place : 'trichy'
//     }

//     return (
//         <>
//             <h1>{obj.name}</h1>
//             <h1>{obj.age}</h1>
//             <h1>{obj.place}</h1>
//         </>
//     )
// }

// export default Day_2_JS

// import React from 'react'

// const Day_2_JS = () => {

//     var json = [
//         {
//             name : 'abinaya',
//             age : 25,
//             place : 'trichy'
//         },
//         {
//             name : 'anu',
//             age : 20,
//             place : 'chennai'
//         },
//         {
//             name : 'siva',
//             age : 25,
//             place : 'madurai'
//         }
//     ]

//     return (
//         <>
//             {/* <h1>{json[0].age}</h1>
//             <h1>{json[1].age}</h1>
//             <h1>{json[2].age}</h1> */}

//             {/* {json.map((value, index) => (
//                 <h1 key={index}>{value.age}</h1>
//             ))} */}

//             {json.map((value, index) => {
//                 return(
//                     <h1 key={index}>{value.age}</h1>
//                 )
//             })}
//         </>
//     )
// }

// export default Day_2_JS

// import React from 'react'

// const Day_2_JS = () => {

//     var num = 10
//     return (
//         <>
//             { num >= 18 ? 'True' : 'False' }
//         </>
//     )
// }

// export default Day_2_JS

// import React from 'react'

// const Day_2_JS = () => {
  
//     async function fun(){
//         var url = await fetch('https://jsonplaceholder.typicode.com/users');
//         var data = await url.json();

//         data.map((value) => (
//             console.log(value.name)
//         ))
//     }
//     fun()

// }

// export default Day_2_JS