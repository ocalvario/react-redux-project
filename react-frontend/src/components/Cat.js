 import React from 'react'
import {Redirect} from 'react-router-dom'
import CatEdit from './CatEdit'

 import GadgetsContainer from '../containers/GadgetsContainer'

 const Cat = (props) => {

    let cat = props.cats[props.match.params.id - 1]

    return (
        <div>
            <h1>
                {cat ? cat.name : null} - {cat ? cat.country : null} <br/>
                <img src={cat ? cat.image_url : null} height="200" width="200"></img>
            </h1>
            <CatEdit cat={cat} />
            <GadgetsContainer cat={cat} />
            
        </div>
        
    )

 }

 export default Cat