import React from 'react'
import {Link} from 'react-router-dom'

const NavigationBar = () => {

  return (
    <div>
      <Link to='/cats' style={{paddingRight: '10px'}}>Cats  </Link>
      <Link to='/cats/new'> Add Cat</Link>
    </div>

  )
}

export default NavigationBar