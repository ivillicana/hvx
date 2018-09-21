import React, {Component} from 'react'
import './footer.css'

class Footer extends Component {
  render(){
    return (
      <React.Fragment>
        <footer className="footer">
        <div className="container">
          <span className="text-muted">&copy; 2018 | Isaac Villicana</span>
        </div>
          
        </footer>
      </React.Fragment>
    )
  }
}

export default Footer