import React, {useEffect, useState} from 'react'

function Effect() {

    const [state, setState] = useState({});

    useEffect(() => {
        
        (async function Myfun(){
            const url = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = (await url.json());
            setState(data);
        }())

    },[]);

    return(
        <>
            {(state.length !== undefined) ? state.map((e)=>{
                return <h1 key={e.id}>{e.title}</h1>
            }) : 'Loading'}
            
        </>
    )

}

export default Effect