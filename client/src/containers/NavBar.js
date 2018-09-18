import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render(){
    const activeLinkStyle = {
      color: '#fff'
    }
    return (
     <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Hudson Valley Xplorer</a>
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
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
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