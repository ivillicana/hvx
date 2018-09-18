import React, {Component} from 'react'

class SignUpForm extends Component {
  state = {
    signUpName: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpPasswordConfirmation: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //dispatch action
    this.setState({
      signUpName: '',
      signUpEmaill: '',
      signUpPassword: '',
      signUpPasswordConfirmation: ''
    })
  }
  render() {
    return(
      <React.Fragment>
        <form>
          <fieldset>
            <legend>Sign up for an account</legend>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="signUpName" placeholder="Enter Full Name" value={this.state.signUpName} onChange={this.handleOnChange}/>
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
              <input type="password" className="form-control" id="signUpPasswordConfirmation" placeholder="Confirm Password" value={this.state.signUpPasswordConfirmation} onChange={this.handleOnChange}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </fieldset>
        </form>
      </React.Fragment>
    )
  }
}

export default SignUpForm