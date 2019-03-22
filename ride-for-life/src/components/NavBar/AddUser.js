import React from 'react'
import axios from 'axios'
import { apiUri } from '../../GlobalVariables'
import axiosConfig from '../../AxiosConfig'
import DriverForm from './DriverForm'


class AddUser extends React.Component{
    constructor() {
        super();
        this.state ={
           activeDriver: null,
           driver: [],
           error: ''
        }
    }


    addDriver = (driver) => {
       
        axios
        .post(`${apiUri}/api/drivers/`, driver, axiosConfig)
        .then(response => {console.log(response) 
            this.setState({driver: response.data})})
        .catch(error => {console.log(error.message)
            console.log(driver)
            console.log(axiosConfig)
            this.setState({error: error})})
    }

    updateDriver = (e, driver) => {
        e.preventDefault()
        .put(`${apiUri}/api/drivers/${driver.id}`, driver, axiosConfig)
        .then(response => {
            this.setState({
                activeDriver: null,
                driver: response.data
            })
            this.props.history.push('/list')
        })
        .catch(error => {this.setState({error: error})})
    }

    setUpdateForm = (e, driver) => {
        e.preventDefault();
        this.setState({
            activeDriver: driver
        });
        this.props.history.push('/adduser')
    }

    


    render() {

        return(
            <DriverForm addDriver={this.addDriver} updateDriver={this.updateDriver} activeDriver={this.state.activeDriver}/>
        )
    }
}

export default AddUser