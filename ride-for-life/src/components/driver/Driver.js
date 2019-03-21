import React from 'react'
import axios from 'axios'
import { apiUri } from '../../GlobalVariables'
import axiosConfig from '../../AxiosConfig'

class Driver extends React.Component {
    constructor() {
        super();
        this.state = {
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
            </div>
        )
    }
}

// const item = props.ipad.find(each => each.name === props.match.params.apple);
//   if (!item) {
//     return <h3> Loading Your Apple Product...</h3>;
//   }

export default Driver