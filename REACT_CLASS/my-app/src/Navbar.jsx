import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate  = useNavigate()

  return (
    <div className='p-5 d-flex justify-content-between'>
        <div>
            <h1>Logo</h1>
        </div>
        <div className='d-flex gap-5'>
            <p onClick={() => navigate('/')}>Home</p>
            <p onClick={() => navigate('/contact')}>Contact</p>
            {/* <Link to='/'>Home</Link> */}
            <Link to='/about'>About</Link>
            {/* <Link to='/contact'>Contact</Link> */}
            <Link to='/shop'>Shop</Link>
        </div>
    </div>
  )
}

export default Navbar 