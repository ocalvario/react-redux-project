import React from 'react'
import Cat from './Cat'

const Cats = (props) => {

    return (
        <div>
            {props.cats.map(cat  => 
                <div  key={cat.id}> <Cat cat={cat} /> </div> )}
        </div>
    )
}

export default Cats