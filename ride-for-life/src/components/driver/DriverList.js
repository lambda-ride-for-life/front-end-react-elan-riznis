import React from 'react'
import axios from 'axios'
import { apiUri } from '../../GlobalVariables'
import axiosConfig from '../../AxiosConfig'
import Drivers from './Drivers'


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
        .get(`${apiUri}/api/drivers`, axiosConfig)
        .then(response => {this.setState({drivers: response.data})})
        .catch(error => {this.setState({error: error})})
    }

    // componentDidUpdate(prevState) {
    //     if (prevState.drivers !== this.state.drivers) {
    //          axios
    //     .get(`${apiUri}/api/drivers`, axiosConfig)
    //     .then(response => {this.setState({drivers: response.data})})
    //     .catch(error => {this.setState({error: error})})
    //     }
    // }
    deleteDriver = (e, id) => {
        e.preventDefault()
        axios
        .delete(`${apiUri}/api/drivers/${id}`, axiosConfig)
        
        .then(response => {
            console.log(response)
            this.setState({drivers: response.data})})
        .catch(error => console.log(error))
        this.props.history.push('/list')
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