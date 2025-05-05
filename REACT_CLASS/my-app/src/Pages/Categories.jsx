import React from 'react'
// import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'

const Categories = () => {

    const { categories } = useParams()

    return (
        <div>
            {/* <Navbar /> */}
            <h1>Categories : { categories }</h1>
        </div>
    )
}

export default Categories