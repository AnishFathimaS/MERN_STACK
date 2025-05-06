import React, { useContext } from 'react'
import { myContext } from './Context'

const Form_Submit = () => {

    const { username, password, navigate } = useContext(myContext)

    return (
        <>
            <h1>Login Successfully !</h1>
            <p>Username : {username}</p>
            <p>Password : {password}</p>

            <button className='btn btn-primary' onClick={() => navigate('/home')}>Go to Home</button>
        </>
    )
}

export default Form_Submit


