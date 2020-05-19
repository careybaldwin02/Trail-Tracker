import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: use data-attributes for easier E2E testing

    return (
      <div className="container">

        <div className="login">
          <div className="perptrac">
            <div className="title-logo">
              <h1>TrailTracker </h1>
              <i class="fas fa-map-pin faa-pulse animated"></i>
              {/* <i class="fas fa-map-marker-alt faa-pulse animated"> </i> */}
              {/* <i className="fas fa-globe-americas faa-pulse animated"></i> */}
              {/* <i className="fab fa-product-hunt faa-pulse animated"></i> */}
            </div>
          </div>
        </div>


        <div className="Login">
            {/* <div className="infection-control">
            <Link to={`/ic`}>
                <button
                  type="submit"
                  value="Log In"
                  data-test="submit">TrailTracker for Infection Control
                </button>
              </Link>

            </div> */}

            <div className="login-group">
              {/* ---------------- change this to allow access ---------------------*/}
              <Link to={`/main`}>
                <button
                  type="submit"
                  value="Log In"
                  data-test="submit">Enter Demo Site
                </button>
              </Link>
              <div>
                <iframe src="https://drive.google.com/file/d/1Q6BZ4dEatNZFja__DSg20WSkCL5Cmzi4/preview" width="440" height="360"></iframe>
              </div>

              {/* <button 
          type="submit" 
          value="Log In" 
          data-test="submit">Register
          </button> */}
            <div className="dev-team-link">
              <Link to={"development-team"}>
                <p>Development Team Info.</p>
              </Link>
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default LoginPage;