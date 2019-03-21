import React from 'react'
import axios from 'axios'
import { apiUri } from '../../GlobalVariables'
import axiosConfig from '../../AxiosConfig'
import DriverForm from './DriverForm'


class AddUser extends React.Component{
    constructor() {
        super();
        this.state ={
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
    


    render() {

        return(
            <DriverForm addDriver={this.addDriver}/>
        )
    }
}

export default AddUser