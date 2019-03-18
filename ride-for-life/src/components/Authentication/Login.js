import React, { Component } from 'react';
import { Link } from 'react-router-dom'


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
    const username = this.state.username;
    const password = this.state.password
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    window.location.reload();
  };

  render() {
    return (
      <form className="login">
        <div>Type Your Credentials</div>
        
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
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
         
        
      </form>
    );
  }
}

export default Login;