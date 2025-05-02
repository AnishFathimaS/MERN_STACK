// import React, { useState, useEffect } from 'react'
// import { Container, Row, Col, Card } from 'react-bootstrap'
// const Day7_Effect_2 = () => {

//     var [ data, setData ] = useState([])

//     const fetchData = async () => {
//         var url = await fetch('https://jsonplaceholder.typicode.com/users')
//         var data = await url.json();
//         setData(data);
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     return (
//         <>
//             <Container>
//                 <Row>
//                     { data.map((value, index) => {
//                     return(
//                         <Col lg={3}>
//                            <Card>
//                                 <Card.Body>
//                                     <p>Name :{value.name}</p>
//                                     <p>User Name{value.username}</p>
//                                     <p>User Email{value.email}</p>
//                                 </Card.Body>
//                            </Card>
//                         </Col>
//                         )
//                     })}
//                 </Row>
//             </Container>
//         </>
//     )
// }

// export default Day7_Effect_2

// import React, { useState, useEffect } from 'react'

// const Day7_Effect_2 = () => {

//     var [ input, setInput ] = useState('');
//     var [ weather, setWeather ] = useState('')

//     const fetchData = async () => {
//         var url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d4a760bc6e759aaa4958a53637de149b&units=metric`)
//         var data= await url.json();
//         setWeather(data);
//     }
    
//     useEffect(() => {
//         fetchData()
//     }, [input])

//     return (
//         <>
//             <input type="text" onChange={(e) => setInput(e.target.value)} />



//             { input == '' ? <h1>Search Weather...</h1> :
            
//             (weather && weather.main) ? 
//                 <div>
//                     <h1>{weather.name}</h1>
//                     <h1>Temperature : {weather.main.temp}°C</h1>
//                     <h1>Humidity : {weather.main.humidity}</h1>
//                     <h1>Condition : {weather.weather[0].description}</h1>
//                 </div>
//                 : 
//                 <h1>No Data Found</h1>
//             }
//         </>
//     )
// }

// export default Day7_Effect_2

import React, { useContext } from 'react'
import { myContext } from './weatherContext'

const Day7_Effect_2 = () => {

    const { weather, inputs, setInputs } = useContext(myContext);

    return (
        
        <>

            <input type="text" onChange={(e) => setInputs(e.target.value)} />

            { inputs == '' ? '' :
            ( weather && weather.main ) ?
                <>
                    <h1>{weather.name}</h1>
                    <h1>{weather.main.temp}</h1>
                </>
                : 
                <h1>No Data Found</h1>
            }

        </>
    )
}

export default Day7_Effect_2