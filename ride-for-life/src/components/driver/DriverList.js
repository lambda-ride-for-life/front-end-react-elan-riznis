import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { apiUri } from '../../GlobalVariables'
import axiosConfig from '../../AxiosConfig'

class DriverList extends React.Component {
    constructor() {
        super();
        this.state ={
            drivers: [],
            error: ''
        }
    }

    componentDidMount() {
        axios
        .get(`${apiUri}/api/users`, axiosConfig)
        .then(response => {this.setState({drivers: response.data})})
        .catch(error => {this.setState({error: error})})
    }

    deleteDriver = (e, id) => {
        e.preventDefault()
        axios
        .delete(`${apiUri}/api/drivers/${id}`)
        .then(response => this.setState({drivers: response.data}))
        .catch(error => console.log(error))
        this.props.history.push('/list')
    }

    updateDriver = (e,) => {
        e.preventDefault()
        axios
        .put(`${apiUri}/api/drivers/${id}`)
    }




    render() {
        console.log(this.state.drivers)
        if (!this.state.drivers) {
            return <div> wait</div>
        }else{
            return (
                <div className='row'>
                    {this.state.drivers.map(eachDriver => (
                        
                    <div className='list' key={eachDriver.id}>
                        
                        <img src={eachDriver.img} alt='profile' />
                        <div className='flex'>
                            <h2><strong>Name:</strong> {eachDriver.name}</h2>
                            <h2><strong>Age:</strong> {eachDriver.age}</h2>
                        </div>
                        <div className='flex'>
                            <h2><strong>City:</strong> {eachDriver.location}</h2>
                            <h2><strong>Avg Cost $:</strong> {eachDriver.price}</h2>
                        </div>
                        <NavLink style={{ textDecoration: 'none' }} to={`/list/${eachDriver.id}`}>
                            <button>View</button>
                        </NavLink>
                        <button onClick={e => this.deleteDriver(e, eachDriver.id)}>delete</button>
                    </div>))}
                    
                </div>
            )
        }
        
    }
    
}

export default DriverList