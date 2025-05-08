import React from 'react'
import Form from './Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form_Submit from './Form_Submit'
import Home from './Home'
import Protect from './Protect'

const Router = () => {
  return (
        <Routes>
          <Route path='/' element={<Form />}/>
          <Route path='/submit' element={<Form_Submit/>}/>
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/home' element={<Protect><Home /></Protect>} />
        </Routes>
  )
}

export default Router