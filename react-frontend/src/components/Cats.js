import React from 'react'
import {Route, Link} from 'react-router-dom' 
import Cat from './Cat'

const Cats = (props) => {

    return (
        <div>
            <h2>Cat Directory:</h2>
            {props.cats.map(cat  => 
                <ol  key={cat.id}> 
                <img src={cat.image_url} height="25" width="25"></img>
                <Link to={`/cats/${cat.id}`}> {cat.name} </Link> 
                </ol> )}
                <br></br>
        </div>

                
    )
}

export default Cats