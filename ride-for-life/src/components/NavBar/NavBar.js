import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <div className='nav'>
            <h1>Ride For Life</h1>
            <div className='navLink'>
                <p><NavLink to='/adduser' style={{ textDecoration: 'none', color: 'white' }}>add</NavLink></p>
                <p><NavLink to='/list' style={{ textDecoration: 'none', color: 'white'}}>home</NavLink></p>
            </div>
        </div>
    )
}

export default NavBar