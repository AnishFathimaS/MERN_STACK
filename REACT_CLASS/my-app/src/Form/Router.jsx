import React from 'react'
import Form from './Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form_Submit from './Form_Submit'

const Router = () => {
  return (
        <Routes>
            <Route path='/' element={<Form />}/>
            <Route path='/submit' element={<Form_Submit/>}/>
        </Routes>
  )
}

export default Router