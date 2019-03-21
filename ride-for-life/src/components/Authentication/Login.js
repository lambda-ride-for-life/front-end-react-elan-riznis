import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Input } from '../Styled-Components/Components'
import { apiUri } from '../../GlobalVariables'
// import axiosConfig from '../../AxiosConfig'
import axios from 'axios'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    e.preventDefault()
    const {username, password} = this.state;
    const loginInfo = {username, password}
    // const password = this.state.password;
    axios 
    .post(`${apiUri}/api/auth/login`, loginInfo)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      this.props.history.push('/list')
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
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
          <button onClick={this.handleLoginSubmit}>
            Log In
          </button>
          <Link to='/signup'><button>
            sign up
          </button></Link>
         
        
      </Form>
    );
  }
}

export default Login;