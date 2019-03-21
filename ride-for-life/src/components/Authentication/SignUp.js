import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Input } from '../Styled-Components/Components'
import axios from 'axios'
import { apiUri } from '../../GlobalVariables'



class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fullName: '',
      city: '',
      age: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignUpSubmit = e => {
    e.preventDefault()
    const {username, password} = this.state;
    const registerInfo = {username, password}
    // const password = this.state.password;
    axios 
    .post(`${apiUri}/api/auth/register`, registerInfo)
    .then(response => {
      // localStorage.setItem(response)
      console.log(response)
    })
    .catch(error => console.log(error))
    // localStorage.setItem('username', username);
    // localStorage.setItem('password', password);
    // window.location.reload();
  };

  render() {
    return (
      <Form className="login">
        <div>Type Your Credentials</div>
        
          <Input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            placeholder="City"
            name="City"
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          <Input
            type="number"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <br />
          <button onClick={this.handleSignUpSubmit}>
            Sign Up
          </button>
          <Link to='/'><button>
            Back To LogIn
          </button></Link>
         
        
      </Form>
    );
  }
}

export default SignUp;