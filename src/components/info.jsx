import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Info extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeUserName(event) {
    this.setState({
      username: event.target.value
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  async onSubmit(event) {
    event.preventDefault();

    const registered = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    await axios.post('http://localhost:4000/info/signup', registered);

    this.setState({
      username: '',
      email: '',
      password: ''
    });
    alert('Signup successfully');
  }

  render() {
    return (
      <div className="signup">
        <h1>Signup</h1>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit} method="post">
              <input
                className="form-control form-group"
                placeholder="username"
                type="text"
                value={this.state.username}
                onChange={this.changeUserName}
              />
              <input
                className="form-control form-group"
                placeholder="email"
                type="email"
                value={this.state.email}
                onChange={this.changeEmail}
              />
              <input
                className="form-control form-group"
                placeholder="password"
                type="password"
                value={this.state.password}
                onChange={this.changePassword}
              />
              <input type="submit" className="btn btn-danger btn-block" value="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
