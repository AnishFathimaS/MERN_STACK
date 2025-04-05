import React from 'react'

function Cards1(props) {
  return (
    <>
      <div className="col-6">
        <div className="card mt-5 p-3 text-light" style={{backgroundColor : 'black',borderRadius : 10 +"px"}}>
          <div className="row">
            <div className="col-6">
              <img src={props.c1.img} alt='' width={200 + "px"} height="200px" style={{borderRadius : 50 +"%"}} />
            </div>
            <div className="col-6">
              <h2>{props.c1.name}</h2>
              <h3 className='text-primary'>{props.c1.role}</h3>
              <p>{props.c1.about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards1
