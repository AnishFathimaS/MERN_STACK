import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='p-5 d-flex justify-content-between'>
        <div>
            <h1>Logo</h1>
        </div>
        <div className='d-flex gap-5'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    </div>
  )
}

export default Navbar 