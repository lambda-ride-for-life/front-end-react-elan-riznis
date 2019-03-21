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
        .get(`${apiUri}/api/users/${this.props.eachDriver.id}`, axiosConfig)
        .then(response => {this.setState({driver: response.data})})
        .catch(error => {this.setState({error: error})})
        // axios
        // .get(`${apiUri}/api/reviews`, axiosConfig)
        // .then(response => {this.setState({reviews: response.data})})
        // .catch(error => {this.setState({error: error})})
    }

    

    render() {
        const driverId = this.state.drivers.find(driverId => `${driverId.id}` === this.props.match.params.id)
        console.log(this.state.drivers)
        return(
            <div>

                {driverId.age}
                {/* {this.state.drivers.map(driver => (
                    <div className='list'>
                        {driver.name}

                    </div>
                ))} */}
                {this.state.reviews.map(review => (
                    <div className='list'>
                        {review.date}
                    </div>
                    
                ))}
            </div>
        )
    }
}

// const item = props.ipad.find(each => each.name === props.match.params.apple);
//   if (!item) {
//     return <h3> Loading Your Apple Product...</h3>;
//   }

export default Driver