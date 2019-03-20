import React from 'react'
import drivers from '../../data'

class DriverList extends React.Component {
    constructor() {
        super();
        this.state ={
            drivers: []
        }
    }

    componentDidMount() {
        this.setState({ drivers: drivers})
    }
    render() {
        return (
            <div>
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