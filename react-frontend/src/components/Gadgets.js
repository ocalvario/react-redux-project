import React from 'react'

const Gadgets = (props) => {

    return (
        <div>
            {props.gadgets && props.gadgets.map(gadget => 
                <li key={gadget.id}> {gadget.name} - {gadget.description} </li>
                )}
        </div>
    )

}


    export default Gadgets