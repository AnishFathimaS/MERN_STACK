// import React, { useState, useEffect } from 'react'
// import { Container, Card, Row, Col } from 'react-bootstrap'

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
//                     {data.map((value, index) => {
//                         return(
//                             <Col lg={3} md={6} key={index}>
//                                 <Card className='my-3'>
//                                     <Card.Body>
//                                         <p><b>Name : </b> {value.name}</p>
//                                         <p><b>User Name : </b> {value.username}</p>
//                                         <p><b>User Email : </b> {value.email}</p>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         )
//                     })}
//                 </Row>
//             </Container>
//         </>
//     )
// }

// export default Day7_Effect_2


import React, { useState, useEffect } from 'react'

const Day7_Effect_2 = () => {

    var [ input, setInput ] = useState('');
    var [ weather, setWeather ] = useState('');

    const fetchWeatherData = async () => {
        if (input === '') {
            setWeather('');
        }
        else{
            try{
                var url =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d4a760bc6e759aaa4958a53637de149b&units=metric`)
                var data = await url.json();
                console.log(data);
                
                setWeather(data);
            }
            catch(error){
                console.error('Error Fetching Data', error)
            }
        }
    }

    useEffect(() => {
        fetchWeatherData()
    }, [input])

    return (
        <>
            <input type="text" onChange={(e) => {setInput(e.target.value)}}/>
            {
                input === '' 
                ? null 
                : ( weather && weather.main ) 
                ? ( <>
                        <h1>{weather.name}</h1>
                        <h1>Temperature : {weather.main.temp}°C </h1>
                        <h1>Humidity : {weather.main.humidity} %</h1>
                        <h1>Wind : {weather.wind.speed} m/s</h1>
                        <h1>Condition: {weather.weather[0].description}</h1>
                    </>
                ) 
                : ( <h1>No Data Found</h1> )
            }
        </>
    )
}

export default Day7_Effect_2