import React from 'react'
import {Route} from 'react-router-dom' 
import Cat from './Cat'

const Cats = (props) => {

    return (
        <div>
            {props.cats.map(cat  => 
                <div  key={cat.id}> <Cat cat={cat} /> </div> )}
            <Route path='/cats/:id' render={() => <Cat cat={props.cat} />} />
        </div>
    )
}

export default Cats