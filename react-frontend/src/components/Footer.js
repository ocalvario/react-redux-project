import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const Footer = () => {

  return (
    <div className="App">
        <div className="footer">
        Other Cool Cats: <Link to='/cats' style={{paddingRight: '10px'}}>Instagram  </Link>
        More Gadgets: <Link to='/cats/new'> Amazon</Link>
        </div>
    </div>

  )
}

export default Footer