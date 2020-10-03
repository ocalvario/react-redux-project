import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const NavigationBar = () => {

  return (
    <div className="App">
        <div className="navbar">
         <Link to='/cats' style={{paddingRight: '10px'}} className="vistied">Cats  </Link>
        <Link to='/cats/new'> Add Cat</Link>
        </div>
    </div>

  )
}

export default NavigationBar