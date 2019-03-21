import React, { Component } from 'react';

class DriverForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: {
        name: '',
        age: '',
        city: '',
        price: ''
      }
    };
  }

  addDriver = event => {
    event.preventDefault();
    this.setState({
      driver: {
        name: '',
        age: '',
        city: '',
        price: '',
      }
    });
    this.props.addDriver(event, this.state.driver)
  }

  handleInputChange = e => {
    e.persist()
    this.setState(prevState => ({
      driver:{
        ...prevState.driver,
        [e.target.name]: e.target.value
         }
      }));
  };

  render() {
    return (
      <div className="driverForm">
        <form onSubmit={this.addDriver}>
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.driver.name}
            name="name"
          />
          <input
            type='number'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.driver.age}
            name="age"
          />
          {/* <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="city"
            value={this.state.driver.city}
            name="city"
          /> */}
          {/* <input
            type='number'
            onChange={this.handleInputChange}
            placeholder="price"
            value={this.state.driver.price}
            name="price"
          /> */}
          <button type="submit">Add a Driver</button>
        </form>
      </div>
    );
  }
}

export default DriverForm;