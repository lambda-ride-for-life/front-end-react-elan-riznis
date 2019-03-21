import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { apiUri } from '../../GlobalVariables'
import axiosConfig from '../../AxiosConfig'
import Driver from './Driver'
import Drivers from './Drivers'
import AddUser from '../NavBar/AddUser'

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

    addDriver = (e, driver) => {
        e.preventDefault();
        axios
        .post()
    }

    // updateDriver = (e,) => {
    //     e.preventDefault()
    //     axios
    //     .put(`${apiUri}/api/drivers/${id}`)
    //     .then()
    //     .catch()
    // }




    render() {
        console.log(this.state.drivers)
        if (!this.state.drivers) {
            return <div> wait</div>
        }else{
            return (
                <div className='row'>
                    {this.state.drivers.map(eachDriver => (
                        
                    <div className='list' key={eachDriver.id}>
                        <Drivers eachDriver={eachDriver} deleteDriver={this.deleteDriver}/>
                        {/* <Driver eachDriver={eachDriver} /> */}
                        {/* <AddUser eachDriver={eachDriver} /> */}
                    </div>))}
                    
                </div>
            )
        }
        
    }
    
}

export default DriverList