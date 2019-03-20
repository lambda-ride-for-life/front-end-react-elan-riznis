import React from 'react'
import axiosConfig from '../../AxiosConfig'
import axios from 'axios'
import { apiUri } from '../../GlobalVariables'

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
    render() {
        return (
            <div className='row'>
                {this.state.drivers.map(eachDriver => (
                <div className='list' key={eachDriver.id}>
                    <img src={eachDriver.img} alt='profile' />
                    <h2><strong>Name:</strong> {eachDriver.name}</h2>
                    <h2><strong>Age:</strong> {eachDriver.age}</h2>
                    <h2><strong>City:</strong> {eachDriver.city}</h2>
                    
                </div>))}
            </div>
        )
    }
    
}

export default DriverList