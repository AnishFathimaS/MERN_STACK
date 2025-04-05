import React from 'react'
import Cards1 from './Cards1'
import img1 from './img/anis.jpeg'
// import img1 from './img/anis.jpeg'
import img2 from './img/anas.jpg'
import img3 from './img/sara.jpg'
import img4 from './img/shek.jpg'

function Cards() {
    const card1 = {
        img : img1,
        name : "Anis Fathima",
        role : 'Developer',
        about : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus repellat Sunt minus nulla quis eos.",
    }
    const card2 = {
        img : img2,
        name : "Anas Ahamed",
        role : 'Designer',
        about : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus repellat Sunt minus nulla quis eos."
    }
    const card3 = {
        img : img3,
        name : "Sara Beevi",
        role : 'Manager',
        about : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus repellat Sunt minus nulla quis eos."
    }
    const card4 = {
        img : img4,
        name : "Shek Dawood",
        role : 'Director',
        about : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis possimus repellat Sunt minus nulla quis eos."
    }
    return (
        <div className="container">
            <div className="row">
                <Cards1 c1 = {card1}/>
                <Cards1 c1 = {card2}/>
                <Cards1 c1 = {card3}/>
                <Cards1 c1 = {card4}/>
            </div>
        </div>
    )
}

export default Cards