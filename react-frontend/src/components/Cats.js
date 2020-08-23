import React from 'react'
import {Route, Link} from 'react-router-dom' 
import Cat from './Cat'

const Cats = (props) => {

    return (
        <div>
            {props.cats.map(cat  => 
                <li  key={cat.id}> 
                <Link to={`/cats/${cat.id}`}> {cat.name} </Link> 
                </li> )}
        </div>
    )
}

export default Cats