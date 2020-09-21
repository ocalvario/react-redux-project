import React from 'react'
import {connect} from 'react-redux'
import {deleteGadget} from '../actions/deleteGadget'



const Gadgets = (props) => {

    const handleDelete = (gadget) => {
        props.deleteGadget(gadget.id, gadget.cat_id)
    }

    return (
        <div>
            {props.gadgets && props.gadgets.map(gadget => 
                <li key={gadget.id}> {gadget.name} - {gadget.description}  <button onClick={() => handleDelete(gadget)}>Delete</button></li>
                )}
        </div>
    )

}


    export default connect(null, {deleteGadget}) (Gadgets)