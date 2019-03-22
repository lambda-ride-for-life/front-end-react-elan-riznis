import React from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import { apiUri } from '../../GlobalVariables'
import axiosConfig from '../../AxiosConfig'
import EditDriver from './EditDriver'

class Driver extends React.Component {
    constructor() {
        super();
        this.state = {
            activeDriver: null,
            driver: [],
            reviews: []
        }
        
    }

    componentDidMount() {
        axios
        .get(`${apiUri}/api/drivers/${this.props.match.params.id}`, axiosConfig)
        .then(response => this.setState({driver: response.data}))
        .catch(error => {this.setState({error: error})})
        // axios
        // .get(`${apiUri}/api/reviews`, axiosConfig)
        // .then(response => {this.setState({reviews: response.data})})
        // .catch(error => {this.setState({error: error})})
    }

    updateDriver = (e, driver) => {
        e.preventDefault()
        axios
        .put(`${apiUri}/api/drivers/${this.state.driver.id}`, driver, axiosConfig)
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
        // const driverId = this.state.drivers.find(driverId => `${driverId.id}` === this.props.match.params.id)
        console.log(this.state.driver)
        return(
            <div>

                    {/* <img src={this.state.driver.img} alt='profile' /> */}
                        <div className='flex'>
                            <h2><strong>Name:</strong> {this.state.driver.name}</h2>
                            <h2><strong>Age:</strong> {this.state.driver.age}</h2>
                        </div>
                        <div className='flex'>
                            <h2><strong>City:</strong> {this.state.driver.location}</h2>
                            <h2><strong>Avg Cost $:</strong> {this.state.driver.price}</h2>
                        </div>
                        <h2>{this.state.driver.email}</h2>
                        <h2>{this.state.driver.bio}</h2>
                        {/* <button onClick={e => this.setUpdateForm(e)}>Update Profile</button> */}
                        <EditDriver activeDriver={this.state.activeDriver} driver={this.state.driver} updateDriver={this.updateDriver}/>
            </div>
        )
    }
}

// const item = props.ipad.find(each => each.name === props.match.params.apple);
//   if (!item) {
//     return <h3> Loading Your Apple Product...</h3>;
//   }

export default Driver