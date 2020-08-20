 import React from 'react'

 const Cat = (props) => {

    return (
        <li>
            {props.cat.name} - {props.cat.country}
        </li>
    )

 }

 export default Cat