import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
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
                to="/login"
                exact
                activeStyle={activeLinkStyle}
                ><span className="nav-link">Log In</span></NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
     </React.Fragment>
    )
  }
}

export default NavBar