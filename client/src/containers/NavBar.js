import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {logOutUser} from '../actions/userActions'

class NavBar extends Component {

  logOut() {
    this.props.logOutUser()
    
  }

  render(){
    const activeLinkStyle = {
      color: '#fff'
    }
    return (
     <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <NavLink
          to="/"
          exact
          ><span className="navbar-brand">Hudson Valley Xplorer</span></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
              to="/"
              exact
              activeStyle={activeLinkStyle}
              ><span className="nav-link">Home</span></NavLink>
            </li>

            {localStorage.getItem('jwtToken') &&
              <React.Fragment>
              <li className="nav-item">
                <NavLink
                  to="/activities"
                  exact
                  activeStyle={activeLinkStyle}
                  ><span className="nav-link">Activities</span></NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink
                  to="/eat-drink"
                  exact
                  activeStyle={activeLinkStyle}
                  ><span className="nav-link">Eat & Drink</span></NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/neighborhood"
                  exact
                  activeStyle={activeLinkStyle}
                  ><span className="nav-link">Neighborhood</span></NavLink>
              </li>

              <li className="nav-item">
                <Link 
                  to="/"
                  onClick={() => this.logOut()}>
                <span className="nav-link">Log Out</span></Link>
              </li>
              </React.Fragment>
            }
          
            {!localStorage.getItem('jwtToken') && 
              <li className="nav-item">
                <NavLink
                  to="/login"
                  exact
                  activeStyle={activeLinkStyle}
                  ><span className="nav-link">Log In/Sign Up</span></NavLink>
              </li>
            }
          </ul>
          
        </div>
      </nav>
     </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  userToken: state.user.token
})

export default connect(mapStateToProps, {logOutUser})(NavBar)