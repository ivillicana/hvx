import React, { Component } from 'react';
import { connect } from 'react-redux'
import LogInForm from '../components/LogInForm'
import SignUpForm from '../components/SignUpForm'
import {createUser, logInUser} from '../actions/userActions'

class LogIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md">
            {this.props.error && <p className="error text-center">{this.props.error}</p>}
          </div>
        </div>
        <div className="row align-items-center">

          <div className="col-md-5">
            <div className="bs-component">
              <LogInForm logInUser={this.props.logInUser}/>
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
              <SignUpForm createUser={this.props.createUser}/>
            </div>
          </div>
        
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.user.error
})

export default connect(mapStateToProps, {createUser, logInUser})(LogIn);