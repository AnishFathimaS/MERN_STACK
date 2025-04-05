import React, { useState } from 'react'
import img1 from './Imgs/img-1.png';
// import img2 from './Imgs/img-2.png';
// import img3 from './Imgs/img-3.png';
// import img4 from './Imgs/img-4.png';
// import img5 from './Imgs/img-5.png';
// import img6 from './Imgs/img-6.png';


function Img() {

    var [img, setImg] = useState(img1)

    function PreImg(){
        let str=img.split("img-",2)

        setImg(str[1])
    }

    function NxtImg(){
        setImg(img-1)
    }

    return (
        <div className='container mt-5'>
            <button className='btn btn-primary mx-5' onClick={PreImg}>Previous Image</button>
            <img src={img} alt="" height={300}/>
            <button className='btn btn-primary ml-5' onClick={NxtImg}>Next Image</button>
        </div>
    )
}

export default Img



