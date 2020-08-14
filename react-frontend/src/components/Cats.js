import React from 'react'


const Cats = (props) => {

    return (
        <div>
            {props.cats.map(cat  => <li> key={cat.id } {cat.name} - {cat.country} </li> )}
        </div>
    )
}

export default Cats