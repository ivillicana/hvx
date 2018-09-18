import React, { Component } from 'react';
import LogInForm from '../components/LogInForm'
import SignUpForm from '../components/SignUpForm'

class LogIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-5">
            <div className="bs-component">
              <LogInForm />
            </div>
          </div>

          <div className="col-md-2">
            <div className="bs-component">
              <div className="text-center">
                <strong>OR</strong>
              </div>
            </div>
          </div>
          
          <div className="col-md-5">
            <div className="bs-component">
              <SignUpForm />
            </div>
          </div>
        
        </div>
      </div>
    )
  }
}

export default LogIn;
