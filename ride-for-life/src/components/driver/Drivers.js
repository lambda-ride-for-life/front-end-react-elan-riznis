import React from 'react'
import { NavLink } from 'react-router-dom'

const Drivers = props => {
    return(
        <div>
            {/* <img src={props.eachDriver.img} alt='profile' /> */}
                        <div className='flex'>
                            <h2><strong>Name:</strong> {props.eachDriver.name}</h2>
                            <h2><strong>Age:</strong> {props.eachDriver.age}</h2>
                        </div>
                        <div className='flex'>
                            <h2><strong>City:</strong> {props.eachDriver.location}</h2>
                            <h2><strong>Avg Cost $:</strong> {props.eachDriver.price}</h2>
                        </div>
                        <NavLink style={{ textDecoration: 'none' }} to={`/list/${props.eachDriver.id}`}>
                            <button>View</button>
                        </NavLink>
                        <button onClick={e => props.deleteDriver(e, props.eachDriver.id)}>delete</button>
        </div>
    )
}

export default Drivers