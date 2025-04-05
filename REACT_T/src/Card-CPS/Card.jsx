import React, { useState } from 'react'
import CardPage from './CardPage';

function Card() {

    const [color, setColor] = useState(["", "", "", "", "", "", ""]);

    function Fun(e){
        e.preventDefault();
        const name = e.target[0].value;
        const name_color = e.target[1].value;
        const role = e.target[2].value;
        const role_color = e.target[3].value;
        const des = e.target[4].value;
        const des_color = e.target[5].value;
        const card_bg = e.target[6].value;
    
        setColor([name, name_color, role, role_color, des, des_color, card_bg]);
    }
    return (
        <>
        <div className='container mt-4'>
            <form onSubmit={Fun} >
                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label >Enter Your Name</label>
                            <input type="text" class="form-control" placeholder='Enter Your Name'/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label >Enter Color</label>
                            <input type="text" class="form-control" placeholder='Enter Color'/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label >Enter Your Role</label>
                            <input type="text" class="form-control" placeholder='Enter Your Role'/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label >Enter Color</label>
                            <input type="text" class="form-control" placeholder='Enter Color'/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label >Enter Your Description</label>
                            <input type="text" class="form-control" placeholder='Enter Your Description'/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label >Enter Color</label>
                            <input type="text" class="form-control" placeholder='Enter Color'/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label >Enter Card Bg Color</label>
                            <input type="text" placeholder='Enter Card Bg Color' class="form-control"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <input type="submit" className='btn btn-primary btn-block' style={{marginTop : "32px"}}/>
                        </div>
                    </div>
                </div>   
            </form>
        </div>
        <CardPage content = {color}/>
        </>
    )
}

export default Card