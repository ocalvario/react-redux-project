 import React from 'react'

 const Cat = (props) => {

    let cat = props.cats[props.match.params.id - 1]
    console.log(cat)

    return (
        <li>
            {cat ? cat.name : null} - {cat ? cat.country : null} 
        </li>
    )

 }

 export default Cat