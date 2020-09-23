import React from 'react'
import {connect} from 'react-redux'
import {deleteGadget} from '../actions/deleteGadget'



const Gadgets = (props) => {

    const handleDelete = (gadget) => {
        props.deleteGadget(gadget.id, gadget.cat_id)
    }

    return (
        <div>
            <h2>Gadget List:</h2>
            {props.gadgets && props.gadgets.map(gadget => 
                <ol key={gadget.id}> <h3><a href={gadget.link}>{gadget.name}</a></h3>
                 <img src={gadget.image_url} height="150" width="150"></img> <br/>
                 {gadget.description} <br/><br/>  
                 <button onClick={() => handleDelete(gadget)}>Delete</button></ol>
                )}
        </div>
    )

}


    export default connect(null, {deleteGadget}) (Gadgets)