import React from 'react'
import {connect} from 'react-redux'
import {deleteGadget} from '../actions/deleteGadget'
import '../App.css'


const Gadgets = (props) => {

    const handleDelete = (gadget) => {
        props.deleteGadget(gadget.id, gadget.cat_id)
    }

    return (
        <div className="App">
            <h2 className="gadtitle">Gadget List:</h2>
                <div className="toys">
                    {props.gadgets && props.gadgets.map(gadget => 
                    <ol key={gadget.id}> <h3><a href={gadget.link}>{gadget.name}</a></h3>
                    <img src={gadget.image_url} height="150" width="150"></img> <br/>
                    <img src={gadget.image_url} height="150" width="150" alt=""></img> <br/>
                    {gadget.description} <br/><br/>  
                    <button onClick={() => handleDelete(gadget)} className="delete">Delete</button></ol>
                    )}
                </div>
        </div>

    )

}


    export default connect(null, {deleteGadget}) (Gadgets)