import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      fullName: '',
      city: '',
      age: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

//   handleLoginSubmit = e => {
//     const username = this.state.username;
//     const password = this.state.password
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);
//     window.location.reload();
//   };

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
            placeholder="Full Name"
            name="password"
            value={this.state.fullName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="City"
            name="City"
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <br />
          <button>
            Sign Up
          </button>
          <Link to='/'><button>
            Back To LogIn
          </button></Link>
         
        
      </form>
    );
  }
}

export default SignUp;