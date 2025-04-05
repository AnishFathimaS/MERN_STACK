import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Image from '../FORM/assets/anis.jpeg'

const Form = () => {

    const nav = useNavigate()

    const [Data, setData] = useState({
        name : '',
        age : '',
        from : ''
    })

    const [Img, setImg] = useState(Image)

    const ChangeFun = (e) => {
        const {name, value} = e.target
        setData((e)=>{
            return {
                ...e,[name]:value
            }
        })
    }

    const SubmitFun = (e) => {
        e.preventDefault();
        console.log(Data);
        nav('/submit', {state : {MyData : Data}})
    }

    return (
        <Container className='mt-5'>

            <form onSubmit={SubmitFun}>
                <input onChange={ChangeFun} required type="text" value={Data.name} name='name'/> <br/> <br/>

                <input onChange={ChangeFun} required type="number" value={Data.age} name='age'/> <br/> <br/>

                <input onChange={ChangeFun} required type="text" value={Data.from} name='from'/>

                <input onChange={(e)=>{setImg(URL.createObjectURL(e.target.files[0]))}} required type='file' id='img' hidden/> <br/> <br/>

                <label htmlFor="img">
                    <img src={Image} alt="" height={200}/>
                </label>
                
                <br/> <br/> 

                <input type="submit" />
            </form>

        </Container>
    )
}

export default Form