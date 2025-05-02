import React, { createContext, useState, useEffect, } from 'react'

export const myContext = createContext();

const WeatherContext = ({children}) => {

    var [ inputs, setInputs ] = useState('')
    var [ weather, setWeather ] = useState('')

    var API_KEY = 'd4a760bc6e759aaa4958a53637de149b'

    const fetchData = async () => {
        var url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputs}&appid=${API_KEY}&units=metric`)
        var data = await url.json();
        setWeather(data)
    }

    useEffect(() => {
        fetchData()
    }, [inputs])

    const myContextValue = {
        weather,
        inputs,
        setInputs
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default WeatherContext