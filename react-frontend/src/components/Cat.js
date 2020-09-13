 import React from 'react'
 import {Redirect} from 'react-router-dom'

 const Cat = (props) => {

    let cat = props.cats[props.match.params.id - 1]

    return (
        <h2>
            {cat ? cat.name : null} - {cat ? cat.country : null} 
        </h2>
        
    )

 }

 export default Cat