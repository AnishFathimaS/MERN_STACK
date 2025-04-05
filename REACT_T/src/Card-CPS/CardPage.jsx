import React from 'react'
import profile_img from './anis.jpeg'

function CardPage(props) {

    const card_style = {
        background : props.content[6], 
        borderRadius: "10px", 
        marginLeft:"250px",
        width:'620px', 
    }

    const img_style = { 
        width: "200px", 
        height: "200px", 
        borderRadius: "50%" 
    }

    return (
        <div className="container">
            <div className="card p-4 mt-5 justify-content-around" style={card_style}>
                <div className="d-flex">
                    <div>
                        <img src={profile_img}  alt="" style={img_style} className='mr-4 mt-2'/>
                    </div>
                    <div>
                        <h1 style={{color: props.content[1] }}> 
                            {props.content[0]}
                        </h1>
                        <h2 style={{color: props.content[3] }}> 
                            {props.content[2]}
                        </h2>
                        <h3 style={{color: props.content[5],width:'345px'}}> 
                            {props.content[4]}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPage