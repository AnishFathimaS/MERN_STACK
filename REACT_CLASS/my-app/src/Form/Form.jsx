import React, { useContext } from 'react'
import { myContext } from './Context'

const Form = () => {

    const { submitFun, username, password, setUsername, setPassword } = useContext(myContext)

    return (
        <form className='container p-5' onSubmit={submitFun}>
            <input type="text" className='form-control' value={username} placeholder='Enter Username' onChange={e => setUsername(e.target.value)}/>
            <input type="text" className='form-control my-5' value={password}  onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
            <input type="submit" className='form-control btn btn-primary' />
        </form>
    )
}

export default Form 