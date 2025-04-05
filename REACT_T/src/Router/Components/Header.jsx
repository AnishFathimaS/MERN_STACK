import React from 'react'
import { nav_bars } from './Valuees'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
       { nav_bars.map ((e) =>{
        return <Link to={'/' + e}> {e} </Link>
       })}
    </>
  )
}

export default Header