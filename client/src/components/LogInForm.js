import React, {Component} from 'react'

class LogInForm extends Component {
  state = {
    logInEmail: '',
    logInPassword: '',
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
      logInEmail: '',
      logInPassword: ''
    })
  }
  render() {
    return(
      <React.Fragment>
      <form>
        <fieldset>
          <legend>Log In</legend>

          <div className="form-group">
            <label htmlFor="logInEmail">Email address</label>
            <input type="email" className="form-control" id="logInEmail" placeholder="Enter Email" value={this.state.logInEmail} onChange={this.handleOnChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="logInPassword">Password</label>
            <input type="password" className="form-control" id="logInPassword"placeholder="Password" value={this.state.logInPassword} onChange={this.handleOnChange}/>
          </div>

          <button type="submit" className="btn btn-primary">Log In</button>
        </fieldset>
      </form>
      </React.Fragment>
    )
  }
}

export default LogInForm