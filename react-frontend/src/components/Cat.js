 import React from 'react'
import {Redirect} from 'react-router-dom'
import CatEdit from './CatEdit'
import '../App.css'

 import GadgetsContainer from '../containers/GadgetsContainer'

 const Cat = (props) => {

    let cat = props.cats[props.match.params.id - 1]

    return (
        <div className="App">
            <div className="block">
                <h1 className="cayat">
                    {cat ? cat.name : null} - {cat ? cat.country : null} </h1> <br/>
                    <img src={cat ? cat.image_url : null} height="200" width="200"></img>
                    <img src={cat ? cat.image_url : null} height="200" width="200" alt=""></img>
                
                <CatEdit cat={cat} />
                <GadgetsContainer cat={cat} />
                
            </div>
        </div>
        
    )

 }

 export default Cat