import React from 'react'
import {Link} from 'react-router-dom'
import RaitingButton from './RaitingButton'
import '../App.css'

const Cats = (props) => {


    return (

        <div className="App"> 
                <br/> <br/>
                <h2 className="directory">Cat Directory:</h2>
                {props.cats.map(cat  => 
                    <ol  key={cat.id} className="list"> 
                    <img src={cat.image_url} height="75" width="75" alt=""></img>
                    <Link to={`/cats/${cat.id}`}> {cat.name} </Link>
                    <RaitingButton id={cat.id} name={cat.name} /> 
                    <br/><br/>
                    </ol> )}
        </div>

                
    )
}

export default Cats