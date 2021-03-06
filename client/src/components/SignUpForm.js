import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class SignUpForm extends Component {
  state = {
    passwordError: undefined,
    user: {
      signUpName: '',
      signUpEmail: '',
      signUpPassword: '',
      signUpPasswordConfirmation: '',
      signUpCity: ''
    }
  }

  handleOnChange = (event) => {
    event.persist()
    this.setState({
      user: {
        ...this.state.user,
        [event.target.id]: event.target.value
      }
    }, () => {
      if (event.target.id === "signUpPasswordConfirmation"){
        if (this.state.user.signUpPasswordConfirmation !== this.state.user.signUpPassword){
          this.setState({passwordError: "Passwords must match"})
        } else {
          this.setState({passwordError: undefined})
        }
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.state.user)
    this.setState({
      user: {
        signUpName: '',
        signUpEmail: '',
        signUpPassword: '',
        signUpPasswordConfirmation: '',
        signUpCity: ''
      }  
    })
    if (localStorage.getItem("user")){
      this.props.history.push("/");
    }
    
  }
  render() {
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Sign up for an account</legend>
            {this.state.passwordError && <p>{this.state.passwordError}</p>}

            <div className="form-group">
              <label htmlFor="signUpName">Name</label>
              <input type="text" className="form-control" id="signUpName" placeholder="Enter Full Name" value={this.state.signUpName} onChange={this.handleOnChange}/>
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="signUpCity" placeholder="Enter City" value={this.state.signUpCity} onChange={this.handleOnChange}/>
            </div>
            
            <div className="form-group">
              <label htmlFor="signUpEmail">Email address</label>
              <input type="email" className="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.signUpEmail} onChange={this.handleOnChange}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="signUpPassword">Password</label>
              <input type="password" className="form-control" id="signUpPassword" placeholder="Password" value={this.state.signUpPassword} onChange={this.handleOnChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="signUpPasswordConfirmation">Confirm Password</label>
              <span className="password-error">{this.state.passwordError} </span>
              <input type="password" className="form-control" id="signUpPasswordConfirmation" placeholder="Confirm Password" value={this.state.signUpPasswordConfirmation} onChange={this.handleOnChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </fieldset>
        </form>
      </React.Fragment>
    )
  }
}
export default withRouter(SignUpForm)