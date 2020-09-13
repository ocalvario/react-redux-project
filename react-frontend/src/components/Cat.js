 import React from 'react'
 import {Redirect} from 'react-router-dom'

 import GadgetsContainer from '../containers/GadgetsContainer'

 const Cat = (props) => {

    let cat = props.cats[props.match.params.id - 1]

    return (
        <div>
            <h2>
                {cat ? cat.name : null} - {cat ? cat.country : null} 
            </h2>
            <GadgetsContainer cat={cat} />
        </div>
        
    )

 }

 export default Cat