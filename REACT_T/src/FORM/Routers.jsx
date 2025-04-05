import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import FormResult from './FormResult'
import Form from './Form'

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/submit' element={<FormResult/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers