import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { nav_bars } from './Components/Valuees';
import Error from './Pages/Error';

function Routers() {
  return (
    <>
        <BrowserRouter>
            <Routes path='/'>
              <Route index element={<Home/>}/>
              <Route path={nav_bars[0]} element={<Home/>}/>
              <Route path={nav_bars[1]} element={<About/>}/>
              <Route path={nav_bars[2]} element={<Contact/>}/>
              <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routers
